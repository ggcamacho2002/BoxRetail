function CfgTabla(id,Param){
var ret={};

ret["TBL_ListaManual"]={
    "id": "TBL_ListaManual",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_Personal",
    "Style": {},
    "CssClass": "",
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
            "Valid": {}
        },
        "1": {
            "id": "DSp_Nombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSp_Nombre",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSp_Apellido",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSp_Apellido",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Apellido",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "LiquidarSueldo",
            "Orden": "",
            "Label": "Liquidar Sueldo",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "VistaOneSueldo",
            "Style": {},
            "CssClass": "Transp_Naranja1"
        },
        "4": {
            "id": "",
            "Orden": "",
            "Label": "",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }

    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "VistaOneSueldo",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_idPersonal"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_OneSueldo"
                }
            }
        }
    }
};
ret["TBL_SueldosLiquidacion"]={
    "id": "TBL_SueldosLiquidacion",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaManual",
    "IdSource": "DS_SueldosLiquidacion",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSconcepto",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSconcepto",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Concepto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DScodigo",
            "Orden": 2,
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
            "id": "DSsubtotaltipo",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSsubtotaltipo",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Subtotaltipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSformulaunidad",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSformulaunidad",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Formulaunidad",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSoperacion",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSoperacion",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Operacion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSformulavalorunit",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DSformulavalorunit",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Formulavalorunit",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "7": {
            "id": "DSestado",
            "Orden": 7,
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DSorden",
            "Orden": 8,
            "Tipo": "Fld",
            "idSrc": "DSorden",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Orden",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DStipo",
            "Orden": 9,
            "Tipo": "Fld",
            "idSrc": "DStipo",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Tipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        }
    },
    "CfgEventos": {}
};
ret["TBL_SueldoLiqItems"]={
    "id": "TBL_SueldoLiqItems",
    "TipoObjPadre": "Formulario",
    "IdObjPadre": "FRM_TotalesLiquidacion",
    "IdSource": "DS_SueldosLiqItems",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "calc(100vh - 202px)"
        }
    },
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
            "id": "DSidsueldoconfig",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSidsueldoconfig",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idsueldoconfig",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSunidades",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSunidades",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Unidades",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSvalorunitario",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSvalorunitario",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Valor Unitario",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSremunerativo",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSremunerativo",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Remunerativo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSnoremunerativo",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSnoremunerativo",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "No remunerativo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSdescuento",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSdescuento",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Descuento",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "7": {
            "id": "DSidliquidacion",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DSidliquidacion",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idliquidacion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DSconcepto",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSconcepto",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Concepto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
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
        }
    },
    "CfgEventos": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
