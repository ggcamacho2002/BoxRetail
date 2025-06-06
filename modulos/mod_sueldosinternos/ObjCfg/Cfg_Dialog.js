function CfgDialog(id,Param){
var ret={};

ret["DG_LiquidacioManual"]={
    "id": "DG_LiquidacioManual",
    "Tipo": "Movible",
    "Titulo": "Pre View - Liquidacion Manual",
    "TipoObj": "Impresion",
    "EvtInicio":"Iniciar","IdObj": "IMP_LiquidacionManual",
    "HeaderCtrl": {
        "0": {
            "id": "Imprimir",
            "Orden": "1",
            "Tipo": "Ctrl",
            "EvtInicio":"Iniciar","IdObj": "BotonComun",
            "Label": "Imprimir",
            "ClassEvt": "Imprimir",
            "CssClass": "Fill_Verde1",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "80%"
                }
            }
        }
    },
    "Style": {},
    "CssClass": "",
    "Param": {},
    "CfgEventos": {
        "0": {
            "ClassEvt": "Imprimir",
            "Hilo": {
                "0": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_IMP_Imprimir_LiquidacionManual"
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
