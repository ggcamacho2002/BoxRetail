function Scripts_CambioPack(ObjEvt,Params){
        

        var Item = ObjEvt.id.split('-')[1];
        var pack = parseFloat(ObjEvt.value);
        var cantxpack = parseFloat(document.getElementById("DSCantxPack-" + Item + "-Fld-TBL_ComprasOrdenesItems").value);
        var resultado = pack * cantxpack;
        var fldunid= document.getElementById("DSUnidPedida-" + Item + "-Fld-TBL_ComprasOrdenesItems");
        fldunid.value = resultado;

        Scripts_CalcularSubtotal(Item);   
        
        var evento = new Event('change');
        fldunid.dispatchEvent(evento);

}