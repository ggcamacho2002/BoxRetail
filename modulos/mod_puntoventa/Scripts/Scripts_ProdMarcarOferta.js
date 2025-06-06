function Scripts_ProdMarcarOferta(ObjEvt,Params){

    var tblbody = document.getElementById('TBL_POSListaProductos-tbody');
    var FlagOferta = tblbody.querySelectorAll("input[name='DSFlagOferta']");
    
    FlagOferta.forEach(function(input) {

        if (input.value.trim() !== '') {
            // Encuentra el div padre más cercano para luego encontrar el div DSEstadoProducto
            var divEstado = input.closest('tr').querySelector("div[name='DSEstadoProducto']");
            if (divEstado) {
                divEstado.innerHTML = "OFERTA";  // Cambia el contenido a OFERTA
                divEstado.classList.add('divOferta')
            }
        }
    });

    

   
     
}