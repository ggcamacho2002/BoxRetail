<?php
class ComprasOrdenesItems{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='items_remitos_compra T0';
var $Joins='		
			INNER JOIN remitos_compra rc ON T0.rec_clave = rc.id
			INNER JOIN vista_productos_completa vp ON T0.prd_clave = vp.Id
			left JOIN inventario i ON T0.prd_clave = i.idproducto
';

function __construct(){}

	function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSrec_clave']='T0.rec_clave';
	$this->Map['DSirc_cantidad_recibida']='T0.irc_cantidad_recibida';
	$this->Map['DSUnidPedida']='T0.irc_cantidad_pedida';
	$this->Map['DSirc_estado']='T0.irc_estado';
	$this->Map['DSprd_clave']='T0.prd_clave';
	$this->Map['DSorden']='T0.irc_orden';
}	
function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSrec_clave']='T0.rec_clave';
	$this->Map['DSirc_cantidad_recibida']='T0.irc_cantidad_recibida';
	$this->Map['DSPackRecibido']='ROUND('.'T0.irc_cantidad_recibida / vp.CantxPack,2)';
	$this->Map['DSUnidPedida']='T0.irc_cantidad_pedida';
	$this->Map['DSPackPedido']='ROUND('.'T0.irc_cantidad_pedida / vp.CantxPack,2)';
	$this->Map['DSirc_estado']='T0.irc_estado';
	$this->Map['DSprd_clave']='T0.prd_clave';
	$this->Map['DSorden']='T0.irc_orden';

	$this->Map['DSDifUnid']='T0.irc_cantidad_pedida - T0.irc_cantidad_recibida';


	$this->Map['DSidproveedor']='rc.pro_clave';

	$this->Map['DSProducto']='vp.Prd_descripcion';

	$this->Map['DSprecioultcompra']='i.precioultcompra';
	$this->Map['DSprecioultcompraPack']='(i.precioultcompra * vp.CantxPack)';
	$this->Map['DSstockunidades']='i.stockunidades';
	$this->Map['DSstockminunidades']='i.stockminunidades';
	$this->Map['DSdiasreposicion']='i.diasreposicion';
	$this->Map['DSdiasUltCompra']='DATEDIFF(CURDATE(),i.ultimacomprafecha)';
	$this->Map['DSultimaAuditoria']='DATEDIFF(CURDATE(),i.ultimaAuditoria)';
	$this->Map['DSultimacompracant']='i.ultimacompracant';
	$this->Map['DSdiasUltVenta']='DATEDIFF(CURDATE(),i.ultimaventafecha)';
	$this->Map['DSvencimientodias']='i.vencimientodias';

	$this->Map['DSSubTotal']="ROUND(i.precioultcompra * T0.irc_cantidad_pedida,2)";

	$this->Map['DSPrd_estado']='vp.Prd_estado';
	$this->Map['DSCantxPack']='vp.CantxPack';

	$this->Map['DSsector']='vp.sector';
	$this->Map['DSCategoria']='vp.Categoria';
	$this->Map['DSSubCategoria']='vp.SubCategoria';
	$this->Map['DSTipo']='vp.Tipo';
	$this->Map['DSMarca']='vp.Marca';
	$this->Map['DSPropietario']='vp.Propietario';

	$this->Map['DSPackxBulto']='vp.PackxBulto';
	$this->Map['DSPackPisoPalet']='vp.PackPisoPalet';
	$this->Map['DSPackPalet']='vp.PackPalet';


	$this->Map['DSPromDia']='0';
	$this->Map['DSSugPedido']='0';
	$this->Map['DSDiasStk']='0';

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
function UpdateMultiplesIds(){

	$this->MapaBase();
			
	$cl=new AutoMutation($this->Tabla);			
	$cl->Map=$this->Map;

	$cl->UpdateMultiplesIds($this->Data);
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