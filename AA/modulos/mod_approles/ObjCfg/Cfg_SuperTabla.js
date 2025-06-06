function CfgSuperTabla(id,Param){
var ret={};

ret["ST_ListaRoles"]={
    "id": "ST_ListaRoles",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Lista Roles",
    "idTabla": "TBL_ListaRoles",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "BuscarHeader",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Alta",
                "ClassEvt": "DialogAlta",
                "CssClass": "Fill_Violeta2",
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
                "idSrc": "DSnombre",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Nombre",
                "CssClass": "",
                "Style": {}
            },
            "1": {
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
                "idSrc": "DSnombre",
                "Label": "Nombre"
            },
            "1": {
                "idSrc": "DSestado",
                "Label": "Estado"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSnombre",
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
            "ClassEvt": "ModalQuery",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_ModalQuery_ListaRol"
                }
            }
        },
        "1": {
            "ClassEvt": "DialogAlta",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaRol"
                }
            }
        },
        "2": {
            "ClassEvt": "BuscarHeader",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_Buscar_This"
                }
            }
        }
    }
};
ret["ST_ListaModulos"]={
    "id": "ST_ListaModulos",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaRoles",
    "Titulo": "Modulos",
    "idTabla": "TBL_RolesModulos",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "idSrc": "DStitulomodulo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "BuscarGral",
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
            "ClassEvt": "BuscarGral",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_BuscarByRelacion_RolModulo"
                }
            }
        }
    }
};
ret["ST_AgregarModulos"]={
    "id": "ST_AgregarModulos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Agregar Modulos",
    "idTabla": "TBL_ListaModulos",
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
                "ClassEvt": "",
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
                "ClassEvt": "",
                "CssClass": "",
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
            "ClassEvt": "BuscarHeader",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_Buscar_This"
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
