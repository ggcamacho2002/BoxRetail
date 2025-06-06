function CfgTabla(id,Param){
var ret={};

ret["TBL_POSListaProductos"]={
    "id": "TBL_POSListaProductos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_POSListaProductos",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSidProd",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSidProd",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Clave",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSNombreProducto",
            "Orden": 2,
            "Label": "Producto",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSNombreProducto",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "ClickTr",
            "Style": {},
            "CssClass": ""
        },
        "3": {
            "id": "DSPVentaUnid",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSPVentaUnid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "$ Lista Unid",
            "ClassEvt": "ClickTr",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSPVentaPack",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSPVentaPack",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "$ Lista Pack",
            "ClassEvt": "ClickTr",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSPVentaPorc",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSPVentaPorc",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Porcentaje Venta",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSPClienteUnid",
            "Orden": 6,
            "Label": "$ Unid",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSPClienteUnid",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "ClickTr",
            "Style": {},
            "CssClass": ""
        },
        "7": {
            "id": "DSPClientePack",
            "Orden": 7,
            "Label": "$ Pack",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSPClientePack",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "ClickTr",
            "Style": {},
            "CssClass": ""
        },
        "8": {
            "id": "DSEstadoProducto",
            "Orden": 8,
            "Tipo": "Fld",
            "idSrc": "DSEstadoProducto",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "ClickTr",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DSCantxPack",
            "Orden": 9,
            "Label": "Cant x Pack",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DSCantxPack",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "10": {
            "id": "DSBarcode",
            "Orden": 10,
            "Label": "Código de Barras",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DSBarcode",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "11": {
            "id": "DSBarcodePack",
            "Orden": 11,
            "Label": "Código de Barras Pack",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DSBarcodePack",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "12": {
            "id": "DSFlagOferta",
            "Orden": 12,
            "Label": "Oferta",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DSFlagOferta",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "13": {
            "id": "DSidCliente",
            "Orden": 13,
            "Label": "Id Cliente",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DSidCliente",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "14": {
            "id": "DSidRemito",
            "Orden": 14,
            "Label": "Id Remito",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DSidRemito",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "15": {
            "id": "DSCliDescuento",
            "Orden": 15,
            "Label": "Cliente Descuento",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DSCliDescuento",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "16": {
            "id": "Info",
            "Orden": 16,
            "Label": "Info",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "MostrarInfoProducto",
            "Style": {},
            "CssClass": "Transp_Azul2"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "ClickTr",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_ProductosTrClick"
                }
            }
        },
        "1": {
            "ClassEvt": "marcaroferta",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_Scripts_Iniciar_ProdMarcarOferta"
                }
            }
        },
        "2": {
            "ClassEvt": "MostrarInfoProducto",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_BuscarOne_InfoProducto"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_InfoProducto"
                }
            }
        }
    }
};
ret["TBL_Clientes"]={
    "id": "TBL_Clientes",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_Clientes",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "Seleccionar",
            "Orden": 1,
            "Label": "Seleccionar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "CambiarCliente",
            "Style": {},
            "CssClass": "Fill_Azul1"
        },
        "2": {
            "id": "DSrazon_social",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSrazon_social",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Razon Social",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSdescuento",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSdescuento",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Descuento",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DStipo",
            "Orden": 4,
            "Label": "Tipo",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DStipo",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "5": {
            "id": "DSmaxctacte",
            "Orden": 5,
            "Label": "DSmaxctacte",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DSmaxctacte",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "6": {
            "id": "DScheque",
            "Orden": "6",
            "Label": "DScheque",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DScheque",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "CambiarCliente",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_CambiarCliente"
                },
                "1": {
                    "Orden": 1,
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_BuscarProductos"
                },
                "2": {
                    "Orden": 2,
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_LibreByRelacion_CambiarCliente"
                },
                "3": {
                    "Orden": 3,
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ComandasItems"
                },
                "4": {
                    "Orden": 4,
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_CalcularAllItemSubtotal"
                },
                "5": {
                    "Orden": 5,
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_this"
                }
            },
            "Orden": 0
        }
    }
};
ret["TBL_ComandasItems"]={
    "id": "TBL_ComandasItems",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ComandasItems",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSProducto",
            "Orden": 1,
            "Label": "Producto",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSProducto",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "2": {
            "id": "DSPacksPedido",
            "Orden": 2,
            "Label": "Packs",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "idSrc": "DSPacksPedido",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "CambiaPack",
            "Style": {},
            "CssClass": "W100"
        },
        "3": {
            "id": "DScantPedida",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DScantPedida",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Cant.",
            "ClassEvt": "CambiaUnidad",
            "Value": "",
            "CssClass": "W100",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSidProducto",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSidProducto",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "IdProducto",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSidRemitoV",
            "Orden": 5,
            "Label": "DSidRemitoV",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DSidRemitoV",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "6": {
            "id": "DSprecioventa",
            "Orden": 6,
            "Label": "$ unid.",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "idSrc": "DSprecioventa",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": "W100"
        },
        "7": {
            "id": "DSSubtotal",
            "Orden": 7,
            "Label": "Subtotal",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": "W101"
        },
        "8": {
            "id": "Borrar",
            "Orden": 8,
            "Label": "Del",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "borrar",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "80%"
                }
            },
            "CssClass": "Fill_Rojo1"
        },
        "9": {
            "id": "DSCantxPack",
            "Orden": "9",
            "Label": "DSCantxPack",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DSCantxPack",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "borrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItem_ComandasItems"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ComandasItems"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_CalcularSubtotal"
                }
            },
            "Orden": 0
        },
        "1": {
            "ClassEvt": "CambiosDom",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_Scripts_Iniciar_CalcularSubtotal"
                }
            }
        },
        "2": {
            "ClassEvt": "CambiaUnidad",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "change",
                    "IdEvt": "EVT_Scripts_Iniciar_CambiaCantidad"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "change",
                    "IdEvt": "EVT_TBL_UpdateOneField_ComandasItems"
                }
            }
        },
        "3": {
            "ClassEvt": "CambiaPack",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "change",
                    "IdEvt": "EVT_Scripts_Iniciar_CambiaCantidad"
                }
            }
        }
    }
};
ret["TBL_ListaFormaCobro"]={
    "id": "TBL_ListaFormaCobro",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ClientesRecibosItems",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSdetalle",
            "Orden": 1,
            "Label": "detalle",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSdetalle",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {
                "0": {
                    "Prop": "",
                    "Value": ""
                }
            },
            "CssClass": ""
        },
        "2": {
            "id": "DSidrecibo",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSidrecibo",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "DSidrecibo",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSidcliente",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSidcliente",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idcliente",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSmonto",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSmonto",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Monto",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "Borrar",
            "Orden": 5,
            "Label": "Borrar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Borrar",
            "Style": {},
            "CssClass": "Transp_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Borrar",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItem_this"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ListaFormaCobro"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_CalcularCobros"
                }
            }
        }
    }
};
ret["TBL_ListaPedidos"]={
    "id": "TBL_ListaPedidos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ListaPedidos",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSrev_fecha",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSrev_fecha",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Fecha",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DScli_clave",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DScli_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Cli Clave",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DScli_razon_social",
            "Orden": 3,
            "Label": "Cliente",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DScli_razon_social",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "4": {
            "id": "Seleccionar",
            "Orden": "4",
            "Label": "SEL",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": "Fiil_Azul1"
        }
    },
    "CfgEventos": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
