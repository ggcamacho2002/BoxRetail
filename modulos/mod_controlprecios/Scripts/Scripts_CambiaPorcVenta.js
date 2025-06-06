function Scripts_CambiaPorcVenta(ObjEvt,Params){

    var porcNew=parseInt(ObjEvt.value);
    var fldCantPack=document.getElementById('DSCantxPack-0-Fld-FRM_CambiaVenta').value;
    var PrecioCompraUnid=document.getElementById('DSCompraUnid-0-Fld-FRM_CambiaVenta').value;
    
    var NewPrecioVentaUnid=parseInt(PrecioCompraUnid)+(PrecioCompraUnid*porcNew/100);
    var NewPrecioVentaPack=NewPrecioVentaUnid*fldCantPack;
    
    document.getElementById('DSPVentaPack-0-Fld-FRM_CambiaVenta').value=NewPrecioVentaPack.toFixed(2);
    document.getElementById('DSPVentaUnid-0-Fld-FRM_CambiaVenta').value=NewPrecioVentaUnid.toFixed(2);



}

