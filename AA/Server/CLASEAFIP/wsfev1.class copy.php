<?php
error_reporting(0);

class WSFEV1 {
	const CUIT 	=  30714862460;    # CUIT del emisor
	const TA 	= "xml/TA.xml";    # Ubicacion Ticket de Acceso
	const WSDL = "wsfev1.wsdl";    # WSFFEV1 WSDL
	const LOG_XMLS = true;         # For debugging purposes
	//const WSFEURL = "https://wswhomo.afip.gov.ar/wsfev1/service.asmx"; // homologacion wsfev1 (testing)
	const WSFEURL = "https://servicios1.afip.gov.ar/wsfev1/service.asmx"; // produccion  
	private $path = 'C:/AppServ/www/BoxRetail/server/CLASEAFIP/'; //caso windows (no importa que las barras esten como en linux)
	
	/*
	* manejo de errores
	*/
	public $error = '';
	public $ObsCode = '';
	public $ObsMsg = '';
	public $Code = '';
	public $Msg = '';
	

// Cliente SOAP
	private $client;
  	private $TA;
  
	
	public function __construct()
	{
    
      ini_set("soap.wsdl_cache_enabled", "0");    
	 
    // validar archivos necesarios
		if (!file_exists($this->path.self::WSDL)) $this->error .= " Failed to open ".self::WSDL;
		
		if(!empty($this->error)) {
			throw new Exception('WSFE class. Faltan archivos necesarios para el funcionamiento');
		} 
		try{
		 
			$this->client = new SoapClient($this->path.self::WSDL, array( 
						'soap_version' => SOAP_1_2,
						'location'     => self::WSFEURL,
						'exceptions'   => 0,
						'trace'        => 1)
			); 
			
        }catch (Exception $e) {	   
	     echo $e;
	    }
	   
	}
  
	// Chequea errores

	private function _checkErrors($results, $method)
	{
    if (self::LOG_XMLS) {
	
		file_put_contents($this->path."xml/request-".$method.".xml",$this->client->__getLastRequest());
		file_put_contents($this->path."xml/response-".$method.".xml",$this->client->__getLastResponse());

    }
    
    if (is_soap_fault($results)) {

		throw new Exception('WSFE class. FaultString: ' . $results->faultcode.' '.$results->faultstring);
    }
    
    if ($method == 'FEDummy') {return;}
    
    $XXX=$method.'Result';

	if (isset($results->$XXX->Errors)) {
		if ($results->$XXX->Errors->Err->Code != 0) {
			$this->error = "Method=$method errcode=".$results->$XXX->Errors->Err->Code." errmsg=".$results->$XXX->Errors->Err->Msg;
		}   	
	}
	// Asigna error a variable
	if ($method == 'FECAESolicitar') {
		if (isset($results->$XXX->FeDetResp->FECAEDetResponse->Observaciones)) {
			if (isset($results->$XXX->FeDetResp->FECAEDetResponse->Observaciones->Obs)) {
				$this->ObsCode = $results->$XXX->FeDetResp->FECAEDetResponse->Observaciones->Obs->Code;
				$this->ObsMsg = $results->$XXX->FeDetResp->FECAEDetResponse->Observaciones->Obs->Msg;
			}
			
			if (isset($results->$XXX->FeDetResp->FECAEDetResponse->Observaciones->Obs[0])) {
				$this->ObsCode = $results->$XXX->FeDetResp->FECAEDetResponse->Observaciones->Obs[0]->Code;
				$this->ObsMsg = $results->$XXX->FeDetResp->FECAEDetResponse->Observaciones->Obs[0]->Msg;
			}
		}
	}

    if (isset($results->$XXX->Errors)) {
        $this->Code = $results->$XXX->Errors->Err->Code;
        $this->Msg = $results->$XXX->Errors->Err->Msg;
        return $results->$XXX->Errors->Err->Code != 0 ? true : false;
    }

    return false;
	}

	
	//Abre TA
	public function openTA()
	{
	
	
	$this->TA = simplexml_load_file($this->path.self::TA);

	return $this->TA == false ? false : true;
	}
  
	//Funcion para solicitar ultimo comp autorizado

	public function FECompUltimoAutorizado($ptovta, $tipo_cbte)
	{

	$results = $this->client->FECompUltimoAutorizado(
		array('Auth'=>array('Token' => $this->TA->credentials->token,
							'Sign' => $this->TA->credentials->sign,
							'Cuit' => self::CUIT),
			'PtoVta' => $ptovta,
			'CbteTipo' => $tipo_cbte));

		
    $e = $this->_checkErrors($results, 'FECompUltimoAutorizado');

    return $e == false ? $results->FECompUltimoAutorizadoResult->CbteNro : false;
	} //end function FECompUltimoAutorizado
  
	/* Retorna el ultimo comprobante autorizado para el tipo de comprobante /cuit / punto de venta ingresado.*/ 

