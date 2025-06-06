function Scripts_CalcularSubtotal(Item){

    var preciounid = parseFloat(document.getElementById("DSprecioultcompra-" + Item + "-Fld-TBL_ComprasOrdenesItems").innerHTML);
    var unidades = parseFloat(document.getElementById("DSUnidPedida-" + Item + "-Fld-TBL_ComprasOrdenesItems").value);

    var subtotal=(preciounid*unidades).toFixed(2);

    document.getElementById("Subtotal-" + Item + "-Fld-TBL_ComprasOrdenesItems").value=subtotal;
    Scripts_CalcularTotalParcial();

}