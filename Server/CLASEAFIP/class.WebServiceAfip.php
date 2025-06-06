<?php
include('exceptionhandler.php');
include('wsaa.class.php');
include('wsfev1.class.php');

class WebServiceAfip{
///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////VARIABLES SEGUN EMPRESA////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

var	$path = 'C:/AppServ/www/BoxRetail/server/CLASEAFIP/'; 
var	$CUIT	=  30714862460;//cuit empresa emisora

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

var $Call;
var $Out;
var $Data;
var $UltIdInsert;

var $NroUltComp; // ultimo numero de comprobante autorizado
var $NroPtoVta; // el punto de venta
var $FechaComprobante; // fecha emision
var $TipoComprobante; // el punto de venta
var $ConceptoComp; // Productos: 1 ---- Servicios: 2 ---- Prod y Serv: 3
var $DocClienteTipo; // 80=CUIT -- 96 DNI --- 99 general cons final
var $DocClienteNro;  // 0 para consumidor final /SI ES DNI VA EL CAMPO DNI 7 SI ES CUIT EL CAMPO CUIT
var $impTotal=0;
var $tasaIva=0;
var $impNeto=0;
var $MonId;
var $MonCotiz;
var $ImpOpEx=null;//suma op exentas
var $ImpTrib=null;//suma otros triburtos
var $idAlicIva=null;// 5 para 21% ver resto

private $totIva;
private $arrDatosComp; // los datos a facturar
private $arrCompAsoc;// Comprobantes asociados (solo notas de crédito y débito):
private $arrOtrosTrib;// Detalle de otros tributos
private $arrDetIva;// Detalle de iva
private $CAENro;//Nro CAE obtenido
private $CAEFechaVenc;//Fecha Vencimiento CAE


function __construct(){}

function Iniciar(){

	if($this->impNeto>0 && $this->impTotal==0)$this->impTotal=$this->impNeto*$this->tasaIva;
	if($this->impNeto==0 && $this->impTotal>0) $this->impNeto=round($this->impNeto/(($this->tasaIva/100)+1),2);

	//$this->idAlicIva=5;// 5 para 21% ver resto
	$this->totIva=$this->impTotal-$this->impNeto;
 	$this->FechaComprobante=date('Ymd');
   
	$this->MapearDatos();
   
	//print_r($this);
	$this->GenerarComprobanteAfip(); 

}	


function GenerarComprobanteAfip(){


	$this->ObtenerTokenAcceso();// se genera el token d eacceso
	$wsfev1 = new WSFEV1($this->path,$this->CUIT);
	$wsfev1->openTA(); // se abre el token de acceso y se carga a la clase	

	$this->NroUltComp = $wsfev1->FECompUltimoAutorizado($this->NroPtoVta,$this->TipoComprobante);// el numero del ultimo comprobante aprobado para el tipo de comprobante solicitado
   
	$this->EnviarComprobante($wsfev1);

}	


function ObtenerTokenAcceso(){

   // se actualizan los archivos TA.xml y TRA.xml que son el token de acceso

	$wsaa = new WSAA('wsfe',$this->path);
	$fecha_ahora = date("Y-m-d H-i-s");
	$fecha_exp_TA = $wsaa->get_expiration();
	
	if ($fecha_exp_TA < $fecha_ahora) {
		if ($wsaa->generar_TA()) {
			$this->Out['TA']='Nuevo TA, válido hasta: '. $wsaa->get_expiration() .'<br>';
		} else {
			echo 'Error al obtener TA';
			exit;
		}
	} else {
		$this->Out['TA']='TA reutilizado, válido hasta: '. $wsaa->get_expiration() .'<br>';
	}
}	

function MapearDatos(){

	if($this->TipoComprobante==6){
		$this->idAlicIva=3;//3% => 0,6% => 1,10.5% => 4,21% => 5,27% => 6,5% => 8,2.5% => 9,0% => 33% => 0,6% => 1,10.5% => 4,21% => 5,27% => 6,5% => 8,2.5% => 9, 0% => 3
		$this->totIva=0;
		$this->impNeto=$this->impTotal;
	}
	if($this->TipoComprobante==1){
		$this->idAlicIva=5;//3% => 0,6% => 1,10.5% => 4,21% => 5,27% => 6,5% => 8,2.5% => 9,0% => 33% => 0,6% => 1,10.5% => 4,21% => 5,27% => 6,5% => 8,2.5% => 9, 0% => 3
	}


	
	$this->arrDatosComp['CbteTipo'] =$this->TipoComprobante;// Factura A: 1 --- Factura B: 6 ---- Factura C: 11
	$this->arrDatosComp['Concepto'] =$this->ConceptoComp; // Productos: 1 ---- Servicios: 2 ---- Prod y Serv: 3
	$this->arrDatosComp['DocTipo'] = $this->DocClienteTipo; // 80=CUIT -- 96 DNI --- 99 general cons final
	$this->arrDatosComp['DocNro'] = $this->DocClienteNro;  // 0 para consumidor final / importe menor a $1000 SI ES DNI VA EL CAMPO DNI 7 SI ES CUIT EL CAMPO CUIT
	$this->arrDatosComp['CbteFch'] = $this->FechaComprobante; // fecha emision de factura
	$this->arrDatosComp['ImpNeto'] = $this->impNeto; // Imp Neto
	$this->arrDatosComp['ImpTotConc'] = 0; // no gravado
	$this->arrDatosComp['ImpIVA'] =$this->totIva; // IVA liquidado
	$this->arrDatosComp['ImpTrib'] = 0; // otros tributos
	$this->arrDatosComp['ImpOpEx'] = 0; // operacion exentas
	$this->arrDatosComp['ImpTotal'] = $this->impTotal; // total de la factura. ImpNeto + ImpTotConc + ImpIVA + ImpTrib + ImpOpEx
	$this->arrDatosComp['FchServDesde'] = null; // solo concepto 2 o 3
	$this->arrDatosComp['FchServHasta'] = null; // solo concepto 2 o 3
	$this->arrDatosComp['FchVtoPago'] = null; // solo concepto 2 o 3
	$this->arrDatosComp['MonId'] = $this->MonId;// id de moneda 'PES'
	$this->arrDatosComp['MonCotiz'] =$this->MonCotiz; // Cotizacion moneda. Solo exportacion

	// Comprobantes asociados (solo notas de crédito y débito):
	$this->arrCompAsoc['Tipo'] = null;
	$this->arrCompAsoc['PtoVta'] = null;
	$this->arrCompAsoc['Nro'] = null;
	
	// Detalle de otros tributos
	$this->arrOtrosTrib['Id'] =1;
	$this->arrOtrosTrib['Desc'] = "";
	$this->arrOtrosTrib['BaseImp'] =0;
	$this->arrOtrosTrib['Alic'] = 0; 
	$this->arrOtrosTrib['Importe'] = 0;
	 
	// Detalle de iva

	$this->arrDetIva['Id'] =$this->idAlicIva; // Usar el ID válido obtenido
	$this->arrDetIva['BaseImp'] =$this->impNeto; 
	$this->arrDetIva['Importe'] =$this->totIva;

}	



function EnviarComprobante($wsfev1){

    if (!is_numeric($this->NroUltComp)) {
		echo "<br>Error al obtener el ultimo numero autorizado<br>";
		echo "Code: ", $wsfev1->Code, "<br>";
		echo "Msg: ", $wsfev1->Msg, "<br>";
		echo "Obs: ", $wsfev1->ObsCode, "<br>";
		echo "Msg: ", $wsfev1->ObsMsg, "<br>"; 
	} else {
		//echo "<br>FECompUltimoAutorizado: $nro <br>"; // no es necesario
		
		$nroComp = $this->NroUltComp + 1;
		$cae = $wsfev1->FECAESolicitar(
			$nroComp, // ultimo numero de comprobante autorizado mas uno 
			$this->NroPtoVta, // el punto de venta
			$this->arrDatosComp, // los datos a facturar
			$this->arrCompAsoc,
			$this->arrOtrosTrib,
			$this->arrDetIva
		);
	
		$this->Out['CAENro']= $cae['cae']; 
		$this->Out['CAEFechaVenc']=$cae['fecha_vencimiento'];
		$this->Out['NroComp']=$nroComp; 
		$this->Out['ProxNroComp']=$nroComp + 1; 

	} 

}	




}