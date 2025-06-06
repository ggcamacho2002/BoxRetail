function CfgFormulario(id,Param){
var ret={};

ret["FRM_PropietarioAlta"]={
    "id": "FRM_PropietarioAlta",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Propietario",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Propietario",
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
            "id": "DSNombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSNombre",
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
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "ComboStaticVal",
            "Label": "Estado",
            "ClassEvt": "Guardar",
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
            "id": "Guardar",
            "Orden": "1",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Guardar",
            "Style": {},
            "CssClass": "Fill_Rojo1 "
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_PropietarioAlta"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Propietario"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Hide_PropietarioAlta"
                }
            }
        }
    }
};
ret["FRM_PropietarioSelecto"]={
    "id": "FRM_PropietarioSelecto",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Propietario",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Propietario",
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
            "id": "DSNombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "InputTextRO",
            "Label": "Propietario",
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
            "ClassEvt": "volver",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "Ctrl": {},
    "CfgEventos": {}
};
ret["FRM_AltaABMMarcas"]={
    "id": "FRM_AltaABMMarcas",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_ListaMarcas",
    "CfgItems": {
        "0": {
            "id": "DSNombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSNombre",
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
            "Orden": 2,
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
                    "IdEvt": "EVT_FRM_InsertBd_AltaABMMarcas"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Hide_AltaABMMarcas"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ABMMarcas"
                }
            }
        }
    }
};
ret["FRM_EditABMMarcas"]={
    "id": "FRM_EditABMMarcas",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ABMMarcas",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_ListaMarcas",
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
            "id": "DSNombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSNombre",
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
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "ComboStaticVal",
            "Label": "Estado",
            "ClassEvt": "Guardar",
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
                    "IdEvt": "EVT_FRM_UpdateBd_EditABMMarcas"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Hide_EditABMMarcas"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ABMMarcas"
                }
            }
        },
        "1": {
            "ClassEvt": "TraerData",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_EditABMMarcas"
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
