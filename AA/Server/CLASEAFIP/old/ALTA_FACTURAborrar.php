
<?php
date_default_timezone_set('America/Buenos_Aires');

include('exceptionhandler.php');
include('wsaa.class.php');
include('wsfev1.class.php');
include('TIKET_NRO.php');


$wsaa = new WSAA(); 

// Compruebo fecha de exp y si la excede genero nuevo TA


//Conecto Wsfev1

$CUIT=0;
$nrofactura=TraerNumeroAutorizado();
$tipocbte = 6; // Factura A: 1 --- Factura B: 6 ---- Factura C: 11
$Concepto=1; //Productos: 1 ---- Servicios: 2 ---- Prod y Serv: 3
$DocTipo=99; //80=CUIT -- 96 DNI --- 99 general cons final
$CbteDesde=null;
$CbteHasta=null;
$ptovta =9; //Punto de Venta SIN CEROS ADELANTE!!
$DocNro=0;  //0 para consumidor final / importe menor a $1000 SI ES DNI VA EL CAMPO DNI 7 SI ES CUIT EL CAMPO CUIT
$CbteFch=date('Ymd'); 	// fecha emision de factura
$FchServDesde=null;	// solo concepto 2 o 3
$FchServHasta=null;	// solo concepto 2 o 3
$FchVtoPago=null;		// solo concepto 2 o 3
$MonId='PES'; 			// id de moneda 'PES'
$MonCotiz=1;			// Cotizacion moneda. Solo exportacion
$asoc_Tipo=91; //91; //tipo 91|5
$asoc_PtoVta=3;
$asoc_Nro=1;
$atrib_Id=1; 			
$atrib_Desc='PRODUCTOS SEGUN DETALLE ADJUNTO';
$atrib_BaseImp=0;
$atrib_Alic=0; 
$atrib_Importe=0;
$AUX_IMPIVA=21;
$ImpTotConc=0;// no gravado
$ImpTrib=0;// otros tributos
$ImpOpEx=0;	// operacion exentas
$ImpTotal=100; // total de la factura. ImpNeto + ImpTotConc + ImpIVA + ImpTrib + ImpOpEx
if($AUX_IMPIVA!=0)$ImpNeto=ROUND($ImpTotal/$AUX_IMPIVA,2); // Imp Neto
if($AUX_IMPIVA==0)$ImpNeto=ROUND($ImpTotal,2); // Imp Neto
$ImpIVA=$ImpTotal-$ImpNeto;
if($AUX_IMPIVA!=0)$iva_Id=5; 
if($AUX_IMPIVA==0)$iva_Id=3; 
$iva_BaseImp=$ImpNeto; 
$iva_Importe=$ImpIVA;


$wsfev1 = new WSFEV1();
 
// Carga el archivo TA.xml
$wsfev1->openTA();

$regfe['CbteTipo']=$tipocbte;// Factura A: 1 --- Factura B: 6 ---- Factura C: 11
$regfe['Concepto']=$Concepto; //Productos: 1 ---- Servicios: 2 ---- Prod y Serv: 3
$regfe['DocTipo']=$DocTipo; //80=CUIT -- 96 DNI --- 99 general cons final
$regfe['DocNro']=$CUIT;  //0 para consumidor final / importe menor a $1000 SI ES DNI VA EL CAMPO DNI 7 SI ES CUIT EL CAMPO CUIT
$regfe['CbteFch']=date('Ymd'); 	// fecha emision de factura
$regfe['ImpNeto']=$ImpNeto;			// Imp Neto
$regfe['ImpTotConc']=$ImpTotConc;			// no gravado
$regfe['ImpIVA']=$ImpIVA;				// IVA liquidado
$regfe['ImpTrib']=$ImpTrib;			// otros tributos
$regfe['ImpOpEx']=$ImpOpEx;			// operacion exentas
$regfe['ImpTotal']=$ImpTotal;			// total de la factura. ImpNeto + ImpTotConc + ImpIVA + ImpTrib + ImpOpEx
$regfe['FchServDesde']=$FchServDesde;	// solo concepto 2 o 3
$regfe['FchServHasta']=$FchServHasta;	// solo concepto 2 o 3
$regfe['FchVtoPago']=$FchVtoPago;		// solo concepto 2 o 3
$regfe['MonId']=$MonId; 			// id de moneda 'PES'
$regfe['MonCotiz']=$MonCotiz;			// Cotizacion moneda. Solo exportacion
$regfe['CbteDesde']=$CbteDesde;			// Cotizacion moneda. Solo exportacion
$regfe['CbteHasta']=$CbteHasta;			// Cotizacion moneda. Solo exportacion

// Comprobantes asociados (solo notas de crédito y débito):
$regfeasoc['Tipo'] = $asoc_Tipo; //91; //tipo 91|5			
$regfeasoc['PtoVta'] = $asoc_PtoVta;
$regfeasoc['Nro'] = $asoc_Nro;

// Detalle de otros tributos
$regfetrib['id'] = $atrib_Id; 			
$regfetrib['Desc'] = $atrib_Desc;
$regfetrib['BaseImp'] = $atrib_BaseImp;
$regfetrib['Alic'] = $atrib_Alic; 
$regfetrib['Importe'] = $atrib_Importe;
 
// Detalle de iva
$regfeiva['id'] = $iva_Id; 
$regfeiva['BaseImp'] = $iva_BaseImp; 
$regfeiva['Importe'] = $iva_Importe;



	$cae = $wsfev1->FECAESolicitar($nrofactura, // ultimo numero de comprobante autorizado mas uno 
                $ptovta,  // el punto de venta
                $regfe, // los datos a facturar
				$regfeasoc,
				$regfetrib,
				$regfeiva	
	 );

$caenum = $cae['cae']; 
$caefvt = $cae['fecha_vencimiento'];
$numero = $nro+1;


	
if ($caenum != "") {

echo "1-".$caenum."-". date( "d/m/Y", strtotime( $caefvt ));


} else {

	echo "<br>Error al obtener CAE<br>";
	echo "Code: ", $wsfev1->Code, "<br>";
	echo "Msg: ", $wsfev1->Msg, "<br>";
	echo "Obs: ", $wsfev1->ObsCode, "<br>";
	echo "Msg: ", $wsfev1->ObsMsg, "<br>";
	echo "Obs2: ", $wsfev1->ObsCode2, "<br>";
	echo "Msg2: ", $wsfev1->ObsMsg2, "<br>";		
}
?>
