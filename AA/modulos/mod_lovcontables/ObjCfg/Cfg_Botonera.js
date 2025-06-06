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
            "ClassEvt": "TasasImpuestos",
            "Label": "Tasas e Impuestos",
            "Style": {},
            "Param": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "TasasImpuestos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_ManualFill_TasasImpuestos"
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
