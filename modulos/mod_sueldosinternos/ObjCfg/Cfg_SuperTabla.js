function CfgSuperTabla(id,Param){
var ret={};

ret["ST_Personal"]={
    "id": "ST_Personal",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Personal",
    "idTabla": "TBL_Personal",
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
                "idSrc": "DSp_Nombre",
                "Label": "p_Nombre",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "idSrc": "DSp_Apellido",
                "Label": "p_Apellido",
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
                "idSrc": "DSp_Nombre",
                "Label": "p_Nombre"
            },
            "2": {
                "idSrc": "DSp_Apellido",
                "Label": "p_Apellido"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSid",
                "Label": "id"
            },
            "1": {
                "idSrc": "DSp_Nombre",
                "Label": "p_Nombre"
            },
            "2": {
                "idSrc": "DSp_Apellido",
                "Label": "p_Apellido"
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
    "CfgEventos": {}
};
ret["ST_LiquidacionItems"]={
    "id": "ST_LiquidacionItems",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Liquidacion Items",
    "idTabla": "TBL_LiquidacionItems",
    "ModoInicio": "RO",
    "Header": {
        "0": {
            "Orden": 0
        },
        "1": {
            "Orden": 1
        }
    },
    "Footer": {
        "Fields": {
            "0": {
                "id": "TotalRemu",
                "Orden": "5",
                "idSrc": "DSremunerativo",
                "Tipo": "Fld",
                "IdObj": "InputLabelDiv",
                "Param": {
                    "0": {
                        "Key": "SumatoriaIdSrc",
                        "Value": ""
                    }
                },
                "Value": "",
                "Label": "Total Remu.",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "id": "TotalDes",
                "Orden": "6",
                "idSrc": "DSdescuento",
                "Tipo": "Fld",
                "IdObj": "InputLabelDiv",
                "Param": {
                    "0": {
                        "Key": "SumatoriaIdSrc",
                        "Value": ""
                    }
                },
                "Value": "",
                "Label": "Total Descuento",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "id": "TotalFinal",
                "Orden": "7",
                "idSrc": "",
                "Tipo": "Fld",
                "IdObj": "InputLabelDiv",
                "Param": {
                    "0": {
                        "Key": "Calculado",
                        "Value": "(TotalRemu - TotalDes)"
                    }
                },
                "Value": "",
                "Label": "total final",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "id": "Salir",
                "Orden": "1",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Salir",
                "ClassEvt": "volver",
                "CssClass": "fill_azul1 Hide",
                "Style": {}
            },
            "1": {
                "id": "imprimir",
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "imprimir",
                "ClassEvt": "Imprimir",
                "CssClass": "fill_verde1 Hide",
                "Style": {}
            }
        }
    },
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {},
        "FiltroAvz": {},
        "Orden": {
            "0": {
                "Orden": "",
                "idSrc": "",
                "Label": ""
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
            "ClassEvt": "volver",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Inicio"
                }
            },
        },
        "1": {
            "ClassEvt": "Imprimir",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_ImprimeLiqManual"
                }
            },
        }
    }
};
ret["ST_LiqItemsImprimir"]={
    "id": "ST_LiqItemsImprimir",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Items Sueldo",
    "idTabla": "TBL_LiqItemsImprimir",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {},
        "Ctrl": {}
    },
    "Footer": {
        "Fields": {
            "0": {
                "id": "Remunerativo",
                "Orden": "1",
                "idSrc": "DSremunerativo",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {
                    "0": {
                        "Key": "SumatoriaIdSrc",
                        "Value": ""
                    }
                },
                "Value": "",
                "Label": "Remunerativo",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "id": "Descuentos",
                "Orden": "1",
                "idSrc": "DSdescuento",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {
                    "0": {
                        "Key": "SumatoriaIdSrc",
                        "Value": ""
                    }
                },
                "Value": "",
                "Label": "Descuentos",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "id": "TotalFinal",
                "Orden": "3",
                "idSrc": "",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {
                    "0": {
                        "Key": "Calculado",
                        "Value": "(Remunerativo - Descuentos)"
                    }
                },
                "Value": "",
                "Label": "Total Final",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            }
        },
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
            "ClassEvt": "cargardatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_ST_BuscarByRelacion_LiqItemsImprimir"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_ST_CompletarFooter_LiqItemsImprimir"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_IMP_Imprimir_LiquidacionManual"
                }
            },
        }
    }
};
ret["ST_ListaLiquidaciones"]={
    "id": "ST_ListaLiquidaciones",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Lista de Liquidaciones",
    "idTabla": "TBL_ListaLiquidaciones",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "BuscarGral",
                "CssClass": "Fill_Azul1",
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
            }
        }
    },
    "Footer": {},
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {
            "1": {
                "idSrc": "DStotal",
                "Label": "total",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "idSrc": "DSfecha",
                "Label": "fecha",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "idSrc": "DSestado",
                "Label": "estado",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "1": {
                "idSrc": "DStotal",
                "Label": "total"
            },
            "2": {
                "idSrc": "DSfecha",
                "Label": "fecha"
            },
            "3": {
                "idSrc": "DSestado",
                "Label": "estado"
            }
        },
        "Orden": {
            "1": {
                "idSrc": "DStotal",
                "Label": "total"
            },
            "2": {
                "idSrc": "DSfecha",
                "Label": "fecha"
            },
            "3": {
                "idSrc": "DSestado",
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
            "ClassEvt": "BuscarGral",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ListaLiquidaciones"
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
