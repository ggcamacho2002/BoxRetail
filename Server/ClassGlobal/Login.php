<?php


include_once('class.database.php');
include_once('Tools.php');

header( 'Content-type: text/plain' );
$json = file_get_contents('php://input');
$data = json_decode($json,true);

$met=$data['Metodo'];

switch($met){
 
	case 'Ingresar': LoginIngresar($data); break;
	case 'Salir': break;



}


function LoginIngresar($data){

	$inputs=$data['Param'];
	$Nombre=$inputs['NombreUsuario'];
	$clave=$inputs['Clave'];


	$sql="SELECT u.`id`,u.`usu_nombre` FROM app_usuarios u WHERE u.`usu_nombre`='$Nombre' AND u.`usu_clave`='$clave' AND u.`usu_estado`='Activo'";
	$cl=new Database();
	$cl->Query($sql);

	if($cl->result=='Exito'){

		if($cl->datos<>'NO-DATOS'){
			
			$datos=$cl->datos[0];
			
			if(isset($datos['id'])){

				session_start();
				$_SESSION["session_id"] = session_id();
				$_SESSION["usu_id"] =$datos['id'];
				$_SESSION["usu_nombre"] = $datos['usu_nombre'];
				$_SESSION["horaInicio"] = date("Y-m-d H:i:s");

				Tools_RespuestaJson($_SESSION);
			
			}

		}else{

			print_r('No Se encontro el Usuario !!!!');

		}		
	}
}

function VerificarSession($data){
			
			$id=$data['session_id'];

}




?>