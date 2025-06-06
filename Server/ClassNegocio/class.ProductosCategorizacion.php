<?php
class ProductosCategorizacion{

//ATTRIBUTE DECLARATION AUTOGENERADO
//==========================

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='categorizacion T0';
var $Joins='		
           INNER JOIN sectores sec ON T0.Sec_clave = sec.id
           INNER JOIN categorias cat ON T0.Cat_clave = cat.id
           INNER JOIN subcategorias scat ON T0.Sub_clave = scat.id
           INNER JOIN tipos t ON T0.Tip_clave = t.id
';


function __construct(){


 }

 function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSidCategoria']='T0.Cat_clave';
	$this->Map['DSidSubCategoria']='T0.Sub_clave';
	$this->Map['DSidTipoProducto']='T0.Tip_clave';
	$this->Map['DSidSector']='T0.Sec_clave';
	$this->Map['DSEstado']='T0.Ctg_estado';
	$this->Map['DSidvieja']='T0.id_vieja';

 }

function MapaJoins(){

	$this->Map['DSSector']='sec.Sec_descripcion';
	$this->Map['DSCategoria']='cat.Cat_descripcion';
	$this->Map['DSSubCategoria']='scat.Sub_descripcion';
	$this->Map['DSTipo']='t.Tip_descripcion';
	$this->Map['DSTipoResumido']='t.Tip_tiporesumido_desc';

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