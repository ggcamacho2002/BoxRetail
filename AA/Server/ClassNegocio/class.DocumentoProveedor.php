<?php
class DocumentoProveedor{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='documentos_prov T0';
var $Joins='		
			INNER JOIN proveedores p ON T0.pro_clave = p.Id
			INNER JOIN tipos_comprobantes tc ON T0.tic_clave = tc.Id
';

function __construct(){}

	function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSpro_clave']='T0.pro_clave';
	$this->Map['DStic_clave']='T0.tic_clave';
	$this->Map['DSdop_estado']='T0.dop_estado';
	$this->Map['DSdop_fecha']='T0.dop_fecha';
	$this->Map['DSdop_iva']='T0.dop_iva';
	$this->Map['DSdop_iibb']='T0.dop_iibb';
	$this->Map['DSdop_retiva']='T0.dop_retiva';
	$this->Map['DSdop_neto']='T0.dop_neto';
	$this->Map['DSdop_total']='T0.dop_total';
	$this->Map['DSidremito']='T0.idremito';
	$this->Map['DSnrodocprov']='T0.nrodocprov';
	$this->Map['DSfechaprov']='T0.fechaprov';


}	

function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSpro_clave']='T0.pro_clave';
	$this->Map['DStic_clave']='T0.tic_clave';
	$this->Map['DSdop_estado']='T0.dop_estado';
	$this->Map['DSdop_fecha']='T0.dop_fecha';
	$this->Map['DSdop_iva']='T0.dop_iva';
	$this->Map['DSdop_iibb']='T0.dop_iibb';
	$this->Map['DSdop_retiva']='T0.dop_retiva';
	$this->Map['DSdop_neto']='T0.dop_neto';
	$this->Map['DSdop_total']='T0.dop_total';
	$this->Map['DSidremito']='T0.idremito';
	$this->Map['DSnrodocprov']='T0.nrodocprov';
	$this->Map['DSfechaprov']='T0.fechaprov';
	
	$this->Map['DSrazon_social']='p.pro_razon_social';
	$this->Map['DStic_descripcion']='tc.Tic_descripcion';


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

	$idremito=$this->Data["SetFields"][0]["DSidremito"];

	$sql="	
			Update remitos_compra set rec_estado='Recepcion' WHERE `id`=$idremito
	";

	$cl=new Database();
	$cl->Query($sql);	
	$cl=null;

	$sql="	
			CALL ggc_InsertRemCompraItemsToDocProvItems($idremito, $ultimoId)
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

	// Existe un trigger para actualizar el estado de los items de doc . 

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