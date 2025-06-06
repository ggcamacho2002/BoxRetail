function Scripts_ReiniciarFormCargaProd(ObjEvt,Params){
   
    var frm=document.getElementById('FRM_CargaProducto');
    frm.reset();

        var bsq=document.getElementById('DSNombreProducto-0-Filtro-ST_POSListaProductos');
        bsq.focus();
        bsq.select();

}