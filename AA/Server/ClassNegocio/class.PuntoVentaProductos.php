<?php

class PuntoVentaProductos{

var $Call;
var $Out;
var $Data;
var $Map;
var $Descuento=0;
var $UltIdInsert;
var $Tabla='productos T0';
var $Joins="		
		   LEFT OUTER JOIN productos_precios pp ON pp.prod_clave=T0.Id
		   LEFT OUTER JOIN productos_ofertas po ON po.idprod=T0.Id  AND po.estado = 'Activo'
";

function __construct(){}

 function MapaBase(){


	$this->Map['DSid']='id';

	$this->Map['DSidProd']='prod_clave';
	$this->Map['DSPVentaUnid']='pp_precioventa';
    $this->Map['DSPVentaPorc']='pp_porcventa';
	
}	

 function MapaQuery(){


	$this->Map['DSid']='T0.Id';
	$this->Map['DSidProd']='T0.Id';
	$this->Map['DSNombreProducto']='T0.Prd_descripcion';
	$this->Map['DSEstadoProducto']='T0.Prd_estado';
	$this->Map['DSCantxPack']='T0.CantxPack';
	$this->Map['DSBarcode']='T0.Barcode';
	$this->Map['DSBarcodePack']='T0.BarcodePack';
	$this->Map['DSPVentaUnid']='pp.pp_precioventa';
	$this->Map['DSPVentaPack']='(pp.pp_precioventa * T0.CantxPack)';
	$this->Map['DSPVentaPorc']='pp.pp_porcventa';

	$PVentaUnidad=$this->DefinirPrecio();
	$this->Map['DSFlagOferta']="IF(po.preciounid = $PVentaUnidad, po.preciounid,'')";

	$this->Map['DSPClienteUnid']=$PVentaUnidad;
	$this->Map['DSPClientePack']='('.$PVentaUnidad.' * T0.CantxPack)';

	$this->Map['DSidCliente']='null';//receptor
	$this->Map['DSidRemito']='null';//receptor
	$this->Map['DSCliDescuento']='null';//receptor

	
}	


function DefinirPrecio(){
	
	$idCliente=BuscarValorFiltro($this->Data["Filtros"], 'DSidCliente');
	$sql="SELECT ct.descuento FROM clientes c JOIN clientes_tipo ct ON c.cli_tipocliente=ct.id AND c.id=$idCliente";
	$cl=new Database();
	$cl->Query($sql);	
	if(isset($cl->datos[0]["descuento"]))$desc=$cl->datos[0]["descuento"];
	else $desc=0;

	$cl=null;

	$PVentaUnidad="LEAST(ROUND(pp.pp_precioventa - (pp.pp_precioventa * ($desc / 100)), 2), IFNULL(po.preciounid, ROUND(pp.pp_precioventa - (pp.pp_precioventa * ($desc / 100)), 2)))";
	return $PVentaUnidad;

}


function Buscar(){

	$this->MapaQuery();

	$isBarcode=$this->verificarCodigoDeBarras($this->Data["Filtros"]);

	$cl=new Autoquery($this->Tabla);			
	$cl->Map=$this->Map;
	$cl->Joins=$this->Joins;
	$cl->SuperTablaQuery($this->Data);

	if($isBarcode==0){
		$this->Out=$cl->Out;
		$cl=null;
	}else{
		if(isset($cl->Out->datos[0]["DSidProd"])){
			$length = count($cl->Out->datos);

			if($length==1){
				$SetFields["DSidRemitoV"]=$this->Data["Filtros"][3]['Valor'];
				$SetFields["DSidCliente"]=$this->Data["Filtros"][2]['Valor'];
				$SetFields["DSidProducto"]=$cl->Out->datos[0]["DSidProd"];
				$SetFields["DScantPedida"]=1;
	
				$this->Out=$cl->Out;
				$cl=null;
			}else{$this->DevolverErrorCodBarra($cl);}

		 }else{	$this->DevolverErrorCodBarra($cl);}
		
	}

}

function DevolverErrorCodBarra($cl) {
	$cl->Out->datos = array();			
	$cl->Out->datos[0]=array();		

	$cl->Out->datos = array(0 => array("DSNombreProducto" => "Error Codigo Barra"));
	$this->Out=$cl->Out;
}


function esCodigoDeBarras($string) {
    // Verifica que el string tenga más de 5 caracteres y solo contenga dígitos
    return preg_match('/^\d{9,}$/', $string);
}

function verificarCodigoDeBarras(&$filtros) { // Nota el uso de & para modificar el array directamente
    foreach ($filtros as &$filtro) {
        if ($filtro['idSrc'] === "DSNombreProducto") {
            if ($this->esCodigoDeBarras($filtro["Valor"])) {
                // Cambiando la clave de idSrc de DSNombreProducto a DSBarcode
                $filtro['idSrc'] = 'DSBarcode';
                return 1; // Es un código de barras
            } else {
                return 0; // No es un código de barras
            }
        }
    }
    return 0; // Devuelve 0 si no se encuentra DSNombreProducto
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