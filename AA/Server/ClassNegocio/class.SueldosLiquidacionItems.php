<?php
include_once('class.SueldosConfig.php');

class  SueldosLiquidacionItems{

	var $Call;
	var $Out;
	var $Data;
	var $Map;
	var $UltIdInsert;
	var $Tabla='sueldosliquidacionitems T0';
	var $Joins='		
			   INNER JOIN sueldoscfgitems sc ON T0.idsueldoconfig = sc.id
			   INNER JOIN sueldosliquidacion sl ON T0.idliquidacion = sl.id
	';
	
	function __construct(){}
	
	 function MapaBase(){
	
		$this->Map['DSid']='T0.id';
		$this->Map['DSidsueldoconfig']='T0.idsueldoconfig';
		$this->Map['DSunidades']='T0.unidades';
		$this->Map['DSvalorunitario']='T0.valorunitario';
		$this->Map['DSremunerativo']='T0.remunerativo';
		$this->Map['DSnoremunerativo']='T0.noremunerativo';
		$this->Map['DSdescuento']='T0.descuento';
		$this->Map['DSidliquidacion']='T0.idliquidacion';
	
	}	
	function MapaQuery(){

		$this->Map['DSid']='T0.id';
		$this->Map['DSidsueldoconfig']='T0.idsueldoconfig';
		$this->Map['DSunidades']='T0.unidades';
		$this->Map['DSvalorunitario']='T0.valorunitario';
		$this->Map['DSremunerativo']='T0.remunerativo';
		$this->Map['DSnoremunerativo']='T0.noremunerativo';
		$this->Map['DSdescuento']='T0.descuento';
		$this->Map['DSidliquidacion']='T0.idliquidacion';
	
		$this->Map['DSconcepto']='sc.concepto';
		$this->Map['DScodigo']='sc.codigo';
		/*$this->Map['DSsubtotaltipo']='sc.subtotaltipo';
		$this->Map['DSformulaunidad']='sc.formulaunidad';
		$this->Map['DSoperacion']='sc.operacion';
		$this->Map['DSformulavalorunit']='sc.formulavalorunit';
		$this->Map['DSestado']='sc.estado';
		$this->Map['DSorden']='sc.orden';
		$this->Map['DStipo']='sc.tipo';*/
	
	}	
	



function Buscar(){

	
	$this->MapaQuery();
			
	$cl=new Autoquery($this->Tabla);			
	$cl->Map=$this->Map;
	$cl->Joins=$this->Joins;
	$cl->SuperTablaQuery($this->Data);
	$this->Out=$cl->Out;
	$cl=null;
	
	

}

function BuscarById(){
		
	
	$this->MapaQuery();
	
	$cl=new Autoquery($this->Tabla);	
	$cl->Joins=$this->Joins;		
	$cl->Map=$this->Map;
	$cl->BuscarById($this->Data);
	$this->Out=$cl->Out;
	$cl=null;
	
	

}
function InsertMultiples(){

	$this->MapaBase();		
	$cl=new AutoMutation($this->Tabla);			
	$cl->Map=$this->Map;

	$cl->AutoInsertMultiples($this->Data);
	$this->Out=$cl->Out;
	$cl=null;

	

}	


function TraerAllItemsConf(){

	
	$cl=new SueldosConfig();	

	$cl->Data['Columns'][0]['idSrc']='DSid';
	$cl->Data['Columns'][1]['idSrc']='DSconcepto';
	$cl->Data['Columns'][2]['idSrc']='DScodigo';
	$cl->Data['Columns'][3]['idSrc']='DSsubtotaltipo';
	$cl->Data['Columns'][4]['idSrc']='DSformulaunidad';
	$cl->Data['Columns'][5]['idSrc']='DSoperacion';
	$cl->Data['Columns'][6]['idSrc']='DSformulavalorunit';
	$cl->Data['Columns'][7]['idSrc']='DSestado';
	$cl->Data['Columns'][8]['idSrc']='DSorden';
	$cl->Data['Columns'][9]['idSrc']='DStipo';

	$cl->Data['Filtros'][0]['idSrc']='DSestado';
	$cl->Data['Filtros'][0]['Valor']='Activo';

	$cl->Buscar();

	return $cl->Out->datos;

}


function CargarOneLiquidacion($idLiquidacion,$arrVar){


	$SueldItems=$this->TraerAllItemsConf();


		//$this->Data['Columns'][0]['idSrc']='DSid';
		$this->Data['Columns'][1]['idSrc']='DSidsueldoconfig';
		$this->Data['Columns'][2]['idSrc']='DSunidades';
		$this->Data['Columns'][3]['idSrc']='DSvalorunitario';
		$this->Data['Columns'][4]['idSrc']='DSformulaunidad';
		$this->Data['Columns'][5]['idSrc']='DSremunerativo';
		$this->Data['Columns'][6]['idSrc']='DSnoremunerativo';
		$this->Data['Columns'][7]['idSrc']='DSdescuento';
		$this->Data['Columns'][8]['idSrc']='DSidliquidacion';

		$arrCod=[];
		$arrTotales=[];
		$arrTotales['remunerativo']=0;
		$arrTotales['noremunerativo']=0;
		$arrTotales['descuento']=0;


		foreach($SueldItems as $item){

			if($item['DSestado']=='Activo'){
				

					$unidades=$this->traerValorxFormula($item['DSformulaunidad'],$arrCod,$arrVar);
					$valorunitario=$this->traerValorxFormula($item['DSformulavalorunit'],$arrCod,$arrVar);
					$subtotal=$this->traerSubtotal($item['DSoperacion'],$unidades,$valorunitario);

					$remunerativo=0;$noremunerativo=0;$descuento=0;

					switch($item['DSsubtotaltipo']){
						case 'Remunerativo':$remunerativo=$subtotal; break;
						case 'No remunerativo': $noremunerativo=$subtotal;break;
						case 'Descuentos':$descuento=$subtotal;break;
					}

						//$this->Data['SetFields'][0]['DSid']='T0.id';.
						$codigo=$item['DScodigo'];
						$arrCod[$codigo]['DSidsueldoconfig']=$item['DSid'];
						$arrCod[$codigo]['DSSubtotal']=round($subtotal,2);
						$arrCod[$codigo]['DSunidades']=round($unidades,2);						
						$arrCod[$codigo]['DSvalorunitario']=round($valorunitario,2);
						$arrCod[$codigo]['DSremunerativo']=round($remunerativo,2);
						$arrCod[$codigo]['DSnoremunerativo']=round($noremunerativo,2);
						$arrCod[$codigo]['DSdescuento']=round($descuento,2);
						$arrCod[$codigo]['DSidliquidacion']=$idLiquidacion;

						$arrTotales['remunerativo']=$arrTotales['remunerativo']+$remunerativo;
						$arrTotales['noremunerativo']=$arrTotales['noremunerativo']+$noremunerativo;
						$arrTotales['descuento']=$arrTotales['descuento']+$descuento;

			}			

		}


	$this->InsertarAllReg($arrCod);
	$this->InsertarTotales($arrTotales,$idLiquidacion);

}	

function InsertarAllReg($arrItems){


		//$this->Data['Columns'][0]['idSrc']='DSid';
		$this->Data['Columns'][1]['idSrc']='DSidsueldoconfig';
		$this->Data['Columns'][2]['idSrc']='DSunidades';
		$this->Data['Columns'][3]['idSrc']='DSvalorunitario';
		$this->Data['Columns'][4]['idSrc']='DSformulaunidad';
		$this->Data['Columns'][5]['idSrc']='DSremunerativo';
		$this->Data['Columns'][6]['idSrc']='DSnoremunerativo';
		$this->Data['Columns'][7]['idSrc']='DSdescuento';
		$this->Data['Columns'][8]['idSrc']='DSidliquidacion';

		$this->Data['SetFields']=$arrItems;
	 	$this->InsertMultiples();
		


}


function InsertarTotales($arrTotales,$idLiquidacion){

	$neto=$arrTotales['remunerativo']+$arrTotales['noremunerativo']-$arrTotales['descuento'];

		//$this->Data['Columns'][0]['idSrc']='DSid';
		$data=[];
		
		$data['Columns'][0]['idSrc']='DSremunerativos';
		$data['Columns'][1]['idSrc']='DSnoremunerativos';
		$data['Columns'][2]['idSrc']='DSidliquidacion';
		$data['Columns'][3]['idSrc']='DSneto';
		
		
		$cl=new sueldosliquidacion();
		$cl->Data=$data;
		
		$cl->Data['SetFields'][0]['DSremunerativos']=round($arrTotales['remunerativo'],2);
		$cl->Data['SetFields'][0]['DSnoremunerativos']=round($arrTotales['noremunerativo'],2);
		$cl->Data['SetFields'][0]['DSdescuentos']=round($arrTotales['descuento'],2);
		$cl->Data['SetFields'][0]['DSneto']=round($neto,2);
		
		$cl->Data['Filtros'][0]['idSrc']='DSid';
		$cl->Data['Filtros'][0]['Valor']=$idLiquidacion;


	 	$cl->UpdateById();
		

}




function UpdateById(){

	$this->MapaBase();
			
	$cl=new AutoMutation($this->Tabla);			
	$cl->Map=$this->Map;

	$cl->AutoUpdateById($this->Data);
	$this->Out=$cl->Out;
	$cl=null;
	
 	

}	
function DeleteById(){

	$this->MapaBase();
			
	$cl=new AutoMutation($this->Tabla);			
	$cl->Map=$this->Map;

	$cl->AutoSrvDeleteOneReg($this->Data);
	$this->Out=$cl->Out;
	$cl=null;
	
 	

}	


function ListarMapa(){

	//$this->MapaBase();
	$this->MapaQuery();
	
}	

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////Funciones Especiales//////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function traerValorxFormula($formula, $arrCod, $arrVar) {
	

