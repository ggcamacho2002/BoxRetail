function CfgSuperTabla(id,Param){
var ret={};

ret["ST_ListaProducto"]={
    "id": "ST_ListaProducto",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Lista Productos",
    "idTabla": "TBL_ListaProductos",
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
                "idSrc": "DSNombre",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Nombre",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "1",
                "idSrc": "DSAutorizacion",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Autorizacion",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "Orden": "2",
                "idSrc": "DSEstado",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Estado",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "Orden": "3",
                "idSrc": "DSmarca",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Marca",
                "CssClass": "",
                "Style": {}
            },
            "4": {
                "Orden": "4",
                "idSrc": "DSPropietario",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Propietario",
                "CssClass": "",
                "Style": {}
            },
            "5": {
                "Orden": "5",
                "idSrc": "DSSector",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Sector",
                "CssClass": "",
                "Style": {}
            },
            "6": {
                "Orden": "6",
                "idSrc": "DSCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Categoria",
                "CssClass": "",
                "Style": {}
            },
            "7": {
                "Orden": "7",
                "idSrc": "DSSubCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "SubCategoria",
                "CssClass": "",
                "Style": {}
            },
            "8": {
                "Orden": "8",
                "idSrc": "DSTipo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Tipo",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "idSrc": "DSNombre",
                "Label": "Nombre"
            },
            "1": {
                "idSrc": "DSmarca",
                "Label": "Marca"
            },
            "2": {
                "idSrc": "DSPropietario",
                "Label": "Propietario"
            },
            "3": {
                "idSrc": "DSSector",
                "Label": "Sector"
            },
            "4": {
                "idSrc": "DSCategoria",
                "Label": "Categoria"
            },
            "5": {
                "idSrc": "DSSubCategoria",
                "Label": "SubCategoria"
            },
            "6": {
                "idSrc": "DSTipo",
                "Label": "Tipo"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSNombre",
                "Label": "Nombre"
            },
            "1": {
                "idSrc": "DSmarca",
                "Label": "Marca"
            },
            "2": {
                "idSrc": "DSPropietario",
                "Label": "Propietario"
            },
            "3": {
                "idSrc": "DSSector",
                "Label": "Sector"
            },
            "4": {
                "idSrc": "DSCategoria",
                "Label": "Categoria"
            },
            "5": {
                "idSrc": "DSSubCategoria",
                "Label": "SubCategoria"
            },
            "6": {
                "idSrc": "DSTipo",
                "Label": "Tipo"
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
                    "IdEvt": "EVT_DG_Iniciar_AltaProducto"
                }
            }
        }
    }
};
ret["ST_ExtraProductos"]={
    "id": "ST_ExtraProductos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Prop. Extra Produtos",
    "idTabla": "TBL_ExtraProductos",
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
                "Orden": "1",
                "idSrc": "DSEstado",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Estado",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "Orden": "3",
                "idSrc": "DSNota",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Nota",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "idSrc": "DSNombre",
                "Label": "Nombre"
            },
            "1": {
                "idSrc": "DSEstado",
                "Label": "Estado"
            },
            "2": {
                "idSrc": "DSNota",
                "Label": "Nota"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSNombre",
                "Label": "Nombre"
            },
            "1": {
                "idSrc": "DSEstado",
                "Label": "Estado"
            },
            "2": {
                "idSrc": "DSNota",
                "Label": "Nota"
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
    "CfgEventos": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
