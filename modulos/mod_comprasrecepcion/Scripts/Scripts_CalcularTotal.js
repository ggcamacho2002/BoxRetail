function Scripts_CalcularTotal(ObjEvt,Params){

    var tbltr= document.querySelectorAll('#TBL_DocProvItems tbody tr');
    var tds=null;
    var Bonif=0;
    var Iva=0;
    var retiva=0;
    var iibb=0;
    var impint=0;
    var NetoFinal=0;
    var bultos=0;
    var total=0;
    var neto=0;


    tbltr.forEach(function (tr) {

        tds=tr.querySelectorAll('input');
        NetoFinal=tr.querySelector('input[name="DSneto"]');
        NetoFinal=parseFloat(NetoFinal.value);

        bultos=tr.querySelector('input[name="DSPacks"]');
        bultos=parseFloat(bultos.value);


        tds.forEach(function (fld) {

            switch (fld.name) {
                case "DSPorcBonif":
                        Bonif+=TraerPorcentajexValor(fld.value,NetoFinal);
                break;
                case "DSPorcIVA":
                         Iva+=TraerPorcentajexValor(fld.value,NetoFinal);
                break;
                case "DSPorcRetIva":
                        retiva+=TraerPorcentajexValor(fld.value,NetoFinal);
                break;
                case "DSPorcRetIIBB":
                         iibb+=TraerPorcentajexValor(fld.value,NetoFinal);
                break;
                case "DSPorcImpInterno":
                         impint+=TraerPorcentajexValor(fld.value,NetoFinal);
                break;
                case "DStotal":
                       total+=parseFloat(fld.value);
                break;
                case "DSneto":
                       neto+=parseFloat(fld.value);
                break;
            }

        });

    });

    
    var footer = document.querySelector('#ST_DocProvItems-Footer');
    var aux = null;
    
    aux = footer.querySelector('input[name="totneto"]');
    aux.value = neto.toFixed(2);
   
    aux = footer.querySelector('input[name="totBonif"]');
    aux.value = Bonif.toFixed(2);
    
    aux = footer.querySelector('input[name="totiva"]');
    aux.value = Iva.toFixed(2);
    
    aux = footer.querySelector('input[name="totretiva"]');
    aux.value = retiva.toFixed(2);
    
    aux = footer.querySelector('input[name="totretiibb"]');
    aux.value = iibb.toFixed(2);
    
    aux = footer.querySelector('input[name="totimpint"]');
    aux.value = impint.toFixed(2);
    

    aux = footer.querySelector('input[name="totalFinal"]');
    aux.value = total.toFixed(2);


}

function TraerPorcentajexValor(valor,NetoFinal){
    
    if(valor){
            valor=parseFloat(valor);       
            return (NetoFinal*(valor/100));
    }else{

            return 0;
    }

}



