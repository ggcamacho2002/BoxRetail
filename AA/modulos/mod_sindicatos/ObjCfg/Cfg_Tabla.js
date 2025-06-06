function CfgTabla(id,Param){
var ret={};

ret["TBL_Sindicatos"]={
    "id": "TBL_Sindicatos",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_Sindicatos",
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
            "id": "DSNombre",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSNombre",
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
            "id": "Editar",
            "Orden": "3",
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
        "3": {
            "id": "Borrar",
            "Orden": "4",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Label": "Borrar",
            "ClassEvt": "EvtBorrar",
            "CssClass": "Transp_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "TablaBasicos",
            "Orden": "5",
            "Label": "Tabla Basicos",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "TablaBasicos",
            "Style": {},
            "CssClass": "Transp_Naranja1"
        },
        "5": {
            "id": "Porcentaje",
            "Orden": "2",
            "Label": "Porcentaje",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSPorcentaje",
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
            "ClassEvt": "EvtEditar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditarSindicatos"
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
                    "IdEvt": "EVT_ST_Buscar_Sindicatos"
                }
            }
        },
        "2": {
            "ClassEvt": "TablaBasicos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_Sindicato"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_SindicatoBasicos"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_idSindicato"
                },
                "3": {
                    "Orden": "4",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_SindicatosBasicos"
                }
            }
        }
    }
};
ret["TBL_SindicatosBasicos"]={
    "id": "TBL_SindicatosBasicos",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_SindicatosBasicos",
    "CfgItems": {
        "0": {
            "id": "DSid",
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
            "id": "DScategoria",
            "Tipo": "Fld",
            "idSrc": "DScategoria",
            "IdObj": "PlainText",
            "Label": "categoria",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSbasico",
            "Tipo": "Fld",
            "idSrc": "DSbasico",
            "IdObj": "InputText",
            "Label": "basico",
            "ClassEvt": "GuardarItemBasico",
            "Requerido": "1",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSidsindicato",
            "Tipo": "Fld",
            "idSrc": "DSidsindicato",
            "IdObj": "Hidden",
            "Label": "idsindicato",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSNombreSindicato",
            "Tipo": "Fld",
            "idSrc": "DSNombreSindicato",
            "IdObj": "Hidden",
            "Label": "NombreSindicato",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "5": {
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
        "6": {
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
                    "IdEvt": "EVT_DG_Iniciar_EditarSindicatosBasicos"
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
                    "IdEvt": "EVT_ST_Buscar_SindicatosBasicos"
                }
            }
        },
        "2": {
            "ClassEvt": "GuardarItemBasico",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "change",
                    "IdEvt": "EVT_TBL_UpdateOneField_SindicatosBasico"
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
