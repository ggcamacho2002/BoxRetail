function CfgBotonera(id,Param){
var ret={};

ret["Botonera_Principal"]={
    "id": "Botonera_Principal",
    "Orientacion": "Vertical",
    "Style": {},
    "CssClass": "",
    "Botones": {
        "0": {
            "ClassEvt": "Propietarios",
            "Label": "Propietarios",
            "Style": {},
            "Param": {},
            "CssClass": ""
        },
        "1": {
            "ClassEvt": "Marcas",
            "Label": "Marcas",
            "Style": {},
            "Param": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Propietarios",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_CambiarEstado_0-0"
                }
            }
        },
        "1": {
            "ClassEvt": "Marcas",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_CambiarEstado_0-2"
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
