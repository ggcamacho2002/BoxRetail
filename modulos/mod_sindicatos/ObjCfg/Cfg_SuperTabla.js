function CfgSuperTabla(id,Param){
var ret={};

ret["ST_Sindicatos"]={
    "id": "ST_Sindicatos",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Sindicatos",
    "idTabla": "TBL_Sindicatos",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "ST_BusqFull",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Orden": "0",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Orden": "1",
                "Label": "Nuevo",
                "ClassEvt": "EvtNuevoReg",
                "CssClass": "Fill_Violeta2",
                "Style": {}
            }
        }
    },
    "Footer": {},
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {
            "0": {
                "idSrc": "DSid",
                "Label": "id",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "idSrc": "DSNombre",
                "Label": "Nombre",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "idSrc": "DSid",
                "Label": "id"
            },
            "1": {
                "idSrc": "DSNombre",
                "Label": "Nombre"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSid",
                "Label": "id"
            },
            "1": {
                "idSrc": "DSNombre",
                "Label": "Nombre"
            }
        },
        "Param": {
            "0": {
                "idSrc": "DsLimite",
                "Label": "Limite",
                "Value": "100"
            }
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtNuevoReg",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaSindicatos"
                }
            }
        }
    }
};
ret["ST_SindicatosBasicos"]={
    "id": "ST_SindicatosBasicos",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Sindicatos Basicos",
    "idTabla": "TBL_SindicatosBasicos",
    "ModoInicio": "EDIT",
    "Header": {
        "Filtros": {
            "0": {
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "BuscarGral",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Orden": "0",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Orden": "1",
                "Label": "Nuevo",
                "ClassEvt": "EvtNuevoReg",
                "CssClass": "Fill_Violeta2",
                "Style": {}
            }
        }
    },
    "Footer": {},
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {
            "0": {
                "idSrc": "DSid",
                "Label": "id",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "idSrc": "DScategoria",
                "Label": "categoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "idSrc": "DSbasico",
                "Label": "basico",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "idSrc": "DSidsindicato",
                "Label": "idsindicato",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "4": {
                "idSrc": "DSNombreSindicato",
                "Label": "NombreSindicato",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "idSrc": "DSid",
                "Label": "id"
            },
            "1": {
                "idSrc": "DScategoria",
                "Label": "categoria"
            },
            "2": {
                "idSrc": "DSbasico",
                "Label": "basico"
            },
            "3": {
                "idSrc": "DSidsindicato",
                "Label": "idsindicato"
            },
            "4": {
                "idSrc": "DSNombreSindicato",
                "Label": "NombreSindicato"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSid",
                "Label": "id"
            },
            "1": {
                "idSrc": "DScategoria",
                "Label": "categoria"
            },
            "2": {
                "idSrc": "DSbasico",
                "Label": "basico"
            },
            "3": {
                "idSrc": "DSidsindicato",
                "Label": "idsindicato"
            },
            "4": {
                "idSrc": "DSNombreSindicato",
                "Label": "NombreSindicato"
            }
        },
        "Param": {
            "0": {
                "idSrc": "DsLimite",
                "Label": "Limite",
                "Value": "100"
            }
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtNuevoReg",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaSindicatosBasicos"
                }
            }
        },
        "1": {
            "ClassEvt": "BuscarGral",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_BuscarByRelacion_SindicatosBasicos"
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
