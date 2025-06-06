<?php
include_once('class.database.php');
include_once('Tools.php');

header( 'Content-type: text/plain' );
$json = file_get_contents('php://input');
$data = json_decode($json,true);

$met=$data['Metodo'];

switch($met){
 
	case 'Iniciar': Iniciar($data); break;
	case 'Salir': break;
}


function Iniciar($data){

	$inputs=$data['Param'];
	$usu_nombre=$inputs['usu_nombre'];

	session_start();

	$usu_id=$_SESSION['usu_id'];


	$sql="
			SELECT m.*
			FROM app_usuarios u
			Inner JOIN app_rolesmodulos mr ON mr.idrol = u.idrol
			Inner JOIN app_modulos m ON mr.idmodulo = m.id
      		WHERE u.id = $usu_id and m.estado='Activo'
			  ORDER BY m.orden_seccion asc , m.orden_subseccion asc,m.orden_modulo asc
	";
	$cl=new Database();
	$cl->Query($sql);

	if($cl->result=='Exito')Tools_RespuestaJson($cl->datos);
	else print_r('Error de Login !!!!');


}



?>