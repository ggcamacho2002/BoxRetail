
<?php
class ClientesRecibosItems{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='ClientesRecibosItems T0';
var $Joins='
		INNER JOIN clientes c ON T0.idcliente = c.id
		LEFT JOIN cobrosentidades ce ON T0.idcobroentidades = ce.id
';


function __construct(){}

 function MapaBase(){

	$this->Map['DSid']='T0.id';

	$this->Map['DSiddocumento']='T0.iddocumento';
	$this->Map['DSidremito']='T0.idremito';
	$this->Map['DSestado']='T0.estado';
	$this->Map['DSidcliente']='T0.idcliente';
	$this->Map['DSmonto']='T0.monto';
	$this->Map['DSentidad']='T0.entidad';
	$this->Map['DSidentidad']='T0.identidad';
	$this->Map['DSreferencia']='T0.referencia';
	$this->Map['DSidcobroentidades']='T0.idcobroentidades';

}	
function MapaQuery(){

	$this->Map['DSid']='T0.id';

	$this->Map['DSiddocumento']='T0.iddocumento';
	$this->Map['DSidremito']='T0.idremito';
	$this->Map['DSestado']='T0.estado';
	$this->Map['DSidcliente']='T0.idcliente';
	$this->Map['DSmonto']='T0.monto';
	$this->Map['DSentidad']='T0.entidad';
	$this->Map['DSidcobroentidades']='T0.idcobroentidades';
	$this->Map['DSidentidad']='T0.identidad';
	$this->Map['DSreferencia']='T0.referencia';

	$this->Map['DSdetalle'] = "CONCAT(T0.entidad, ' ', IF(T0.entidad <> ce.nombreentidad, ce.nombreentidad, ''), ' ', IF(T0.referencia <> '', CONCAT('(',T0.referencia,')'), ''))";

    $this->Map['DSnombreentidad'] = 'ce.nombreentidad';
	$this->Map['DStasaentidad'] = 'ce.tasa';

	$this->Map['DSchqNro'] =null;
	$this->Map['DSchqBanco'] =null;
	$this->Map['DSchqfechaV'] =null;
	$this->Map['DSchqidmoneda']=null;
	$this->Map['DSchqcoment'] =null;

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

///////////////////////// falta hacer las validaciones 
///////////////////////// por ejemplo si inserta ctacte que realmente tenga saldo

$DSentidad=$this->Data["SetFields"][0]["DSentidad"];
if($DSentidad=="Cheque"){
	   $this->Data["SetFields"][0]["DSidcobroentidades"]=5;
	   $this->Data["SetFields"][0]["DSreferencia"]=$this->Data["SetFields"][0]["DSreferencia"] . '/ Vto:' . $this->Data["SetFields"][0]["DSchqfechaV"];
}
	
	$cl->AutoInsertOne($this->Data);
	$this->Out=$cl->Out;
	$cl=null;

	$idcobro=$this->Out->Ultimo_Id;
	$actualiza=0;

	$DSentidad=$this->Data["SetFields"][0]["DSentidad"];
	if($DSentidad=="Cheque"){
		   $ultimoId=$this->InsertarCheque($idcobro);
		   $actualiza=1;
	}

	if($DSentidad=="Digital"){
		$ultimoId=$this->InsertarCobroDigital($idcobro);
		$actualiza=1;
	}

	if($DSentidad=="CtaCte"){
		$ultimoId=$this->InsertarCobroCtaCte($idcobro);
		$actualiza=1;
	}

		if($actualiza==1){
			$sql="update ClientesRecibosItems cc set cc.`identidad`='$ultimoId' WHERE cc.`id`=$idcobro";
			$cl=new Database();
			$cl->Query($sql);	
			$this->Out=$cl;
			$cl=null;
		}

	
}	
function InsertarCobroDigital($idcobro){

	$ident=$this->Data["SetFields"][0]["DSidcobroentidades"];
	$monto=$this->Data["SetFields"][0]["DSmonto"];
	$ref=$this->Data["SetFields"][0]["DSreferencia"];

	$sql="INSERT INTO `distribuidora`.`cobrodigital` (`idcobroentidades`, `referencia`, `monto`,`idreciboitem`) VALUES ($ident, $ref, $monto,$idcobro);";

	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;

	return $this->Out->Ultimo_Id;

}	
function InsertarCobroCtaCte($idcobro){

	$idrem=$this->Data["SetFields"][0]["DSidremito"];
	$monto=$this->Data["SetFields"][0]["DSmonto"];
	$idcli=$this->Data["SetFields"][0]["DSidcliente"];

	$sql="INSERT INTO `distribuidora`.`ctacteclientes` (`idremito`, `idcliente`,`monto`, `tipo`,`idreciboitem`) VALUES ($idrem,$idcli,$monto,'Deuda',$idcobro);";

	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;

	return $this->Out->Ultimo_Id;

}	
function InsertarCheque($idcobro){


	$nrochq=$this->Data["SetFields"][0]["DSchqNro"];
	$banco=$this->Data["SetFields"][0]["DSchqBanco"];
	$fechaV=$this->Data["SetFields"][0]["DSchqfechaV"];
	$idmoneda=$this->Data["SetFields"][0]["DSchqidmoneda"];
	$monto=$this->Data["SetFields"][0]["DSmonto"];
	$idcli=$this->Data["SetFields"][0]["DSidcliente"];
	$coment=$this->Data["SetFields"][0]["DSchqcoment"];

	session_start();
	$usu=$_SESSION["usu_id"];

	$sql="INSERT INTO `distribuidora`.`cheques_terceros` (`numerocheque`, `banco`, `fecha_vencimiento`, `monto`, `idmoneda`, `idcliente`, `estado`, `fechacobro`, `comentarios`, `sys_usuario`, `idreciboitem`)
													VALUES 	('$nrochq', '$banco', '$fechaV', $monto, $idmoneda, $idcli, 'pendiente', NULL, '$coment', $usu, $idcobro);";

	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;

	return $this->Out->Ultimo_Id;
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