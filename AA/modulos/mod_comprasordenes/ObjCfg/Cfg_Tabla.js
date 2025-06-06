function CfgTabla(id,Param){
var ret={};

ret["TBL_ComprasOrdenes"]={
    "id": "TBL_ComprasOrdenes",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ComprasOrdenes",
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
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSpro_razon_social",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSpro_razon_social",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Preveedor",
            "ClassEvt": "",
            "CssClass": "NombreProv",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSpro_clave",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSpro_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Pro Clave",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSrec_fecha",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSrec_fecha",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Fecha",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSrec_estado",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSrec_estado",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "Editar",
            "Orden": 5,
            "Label": "Editar orden compra",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "VistaPedido",
            "Style": {},
            "CssClass": "Transp_Azul2"
        },
        "6": {
            "id": "Borrar",
            "Orden": 6,
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
        },
        "7": {
            "id": "EnviarProveedor",
            "Orden": "7",
            "Label": "Enviar a proveedor",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "CambiarEstado",
            "Style": {},
            "CssClass": "Transp_Naranja1"
        },
        "8": {
            "id": "Imprimir",
            "Orden": "8",
            "Label": "Imprimir",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Imprimir",
            "Style": {},
            "CssClass": "Transp_Verde1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "VistaPedido",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_OrdenCompra"
                },
                "1": {
                    "Orden": 1,
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Pedido"
                },
                "2": {
                    "Orden": 2,
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ComprasOrdenesItems"
                }
            }
        },
        "1": {
            "ClassEvt": "Borrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_ComprasOrdenes"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ComprasOrdenes"
                }
            }
        },
        "2": {
            "ClassEvt": "CambiarEstado",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_UpdateByRelacion_ComprasOrdenesEstado"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ComprasOrdenes"
                }
            }
        },
        "3": {
            "ClassEvt": "Imprimir",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_OrdenCompra"
                },
                "1": {
                    "Orden": 1,
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_ImprimePedido"
                }
            }
        }
    }
};
ret["TBL_ComprasOrdenesItems"]={
    "id": "TBL_ComprasOrdenesItems",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ComprasOrdenesItems",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSProducto",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSProducto",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Producto",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSultimaAuditoria",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSultimaAuditoria",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Audit.",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSvencimientodias",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSvencimientodias",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Vence",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSstockunidades",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSstockunidades",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Stock Unid.",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSstockminunidades",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSstockminunidades",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Stock Min",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSdiasUltVenta",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSdiasUltVenta",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Ult. Venta",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "7": {
            "id": "DSdiasUltCompra",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSdiasUltCompra",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Ult. Compra",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DSultimacompracant",
            "Orden": "9",
            "Tipo": "Ctrl",
            "idSrc": "DSultimacompracant",
            "IdObj": "BotonValor",
            "Param": {},
            "Label": "Ult. compra cant",
            "ClassEvt": "",
            "CssClass": "BtnPedido Fill_Verde2",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DSrec_clave",
            "Orden": "10",
            "Tipo": "Fld",
            "idSrc": "DSrec_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Rec Clave",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "10": {
            "id": "DSPromDia",
            "Orden": "11",
            "Label": "Prom.Dia",
            "Tipo": "Ctrl",
            "IdObj": "BotonValor",
            "idSrc": "DSPromDia",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": "BtnPedido Fill_Verde2"
        },
        "11": {
            "id": "DSSugPedido",
            "Orden": "12",
            "Label": "Pedir Sug.",
            "Tipo": "Ctrl",
            "IdObj": "BotonValor",
            "idSrc": "DSSugPedido",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": "BtnPedido Fill_Verde2"
        },
        "12": {
            "id": "Packs",
            "Orden": "13",
            "Label": "Packs",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "idSrc": "DSPackPedido",
            "Valid": {},
            "Param": {},
            "Value": "0",
            "ClassEvt": "siguientePack",
            "Style": {
                "1": {
                    "Prop": "Width",
                    "Value": "100px"
                }
            },
            "CssClass": "inputPack"
        },
        "13": {
            "id": "DSUnidPedida",
            "Orden": "14",
            "Tipo": "Fld",
            "idSrc": "DSUnidPedida",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "Unidades",
            "ClassEvt": "siguienteUnidad",
            "CssClass": "fldPedidos",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "14": {
            "id": "DSDiasStk",
            "Orden": "15",
            "Label": "Dias Stk",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSDiasStk",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": "DiasStk"
        },
        "15": {
            "id": "DSprecioultcompra",
            "Orden": "16",
            "Tipo": "Fld",
            "idSrc": "DSprecioultcompra",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "$ Unid.",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "16": {
            "id": "DSdiasreposicion",
            "Orden": "17",
            "Tipo": "Fld",
            "idSrc": "DSdiasreposicion",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Repo.",
            "ClassEvt": "",
            "CssClass": "",
            "Value": "",
            "Style": {},
            "Valid": {}
        },
        "17": {
            "id": "DSCantxPack",
            "Orden": "18",
            "Tipo": "Fld",
            "idSrc": "DSCantxPack",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "CantxPack",
            "ClassEvt": "",
            "CssClass": "fldPedidos",
            "Value": "0",
            "Style": {},
            "Valid": {}
        },
        "18": {
            "id": "preciopack",
            "Orden": "19",
            "Label": "$ Pack.",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSprecioultcompraPack",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "19": {
            "id": "Subtotal",
            "Orden": "20",
            "Label": "Subtotal",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "idSrc": "DSSubTotal",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "20": {
            "id": "dsorden",
            "Orden": "1",
            "Label": "orden",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSorden",
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
            "ClassEvt": "siguienteUnidad",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "change",
                    "IdEvt": "EVT_Scripts_Iniciar_CambioUnidad"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_TBL_SiguienteInput_This"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "change",
                    "IdEvt": "EVT_TBL_UpdateOneField_CompraOrdenItems"
                }
            }
        },
        "1": {
            "ClassEvt": "siguientePack",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "change",
                    "IdEvt": "EVT_Scripts_Iniciar_CambioPack"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_TBL_SiguienteInput_This"
                }
            }
        },
        "2": {
            "ClassEvt": "CalcularTotalParcial",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_Scripts_Iniciar_CalcularTotalParcial"
                }
            }
        }
    }
};
ret["TBL_ListaProductos"]={
    "id": "TBL_ListaProductos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_Productos",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
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
            "id": "DSNombre",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "Seleccionar",
            "Orden": "1",
            "Label": "Seleccionar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "insertarProductos",
            "Style": {},
            "CssClass": "Transp_Azul2"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "insertarProductos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_ComprasOrdenesItems"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ComprasOrdenesItems"
                }
            }
        }
    }
};
ret["TBL_ComprasOrdenesEspera"]={
    "id": "TBL_ComprasOrdenesEspera",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ComprasOrdenesEspera",
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
            "id": "DSpro_razon_social",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSpro_razon_social",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Proveedor",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "NombreProv",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSpro_clave",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSpro_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Pro Clave",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSrec_fecha",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSrec_fecha",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Fecha",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSrec_estado",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSrec_estado",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSpro_id",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSpro_id",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Pro Id",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "EstadoToPedido",
            "Orden": 6,
            "Label": "Volver a Estado Pedido",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "EstadoToPedido",
            "Style": {},
            "CssClass": "Transp_Azul2"
        },
        "7": {
            "id": "Imprimir",
            "Orden": "7",
            "Label": "Imprimir",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Imprimir",
            "Style": {},
            "CssClass": "Transp_Verde1"
        },
        "8": {
            "id": "Controlar",
            "Orden": "8",
            "Label": "Controlar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "VTCOrdenControl",
            "Style": {},
            "CssClass": "Transp_Naranja1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EstadoToPedido",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_UpdateByRelacion_COrdenesUpdateToPedido"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ComprasOrdenesEspera"
                }
            }
        },
        "1": {
            "ClassEvt": "Borrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_ComprasOrdenesEspera"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ComprasOrdenesEspera"
                }
            }
        },
        "2": {
            "ClassEvt": "Imprimir",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_idOrdenCompra"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_ImprimePedido"
                }
            }
        },
        "3": {
            "ClassEvt": "VTCOrdenControl",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_idOrdenCompra"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_ComprasOrdenControl"
                }
            }
        }
    }
};
ret["TBL_COrdenesItemsImprimir"]={
    "id": "TBL_COrdenesItemsImprimir",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ComprasOrdenesItems",
    "Style": {
        "0": {
            "Prop": "",
            "Value": ""
        }
    },
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
            "id": "Producto",
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
            "id": "DSrec_clave",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSrec_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Rec Clave",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSUnidPedida",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSUnidPedida",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Unid. Pedida",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSPackPedido",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSPackPedido",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Pack. Pedido",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        }
    },
    "CfgEventos": {}
};
ret["TBL_COrdenesItemsControl"]={
    "id": "TBL_COrdenesItemsControl",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ComprasOrdenesItemsEspera",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
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
            "id": "DSrec_clave",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSrec_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Rec Clave",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSirc_cantidad_recibida",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DSirc_cantidad_recibida",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "Unid. Recibida",
            "ClassEvt": "SiguienteUnidad",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSUnidPedida",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSUnidPedida",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Unid. Pedida",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSPackPedido",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSPackPedido",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Pack Pedido",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSprd_clave",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSprd_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Prd Clave",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSorden",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSorden",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Orden",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "7": {
            "id": "DSidproveedor",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSidproveedor",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idproveedor",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DSProducto",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSProducto",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Producto",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DSCantxPack",
            "Orden": "10",
            "Tipo": "Fld",
            "idSrc": "DSCantxPack",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "CantxPack",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "10": {
            "id": "PackRecibido",
            "Orden": "8",
            "Label": "Pack Recibido",
            "Tipo": "Fld",
            "IdObj": "InputNumber",
            "idSrc": "DSPackRecibido",
            "Valid": {},
            "Param": {},
            "Value": "0.00",
            "ClassEvt": "siguientePack",
            "Style": {},
            "CssClass": ""
        },
        "11": {
            "id": "DifUnidades",
            "Orden": "11",
            "Label": "Dif. Unid.",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "12": {
            "id": "DifPack",
            "Orden": "12",
            "Label": "Dif. Pack",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "idSrc": "",
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
            "ClassEvt": "SiguienteUnidad",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_Scripts_Iniciar_CambioUnidadControl"
                },
                "1": {
                    "Orden": 1,
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_TBL_SiguienteInput_This"
                },
                "2": {
                    "Orden": 2,
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_Scripts_Iniciar_DiferenciasOneFila"
                },
                "3": {
                    "Orden": 3,
                    "Trigger": "change",
                    "IdEvt": "EVT_TBL_UpdateBdFila_COrdenesItemsControl"
                }
            }
        },
        "1": {
            "ClassEvt": "siguientePack",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_Scripts_Iniciar_CambioPackControl"
                },
                "1": {
                    "Orden": 1,
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_TBL_SiguienteInput_This"
                },
                "2": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_Scripts_Iniciar_DiferenciasOneFila"
                },
                "3": {
                    "Orden": "3",
                    "Trigger": "change",
                    "IdEvt": "EVT_TBL_UpdateBdFila_COrdenesItemsControl"
                }
            }
        },
        "2": {
            "ClassEvt": "DiferenciaMultiples",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_Scripts_Iniciar_DiferenciasMultiples"
                }
            }
        }
    }
};
ret["TBL_ComprasOrdenesControlados"]={
    "id": "TBL_ComprasOrdenesControlados",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ComprasOrdenesControlado",
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
            "id": "DSpro_razon_social",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSpro_razon_social",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Proveedor",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "NombreProv",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSpro_clave",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSpro_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Pro Clave",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSrec_fecha",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSrec_fecha",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Fecha",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSrec_estado",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSrec_estado",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSpro_id",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSpro_id",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Pro Id",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "EstadoToEspera",
            "Orden": 6,
            "Label": "Volver a Estado Espera",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "EstadoToEspera",
            "Style": {},
            "CssClass": "Transp_Azul2"
        },
        "7": {
            "id": "Imprimir",
            "Orden": 7,
            "Label": "Revisar e Imprimir",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Imprimir",
            "Style": {},
            "CssClass": "Transp_Verde1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EstadoToEspera",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_UpdateByRelacion_UpdateEstadoEspera"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ComprasControladas"
                }
            }
        },
        "1": {
            "ClassEvt": "Borrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_ComprasOrdenesEspera"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ComprasOrdenesEspera"
                }
            }
        },
        "2": {
            "ClassEvt": "Imprimir",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_idOrdenCompra2"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_ImprimeControlado"
                }
            }
        }
    }
};
ret["TBL_COItemsImprimirControlado"]={
    "id": "TBL_COItemsImprimirControlado",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_COItemsImprimirControlado",
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
            "Tipo": "Fld",
            "idSrc": "DSProducto",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Producto",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSrec_clave",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSrec_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Rec Clave",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSUnidPedida",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSUnidPedida",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Unid. Pedida",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSirc_cantidad_recibida",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSirc_cantidad_recibida",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Unid. Recibida",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSPackPedido",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSPackPedido",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Pack Pedido",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSPackRecibido",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DSPackRecibido",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Pack Recibido",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "7": {
            "id": "DSirc_estado",
            "Orden": 7,
            "Tipo": "Fld",
            "idSrc": "DSirc_estado",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Irc Estado",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DSorden",
            "Orden": 8,
            "Tipo": "Fld",
            "idSrc": "DSorden",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Orden",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DSidproveedor",
            "Orden": 9,
            "Tipo": "Fld",
            "idSrc": "DSidproveedor",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idproveedor",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "10": {
            "id": "DSCantxPack",
            "Orden": 10,
            "Tipo": "Fld",
            "idSrc": "DSCantxPack",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "CantxPack",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "11": {
            "id": "DifUnid",
            "Orden": "11",
            "Label": "Dif Unid.",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSDifUnid",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
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
