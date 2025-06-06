<?php
include_once('class.SueldosInternosItems.php');

class SueldosInternos{

	var $Call;
	var $Out;
	var $Data;
	var $Map;
	var $UltIdInsert;
	var $Tabla='sueldosinternos T0';
	var $Joins='		
				INNER JOIN personal p ON T0.idpersonal = p.id
	';
	
	
	function __construct(){}
	
		function MapaBase(){
	
		$this->Map['DSid']='T0.id';
		$this->Map['DSidpersonal']='T0.idpersonal';
		$this->Map['DStotal']='T0.total';
		$this->Map['DSfecha']='T0.fecha';
		$this->Map['DSestado']='T0.estado';
		$this->Map['DSantiguedad']='T0.antiguedad';
		$this->Map['DShsextra']='T0.hsextra';
		$this->Map['DSinasistencias']='T0.inasistencias';
		$this->Map['DSadelantos']='T0.adelantos';
		$this->Map['DSdescadelanto']='T0.descadelanto';
		$this->Map['DSdiastrabajados']='T0.diastrabajados';
	}	


	function MapaQuery(){
	
		$this->Map['DSid']='T0.id';
		$this->Map['DSidpersonal']='T0.idpersonal';
		$this->Map['DStotal']='T0.total';
		$this->Map['DSfecha']='T0.fecha';
		$this->Map['DSestado']='T0.estado';
		$this->Map['DSantiguedad']='T0.antiguedad';
		$this->Map['DShsextra']='T0.hsextra';
		$this->Map['DSinasistencias']='T0.inasistencias';
		$this->Map['DSadelantos']='T0.adelantos';
		$this->Map['DSdescadelanto']='T0.descadelanto';
		$this->Map['DSdiastrabajados']='T0.diastrabajados';
	
		$this->Map['DSnombrePersonal']='p.p_Nombre';
		$this->Map['DSapellidoPersonal']='p.p_Apellido';
	
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

	$this->Data['SetFields'][0]['DSfecha']=date("Y-m-d");
	$cl->AutoInsertOne($this->Data);
	$this->Out=$cl->Out;
	$cl=null;

	$ultimoId=$this->Out->Ultimo_Id;

	$cl=new SueldosInternosItems();

	$cl->CargarItemsLiquidacionTareas($ultimoId,$this->Data['SetFields'][0]);
	$cl->CargarItemsLiquidacionConceptos($ultimoId,$this->Data['SetFields'][0]);

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