function Scripts_CargaProdPackEnter(ObjEvt,Params){

    var frm=ObjEvt.closest('form');

    if(frm.Packs.value==0){
        
        frm.DScantPedida.focus();
        frm.DScantPedida.select();

    }else{
        frm.DScantPedida.value=parseInt(frm.Packs.value) * parseInt(frm.DScantxpack.value);    
        frm.DScantPedida.focus();
        frm.DScantPedida.select();
    }



}