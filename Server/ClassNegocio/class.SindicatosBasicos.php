<?php
class SindicatosBasicos{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='sindicatosbasicos T0';
var $Joins='INNER JOIN sindicatos s ON T0.idSindicato = s.id';


function __construct(){}

function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DScategoria']='T0.categoria';
	$this->Map['DSbasico']='T0.basico';
	$this->Map['DSidsindicato']='T0.idsindicato';

}	
function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DScategoria']='T0.categoria';
	$this->Map['DSbasico']='T0.basico';
	$this->Map['DSidsindicato']='T0.idsindicato';
	$this->Map['DSNombreSindicato']='s.Nombre';

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
	$this->Data['SetFields']['DSid']=uniqid();///BORARRR PARA OTRAS ENTIDADES
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

	$this->MapaQuery();
	
}	





}