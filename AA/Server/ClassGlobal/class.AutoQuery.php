<?php

class AutoQuery{

//ATTRIBUTE DECLARATION
//==========================
//var $ArrCfg;
var $Where='';
var $Tabla='';
var $Orden='';
var $Limit='';
var $Columns='';
var $Map='';
var $Joins;
var $auxCol;
var $Param;
var $Out;

public function __construct($Tabla)
{	    
    $this->Tabla=$Tabla;
	
}

function SuperTablaQuery($D){

	if(isset($D['Columns'])){$this->auxCol=$D['Columns'];}

	if(isset($D['Filtros'])){
		
		$cl=new AutoFiltros();			
		$cl->Map=$this->Map;
		$cl->TraerAllFiltros($D);
		$this->Where=$cl->Out;	
		$cl=null;
		    		
	}
	if(isset($D['Orden'])){
		$this->ArmarOrden($D['Orden']);
     }
	 if(isset($D['Param'])){
		$this->ArmarParam($D['Param']);
     }
	 if(isset($D['Columns'])){
		$this->ArmarColumns($D['Columns']);
    }

	$this->ExeQuery();

}

function ExeQuery(){

	if($this->Columns<>''){

		if($this->Where<>'')$this->Where=' WHERE ' .$this->Where;
				
		$sql='SELECT '.$this->Columns.' FROM '.$this->Tabla.' '.$this->Joins.$this->Where.$this->Orden.$this->Limit;
		//echo $sql;

		$cl=new Database();
		$cl->Query($sql);
		
		$this->Out=$cl;
	   
	   }else echo 'Error: No se definieron columnas';

}

function BuscarById($D){

	if(isset($D['Columns'])){$this->auxCol=$D['Columns'];}

	if(isset($D['Columns'])){
		$this->ArmarColumns($D['Columns'],'T0');
    }

	
	if(isset($D['Filtros'])){
		
		$cl=new AutoFiltros();			
		$cl->Map=$this->Map;
		$cl->TraerAllFiltros($D);
		$this->Where=$cl->Out;	
		$cl=null;
		    		
	}

	$this->ExeQuery();

}

function ArmarOrden($array){
    $a=0;
	$orden='';

	foreach ($array as $key => $val){
		if($a==0)$coma='';else $coma=',';
		$idSrcMap=$this->Map[$val['idSrc']];
		$orden.=$coma.$idSrcMap.' '.$val["Tipo"];
		$a='1';
	}

	if($orden<>'')$this->Orden=' ORDER BY '.$orden;

}
function ArmarColumns($arr){

    $a=0;
	$cols='';
	
	foreach ($arr as $key => $val){
      
		if($a==0)$coma='';else $coma=',';

		
		$idSrcMap=$this->Map[$val["idSrc"]];
		
		//print_r($idSrcMap);
		
		if($idSrcMap!='null' && $idSrcMap!=null){
			$cols.=$coma.'('.$idSrcMap.')'.$val["idSrc"];
			$a='1';
		}
	}

	if($cols<>'')$this->Columns=$cols;

}


function ArmarParam($arr){

    $a=0;
	$Param='';
		if(isset($arr['DSLimite']))$this->Limit=' LIMIT '.$arr['DSLimite'];



	if($Param<>'')$this->Param=$Param;

}


}
?>