	public function recuperaLastCMP($ptovta, $tipo_cbte)
	{
	$results = $this->client->FERecuperaLastCMPRequest(
		array('argAuth' =>  array('Token' => $this->TA->credentials->token,
								'Sign' => $this->TA->credentials->sign,
								'cuit' => self::CUIT),
			'argTCMP' => array('PtoVta' => $ptovta,
								'TipoCbte' => $tipo_cbte)));
	$e = $this->_checkErrors($results, 'FERecuperaLastCMPRequest');
	
	return $e == false ? $results->FERecuperaLastCMPRequestResult->cbte_nro : false;
	} //end function recuperaLastCMP

	
	/*
	* Solicitud CAE y fecha de vencimiento 
	*/	
	public function FECAESolicitar($cbte, $ptovta, $regfe, $regfeasoc, $regfetrib, $regfeiva)
	{
/*
		$params = array( 
			'Auth' => 
			array( 'Token' => $this->TA->credentials->token,
					'Sign' => $this->TA->credentials->sign,
					'Cuit' => self::CUIT )
			);
		
		$response = $this->client->FEParamGetTiposIva($params);
		print_r($response);*/

		if ($cbte == "0") { // para 
			$cbte = "1";
			
		}


	$params = array( 
		'Auth' => 
		array( 'Token' => $this->TA->credentials->token,
				'Sign' => $this->TA->credentials->sign,
				'Cuit' => self::CUIT ), 
		'FeCAEReq' => 
		array( 'FeCabReq' => 
			array( 'CantReg' => 1,
					'PtoVta' => $ptovta,
					'CbteTipo' => $regfe['CbteTipo'] ),
		'FeDetReq' => 
		array( 'FECAEDetRequest' => 
			array(  'Concepto' => $regfe['Concepto'],
					'DocTipo' => $regfe['DocTipo'],
					'DocNro' => $regfe['DocNro'],
					'CbteDesde' => $cbte,
					'CbteHasta' => $cbte,
					'CbteFch' => $regfe['CbteFch'],
					'ImpNeto' => $regfe['ImpNeto'],
					'ImpTotConc' => $regfe['ImpTotConc'], 
					'ImpIVA' => $regfe['ImpIVA'],
					'ImpTrib' => $regfe['ImpTrib'],
					'ImpOpEx' => $regfe['ImpOpEx'],
					'ImpTotal' => $regfe['ImpTotal'], 
					'FchServDesde' => $regfe['FchServDesde'], //null
					'FchServHasta' => $regfe['FchServHasta'], //null
					'FchVtoPago' => $regfe['FchVtoPago'], //null
					'MonId' => $regfe['MonId'], //PES 
					'MonCotiz' => $regfe['MonCotiz'], //1 
					/*'Tributos' => 
						array( 'Tributo' => 
							array ( 'Id' =>  $regfetrib['id'], 
									'Desc' => $regfetrib['Desc'],
									'BaseImp' => $regfetrib['BaseImp'], 
									'Alic' => $regfetrib['Alic'], 
									'Importe' => $regfetrib['Importe'] ),
							), */
					'Iva' => 
						array ( 'AlicIva' => 
							array ( 'Id' => $regfeiva['Id'], 
									'BaseImp' => $regfeiva['BaseImp'], 
									'Importe' => $regfeiva['Importe'] ),
						), 
					), 
			), 
		), 
	);



	$results = $this->client->FECAESolicitar($params);
    $e = $this->_checkErrors($results, 'FECAESolicitar');

	//asigno respuesta 
	$resp_cae = $results->FECAESolicitarResult->FeDetResp->FECAEDetResponse->CAE;
	$resp_caefvto = $results->FECAESolicitarResult->FeDetResp->FECAEDetResponse->CAEFchVto;

	return $e == false ? Array( 'cae' => $resp_cae, 'fecha_vencimiento' => $resp_caefvto ): false;

	
	} //end function FECAESolicitar



	// Nuevo método para consultar un comprobante específico
	public function FECompConsultar($ptovta, $tipo_cbte, $nro_cbte)
	{
		$params = array(
			'Auth' => array(
				'Token' => $this->TA->credentials->token,
				'Sign' => $this->TA->credentials->sign,
				'Cuit' => self::CUIT
			),
			'FeCompConsReq' => array(
				'CbteTipo' => $tipo_cbte,
				'CbteNro' => $nro_cbte,
				'PtoVta' => $ptovta
			)
		);

		$results = $this->client->FECompConsultar($params);

		$e = $this->_checkErrors($results, 'FECompConsultar');
		return $e == false ? $results->FECompConsultarResult : false;
	}

	// Nuevo método para verificar si un cliente tiene otros tributos
	public function hasOtherTaxes($ptovta, $tipo_cbte, $nro_cbte)
	{
		$compInfo = $this->FECompConsultar($ptovta, $tipo_cbte, $nro_cbte);

		if ($compInfo && isset($compInfo->ResultGet->Tributos->Tributo)) {
			foreach ($compInfo->ResultGet->Tributos->Tributo as $tributo) {
				if ($tributo->Desc !== 'Impuesto a las Ganancias' && $tributo->Desc !== 'IVA') {
					return true;
				}
			}
		}
		return false;
	}



	
	
} // class

?>
