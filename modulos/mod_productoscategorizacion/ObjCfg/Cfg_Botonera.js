function CfgBotonera(id,Param){
var ret={};

ret["Botonera_Principal"]={
    "id": "Botonera_Principal",
    "Orientacion": "Vertical",
    "Style": {},
    "CssClass": "",
    "Botones": {
        "0": {
            "Orden": "0",
            "ClassEvt": "VistaCategoriza",
            "Label": "Categoriza",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "1": {
            "Orden": "2",
            "ClassEvt": "vistacategoria",
            "Label": "Categorias",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "2": {
            "Orden": "3",
            "ClassEvt": "vistasubcateg",
            "Label": "SubCategorias",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "3": {
            "Orden": "4",
            "ClassEvt": "vistatipos",
            "Label": "Tipos",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "4": {
            "Orden": "1",
            "ClassEvt": "Sectores",
            "Label": "Sectores",
            "Style": {},
            "Param": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "VistaCategoriza",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_categorizacion"
                }
            }
        },
        "1": {
            "ClassEvt": "vistacategoria",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_categorias"
                }
            }
        },
        "2": {
            "ClassEvt": "vistasubcateg",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_subcateg"
                }
            }
        },
        "3": {
            "ClassEvt": "vistatipos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_tipos"
                }
            }
        },
        "4": {
            "ClassEvt": "Sectores",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Sectores"
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
