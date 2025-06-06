<?php
class AppRolesModulos{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='app_rolesmodulos T0';
var $Joins='		
           INNER JOIN app_roles r ON T0.idrol = r.id
           INNER JOIN app_modulos m ON T0.idmodulo = m.id
';


function __construct(){}

 function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSidrol']='T0.idrol';
	$this->Map['DSidmodulo']='T0.idmodulo';
	$this->Map['idPadre']='T0.idrol';


}	
function MapaJoins(){

	$this->Map['DSnombremodulo']='m.modulo';
	$this->Map['DStitulomodulo']='m.titulo';
	$this->Map['DSnombreRol']='r.nombre';

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