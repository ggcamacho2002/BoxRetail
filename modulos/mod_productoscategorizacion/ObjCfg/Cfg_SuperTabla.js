function CfgSuperTabla(id,Param){
var ret={};

ret["ST_ListaProdCat"]={
    "id": "ST_ListaProdCat",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Categorizacion",
    "idTabla": "TBL_ListaProdCat",
    "ModoInicio": "RO",
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
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "",
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Nuevo",
                "ClassEvt": "NuevoItem",
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
                "Orden": "1",
                "idSrc": "DSCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Categoria",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "idSrc": "DSSubCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "SubCategoria",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "Orden": "3",
                "idSrc": "DSTipo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Tipo",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "Orden": "3",
                "idSrc": "DSTipoResumido",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Tipo Resumido",
                "CssClass": "",
                "Style": {}
            },
            "4": {
                "Orden": "4",
                "idSrc": "DSEstado",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Estado",
                "CssClass": "",
                "Style": {}
            },
            "5": {
                "Orden": "0",
                "idSrc": "DSSector",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Sector",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "idSrc": "DSCategoria",
                "Label": "Categoria"
            },
            "1": {
                "idSrc": "DSSubCategoria",
                "Label": "SubCategoria"
            },
            "2": {
                "idSrc": "DSTipo",
                "Label": "Tipo"
            },
            "3": {
                "idSrc": "DSTipoResumido",
                "Label": "Tipo Resum."
            },
            "4": {
                "idSrc": "DSEstado",
                "Label": "Estado"
            },
            "5": {
                "idSrc": "DSSector",
                "Label": "Sector"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSCategoria",
                "Label": "Categoria"
            },
            "1": {
                "idSrc": "DSSubCategoria",
                "Label": "Sub Categoria"
            },
            "2": {
                "idSrc": "DSTipo",
                "Label": "Tipo"
            },
            "3": {
                "idSrc": "DSTipoResumido",
                "Label": "Tipo Resum."
            },
            "4": {
                "idSrc": "DSEstado",
                "Label": "Estado"
            },
            "5": {
                "idSrc": "DSSector",
                "Label": "Sector"
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
            "ClassEvt": "NuevoItem",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaCategorizacion"
                }
            }
        }
    }
};
ret["ST_categorias"]={
    "id": "ST_categorias",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Categorias",
    "idTabla": "TBL_categorias",
    "ModoInicio": "RO",
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
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "",
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Nuevo",
                "ClassEvt": "Alta",
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
                "Orden": "1",
                "idSrc": "DSCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Categoria",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "idSrc": "DSCategoria",
                "Label": "Categoria"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSCategoria",
                "Label": "Categoria"
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
            "ClassEvt": "Alta",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaCategoria"
                }
            }
        }
    }
};
ret["ST_subcategorias"]={
    "id": "ST_subcategorias",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Sub categorias",
    "idTabla": "TBL_subcategorias",
    "ModoInicio": "RO",
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
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "",
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Nuevo",
                "ClassEvt": "Nuevo",
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
                "Orden": "1",
                "idSrc": "DSSubCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Sub Categoria",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "2",
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
                "idSrc": "DSSubCategoria",
                "Label": "Sub Categoria"
            },
            "1": {
                "idSrc": "DSestado",
                "Label": "Estado"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSSubCategoria",
                "Label": "Sub Categoria"
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
            "ClassEvt": "Nuevo",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaSubCateg"
                }
            }
        }
    }
};
ret["ST_tipos"]={
    "id": "ST_tipos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Tipos",
    "idTabla": "TBL_tipos",
    "ModoInicio": "RO",
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
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "",
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Nuevo",
                "ClassEvt": "Nuevo",
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
                "Orden": "1",
                "idSrc": "DSProdTipo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Tipo",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "idSrc": "DSProdTipoResumido",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Tipo Resumido",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "Orden": "3",
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
                "idSrc": "DSProdTipo",
                "Label": "Tipo"
            },
            "1": {
                "idSrc": "DSProdTipoResumido",
                "Label": "Tipo Resumido"
            },
            "2": {
                "idSrc": "DSestado",
                "Label": "Estado"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSProdTipo",
                "Label": "Tipo"
            },
            "1": {
                "idSrc": "DSProdTipoResumido",
                "Label": "Tipo Resumido"
            },
            "2": {
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
            "ClassEvt": "Nuevo",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaTipo"
                }
            }
        }
    }
};
ret["ST_Sectores"]={
    "id": "ST_Sectores",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Sectores",
    "idTabla": "TBL_Sectores",
    "ModoInicio": "RO",
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
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "",
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Nuevo",
                "ClassEvt": "Nuevo",
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
                "Orden": "1",
                "idSrc": "DSSector",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Categoria",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "2",
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
                "idSrc": "DSSector",
                "Label": "Sector"
            },
            "1": {
                "idSrc": "DSestado",
                "Label": "Estado"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSSector",
                "Label": "Sector"
            },
            "1": {
                "idSrc": "DSestado",
                "Label": "estado"
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
            "ClassEvt": "Nuevo",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaSector"
                }
            }
        }
    }
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
