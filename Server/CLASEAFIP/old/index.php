<?php
date_default_timezone_set('America/Buenos_Aires');

include('exceptionhandler.php');
include('wsaa.class.php');
include('wsfev1.class.php');

$wsaa = new WSAA();

$fecha_ahora = date("Y-m-d H-i-s");
$fecha_exp_TA = $wsaa->get_expiration();

if ($fecha_exp_TA < $fecha_ahora) {
    if ($wsaa->generar_TA()) {
        echo 'Nuevo TA, válido hasta: '. $wsaa->get_expiration() .'<br>';
    } else {
        echo 'Error al obtener TA';
        exit;
    }
} else {
    echo 'TA reutilizado, válido hasta: '. $wsaa->get_expiration() .'<br>';
}

// Conecto Wsfev1
$wsfev1 = new WSFEV1();
$wsfev1->openTA();

$ptovta =9; // Punto de Venta SIN CEROS ADELANTE!!
$tipocbte = 6; // Factura A: 1 --- Factura B: 6 ---- Factura C: 11

//////////////////////////////////////////////
$impNeto=150;
$tasaIva=1.21;
$impTot=$impNeto*$tasaIva;
$totIva=$impTot-$impNeto;
//////////////////////////////////////////////

$regfe['CbteTipo'] = $tipocbte;
$regfe['Concepto'] = 1; // Productos: 1 ---- Servicios: 2 ---- Prod y Serv: 3
$regfe['DocTipo'] = 99; // 80=CUIT -- 96 DNI --- 99 general cons final
$regfe['DocNro'] = 0;  // 0 para consumidor final / importe menor a $1000 SI ES DNI VA EL CAMPO DNI 7 SI ES CUIT EL CAMPO CUIT
$regfe['CbteFch'] = date('Ymd'); // fecha emision de factura
$regfe['ImpNeto'] = $impNeto; // Imp Neto
$regfe['ImpTotConc'] = 0; // no gravado
$regfe['ImpIVA'] =$totIva; // IVA liquidado
$regfe['ImpTrib'] = 0; // otros tributos
$regfe['ImpOpEx'] = 0; // operacion exentas
$regfe['ImpTotal'] = $impTot; // total de la factura. ImpNeto + ImpTotConc + ImpIVA + ImpTrib + ImpOpEx
$regfe['FchServDesde'] = null; // solo concepto 2 o 3
$regfe['FchServHasta'] = null; // solo concepto 2 o 3
$regfe['FchVtoPago'] = null; // solo concepto 2 o 3
$regfe['MonId'] = 'PES'; // id de moneda 'PES'
$regfe['MonCotiz'] = 1; // Cotizacion moneda. Solo exportacion

// Comprobantes asociados (solo notas de crédito y débito):
$regfeasoc['Tipo'] = null;
$regfeasoc['PtoVta'] = null;
$regfeasoc['Nro'] = null;

// Detalle de otros tributos
$regfetrib['Id'] =1;
$regfetrib['Desc'] = "";
$regfetrib['BaseImp'] =0;
$regfetrib['Alic'] = 0; 
$regfetrib['Importe'] = 0;
 
// Detalle de iva
$regfeiva['Id'] =5; // Usar el ID válido obtenido
$regfeiva['BaseImp'] =$impNeto; 
$regfeiva['Importe'] =$totIva;


// Pido ultimo numero autorizado
$nro = $wsfev1->FECompUltimoAutorizado($ptovta, $tipocbte);


if (!is_numeric($nro)) {
    echo "<br>Error al obtener el ultimo numero autorizado<br>";
    $nro = 0;
    $nro1 = 0;
    echo "Code: ", $wsfev1->Code, "<br>";
    echo "Msg: ", $wsfev1->Msg, "<br>";
    echo "Obs: ", $wsfev1->ObsCode, "<br>";
    echo "Msg: ", $wsfev1->ObsMsg, "<br>"; 
} else {
    echo "<br>FECompUltimoAutorizado: $nro <br>"; // no es necesario
    $nro1 = $nro + 1;
    $cae = $wsfev1->FECAESolicitar(
        $nro1, // ultimo numero de comprobante autorizado mas uno 
        $ptovta, // el punto de venta
        $regfe, // los datos a facturar
        $regfeasoc,
        $regfetrib,
        $regfeiva
    );

    $caenum = $cae['cae']; 
    $caefvt = $cae['fecha_vencimiento'];
    $numero = $nro + 1;    
} 



if ($caenum != "") {
    $cuit = '11111111111'; // para el codigo de barras
    $comprob = str_pad($tipocbte, 2, "0", STR_PAD_LEFT); // para el codigo de barras
    $punto = str_pad($ptovta, 4, "0", STR_PAD_LEFT); // para el codigo de barras

    echo "Factura ".$punto." ".str_pad($numero, 6, "0", STR_PAD_LEFT);
    echo "<br>";
    echo "Cae: ", $caenum."  ";
    echo "Fecha Vto: ", date("d/m/Y", strtotime($caefvt));
    ?>
    <div id="bcTarget"></div> 
    <script type="text/javascript">
        $(document).ready(function() {
            $("#bcTarget").barcode("<?php echo $cuit.$comprob.$punto.$caenum.$caefvt; ?>", "int25");    
        });
    </script>
    <?php 
} else {
    echo "<br>Error al obtener CAE<br>";
    echo "Code: ", $wsfev1->Code, "<br>";
    echo "Msg: ", $wsfev1->Msg, "<br>";
    echo "Obs: ", $wsfev1->ObsCode, "<br>";
    echo "Msg: ", $wsfev1->ObsMsg, "<br>";
}
?>
