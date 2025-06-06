function CfgSuperTabla(id,Param){
var ret={};

ret["ST_ComprasOrdenes"]={
    "id": "ST_ComprasOrdenes",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Pedidos Compras",
    "idTabla": "TBL_ComprasOrdenes",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "0",
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
                "Orden": "0",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Nueva Orden",
                "ClassEvt": "NuevaOrden",
                "CssClass": "Fill_Violeta1",
                "Style": {}
            }
        }
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
    "OrdenManual": {
        "CampoOrden": "",
        "TblVisibles": {},
        "ClassEvtPostGuardar": ""
    },
    "ModalQuery": {
        "FiltrosRap": {
            "0": {
                "Orden": 0,
                "idSrc": "DSpro_razon_social",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Proveedor",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": 1,
                "idSrc": "DSrec_fecha",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Fecha",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "Orden": "0",
                "idSrc": "DSpro_razon_social",
                "Label": "Proveedor"
            },
            "1": {
                "Orden": "1",
                "idSrc": "DSrec_fecha",
                "Label": "Fecha"
            },
            "2": {
                "Orden": "2",
                "idSrc": "DSrec_estado",
                "Label": "Estado"
            }
        },
        "Orden": {
            "0": {
                "Orden": "0",
                "idSrc": "DSpro_razon_social",
                "Label": "Proveedor"
            },
            "1": {
                "Orden": "1",
                "idSrc": "DSrec_fecha",
                "Label": "Fecha"
            },
            "2": {
                "Orden": "2",
                "idSrc": "DSrec_estado",
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
            "ClassEvt": "NuevaOrden",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_SeleccionProveedor"
                }
            }
        }
    }
};
ret["ST_ComprasOrdenesItems"]={
    "id": "ST_ComprasOrdenesItems",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Orden Compras Items",
    "idTabla": "TBL_ComprasOrdenesItems",
    "ModoInicio": "EDIT",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "0",
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
                "Orden": "0",
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "",
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Orden": "1",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Agregar Productos",
                "ClassEvt": "AgregarProductos",
                "CssClass": "Transp_Naranja1",
                "Style": {}
            },
            "2": {
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "ST_OrdenManual",
                "Label": "Orden Manual",
                "ClassEvt": "AbrirOrdenManual",
                "CssClass": "Fill_Violeta1",
                "Style": {}
            }
        }
    },
    "Footer": {
        "Fields": {
            "0": {
                "id": "Total",
                "Orden": "1",
                "idSrc": "",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {},
                "Value": "",
                "Label": "Total estimado",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "id": "Volver",
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Label": "Terminar Orden de Compra",
                "ClassEvt": "volver",
                "CssClass": "Fill_Verde1",
                "Style": {}
            }
        }
    },
    "OrdenManual": {
        "CampoOrden": "DSorden",
        "TblVisibles": {
            "0": {
                "Orden": 0,
                "idSrc": "DSorden",
                "Label": "orden"
            },
            "1": {
                "Orden": 1,
                "idSrc": "DSProducto",
                "Label": "Producto"
            }
        },
        "ClassEvtPostGuardar": "HideOrdenManual"
    },
    "ModalQuery": {
        "FiltrosRap": {
            "0": {
                "Orden": "0",
                "idSrc": "DSProducto",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Producto",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "1",
                "idSrc": "DSsector",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Sector",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "Orden": "2",
                "idSrc": "DSCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Categoria",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "Orden": "3",
                "idSrc": "DSSubCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "SubCategoria",
                "CssClass": "",
                "Style": {}
            },
            "4": {
                "Orden": "4",
                "idSrc": "DSTipo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Tipo",
                "CssClass": "",
                "Style": {}
            },
            "5": {
                "Orden": "5",
                "idSrc": "DSMarca",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Marca",
                "CssClass": "",
                "Style": {}
            },
            "6": {
                "Orden": "6",
                "idSrc": "DSPropietario",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "PROPIETARIO",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "Orden": "0",
                "idSrc": "DSProducto",
                "Label": "Producto"
            },
            "1": {
                "Orden": "1",
                "idSrc": "DSsector",
                "Label": "Sector"
            },
            "2": {
                "Orden": "2",
                "idSrc": "DSCategoria",
                "Label": "Categoria"
            },
            "3": {
                "Orden": "3",
                "idSrc": "DSSubCategoria",
                "Label": "SubCategoria"
            },
            "4": {
                "Orden": "4",
                "idSrc": "DSTipo",
                "Label": "Tipo"
            },
            "5": {
                "Orden": "5",
                "idSrc": "DSMarca",
                "Label": "Marca"
            },
            "6": {
                "Orden": "6",
                "idSrc": "DSPropietario",
                "Label": "Propietario"
            }
        },
        "Orden": {
            "0": {
                "Orden": "0",
                "idSrc": "DSProducto",
                "Label": "Producto"
            },
            "1": {
                "Orden": "1",
                "idSrc": "DSsector",
                "Label": "Sector"
            },
            "2": {
                "Orden": "2",
                "idSrc": "DSCategoria",
                "Label": "Categoria"
            },
            "3": {
                "Orden": "3",
                "idSrc": "DSSubCategoria",
                "Label": "SubCategoria"
            },
            "4": {
                "Orden": "4",
                "idSrc": "DSTipo",
                "Label": "Tipo"
            },
            "5": {
                "Orden": "5",
                "idSrc": "DSMarca",
                "Label": "Marca"
            },
            "6": {
                "Orden": "6",
                "idSrc": "DSPropietario",
                "Label": "Propietario"
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
            "ClassEvt": "AgregarProductos",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AgregarProductos"
                }
            },
            "Orden": 0
        },
        "1": {
            "ClassEvt": "volver",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_ListadoOrdenCompra"
                }
            },
            "Orden": 1
        },
        "2": {
            "ClassEvt": "HideOrdenManual",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ComprasOrdenesItems"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_this"
                }
            },
            "Orden": 2
        },
        "3": {
            "ClassEvt": "BuscarGral",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ComprasOrdenesItems"
                }
            },
            "Orden": 3
        }
    }
};
ret["ST_Productos"]={
    "id": "ST_Productos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Lista Productos",
    "idTabla": "TBL_ListaProductos",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "0",
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
    "OrdenManual": {
        "CampoOrden": "",
        "TblVisibles": {},
        "ClassEvtPostGuardar": ""
    },
    "ModalQuery": {
        "FiltrosRap": {
            "0": {
                "Orden": "0",
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
                "idSrc": "DSCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Categoria",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "Orden": "2",
                "idSrc": "DSSubCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "SubCategoria",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "Orden": "3",
                "idSrc": "DSTipo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Tipo",
                "CssClass": "",
                "Style": {}
            },
            "4": {
                "Orden": "4",
                "idSrc": "DSmarca",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Marca",
                "CssClass": "",
                "Style": {}
            },
            "5": {
                "Orden": "5",
                "idSrc": "DSPropietario",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Propietario",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {},
        "Orden": {
            "0": {
                "Orden": 0,
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
    "CfgEventos": {}
};
ret["ST_ComprasOrdenesEspera"]={
    "id": "ST_ComprasOrdenesEspera",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Pedidos En Espera",
    "idTabla": "TBL_ComprasOrdenesEspera",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "0",
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
                "Orden": "0",
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "",
                "CssClass": "Fill_Azul1",
                "Style": {}
            }
        }
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
    "ModalQuery": {
        "FiltrosRap": {
            "0": {
                "Orden": "0",
                "idSrc": "DSpro_razon_social",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Proveedor",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "idSrc": "DSrec_fecha",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Fecha",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {},
        "Orden": {
            "0": {
                "Orden": "0",
                "idSrc": "DSpro_razon_social",
                "Label": "Proveedor"
            },
            "1": {
                "Orden": "1",
                "idSrc": "DSrec_fecha",
                "Label": "Fecha"
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
    "OrdenManual": {
        "CampoOrden": "",
        "TblVisibles": {}
    },
    "CfgEventos": {}
};
ret["ST_ImprimirPedido"]={
    "id": "ST_ImprimirPedido",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Items Pedido",
    "idTabla": "TBL_COrdenesItemsImprimir",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {},
        "Ctrl": {}
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
    "ModalQuery": {
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
    "OrdenManual": {
        "CampoOrden": "",
        "TblVisibles": {}
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "cargardatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ImprimirPedido"
                }
            }
        }
    }
};
ret["ST_COrdenesItemsControl"]={
    "id": "ST_COrdenesItemsControl",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Control de Mercaderia",
    "idTabla": "TBL_COrdenesItemsControl",
    "ModoInicio": "EDIT",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": 0,
                "idSrc": "DSProducto",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "buscar",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "Orden": "OrdenManual",
                "Tipo": "Ctrl",
                "IdObj": "ST_OrdenManual",
                "Label": "Orden Manual",
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
    "ModalQuery": {
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
    "OrdenManual": {
        "CampoOrden": "DSorden",
        "TblVisibles": {
            "0": {
                "Orden": "1",
                "idSrc": "DSorden",
                "Label": "Orden"
            },
            "1": {
                "Orden": "2",
                "idSrc": "DSProducto",
                "Label": "Producto"
            }
        },
        "ClassEvtPostGuardar": "HideOrdenManual"
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "HideOrdenManual",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_COrdenesItemsControl"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_this"
                }
            }
        },
        "1": {
            "ClassEvt": "buscar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_BuscarByRelacion_COrdenesItemsControl"
                }
            }
        }
    }
};
ret["ST_ComprasControladas"]={
    "id": "ST_ComprasControladas",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Compras Controlas",
    "idTabla": "TBL_ComprasOrdenesControlados",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "0",
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
        "Ctrl": {}
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
    "ModalQuery": {
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
    "OrdenManual": {
        "CampoOrden": "",
        "TblVisibles": {}
    },
    "CfgEventos": {}
};
ret["ST_COItemsImprimirControlado"]={
    "id": "ST_COItemsImprimirControlado",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Items Controlados",
    "idTabla": "TBL_COItemsImprimirControlado",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {},
        "Ctrl": {}
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
    "ModalQuery": {
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
    "OrdenManual": {
        "CampoOrden": "",
        "TblVisibles": {},
        "ClassEvtPostGuardar": ""
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "cargardatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_ST_BuscarByRelacion_COItemsImprimirControlado"
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
