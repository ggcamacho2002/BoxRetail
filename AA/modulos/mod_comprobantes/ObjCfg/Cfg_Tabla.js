function CfgTabla(id,Param){
var ret={};

ret["TBL_Comprobante"]={
    "id": "TBL_Comprobante",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {
        "0": {
            "Prop": "",
            "Value": ""
        }
    },
    "CssClass": "",
    "IdSource": "DS_Comprobante",
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
            "id": "DScomdescripcion",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DScomdescripcion",
            "IdObj": "PlainText",
            "Label": "Descripcion",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DScomestado",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DScomestado",
            "IdObj": "PlainText",
            "Label": "estado",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
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
        "4": {
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
                    "IdEvt": "EVT_DG_Iniciar_EditarComprobante"
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
                    "IdEvt": "EVT_ST_Buscar_Comprobante"
                }
            }
        }
    }
};
ret["TBL_ComprobanteTipo"]={
    "id": "TBL_ComprobanteTipo",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_ComprobanteTipo",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "PlainText",
            "Label": "Id",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSTic_descripcion",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSTic_descripcion",
            "IdObj": "PlainText",
            "Label": "descripcion",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSTic_estado",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSTic_estado",
            "IdObj": "PlainText",
            "Label": "estado",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSCom_clave",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSCom_clave",
            "IdObj": "Hidden",
            "Label": "Com_clave",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSTic_DeudorAcreedor",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSTic_DeudorAcreedor",
            "IdObj": "PlainText",
            "Label": "Deudor\/Acreedor",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "5": {
            "id": "DSTic_numero",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSTic_numero",
            "IdObj": "PlainText",
            "Label": "Numero",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "idComprobante",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "idComprobante",
            "IdObj": "Hidden",
            "Label": "Comprobante",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "7": {
            "id": "DSCom_descripcion",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSCom_descripcion",
            "IdObj": "PlainText",
            "Label": "Comprobante",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "8": {
            "id": "Editar",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Label": "Editar",
            "ClassEvt": "EvtEditar",
            "CssClass": "Transp_Azul2",
            "Style": {},
            "Param": {},
            "Valid": {},
            "Orden": "9"
        },
        "9": {
            "id": "Borrar",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Label": "Borrar",
            "ClassEvt": "EvtBorrar",
            "CssClass": "Transp_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {},
            "Orden": "10"
        },
        "10": {
            "id": "DStic_orden",
            "Orden": "8",
            "Label": "orden",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DStic_orden",
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
                    "IdEvt": "EVT_DG_Iniciar_EditarComprobanteTipo"
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
                    "IdEvt": "EVT_ST_Buscar_ComprobanteTipo"
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
