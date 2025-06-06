<?php
class ProveedoresProductos{

//ATTRIBUTE DECLARATION AUTOGENERADO
//==========================

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='proveedores_productos T0';
var $Joins='		
		INNER JOIN productos prod ON T0.Prd_clave = prod.id
';


function __construct(){
	
}

 function MapaBase(){

		$this->Map['DSid']='T0.id';

		$this->Map['DSNombreLista']='T0.nombrelista';
		$this->Map['DSidProv']='T0.Pro_clave';
		$this->Map['DSidProd']='T0.Prd_clave';
		$this->Map['DSestado']='T0.Ppr_estado';
		$this->Map['DSNombreProdProv']='T0.NombreProv';
		$this->Map['DSCodProdProv']='T0.CodProv';

 }	
 function MapaJoins(){

	$this->Map['DSnombreProducto']='prod.Prd_descripcion';
	
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