    preg_match_all('/Var\((.*?)\)/', $formula, $matchesVar);
    foreach ($matchesVar[1] as $varName) {
        if (isset($arrVar[$varName])) {  $formula = str_replace('Var(' . $varName . ')', $arrVar[$varName], $formula); }
    }    
    preg_match_all('/Cod\((\d+)\)/', $formula, $matchesCod);

    foreach ($matchesCod[1] as $cod) {
        if (isset($arrCod[$cod])) { $formula = str_replace('Cod(' . $cod . ')', $arrCod[$cod]['DSSubtotal'], $formula); }
    }    
    preg_match_all('/Set\(([\d,]+)\)/', $formula, $matchesSet);
    foreach ($matchesSet[1] as $setValue) {
        $decimalValue = str_replace(',', '.', $setValue);
        $formula = str_replace('Set(' . $setValue . ')', $decimalValue, $formula);
    }
	 // $result=$formula;

     try {$result = $this->evaluarExpresion($formula);} catch (Exception $e) { $result = 0; }



    return $result;
}



function evaluarExpresion($expresion) {
    // Preparar la expresión para evaluarla asegurándose de que es segura
    // Eliminar cualquier caracter que no sea dígito, operador matemático básico o paréntesis
    $expresionSegura = preg_replace('/[^0-9+\-*.\/\(\) ]/', '', $expresion);

    // Agregar un return antes de la expresión para que eval() devuelva el resultado
    $expresionParaEvaluar = 'return ' . $expresionSegura . ';';

    // Usar eval() para evaluar la expresión
    try {

	
        $resultado = eval($expresionParaEvaluar);
        if ($resultado === false) {
            throw new Exception("Error al evaluar la expresión.");
        }
        return $resultado;
    } catch (Throwable $e) {
        // Manejar el error adecuadamente
        return "Error al evaluar la expresión: " . $e->getMessage();
    }
}


function traerSubtotal($operacion,$unidades,$valorunitario){

	if($operacion=='X'){return $unidades * $valorunitario;}
	if($operacion=='%'){return ($unidades/100) * $valorunitario;}

}

}