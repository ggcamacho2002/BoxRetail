function CfgBotonera(id,Param){
var ret={};

ret["Botonera_General"]={
    "id": "Botonera_General",
    "Orientacion": "Vertical",
    "Style": {},
    "CssClass": "",
    "Botones": {
        "0": {
            "Orden": "1",
            "ClassEvt": "Comprobantes",
            "Label": "Comprobantes",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "1": {
            "Orden": "2",
            "ClassEvt": "ComprobanteTipo",
            "Label": "Comprobantes Tipo",
            "Style": {},
            "Param": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Comprobantes",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Comprobantes"
                }
            }
        },
        "1": {
            "ClassEvt": "ComprobanteTipo",
            "Hilo": {
                "0": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_ComprobanteTipo"
                }
            }
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
