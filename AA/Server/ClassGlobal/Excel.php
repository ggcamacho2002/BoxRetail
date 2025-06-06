<?php

require_once '../Frameworks/vendor/autoload.php';
use PhpOffice\PhpSpreadsheet\IOFactory;


function ExcelToArray($filepath){

    $uploadPath = "../Archivos/" . $filepath;
    $spreadsheet = IOFactory::load($uploadPath);
    $worksheet = $spreadsheet->getActiveSheet();
    $rows = $worksheet->toArray();

    return $rows;
}

function ExcelArrayToJson($rows) {
    
   
    $headers = array_shift($rows);
    //$headers = array_map('strtolower', $headers);
    $json = [];

    foreach ($rows as $row) {
        // Filtra cualquier valor que contenga '$\\' antes de agregarlo al JSON
        $filteredRow = array_map(function($value) {
            return str_replace('$\\', '', $value);
        }, $row);

        $json[] = array_combine($headers, $filteredRow);
    }

   return $json;
}



?>