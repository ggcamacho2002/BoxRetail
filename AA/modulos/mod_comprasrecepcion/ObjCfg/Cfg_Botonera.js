function CfgBotonera(id,Param){
var ret={};

ret["Botonera_General"]={
    "id": "Botonera_General",
    "Orientacion": "Vertical",
    "Style": {},
    "CssClass": "",
    "Botones": {
        "0": {
            "Orden": 0,
            "ClassEvt": "Inicio",
            "Label": "Controlados",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "1": {
            "Orden": 1,
            "ClassEvt": "Recepcion",
            "Label": "Recepcion",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "2": {
            "Orden": "2",
            "ClassEvt": "DocsGuardados",
            "Label": "Guardados",
            "Style": {},
            "Param": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Inicio",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Inicio"
                }
            }
        },
        "1": {
            "ClassEvt": "Recepcion",
            "Hilo": {
                "0": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Recepcion"
                }
            }
        },
        "2": {
            "ClassEvt": "DocsGuardados",
            "Hilo": {
                "0": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_DocsGuardados"
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
