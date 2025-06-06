function Scripts_CargarColumnaMasiva(ObjEvt, Params) {
    var campo = ObjEvt.id.split('-');
    var idsrc = '';
    switch (campo[0]) {
        case "porcBonif":
            idsrc = 'DSPorcBonif';
            break;
        case "porciva":
            idsrc = 'DSPorcIVA';
            break;
        case "porcretiva":
            idsrc = 'DSPorcRetIva';
            break;
        case "porcretiibb":
            idsrc = 'DSPorcRetIIBB';
            break;
        case "impint":
            idsrc = 'DSPorcImpInterno';
            break;
    }

    var tbl = document.getElementById('TBL_DocProvItems');
    var valor = ObjEvt.value;
    var fields = tbl.querySelectorAll('input[name="' + idsrc + '"]');

    fields.forEach(function (field) {
        field.value = valor;
        Scripts_CalcularSubtotal(field,'');
    });



}