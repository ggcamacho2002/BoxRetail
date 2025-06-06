
<?php
class ClientesRecibosItems{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='clientesrecibositems T0';
var $Joins='
		INNER JOIN clientesrecibos cr ON T0.idrecibo = cr.id
		LEFT JOIN cobrosentidades ce ON T0.idcobroentidades = ce.id
';


function __construct(){}

 function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSestado']='T0.estado';
	$this->Map['DSmonto']='T0.monto';
	$this->Map['DSentidad']='T0.entidad';
	$this->Map['DSidentidad']='T0.identidad';
	$this->Map['DSreferencia']='T0.referencia';
	$this->Map['DSidcobroentidades']='T0.idcobroentidades';
	$this->Map['DSidrecibo']='T0.idrecibo';
	$this->Map['DSidcliente']='T0.idcliente';
	

}	
function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSestado']='T0.estado';
	$this->Map['DSmonto']='T0.monto';
	$this->Map['DSentidad']='T0.entidad';
	$this->Map['DSidcobroentidades']='T0.idcobroentidades';
	$this->Map['DSidentidad']='T0.identidad';
	$this->Map['DSreferencia']='T0.referencia';

	$this->Map['DSdetalle'] = "CONCAT(T0.entidad, ' ', IF(T0.entidad <> ce.nombreentidad, ce.nombreentidad, ''), ' ', IF(T0.referencia <> '', CONCAT('(',T0.referencia,')'), ''))";

    $this->Map['DSnombreentidad'] = 'ce.nombreentidad';
	$this->Map['DStasaentidad'] = 'ce.tasa';

	$this->Map['DSidcliente']='T0.idcliente';
	$this->Map['DSidrecibo']='cr.id';

	$this->Map['DSidRemito']=null;
	$this->Map['DSchqNro']=null;
	$this->Map['DSchqBanco']=null;
	$this->Map['DSchqfechaV']=null;
	$this->Map['DSchqidmoneda']=null;
	$this->Map['DSchqcoment']=null;

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

/*
DSentidad:"Digital"
DSidcobroentidades:"2"
DSidrecibo:"23"
DSmonto:"3000"
DSreferencia:"1000"
*/


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
	$idcliente=$this->Data["SetFields"][0]["DSidcliente"];
	$idrem=$this->Data["SetFields"][0]["DSidRemito"];

	$sql="INSERT INTO `cobrodigital` (`idcobroentidades`, `referencia`, `monto`,`idreciboitem`,`idcliente`,`idremito`) VALUES ($ident, $ref, $monto,$idcobro,$idcliente,$idrem);";

	//print_r($sql);

	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
	$cl=null;

	return $this->Out->Ultimo_Id;

}	
function InsertarCobroCtaCte($idcobro){

	$idrem=$this->Data["SetFields"][0]["DSidRemito"];
	$monto=$this->Data["SetFields"][0]["DSmonto"];
	$idcli=$this->Data["SetFields"][0]["DSidcliente"];

	$sql="INSERT INTO `ctacteclientes` (`idremito`, `idcliente`,`monto`, `tipo`,`idreciboitem`) VALUES ($idrem,$idcli,$monto,'Deuda',$idcobro);";

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
	$idrem=$this->Data["SetFields"][0]["DSidRemito"];

	session_start();
	$usu=$_SESSION["usu_id"];

	$sql="INSERT INTO `cheques_terceros` (`numerocheque`, `banco`, `fecha_vencimiento`, `monto`, `idmoneda`, `idcliente`, `estado`, `fechacobro`, `comentarios`, `sys_usuario`, `idreciboitem`,`idremito`)
													VALUES 	('$nrochq', '$banco', '$fechaV', $monto, $idmoneda, $idcli, 'pendiente', NULL, '$coment', $usu, $idcobro,$idrem);";

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