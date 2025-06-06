<?php
class ProductosCategorias{

//ATTRIBUTE DECLARATION AUTOGENERADO
//==========================

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='categorias T0';


function __construct(){
		

 }

 function MapaBase(){

	$this->Map['DSid']='T0.id';

	$this->Map['DSCategoria']='T0.Cat_descripcion';
	$this->Map['DSestado']='T0.Cat_estado';


}	

function MapaJoins(){

}	

 function Buscar(){

	
	$this->MapaBase();
	$this->MapaJoins();
			
	$cl=new Autoquery($this->Tabla);			
	$cl->Map=$this->Map;
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