function CfgFormulario(id,Param){
var ret={};

ret["FRM_AltaRol"]={
    "id": "FRM_AltaRol",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaRoles",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_AppRoles",
    "CfgItems": {
        "0": {
            "id": "DSnombre",
            "Tipo": "Fld",
            "idSrc": "DSnombre",
            "IdObj": "InputText",
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSestado",
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "ComboStaticVal",
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "DS_Estado"
                }
            },
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
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
                    "IdEvt": "EVT_FRM_InsertBd_AltaRol"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListaRol"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Hide_AltaRol"
                }
            }
        }
    }
};
ret["FRM_EditarRol"]={
    "id": "FRM_EditarRol",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaRoles",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_AppRoles",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSnombre",
            "Tipo": "Fld",
            "idSrc": "DSnombre",
            "IdObj": "InputText",
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSestado",
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "ComboStaticVal",
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "DS_Estado"
                }
            },
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
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
                    "IdEvt": "EVT_FRM_UpdateBd_EditRol"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListaRol"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Hide_EditRol"
                }
            }
        },
        "1": {
            "ClassEvt": "Iniciar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_EditRol"
                }
            }
        }
    }
};
ret["FRM_RolSelecto"]={
    "id": "FRM_RolSelecto",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaRoles",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_AppRoles",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSnombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSnombre",
            "IdObj": "InputTextRO",
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSestado",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "InputTextRO",
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "Ctrl": {},
    "CfgEventos": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
