async function Scripts_InicioPuntoVenta(ObjEvt,Params){

    var cl=new Eventos();
    cl.ClaseActual=this;

    var Hilo={IdEvt: "EVT_DS_Libre_VerificarApertura"};
    await cl.ejecutarHilo(Hilo);
    var datos=cl.Out['datos'];
    
     if(datos=="NO-DATOS"){
            var cl=new Eventos();    
            var Hilo={IdEvt: "EVT_VT_ManualFill_AperturaCaja"};
            await cl.ejecutarHilo(Hilo);

            document.getElementById("DSnombreusuario-0-Fld-FRM_AperturaCaja").value=document.getElementById("usu_nombre").value;
            document.getElementById("DShora_apertura-0-Fld-FRM_AperturaCaja").value=new Date().toLocaleString();

     }else{
        VerificarComandaPendiente(datos[0]['hora_apertura']);
     }

        
}



async function VerificarComandaPendiente(horaapertura){

    var cl=new Eventos();
    cl.ClaseActual=this;

    var Hilo={IdEvt: "EVT_DS_LibreByRelacion_ComandaPendiente"};

    await cl.ejecutarHilo(Hilo);
    
    var datos=cl.Out['datos'];

        if(datos[0]){

            if(datos[0]["id"]){

                    var idcomanda=datos[0]["id"];
                    var idcliente=datos[0]["cli_clave"];
                    var razonSocial=datos[0]["cli_razon_social"];
                    var maxctacte=datos[0]["cli_maxctacte"];
                    var cheque=datos[0]["cli_cheque"];
                  
                    SetDataComanda(razonSocial,idcliente,idcomanda,maxctacte,cheque);
                    SetAperturaCaja(horaapertura);
                    ScriptsCargarComanda()
            }else{ ScriptsEstadoNuevaComanda(horaapertura);}

        }else{ ScriptsEstadoNuevaComanda(horaapertura);}

}


function SetDataComanda(razonSocial,idcliente,idcomanda,maxctacte,cheque){


    document.getElementById("DSmaxctacte-0-Fld-FRM_Comanda").value=maxctacte;
    document.getElementById("DScheque-0-Fld-FRM_Comanda").value=cheque;
    document.getElementById("DSid-0-Fld-FRM_Comanda").value=idcomanda;
    document.getElementById("NombreCliente-0-Fld-FRM_Comanda").value=razonSocial;
    document.getElementById("DScli_clave-0-Fld-FRM_Comanda").value=idcliente;

}


async function ScriptsEstadoNuevaComanda(horaapertura){
    SetAperturaCaja(horaapertura);
    var cl=new Eventos();    
    var Hilo={IdEvt: "EVT_VT_ManualFill_NuevaComanda"};
    await cl.ejecutarHilo(Hilo);
 
}

async function ScriptsCargarComanda(){
    var Hilo={};
    var cl=new Eventos();

    Hilo={IdEvt: "EVT_ST_BuscarByRelacion_ComandasItems"};
    await cl.ejecutarHilo(Hilo);
    Hilo={IdEvt: "EVT_ST_BuscarByRelacion_BuscarProductos"};
    await cl.ejecutarHilo(Hilo);
    Hilo={IdEvt: "EVT_VT_CambiarEstado_Carrito"};
    await cl.ejecutarHilo(Hilo);
    Hilo={IdEvt: "EVT_Scripts_Iniciar_FocusBusqueda"};
    await cl.ejecutarHilo(Hilo);
    Hilo={IdEvt: "EVT_Scripts_Iniciar_CalcularAllItemSubtotal"};
    await cl.ejecutarHilo(Hilo);

 
}
async function SetAperturaCaja(horaapertura){
    var fecha = new Date(horaapertura);
    var fechaFormateada = fecha.toLocaleString();
    localStorage.setItem("AperturaCaja",fechaFormateada);
    document.getElementById("DShora_apertura-0-Fld-FRM_CabCaja").value = fechaFormateada;

 
}

