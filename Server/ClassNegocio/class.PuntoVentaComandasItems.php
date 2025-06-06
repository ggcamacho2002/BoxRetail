<?php

class PuntoVentaComandasItems{

		var $Call;
		var $Out;
		var $Data;
		var $Map;
		var $UltIdInsert;
		var $Tabla='items_remitos_ventas T0';
		var $Joins="		
				   INNER JOIN remitos_ventas rv ON T0.rev_clave = rv.id
				   INNER JOIN productos p ON T0.prd_clave = p.Id
				   INNER JOIN productos_precios pp ON T0.prd_clave = pp.prod_clave
				   LEFT JOIN productos_ofertas po ON T0.prd_clave = po.idprod  AND po.estado = 'Activo'
		";
		
		
	function __construct(){}
		
	function MapaBase(){
		
			$this->Map['DSid']='T0.id';
			$this->Map['DScantPedida']='T0.irv_cantidad_pedida';
			$this->Map['DScantVendida']='T0.irv_cantidad_vendida';
			$this->Map['DSestado']='T0.irv_estado';
			$this->Map['DSidRemitoV']='T0.rev_clave';
			$this->Map['DSidProducto']='T0.prd_clave';
			$this->Map['DSprecioventa']='T0.irv_precioventa';
		
	}	
	function MapaQuery(){
		
			$this->Map['DSid']='T0.id';
			$this->Map['DScantPedida']='T0.irv_cantidad_pedida';
			$this->Map['DSPacksPedido']='ROUND(T0.irv_cantidad_pedida / p.CantxPack,2)';
			$this->Map['DScantVendida']='T0.irv_cantidad_vendida';
			$this->Map['DSestado']='T0.irv_estado';
			$this->Map['DSidRemitoV']='T0.rev_clave';
			$this->Map['DSidProducto']='T0.prd_clave';

			$this->Map['DSProducto']='p.Prd_descripcion';
			$this->Map['DSCantxPack']='p.CantxPack';
			$this->Map['DSEstadoProd']='p.Prd_estado';
			$this->Map['DSEstadoRemitoV']='rv.rev_estado';
			$this->Map['DSFechaRemitoV']='rv.rev_fecha';
			$this->Map['DSidCliente']='rv.cli_clave';
			
			$this->Map['DSprecioventa']='T0.irv_precioventa';		
		
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

	$idprod=$this->Data['SetFields'][0]["DSidProducto"];
	$idrem=$this->Data['SetFields'][0]["DSidRemitoV"];
	$cantped=$this->Data['SetFields'][0]["DScantPedida"];
	$precioventa=$this->Data['SetFields'][0]["DSprecioventa"];

	$sql="	
			CALL ggc_ComandasItemsInsertUpdate($idprod ,$idrem,$cantped,$precioventa);
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