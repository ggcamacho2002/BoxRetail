async function Scripts_SetLStoreNuevaComanda(ObjEvt,Params){

    var idcomanda=localStorage.getItem('system-RespUltEvento-queryId');
    
    await SetDataComandaFromBd(idcomanda);

}


async function SetDataComandaFromBd(){

    var Hilo={};
    var cl=new Eventos();
    Hilo={IdEvt: "EVT_FRM_GetBdXUltIdInsertado_Comanda"};
    await cl.ejecutarHilo(Hilo);

}


