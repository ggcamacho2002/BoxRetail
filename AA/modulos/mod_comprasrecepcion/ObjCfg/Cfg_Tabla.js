function CfgTabla(id,Param){
var ret={};

ret["TBL_PedidosControlado"]={
    "id": "TBL_PedidosControlado",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_PedidosControlado",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "PlainText",
            "Label": "Pedido Id",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSpro_clave",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSpro_clave",
            "IdObj": "Hidden",
            "Label": "pro_clave",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSrec_fecha",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSrec_fecha",
            "IdObj": "PlainText",
            "Label": "fecha",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSrec_estado",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSrec_estado",
            "IdObj": "PlainText",
            "Label": "estado",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSpro_razon_social",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSpro_razon_social",
            "IdObj": "PlainText",
            "Label": "Proveedor",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Font-size",
                    "Value": "16px!important"
                }
            },
            "Param": {},
            "Valid": {}
        },
        "5": {
            "id": "DSpro_id",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSpro_id",
            "IdObj": "Hidden",
            "Label": "pro_id",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "Borrar",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Label": "Borrar",
            "ClassEvt": "EvtBorrar",
            "CssClass": "Transp_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {},
            "Orden": "6"
        },
        "7": {
            "id": "GenerarRecepcion",
            "Orden": "7",
            "Label": "Generar Recepcion",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "AltaRecepcion",
            "Style": {},
            "CssClass": "Transp_Verde1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "AltaRecepcion",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaRecepcion"
                },
                "1": {
                    "Orden": 1,
                    "Trigger": "",
                    "IdEvt": ""
                }
            }
        }
    }
};
ret["TBL_CompraRecepcion"]={
    "id": "TBL_CompraRecepcion",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_CompraRecepcion",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
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
            "id": "Proveedor",
            "Orden": "1",
            "Label": "Proveedor",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSrazon_social",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {
                "0": {
                    "Prop": "Font-size",
                    "Value": "16px !mportant"
                }
            },
            "CssClass": ""
        },
        "2": {
            "id": "DSpro_clave",
            "Orden": "3",
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
            "id": "DStic_clave",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DStic_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Tic Clave",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSdop_estado",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSdop_estado",
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
            "id": "DStic_descripcion",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DStic_descripcion",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Tipo Comprobante",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "Total",
            "Orden": "9",
            "Label": "Total",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSdop_total",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "7": {
            "id": "Fecha",
            "Orden": "2",
            "Label": "Fecha",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSdop_fecha",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "8": {
            "id": "idremito",
            "Orden": "10",
            "Label": "idremito",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "9": {
            "id": "delete",
            "Orden": "11",
            "Label": "Volver a controlar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "delete",
            "Style": {},
            "CssClass": "Transp_Rojo1"
        },
        "10": {
            "id": "Editar",
            "Orden": "12",
            "Label": "Editar Comprobante",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "editarcomprobante",
            "Style": {},
            "CssClass": "Transp_Azul2"
        },
        "11": {
            "id": "Itemscomprobante",
            "Orden": "13",
            "Label": "Items comprobante",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "vistaitems",
            "Style": {},
            "CssClass": "Transp_Verde1"
        },
        "12": {
            "id": "DSnrodocprov",
            "Orden": "7",
            "Label": "Nro doc.",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSnrodocprov",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "13": {
            "id": "DSfechaprov",
            "Orden": "8",
            "Label": "Fecha doc.",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSfechaprov",
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
            "ClassEvt": "delete",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_CompraRecepcion"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_CompraRecepcion"
                }
            },
            "Orden": 0
        },
        "1": {
            "ClassEvt": "vistaitems",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_Comprobante"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_RecepcionItems"
                }
            },
            "Orden": 1
        },
        "2": {
            "ClassEvt": "editarcomprobante",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditRecepcion"
                }
            }
        }
    }
};
ret["TBL_DocProvItems"]={
    "id": "TBL_DocProvItems",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_DocumentoProveedorItems",
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
            "id": "DSorden",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSorden",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "orden",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSprod_descripcion",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSprod_descripcion",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Producto",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DScantidad",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DScantidad",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Unidades",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "FldMedio",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "Packs",
            "Orden": 4,
            "Label": "Packs",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "idSrc": "DSPacks",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "CambiossSinUpdate",
            "Style": {},
            "CssClass": "FldMedio"
        },
        "5": {
            "id": "NetoUnidad",
            "Orden": 5,
            "Label": "$ Unidad",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "idSrc": "DSNetoUnid",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "CambiossSinUpdate",
            "Style": {},
            "CssClass": "FldMedio"
        },
        "6": {
            "id": "NetoPack",
            "Orden": 6,
            "Label": "$ Pack",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "idSrc": "DSNetoPack",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "CambiossSinUpdate",
            "Style": {},
            "CssClass": "FldMedio"
        },
        "7": {
            "id": "DSneto",
            "Orden": 7,
            "Tipo": "Fld",
            "idSrc": "DSneto",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "$ Neto",
            "ClassEvt": "CambiossSinUpdate",
            "Value": "",
            "CssClass": "FldGrande",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "PorcBonif",
            "Orden": 8,
            "Label": "% Bonif.",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "idSrc": "DSPorcBonif",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "CambiossSinUpdate",
            "Style": {},
            "CssClass": "FldChico"
        },
        "9": {
            "id": "DSdop_clave",
            "Orden": 9,
            "Tipo": "Fld",
            "idSrc": "DSdop_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Dop Clave",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "10": {
            "id": "DSPorcIVA",
            "Orden": 10,
            "Tipo": "Fld",
            "idSrc": "DSPorcIVA",
            "IdObj": "InputText",
            "Param": {},
            "Label": "% Iva",
            "ClassEvt": "CambiossSinUpdate",
            "Value": "",
            "CssClass": "FldChico",
            "Style": {},
            "Valid": {}
        },
        "11": {
            "id": "DSPorcRetIva",
            "Orden": 11,
            "Label": "% ret. iva",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "idSrc": "DSPorcRetIva",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "CambiossSinUpdate",
            "Style": {},
            "CssClass": "FldChico"
        },
        "12": {
            "id": "DSPorcRetIIBB",
            "Orden": 12,
            "Label": "% Ret. IIBB",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "idSrc": "DSPorcRetIIBB",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "CambiossSinUpdate",
            "Style": {},
            "CssClass": "FldChico"
        },
        "13": {
            "id": "DSPorcImpInterno",
            "Orden": 13,
            "Label": "% Imp Int.",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "idSrc": "DSPorcImpInterno",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "CambiossSinUpdate",
            "Style": {},
            "CssClass": "FldChico"
        },
        "14": {
            "id": "DStotal",
            "Orden": 14,
            "Tipo": "Fld",
            "idSrc": "DStotal",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "$ SubTotal",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "FldGrande",
            "Style": {},
            "Valid": {}
        },
        "15": {
            "id": "CantxPack",
            "Orden": 15,
            "Label": "CantxPack",
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
            "ClassEvt": "CambiossSinUpdate",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "change",
                    "IdEvt": "EVT_Scripts_Iniciar_CalcSubTotal"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_TBL_SiguienteInput_This"
                }
            },
            "Orden": 0
        }
    }
};
ret["TBL_DocsGuardados"]={
    "id": "TBL_DocsGuardados",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_DocsGuardados",
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
            "id": "DSrazon_social",
            "Orden": 1,
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
            "id": "DStic_clave",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DStic_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Tic Clave",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSdop_estado",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSdop_estado",
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
            "id": "DSdop_fecha",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSdop_fecha",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Fecha",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSidremito",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DSidremito",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idremito",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "7": {
            "id": "DSfechaprov",
            "Orden": 7,
            "Tipo": "Fld",
            "idSrc": "DSfechaprov",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Fecha Doc.",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DStic_descripcion",
            "Orden": 8,
            "Tipo": "Fld",
            "idSrc": "DStic_descripcion",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Tic Descripcion",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DSnrodocprov",
            "Orden": 9,
            "Label": "nro doc.",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSnrodocprov",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "10": {
            "id": "DSdop_total",
            "Orden": 10,
            "Label": "Total",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSdop_total",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "11": {
            "id": "Imprimir ",
            "Orden": "11",
            "Label": "Ver e Imprimir ",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
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
