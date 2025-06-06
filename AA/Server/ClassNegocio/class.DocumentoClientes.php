<?php

class DocumentoClientes{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='documentos_clie T0';
var $Joins='		
           INNER JOIN tipos_comprobantes tc ON T0.tic_clave = tc.Id
           INNER JOIN clientes c ON T0.cli_clave = c.id
           INNER JOIN monedas m ON T0.dcl_idmoneda = m.id
';

function __construct(){}

 function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSidTipoComprobante']='T0.tic_clave';
	$this->Map['DSidCliente']='T0.cli_clave';
	$this->Map['DSfechaemision']='T0.dcl_fechaemision';
	$this->Map['DSfechavencimiento']='T0.dcl_fechavencimiento';
	$this->Map['DSnetogravado']='T0.dcl_netogravado';
	$this->Map['DSexento']='T0.dcl_exento';
	$this->Map['DStotal']='T0.dcl_total';
	$this->Map['DSsaldo']='T0.dcl_saldo';
	$this->Map['DSestado']='T0.dcl_estado';
	$this->Map['DScodigotipocomprobante']='T0.dcl_codigotipocomprobante';
	$this->Map['DSnumeropuntoventa']='T0.dcl_numeropuntoventa';
	$this->Map['DSnumerocomprobante']='T0.dcl_numerocomprobante';
	$this->Map['DSsubtotal']='T0.dcl_subtotal';
	$this->Map['DScodigoconcepto']='T0.dcl_codigoconcepto';
	$this->Map['DSidMoneda']='T0.dcl_idmoneda';
	$this->Map['DScuenta']='T0.dcl_cuenta';
	$this->Map['DSidremito']='T0.dcl_idremito';
	$this->Map['DSidcondicioniva']='T0.dcl_idcondicioniva';


}	
function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSidTipoComprobante']='T0.tic_clave';
	$this->Map['DSidCliente']='T0.cli_clave';
	$this->Map['DSfechaemision']='T0.dcl_fechaemision';
	$this->Map['DSfechavencimiento']='T0.dcl_fechavencimiento';
	$this->Map['DSnetogravado']='T0.dcl_netogravado';
	$this->Map['DSexento']='T0.dcl_exento';
	$this->Map['DStotal']='T0.dcl_total';
	$this->Map['DSsaldo']='T0.dcl_saldo';
	$this->Map['DSestado']='T0.dcl_estado';
	$this->Map['DScodigotipocomprobante']='T0.dcl_codigotipocomprobante';
	$this->Map['DSnumeropuntoventa']='T0.dcl_numeropuntoventa';
	$this->Map['DSnumerocomprobante']='T0.dcl_numerocomprobante';
	$this->Map['DSsubtotal']='T0.dcl_subtotal';
	$this->Map['DScodigoconcepto']='T0.dcl_codigoconcepto';
	$this->Map['DSidMoneda']='T0.dcl_idmoneda';
	$this->Map['DScuenta']='T0.dcl_cuenta';
	$this->Map['DSidremito']='T0.dcl_idremito';
	$this->Map['DSidcondicioniva']='T0.dcl_idcondicioniva';

	$this->Map['DSrazon_social']='c.cli_razon_social';
	$this->Map['DSdireccion_cliente']='c.cli_direccion';
	$this->Map['DScheque']='c.cli_cheque';
	$this->Map['DSmaxctacte']='c.cli_maxctacte';
	
	$this->Map['DSdescripcion_tipo_comprobante']='tc.Tic_descripcion';

	$this->Map['DSTipoMoneda']='m.TipoMoneda';
	$this->Map['DSCotizacionMoneda']='m.cotizacion';
	$this->Map['DScodigomoneda']='m.codigo';

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
	$this->Data["SetFields"][0]["DSidMoneda"]=1;
	$tipocomp=$this->Data["SetFields"][0]["DSidTipoComprobante"];

	if($tipocomp=='Comanda') {
		$this->Data["SetFields"][0]["DSidTipoComprobante"]=3;
     }	   


	 
	if($tipocomp=='Factura'){
			$idCliente=$this->Data["SetFields"][0]["DSidCliente"];
			$this->Data["SetFields"][0]["DSidTipoComprobante"]=$this->TraerCompTipo($idCliente);
	} 	

	$this->MapaBase();			
	$cl=new AutoMutation($this->Tabla);			
	$cl->Map=$this->Map;
	$cl->AutoInsertOne($this->Data);
	$OutFinal=$cl->Out;
	$cl=null;

	$ultimoId=$OutFinal->Ultimo_Id;

	if($tipocomp=='Comanda'){
		$this->UpdateRemitoCompTipo($ultimoId,'Comanda');//sin factura
	}	   
	if($tipocomp=='Factura'){
		$this->UpdateRemitoCompTipo($ultimoId,'Factura');//factura B
	} 	

	$this->Out=$OutFinal;

}

function InsertFacturaPOS(){

	include_once 'class.AfipFacturaTicket.php';
	
	$ultimoId=$this->Data["SetFields"][0]["DSid"];

	$cl=new AfipFacturaTicket();
	$cl->InsertOneByDocCliente($ultimoId,'POS');
	$this->Out=$cl->Out;
	
}	
function UpdateRemitoCompTipo($ultimoId,$tipoComp){

	$this->ItemRemitoToItemDoc($ultimoId);

	$idremito=$this->Data["SetFields"][0]["DSidremito"];
	$sql="update remitos_ventas r set r.`rev_estado`='$tipoComp' WHERE r.`id`=$idremito";
	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;

	$sql="update items_remitos_ventas i set i.`irv_estado`='$tipoComp',i.`irv_cantidad_vendida`= i.`irv_cantidad_pedida` WHERE i.`rev_clave`=$idremito";
	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;

}	
function TraerCompTipo($idCliente){

	$sql="
			SELECT (a.idtipocomprobante)TipoComp FROM clientes c
			LEFT OUTER JOIN afipcondicioniva a ON c.idCondicionIva=a.id
			WHERE c.`id`=$idCliente;	
	";

	$cl=new Database();
	$cl->Query($sql);	
	$tipc=$cl->datos[0]['TipoComp'];

	$cl=null;

	return $tipc;

}	

function ItemRemitoToItemDoc($ultimoId){

	$idremito=$this->Data["SetFields"][0]["DSidremito"];
	$sql="CALL ggc_ItemRemitoClienteToItemDocCliente($idremito, $ultimoId)";

	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;
}


function UpdateById(){

	$this->MapaBase();

	$cl=new AutoMutation($this->Tabla);			
	$cl->Map=$this->Map;

	$cl->AutoUpdateById($this->Data);
	$this->Out=$cl->Out;
	$cl=null; 	

}	

function DeleteById(){

	$this->MapaBase();
			
	$cl=new AutoMutation($this->Tabla);			
	$cl->Map=$this->Map;

	$cl->AutoSrvDeleteOneReg($this->Data);
	$this->Out=$cl->Out;
	$cl=null;	

}	

function ListarMapa(){
	//$this->MapaBase();
	$this->MapaQuery();
	
}	





}