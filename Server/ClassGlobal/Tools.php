<?php


function Tools_deleteDirectory($dir) {
    if(!$dh = @opendir($dir)) return;
    while (false !== ($current = readdir($dh))) {
        if($current != '.' && $current != '..') {
			chmod($dir.'/'.$current,0777);
            if (!@unlink($dir.'/'.$current)) 
            Tools_deleteDirectory($dir.'/'.$current);
        }       
    }
    closedir($dh);
	chmod($dir,0777);
    @rmdir($dir);
}


function Tools_RespuestaJson($json) {
    echo json_encode(utf8ize($json));
}

function utf8ize($mixed) {
    if (is_array($mixed)) {
        foreach ($mixed as $key => $value) {
            $mixed[$key] = utf8ize($value);
        }
    } else if (is_object($mixed)) {
        $a = (array)$mixed; // from object to array
        return utf8ize($a);
    }
    return $mixed;
}

function BuscarValorFiltro($arrFiltros, $idSrc) {
    foreach ($arrFiltros as $filtro) {
        if ($filtro['idSrc'] === $idSrc) {
            return $filtro['Valor'];
        }
    }
    return null;
}




?>