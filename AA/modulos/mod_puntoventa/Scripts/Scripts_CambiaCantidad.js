function Scripts_CambiaCantidad(ObjEvt,Params){

    var aux=ObjEvt.id.split('-');
    var Item=aux[1];
    var Campo=aux[0];

    var valor=parseFloat(ObjEvt.value);

    var tr=document.getElementById("row-"+Item+"-frmTBL_ComandasItems");
    var cantxpack=tr.querySelector("input[name='DSCantxPack']");
    var unidades=tr.querySelector("input[name='DScantPedida']");
    var pack=tr.querySelector("input[name='DSPacksPedido']");

    
    if(Campo=='DSPacksPedido'){
        if(ObjEvt.value=="")alert("El valor del pack no puede estar vacio");
        if(valor==0)unidades.value =cantxpack.value;
        if(valor !=0 && ObjEvt.value !="")unidades.value = (valor*cantxpack.value).toFixed(2);
    }else{
        if(valor==0 || ObjEvt.value==''){
            alert("Las Unidades no pueden ser cero o vacias");
            var auxUnid =parseFloat(pack.value)*parseFloat(cantxpack.value);
            unidades.value=auxUnid.toFixed(2);
        }else  pack.value = (valor/cantxpack.value).toFixed(2);
    }    
    
    if(Campo=='DSPacksPedido'){        
        var evt = new Event('change', {'bubbles': true,'cancelable': false});
        unidades.dispatchEvent(evt);        
    }

    Scripts_CalcularSubtotal();

}

