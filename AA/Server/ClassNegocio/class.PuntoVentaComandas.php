<?php
include_once('class.ClientesRecibos.php');

class PuntoVentaComandas{

	var $Call;
	var $Out;
	var $Data;
	var $Map;
	var $UltIdInsert;
	var $Tabla='remitos_ventas T0';
	var $Joins='		
			   LEFT JOIN clientesrecibos cr ON T0.id = cr.idremito and cr.entidad="POS"
			   INNER JOIN clientes c ON T0.cli_clave = c.id
			   INNER JOIN clientes_tipo ct ON c.cli_tipocliente = ct.id
	';
	
	
	function __construct(){}
	
	 function MapaBase(){
	
		$this->Map['DSid']='T0.id';
		$this->Map['DSrev_estado']='T0.rev_estado';
		$this->Map['DSrev_fecha']='T0.rev_fecha';
		$this->Map['DScli_clave']='T0.cli_clave';
		$this->Map['DSsys_usuario']='T0.sys_usuario';
		$this->Map['DSrev_Sector']='T0.rev_sector';
		$this->Map['DScomentario']='T0.rev_comentario';
	
	}	
	function MapaQuery(){
	
		$this->Map['DSid']='T0.id';
		$this->Map['DSrev_estado']='T0.rev_estado';
		$this->Map['DSrev_fecha']='T0.rev_fecha';
		$this->Map['DScli_clave']='T0.cli_clave';
		$this->Map['DSsys_usuario']='T0.sys_usuario';
		$this->Map['DSrev_Sector']='T0.rev_Sector';
		$this->Map['DScomentario']='T0.rev_comentario';
	
		$this->Map['DScli_razon_social']='c.cli_razon_social';
		$this->Map['DScli_direccion']='c.cli_direccion';
		$this->Map['DScli_doctipo']='c.cli_doctipo';
		$this->Map['DScli_docnro']='c.cli_docnro';
		$this->Map['DScli_telefono']='c.cli_telefono';
		$this->Map['DScli_mail']='c.cli_mail';
		$this->Map['DScli_estado']='c.cli_estado';

		$this->Map['DScheque']='c.cli_cheque';
		$this->Map['DSmaxctacte']='c.cli_maxctacte';
		$this->Map['DScli_Descuento']='ct.descuento';
		$this->Map['DSidrecibo']='cr.id';



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

	session_start();

	$this->Data['SetFields'][0]['DSsys_usuario']=$_SESSION["usu_id"];
	$this->Data['SetFields'][0]['DSrev_Sector']='POS';

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

///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////EXTRAS/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

function CrearRecibo(){

	session_start();

	$idRemito=$this->Data['SetFields'][0]['DSid'];


	$sql="SELECT count(c.`id`)cant FROM clientesrecibos c WHERE c.`idremito`=$idRemito;";
	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cant=$cl->datos[0]["cant"];
	$cl=null;
	
    if($cant=='0'){

		$cl=new ClientesRecibos();	
		$cl->Data['SetFields'][0]['DSidremito']=$idRemito;
		$cl->Data['SetFields'][0]['DSidcliente']=$this->Data['SetFields'][0]['DScli_clave'];
		$cl->Data['SetFields'][0]['DSsys_usuario']=$_SESSION["usu_id"];
		$cl->InsertOne();	

	}
}	

function CrearPedido(){

	session_start();

	$idRemito=$this->Data['SetFields'][0]['DSid'];


	$sql="UPDATE remitos_ventas r SET r.`rev_estado`='Pedido' WHERE r.`id`=$idRemito;";
	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;

	$sql="UPDATE items_remitos_ventas r SET r.`irv_estado`='Pedido' WHERE r.`rev_clave`=$idRemito;";
	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;
	

}	
function CambiarCliente(){

	$idRem=$this->Data['SetFields'][0]['DSid'];
	$idcliente=$this->Data['SetFields'][0]['DScli_clave'];

	$sql="SELECT ct.descuento FROM clientes c JOIN clientes_tipo ct ON c.cli_tipocliente=ct.id AND c.id=$idcliente";
	$cl=new Database();
	$cl->Query($sql);	
	if(isset($cl->datos[0]["descuento"]))$desc=$cl->datos[0]["descuento"];
	else $desc=0;
	$cl=null;

	$sql="	
		CALL ggc_ComandasCambiarCliente($idcliente,$idRem,$desc);
	";

	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;


}	
function ComandaPendiente(){


	session_start();
	$usu=$_SESSION["usu_id"];

	$sql="SELECT r.*,c.cli_razon_social,c.cli_maxctacte,c.cli_cheque FROM remitos_ventas r LEFT OUTER JOIN clientes c ON r.cli_clave=c.id WHERE r.`sys_usuario`=$usu AND r.`rev_estado`='Formando';";

	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;
}	

function AnularComanda(){

	session_start();
	$usu=$_SESSION["usu_id"];
	$idremito=$this->Data['SetFields'][0]['DSid'];
	$Comentario=$this->Data['SetFields'][0]['DScomentario'];

	$sql="	
		CALL ggc_ComandasAnular($idremito,'$Comentario',$usu);
	";

	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;
}	



function ImprimirComanda(){

	$idremito=$this->Data["Param"][0]["Value"];

	$sql="	
			SELECT (r.`rev_fecha`)fecha,(c.`cli_razon_social`)cliente FROM remitos_ventas r
			LEFT OUTER JOIN clientes c ON r.cli_clave=c.id 
			WHERE r.`id`=$idremito;
	";

	$cl=new Database();
	$cl->Query($sql);	
	$rem=$cl->datos[0];
	$cl=null;
	$fecha =$rem['fecha'];
    $cliente = $rem['cliente'];

	$sql="	
			SELECT (p.`Prd_descripcion`)prod,(i.`irv_cantidad_pedida`)cant,(i.`irv_precioventa`)precio,round(i.`irv_cantidad_pedida`* i.`irv_precioventa`,2)subtotal 
			FROM items_remitos_ventas i
			LEFT OUTER JOIN productos p ON i.prd_clave=p.Id
			WHERE i.`rev_clave`=$idremito;
	";

	$cl=new Database();
	$cl->Query($sql);	
	$datos=$cl->datos;
	$body="";
	$cl=null;
	$total=0;

	foreach ($datos as $dato) {
		$prod = $dato['prod']; 
		$cant = $dato['cant'];
		$precio = $dato['precio'];
		$subtotal =  $dato['subtotal'];
		$body.="<div class='SubImpBody'>
					<span class='SubImpBody1'>$prod</span>
					<span class='SubImpBody2'>Un:$cant x $$precio - Total: $$subtotal</span>
			   </div>";

		$total=$total+$subtotal;
	}

	$total=round($total, 2);

	$this->Out="
		<div class='ImpCab'>
				<span class='ImpCab1'>Comanda</span>
				<span class='ImpCab2'>Nro: $idremito</span>
				<span class='ImpCab3'>----------------------------------</span>
				<span class='ImpCab4'>Ticket no valido como factura</span>
				<span class='ImpCab3'>----------------------------------</span>
				<span class='ImpCab5'>Fecha: $fecha</span>
				<span class='ImpCab6'>Cliente: <p>$cliente</p></span>
				<span class='ImpCab7'>Items de comanda</span>
		</div>
		<div class='ImpBody'>$body</div>
		<div class='ImpFooter'>
				<span class='ImpFooter1'>Total: $$total</span>
		</div>
	";


}	



}