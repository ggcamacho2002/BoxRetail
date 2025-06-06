async function Scripts_CerrarComanda(ObjEvt,Params){

    var obj=ObjEvt.id.split("-");

    if(obj[0]=="CerrarComanda"){await scriptCerrarVenta(ObjEvt);}
    else {await scriptCerrarPedido(ObjEvt);}

}



async function scriptCerrarVenta(ObjEvt){

    var cl=new Eventos();    

    document.getElementById('VT_Principal_GR_POS-1-0').innerHTML='';

    Hilo={IdEvt:"EVT_DS_LibreByRelacion_CrearRecibo"};
    await cl.ejecutarHilo(Hilo);

    Hilo={IdEvt:"EVT_VT_ManualFill_FinalizaVentaCab"};
    await cl.ejecutarHilo(Hilo);
    Hilo={IdEvt:"EVT_VT_ManualFill_FinalizaVentaFormaPago"};
    await cl.ejecutarHilo(Hilo);
    Hilo={IdEvt:"EVT_VT_ManualFill_ListaCobroForma"};
    await cl.ejecutarHilo(Hilo);
    Hilo={IdEvt:"EVT_VT_CambiarEstado_NuevaComanda"};
    await cl.ejecutarHilo(Hilo);
    Hilo={IdEvt:"EVT_FRM_GetBdXRelacion_NuevoRecibo"};
    await cl.ejecutarHilo(Hilo);
    Hilo={IdEvt:"EVT_ST_BuscarByRelacion_ListaFormaCobro"};
    await cl.ejecutarHilo(Hilo);
   
    document.getElementById("TotalCarrito-0-Fld-ST_ListaFormaCobro").value=document.getElementById("Subtotal-0-Fld-ST_ComandasItems").value;

    Scripts_CalcularCobros();
    

}


async function scriptCerrarPedido(ObjEvt){

    var cl=new Eventos();    

    document.getElementById('VT_Principal_GR_POS-1-0').innerHTML='';

    Hilo={IdEvt:"EVT_DS_LibreByRelacion_CrearPedido"};
    await cl.ejecutarHilo(Hilo);
    Hilo={IdEvt:"EVT_VT_ManualFill_NuevaComanda"};
    await cl.ejecutarHilo(Hilo);
    Hilo={IdEvt:"EVT_VT_CambiarEstado_NuevaComanda"};
    await cl.ejecutarHilo(Hilo);
   
   

}

