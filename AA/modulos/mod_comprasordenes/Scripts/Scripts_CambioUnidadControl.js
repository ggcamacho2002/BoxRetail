function Scripts_CambioUnidadControl(ObjEvt,Params){

    var Item=ObjEvt.id.split('-')[1];
    var unid=parseFloat(ObjEvt.value);
    var cantxpack=parseFloat(document.getElementById("DSCantxPack-"+Item+"-Fld-TBL_COrdenesItemsControl").value);
    var resultado = (unid/cantxpack).toFixed(2);
    document.getElementById("PackRecibido-"+Item+"-Fld-TBL_COrdenesItemsControl").value=resultado;

}