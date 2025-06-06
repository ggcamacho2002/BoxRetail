<?php

class AutoFiltros{

//ATTRIBUTE DECLARATION
//==========================
//var $ArrCfg;
var $Where='';
var $Map='';
var $auxCol;
var $Out;

public function __construct()
{	    
  
	
}

function TraerAllFiltros($D){

	if(isset($D['Columns'])){$this->auxCol=$D['Columns'];}
	if(isset($D['Filtros'])){$this->ArmarFiltros($D['Filtros']);}

	 $this->Out=$this->Where;
	

}


function ArmarFiltros($arr){

	foreach ($arr as $key => $val){
    
				if($this->Where<>''){	
					if(isset($arr[$key]['Conex'])){
							if($arr[$key]['Conex']=='AND')$conex=' AND ';
							if($arr[$key]['Conex']=='OR')$conex=' OR ';
					}$conex=' AND ';

				}else $conex=' ';

				$Valor=$arr[$key]['Valor'];
				if(isset($arr[$key]['Tipo']))$Tipo=$arr[$key]['Tipo']; else $Tipo='Igual';

						if($arr[$key]['idSrc']<>'ST_BusqFull')	{
							
								$idSrcMap=$this->Map[$arr[$key]['idSrc']];
								if($idSrcMap!='null'){
									$this->Where.=$conex.$this->ArmaOperador($Tipo,$idSrcMap,$Valor);
								}
								
						}else{
	
							$Tipo='Like';
							$idSrcMap=$this->BusquedaFull();
							$this->Where.=$conex.$this->WhereToGral($idSrcMap,$Valor);		

						}		

			}
}


function BusquedaFull(){

	$a=0;
	$cols='';

	foreach ($this->auxCol as $k => $v){

		if($a==0)$coma='';else $coma=',';
		$idSrcMap=$this->Map[$v['idSrc']];
		$cols.=$coma.'IFNULL('.$idSrcMap.",'')";
		$a=1;
	}
	
	return 'CONCAT('.$cols.') ';

}	


function ArmaOperador($Tipo,$idSrc,$Valor){

	$Valor=urldecode($Valor);
	
	switch($Tipo){

		//case "Like": $r=$idSrc." LIKE '%".$Valor."%'";  break;
		case "LikeIni": $r=$idSrc." LIKE '".$Valor."%'"; break;
		case "LikeFin": $r=$idSrc." LIKE '%".$Valor."'"; break;
		case "NoLike": $r=$idSrc." NOT LIKE '%".$Valor."%'";  break;
		case "NoLikeIni": $r=$idSrc." NOT LIKE '".$Valor."%'"; break;
		case "NoLikeFin": $r=$idSrc." NOT LIKE '%".$Valor."'"; break;
		case "Igual": $r=$idSrc." = '".$Valor."'"; break;
		case "Mayor": $r=$idSrc." > '".$Valor."'"; break;
		case "Menor":$r=$idSrc." < '".$Valor."'"; break;
		case "MayorIgual":$r=$idSrc." >= '".$Valor."'"; break;
		case "MenorIgual": $r=$idSrc." <= '".$Valor."'"; break;
		case "NoIgual": $r=$idSrc." <> '".$Valor."'"; break;	
		case "Nulo": $r="(".$idSrc." ='' OR ".$idSrc." IS NULL)"; break;
		case "Like":
            $valores = explode(" ", $Valor);
            $condiciones = array_map(function($valor) use ($idSrc) {
                return $idSrc . " LIKE '%" . $valor . "%'";
            }, $valores);
            $r = implode(" AND ", $condiciones);
        break;	
	}

   return $r;
}

function WhereToGral($idSrc,$Valor){

	$Valor=urldecode($Valor);
	$VSPLIT=explode(" ", $Valor);
	//print_r($VSPLIT);
	$r='';
	foreach ($VSPLIT as $k => $v){
		$aux=$idSrc." LIKE '%".$VSPLIT[$k]."%'";
		if($r<>'')$r.=' AND '.$aux;
		else $r=$aux;

	}	
   return $r;
}

}
?>