<?php
class ComprobantesTipo{

	var $Call;
	var $Out;
	var $Data;
	var $Map;
	var $UltIdInsert;
	var $Tabla='tipos_comprobantes T0';
	var $Joins='		
			   INNER JOIN comprobantes c ON T0.Com_clave = c.Id
	';
	
	function __construct(){}
	
	 function MapaBase(){
	
		$this->Map['DSid']='T0.Id';
		$this->Map['DSTic_descripcion']='T0.Tic_descripcion';
		$this->Map['DSTic_estado']='T0.Tic_estado';
		$this->Map['DSCom_clave']='T0.Com_clave';
		$this->Map['DSTic_DeudorAcreedor']='T0.Tic_DeudorAcreedor';
		$this->Map['DSTic_numero']='T0.Tic_numero';
		$this->Map['DStic_orden']='T0.Tic_orden';

	
	}	
	function MapaQuery(){
	
		$this->Map['DSid']='T0.Id';
		$this->Map['DSTic_descripcion']='T0.Tic_descripcion';
		$this->Map['DSTic_estado']='T0.Tic_estado';
		$this->Map['DSCom_clave']='T0.Com_clave';
		$this->Map['DSTic_DeudorAcreedor']='T0.Tic_DeudorAcreedor';
		$this->Map['DSTic_numero']='T0.Tic_numero';
		$this->Map['DStic_orden']='T0.Tic_orden';
	
		$this->Map['DSCom_descripcion']='c.Com_descripcion';
		$this->Map['DSCom_estado']='c.Com_estado';
	
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