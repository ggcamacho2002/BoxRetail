<?php
include('../CLASEAFIP/class.WebServiceAfip.php');
include('class.AfipFacturaTicketImprimir.php');


class AfipFacturaTicket{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $CallEntidad;
var $idremito;

var $CuitPropio="30714862460";

var $NroUltComp; // ultimo numero de comprobante autorizado
var $NroComp; // ultimo numero de comprobante autorizado
var $NroPtoVta=9; // el punto de venta
var $ConceptoComp=1; // Productos: 1 ---- Servicios: 2 ---- Prod y Serv: 3
var $TipoComprobante;

var $idCliente; 
var $DocClienteTipo; // 80=CUIT -- 96 DNI --- 99 general cons final
var $DocClienteNro;  // 0 para consumidor final /SI ES DNI VA EL CAMPO DNI 7 SI ES CUIT EL CAMPO CUIT

var $impTotal;
var $tasaIva;
var $impNeto;
var $MonId;
var $MonCotiz;

var $arrDatosComp; // los datos a facturar
var $arrCompAsoc;// Comprobantes asociados (solo notas de crédito y débito):
var $arrOtrosTrib;// Detalle de otros tributos
var $arrDetIva;// Detalle de iva
var $CAENro;//Nro CAE obtenido
var $CAEFechaVenc;//Fecha Vencimiento CAE

var $Tabla='AfipFactura T0';
var $Joins='
		LEFT OUTER JOIN afipaliciva T1 ON T1.FacturaAfipId=T0.id
		LEFT OUTER JOIN afiptributos T2 ON T2.FacturaAfipId=T0.id
';


function __construct(){}

 function MapaBase(){
	$this->Map['id'] = 'T0.id';
	$this->Map['idcliente'] = 'T0.idcliente';
    $this->Map['CallEntidad'] = 'T0.CallEntidad'; //1 Productos ,2 Servicios , 3 Productos y Servicios 
    $this->Map['PuntoVenta'] = 'T0.PuntoVenta'; //1 Productos ,2 Servicios , 3 Productos y Servicios 
    $this->Map['Concepto'] = 'T0.Concepto'; //1 Productos ,2 Servicios , 3 Productos y Servicios 
    $this->Map['DocTipo'] = 'T0.DocTipo';// Factura A: 1 ,Factura B: 6 , Factura C: 11
    $this->Map['DocNro'] = 'T0.DocNro';// 0 para consumidor final / SI ES DNI VA EL CAMPO DNI 7 SI ES CUIT EL CAMPO CUIT
   // $this->Map['CbteDesde'] = 'T0.CbteDesde';
    //$this->Map['CbteHasta'] = 'T0.CbteHasta';
    $this->Map['CbteFch'] ='T0.CbteFch';	// fecha emision de factura
    $this->Map['ImpNeto'] = 'T0.ImpNeto';// Imp Neto
    $this->Map['ImpTotConc'] = 'T0.ImpTotConc';// no gravado
    $this->Map['ImpIVA'] = 'T0.ImpIVA';// IVA liquidado
    $this->Map['ImpTrib'] = 'T0.ImpTrib';// otros tributos
    $this->Map['ImpOpEx'] = 'T0.ImpOpEx';// operacion exentas , sino 0
    $this->Map['ImpTotal'] = 'T0.ImpTotal';// total de la factura. ImpNeto + ImpTotConc + ImpIVA + ImpTrib + ImpOpEx
	$this->Map['TasaIva'] = 'T0.TasaIva';
    //$this->Map['FchServDesde'] = 'T0.FchServDesde';// solo concepto 2 o 3
    //$this->Map['FchServHasta'] = 'T0.FchServHasta';// solo concepto 2 o 3
   // $this->Map['FchVtoPago'] = 'T0.FchVtoPago';// solo concepto 2 o 3
    $this->Map['MonId'] = 'T0.MonId';//peso argentino: 'PES'
    $this->Map['MonCotiz'] = 'T0.MonCotiz';// Cotizacion moneda. Solo exportacion sino 1
    $this->Map['idremito'] = 'T0.idremito';
    $this->Map['NroComprobante'] = 'T0.NroComprobante';

}	

