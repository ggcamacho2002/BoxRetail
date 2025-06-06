function Scripts_CalcularAllItemSubtotal(ObjEvt,Params){

// Seleccionar todas las filas de la tabla
var filas = document.querySelectorAll("#TBL_ComandasItems-tbody tr");

        // Iterar sobre cada fila
        filas.forEach(function(fila) {

            if(fila.getAttribute("dsid")){

                    // Obtener el valor de 'DScantPedida'
                    var cantPedida = parseFloat(fila.querySelector("[name='DScantPedida']").value);
                    
                    // Obtener el valor de 'DSprecioventa'
                    var precioVenta = parseFloat(fila.querySelector("[name='DSprecioventa']").value);
                    
                    // Multiplicar los valores
                    var subtotal = cantPedida * precioVenta;
                    
                    // Establecer el subtotal calculado en el input 'DSSubtotal'
                    fila.querySelector("[name='DSSubtotal']").value = subtotal.toFixed(2);


            }

        });

    Scripts_CalcularSubtotal();

}