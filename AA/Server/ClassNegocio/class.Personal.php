<?php
class Personal{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='personal T0';
var $Joins='

		INNER JOIN personalsindicato ps ON T0.id=ps.idpersonal
		INNER JOIN sindicatos s ON ps.idsindicato = s.id
		INNER JOIN sindicatosbasicos sb ON ps.idcategoria = sb.id
		LEFT JOIN obrasocial os ON T0.idobrasocial = os.id
';


function __construct(){}

 function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSp_Nombre']='T0.p_Nombre';
	$this->Map['DSp_Apellido']='T0.p_Apellido';
	$this->Map['DSp_DNI']='T0.p_DNI';
	$this->Map['DSp_FechaNacimiento']='T0.p_FechaNacimiento';
	$this->Map['DSp_Sexo']='T0.p_Sexo';
	$this->Map['DSp_Nacionalidad']='T0.p_Nacionalidad';
	$this->Map['DSp_EstadoCivil']='T0.p_EstadoCivil';
	$this->Map['DSp_Direccion']='T0.p_Direccion';
	$this->Map['DSp_Telefono']='T0.p_Telefono';
	$this->Map['DSp_Email']='T0.p_Email';
	$this->Map['DSp_FechaIngreso']='T0.p_FechaIngreso';
	$this->Map['DSEstado']='T0.p_Estado';
	$this->Map['DShorasxjornal']='T0.p_horasxjornal';
}	

 function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSp_Nombre']='T0.p_Nombre';
	$this->Map['DSp_Apellido']='T0.p_Apellido';
	$this->Map['DSp_DNI']='T0.p_DNI';
	$this->Map['DSp_FechaNacimiento']='T0.p_FechaNacimiento';
	$this->Map['DSp_Sexo']='T0.p_Sexo';
	$this->Map['DSp_Nacionalidad']='T0.p_Nacionalidad';
	$this->Map['DSp_EstadoCivil']='T0.p_EstadoCivil';
	$this->Map['DSp_Direccion']='T0.p_Direccion';
	$this->Map['DSp_Telefono']='T0.p_Telefono';
	$this->Map['DSp_Email']='T0.p_Email';
	$this->Map['DSp_FechaIngreso']='T0.p_FechaIngreso';
	$this->Map['DSEstado']='T0.p_Estado';
	$this->Map['DShorasxjornal']='T0.p_horasxjornal';

	$this->Map['DSidSindicato']='s.id';
	$this->Map['DSidcatSindicato']='sb.id';
	$this->Map['DSidObraSocial']='os.id';


	$this->Map['DSnombreSindicato']='s.Nombre';
	$this->Map['DSPorcentaje']='s.porcentaje';
	$this->Map['DScategoria']='sb.categoria';
	$this->Map['DSObraSocial']='os.nombre';
	$this->Map['DSBasico']='sb.basico';
	$this->Map['DSAntiguedad']='FLOOR(DATEDIFF(CURDATE(), p_FechaIngreso) / 365.25)';

	
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


	$sql="INSERT INTO `distribuidora`.`personalsindicato` (`idpersonal`, `idsindicato`, `idcategoria`) VALUES ($ultimoId, 1, 1);";

	$cl=new Database();
	$cl->Query($sql);	
	$this->Out=$cl;
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