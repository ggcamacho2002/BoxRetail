<?php
include_once("class.AutoFiltros.php");
include_once('class.AutoQuery.php');
include_once("class.AutoMutation.php");
include_once('class.database.php');	
include_once('Tools.php');	
include_once('Excel.php');	




header( 'Content-type: text/plain' );

function errorHandler($errno, $errstr, $errfile, $errline, $errcontext) {
    $response = array(
        'success' => false,
        'message' => "Ha ocurrido un error: $errstr en $errfile en la línea $errline"
    );
    echo json_encode($response);
}

// Se establece la función personalizada como manejador de errores
set_error_handler("errorHandler");


$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json,true);

    $Seccion=$data['Seccion'];
    $clase=$data['Class'];

    $arch='../Class'.$Seccion.'/class.'.$clase.'.php';

    include_once($arch);

    $met=$data['Metodo'];

    $claseName = $clase;
    $cl=new $claseName();

    $cl->Call=$data['Call'];
    $cl->Data=$data;   

    $MetodoName = $met;
    $cl->$MetodoName();

    echo $cl->Out;

?>