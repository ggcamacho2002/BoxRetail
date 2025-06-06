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
            "ClassEvt": "VTInicio",
            "Label": "Personal",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "1": {
            "Orden": "2",
            "ClassEvt": "VTTarea",
            "Label": "Tareas",
            "Style": {},
            "Param": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "VTInicio",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Inicio"
                }
            }
        },
        "1": {
            "ClassEvt": "VTPersonalTarea",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_PersonalTareas"
                }
            }
        },
        "2": {
            "ClassEvt": "VTTarea",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Tareas"
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
