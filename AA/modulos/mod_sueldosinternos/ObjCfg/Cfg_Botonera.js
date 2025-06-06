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
            "ClassEvt": "",
            "Label": "Manual",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "1": {
            "Orden": "2",
            "ClassEvt": "",
            "Label": "masivo",
            "Style": {},
            "Param": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Manual",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Inicio"
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
