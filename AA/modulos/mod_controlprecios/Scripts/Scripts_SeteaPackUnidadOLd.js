function Scripts_SeteaPackUnidadOLd(ObjEvt,Params){

    var newpack=document.getElementById('NUEVOCOMPRAPACK-0-Fld-FRM_CambiaCompra').value;
    var newunid=document.getElementById('NUEVOCOMPRAUNID-0-Fld-FRM_CambiaCompra').value;
    
    document.getElementById('DSPCompraPack-0-Fld-FRM_CambiaCompra').value=newpack;
    document.getElementById('DSPCompraUnid-0-Fld-FRM_CambiaCompra').value=newunid;

}