<?php

include_once('class.SueldosLiquidacionItems.php');

class sueldosliquidacion{

	var $Call;
	var $Out;
	var $Data;
	var $Map;
	var $UltIdInsert;
	var $Tabla='sueldosliquidacion T0';
	var $Joins='		
			   INNER JOIN personal p ON T0.idpersonal = p.id
			   INNER JOIN sindicatos s ON T0.idsindicato = s.id
			   INNER JOIN sindicatosbasicos sb ON T0.idsindicatocat = sb.id
			   INNER JOIN obrasocial os ON T0.idobrasocial = os.id
	';
	
	function __construct(){}
	
	function MapaBase(){
	
		$this->Map['DSid']='T0.id';
		$this->Map['DSidpersonal']='T0.idpersonal';
		$this->Map['DSremunerativos']='T0.remunerativos';
		$this->Map['DSnoremunerativos']='T0.noremunerativos';
		$this->Map['DSdescuentos']='T0.descuentos';
		$this->Map['DSneto']='T0.neto';
		$this->Map['DSfecha_creacion']='T0.fecha_creacion';
		$this->Map['DSanio']='T0.anio';
		$this->Map['DSmes']='T0.mes';
		$this->Map['DShorasal50']='T0.horasal50';
		$this->Map['DShorasal100']='T0.horasal100';
		$this->Map['DSdiastrabajados']='T0.diastrabajados';
		$this->Map['DSdiasferiados']='T0.diasferiados';
		$this->Map['DSidsindicato']='T0.idsindicato';
		$this->Map['DSidsindicatocat']='T0.idsindicatocat';
		$this->Map['DSporcsindicato']='T0.porcsindicato';
		$this->Map['DSbasico']='T0.basico';
		$this->Map['DSantiguedad']='T0.antiguedad';
		$this->Map['DSidobrasocial']='T0.idobrasocial';
		$this->Map['DSadicionalzona']='T0.adicionalzona';
		$this->Map['DShorasxjornal']='T0.horasxjornal';
	}	
	function MapaQuery(){

		$this->Map['DSid']='T0.id';
		$this->Map['DSidpersonal']='T0.idpersonal';
		$this->Map['DSremunerativos']='T0.remunerativos';
		$this->Map['DSnoremunerativos']='T0.noremunerativos';
		$this->Map['DSdescuentos']='T0.descuentos';
		$this->Map['DSneto']='T0.neto';
		$this->Map['DSfecha_creacion']='T0.fecha_creacion';
		$this->Map['DSanio']='T0.anio';
		$this->Map['DSmes']='T0.mes';
		$this->Map['DShorasal50']='T0.horasal50';
		$this->Map['DShorasal100']='T0.horasal100';
		$this->Map['DSdiastrabajados']='T0.diastrabajados';
		$this->Map['DSdiasferiados']='T0.diasferiados';
		$this->Map['DSidsindicato']='T0.idsindicato';
		$this->Map['DSidsindicatocat']='T0.idsindicatocat';
		$this->Map['DSporcsindicato']='T0.porcsindicato';
		$this->Map['DSbasico']='T0.basico';
		$this->Map['DSantiguedad']='T0.antiguedad';
		$this->Map['DSidobrasocial']='T0.idobrasocial';
		$this->Map['DSadicionalzona']='T0.adicionalzona';
		$this->Map['DShorasxjornal']='T0.horasxjornal';
	
		$this->Map['DSnombrePersonal']='p.p_Nombre';
		$this->Map['DSapellidoPersonal']='p.p_Apellido';
		$this->Map['DSnombreSindicato']='s.Nombre';
		$this->Map['DSporcentajeSindicato']='s.Porcentaje';
		$this->Map['DScategoriaSindicato']='sb.categoria';
		$this->Map['DSbasicoSindicato']='sb.basico';
		$this->Map['DSnombreObrasocial']='os.nombre';
		$this->Map['DSestadoObrasocial']='os.estado';
	
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
	$this->Data['SetFields']['DSid']=uniqid();

	$cl->AutoInsertOne($this->Data);
	$this->Out=$cl->Out;

	//print_r($cl);
	$cl=null;

	$ultimoId=$this->Out->Ultimo_Id;
	$this->CargarOneLiquidacion($ultimoId);

	
	//$this->Out->QueryId=$ultimoId;
    
	


}	

function CargarOneLiquidacion($ultimoId){

	$arrVariables['Basico']=$this->Data['SetFields'][0]["DSbasico"];
	$arrVariables['DiasTrabjados']=$this->Data['SetFields'][0]["DSdiastrabajados"];
	$arrVariables['CantFeriados']=$this->Data['SetFields'][0]["DSdiasferiados"];
	$arrVariables['HorasxJornal']=$this->Data['SetFields'][0]["DShorasxjornal"];
	$arrVariables['Antiguedad']=$this->Data['SetFields'][0]["DSantiguedad"];
	$arrVariables['Extas50']=$this->Data['SetFields'][0]["DShorasal50"];
	$arrVariables['Extas100']=$this->Data['SetFields'][0]["DShorasal100"];

	

	$cl=new SueldosLiquidacionItems();
	$cl->CargarOneLiquidacion($ultimoId,$arrVariables);	

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