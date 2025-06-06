function CfgTabla(id,Param){
var ret={};

ret["TBL_ProductosPrecios"]={
    "id": "TBL_ProductosPrecios",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ProductosPrecios",
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
            "Style": {},
            "Valid": {}
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
            "Valid": {}
        },
        "2": {
            "id": "DSDias",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSDias",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Dias",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSPVentaUnid",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSPVentaUnid",
            "IdObj": "PlainTextNumero",
            "Param": {},
            "Label": "Venta Unid.",
            "ClassEvt": "",
            "CssClass": "Moneda",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSPVentaPack",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSPVentaPack",
            "IdObj": "PlainTextNumero",
            "Param": {},
            "Label": "Venta Pack",
            "ClassEvt": "",
            "CssClass": "Moneda",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSPVentaPorc",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSPVentaPorc",
            "IdObj": "PlainTextNumero",
            "Param": {},
            "Label": "Venta",
            "ClassEvt": "BotonPorcVenta",
            "CssClass": "Porcentaje PorcVenta",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSPCompraUnid",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DSPCompraUnid",
            "IdObj": "PlainTextNumero",
            "Param": {},
            "Label": "Compra Unid",
            "ClassEvt": "BotonCompra",
            "CssClass": "Moneda PrecioCompra",
            "Style": {},
            "Valid": {}
        },
        "7": {
            "id": "DSPCompraPack",
            "Orden": "11",
            "Tipo": "Fld",
            "idSrc": "DSPCompraPack",
            "IdObj": "PlainTextNumero",
            "Param": {},
            "Label": "Compra Pack",
            "ClassEvt": "",
            "CssClass": "Moneda",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DSPrecioCompraPendiente",
            "Orden": "12",
            "Tipo": "Fld",
            "idSrc": "DSPrecioCompraPendiente",
            "IdObj": "PlainTextNumero",
            "Param": {},
            "Label": "Pendiente",
            "ClassEvt": "",
            "CssClass": "Moneda",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DSPCompraAntUnid",
            "Orden": "13",
            "Tipo": "Fld",
            "idSrc": "DSPCompraAntUnid",
            "IdObj": "PlainTextNumero",
            "Param": {},
            "Label": "Compra Ant",
            "ClassEvt": "",
            "CssClass": "Moneda PrecioAnt",
            "Style": {},
            "Valid": {}
        },
        "10": {
            "id": "DSDifCompraAnt",
            "Orden": "14",
            "Tipo": "Fld",
            "idSrc": "DSDifCompraAnt",
            "IdObj": "PlainTextNumero",
            "Param": {},
            "Label": "% DIF ",
            "ClassEvt": "",
            "CssClass": "Porcentaje PrecioAnt",
            "Style": {},
            "Valid": {}
        },
        "11": {
            "id": "DSNombreProducto",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSNombreProducto",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Producto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "12": {
            "id": "DSEstadoProducto",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSEstadoProducto",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "13": {
            "id": "DSsector",
            "Orden": "15",
            "Tipo": "Fld",
            "idSrc": "DSsector",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Sector",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "14": {
            "id": "DSCategoria",
            "Orden": "16",
            "Tipo": "Fld",
            "idSrc": "DSCategoria",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Categoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "15": {
            "id": "DSSubCategoria",
            "Orden": "17",
            "Tipo": "Fld",
            "idSrc": "DSSubCategoria",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "SubCategoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "16": {
            "id": "DSTipo",
            "Orden": "18",
            "Tipo": "Fld",
            "idSrc": "DSTipo",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Tipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "17": {
            "id": "DSMarca",
            "Orden": "19",
            "Tipo": "Fld",
            "idSrc": "DSMarca",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Marca",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "18": {
            "id": "DSPropietario",
            "Orden": "20",
            "Tipo": "Fld",
            "idSrc": "DSPropietario",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Propietario",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "BotonCompra",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_CambiaCompra"
                }
            }
        },
        "1": {
            "ClassEvt": "BotonPorcVenta",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_CambiaVenta"
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
