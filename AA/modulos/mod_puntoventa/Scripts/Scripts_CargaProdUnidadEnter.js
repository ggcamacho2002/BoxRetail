function Scripts_CargaProdUnidadEnter(ObjEvt,Params){

    var frm=document.getElementById('FRM_CargaProducto');

    var val1=frm.DSidProducto.value;
    var val2=frm.DScantPedida.value;

    if(val1=='' || val2==0){
        alert("Seleccione un producto y cargue la cantidad !!!!");
        return 'ErrorStop';
    }

   

}