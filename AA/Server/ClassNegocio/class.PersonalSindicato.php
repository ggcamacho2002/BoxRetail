<?php
class PersonalSindicato{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='personalsindicato T0';
var $Joins='		
           INNER JOIN personal p ON T0.idpersonal = p.id
           INNER JOIN sindicatos s ON T0.idsindicato = s.id
           INNER JOIN sindicatosbasicos sb ON T0.idcategoria = sb.id
';

function __construct(){}

 function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSidpersonal']='T0.idpersonal';
	$this->Map['DSidsindicato']='T0.idsindicato';
	$this->Map['DSidcategoria']='T0.idcategoria';
}	

 function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSidpersonal']='T0.idpersonal';
	$this->Map['DSidsindicato']='T0.idsindicato';
	$this->Map['DSidcategoria']='T0.idcategoria';
	$this->Map['DSnombreSindicato']='s.Nombre';
	$this->Map['DScategoria']='sb.categoria';
	$this->Map['DSbasico']='sb.basico';

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