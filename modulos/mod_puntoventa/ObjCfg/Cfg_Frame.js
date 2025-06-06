function CfgFrame(id,Param){
var ret={};

ret["Frame_ImprimirComanda"]={
    "id": "Frame_ImprimirComanda",
    "CssClass": "",
    "Style": {},
    "Class": "PuntoVentaComandas",
    "Metodo": "ImprimirComanda",
    "Param": {
        "0": {
            "Key": "IdRemito",
            "Tipo": "GetValue",
            "Id\/Value": "DSidremito-0-Fld-FRM_NuevoRecibo"
        }
    }
};
ret["Frame_ImprimirTiketAfip"]={
    "id": "Frame_ImprimirTiketAfip",
    "CssClass": "",
    "Style": {},
    "Class": "AfipFacturaTicketImprimir",
    "Metodo": "ImprimirBdTicket",
    "Param": {
        "0": {
            "Key": "IdFactura",
            "Tipo": "LocalStore",
            "Id\/Value": "system-RespUltEvento-queryId"
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
