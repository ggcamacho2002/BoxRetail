function CfgSuperTabla(id,Param){
var ret={};

ret["ST_Propietario"]={
    "id": "ST_Propietario",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Propietarios",
    "idTabla": "TBL_Propietario",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "1",
                "idSrc": "DSNombre",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "Buscar",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Nuevo",
                "ClassEvt": "Nuevo",
                "CssClass": "Fill_Violeta2 ",
                "Style": {}
            }
        }
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {
            "0": {
                "Orden": "1",
                "idSrc": "DSNombre",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Nombre",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "Estado",
                "idSrc": "DSestado",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Estado",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "idSrc": "DSNombre",
                "Label": "Nombre"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSNombre",
                "Label": "Nombre"
            },
            "1": {
                "idSrc": "DSestado",
                "Label": "Estado"
            }
        },
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
            "ClassEvt": "Buscar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_Buscar_Propietario"
                }
            }
        },
        "1": {
            "ClassEvt": "Nuevo",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_PropietarioAlta"
                },
                "1": {
                    "Orden": "3",
                    "Trigger": "",
                    "IdEvt": ""
                }
            }
        }
    }
};
ret["ST_PropMarcas"]={
    "id": "ST_PropMarcas",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Propietario",
    "Titulo": "Marcas Activas",
    "idTabla": "TBL_PropietarioMarca",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "1",
                "idSrc": "DSMarca",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "Buscar",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {}
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {
            "0": {
                "Orden": "1",
                "idSrc": "DSMarca",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "german",
                "Label": "",
                "CssClass": "",
                "Style": {}
            }
        },
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
            "ClassEvt": "Buscar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_BuscarByRelacion_PropMarca"
                }
            }
        }
    }
};
ret["ST_ListaMarcas"]={
    "id": "ST_ListaMarcas",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Listado Marcas",
    "idTabla": "TBL_ListaMarcas",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "1",
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "Buscar",
                "CssClass": "",
                "Style": {}
            }
        },
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
    "CfgEventos": {
        "0": {
            "ClassEvt": "Buscar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_Buscar_ListaMarcas"
                }
            }
        }
    }
};
ret["ST_ABMMarcas"]={
    "id": "ST_ABMMarcas",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Listado de marcas",
    "idTabla": "TBL_ABMMarcas",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "1",
                "idSrc": "DSNombre",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "Buscar",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "Orden": "1",
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Nuevo",
                "ClassEvt": "Alta",
                "CssClass": "Fill_Violeta2 ",
                "Style": {}
            }
        }
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {
            "0": {
                "Orden": "1",
                "idSrc": "DSNombre",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Nombre",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "idSrc": "DSNombre",
                "Label": "Nombre"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSNombre",
                "Label": "Nombre"
            }
        },
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
            "ClassEvt": "Buscar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_Buscar_ABMMarcas"
                }
            }
        },
        "1": {
            "ClassEvt": "Alta",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaABMMarcas"
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
