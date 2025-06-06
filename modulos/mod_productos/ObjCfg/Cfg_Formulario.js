function CfgFormulario(id,Param){
var ret={};

ret["FRM_AltaProducto"]={
    "id": "FRM_AltaProducto",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaProductos",
    "CssClass": "",
    "Style": {
        "0": {
            "Prop": "",
            "Value": ""
        }
    },
    "Tipo": "Vertical",
    "IdSource": "DS_ListaProductos",
    "CfgItems": {
        "0": {
            "id": "DSNombre",
            "Orden": "14",
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Label": "Nombre",
            "ClassEvt": "CambioNombre",
            "CssClass": "Fill_Violeta2",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "300px"
                },
                "1": {
                    "Prop": "Font-size",
                    "Value": "8px"
                }
            },
            "Valid": {}
        },
        "1": {
            "id": "DSEstado",
            "Orden": "13",
            "Tipo": "Fld",
            "idSrc": "DSEstado",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estado"
                }
            },
            "Requerido": 1,
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "",
                    "Value": ""
                }
            },
            "Valid": {}
        },
        "2": {
            "id": "DSDetalle",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSDetalle",
            "IdObj": "InputText",
            "Param": {},
            "Requerido": 1,
            "Label": "Detalle",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSUnidMedida",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DSUnidMedida",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_UnidadMedida"
                }
            },
            "Requerido": 1,
            "Label": "UnidMedida",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSMedida",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSMedida",
            "IdObj": "InputNumber",
            "Param": {},
            "Requerido": 1,
            "Label": "Medida",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSCantxPack",
            "Orden": "10",
            "Tipo": "Fld",
            "idSrc": "DSCantxPack",
            "IdObj": "InputNumber",
            "Param": {},
            "Requerido": 1,
            "Label": "CantxPack",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSTipoInNombre",
            "Orden": "11",
            "Tipo": "Fld",
            "idSrc": "DSTipoInNombre",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_BoolSiNo"
                }
            },
            "Requerido": 1,
            "Label": "TipoInNombre",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Value": "1"
        },
        "7": {
            "id": "DSidMarca",
            "Orden": "22",
            "Tipo": "Fld",
            "idSrc": "DSidMarca",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 1,
            "Label": "IdMarca",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DSidCategoriza",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSidCategoriza",
            "IdObj": "InputText",
            "Param": {},
            "Requerido": 1,
            "Label": "Categorizacion",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DSmarca",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSmarca",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Label": "Marca",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "10": {
            "id": "DSSector",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSSector",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Label": "Sector",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "11": {
            "id": "DSCategoria",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSCategoria",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Label": "Categoria",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "12": {
            "id": "DSSubCategoria",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSSubCategoria",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Label": "SubCategoria",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "13": {
            "id": "DSTipo",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSTipo",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Label": "Tipo",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "14": {
            "id": "DSTipoResumido",
            "Orden": "6",
            "idSrc": "DSTipoResumido",
            "Label": "TipoResumido",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Valid": {},
            "Value": "",
            "ClassEvt": "CambioNombre",
            "Style": {},
            "CssClass": ""
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
            "ClassEvt": "CambioNombre",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_CambiarNombre"
                }
            }
        },
        "1": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_CambiarNombre"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_FiltroPostGuardar"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_AltaProducto"
                },
                "3": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "4": {
                    "Orden": "4",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListaProducto"
                }
            }
        }
    }
};
ret["FRM_EditarProducto"]={
    "id": "FRM_EditarProducto",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaProductos",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_ListaProductos",
    "CfgItems": {
        "0": {
            "id": "DSNombre",
            "Orden": "14",
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Label": "Nombre",
            "ClassEvt": "CambioNombre",
            "CssClass": "Fill_Violeta2",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "300px"
                },
                "1": {
                    "Prop": "Font-size",
                    "Value": "8px"
                }
            },
            "Valid": {}
        },
        "1": {
            "id": "DSEstado",
            "Orden": "13",
            "Tipo": "Fld",
            "idSrc": "DSEstado",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estado"
                }
            },
            "Requerido": 1,
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "",
                    "Value": ""
                }
            },
            "Valid": {}
        },
        "2": {
            "id": "DSDetalle",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSDetalle",
            "IdObj": "InputText",
            "Param": {},
            "Requerido": 1,
            "Label": "Detalle",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSUnidMedida",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DSUnidMedida",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_UnidadMedida"
                }
            },
            "Requerido": 1,
            "Label": "UnidMedida",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSMedida",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSMedida",
            "IdObj": "InputNumber",
            "Param": {},
            "Requerido": 1,
            "Label": "Medida",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSCantxPack",
            "Orden": "10",
            "Tipo": "Fld",
            "idSrc": "DSCantxPack",
            "IdObj": "InputNumber",
            "Param": {},
            "Requerido": 1,
            "Label": "CantxPack",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSTipoInNombre",
            "Orden": "11",
            "Tipo": "Fld",
            "idSrc": "DSTipoInNombre",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_BoolSiNo"
                }
            },
            "Requerido": 1,
            "Label": "TipoInNombre",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Value": "1"
        },
        "7": {
            "id": "DSidMarca",
            "Orden": "22",
            "Tipo": "Fld",
            "idSrc": "DSidMarca",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 1,
            "Label": "IdMarca",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DSidCategoriza",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSidCategoriza",
            "IdObj": "InputText",
            "Param": {},
            "Requerido": 1,
            "Label": "Categorizacion",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DSmarca",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSmarca",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Label": "Marca",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "10": {
            "id": "DSSector",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSSector",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Label": "Sector",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "11": {
            "id": "DSCategoria",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSCategoria",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Label": "Categoria",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "12": {
            "id": "DSSubCategoria",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSSubCategoria",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Label": "SubCategoria",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "13": {
            "id": "DSTipo",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSTipo",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Label": "Tipo",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "14": {
            "id": "DSTipoResumido",
            "Orden": "6",
            "idSrc": "DSTipoResumido",
            "Label": "TipoResumido",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 1,
            "Valid": {},
            "Value": "",
            "ClassEvt": "CambioNombre",
            "Style": {},
            "CssClass": ""
        },
        "15": {
            "id": "DSid",
            "Orden": "",
            "idSrc": "DSid",
            "Label": "id",
            "Tipo": "Fld",
            "IdObj": "Hidden",
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
            "ClassEvt": "CambioNombre",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_CambiarNombre"
                }
            }
        },
        "1": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_CambiarNombre"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_FiltroPostGuardar"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_EditarProducto"
                },
                "3": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "4": {
                    "Orden": "4",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListaProducto"
                }
            }
        },
        "2": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_EditarProducto"
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
