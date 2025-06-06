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
            "ClassEvt": "vistaArmando",
            "Label": "Pedido",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "1": {
            "Orden": 1,
            "ClassEvt": "vistaEspera",
            "Label": "En Espera",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "2": {
            "Orden": "2",
            "ClassEvt": "VTCompraControlada",
            "Label": "Controlados",
            "Style": {},
            "Param": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "vistaArmando",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_ListadoOrdenCompra"
                }
            }
        },
        "1": {
            "ClassEvt": "vistaEspera",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_ComprasEnEspera"
                }
            }
        },
        "2": {
            "ClassEvt": "VTCompraControlada",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_ComprasControladas"
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
