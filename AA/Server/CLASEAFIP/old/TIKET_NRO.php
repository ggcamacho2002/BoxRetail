
<?php
date_default_timezone_set('America/Buenos_Aires');

include('exceptionhandler.php');
include('wsaa.class.php');
include('wsfev1.class.php');

function TraerNumeroAutorizado(){

	$wsaa = new WSAA(); 

	$fecha_ahora = date("Y-m-d H:i:s");
	$fecha_exp_TA = $wsaa->get_expiration();

	if ($fecha_exp_TA < $fecha_ahora) {

			if ($wsaa->generar_TA()) { 
																																					
				$EXP=$wsaa->get_expiration();      
			
			} else {			
			echo  '0-'.'Error al obtener TICKET ACCESO';
			}
		} else {
		
			$EXP=$wsaa->get_expiration(); 
		}

	$wsfev1 = new WSFEV1();
	
	// Carga el archivo TA.xml
	$wsfev1->openTA();
	$nro = $wsfev1->FECompUltimoAutorizado($ptovta, $tipocbte);

	if(!is_numeric($nro)) {
		echo "<br>Error al obtener el ultimo numero autorizado<br>";
		$nro=0;
		$nro1 = 0;
		
		echo "Code: ", $wsfev1->Code, "<br>";
		echo "Msg: ", $wsfev1->Msg, "<br>";
		echo "Obs: ", $wsfev1->ObsCode, "<br>";
		echo "Msg: ", $wsfev1->ObsMsg, "<br>";	
		
	} else {

		$nro1 = $nro + 1;
		return $nro1;

	}
	 
}	


?>
