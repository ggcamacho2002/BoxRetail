function CfgSuperTabla(id,Param){
var ret={};

ret["ST_Comprobante"]={
    "id": "ST_Comprobante",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Comprobantes",
    "idTabla": "TBL_Comprobante",
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
                "CssClass": "Fill_Violeta1",
                "Style": {}
            }
        }
    },
    "Footer": {},
    "ModalQuery": {
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
                "idSrc": "DScomdescripcion",
                "Label": "descripcion",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "idSrc": "DScomestado",
                "Label": "estado",
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
                "idSrc": "DScomdescripcion",
                "Label": "descripcion"
            },
            "2": {
                "idSrc": "DScomestado",
                "Label": "estado"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSid",
                "Label": "id"
            },
            "1": {
                "idSrc": "DScomdescripcion",
                "Label": "descripcion"
            },
            "2": {
                "idSrc": "DScomestado",
                "Label": "estado"
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
                    "IdEvt": "EVT_DG_Iniciar_AltaComprobante"
                }
            }
        }
    }
};
ret["ST_ComprobanteTipo"]={
    "id": "ST_ComprobanteTipo",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Tipos de Comprobantes",
    "idTabla": "TBL_ComprobanteTipo",
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
                "CssClass": "Fill_Violeta1",
                "Style": {}
            }
        }
    },
    "Footer": {},
    "ModalQuery": {
        "FiltrosRap": {
            "0": {
                "Orden": "0",
                "idSrc": "DSTic_descripcion",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "descripcion",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "idSrc": "DSTic_estado",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Estado",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "Orden": "2",
                "idSrc": "DSTic_DeudorAcreedor",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Deudor\/Acreedor",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "Orden": "3",
                "idSrc": "DSCom_descripcion",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Comprobante",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "Orden": "0",
                "idSrc": "DSTic_descripcion",
                "Label": "descripcion"
            },
            "1": {
                "Orden": "1",
                "idSrc": "DSTic_DeudorAcreedor",
                "Label": "Deudor\/Acredor"
            }
        },
        "Orden": {
            "0": {
                "Orden": "0",
                "idSrc": "DSid",
                "Label": "Id"
            },
            "1": {
                "Orden": "1",
                "idSrc": "DSTic_descripcion",
                "Label": "descripcion"
            },
            "2": {
                "Orden": "2",
                "idSrc": "DStic_orden",
                "Label": "Orden"
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
                    "IdEvt": "EVT_DG_Iniciar_AltaComprobanteTipo"
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
