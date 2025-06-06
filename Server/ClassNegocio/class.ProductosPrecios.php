<?php
class ProductosPrecios{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='productos_precios T0';
var $Joins='		
           INNER JOIN vista_productos_completa vpc ON T0.prod_clave = vpc.Id
';

function __construct(){}

 function MapaBase(){


	$this->Map['DSid']='id';

	$this->Map['DSidProd']='prod_clave';
	$this->Map['DSPCompraUnid']='pp_preciocompra';
	$this->Map['DSPVentaUnid']='pp_precioventa';
	$this->Map['DSFechaActualiza']='pp_fechaactualiza';
	$this->Map['DSPCompraAntUnid']='pp_preciocompraant';
	$this->Map['DSFechaCompraAnt']='pp_fechacompraant';
    $this->Map['DSPrecioCompraPendiente']='pp_preciocomprapendiente';
    $this->Map['DSPVentaPorc']='pp_porcventa';
	
}	

 function MapaQuery(){


	$PVentaUnidad='T0.pp_precioventa';
	$PCompraUnidad='T0.pp_preciocompra';
	$PCompraAnt='T0.pp_preciocompraant';

	$this->Map['DSid']='T0.id';
	$this->Map['DSidProd']='T0.prod_clave';
	$this->Map['DSDias']='DATEDIFF(CURDATE(),'.'T0.pp_fechaactualiza)';
	$this->Map['DSPVentaUnid']=$PVentaUnidad;
	$this->Map['DSPVentaPack']='('.$PVentaUnidad.' * vpc.CantxPack)';
	$this->Map['DSPVentaPorc']='pp_porcventa';	
	$this->Map['DSPCompraUnid']=$PCompraUnidad;
	$this->Map['DSPCompraPack']='('.$PCompraUnidad.' * vpc.CantxPack)';
	$this->Map['DSPrecioCompraPendiente']='T0.pp_preciocomprapendiente';

	$this->Map['DSPCompraAntUnid']=$PCompraAnt;
	$this->Map['DSDifCompraAnt']='ROUND(('.$PCompraUnidad.' - '.$PCompraAnt.') / '.$PCompraAnt.'*100, 2)';
	$this->Map['DSNombreProducto']='vpc.Prd_descripcion';
	$this->Map['DSEstadoProducto']='vpc.Prd_estado';
	$this->Map['DSCantxPack']='vpc.CantxPack';
	$this->Map['DSsector']='vpc.sector';
	$this->Map['DSCategoria']='vpc.Categoria';
	$this->Map['DSSubCategoria']='vpc.SubCategoria';
	$this->Map['DSTipo']='vpc.Tipo';
	$this->Map['DSMarca']='vpc.Marca';
	$this->Map['DSPropietario']='vpc.Propietario';
	
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