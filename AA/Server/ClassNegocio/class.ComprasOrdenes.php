<?php
class ComprasOrdenes{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='remitos_compra T0';
var $Joins='		
			INNER JOIN proveedores p ON T0.pro_clave = p.Id
';


function __construct(){}

	function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSpro_clave']='T0.pro_clave';
	$this->Map['DSrec_fecha']='T0.rec_fecha';
	$this->Map['DSrec_estado']='T0.rec_estado';
	$this->Map['DSrec_tipo']='T0.rec_tipo';

}	
function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSpro_clave']='T0.pro_clave';
	$this->Map['DSrec_fecha']='T0.rec_fecha';
	$this->Map['DSrec_estado']='T0.rec_estado';
	$this->Map['DSrec_estado']='T0.rec_estado';
	$this->Map['DSrec_tipo']='T0.rec_tipo';

	$this->Map['DSpro_razon_social']='p.pro_razon_social';
	$this->Map['DSpro_id']='p.id';
	

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

	$prov=$this->Data["SetFields"][0]["DSpro_clave"];

	$sql="	
			CALL ggc_InsertItemsRemCompra($ultimoId ,$prov)
	";

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