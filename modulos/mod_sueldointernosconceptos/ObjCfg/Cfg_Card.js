function CfgCard(id,Param){
var ret={};

ret["CD_persoalselecto"]={
    "id": "CD_persoalselecto",
    "Titulo": "Personal Selecto",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "min-content"
        }
    },
    "CssClass": "",
    "Ctrl": {
        "0": {
            "id": "volver",
            "Orden": "1",
            "Label": "Volver",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Volver",
            "Style": {},
            "CssClass": "Fill_Azul1"
        }
    },
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_PersonalSelecto",
        "Param": {}
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Volver",
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
