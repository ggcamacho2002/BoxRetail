function Scripts_CambioPackControl(ObjEvt,Params){

    var Item = ObjEvt.id.split('-')[1];
    var pack = parseFloat(ObjEvt.value);
    var cantxpack = parseFloat(document.getElementById("DSCantxPack-" + Item + "-Fld-TBL_COrdenesItemsControl").value);
    var resultado = pack * cantxpack;
    var fldunid= document.getElementById("DSirc_cantidad_recibida-" + Item + "-Fld-TBL_COrdenesItemsControl");
    fldunid.value = resultado.toFixed(2);


}