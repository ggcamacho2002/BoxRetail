<?php
class productos{

	var $Call;
	var $Out;
	var $Data;
	var $Map;
	var $UltIdInsert;
	var $Tabla='productos T0';
	var $Joins='		
			   INNER JOIN vista_productos_completa vp ON T0.Id = vp.Id
    ';
	
	
	function __construct(){}
	
	function MapaBase(){

		$this->Map['DSid']='T0.Id';
		$this->Map['DSNombre']='T0.Prd_descripcion';
		$this->Map['DSEstado']='T0.Prd_estado';
		
		$this->Map['DSDetalle']='T0.Detalle';
		$this->Map['DSUnidMedida']='T0.UnidMedida';
		$this->Map['DSMedida']='T0.Medida';
		$this->Map['DSCantxPack']='T0.CantxPack';
		$this->Map['DSTipoInNombre']='T0.TipoInNombre';
		//$this->Map['DSVentaxUnidad']='T0.VentaxUnidad';
		$this->Map['DSPackxBulto']='T0.PackxBulto';
		$this->Map['DSPackPisoPalet']='T0.PackPisoPalet';
		$this->Map['DSPackPalet']='T0.PackPalet';
		$this->Map['DSBarcode']='T0.Barcode';
		$this->Map['DSBarcodePack']='T0.BarcodePack';
		$this->Map['DSBarcodeBulto']='T0.BarcodeBulto';
		$this->Map['DSNota']='T0.Nota';

		$this->Map['DSidMarca']='T0.Mar_Clave';
		$this->Map['DSidCategoriza']='T0.Ctg_clave';


	}	
	function MapaQuery(){

		$this->Map['DSid']='T0.Id';
		$this->Map['DSNombre']='T0.Prd_descripcion';
		$this->Map['DSEstado']='T0.Prd_estado';
		
		$this->Map['DSDetalle']='T0.Detalle';
		$this->Map['DSUnidMedida']='T0.UnidMedida';
		$this->Map['DSMedida']='T0.Medida';
		$this->Map['DSCantxPack']='T0.CantxPack';
		$this->Map['DSTipoInNombre']='T0.TipoInNombre';
		//$this->Map['DSVentaxUnidad']='T0.VentaxUnidad';
		$this->Map['DSPackxBulto']='T0.PackxBulto';
		$this->Map['DSPackPisoPalet']='T0.PackPisoPalet';
		$this->Map['DSPackPalet']='T0.PackPalet';
		$this->Map['DSBarcode']='T0.Barcode';
		$this->Map['DSBarcodePack']='T0.BarcodePack';
		$this->Map['DSBarcodeBulto']='T0.BarcodeBulto';
		$this->Map['DSNota']='T0.Nota';

		$this->Map['DSidMarca']='T0.Mar_Clave';
		$this->Map['DSidCategoriza']='T0.Ctg_clave';

		$this->Map['DSSector']='vp.sector';
		$this->Map['DSCategoria']='vp.Categoria';
		$this->Map['DSSubCategoria']='vp.SubCategoria';
		$this->Map['DSTipo']='vp.Tipo';
		$this->Map['DSTipoResumido']='vp.TipoResumido';
		$this->Map['DSmarca']='vp.Marca';
		$this->Map['DSPropietario']='vp.Propietario';

	}	

function Buscar(){

	
	$this->MapaBase();
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
	$cl->Map=$this->Map;
	$cl->Joins=$this->Joins;
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
	$this->MapaQuery('');
	
}	




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////triggers/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

DELIMITER //

CREATE TRIGGER after_product_insert
AFTER INSERT ON productos
FOR EACH ROW
BEGIN
  -- Verifica si el producto ya existe en la tabla inventario
  IF NOT EXISTS (SELECT * FROM inventario WHERE idproducto = NEW.Id) THEN
    -- Inserta el nuevo producto en la tabla inventario
    INSERT INTO inventario (idproducto, precioultcompra, stockunidades, stockminunidades, diasreposicion)
    VALUES (NEW.Id, NULL, 0, 0, 10);
  END IF;
END;

//
DELIMITER ;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////cargainventario/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO inventario (idproducto)
SELECT p.Id
FROM productos p
WHERE NOT EXISTS (
  SELECT *
  FROM inventario i
  WHERE i.idproducto = p.Id
);

*/




}