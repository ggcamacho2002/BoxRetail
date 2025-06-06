function CfgFormulario(id,Param){
var ret={};

ret["FRM_AltaSueldosItemsConfig"]={
    "id": "FRM_AltaSueldosItemsConfig",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_SueldosItemsConfig",
    "Tipo": "Vertical",
    "IdSource": "DS_SueldosItemsConfig",
    "CfgItems": {
        "0": {
            "id": "DSconcepto",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSconcepto",
            "IdObj": "InputText",
            "Requerido": "1",
            "Label": "concepto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DScodigo",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DScodigo",
            "IdObj": "InputNumber",
            "Requerido": "1",
            "Label": "codigo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSsubtotaltipo",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSsubtotaltipo",
            "IdObj": "ComboStaticVal",
            "Requerido": "1",
            "Label": "subtotal tipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_SubtotalTipo"
                }
            },
            "Valid": {}
        },
        "3": {
            "id": "DSformulaunidad",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSformulaunidad",
            "IdObj": "Hidden",
            "Requerido": "0",
            "Label": "formula unidad",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSoperacion",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSoperacion",
            "IdObj": "ComboStaticVal",
            "Requerido": "1",
            "Label": "operacion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Operacion"
                }
            },
            "Valid": {}
        },
        "5": {
            "id": "DSformulavalorunit",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSformulavalorunit",
            "IdObj": "Hidden",
            "Requerido": "0",
            "Label": "formulavalorunit",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "DSestado",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "ComboStaticVal",
            "Requerido": "1",
            "Label": "estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_estado"
                }
            },
            "Valid": {}
        },
        "7": {
            "id": "DSorden",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSorden",
            "IdObj": "InputNumber",
            "Requerido": "1",
            "Label": "orden",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "8": {
            "id": "DStipo",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DStipo",
            "IdObj": "ComboStaticVal",
            "Requerido": "0",
            "Label": "tipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Tipo"
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
                    "IdEvt": "EVT_ST_Buscar_SueldosItemsConfig"
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
ret["FRM_EditarSueldosItemsConfig"]={
    "id": "FRM_EditarSueldosItemsConfig",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_SueldosItemsConfig",
    "Tipo": "Vertical",
    "IdSource": "DS_SueldosItemsConfig",
    "CfgItems": {
        "0": {
            "id": "DSconcepto",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSconcepto",
            "IdObj": "InputText",
            "Requerido": "1",
            "Label": "concepto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DScodigo",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DScodigo",
            "IdObj": "InputNumber",
            "Requerido": "1",
            "Label": "codigo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSsubtotaltipo",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSsubtotaltipo",
            "IdObj": "ComboStaticVal",
            "Requerido": "1",
            "Label": "subtotal tipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_SubtotalTipo"
                }
            },
            "Valid": {}
        },
        "3": {
            "id": "DSformulaunidad",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSformulaunidad",
            "IdObj": "Hidden",
            "Requerido": "0",
            "Label": "formula unidad",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSoperacion",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSoperacion",
            "IdObj": "ComboStaticVal",
            "Requerido": "1",
            "Label": "operacion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Operacion"
                }
            },
            "Valid": {}
        },
        "5": {
            "id": "DSformulavalorunit",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSformulavalorunit",
            "IdObj": "Hidden",
            "Requerido": "0",
            "Label": "formulavalorunit",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "DSestado",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "ComboStaticVal",
            "Requerido": "1",
            "Label": "estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_estado"
                }
            },
            "Valid": {}
        },
        "7": {
            "id": "DSorden",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSorden",
            "IdObj": "InputNumber",
            "Requerido": "1",
            "Label": "orden",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "8": {
            "id": "DStipo",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DStipo",
            "IdObj": "ComboStaticVal",
            "Requerido": "0",
            "Label": "tipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Tipo"
                }
            },
            "Valid": {}
        },
        "9": {
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
                    "IdEvt": "EVT_ST_Buscar_SueldosItemsConfig"
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
ret["FRM_FormulaUnidad"]={
    "id": "FRM_FormulaUnidad",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Formulas",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_SueldosItemsConfig",
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
            "id": "DSconcepto",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSconcepto",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "concepto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DScodigo",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DScodigo",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "codigo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSformulaunidad",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSformulaunidad",
            "IdObj": "InputLabelDiv",
            "Param": {},
            "Label": "Formula Unidad",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Min-width",
                    "Value": "600px"
                }
            },
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
            "ClassEvt": "TraerDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
                }
            }
        },
        "1": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Formulas"
                }
            }
        }
    }
};
ret["FRM_FormulaValorUnitario"]={
    "id": "FRM_FormulaValorUnitario",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Formulas",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_SueldosItemsConfig",
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
            "id": "DSconcepto",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSconcepto",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "concepto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DScodigo",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DScodigo",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "codigo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSformulavalorunit",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DSformulavalorunit",
            "IdObj": "InputLabelDiv",
            "Param": {},
            "Label": "Formula Valor Unit.",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Min-width",
                    "Value": "600px"
                }
            },
            "Requerido": "1",
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
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
                }
            }
        },
        "1": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Formulas"
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
