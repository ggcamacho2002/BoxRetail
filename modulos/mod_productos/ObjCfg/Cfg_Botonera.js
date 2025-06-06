function CfgBotonera(id,Param){
var ret={};

ret["Botonera_Inicio"]={
    "id": "Botonera_Inicio",
    "Orientacion": "Vertical",
    "Style": {},
    "CssClass": "",
    "Botones": {
        "0": {
            "Orden": "1",
            "ClassEvt": "Basico",
            "Label": "Basico",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "1": {
            "Orden": "Extra",
            "ClassEvt": "Extra",
            "Label": "Extra",
            "Style": {},
            "Param": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Basico",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_CambiarEstado_0-0"
                }
            }
        },
        "1": {
            "ClassEvt": "Extra",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_CambiarEstado_0-1"
                }
            }
        }
    }
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
