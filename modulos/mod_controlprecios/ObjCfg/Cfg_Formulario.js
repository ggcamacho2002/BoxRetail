function CfgFormulario(id,Param){
var ret={};

ret["FRM_CambiaCompra"]={
    "id": "FRM_CambiaCompra",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ProductosPrecios",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_ProductosPrecios",
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
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSidProd",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSidProd",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "IdProd",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "min-content"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSPCompraUnid",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSPCompraUnid",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Compra Unid Actual",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSPCompraPack",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSPCompraPack",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "COMPRA PACK ACTUAL",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "CantxPack",
            "Orden": "3",
            "idSrc": "DSCantxPack",
            "Label": "Cant x Pack",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "5": {
            "id": "NUEVOCOMPRAUNID",
            "Orden": "8",
            "idSrc": "",
            "Label": "NUEVO $ COMPRA UNID",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "Param": {},
            "Requerido": "1",
            "Valid": {},
            "Value": "",
            "ClassEvt": "CalculaPackUnid",
            "Style": {},
            "CssClass": ""
        },
        "6": {
            "id": "NUEVOCOMPRAPACK",
            "Orden": "9",
            "idSrc": "",
            "Label": "NUEVO $ COMPRA PACK",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "Param": {},
            "Requerido": "1",
            "Valid": {},
            "Value": "",
            "ClassEvt": "CalculaPackUnid",
            "Style": {},
            "CssClass": ""
        },
        "7": {
            "id": "NombreProducto",
            "Orden": "2",
            "idSrc": "DSNombreProducto",
            "Label": "Nombre Producto",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "8": {
            "id": "DsPrecioVenta",
            "Orden": "4",
            "idSrc": "DSPVentaUnid",
            "Label": "Nuevo $ Venta Unid.",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "9": {
            "id": "DSPorcVenta",
            "Orden": "5",
            "idSrc": "DSPVentaPorc",
            "Label": "% Venta",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "10": {
            "id": "PrecioAnterior",
            "Orden": "",
            "idSrc": "DSPCompraAntUnid",
            "Label": "",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "Guardar",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "CambiarYGuardar",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
                }
            }
        },
        "1": {
            "ClassEvt": "CalculaPackUnid",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "change",
                    "IdEvt": "EVT_Scripts_Iniciar_CalculaPackUnidad"
                }
            }
        },
        "2": {
            "ClassEvt": "CambiarYGuardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_SeteaPackUnidadOLd"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "3": {
                    "Orden": "4",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ProductosPrecios"
                }
            }
        }
    }
};
ret["FRM_CambiaVenta"]={
    "id": "FRM_CambiaVenta",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ProductosPrecios",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_ProductosPrecios",
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
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSidProd",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSidProd",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "IdProd",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSPVentaUnid",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSPVentaUnid",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Venta Unid",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSPVentaPack",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSPVentaPack",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Venta Pack",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSPVentaPorc",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSPVentaPorc",
            "IdObj": "InputText",
            "Param": {},
            "Label": "% Venta",
            "ClassEvt": "CambiaPorc",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DSNombreProducto",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSNombreProducto",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Nombre Producto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "6": {
            "id": "DSCantxPack",
            "Orden": "3",
            "idSrc": "DSCantxPack",
            "Label": "Cant x Pack",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "7": {
            "id": "DSCompraUnid",
            "Orden": "",
            "idSrc": "DSPCompraUnid",
            "Label": "DSCompraUnid",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "1",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Guardar",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "CambiaPorc",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "change",
                    "IdEvt": "EVT_Scripts_Iniciar_CambiaPorcVenta"
                }
            }
        },
        "1": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
                }
            }
        },
        "2": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ProductosPrecios"
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
