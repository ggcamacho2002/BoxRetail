<?php
class ProveedoresImpuestos{

//ATTRIBUTE DECLARATION AUTOGENERADO
//==========================

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='proveedores_impuestos T0';
var $Joins='
            INNER JOIN proveedores pv ON T0.idproveedor = pv.Id
			INNER JOIN tasa_impuestos imp ON T0.idimpuesto = imp.Id
';


function __construct(){

}

 function MapaBase(){

	$this->Map['DSid']='T0.Id';
	
	$this->Map['DSidproveedor']='T0.idproveedor';
	$this->Map['DSidimpuesto']='T0.idimpuesto';

}	

function MapaJoins(){

	$this->Map['DSRazonSocial']='pv.pro_razon_social';	
	
	$this->Map['DSNombreImp']='imp.Tim_descripcion';
	$this->Map['DSPorcImp']='imp.Tim_porcentaje';
	$this->Map['DSMininmoImp']='imp.Tim_minimo';


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