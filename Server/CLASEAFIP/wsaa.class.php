<?php

class WSAA {

	const CERT = "keys/CERTIFICADO_AFIP.crt";        	# The X.509 certificate in PEM format. Importante setear variable $path
	const PRIVATEKEY = "keys/LLAVE_AFIP.key";  	# The private key correspoding to CERT (PEM). Importante setear variable $path
	//const CERT = "keys/CERTIFICADO_AFIP_TESTING.crt";     TESTING
	//const PRIVATEKEY = "keys/LLAVE_AFIP_TESTING.key";  	TESTING

	const PASSPHRASE = "";         				# The passphrase (if any) to sign
	const PROXY_ENABLE = false;
	//https://wsaahomo.afip.gov.ar/ws/services/LoginCms?WSDL // para obtener WSDL
	//const URL = "https://wsaahomo.afip.gov.ar/ws/services/LoginCms"; // homologacion (testing)

	CONST URL = "https://wsaa.afip.gov.ar/ws/services/LoginCms"; // produccion 
	
	const TA 	= "xml/TA.xml";        			# Archivo con el Token y Sign
	const WSDL 	= "wsaa.wsdl";      			# The WSDL corresponding to WSAA	
  
	private $path; //caso windows (no importa que las barras esten como en linux)

	public $error = '';
	private $client;	//Cliente SOAP
	private $service; 
	private $TA;
  
  	public function __construct($service,$path) 
	{
    $this->service=$service;    
	$this->path=$path;
    
    // seteos en php
    ini_set("soap.wsdl_cache_enabled", "0");    
    
    // validar archivos necesarios
    if (!file_exists($this->path.self::CERT)) $this->error .= " Failed to open ".self::CERT;
    if (!file_exists($this->path.self::PRIVATEKEY)) $this->error .= " Failed to open ".self::PRIVATEKEY;
    if (!file_exists($this->path.self::WSDL)) $this->error .= " Failed to open ".self::WSDL;
   
	
			if(!empty($this->error)) {
				throw new Exception('WSAA class. Faltan archivos necesarios para el funcionamiento');
			}
			
			try{

					$this->client = new SoapClient($this->path.self::WSDL, array(
								'soap_version'   => SOAP_1_2,
								'location'       => self::URL,
								'trace'          => 1,
								'exceptions'     => 0
								)
					);			
			
			}catch (Exception $e) {
			
				echo $e;
			}
			
	   
	}

	private function create_TRA()
	{
			$TRA = new SimpleXMLElement(
					'<?xml version="1.0" encoding="UTF-8"?>' .
					'<loginTicketRequest version="1.0">'.
					'</loginTicketRequest>');
			$TRA->addChild('header');
			$TRA->header->addChild('uniqueId', date('U'));
			$TRA->header->addChild('generationTime', date('c',date('U')-60));
			$TRA->header->addChild('expirationTime', date('c',date('U')+60));
			$TRA->addChild('service', $this->service);
			$TRA->asXML($this->path.'xml/TRA.xml');
	}
  
	/*
	* This functions makes the PKCS#7 signature using TRA as input file, CERT and
	* PRIVATEKEY to sign. Generates an intermediate file and finally trims the 
	* MIME heading leaving the final CMS required by WSAA.
	* 
	* devuelve el CMS
	*/
	private function sign_TRA()
	{
	
		$STATUS = openssl_pkcs7_sign($this->path . "xml/TRA.xml", $this->path . "xml/TRA.tmp", "file://" . $this->path.self::CERT,
			array("file://" . $this->path.self::PRIVATEKEY, self::PASSPHRASE),
			array(),
			!PKCS7_DETACHED
		);
		
		if (!$STATUS)
			throw new Exception("ERROR generating PKCS#7 signature");
		
		$inf = fopen($this->path."xml/TRA.tmp", "r");
		$i = 0;
		$CMS = "";
		while (!feof($inf)) { 
			$buffer = fgets($inf);
			if ( $i++ >= 4 ) $CMS .= $buffer;
		}
		
		fclose($inf);
		unlink($this->path."xml/TRA.tmp");
    
    return $CMS;
	}
  
	//Obtengo token y Sign

	private function call_WSAA($cms)
	{     
			$results = $this->client->loginCms(array('in0' => $cms));

			// para logueo
			file_put_contents($this->path."request-loginCms.xml", $this->client->__getLastRequest());
			file_put_contents($this->path."response-loginCms.xml", $this->client->__getLastResponse());

			if (is_soap_fault($results)) 
				throw new Exception("SOAP Fault: ".$results->faultcode.': '.$results->faultstring);

			return $results->loginCmsReturn;
	}
  
	// Array a XML
	private function xml2array($xml) 
	{    
	
		$json = json_encode( simplexml_load_string($xml));
		return json_decode($json, TRUE);
	}    
  
	//Genero TA
	public function generar_TA()
	{
			$this->create_TRA();
			
			$TA = $this->call_WSAA( $this->sign_TRA() );
			
			if (!file_put_contents($this->path.self::TA, $TA))
				throw new Exception("Error al generar al archivo TA.xml");

			$this->TA = $this->xml2Array($TA);
		
			return true;
	}
  
	//Expiracion del Tiket de Acceso TA
	public function get_expiration() 
	{    
	
	// si no esta en memoria abrirlo
	if(empty($this->TA)) {
		$TA_file = file($this->path.self::TA, FILE_IGNORE_NEW_LINES);
		if($TA_file) {
			$TA_xml = '';
			for($i=0; $i < sizeof($TA_file); $i++)
				$TA_xml.= $TA_file[$i];        
			$this->TA = $this->xml2Array($TA_xml);
			$r = $this->TA['header']['expirationTime'];
		} else {
			$r = false;
		}
	} else {
		$r = $this->TA['header']['expirationTime'];
	}
	$r = str_replace("T"," ",substr($this->TA['header']['expirationTime'],0,19)); 
	

    return $r;
	}
	
}
?>
