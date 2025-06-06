function Scripts_CalcularSubtotal(ObjEvt,Params){

        var fila=ObjEvt.closest('tr');

        if(ObjEvt.name=='DSNetoUnid')CambioUnidad(fila);
        if(ObjEvt.name=='DSNetoPack')CambioPack(fila);

        CalcularFila(fila);

        Scripts_CalcularTotal(null,null);
}


function CalcularFila(fila){

        var CantUnid=0;
        var NetoUnid=0;    
        var subtotIVA=0;
        var subtotIIBB=0;
        var subtotRetIva=0;
        var subtotImpInt=0;
        var NetoFinal=0;
        var Total=0;

        CantUnid=fila.querySelector('input[name="DScantidad"]');
        NetoUnid=fila.querySelector('input[name="DSNetoUnid"]');
        CantUnid=parseFloat(CantUnid.value);
        NetoUnid=parseFloat(NetoUnid.value);
        NetoFinal=CantUnid*NetoUnid;

        NetoFinal=fila.querySelector('input[name="DSneto"]');
        NetoFinal.value=(CantUnid*NetoUnid).toFixed(2);    
       
        NetoFinal=parseFloat(NetoFinal.value);
        bonif=TraerPorcentajeCampo(fila,'DSPorcBonif',NetoFinal);
        subtotIVA=TraerPorcentajeCampo(fila,'DSPorcIVA',NetoFinal);
        subtotIIBB=TraerPorcentajeCampo(fila,'DSPorcRetIIBB',NetoFinal);
        subtotRetIva=TraerPorcentajeCampo(fila,'DSPorcRetIva',NetoFinal);
        subtotImpInt=TraerPorcentajeCampo(fila,'DSPorcImpInterno',NetoFinal);
        
                
        Total=NetoFinal-bonif+subtotIVA+subtotIIBB+subtotRetIva+subtotImpInt;

        var aux=fila.querySelector('input[name="DStotal"]');
            aux.value=Total.toFixed(2);

           

}

function TraerPorcentajeCampo(fila,Campo,NetoFinal){

        var aux=fila.querySelector('input[name="'+Campo+'"]');
        
        if(aux.value){
                var valor=parseFloat(aux.value);       
                return (NetoFinal*(valor/100));
        }else{

                return 0;
        }

}



function CambioUnidad(fila){

        var CantxPack=0;
        var NetoUnid=0;    
        var NetoPack=0;
   
        CantxPack=fila.querySelector('input[name="DSCantxPack"]');
        NetoUnid=fila.querySelector('input[name="DSNetoUnid"]');
        NetoPack=fila.querySelector('input[name="DSNetoPack"]');
            
        CantxPack=parseFloat(CantxPack.value);
        NetoUnid=parseFloat(NetoUnid.value);
        NetoPack.value=(CantxPack*NetoUnid).toFixed(2);
    
        CantxPack=parseFloat(CantxPack.value);
        NetoPack=parseFloat(NetoPack.value);
    
        NetoUnid.value=(NetoPack/CantxPack).toFixed(2);
    
    
    
    }

    function CambioPack(fila){

        var CantxPack=0;
        var NetoUnid=0;    
        var NetoPack=0;
    
        CantxPack=fila.querySelector('input[name="DSCantxPack"]');
        NetoUnid=fila.querySelector('input[name="DSNetoUnid"]');
        NetoPack=fila.querySelector('input[name="DSNetoPack"]');
            
        CantxPack=parseFloat(CantxPack.value);
        NetoPack=parseFloat(NetoPack.value);
    
        NetoUnid.value=(NetoPack/CantxPack).toFixed(2);
    
    
    }