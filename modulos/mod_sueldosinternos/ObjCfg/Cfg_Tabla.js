function CfgTabla(id,Param){
var ret={};

ret["TBL_Personal"]={
    "id": "TBL_Personal",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_Personal",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
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
            "id": "DSp_Nombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSp_Nombre",
            "IdObj": "PlainText",
            "Label": "Nombre",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSp_Apellido",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSp_Apellido",
            "IdObj": "PlainText",
            "Label": "Apellido",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "Liquidar",
            "Orden": "",
            "Label": "Liquidar Sueldo",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "vistaLiqManual",
            "Style": {},
            "CssClass": "Transp_Naranja1"
        },
        "4": {
            "id": "ListaLiquidaciones",
            "Orden": "4",
            "Label": "Lista Liquidaciones",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "ListadoLiquidaciones",
            "Style": {},
            "CssClass": "Transp_Verde1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "vistaLiqManual",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_idPersonal"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_LiquidacionManual"
                }
            },
        },
        "1": {
            "ClassEvt": "ListadoLiquidaciones",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_idPersonal"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_ListadoLiquidaciones"
                }
            }
        }
    }
};
ret["TBL_LiquidacionItems"]={
    "id": "TBL_LiquidacionItems",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_LiquidacionItems",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
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
            "id": "DSidsueldointerno",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSidsueldointerno",
            "IdObj": "Hidden",
            "Label": "idsueldointerno",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSdetalle",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSdetalle",
            "IdObj": "PlainText",
            "Label": "detalle",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSunidades",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSunidades",
            "IdObj": "PlainText",
            "Label": "unidades",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSvalorunitario",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSvalorunitario",
            "IdObj": "PlainText",
            "Label": "valor unitario",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "5": {
            "id": "DSremunera",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSremunerativo",
            "IdObj": "PlainText",
            "Label": "Remunerativo",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "tipo",
            "Orden": "2",
            "Label": "tipo",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DStipo",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "7": {
            "id": "DSdescuento",
            "Orden": "7",
            "Label": "descuento",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSdescuento",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {}
};
ret["TBL_LiqItemsImprimir"]={
    "id": "TBL_LiqItemsImprimir",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_LiquidacionItems",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DStipo",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DStipo",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "tipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSdetalle",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSdetalle",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "detalle",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSvalorunitario",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSvalorunitario",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "valor unit.",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSremunerativo",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSremunerativo",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "remunerativo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSdescuento",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSdescuento",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "descuento",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSidsueldointerno",
            "Orden": "5",
            "Label": "DSidsueldointerno",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DSidsueldointerno",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {}
};
ret["TBL_ListaLiquidaciones"]={
    "id": "TBL_ListaLiquidaciones",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_ListaLiquidaciones",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
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
            "id": "DSidpersonal",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSidpersonal",
            "IdObj": "Hidden",
            "Label": "idpersonal",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DStotal",
            "Orden": "10",
            "Tipo": "Fld",
            "idSrc": "DStotal",
            "IdObj": "PlainText",
            "Label": "total",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSfecha",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSfecha",
            "IdObj": "PlainText",
            "Label": "fecha",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSestado",
            "Orden": "3",
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
        "5": {
            "id": "DSantiguedad",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSantiguedad",
            "IdObj": "PlainText",
            "Label": "antiguedad",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "DShsextra",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DShsextra",
            "IdObj": "PlainText",
            "Label": "hs extra",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "7": {
            "id": "DSinasistencias",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSinasistencias",
            "IdObj": "PlainText",
            "Label": "inasistencia",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "8": {
            "id": "DSadelantos",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSadelantos",
            "IdObj": "PlainText",
            "Label": "adelantos",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "9": {
            "id": "DSdescadelanto",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSdescadelanto",
            "IdObj": "PlainText",
            "Label": "desc. adelanto",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "10": {
            "id": "DSdiastrabajados",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DSdiastrabajados",
            "IdObj": "PlainText",
            "Label": "dias trab.",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "11": {
            "id": "Eliminar",
            "Orden": "11",
            "Label": "Eliminar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "EliminarLiquidacion",
            "Style": {},
            "CssClass": "Transp_Rojo1"
        },
        "12": {
            "id": "Imprimir",
            "Orden": "12",
            "Label": "Imprimir",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Imprimir",
            "Style": {},
            "CssClass": "Transp_Verde1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EliminarLiquidacion",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_EliminarLiquidacion"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ListaLiquidaciones"
                }
            }
        },
        "1": {
            "ClassEvt": "Imprimir",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_idsueldointerno"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_ImprimeLiqManual"
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
