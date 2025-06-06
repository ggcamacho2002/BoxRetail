<?php


class AutoMutation{

//ATTRIBUTE DECLARATION
//==========================
//var $ArrCfg;
var $Where='';
var $Tabla='';
var $Columns='';
var $Map='';
var $Out;

public function __construct($Tabla)
{	    
    $this->Tabla=$Tabla;
	
}

function AutoInsertOne($datos){

    $arr=$datos['SetFields'];

    $this->Tabla=str_replace(" T0", "", $this->Tabla);
    $sql='INSERT INTO '.$this->Tabla.' SET ';


    foreach ($arr[0] as $key=> $val){  
        if(isset($this->Map[$key])){ 
            if($key!="DSid"){
                $idSrcMap=$this->Map[$key];
                $idSrcMap = str_replace("T0.", "", $idSrcMap);
                $sql.=$idSrcMap."='".$val."',";
            }
        }
    }    

    $sql = substr($sql, 0, -1);

    $cl=new Database();

   //echo $sql;
    $cl->Query($sql);
    
    $this->Out=$cl;
	
}
function AutoUpdateById($datos){

    $arr=$datos['SetFields'];

   if($datos['Filtros'][0]["idSrc"]=="DSid"){ 
        if($datos['Filtros'][0]["Valor"]<>''){

      
                $id=$datos['Filtros'][0]["Valor"];

                    $sql='UPDATE '.$this->Tabla.' SET ';
 
                    foreach ($arr[0] as $key=> $val){  
                       if(isset($this->Map[$key])){ 
                                $idSrcMap=$this->Map[$key];
                                $sql.=$idSrcMap."='".$val."',";
                        }
                    }    

                    $sql = substr($sql, 0, -1);
                    $sql .=" WHERE id='". $id."'";
                  // echo $sql;
                    $cl=new Database();
                    $cl->Query($sql);
                    
                    $this->Out=$cl;
        }

  }
}
function AutoSrvDeleteOneReg($datos){

   if($datos['Filtros'][0]["idSrc"]=="DSid"){ 
        if($datos['Filtros'][0]["Valor"]<>''){
                $id=$datos['Filtros'][0]["Valor"];

                    $sql='DELETE FROM '.$this->Tabla." WHERE id='". $id."'";
                    //echo $sql;
                    $cl=new Database();
                    $cl->Query($sql);
                    
                    $this->Out=$cl;
        }

  }
}
function UpdateMultiplesIds($datos) {

    $arr = $datos['SetFields'];

    $sql = 'UPDATE ' . $this->Tabla . ' SET ';
    
    $DSidMap=$this->Map['DSid'];


    $caseStatements = [];
    $ids = [];

    $fields = array_keys($arr[0]);
    foreach ($fields as $field) {


       if(isset($this->Map[$field])){
                $fieldMap=$this->Map[$field];
                if ($field != 'DSid') {  
                    $caseStatements[$field] = "$fieldMap = CASE $DSidMap ";
                }
       }

    }

    foreach ($arr as $item) {
        $id = $item['DSid'];
        $ids[] = $id;

        foreach ($item as $field => $value) {
            if ($field != 'DSid') {
                if(isset($caseStatements[$field])){$caseStatements[$field] .= "WHEN $id THEN $value ";}
            }
        }
    }

    foreach ($caseStatements as $field => $caseStatement) {
        $fieldMap=$this->Map[$field];
        $sql .= $caseStatement . "ELSE $fieldMap END, ";
    }

    $sql = rtrim($sql, ', ');
    $sql .= " WHERE $DSidMap IN (" . implode(', ', $ids) . ");";

  //echo $sql;
    $cl=new Database();
    $cl->Query($sql);
    
    $this->Out=$cl;
}





function AutoInsertMultiples($datos){

    $arr=$datos['SetFields'];

    $sql='';
    $ins='';
    $campos='';
    $newArr=[];

    $primerReg=reset($arr);

    foreach ($primerReg as $key => $val){ 

            if(isset($this->Map[$key])){ 
                if($key!="DSid"){
                    $newArr[$key]=str_replace("T0.", "", $this->Map[$key]);
                    $campos.=str_replace("T0.", "", $this->Map[$key]).",";
                }
             }    
    }
    

    $campos = substr($campos, 0, -1);

   
    $insTotal = ''; // Inicializa la cadena de inserción total fuera del bucle
    foreach ($arr as $key => $val){
        $item = $val;
    
        $ins = '('; // Inicia la construcción de la tupla de inserción para el elemento actual
        foreach ($item as $key2 => $val2){
            if(isset($newArr[$key2])){
                $ins .= "'".$val2."',"; // Añade el valor a la tupla
            }
        }
    
        $ins = substr($ins, 0, -1); // Elimina la última coma
        $ins .= '),'; // Cierra la tupla y prepara para el siguiente valor
    
        $insTotal .= $ins; // Añade la tupla a la cadena de inserción total
    }
    
    $insTotal = substr($insTotal, 0, -1); 

    $tabla=str_replace(" T0", "", $this->Tabla);
    $sql="INSERT INTO $tabla ($campos) VALUES $insTotal";

     $cl=new Database();
     $cl->Query($sql);
    
  //  $this->Out=$cl;
    

}


}
?>