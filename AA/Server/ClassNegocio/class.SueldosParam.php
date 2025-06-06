<?php
class SueldosParam{

	var $Call;
	var $Out;
	var $Data;
	var $Map;
	var $UltIdInsert;
	var $Tabla='sueldosparam T0';
	var $Joins='';
	
	
	function __construct(){}
	
	 function MapaBase(){
	
		$this->Map['DSid']='T0.id';
		$this->Map['DSconcepto']='T0.concepto';
		$this->Map['DScodigo']='T0.codigo';
		$this->Map['DStipo']='T0.tipo';
		$this->Map['DSorden']='T0.orden';
		$this->Map['DSestado']='T0.estado';
	
	}	
 function MapaQuery(){

		$this->Map['DSid']='T0.id';
		$this->Map['DSconcepto']='T0.concepto';
		$this->Map['DScodigo']='T0.codigo';
		$this->Map['DStipo']='T0.tipo';
		$this->Map['DSorden']='T0.orden';
		$this->Map['DSestado']='T0.estado';
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


	$sql="INSERT INTO `distribuidora`.`personalsindicato` (`idpersonal`, `idsindicato`, `idcategoria`) VALUES ($ultimoId, 1, 1);";

	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
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