function CfgCard(id,Param){
var ret={};

ret["CD_Variables"]={
    "id": "CD_Variables",
    "Titulo": "Variables",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {},
    "CssClass": "",
    "Ctrl": {
        "0": {
            "id": "volver",
            "Orden": "1",
            "Label": "volver",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "volver",
            "Style": {},
            "CssClass": "Fill_Azul1"
        }
    },
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_Variables",
        "Param": {}
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "volver",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Manual"
                }
            }
        }
    }
};
ret["CD_Totales"]={
    "id": "CD_Totales",
    "Titulo": "Totales",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "min-content"
        }
    },
    "CssClass": "",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_TotalesLiquidacion",
        "Param": {}
    },
    "CfgEventos": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
