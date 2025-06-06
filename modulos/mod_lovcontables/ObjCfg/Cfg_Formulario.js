function CfgFormulario(id,Param){
var ret={};

ret["FRM_AltaTasasImpuestos"]={
    "id": "FRM_AltaTasasImpuestos",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_TasasImpuestos",
    "CssClass": "",
    "Style": {
        "0": {
            "Prop": "",
            "Value": ""
        }
    },
    "Tipo": "Vertical",
    "IdSource": "DS_TasasImpuestos",
    "CfgItems": {
        "0": {
            "id": "DSNombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSPorc",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSPorc",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "Porc",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSMinimo",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSMinimo",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "Minimo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSEstado",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSEstado",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estados"
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
                    "IdEvt": "EVT_FRM_InsertBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_TasasImpuestos"
                }
            }
        }
    }
};
ret["FRM_EditarTasasImpuestos"]={
    "id": "FRM_EditarTasasImpuestos",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_TasasImpuestos",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_TasasImpuestos",
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
            "id": "DSNombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSPorc",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSPorc",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "Porc",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSMinimo",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSMinimo",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "Minimo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSEstado",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSEstado",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estados"
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
                    "IdEvt": "EVT_ST_Buscar_TasasImpuestos"
                }
            }
        },
        "1": {
            "ClassEvt": "1",
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
