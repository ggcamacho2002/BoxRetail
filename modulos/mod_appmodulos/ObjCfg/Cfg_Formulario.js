function CfgFormulario(id,Param){
var ret={};

ret["FRM_AltaModulo"]={
    "id": "FRM_AltaModulo",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaModulos",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_AppModulos",
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
            "id": "DSseccion",
            "Tipo": "Fld",
            "idSrc": "DSseccion",
            "IdObj": "InputText",
            "Label": "Seccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSsubseccion",
            "Tipo": "Fld",
            "idSrc": "DSsubseccion",
            "IdObj": "InputText",
            "Label": "Subseccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DStitulo",
            "Tipo": "Fld",
            "idSrc": "DStitulo",
            "IdObj": "InputText",
            "Label": "Titulo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSmodulo",
            "Tipo": "Fld",
            "idSrc": "DSmodulo",
            "IdObj": "InputText",
            "Label": "Modulo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "5": {
            "id": "DSorden_seccion",
            "Tipo": "Fld",
            "idSrc": "DSorden_seccion",
            "IdObj": "InputText",
            "Label": "Orden Seccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "DSorden_subseccion",
            "Tipo": "Fld",
            "idSrc": "DSorden_subseccion",
            "IdObj": "InputText",
            "Label": "Orden Subseccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "7": {
            "id": "DSorden_modulo",
            "idSrc": "DSorden_modulo",
            "Label": "Orden Modulo",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "Param": {},
            "Valid": {},
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "8": {
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
                    "IdEvt": "EVT_FRM_InsertBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListMod"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Hide_AltaMod"
                }
            }
        }
    }
};
ret["FRM_EditarModulo"]={
    "id": "FRM_EditarModulo",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaModulos",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_AppModulos",
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
            "id": "DSseccion",
            "Tipo": "Fld",
            "idSrc": "DSseccion",
            "IdObj": "InputText",
            "Label": "Seccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSsubseccion",
            "Tipo": "Fld",
            "idSrc": "DSsubseccion",
            "IdObj": "InputText",
            "Label": "Subseccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DStitulo",
            "Tipo": "Fld",
            "idSrc": "DStitulo",
            "IdObj": "InputText",
            "Label": "Titulo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSmodulo",
            "Tipo": "Fld",
            "idSrc": "DSmodulo",
            "IdObj": "InputText",
            "Label": "Modulo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "5": {
            "id": "DSorden_seccion",
            "Tipo": "Fld",
            "idSrc": "DSorden_seccion",
            "IdObj": "InputText",
            "Label": "Orden Seccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "DSorden_subseccion",
            "Tipo": "Fld",
            "idSrc": "DSorden_subseccion",
            "IdObj": "InputText",
            "Label": "Orden Subseccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "7": {
            "id": "DSorden_modulo",
            "idSrc": "DSorden_modulo",
            "Label": "Orden Modulo",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "Param": {},
            "Valid": {},
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "8": {
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
            "id": "",
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
            "ClassEvt": "Iniciar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_EditMod"
                }
            }
        },
        "1": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_ModEdit"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListMod"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Hide_EditMod"
                }
            }
        }
    }
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
