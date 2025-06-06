async function Scripts_VistaNuevaComanda(ObjEvt,Params){
    document.getElementById("CD_AperturaCaja").remove();
     var datos=JSON.parse(localStorage.getItem("system-RespUltEvento-datos"));  

    ScriptsEstadoNuevaComanda(datos[0]['hora_apertura']);
}