function CfgSuperTabla(id,Param){
var ret={};

ret["ST_POSListaProductos"]={
    "id": "ST_POSListaProductos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Lista de Productos",
    "idTabla": "TBL_POSListaProductos",
    "ModoInicio": "RO",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "calc(100% - 61px)"
        }
    },
    "CssClass": "",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "0",
                "idSrc": "DSNombreProducto",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "Buscar",
                "CssClass": "BuscarProd",
                "Style": {
                    "0": {
                        "Prop": "Width",
                        "Value": "300px !important"
                    }
                }
            }
        },
        "Ctrl": {
            "0": {
                "Orden": "0",
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Label": "Busqueda",
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
                "idSrc": "DSsector",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Sector",
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
                "idSrc": "DSMarca",
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
            }
        },
        "FiltroAvz": {},
        "Orden": {},
        "Param": {
            "0": {
                "idSrc": "DSLimite",
                "Label": "Limite",
                "Value": "50"
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
            "ClassEvt": "Buscar",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_BuscarByRelacion_BuscarProductos"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_Scripts_Iniciar_ProdMarcarOferta"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_Scripts_Iniciar_ErrorCodigoBarra"
                },
                "3": {
                    "Orden": "",
                    "Trigger": "",
                    "IdEvt": ""
                }
            },
            "Orden": 0
        }
    }
};
ret["ST_Clientes"]={
    "id": "ST_Clientes",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Busqueda de Cliente",
    "idTabla": "TBL_Clientes",
    "ModoInicio": "RO",
    "Style": {},
    "CssClass": "",
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
        "TblVisibles": {},
        "ClassEvtPostGuardar": ""
    },
    "CfgEventos": {}
};
ret["ST_ComandasItems"]={
    "id": "ST_ComandasItems",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Carrito",
    "idTabla": "TBL_ComandasItems",
    "ModoInicio": "EDIT",
    "Style": {},
    "CssClass": "",
    "Header": {
        "Filtros": {},
        "Ctrl": {}
    },
    "Footer": {
        "Fields": {
            "0": {
                "id": "Subtotal",
                "Orden": "3",
                "idSrc": "",
                "Tipo": "Fld",
                "IdObj": "InputLabelDiv",
                "Param": {},
                "Value": "0",
                "Label": "Subtotal",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "id": "CerrarComanda",
                "Orden": "0",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Cerrar Remito",
                "ClassEvt": "CerrarComandaYPedido",
                "CssClass": "Fill_Rojo1",
                "Style": {
                    "0": {
                        "Prop": "Width",
                        "Value": "240px"
                    }
                }
            },
            "1": {
                "id": "CerrarPedido",
                "Orden": "1",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Crear Pedido",
                "ClassEvt": "CerrarComandaYPedido",
                "CssClass": "CerrarPedido",
                "Style": {}
            }
        }
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
            "ClassEvt": "CerrarComandaYPedido",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_Validaciones"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_CerrarComanda"
                }
            },
            "Orden": 0
        }
    }
};
ret["ST_ListaFormaCobro"]={
    "id": "ST_ListaFormaCobro",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "",
    "idTabla": "TBL_ListaFormaCobro",
    "ModoInicio": "RO",
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "1050px",
            "Orden": 0
        },
        "1": {
            "Prop": "Height",
            "Value": "500px",
            "Orden": 1
        },
        "2": {
            "Prop": "border",
            "Value": "1px solid rgb(73, 72, 77)"
        },
        "3": {
            "Prop": "border-top",
            "Value": "0px"
        }
    },
    "CssClass": "",
    "Header": {
        "Filtros": {},
        "Ctrl": {}
    },
    "Footer": {
        "Fields": {
            "0": {
                "id": "TotalCarrito",
                "Orden": "0",
                "idSrc": "",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {},
                "Value": "",
                "Label": "Total Carrito",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {
                    "0": {
                        "Prop": "Font-size",
                        "Value": "15px !important"
                    }
                }
            },
            "1": {
                "id": "TotalCobros",
                "Orden": "1",
                "idSrc": "",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {},
                "Value": "",
                "Label": "Total Cobros",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "id": "Restan",
                "Orden": "2",
                "idSrc": "",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {},
                "Value": "",
                "Label": "Restan",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "id": "Cambio",
                "Orden": "5",
                "idSrc": "",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {},
                "Value": "",
                "Label": "Cambio",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "id": "Finalizar",
                "Orden": "3",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Finalizar",
                "ClassEvt": "CrearDocumento",
                "CssClass": "Fill_Rojo1",
                "Style": {
                    "0": {
                        "Prop": "Width",
                        "Value": "220px"
                    },
                    "1": {
                        "Prop": "margin-left",
                        "Value": "20px"
                    }
                }
            },
            "1": {
                "id": "Facturar",
                "Orden": "4",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Facturar",
                "ClassEvt": "CrearDocYfacturar",
                "CssClass": "Fill_Rosa1",
                "Style": {
                    "0": {
                        "Prop": "Width",
                        "Value": "150px"
                    },
                    "1": {
                        "Prop": "margin-right",
                        "Value": "20px"
                    }
                }
            }
        }
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
            "ClassEvt": "CrearDocumento",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_Validaciones"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_CrearDocumento"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_Frame_ImprimirFullDirecto_ImprimirComanda"
                },
                "3": {
                    "Orden": "4",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_LimpiarGrid_Multiuso"
                },
                "4": {
                    "Orden": "5",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_ManualFill_NuevaComanda"
                }
            }
        },
        "1": {
            "ClassEvt": "CrearDocYfacturar",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_Validaciones"
                },
                "1": {
                    "Orden": 1,
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_CrearDocumentoFactura"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_LibreByRelacion_CrearFacturaReal"
                },
                "3": {
                    "Orden": 3,
                    "Trigger": "click",
                    "IdEvt": "EVT_Frame_ImprimirFullDirecto_TiketAfip"
                },
                "4": {
                    "Orden": "4",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_LimpiarGrid_Multiuso"
                },
                "5": {
                    "Orden": "5",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_ManualFill_NuevaComanda"
                }
            }
        }
    }
};
ret["ST_ListaCheques"]={
    "id": "ST_ListaCheques",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Lista de Cheques del Cliente",
    "idTabla": "TBL_ListaCheques",
    "ModoInicio": "RO",
    "Style": {},
    "CssClass": "",
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
        "TblVisibles": {},
        "ClassEvtPostGuardar": ""
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "cargardatos",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ListaChequesCliente"
                }
            }
        }
    }
};
ret["ST_ListaPedidos"]={
    "id": "ST_ListaPedidos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "LISTA DE PEDIDOS",
    "idTabla": "TBL_ListaPedidos",
    "ModoInicio": "RO",
    "Style": {},
    "CssClass": "",
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
    "CfgEventos": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
