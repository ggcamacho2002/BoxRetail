<?php
class Clientes {

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='clientes T0';
var $Joins='		
           LEFT JOIN clientes_tipo ct ON T0.cli_tipocliente = ct.id
';


function __construct(){}

 function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSrazon_social']='T0.cli_razon_social';
	$this->Map['DSdireccion']='T0.cli_direccion';
	$this->Map['DStelefono']='T0.cli_telefono';
	$this->Map['DSmail']='T0.cli_mail';
	$this->Map['DSestado']='T0.cli_estado';
	$this->Map['DSnombre_adic']='T0.cli_nombre_adic';
	$this->Map['DSImpPorc_IVA']='T0.ImpPorc_IVA';
	$this->Map['DSImpPorc_RENTAS']='T0.ImpPorc_RENTAS';
	$this->Map['DStipocliente']='T0.cli_tipocliente';
	$this->Map['DSmaxctacte']='T0.cli_maxctacte';
	$this->Map['DScheque']='T0.cli_cheque';

	$this->Map['DSidCondicionIva']='T0.idCondicionIva';
	$this->Map['DSdoctipo']='T0.cli_doctipo';
	$this->Map['DSdocnro']='T0.cli_doctipo';



}	

function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSrazon_social']='T0.cli_razon_social';
	$this->Map['DSdireccion']='T0.cli_direccion';
	$this->Map['DStelefono']='T0.cli_telefono';
	$this->Map['DSmail']='T0.cli_mail';
	$this->Map['DSestado']='T0.cli_estado';
	$this->Map['DSnombre_adic']='T0.cli_nombre_adic';
	$this->Map['DSImpPorc_IVA']='T0.ImpPorc_IVA';
	$this->Map['DSImpPorc_RENTAS']='T0.ImpPorc_RENTAS';
	$this->Map['DSidtipocliente']='T0.cli_tipocliente';

	$this->Map['DStipo']='ct.tipo';
	$this->Map['DSdescuento']='ct.descuento';
	$this->Map['DSestado']='ct.estado';
	$this->Map['DSmaxctacte']='T0.cli_maxctacte';
	$this->Map['DScheque']='T0.cli_cheque';

	$this->Map['DSidCondicionIva']='T0.idCondicionIva';
	$this->Map['DSdoctipo']='T0.cli_doctipo';
	$this->Map['DSdocnro']='T0.cli_doctipo';

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