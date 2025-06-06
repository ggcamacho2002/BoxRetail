<?php
class SueldosInternosItems{
var $Call;
var $Out;
var $Data;
var $Map;
var $UltIdInsert;
var $Tabla='sueldosinternositems T0';
var $Joins='		
			INNER JOIN sueldosinternos si ON T0.idsueldointerno = si.id
';

function __construct(){}

	function MapaBase(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSidsueldointerno']='T0.idsueldointerno';
	$this->Map['DSestado']='T0.estado';
	$this->Map['DSdetalle']='T0.detalle';
	$this->Map['DSunidades']='T0.unidades';
	$this->Map['DSvalorunitario']='T0.valorunitario';
	$this->Map['DSremunerativo']='T0.remunerativo';
	$this->Map['DSdescuento']='T0.descuento';
	$this->Map['DSorden']='T0.orden';
	$this->Map['DStipo']='T0.tipo';
}	
function MapaQuery(){

	$this->Map['DSid']='T0.id';
	$this->Map['DSidsueldointerno']='T0.idsueldointerno';
	$this->Map['DSestado']='T0.estado';
	$this->Map['DSdetalle']='T0.detalle';
	$this->Map['DSunidades']='T0.unidades';
	$this->Map['DSvalorunitario']='T0.valorunitario';
	$this->Map['DSremunerativo']='T0.remunerativo';
	$this->Map['DSdescuento']='T0.descuento';
	$this->Map['DSorden']='T0.orden';
	$this->Map['DStipo']='T0.tipo';

	$this->Map['DSfecha']='si.fecha';
	$this->Map['DSestadoSueldoInterno']='si.estado';
	$this->Map['DStotalSueldoInterno']='si.total';
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

function SumarizaLiquidacionTareas($idLiq,$data){

	$idpers=$data['DSidpersonal'];

			$sql="
						SELECT sum(pn.`valor`)ValorTareas FROM persoanlreltarea p, personaltareas pn
						WHERE p.idtarea=pn.id AND p.`idpersonal`=$idpers;
			";


			$cl=new Database();
			$cl->Query($sql);	
			return $cl->datos[0]['ValorTareas'];
	

}	

function CargarItemsLiquidacionTareas($idLiq,$data){

	$idpers=$data['DSidpersonal'];
	$diast=$data['DSdiastrabajados'];

			$sql="
					INSERT INTO sueldosinternositems (idsueldointerno, detalle, unidades, valorunitario, remunerativo,tipo)
					SELECT
							$idLiq AS idsueldointerno,
							pn.Detalle AS detalle,
							$diast AS unidades,
							round(pn.valor / 30,2) AS valorunitario,
							round(pn.valor / 30,2) * $diast AS remunerativo,
							'RESPONSABILIDADES' AS tipo
					FROM
							persoanlreltarea p
					JOIN
							personaltareas pn ON p.idtarea = pn.id
					WHERE
							p.idpersonal = $idpers;
			";


			$cl=new Database();
			$cl->Query($sql);	
	

}	
function CargarItemsLiquidacionConceptos($idLiq,$data){

	$idpers=$data['DSidpersonal'];
	$antig=$data['DSantiguedad'];
	$hsextra=$data['DShsextra'];
	$inasist=$data['DSinasistencias'];
	if($inasist==0)$pres=1; else $pres=0;
	$adel=$data['DSadelantos'];
	$descadel=$data['DSdescadelanto'];
	$diast=$data['DSdiastrabajados'];
	//$fecha=$data['DSfecha'];

	$sql="SELECT * FROM sueldosinternosconceptos";
	$cl=new Database();
	$cl->Query($sql);	
	$conceptos=$cl->datos;
	$cl=null;

	$newC = [];
	foreach ($conceptos as $concepto) {
		$newC[$concepto['codigo']] = $concepto;
	}

	$vu_BASICO=$newC['BASICO']['valorunitario'];
	$vu_ANTIGUEDAD=$newC['ANTIGUEDAD']['valorunitario'];
	$vu_PRESENTISMO=$newC['PRESENTISMO']['valorunitario'];
	$vu_INASISTENCIAS=$newC['INASISTENCIAS']['valorunitario'];
	$vu_HSEXTRAS=$newC['HSEXTRAS']['valorunitario'];
	$vu_ADELANTOS=$newC['ADELANTOS']['valorunitario'];
	$vu_DESCADELANTOS=$newC['DESCADELANTOS']['valorunitario'];

	$subt_BASICO=$newC['BASICO']['valorunitario'] /30 * $diast;
	$subt_ANTIGUEDAD=$newC['ANTIGUEDAD']['valorunitario'] * $antig;
	$subt_PRESENTISMO=$newC['PRESENTISMO']['valorunitario'] * $pres;
	
	$totalTareas=$this->SumarizaLiquidacionTareas($idLiq,$data);
	$valorHora=($subt_BASICO + $subt_ANTIGUEDAD + $totalTareas) / 30 / 8;
	
	$subt_INASISTENCIAS=$newC['INASISTENCIAS']['valorunitario'] * $valorHora * $inasist;
	$subt_HSEXTRAS=$newC['HSEXTRAS']['valorunitario'] * $hsextra * $valorHora;
	$subt_ADELANTOS=$newC['ADELANTOS']['valorunitario'] * $adel;
	$subt_DESCADELANTOS=$newC['DESCADELANTOS']['valorunitario'] * $descadel;


			$sql="INSERT INTO sueldosinternositems (idsueldointerno,valorunitario,detalle, unidades, remunerativo,descuento,orden,tipo) values ";

			$sql.="($idLiq,'$vu_BASICO','BASICO','$diast','$subt_BASICO',0,1,'NOMINA'),";
			$sql.="($idLiq,'$vu_ANTIGUEDAD','ANTIGUEDAD','$antig','$subt_ANTIGUEDAD',0,2,'NOMINA'),";
			$sql.="($idLiq,'$vu_PRESENTISMO','PRESENTISMO','$pres','$subt_PRESENTISMO',0,3,'NOMINA'),";
			$sql.="($idLiq,'$vu_INASISTENCIAS','INASISTENCIAS','$inasist',0,'$subt_INASISTENCIAS',4,'NOMINA'),";
			$sql.="($idLiq,'$vu_HSEXTRAS','HS EXTRAS','$hsextra','$subt_HSEXTRAS',0,5,'NOMINA'),";
			$sql.="($idLiq,'$vu_ADELANTOS','ADELANTOS','$adel','$subt_ADELANTOS',0,6,'NOMINA'),";
			$sql.="($idLiq,'$vu_DESCADELANTOS','DESC. ADELANTOS','$descadel',0,'$subt_DESCADELANTOS',7,'NOMINA')";

			$cl=new Database();
			$cl->Query($sql);		
			$cl=null;

			$sql="
				UPDATE sueldosinternos AS si
					INNER JOIN (
						SELECT
							idsueldointerno,
							(SUM(remunerativo) - SUM(descuento)) AS TOTALFINAL
						FROM sueldosinternositems
						WHERE idsueldointerno = $idLiq
						GROUP BY idsueldointerno
					) AS calculo ON si.id = calculo.idsueldointerno
					SET si.total = calculo.TOTALFINAL
					WHERE si.id = $idLiq;	
			";

			$cl=new Database();
			$cl->Query($sql);	

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





}