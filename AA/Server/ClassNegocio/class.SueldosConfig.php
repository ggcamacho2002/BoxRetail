<?php
class SueldosConfig{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='sueldoscfgitems T0';
var $Joins='';

function __construct(){}

 function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSconcepto']='T0.concepto';
	$this->Map['DScodigo']='T0.codigo';
	$this->Map['DSsubtotaltipo']='T0.subtotaltipo';
	$this->Map['DSformulaunidad']='T0.formulaunidad';
	$this->Map['DSoperacion']='T0.operacion';
	$this->Map['DSformulavalorunit']='T0.formulavalorunit';
	$this->Map['DSestado']='T0.estado';
	$this->Map['DSorden']='T0.orden';
	$this->Map['DStipo']='T0.tipo';
}	

 function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSconcepto']='T0.concepto';
	$this->Map['DScodigo']='T0.codigo';
	$this->Map['DSsubtotaltipo']='T0.subtotaltipo';
	$this->Map['DSformulaunidad']='T0.formulaunidad';
	$this->Map['DSoperacion']='T0.operacion';
	$this->Map['DSformulavalorunit']='T0.formulavalorunit';
	$this->Map['DSestado']='T0.estado';
	$this->Map['DSorden']='T0.orden';
	$this->Map['DStipo']='T0.tipo';
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
	$this->Data['SetFields']['DSid']=uniqid();
	$cl->AutoInsertOne($this->Data);
	$this->Out=$cl->Out;
	$cl=null;

	$ultimoId=$this->Out->Ultimo_Id;

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