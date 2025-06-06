function CfgTabla(id,Param){
var ret={};

ret["TBL_ListaProveedores"]={
    "id": "TBL_ListaProveedores",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_Proveedores",
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
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSRazonSocial",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSRazonSocial",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "RazonSocial",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSDireccion",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSDireccion",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Direccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSTelefono",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSTelefono",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Telefono",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSMail",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSMail",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Mail",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSestado",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "Borrar",
            "Orden": "",
            "Label": "Borrar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "BORRAR",
            "Style": {},
            "CssClass": "Transp_Rojo1"
        },
        "7": {
            "id": "Editar",
            "Orden": "",
            "Label": "Editar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Editar",
            "Style": {},
            "CssClass": "Transp_Azul2"
        },
        "8": {
            "id": "Impuestos",
            "Orden": "",
            "Label": "Impuestos",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Impuestos",
            "Style": {},
            "CssClass": "Transp_Naranja1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "BORRAR",
            "Hilo": {}
        },
        "1": {
            "ClassEvt": "Editar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditarProveedor"
                }
            }
        },
        "2": {
            "ClassEvt": "Impuestos",
            "Hilo": {
                "0": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_idProveedor"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Impuestos"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_Proveedor"
                },
                "3": {
                    "Orden": "4",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ListaProveedorImp"
                }
            }
        }
    }
};
ret["TBL_TasasImpuestos"]={
    "id": "TBL_TasasImpuestos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_TasasImpuestos",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "1",
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
            "id": "DSNombre",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSPorc",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSPorc",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Porc",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSMinimo",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSMinimo",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Minimo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSEstado",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSEstado",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "Agregar",
            "Orden": "0",
            "Label": "Agregar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Agregar",
            "Style": {},
            "CssClass": "Transp_Azul2"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Agregar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_ProveedorImp"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ListaProveedorImp"
                }
            }
        }
    }
};
ret["TBL_ListaProveedorImp"]={
    "id": "TBL_ListaProveedorImp",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ProveedorImp",
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
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSidproveedor",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSidproveedor",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idproveedor",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSidimpuesto",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSidimpuesto",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idimpuesto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSRazonSocial",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSRazonSocial",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "RazonSocial",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSNombreImp",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSNombreImp",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Impuesto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSPorcImp",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSPorcImp",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "% Imp",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSMininmoImp",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DSMininmoImp",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Minimo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "7": {
            "id": "Borrar",
            "Orden": "",
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
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ListaProveedorImp"
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
