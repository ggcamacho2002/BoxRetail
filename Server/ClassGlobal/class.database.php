<?php

 class Database
 { // Class : begin
 
 //Outputs
 var $result;
 var $datos;
 var $rows;
 var $Ultimo_Id;
 var $Error;
 var $ErrorNro;
 var $TipoOp;
 var $queryId;
 var $Out;
 
 function __construct() { 

 date_default_timezone_set('America/Argentina/Buenos_Aires');
 
  $this->Error='0';
  $this->rows = '0';
  
} // Method : end

    function Conect($query) { 
//print_r($query);
        $host = "localhost"; 
        $password = "elrojo2002"; 
        $user = "root";          
        $database = "distribuidora"; 


        $link = new mysqli($host,$user,$password) or die ($this->Error="Class Database: Error while connecting to DB (link)");
        $selected = mysqli_select_db($link,$database) or die ($this->Error="Class Database: Error while selecting DB"); 

        if (!$resultado = mysqli_query($link, $query)) {
            $this->Error='Error: ' .mysqli_errno($link).': '.mysqli_error($link);
            $this->ErrorNro=mysqli_errno($link);
        }
        if (mysqli_warning_count($link)) {
          $e = mysqli_get_warnings($link);
              do {
                    $this->Error= "Warning: $e->errno: $e->message\n";
                    $this->ErrorNro=$e->errno;
              } while ($e->next());
        }

      if($this->Error=='0'){
      
        if(is_object($resultado)) $this->rows = $resultado->num_rows;          
          $this->result=$resultado;   
          $this->Ultimo_Id=mysqli_insert_id($link); 
      }
      mysqli_close($link);

    } 
   
    function Query($sql) { 
      $this->TipoOp='Query';

      $this->Conect($sql);      

      if($this->Error=='0'){
  
          //print_r($this);
          if($this->rows>0){
                while ($row = mysqli_fetch_assoc($this->result)) {						
                  $ret[] =$row;	
                }	
              
              $this->result='Exito';
              $this->datos=$ret;
          }else{
            $this->result='Exito';
            $this->datos="NO-DATOS";
          
          }	
  
          $this->queryId=$this->Ultimo_Id;
        
      }else{$this->result='Error';}	

    } 





    
}

?>
