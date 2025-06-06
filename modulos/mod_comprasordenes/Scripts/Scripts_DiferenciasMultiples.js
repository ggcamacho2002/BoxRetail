function Scripts_DiferenciasMultiples(ObjEvt,Params){

    var TBL=document.getElementById('TBL_COrdenesItemsControl');

    var filas = TBL.querySelectorAll('tbody > tr');

    filas.forEach(function(fila) {

        Scripts_ProcesarDiferencias(fila);

    });
}

