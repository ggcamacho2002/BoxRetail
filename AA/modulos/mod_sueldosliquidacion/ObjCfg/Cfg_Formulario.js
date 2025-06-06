function CfgFormulario(id,Param){
var ret={};

ret["FRM_Variables"]={
    "id": "FRM_Variables",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Personal",
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
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSp_Nombre",
            "Orden": "1",
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
            "Orden": "2",
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
            "id": "Anio",
            "Orden": "3",
            "idSrc": "",
            "Label": "Anio",
            "Tipo": "Fld",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_anio"
                }
            },
            "Requerido": "1",
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "4": {
            "id": "Mes",
            "Orden": "4",
            "idSrc": "",
            "Label": "Mes",
            "Tipo": "Fld",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_meses"
                }
            },
            "Requerido": "1",
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "5": {
            "id": "exta50",
            "Orden": "7",
            "idSrc": "",
            "Label": "Horas Extras al 50%",
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
            "id": "Extra100",
            "Orden": "8",
            "idSrc": "",
            "Label": "Horas Extras al 100%",
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
            "id": "DiaTrabajado",
            "Orden": "6",
            "idSrc": "",
            "Label": "Dias Trabajados",
            "Tipo": "Fld",
            "IdObj": "InputNumber",
            "Param": {},
            "Requerido": "1",
            "Valid": {},
            "Value": "30",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "8": {
            "id": "FeriadosTrabajados",
            "Orden": "9",
            "idSrc": "",
            "Label": "Feriados Trabajados",
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
        "9": {
            "id": "Sindicato",
            "Orden": "10",
            "idSrc": "DSnombreSindicato",
            "Label": "Sindicato",
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
        "10": {
            "id": "Categoria",
            "Orden": "11",
            "idSrc": "DScategoria",
            "Label": "Categoria",
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
        "11": {
            "id": "porcsindicato",
            "Orden": "11",
            "idSrc": "DSPorcentaje",
            "Label": "% Sindicato",
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
        "12": {
            "id": "ObraSocial",
            "Orden": "14",
            "idSrc": "DSObraSocial",
            "Label": "Obra Social",
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
        "13": {
            "id": "adicionalZona",
            "Orden": "15",
            "idSrc": "",
            "Label": "Adicional Zona",
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
        "14": {
            "id": "Antiguedad",
            "Orden": "13",
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
        "15": {
            "id": "Basico",
            "Orden": "12",
            "idSrc": "DSBasico",
            "Label": "Basico",
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
        "16": {
            "id": "DSidSindicato",
            "Orden": "",
            "idSrc": "DSidSindicato",
            "Label": "idSindicato",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "17": {
            "id": "DSidcatSindicato",
            "Orden": "",
            "idSrc": "DSidcatSindicato",
            "Label": "DSidcatSindicato",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "18": {
            "id": "DSidObraSocial",
            "Orden": "16",
            "idSrc": "DSidObraSocial",
            "Label": "DSidObraSocial",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "19": {
            "id": "HorasxJornal",
            "Orden": "5",
            "idSrc": "DShorasxjornal",
            "Label": "Horas x Jornal",
            "Tipo": "Fld",
            "IdObj": "InputNumber",
            "Param": {},
            "Requerido": "1",
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "Liquidar",
            "Orden": "1",
            "Label": "Liquidar Sueldo",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "NuevaLiquidacion",
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
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_idPersonal"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_Scripts_Iniciar_AnioMesActual"
                }
            }
        },
        "1": {
            "ClassEvt": "NuevaLiquidacion",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_NuevaLiquidacion"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_GetBdXUltIdInsertado_TotLiquidacion"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_SueldoLiqItems"
                },
                "3": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_PreLiquidarSueldo"
                }
            }
        }
    }
};
ret["FRM_TotalesLiquidacion"]={
    "id": "FRM_TotalesLiquidacion",
    "TipoObjPadre": "Formulario",
    "IdObjPadre": "FRM_Variables",
    "CssClass": "",
    "Style": {},
    "Tipo": "Horizontal",
    "IdSource": "DS_SueldosLiquidacion",
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
            "id": "DSidpersonal",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSidpersonal",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idpersonal",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSremunerativos",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSremunerativos",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Remunerativos",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSnoremunerativos",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSnoremunerativos",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "No remunerativos",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSdescuentos",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSdescuentos",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Descuentos",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DSneto",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSneto",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Neto",
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
            "id": "Imprimir",
            "Orden": "2",
            "Label": "Imprimir",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "",
            "Style": {},
            "CssClass": "Transp_Naranja1 btnTotales Hiden"
        },
        "1": {
            "id": "Salir",
            "Orden": "3",
            "Label": "Salir",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "volver",
            "Style": {},
            "CssClass": "Transp_Verde1 btnTotales Hiden"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "volver",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Manual"
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
