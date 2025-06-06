function CfgFormulario(id,Param){
var ret={};

ret["FRM_AltaUsuarios"]={
    "id": "FRM_AltaUsuarios",
    "TipoObjPadre": "",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_AppUsuarios",
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
            "Tipo": "Fld",
            "idSrc": "DSclave",
            "IdObj": "InputText",
            "Label": "Clave",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "",
                    "Value": ""
                }
            },
            "Param": {
                "0": {
                    "Key": "",
                    "Value": ""
                }
            },
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
                    "Value": "DS_estados"
                }
            },
            "Valid": {}
        },
        "3": {
            "id": "DSidrol",
            "Tipo": "Fld",
            "idSrc": "DSidrol",
            "Label": "NombreRol",
            "IdObj": "ComboDataSource",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "DS_ListaRoles"
                }
            },
            "Valid": {},
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "InsertBd",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "InsertBd",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_AltaUsr"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Hide_AltaUsr"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListUsr"
                }
            }
        }
    }
};
ret["FRM_EditarUsuario"]={
    "id": "FRM_EditarUsuario",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaUsuariosRO",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_AppUsuarios",
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
            "id": "DSclave",
            "Tipo": "Fld",
            "idSrc": "DSclave",
            "IdObj": "InputText",
            "Label": "Clave",
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
            "Label": "Estado",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "DS_estados"
                }
            },
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSid",
            "Label": "",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Valid": {},
            "Param": {
                "0": {
                    "Key": "",
                    "Value": ""
                }
            },
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "4": {
            "id": "DSidrol",
            "Tipo": "Fld",
            "idSrc": "DSidrol",
            "Label": "Nombre Rol",
            "IdObj": "ComboDataSource",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "DS_ListaRoles"
                }
            },
            "Valid": {},
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "GenerarId",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Editar",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "LoadDom",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
                }
            }
        },
        "1": {
            "ClassEvt": "Editar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_EditUsr"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListUsr"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Hide_EditUsr"
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
