<?php
class ClientesRecibos{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='clientesrecibos T0';
var $Joins='		
		INNER JOIN clientes c ON T0.idcliente = c.id
		INNER JOIN remitos_ventas r ON T0.idremito = r.id
		INNER JOIN afipcondicioniva aci ON c.idCondicionIva = aci.id
';

function __construct(){}

function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSidcliente']='T0.idcliente';
	$this->Map['DSidremito']='T0.idremito';
	$this->Map['DSiddocumento']='T0.iddocumento';
	$this->Map['DSfecha']='T0.fecha';
	$this->Map['DSmonto']='T0.monto';
	$this->Map['DSestado']='T0.estado';
	$this->Map['DSentidad']='T0.entidad';
	$this->Map['DSsys_usuario']='T0.sys_usuario';

}	

function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSidcliente']='T0.idcliente';
	$this->Map['DSidremito']='T0.idremito';
	$this->Map['DSiddocumento']='T0.iddocumento';
	$this->Map['DSfecha']='T0.fecha';
	$this->Map['DSmonto']='T0.monto';
	$this->Map['DSestado']='T0.estado';
	$this->Map['DSsys_usuario']='T0.sys_usuario';
	$this->Map['DSentidad']='T0.entidad';
	
	$this->Map['DSClienteNombre']='c.cli_razon_social';
	$this->Map['DSClienteMaxCtaCte']='c.cli_maxctacte';
	$this->Map['DSClienteCheque']='c.cli_cheque';
	$this->Map['DSnumeroRemito']='r.id';
	$this->Map['DSIdCondicionIva']='aci.id';
	$this->Map['DSDetalleCondicionIva']='aci.detalle';

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