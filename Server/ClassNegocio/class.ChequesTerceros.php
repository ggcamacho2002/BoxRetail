<?php
class ChequesTerceros{

	var $Call;
	var $Out;
	var $Data;
	var $Map;
	var $UltIdInsert;
	var $Tabla='cheques_terceros T0';
	var $Joins='		
			   INNER JOIN clientes c ON T0.idcliente = c.id
			   INNER JOIN monedas m ON T0.idmoneda = m.id
	';
	
	
	function __construct(){}
	
	 function MapaBase(){
	
		$this->Map['DSid']='T0.id';
		$this->Map['DSnumerocheque']='T0.numerocheque';
		$this->Map['DSbanco']='T0.banco';
		$this->Map['DSfecha_creacion']='T0.fecha_creacion';
		$this->Map['DSfecha_vencimiento']='T0.fecha_vencimiento';
		$this->Map['DSmonto']='T0.monto';
		$this->Map['DSidmoneda']='T0.idmoneda';
		$this->Map['DSidcliente']='T0.idcliente';
		$this->Map['DSestado']='T0.estado';
		$this->Map['DSfechacobro']='T0.fechacobro';
		$this->Map['DScomentarios']='T0.comentarios';
		$this->Map['DSsys_usuario']='T0.sys_usuario';
	
	}	
	function MapaQuery(){
	
		$this->Map['DSid']='T0.id';
		$this->Map['DSnumerocheque']='T0.numerocheque';
		$this->Map['DSbanco']='T0.banco';
		$this->Map['DSfecha_creacion']='T0.fecha_creacion';
		$this->Map['DSfecha_vencimiento']='T0.fecha_vencimiento';
		$this->Map['DSmonto']='T0.monto';
		$this->Map['DSidmoneda']='T0.idmoneda';
		$this->Map['DSidcliente']='T0.idcliente';
		$this->Map['DSestado']='T0.estado';
		$this->Map['DSfechacobro']='T0.fechacobro';
		$this->Map['DScomentarios']='T0.comentarios';
		$this->Map['DSsys_usuario']='T0.sys_usuario';
	
		$this->Map['DSCliRazonSocial']='c.cli_razon_social';
		$this->Map['DSTipoMoneda']='m.TipoMoneda';
	
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