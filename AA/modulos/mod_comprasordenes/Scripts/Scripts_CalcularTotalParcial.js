function Scripts_CalcularTotalParcial(ObjEvt,Params){

    var formu = document.getElementById("frmTBL_ComprasOrdenesItems");
    var inputs = formu.querySelectorAll("input[name='DSSubTotal']");
    var total = 0;

    inputs.forEach(function(input) {
        total += parseFloat(input.value) || 0;
    });
    total= total.toFixed(2);

    document.getElementById("Total-0-Fld-ST_ComprasOrdenesItems").value = total;


}