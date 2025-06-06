<?php
class PropietarioMarcas{

//ATTRIBUTE DECLARATION AUTOGENERADO
//==========================

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='propietario_marcas T0';


var $Joins='		
		
		INNER JOIN marcas m ON T0.Mar_clave = m.Id
		INNER JOIN propietario p ON T0.Pro_clave = p.Id
';


function __construct(){
	
}

 function MapaBase(){

		$this->Map['DSid']='T0.Id';
		$this->Map['DSidMarca']='T0.Mar_clave';
		$this->Map['DSidProp']='T0.Pro_clave';
		$this->Map['DSPMEstado']='T0.Pma_estado';

 }	
 function MapaJoins(){

	$this->Map['DSMarca']='m.Mar_descripcion';
	$this->Map['DSPropietario']='p.Pro_razonSocial';

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

	$this->MapaBase();
	$this->MapaJoins('');
	
}	

}