 function MapaQuery(){

    $this->Map['id'] = 'T0.id';
    $this->Map['idcliente'] = 'T0.idcliente';
    $this->Map['Concepto'] = 'T0.Concepto';
    $this->Map['DocTipo'] = 'T0.DocTipo';
    $this->Map['DocNro'] = 'T0.DocNro';
	$this->Map['PuntoVenta'] = 'T0.PuntoVenta';
	$this->Map['NroComprobante'] = 'T0.NroComprobante';
	$this->Map['CallEntidad'] = 'T0.CallEntidad';
  //  $this->Map['CbteDesde'] = 'T0.CbteDesde';
   // $this->Map['CbteHasta'] = 'T0.CbteHasta';
    $this->Map['CbteFch'] = 'T0.CbteFch';
    $this->Map['ImpNeto'] = 'T0.ImpNeto';
    $this->Map['ImpTotConc'] = 'T0.ImpTotConc';
    $this->Map['ImpIVA'] = 'T0.ImpIVA';
    $this->Map['ImpTrib'] = 'T0.ImpTrib';
    $this->Map['ImpOpEx'] = 'T0.ImpOpEx';
    $this->Map['ImpTotal'] = 'T0.ImpTotal';
    //$this->Map['FchServDesde'] = 'T0.FchServDesde';
    //$this->Map['FchServHasta'] = 'T0.FchServHasta';
    //$this->Map['FchVtoPago'] = 'T0.FchVtoPago';
    $this->Map['MonId'] = 'T0.MonId';
    $this->Map['MonCotiz'] = 'T0.MonCotiz';	

	$this->Map['TasaIva'] = 'T0.TasaIva';

	$this->Map['AlicIvaId'] = 'T1.AlicIvaId';
    $this->Map['IvaBaseImp'] = 'T1.BaseImp';
    $this->Map['IvaImporte'] = 'T1.Importe';

	$this->Map['TributoId'] = 'T2.TributoId';
    $this->Map['TributoDesc'] = 'T2.Descripcion';
    $this->Map['TributoBaseImp'] = 'T2.BaseImp';
    $this->Map['TributoAlic'] = 'T2.Alic';
    $this->Map['TributoImporte'] = 'T2.Importe';
  
	$this->Map['idremito'] = 'T0.idremito';
	$this->Map['CallEntidad'] = null;
	$this->Map['Cae'] = null;
	$this->Map['CaeFechaV'] = null;
}	

function Buscar(){

	$this->MapaQuery();
			
	$cl=new Autoquery($this->Tabla);			
	$cl->Map=$this->Map;
	$cl->Joins=$this->Joins;
	$cl->SuperTablaQuery($this->Data);
	$this->Out=$cl->Out;
	$cl=null;
}

function BuscarById(){
		
	
	$this->MapaQuery();
	
	$cl=new Autoquery($this->Tabla);	
	$cl->Joins=$this->Joins;		
	$cl->Map=$this->Map;
	$cl->BuscarById($this->Data);
	$this->Out=$cl->Out;
	$cl=null;

}

function InsertOne(){

	$this->MapaBase();			
	$cl=new AutoMutation($this->Tabla);			
	$cl->Map=$this->Map;
	$cl->AutoInsertOne($this->Data);
	$this->Out=$cl->Out;
	$cl=null;

	$ultimoId=$this->Out->Ultimo_Id;

}	


function InsertOneByDocCliente($IdDocCliente,$CallEntidad){

	$this->CallEntidad=$CallEntidad;

			$sql="SELECT * FROM documentos_clie d WHERE d.`id`=$IdDocCliente;";

			$cl=new Database();
			$cl->Query($sql);	
			$doc=$cl->datos[0];
    		$cl=null;

			if($doc['tic_clave']==4)$this->TipoComprobante = 1;// Factura A: 1 --- Factura B: 6 ---- Factura C: 11
			if($doc['tic_clave']==5)$this->TipoComprobante = 6;// Factura A: 1 --- Factura B: 6 ---- Factura C: 11

			if($doc['cli_clave']==1){
				$this->DocClienteTipo= 99; // 80=CUIT -- 96 DNI --- 99 general cons final
				$this->DocClienteNro= 0;//0 para consumidor final/SI ES DNI VA EL CAMPO DNI 7 SI ES CUIT EL CAMPO CUIT
				$this->tasaIva=21;
				$this->idCliente=1;
			}else{
					$idCliente=$doc['cli_clave'];
					$this->idCliente=$idCliente;
					$sql="SELECT * FROM clientes c WHERE c.`id`=$idCliente;";

					$cl=new Database();
					$cl->Query($sql);	
					$cli=$cl->datos[0];
					$cl=null;

					switch($cli['cli_doctipo']){
						case 'DNI':$this->DocClienteTipo= 96;break;
						case 'CUIT':$this->DocClienteTipo= 80;break;
					}

					
					$this->DocClienteNro=$cli['cli_docnro'];
					$this->tasaIva=21;

			}

    		$this->idremito=$doc['dcl_idremito'];
    		$this->impTotal=$doc['dcl_total'];
			$this->impNeto=round($this->impTotal/($this->tasaIva/100+1),2);
			$this->MonId='PES';
			$this->MonCotiz=1;
			

	$this->InsertBdFacturaAfip();
	$OutFInal=$this->Out;
	$FacId=$this->Out->Ultimo_Id;
	
	
	$this->WebSrvFacturaAfip();
	$arrCae=$this->Out;	
	$this->UpBdFacturaAfipCAE($FacId,$arrCae);

	$this->Out=$OutFInal;
}	




function InsertBdFacturaAfip(){

	$totIva=$this->impTotal-$this->impNeto;
	$ImpTotConc=0;
	$ImpTrib=0;
	$ImpOpEx=0;
	
	$this->Data['SetFields'][0]['CallEntidad']=$this->CallEntidad;
	$this->Data['SetFields'][0]['idcliente']=$this->idCliente;
	$this->Data['SetFields'][0]['idremito']=$this->idremito;
	$this->Data['SetFields'][0]['PuntoVenta']=$this->NroPtoVta;
	$this->Data['SetFields'][0]['Concepto']=$this->ConceptoComp;
	$this->Data['SetFields'][0]['DocTipo']=$this->DocClienteTipo;
	$this->Data['SetFields'][0]['DocNro']=$this->DocClienteNro;

	$this->Data['SetFields'][0]['CbteFch']= date('Ymd');
	$this->Data['SetFields'][0]['ImpTotal']=$this->impTotal;
	$this->Data['SetFields'][0]['ImpNeto']=$this->impNeto;
	$this->Data['SetFields'][0]['ImpTotConc']=$ImpTotConc;
	$this->Data['SetFields'][0]['ImpIVA']=$totIva;
	$this->Data['SetFields'][0]['ImpTrib']=$ImpTrib;
	$this->Data['SetFields'][0]['ImpOpEx']=$ImpOpEx;
	$this->Data['SetFields'][0]['TasaIva']=$this->tasaIva;

	$this->Data['SetFields'][0]['MonId']=$this->MonId;
	$this->Data['SetFields'][0]['MonCotiz']=$this->MonCotiz;

	$this->MapaBase();			
	$cl=new AutoMutation($this->Tabla);
	$cl->Map=$this->Map;
	$cl->AutoInsertOne($this->Data);
	$this->Out=$cl->Out;

}	


function WebSrvFacturaAfip(){

	$cl=new WebServiceAfip();
	$cl->NroPtoVta=$this->NroPtoVta;
	$cl->FechaComprobante=date('Ymd');
	$cl->TipoComprobante=$this->TipoComprobante;
	$cl->ConceptoComp=$this->ConceptoComp;
	$cl->DocClienteTipo=$this->DocClienteTipo;
	$cl->DocClienteNro=$this->DocClienteNro;
	$cl->impTotal=$this->impTotal;
	$cl->tasaIva=$this->tasaIva;
	$cl->impNeto=$this->impNeto;
	$cl->ImpOpEx=null;//suma op exentas
	$cl->ImpTrib=null;//suma otros triburtos
	$cl->MonId=$this->MonId;
	$cl->MonCotiz=$this->MonCotiz;



	$cl->Iniciar();
	$this->Out=$cl->Out;
	$this->NroComp=$this->Out["NroComp"];

/*

	//para pruebas
	$this->Out=[];
	$this->Out["CAENro"]="74230837014613";
	$this->Out["CAEFechaVenc"]="20240618";
	$this->Out["NroComp"]=10;
	$this->Out["ProxNroComp"]=11;
	
	$this->CAENro=$this->Out["CAENro"];
	$this->CAEFechaVenc=$this->Out["CAEFechaVenc"];
	$this->NroComp=$this->Out["NroComp"];*/

}


function UpBdFacturaAfipCAE($FacId,$arrCae){

$nroCae= $arrCae["CAENro"];	
$date = DateTime::createFromFormat('Ymd', $arrCae["CAEFechaVenc"]);
$CaeFechaV = $date->format('Y-m-d');
$NroComp = $this->NroComp;
//[ProxNroComp] => 7

	$sql="update afipfactura set Cae='$nroCae', CaeFechaV='$CaeFechaV', NroComprobante='$NroComp' where id=$FacId;";

	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;
}	

function ListarMapa(){

	//$this->MapaBase();
	$this->MapaQuery();
	
}	





}