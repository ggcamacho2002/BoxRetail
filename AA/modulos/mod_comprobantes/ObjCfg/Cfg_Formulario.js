function CfgFormulario(id,Param){
var ret={};

ret["FRM_AltaComprobante"]={
    "id": "FRM_AltaComprobante",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Comprobante",
    "Tipo": "Vertical",
    "IdSource": "DS_Comprobante",
    "CfgItems": {
        "0": {
            "id": "DScomdescripcion",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DScomdescripcion",
            "IdObj": "InputText",
            "Requerido": "1",
            "Label": "Descripcion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DScomestado",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DScomestado",
            "IdObj": "ComboStaticVal",
            "Requerido": "0",
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estado"
                }
            },
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
                    "IdEvt": "EVT_ST_Buscar_Comprobante"
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
ret["FRM_EditarComprobante"]={
    "id": "FRM_EditarComprobante",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Comprobante",
    "Tipo": "Vertical",
    "IdSource": "DS_Comprobante",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Requerido": "0",
            "Label": "id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DScomdescripcion",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DScomdescripcion",
            "IdObj": "InputText",
            "Requerido": "1",
            "Label": "Descripcion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DScomestado",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DScomestado",
            "IdObj": "ComboStaticVal",
            "Requerido": "0",
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estado"
                }
            },
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
                    "IdEvt": "EVT_ST_Buscar_Comprobante"
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
ret["FRM_AltaComprobanteTipo"]={
    "id": "FRM_AltaComprobanteTipo",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ComprobanteTipo",
    "Tipo": "Vertical",
    "IdSource": "DS_ComprobanteTipo",
    "CfgItems": {
        "0": {
            "id": "DSTic_descripcion",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSTic_descripcion",
            "IdObj": "InputText",
            "Requerido": "1",
            "Label": "descripcion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSTic_estado",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSTic_estado",
            "IdObj": "ComboStaticVal",
            "Requerido": "0",
            "Label": "estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estado"
                }
            },
            "Valid": {}
        },
        "2": {
            "id": "DSCom_clave",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSCom_clave",
            "IdObj": "ComboDataSource",
            "Requerido": "0",
            "Label": "Comprobante",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "DS_ComprobanteCombo"
                }
            },
            "Valid": {}
        },
        "3": {
            "id": "DSTic_DeudorAcreedor",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSTic_DeudorAcreedor",
            "IdObj": "ComboStaticVal",
            "Requerido": "0",
            "Label": "Deudor\/Acreedor",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_AcredorDeudor"
                }
            },
            "Valid": {}
        },
        "4": {
            "id": "DSTic_numero",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSTic_numero",
            "IdObj": "InputText",
            "Requerido": "1",
            "Label": "numero",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "5": {
            "id": "DStic_orden",
            "Orden": "5",
            "idSrc": "DStic_orden",
            "Label": "orden",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
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
                    "IdEvt": "EVT_ST_Buscar_ComprobanteTipo"
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
ret["FRM_EditarComprobanteTipo"]={
    "id": "FRM_EditarComprobanteTipo",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ComprobanteTipo",
    "Tipo": "Vertical",
    "IdSource": "DS_ComprobanteTipo",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Requerido": "0",
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSTic_descripcion",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSTic_descripcion",
            "IdObj": "InputText",
            "Requerido": "1",
            "Label": "descripcion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSTic_estado",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSTic_estado",
            "IdObj": "ComboStaticVal",
            "Requerido": "0",
            "Label": "estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estado"
                }
            },
            "Valid": {}
        },
        "3": {
            "id": "DSCom_clave",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSCom_clave",
            "IdObj": "ComboDataSource",
            "Requerido": "0",
            "Label": "Comprobante",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "DS_ComprobanteCombo"
                }
            },
            "Valid": {}
        },
        "4": {
            "id": "DSTic_DeudorAcreedor",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSTic_DeudorAcreedor",
            "IdObj": "ComboStaticVal",
            "Requerido": "0",
            "Label": "Deudor\/Acreedor",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_AcredorDeudor"
                }
            },
            "Valid": {}
        },
        "5": {
            "id": "DSTic_numero",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSTic_numero",
            "IdObj": "InputText",
            "Requerido": "1",
            "Label": "numero",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "DStic_orden",
            "Orden": "6",
            "idSrc": "DStic_orden",
            "Label": "orden",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
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
                    "IdEvt": "EVT_ST_Buscar_ComprobanteTipo"
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

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
