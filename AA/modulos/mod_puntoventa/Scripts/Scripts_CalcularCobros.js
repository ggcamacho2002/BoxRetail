function Scripts_CalcularCobros(ObjEvt,Params){

    var ST= document.getElementById("ST_ListaFormaCobro");
    
    var tbody = ST.querySelector('tbody');
    var tbodytr = tbody.querySelectorAll('tr');
    var suma = 0;
    tbodytr.forEach(function(tr) {
        var div = tr.querySelector('div[name="DSmonto"]');
        if (div) {
            var monto = parseFloat(div.innerHTML);
            if (!isNaN(monto)) {
                suma += monto;
            }
        }
    });

    var tfooter = ST.querySelector('.StablaFooter');
    var campos=tfooter.querySelectorAll('input');
    var totalcarrito=0;
    var TotalCobros=0;

    
    campos.forEach(function(input) {
        if (input.name === 'TotalCarrito') {
            totalcarrito = parseFloat(input.value);
        }
        if (input.name === 'TotalCobros') {
            input.value=suma.toFixed(2);
            TotalCobros=input.value;
        }
        if (input.name === 'Restan') {
            var aux=totalcarrito - suma;
           if(aux > 0 ) input.value=(totalcarrito - suma).toFixed(2);
           else input.value=0;
        }
        if (input.name === 'Cambio') {
            var aux=totalcarrito - TotalCobros;
            if(aux < 0 ) input.value=-1*(totalcarrito - TotalCobros).toFixed(2);
            else input.value=0;

        }
    });

}