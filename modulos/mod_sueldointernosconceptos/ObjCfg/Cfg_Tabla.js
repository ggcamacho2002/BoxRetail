function CfgTabla(id,Param){
var ret={};

ret["TBL_SueldoIntConcepto"]={
    "id": "TBL_SueldoIntConcepto",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_SueldoIntConcepto",
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
            "id": "DSdescripcion",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSdescripcion",
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
            "id": "DSvalorunitario",
            "Orden": "2",
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
        "3": {
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
        "4": {
            "id": "DStipo",
            "Orden": "4",
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
                    "IdEvt": "EVT_DG_Iniciar_EditarSueldoIntConcepto"
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
                    "IdEvt": "EVT_ST_Buscar_SueldoIntConcepto"
                }
            }
        }
    }
};
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
            "id": "DSp_DNI",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSp_DNI",
            "IdObj": "PlainText",
            "Label": "DNI",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "AgregarConcepto",
            "Orden": "",
            "Label": "Agregar Concepto",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "vistapersconcepto",
            "Style": {},
            "CssClass": "Transp_Naranja1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "vistapersconcepto",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_idPersonal"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_PersonalConcepto"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_PersConcepto"
                }
            }
        }
    }
};
ret["TBL_AllConceptos"]={
    "id": "TBL_AllConceptos",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_AllConceptos",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "1",
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
            "id": "DSdescripcion",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSdescripcion",
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
        "3": {
            "id": "Agregar",
            "Orden": "0",
            "Label": "Agregar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "InsertConsepto",
            "Style": {},
            "CssClass": "Transp_Azul2"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "InsertConsepto",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_PersConcepto"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_PersConcepto"
                }
            }
        }
    }
};
ret["TBL_PersConcepto"]={
    "id": "TBL_PersConcepto",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_PersConcepto",
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
            "id": "DSidpersonal",
            "Orden": "2",
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
            "id": "DSidconcepto",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSidconcepto",
            "IdObj": "Hidden",
            "Label": "idconcepto",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSestado",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "Hidden",
            "Label": "estado",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSConcepto",
            "Orden": "1",
            "Label": "Concepto",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSConcepto",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "5": {
            "id": "Borrar",
            "Orden": "",
            "Label": "borrar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "borrar",
            "Style": {},
            "CssClass": "Transp_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "borrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_PersConcepto"
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
