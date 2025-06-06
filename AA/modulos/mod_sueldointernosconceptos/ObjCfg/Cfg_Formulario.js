function CfgFormulario(id,Param){
var ret={};

ret["FRM_AltaSueldoIntConcepto"]={
    "id": "FRM_AltaSueldoIntConcepto",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_SueldoIntConcepto",
    "Tipo": "Vertical",
    "IdSource": "DS_SueldoIntConcepto",
    "CfgItems": {
        "0": {
            "id": "DSdescripcion",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSdescripcion",
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
            "id": "DSvalorunitario",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSvalorunitario",
            "IdObj": "InputNumber",
            "Requerido": "1",
            "Label": "valor unitario",
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
        "3": {
            "id": "DStipo",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DStipo",
            "IdObj": "ComboStaticVal",
            "Requerido": "1",
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
                    "IdEvt": "EVT_ST_Buscar_SueldoIntConcepto"
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
ret["FRM_EditarSueldoIntConcepto"]={
    "id": "FRM_EditarSueldoIntConcepto",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_SueldoIntConcepto",
    "Tipo": "Vertical",
    "IdSource": "DS_SueldoIntConcepto",
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
            "id": "DSdescripcion",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSdescripcion",
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
            "id": "DSvalorunitario",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSvalorunitario",
            "IdObj": "InputNumber",
            "Requerido": "1",
            "Label": "valor unitario",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSestado",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "ComboStaticVal",
            "Requerido": "0",
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
        "4": {
            "id": "DStipo",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DStipo",
            "IdObj": "ComboStaticVal",
            "Requerido": "1",
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
                    "IdEvt": "EVT_ST_Buscar_SueldoIntConcepto"
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
ret["FRM_PersonalSelecto"]={
    "id": "FRM_PersonalSelecto",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {
        "0": {
            "Prop": "",
            "Value": ""
        }
    },
    "Tipo": "Vertical",
    "IdSource": "DS_Personal",
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
            "id": "DSp_Nombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSp_Nombre",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Min-width",
                    "Value": "260px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSp_Apellido",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSp_Apellido",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Apellido",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {},
    "CfgEventos": {
        "0": {
            "ClassEvt": "TraerDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_idpersonal"
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
