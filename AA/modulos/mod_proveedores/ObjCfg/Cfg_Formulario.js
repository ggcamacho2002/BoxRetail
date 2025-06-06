function CfgFormulario(id,Param){
var ret={};

ret["FRM_Proveedor"]={
    "id": "FRM_Proveedor",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaProveedores",
    "CssClass": "",
    "Style": {},
    "Tipo": "Horizontal",
    "IdSource": "DS_Proveedores",
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
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSRazonSocial",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSRazonSocial",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Razon Social",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {},
    "CfgEventos": {}
};
ret["FRM_AltaProveedor"]={
    "id": "FRM_AltaProveedor",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaProveedores",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Proveedores",
    "CfgItems": {
        "0": {
            "id": "DSRazonSocial",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSRazonSocial",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Razon Social",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Requerido": 1,
            "Value": ""
        },
        "1": {
            "id": "DSDireccion",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSDireccion",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Direccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Requerido": 0,
            "Value": ""
        },
        "2": {
            "id": "DSTelefono",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSTelefono",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Telefono",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Requerido": 0,
            "Value": ""
        },
        "3": {
            "id": "DSMail",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSMail",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Mail",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Requerido": 0,
            "Value": ""
        },
        "4": {
            "id": "DSestado",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estado"
                }
            },
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Requerido": 0,
            "Value": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "",
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
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_this"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListaProveedores"
                }
            }
        }
    }
};
ret["FRM_EditarProveedor"]={
    "id": "FRM_EditarProveedor",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaProveedores",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Proveedores",
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
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSRazonSocial",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSRazonSocial",
            "IdObj": "InputText",
            "Param": {},
            "Label": "RazonSocial",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSDireccion",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSDireccion",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Direccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSTelefono",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSTelefono",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Telefono",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSMail",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSMail",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Mail",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "0",
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DSestado",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estado"
                }
            },
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
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
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_DsId"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListaProveedores"
                }
            }
        },
        "1": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_EditarProveedor"
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
