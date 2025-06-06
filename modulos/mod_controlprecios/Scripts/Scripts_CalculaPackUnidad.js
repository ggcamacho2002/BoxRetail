function Scripts_CalculaPackUnidad(ObjEvt,Params){
    var valor=parseInt(ObjEvt.value);
    var fldCantPack=document.getElementById('CantxPack-0-Fld-FRM_CambiaCompra').value;

    document.getElementById('PrecioAnterior-0-Fld-FRM_CambiaCompra').value=document.getElementById('DSPCompraUnid-0-Fld-FRM_CambiaCompra').value;
    
    if(ObjEvt.id=='NUEVOCOMPRAUNID-0-Fld-FRM_CambiaCompra'){

        var fldpack=document.getElementById('NUEVOCOMPRAPACK-0-Fld-FRM_CambiaCompra');
        fldpack.value=valor*fldCantPack;

    }else{

        var fldunid=document.getElementById('NUEVOCOMPRAUNID-0-Fld-FRM_CambiaCompra');
        fldunid.value=(valor/fldCantPack).toFixed(2);
        
    }

    var total='';
    var Pcompunid=document.getElementById('NUEVOCOMPRAUNID-0-Fld-FRM_CambiaCompra').value;
    var Porcventa=document.getElementById('DSPorcVenta-0-Fld-FRM_CambiaCompra').value;
    Pcompunid=parseInt(Pcompunid);
    Porcventa=parseInt(Porcventa);

    total=Pcompunid * ((Porcventa/100)+1);
    total=total.toFixed(2);

    document.getElementById('DsPrecioVenta-0-Fld-FRM_CambiaCompra').value=total;

   

}

