function CfgSuperTabla(id,Param){
var ret={};

ret["ST_SueldosItemsConfig"]={
    "id": "ST_SueldosItemsConfig",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Sueldos Items Config.",
    "idTabla": "TBL_SueldosItemsConfig",
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
                "idSrc": "DSconcepto",
                "Label": "concepto",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "idSrc": "DScodigo",
                "Label": "codigo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "idSrc": "DSsubtotaltipo",
                "Label": "subtotaltipo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "4": {
                "idSrc": "DSformulaunidad",
                "Label": "formulaunidad",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "5": {
                "idSrc": "DSoperacion",
                "Label": "operacion",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "6": {
                "idSrc": "DSformulavalorunit",
                "Label": "formulavalorunit",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "7": {
                "idSrc": "DSestado",
                "Label": "estado",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "8": {
                "idSrc": "DSorden",
                "Label": "orden",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "9": {
                "idSrc": "DStipo",
                "Label": "tipo",
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
                "idSrc": "DSconcepto",
                "Label": "concepto"
            },
            "2": {
                "idSrc": "DScodigo",
                "Label": "codigo"
            },
            "3": {
                "idSrc": "DSsubtotaltipo",
                "Label": "subtotaltipo"
            },
            "4": {
                "idSrc": "DSformulaunidad",
                "Label": "formulaunidad"
            },
            "5": {
                "idSrc": "DSoperacion",
                "Label": "operacion"
            },
            "6": {
                "idSrc": "DSformulavalorunit",
                "Label": "formulavalorunit"
            },
            "7": {
                "idSrc": "DSestado",
                "Label": "estado"
            },
            "8": {
                "idSrc": "DSorden",
                "Label": "orden"
            },
            "9": {
                "idSrc": "DStipo",
                "Label": "tipo"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSid",
                "Label": "id"
            },
            "1": {
                "idSrc": "DSconcepto",
                "Label": "concepto"
            },
            "2": {
                "idSrc": "DScodigo",
                "Label": "codigo"
            },
            "3": {
                "idSrc": "DSsubtotaltipo",
                "Label": "subtotaltipo"
            },
            "4": {
                "idSrc": "DSformulaunidad",
                "Label": "formulaunidad"
            },
            "5": {
                "idSrc": "DSoperacion",
                "Label": "operacion"
            },
            "6": {
                "idSrc": "DSformulavalorunit",
                "Label": "formulavalorunit"
            },
            "7": {
                "idSrc": "DSestado",
                "Label": "estado"
            },
            "8": {
                "idSrc": "DSorden",
                "Label": "orden"
            },
            "9": {
                "idSrc": "DStipo",
                "Label": "tipo"
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
                    "IdEvt": "EVT_DG_Iniciar_AltaSueldosItemsConfig"
                }
            }
        }
    }
};
ret["ST_SueldosParam"]={
    "id": "ST_SueldosParam",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "",
    "idTabla": "TBL_SueldosParam",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {},
        "Ctrl": {}
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {},
        "FiltroAvz": {},
        "Orden": {},
        "Param": {
            "0": {
                "idSrc": "DSLimite",
                "Label": "Limite",
                "Value": "100"
            }
        }
    },
    "CfgEventos": {}
};
ret["ST_Formulas"]={
    "id": "ST_Formulas",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Formulas",
    "idTabla": "TBL_Formulas",
    "ModoInicio": "EDIT",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "1",
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "ST_BusqFull",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "Orden": "1",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Ver Parametros",
                "ClassEvt": "VerParametros",
                "CssClass": "Fill_Azul1",
                "Style": {}
            }
        }
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {},
        "FiltroAvz": {},
        "Orden": {},
        "Param": {
            "0": {
                "idSrc": "DSLimite",
                "Label": "Limite",
                "Value": "100"
            }
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "VerParametros",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_IniciarSinClear_Parametros"
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
