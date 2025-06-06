function Scripts_CalcularSubtotal(ObjEvt,Params){

    var tbody= document.getElementById("TBL_ComandasItems-tbody");    
    var tbodytr = tbody.querySelectorAll('tr');
    var precio=0;
    var cantPedida=0;
    var subtItem=0;
    var subtItem=0;
    var sumaTotal=0;
    var aux=0;

    tbodytr.forEach(function(tr) {

        precio=tr.querySelector("input[name='DSprecioventa']");
        if(precio){

            cantPedida=tr.querySelector("input[name='DScantPedida']");
            subtItem=tr.querySelector("input[name='DSSubtotal']");
    
            aux=parseFloat(precio.value) * parseFloat(cantPedida.value);
            aux=parseFloat(aux);
            subtItem.value=aux.toFixed(2);
            sumaTotal=sumaTotal+aux;

        }


    });


    var targetInput = document.getElementById('Subtotal-0-Fld-ST_ComandasItems');
    targetInput.value = sumaTotal.toFixed(2);
}

