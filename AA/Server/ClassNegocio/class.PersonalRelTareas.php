<?php
class PersonalRelTareas{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='persoanlreltarea T0';
var $Joins='		
           INNER JOIN personal p ON T0.idpersonal = p.id
           INNER JOIN personaltareas pt ON T0.idtarea = pt.id
';



function __construct(){}

 function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSidpersonal']='T0.idpersonal';
	$this->Map['DSidtarea']='T0.idtarea';
}	

 function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSidpersonal']='T0.idpersonal';
	$this->Map['DSidtarea']='T0.idtarea';
	$this->Map['DSnombrePersonal']='p.p_Nombre';
	$this->Map['DSapellidoPersonal']='p.p_Apellido';
	$this->Map['DSDNIPersonal']='p.p_DNI';	
	$this->Map['DSdetalleTarea']='pt.Detalle';
	$this->Map['DSvalorTarea']='pt.valor';
	$this->Map['DSestadoTarea']='pt.estado';

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