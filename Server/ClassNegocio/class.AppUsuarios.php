<?php
class AppUsuarios{

//ATTRIBUTE DECLARATION AUTOGENERADO
//==========================

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='app_usuarios T0';
var $Joins='		
           INNER JOIN app_roles r ON T0.idrol = r.id
';


function __construct(){
	
}

 function MapaBase(){

		$this->Map['DSid']='T0.id';
		$this->Map['DSnombre']='T0.usu_nombre';
		$this->Map['DSclave']='T0.usu_clave';
		$this->Map['DSestado']='T0.usu_estado';
		$this->Map['DSidrol']='T0.idrol';

 }	
 function MapaJoins(){

	$this->Map['DSnombrerol']='r.nombre';

 }	

 function Buscar(){

	
	$this->MapaBase();
	$this->MapaJoins();


			
	$cl=new Autoquery($this->Tabla);			
	$cl->Map=$this->Map;
	$cl->Joins=$this->Joins;
	$cl->SuperTablaQuery($this->Data);
	$this->Out=$cl->Out;
	$cl=null;
	
	
	

}

function BuscarById(){
	
	$this->MapaBase();
	$this->MapaJoins();

	$cl=new Autoquery($this->Tabla);			
	$cl->Map=$this->Map;
	$cl->Joins=$this->Joins;
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

	$this->MapaBase();
	$this->MapaJoins('');
	
}	

}