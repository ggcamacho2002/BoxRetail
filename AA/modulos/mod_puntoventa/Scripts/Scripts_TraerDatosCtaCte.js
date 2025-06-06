async function Scripts_TraerDatosCtaCte(ObjEvt,Params){

    var Hilo={};
    var cl=new Eventos();

    Hilo={IdEvt: "EVT_DS_Libre_SaldoClienteCtaCte"};
    await cl.ejecutarHilo(Hilo);
    var saldo=cl.Out['datos'][0]['saldo'];

    document.getElementById('DSsaldoCtaCte-0-Fld-FRM_CobroCtaCte').value=saldo;
    var maxctacte=localStorage.getItem('maxctacte');
    document.getElementById('DSMaxCtaCte-0-Fld-FRM_CobroCtaCte').value=maxctacte;
    
    
    document.getElementById('MontoDisp-0-Fld-FRM_CobroCtaCte').value=parseFloat(maxctacte) - parseFloat(saldo);
   
    var DSmonto=document.getElementById('DSmonto-0-Fld-FRM_CobroCtaCte');

    DSmonto.focus();
    DSmonto.select();




}