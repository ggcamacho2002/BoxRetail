<?php
require "../Frameworks/vendor/autoload.php";
use Endroid\QrCode\QrCode;
use Endroid\QrCode\Writer\PngWriter;
use Endroid\QrCode\ErrorCorrectionLevel\ErrorCorrectionLevelHigh;
use Endroid\QrCode\Color\Color;

class AfipFacturaTicketImprimir {

    var $Call;
    var $Out;
    var $Data;
    var $Map;
    var $UltIdInsert;

///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////VARIABLES SEGUN EMPRESA////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

    var $NombreFantasia = 'MIRACCA';
    var $empresa = 'DIST. CONSTITUCION 008 DE LUJAN SRL';
    var $CuitPropio = '30-71486246-0';
    var $direccion = 'Av. Constitucion 1842';
    var $telefono = '02323-679667';
    var $iniAct='01/05/2015';
    var $qrPath='http://localhost/boxretail/Server/archivos/ultimoqr.png';
    
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

    var $factura_tipo = 'B';
    var $FechaComp;
    var $Concepto;
    var $NroPtoVta;
    var $TipoComprobante;
    var $NroComp;
    var $impTotal;
    var $MonId;
    var $MonCotiz;
    var $DocClienteTipo;
    var $DocClienteNro;
    var $CAENro;
    var $CaeFechaV;
    var $idRemito;
    var $idCliente;

    function __construct() {}

    function MapaBase() {
        $this->Map['id'] = null;
        $this->Map['idFactura'] = null;
    }

    function MapaQuery() {
        $this->Map['id'] = null;
        $this->Map['idFactura'] = null;
    }

    function ListarMapa() {
        $this->MapaQuery();
    }

    function ImprimirBdTicket() {
        $idFactura = $this->Data["Param"][0]["Value"];
        $this->CargarFactura($idFactura);
        $this->ImprimirTicket();
    }

    function CargarFactura($idFactura) {
        $sql = "SELECT * FROM afipfactura a WHERE a.`id`=$idFactura;";

        $cl = new Database();
        $cl->Query($sql);
        $datos = $cl->datos[0];

       // $this->CuitPropio = 0;
        $this->FechaComp = $datos['CbteFch'];
        $this->TipoComprobante = $datos['DocTipo'];
        $this->NroComp = $datos['DocNro'];
        $this->Concepto = $datos['Concepto'];
        $this->impTotal = $datos['ImpTotal'];
        $this->MonId = $datos['MonId'];
        $this->MonCotiz = $datos['MonCotiz'];
        $this->NroPtoVta = $datos['PuntoVenta'];
        $this->idCliente = $datos['idcliente'];
        $this->NroComp = $datos['NroComprobante'];
        $this->idRemito = $datos['idremito'];
        $this->CAENro = $datos['Cae'];
        $this->CaeFechaV = $datos['CaeFechaV'];

        $this->Out = $cl;
        $cl = null;
    }

    function CrearQr() {
        $url = 'https://www.afip.gob.ar/fe/qr/';
        $datos_cmp_base_64 = json_encode([
            "ver" => 1,
            "fecha" => $this->FechaComp,
            "cuit" => (int) $this->CuitPropio,
            "ptoVta" => (int) $this->NroPtoVta,
            "tipoCmp" => (int) $this->TipoComprobante,
            "nroCmp" => (int) $this->NroComp,
            "importe" => (float) $this->impTotal,
            "moneda" => $this->MonId,
            "ctz" => (float) $this->MonCotiz,
            "tipoDocRec" => $this->DocClienteTipo,
            "nroDocRec" => $this->DocClienteNro,
            "tipoCodAut" => "E",
            "codAut" => (int) $this->CAENro
        ]);

        $datos_cmp_base_64 = base64_encode($datos_cmp_base_64);
        $to_qr = $url . '?p=' . $datos_cmp_base_64;

        $qrcode = QrCode::create($to_qr)
            ->setEncoding(new \Endroid\QrCode\Encoding\Encoding('UTF-8'))
            ->setErrorCorrectionLevel(new ErrorCorrectionLevelHigh())
            ->setSize(300)
            ->setMargin(10)
            ->setForegroundColor(new Color(0, 0, 0))
            ->setBackgroundColor(new Color(255, 255, 255));

        $writer = new PngWriter();
        $result = $writer->write($qrcode);

        $tempDir = '../Archivos/';
        $qrPath = $tempDir . '/ultimoqr.png';
        $result->saveToFile($qrPath);
		$qrPath=$this->qrPath;
        return $qrPath;
    }

