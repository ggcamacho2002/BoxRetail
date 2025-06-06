function CfgCard(id,Param){
var ret={};

ret["CD_PersonalSelecto"]={
    "id": "CD_PersonalSelecto",
    "Titulo": "Personal Selecto",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {},
    "CssClass": "",
    "Ctrl": {
        "0": {
            "id": "Volver",
            "Orden": "1",
            "Label": "Volver",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "VistaInicio",
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
            "ClassEvt": "VistaInicio",
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
ret["CD_PersonalSelecto2"]={
    "id": "CD_PersonalSelecto2",
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
            "Label": "volver",
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
        "IdObj": "FRM_ListaPersonal",
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
