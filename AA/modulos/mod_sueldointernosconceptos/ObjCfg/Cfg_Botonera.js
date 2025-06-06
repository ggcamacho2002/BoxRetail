function CfgBotonera(id,Param){
var ret={};

ret["Botonera_Principal"]={
    "id": "Botonera_Principal",
    "Orientacion": "Vertical",
    "Style": {},
    "CssClass": "",
    "Botones": {
        "0": {
            "Orden": "1",
            "ClassEvt": "vistainicio",
            "Label": "Personal",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "1": {
            "Orden": "2",
            "ClassEvt": "VistaConcepto",
            "Label": "Conceptos",
            "Style": {},
            "Param": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "VistaConcepto",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_SueldoIntConcepto"
                }
            },
        },
        "1": {
            "ClassEvt": "vistainicio",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Inicio"
                }
            },
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
