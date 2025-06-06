<?php


class ExcelProveedorProducto{

//ATTRIBUTE DECLARATION AUTOGENERADO
//==========================

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='ExcelProveedorProducto T0';


function __construct(){
		

 }

 function MapaBase(){

	$this->Map['DSid']='T0.id';

	$this->Map['DSFile']='File';
	$this->Map['COD']='T0.COD';
	$this->Map['PRODUCTO']='T0.PRODUCTO';
	$this->Map['BARCODE']='T0.BARCODE';
	$this->Map['CodPropio']='T0.CodPropio';
	$this->Map['NombrePropio']='T0.NombrePropio';
	
}	

function MapaJoins(){

}	

function ExcelToJson(){

    $rows=ExcelToArray($this->Data['NombreArchivo']);

	$json['result']="Exito";
	$arrJson=ExcelArrayToJson($rows);
	
	$json['datos']=$this->TraerMapeados($arrJson);
    return $json;
}

function TraerMapeados($arrayProductos){

	$productosStr = implode(",", array_map(function ($item) {
		
		return "'" . addslashes($item['PRODUCTO']) . "'";
	}, $arrayProductos));
	
	// Consulta SQL para buscar productos.
	$sql = "SELECT * FROM `distribuidora`.`ml_nombreproducto` WHERE `texto` IN ($productosStr)";
	
	$cl=new Database();
	$cl->Query($sql);
	
	$resultado=$cl->datos;	

	$productosEncontrados = [];
	foreach ($resultado as $fila) {
		$productosEncontrados[$fila['texto']] = $fila;
	}

	
	$resultadosFinales = [];
	foreach ($arrayProductos as $producto) {
		$productoEncontrado = $productosEncontrados[$producto['PRODUCTO']] ?? null;
		$Barcode = $producto['BARCODE'] ?? null;
	
		$resultadosFinales[] = [
			'COD' => $producto['COD'],
			'PRODUCTO' => $producto['PRODUCTO'],
			'BARCODE' =>  $Barcode,
			'CodPropio' => $productoEncontrado ? $productoEncontrado['bdid'] : null,
			'NombrePropio' => $productoEncontrado ? $productoEncontrado['bdnombre'] : null,
		];
	}	

	return $resultadosFinales;

}




function Buscar(){

    $this->MapaBase();
	$this->MapaJoins();

	$json=$this->ExcelToJson();

	Tools_respuestaJson($json);

}


function ListarMapa(){

	$this->MapaBase();
	$this->MapaJoins('');
	
}	

}