    function TraerItemsRemito($idremito) {
        $sql = "SELECT (p.`Prd_descripcion`)prod,(i.`irv_cantidad_pedida`)cant,(i.`irv_precioventa`)precio,round(i.`irv_cantidad_pedida`* i.`irv_precioventa`,2)subtotal FROM items_remitos_ventas i LEFT OUTER JOIN productos p ON i.prd_clave=p.Id WHERE i.`rev_clave`=$idremito;";

        $cl = new Database();
        $cl->Query($sql);
        $datos = $cl->datos;
        $cl = null;

        return $datos;
    }

    function TraerCliente($idcliente) {
        $sql = "SELECT * FROM clientes c WHERE c.`id`=$idcliente;";

        $cl = new Database();
        $cl->Query($sql);
        $datos = $cl->datos[0];
        $cl = null;

        return $datos;
    }

    function ImprimirTicket() {
        $idremito = $this->idRemito;

		$dateTime = new DateTime($this->FechaComp);
		$fecha = $dateTime->format('d/m/Y');

		$auxcliente = $this->TraerCliente($this->idCliente);
        $RazonScliente = $auxcliente['cli_razon_social'];
        $NroDoccliente = $auxcliente['cli_docnro'];
        $TipoDoccliente = $auxcliente['cli_doctipo'];

       if($TipoDoccliente=='')$TipoNroDoccliente='';
       else $TipoNroDoccliente=$TipoDoccliente.': '.$NroDoccliente;

       $items = $this->TraerItemsRemito($idremito);
        $total = 0;

        $qrPath = $this->CrearQr();

        $this->Out = '
        <div style="width:100%; font-family: Arial, sans-serif; font-size: 12px;">
            <div style="text-align: center;">
                <img src="http://localhost/boxretail/Server/img/logoMiracca.png" alt="Logo" style="width: 50px; margin-bottom:3px"><br>
                <strong  style=" margin-bottom:10px">' . $this->NombreFantasia . '</strong><br>
                 ' . $this->empresa . '<br>
				 IVA Resp. Inscripto<br>
                CUIT: ' . $this->CuitPropio . '<br>
                IIBB: ' . $this->CuitPropio . '<br>
				Inicio Activ.: ' . $this->iniAct. '<br>
				
                ' . $this->direccion . '<br>
                Tel: ' . $this->telefono . '<br>
            </div>
            <div style="text-align: center; font-weight: bold;margin-top:7px">
                 <span style="font-size:25px">' .$this->factura_tipo . '</span>
               <br> Comp Nro:' . $this->NroComp . '
                <br>' . $fecha . '
            </div>
            <div>
                <strong>Cliente:</strong><br>
                ' . $RazonScliente . '<br>
                ' . $TipoNroDoccliente . '<br>
            </div>
            <br>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="border-bottom: 1px solid black; border-top: 1px solid black;">
                       
					  <th style="font-size:12px;padding: 4px;">Cant./Pu</th>
                        <th style="font-size:12px; padding: 4px;">Descripción</th>
                        <th style="font-size:12px; padding: 4px;">Sub Total</th>
                    </tr>
                </thead>
                <tbody style="padding: 10px;">';

        foreach ($items as $item) {
            $prod = $item['prod'];
            $cant = $item['cant'];
            $precio = $item['precio'];
            $subtotal = $item['subtotal'];
            $total = $total + $subtotal;

            $this->Out .= '
                    <tr>
                        <td style="width:10%; font-size:10px;padding: 4px;">' . number_format($cant, 0) . ' x $' . number_format($precio, 2, ',', '.') . '</td>
                        <td style="width:80%; font-size:10px;padding: 4px;vertical-align: middle;">' . $prod . '</td>
                        <td style="text-align:right;width:10%; font-size:10px;padding: 4px;"> $'. number_format($subtotal, 2, ',', '.') . '</td>
                    </tr>';
        } 

		$dateTime = new DateTime($this->CaeFechaV);
		$xCaeFechaV = $dateTime->format('d/m/Y');

        $this->Out .= '
                    <tr style="border-top: 1px solid black;">
                        <td colspan="2" style=" padding: 4px; text-align: right; font-weight: bold;">TOTAL</td>
                        <td style="padding: 4px;">$' . number_format($total, 2, ',', '.') . '</td>
                    </tr>
                </tbody>
            </table>
            <br>
            <div style="text-align: center;">
                <img src="' . $qrPath . '" alt="QR Code" style="width: 200px;"><br>
                <strong>AFIP</strong><br>
                Comprobante Autorizado<br>
                CAE N°: ' . $this->CAENro . '<br>
                Vto. de CAE: ' . $xCaeFechaV . '
            </div>
            <br>
        </div>';
    }
}
