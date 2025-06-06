function Scripts_CambioUnidad(ObjEvt,Params){

    var Item=ObjEvt.id.split('-')[1];
    var unid=parseFloat(ObjEvt.value);
    var cantxpack=parseFloat(document.getElementById("DSCantxPack-"+Item+"-Fld-TBL_ComprasOrdenesItems").value);
    var resultado = (unid/cantxpack).toFixed(2);
    document.getElementById("Packs-"+Item+"-Fld-TBL_ComprasOrdenesItems").value=resultado;

    Scripts_CalcularSubtotal(Item);
    
}