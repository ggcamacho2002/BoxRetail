<?php


function errorHandler($errno, $errstr, $errfile, $errline, $errcontext) {
    $response = array(
        'success' => false,
        'message' => "Ha ocurrido un error: $errstr en $errfile en la línea $errline"
    );
    echo json_encode($response);
}

set_error_handler("errorHandler");







?>