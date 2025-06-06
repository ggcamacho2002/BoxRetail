<?php
class ClientesCtaCte{

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


}	

 function MapaQuery(){

	$this->Map['DSid']='T0.id';
	//$this->Map['DSidCliente']='T0.cli_clave';
	$this->Map['DSfechaemision']='T0.dcl_fechaemision';
	$this->Map['DStotal']='T0.dcl_total';
	$this->Map['DSestado']='T0.dcl_estado';
	$this->Map['DSidMoneda']='T0.dcl_idmoneda';
	$this->Map['DSidremito']='T0.dcl_idremito';

	$this->Map['DSrazon_social']='c.cli_razon_social';
	$this->Map['DSMaxCtaCte'] = 'c.cli_maxctacte';

	$this->Map['DSTipoMoneda']='m.TipoMoneda';
	$this->Map['DSCotizacionMoneda']='m.cotizacion';
	$this->Map['DScodigomoneda']='m.codigo';
	$this->Map['DSsaldo']='';

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


function SaldoClienteCtaCte(){

	$sql="SELECT (10000)saldo FROM clientes cli";	//////////////falta hacer

	$cl=new Database();
		$cl->Query($sql);	
		$this->Out=$cl;
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