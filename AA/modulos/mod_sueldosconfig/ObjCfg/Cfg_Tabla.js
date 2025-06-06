function CfgTabla(id,Param){
var ret={};

ret["TBL_SueldosItemsConfig"]={
    "id": "TBL_SueldosItemsConfig",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_SueldosItemsConfig",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "PlainText",
            "Label": "id",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSconcepto",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSconcepto",
            "IdObj": "PlainText",
            "Label": "concepto",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DScodigo",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DScodigo",
            "IdObj": "PlainText",
            "Label": "codigo",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSsubtotaltipo",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSsubtotaltipo",
            "IdObj": "PlainText",
            "Label": "subtotaltipo",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSformulaunidad",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSformulaunidad",
            "IdObj": "PlainText",
            "Label": "formulaunidad",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "5": {
            "id": "DSoperacion",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSoperacion",
            "IdObj": "PlainText",
            "Label": "operacion",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "DSformulavalorunit",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSformulavalorunit",
            "IdObj": "PlainText",
            "Label": "formulavalorunit",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "7": {
            "id": "DSestado",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "PlainText",
            "Label": "estado",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "8": {
            "id": "DSorden",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSorden",
            "IdObj": "PlainText",
            "Label": "orden",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "9": {
            "id": "DStipo",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DStipo",
            "IdObj": "PlainText",
            "Label": "tipo",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "10": {
            "id": "Editar",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Label": "Editar",
            "ClassEvt": "EvtEditar",
            "CssClass": "Transp_Azul2",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "11": {
            "id": "Borrar",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Label": "Borrar",
            "ClassEvt": "EvtBorrar",
            "CssClass": "Transp_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtEditar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditarSueldosItemsConfig"
                }
            }
        },
        "1": {
            "ClassEvt": "EvtBorrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_SueldosItemsConfig"
                }
            }
        }
    }
};
ret["TBL_SueldosParam"]={
    "id": "TBL_SueldosParam",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_SueldosParam",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSconcepto",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSconcepto",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Concepto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "White-space",
                    "Value": "nowrap"
                }
            },
            "Valid": {}
        },
        "2": {
            "id": "DScodigo",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DScodigo",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Codigo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DStipo",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DStipo",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Tipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSorden",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSorden",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Orden",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSestado",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        }
    },
    "CfgEventos": {}
};
ret["TBL_Formulas"]={
    "id": "TBL_Formulas",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_SueldosItemsConfig",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSconcepto",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSconcepto",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "concepto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DScodigo",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DScodigo",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "codigo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSformulaunidad",
            "Orden": "3",
            "Tipo": "Ctrl",
            "idSrc": "DSformulaunidad",
            "IdObj": "BotonValor",
            "Param": {},
            "Label": "formulaunidad",
            "ClassEvt": "DialogUnidad",
            "CssClass": "Transp_Naranja1",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSformulavalorunit",
            "Orden": "4",
            "Label": "VALOR UNITARIO",
            "Tipo": "Ctrl",
            "IdObj": "BotonValor",
            "idSrc": "DSformulavalorunit",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "DialogValUnitario",
            "Style": {},
            "CssClass": "Transp_Verde1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "DialogUnidad",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_FormulaUnidad"
                }
            }
        },
        "1": {
            "ClassEvt": "DialogValUnitario",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_FormulaValorUnitario"
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
