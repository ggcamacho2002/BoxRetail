<?php
class CajasAperturaCierre{

	var $Call;
	var $Out;
	var $Data;
	var $Map;
	var $UltIdInsert;
	var $Tabla='cajas_aperturacierre T0';
	var $Joins='';
	
	
	function __construct(){}
	
	 function MapaBase(){
	
		$this->Map['DSid']='T0.id';
		$this->Map['DSestado']='T0.estado';
		$this->Map['DShora_apertura']='T0.hora_apertura';
		$this->Map['DShora_cierre']='T0.hora_cierre';
		$this->Map['DScambio']='T0.cambio';
		$this->Map['DSsys_usuario']='T0.sys_usuario';
		$this->Map['DSfacturado']='T0.facturado';
		$this->Map['DSretiros']='T0.retiros';
		$this->Map['DSefectivo']='T0.efectivo';
		$this->Map['DSctacte']='T0.ctacte';
		$this->Map['DScheques']='T0.cheques';
		$this->Map['DSDigital']='T0.Digital';
		$this->Map['DSdiferencia']='T0.diferencia';
		$this->Map['DScobroctacte']='T0.cobroctacte';
	
	}	
	function MapaQuery(){
	
		$this->Map['DSid']='T0.id';
		$this->Map['DSestado']='T0.estado';
		$this->Map['DShora_apertura']='T0.hora_apertura';
		$this->Map['DShora_cierre']='T0.hora_cierre';
		$this->Map['DScambio']='T0.cambio';
		$this->Map['DSsys_usuario']='T0.sys_usuario';
		$this->Map['DSfacturado']='T0.facturado';
		$this->Map['DSretiros']='T0.retiros';
		$this->Map['DSefectivo']='T0.efectivo';
		$this->Map['DSctacte']='T0.ctacte';
		$this->Map['DScheques']='T0.cheques';
		$this->Map['DSDigital']='T0.Digital';
		$this->Map['DSdiferencia']='T0.diferencia';
		$this->Map['DScobroctacte']='T0.cobroctacte';

	
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
	

	$fechaActual = new DateTime();
	
	session_start();
	
	$this->Data['SetFields'][0]['DSsys_usuario']=$_SESSION["usu_id"];
	$this->Data['SetFields'][0]['DShora_apertura']=$fechaActual->format('Y-m-d H:i:s');
	$this->Data['SetFields'][0]['DSestado']='Abierta';

	$cl=new AutoMutation($this->Tabla);			
	$cl->Map=$this->Map;
	$cl->AutoInsertOne($this->Data);
	$this->Out=$cl->Out;
	$cl=null;

	$ultimoId=$this->Out->Ultimo_Id;


	$sql="	
			SELECT * FROM cajas_aperturacierre c WHERE c.`id`=$ultimoId;
	";

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
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

function VerificarApertura(){

	session_start();
	$usu=$_SESSION["usu_id"];

	$sql="	
			SELECT * FROM cajas_aperturacierre c WHERE c.`sys_usuario`=$usu AND c.`estado`='Abierta';
	";

	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;
	
}	





}