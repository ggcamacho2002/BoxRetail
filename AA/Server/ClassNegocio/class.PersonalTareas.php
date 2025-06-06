<?php
class PersonalTareas{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='personaltareas T0';
var $Joins='';


function __construct(){}

 function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSDetalle']='T0.Detalle';
	$this->Map['DSvalor']='T0.valor';
	$this->Map['DSestado']='T0.estado';
	$this->Map['DSComentarios']='T0.comentarios';
}	

 function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSDetalle']='T0.Detalle';
	$this->Map['DSvalor']='T0.valor';
	$this->Map['DSestado']='T0.estado';
	$this->Map['DSComentarios']='T0.comentarios';
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