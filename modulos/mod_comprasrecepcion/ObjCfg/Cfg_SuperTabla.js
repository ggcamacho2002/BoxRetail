function CfgSuperTabla(id,Param){
var ret={};

ret["ST_PedidosControlado"]={
    "id": "ST_PedidosControlado",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Pedidos en Controlado",
    "idTabla": "TBL_PedidosControlado",
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
    "ModalQuery": {
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
                "idSrc": "DSpro_clave",
                "Label": "pro_clave",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "idSrc": "DSrec_fecha",
                "Label": "rec_fecha",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "idSrc": "DSrec_estado",
                "Label": "rec_estado",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "4": {
                "idSrc": "DSpro_razon_social",
                "Label": "pro_razon_social",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "5": {
                "idSrc": "DSpro_id",
                "Label": "pro_id",
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
                "idSrc": "DSpro_clave",
                "Label": "pro_clave"
            },
            "2": {
                "idSrc": "DSrec_fecha",
                "Label": "rec_fecha"
            },
            "3": {
                "idSrc": "DSrec_estado",
                "Label": "rec_estado"
            },
            "4": {
                "idSrc": "DSpro_razon_social",
                "Label": "pro_razon_social"
            },
            "5": {
                "idSrc": "DSpro_id",
                "Label": "pro_id"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSid",
                "Label": "id"
            },
            "1": {
                "idSrc": "DSpro_clave",
                "Label": "pro_clave"
            },
            "2": {
                "idSrc": "DSrec_fecha",
                "Label": "rec_fecha"
            },
            "3": {
                "idSrc": "DSrec_estado",
                "Label": "rec_estado"
            },
            "4": {
                "idSrc": "DSpro_razon_social",
                "Label": "pro_razon_social"
            },
            "5": {
                "idSrc": "DSpro_id",
                "Label": "pro_id"
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
ret["ST_CompraRecepcion"]={
    "id": "ST_CompraRecepcion",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Recepcion Pedidos",
    "idTabla": "TBL_CompraRecepcion",
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
        "FiltrosRap": {
            "0": {
                "Orden": 0,
                "idSrc": "DSrazon_social",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Proveedor",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "1",
                "idSrc": "DSdop_fecha",
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
                "idSrc": "DSrazon_social",
                "Label": "Proveedor"
            },
            "1": {
                "Orden": "1",
                "idSrc": "DSdop_fecha",
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
ret["ST_DocProvItems"]={
    "id": "ST_DocProvItems",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Items Comprobante",
    "idTabla": "TBL_DocProvItems",
    "ModoInicio": "EDIT",
    "Header": {
        "Filtros": {},
        "Ctrl": {
            "0": {
                "Orden": "0",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Ordenar Productos",
                "ClassEvt": "",
                "CssClass": "Fill_Violeta1",
                "Style": {}
            }
        }
    },
    "Footer": {
        "Fields": {
            "0": {
                "id": "totBonif",
                "Orden": "1",
                "idSrc": "",
                "Label": "Total Bonif.",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {},
                "Requerido": 0,
                "Valid": {},
                "Value": "0",
                "ClassEvt": "CargarColumna",
                "Style": {},
                "CssClass": "FldGrande"
            },
            "1": {
                "id": "totiva",
                "Orden": "2",
                "idSrc": "",
                "Label": "Total Iva",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {},
                "Requerido": 0,
                "Valid": {},
                "Value": "0",
                "ClassEvt": "CargarColumna",
                "Style": {},
                "CssClass": "FldGrande"
            },
            "2": {
                "id": "totretiva",
                "Orden": "3",
                "idSrc": "",
                "Label": "Total ret.Iva",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {},
                "Requerido": 0,
                "Valid": {},
                "Value": "0",
                "ClassEvt": "CargarColumna",
                "Style": {},
                "CssClass": "FldGrande"
            },
            "3": {
                "id": "totretiibb",
                "Orden": "4",
                "idSrc": "",
                "Label": "Total ret.iibb",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {},
                "Requerido": 0,
                "Valid": {},
                "Value": "0",
                "ClassEvt": "CargarColumna",
                "Style": {},
                "CssClass": "FldGrande"
            },
            "4": {
                "id": "totimpint",
                "Orden": "5",
                "idSrc": "",
                "Label": "Total imp.int.",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {},
                "Requerido": 0,
                "Valid": {},
                "Value": "0",
                "ClassEvt": "CargarColumna",
                "Style": {},
                "CssClass": "FldGrande"
            },
            "5": {
                "id": "totalFinal",
                "Orden": "6",
                "idSrc": "",
                "Label": "Total Final",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {},
                "Requerido": 0,
                "Valid": {},
                "Value": "0",
                "ClassEvt": "CargarColumna",
                "Style": {},
                "CssClass": "FldGrande"
            },
            "6": {
                "id": "totneto",
                "Orden": "0",
                "idSrc": "",
                "Tipo": "Fld",
                "IdObj": "InputROLabelDiv",
                "Param": {},
                "Value": "",
                "Label": "Total Neto",
                "ClassEvt": "",
                "CssClass": "FldGrande",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "id": "Guardar",
                "Orden": "99",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Guardar Documento",
                "ClassEvt": "GuardarDoc",
                "CssClass": "Fill_Rojo1",
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
            "ClassEvt": "GuardarDoc",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_UpdateBdAllFila_DocProvItems"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Recepcion"
                }
            }
        }
    }
};
ret["ST_DocsGuardados"]={
    "id": "ST_DocsGuardados",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Documentos Guardados",
    "idTabla": "TBL_DocsGuardados",
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
    "CfgEventos": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
