<?php
class Robot{

var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='';
var $Joins='';


function __construct(){}

 function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSMsgInput']='T0.Nombre';
	$this->Map['DSMsgOutput']='T0.porcentaje';
}	

 function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSMsgInput']='T0.Nombre';
	$this->Map['DSMsgOutput']='T0.porcentaje';

}	

function Buscar(){

	$contexto="Elimina todas las palabras innecesarias y crea una json a partir del siguiente mensaje de un cliente que realiza un pedido de productos:";
	$inputMsg= $contexto . $this->Data['Param'][0]['Value'];
	$inputMsg=$inputMsg.  "La json debe tener las siguientes propiedades: Producto, Cantidad (si aplica), Unidad de Medida (si aplica), y Tamaño (si aplica). no agragues notas ni nada , no comentes , no preguntes si necesito algo, la respuesta solo debe contener el json";
	$inputMsg=$inputMsg.  'ejemplo: [ {"Producto": "Vino Trumpeter o Nicasia", "Cantidad": 3, "Unidad de Medida": "cajas"}, {"Producto": "Champagne", "Cantidad": 2, "Unidad de Medida": "cajas"}, {"Producto": "Agua", "Cantidad": 3, "Unidad de Medida": "packs", "Tamaño": "saborizada"}, {"Producto": "Gaseosas Coca", "Cantidad": 2, "Unidad de Medida": "packs", "Tamaño": "sin azúcar"}, {"Producto": "Sprite", "Cantidad": 1, "Unidad de Medida": "packs", "Tamaño": "sin azúcar"} ]";';

	$out= $this->Execute($inputMsg);
	$resp=$out['choices'][0]['message']['content'];
	//print_r($resp);
		
	$this->Out =$this->generarHTML($resp);

}



function ListarMapa(){

	//$this->MapaBase();
	$this->MapaQuery();
	
}	

function Execute($msg){

	
	$apiKey = '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';
	
	$data = [
		'messages' => [
			[
				'role' => 'user',
				'content' => $msg
			]
		],
		'temperature'=> 0.05,
		'model' => 'llama3-70b-8192'////https://console.groq.com/docs/models
	];
	
	$ch = curl_init();
	
	curl_setopt($ch, CURLOPT_URL, "https://api.groq.com/openai/v1/chat/completions");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
	curl_setopt($ch, CURLOPT_HTTPHEADER, [
		'Authorization: Bearer ' . $apiKey,
		'Content-Type: application/json'
	]);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Deshabilitar verificación SSL (no recomendado)
	
	$response = curl_exec($ch);
	
	if (curl_errno($ch)) {
		echo 'Error:' . curl_error($ch);
	} else {
		$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
		if ($httpcode == 200) {
			$result = json_decode($response, true);
			return $result;
		} else {
			echo "HTTP Error Code: $httpcode\n";
			echo "Response: $response\n";
		}
	}
	
	curl_close($ch);
	


}	


function generarHTML($json) {
    // Decodificar el JSON
	
    $pedido = json_decode($json, true);
   
    // Comenzar el HTML
    $html = '<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedido</title>
</head>
<body>

    <h1>Detalle del Pedido</h1>
    <table style="border:1px solid gray;width: 100%;">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Unidad de Medida</th>
                <th>Tamaño</th>
            </tr>
        </thead>
        <tbody>';
    
    // Iterar sobre los elementos del pedido para crear las filas de la tabla
    foreach ($pedido as $item) {
        $html .= '<tr>
                    <td style="height:30px;">' . htmlspecialchars($item['Producto']) . '</td>
                    <td>' . htmlspecialchars($item['Cantidad']) . '</td>
                    <td>' . htmlspecialchars($item['Unidad de Medida']) . '</td>
                    <td>' . htmlspecialchars($item['Tamaño']) . '</td>
                </tr>';
    }
    
    // Cerrar el HTML
    $html .= '</tbody>
    </table>
</body>
</html>';
    
    return $html;
}







}