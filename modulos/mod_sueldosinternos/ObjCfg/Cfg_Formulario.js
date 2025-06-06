function CfgFormulario(id,Param){
var ret={};

ret["FRM_PersonalSelecto"]={
    "id": "FRM_PersonalSelecto",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
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
        },
        "3": {
            "id": "Antiguedad",
            "Orden": 3,
            "idSrc": "DSAntiguedad",
            "Label": "Antiguedad",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "4": {
            "id": "Dias",
            "Orden": 4,
            "idSrc": "",
            "Label": "Liq. Dias",
            "Tipo": "Fld",
            "IdObj": "InputNumber",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "15",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "5": {
            "id": "HsExtra",
            "Orden": 5,
            "idSrc": "",
            "Label": "Hs Extra",
            "Tipo": "Fld",
            "IdObj": "InputNumber",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "0",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "6": {
            "id": "INASISTENCIAS",
            "Orden": 6,
            "idSrc": "",
            "Label": "INASISTENCIAS",
            "Tipo": "Fld",
            "IdObj": "InputNumber",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "0",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "7": {
            "id": "Adelantos",
            "Orden": 7,
            "idSrc": "",
            "Label": "Adelantos",
            "Tipo": "Fld",
            "IdObj": "InputNumber",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "0",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "8": {
            "id": "DescAdelantos",
            "Orden": 8,
            "idSrc": "",
            "Label": "Desc. Adelanto",
            "Tipo": "Fld",
            "IdObj": "InputNumber",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "0",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "Liquidar",
            "Orden": "1",
            "Label": "Liquidar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Liquidar",
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
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_PersonalSelecto"
                }
            },
        },
        "1": {
            "ClassEvt": "Liquidar",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_SueldoInt"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_LiquidacionItems"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_CambiarModoRO_PersonalSelecto"
                },
                "3": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_CompletarFooter_LiquidacionItems"
                },
                "4": {
                    "Orden": "4",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_HablitarBotonesFooter"
                }
            },
        }
    }
};
ret["FRM_PersonalSelectoImpresion"]={
    "id": "FRM_PersonalSelectoImpresion",
    "TipoObjPadre": "Formulario",
    "IdObjPadre": "FRM_PersonalSelecto",
    "CssClass": "",
    "Style": {},
    "Tipo": "Horizontal",
    "IdSource": "DS_Personal",
    "CfgItems": {
        "0": {
            "id": "DSp_Nombre",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSp_Nombre",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSp_Apellido",
            "Orden": 1,
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
        },
        "2": {
            "id": "DSp_DNI",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSp_DNI",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "DNI",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSid",
            "Orden": "4",
            "idSrc": "DSid",
            "Label": "DSid",
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
    "Ctrl": {},
    "CfgEventos": {
        "0": {
            "ClassEvt": "TraerDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_PersonalSelectoImpresion"
                }
            },
        }
    }
};
ret["FRM_ListaPersonal"]={
    "id": "FRM_ListaPersonal",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
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
            "Style": {},
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
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_ListaPersonal"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ListaLiquidaciones"
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
