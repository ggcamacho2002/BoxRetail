<?php
class DocumentoProveedorItems{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='items_documentos_prov T0';
var $Joins='		
			INNER JOIN productos p ON T0.prd_clave = p.Id
';


function __construct(){}

	function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSdop_clave']='T0.dop_clave';
	$this->Map['DSprd_clave']='T0.prd_clave';
	$this->Map['DSdescripcion']='T0.idp_descripcion';
	$this->Map['DSestado']='T0.idp_estado';

	$this->Map['DScantidad']='T0.idp_cantidad';
	$this->Map['DSirc_clave']='T0.irc_clave';
	$this->Map['DSfecha']='T0.idp_fecha';
	$this->Map['DSorden']='T0.orden';	
	$this->Map['DSNetoUnid']='T0.idp_netounidad';
	$this->Map['DSneto']='T0.idp_neto';

	$this->Map['DStotal']='T0.idp_total';

	$this->Map['DSBonif']='T0.idp_bonif';
	$this->Map['DSiva']='T0.idp_iva';
	$this->Map['DSretiva']='T0.idp_retiva';	
	$this->Map['DSRetIIBB']='T0.idp_retiibb';
	$this->Map['DSImpInterno']='T0.idp_impinterno';

	$this->Map['DSPorcBonif']='T0.idp_porcbonif';
	$this->Map['DSPorcIVA']='T0.idp_porciva';
	$this->Map['DSPorcRetIva']='T0.idp_porcretiva';
	$this->Map['DSPorcRetIIBB']='T0.idp_porcretiibb';
	$this->Map['DSPorcImpInterno']='T0.idp_porcimpinterno';

	$this->Map['DSorden']='T0.orden';

	
}	
function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSdop_clave']='T0.dop_clave';
	$this->Map['DSprd_clave']='T0.prd_clave';
	$this->Map['DSdescripcion']='T0.idp_descripcion';
	$this->Map['DSestado']='T0.idp_estado';
	$this->Map['DSiva']='T0.idp_iva';
	$this->Map['DSretiva']='T0.idp_retiva';
	$this->Map['DSneto']='T0.idp_neto';
	$this->Map['DStotal']='T0.idp_total';
	$this->Map['DScantidad']='T0.idp_cantidad';
	$this->Map['DSirc_clave']='T0.irc_clave';
	$this->Map['DSfecha']='T0.idp_fecha';
	$this->Map['DSorden']='T0.orden';

	$this->Map['DSPorcBonif']='T0.idp_porcbonif';
	$this->Map['DSBonif']='T0.idp_bonif';

	$this->Map['DSNetoUnid']='T0.idp_netounidad';
	$this->Map['DSPorcIVA']='T0.idp_porciva';
	$this->Map['DSPorcIIBB']='T0.idp_porciibb';
	$this->Map['DSPorcRetIva']='T0.idp_porcretiva';

	$this->Map['DSRetIIBB']='T0.idp_retiibb';
	$this->Map['DSPorcRetIIBB']='T0.idp_porcretiibb';
	$this->Map['DSImpInterno']='T0.idp_impinterno';
	$this->Map['DSPorcImpInterno']='T0.idp_porcimpinterno';

	$this->Map['DSprod_descripcion']='p.Prd_descripcion';
	$this->Map['DSCantxPack']='p.CantxPack';

	$this->Map['DSPacks']="ROUND(T0.idp_cantidad / p.CantxPack,2)";
	$this->Map['DSNetoPack']="ROUND(T0.idp_netounidad * p.CantxPack,2)";
	
	
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

function UpdateMultiplesIds(){

	$this->MapaBase();
			
	$cl=new AutoMutation($this->Tabla);			
	$cl->Map=$this->Map;

	$cl->UpdateMultiplesIds($this->Data);
	$this->Out=$cl->Out;
	$cl=null;

	
	$iddoc=$this->Data["SetFields"][0]["DSdop_clave"];
	$this->ActualizarTotalesDocumento($iddoc);

	// Existe un trigger para actualizar el estado de los items de doc . 
}	

function ActualizarTotalesDocumento($iddoc){

	$sql="CALL ggc_ActualizarTotalesDocprov($iddoc)";

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