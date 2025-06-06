function CfgFormulario(id,Param){
var ret={};

ret["FRM_AltaSindicatos"]={
    "id": "FRM_AltaSindicatos",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Sindicatos",
    "Tipo": "Vertical",
    "IdSource": "DS_Sindicatos",
    "CfgItems": {
        "0": {
            "id": "DSNombre",
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "InputText",
            "Label": "Nombre",
            "ClassEvt": "",
            "Requerido": "1",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Label": "Guardar",
            "ClassEvt": "EvtGuardar",
            "CssClass": "Fill_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtGuardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Sindicatos"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                }
            }
        }
    }
};
ret["FRM_EditarSindicatos"]={
    "id": "FRM_EditarSindicatos",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Sindicatos",
    "Tipo": "Vertical",
    "IdSource": "DS_Sindicatos",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "id",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSNombre",
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "InputText",
            "Label": "Nombre",
            "ClassEvt": "",
            "Requerido": "1",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Label": "Guardar",
            "ClassEvt": "EvtGuardar",
            "CssClass": "Fill_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtCargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
                }
            }
        },
        "1": {
            "ClassEvt": "EvtGuardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Sindicatos"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                }
            }
        }
    }
};
ret["FRM_AltaSindicatosBasicos"]={
    "id": "FRM_AltaSindicatosBasicos",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_SindicatosBasicos",
    "Tipo": "Vertical",
    "IdSource": "DS_SindicatosBasicos",
    "CfgItems": {
        "0": {
            "id": "DScategoria",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DScategoria",
            "IdObj": "InputText",
            "Label": "categoria",
            "ClassEvt": "",
            "Requerido": "1",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSbasico",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSbasico",
            "IdObj": "InputNumber",
            "Label": "basico",
            "ClassEvt": "",
            "Requerido": "1",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Label": "Guardar",
            "ClassEvt": "EvtGuardar",
            "CssClass": "Fill_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtGuardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_NuevaCategoriaBasico"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_SindicatosBasicos"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                }
            }
        }
    }
};
ret["FRM_EditarSindicatosBasicos"]={
    "id": "FRM_EditarSindicatosBasicos",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_SindicatosBasicos",
    "Tipo": "Vertical",
    "IdSource": "DS_SindicatosBasicos",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "id",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DScategoria",
            "Tipo": "Fld",
            "idSrc": "DScategoria",
            "IdObj": "InputText",
            "Label": "categoria",
            "ClassEvt": "",
            "Requerido": "1",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSbasico",
            "Tipo": "Fld",
            "idSrc": "DSbasico",
            "IdObj": "InputNumber",
            "Label": "basico",
            "ClassEvt": "",
            "Requerido": "1",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSidsindicato",
            "Tipo": "Fld",
            "idSrc": "DSidsindicato",
            "IdObj": "Hidden",
            "Label": "idsindicato",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Label": "Guardar",
            "ClassEvt": "EvtGuardar",
            "CssClass": "Fill_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtCargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
                }
            }
        },
        "1": {
            "ClassEvt": "EvtGuardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_SindicatosBasicos"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                }
            }
        }
    }
};
ret["FRM_SindicatoSelecto"]={
    "id": "FRM_SindicatoSelecto",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Sindicatos",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Sindicatos",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSNombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Background-color",
                    "Value": "#50674f"
                },
                "1": {
                    "Prop": "Height",
                    "Value": "50px"
                },
                "2": {
                    "Prop": "Font-size",
                    "Value": "20px !important"
                },
                "3": {
                    "Prop": "Font-weight",
                    "Value": "bolder"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {},
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
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
