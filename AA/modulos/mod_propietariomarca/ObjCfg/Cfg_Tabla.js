function CfgTabla(id,Param){
var ret={};

ret["TBL_Propietario"]={
    "id": "TBL_Propietario",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_Propietario",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "PlainText",
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSNombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "PlainText",
            "Label": "Nombre",
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
            "IdObj": "PlainText",
            "Label": "Estado",
            "ClassEvt": "VerMarcas",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "BtnMarcas",
            "Orden": "4",
            "Label": "Agregar Marcas",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "Null",
            "Valid": {},
            "Param": {},
            "ClassEvt": "VerMarcas",
            "Style": {},
            "CssClass": "Transp_Naranja1"
        },
        "4": {
            "id": "Borrar",
            "Orden": "3",
            "Label": "Borrar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "Null",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Borrar",
            "Style": {},
            "CssClass": "Transp_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "VerMarcas",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_PropietarioSelecto"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_PropMarca"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_CambiarEstado_0-1"
                }
            }
        },
        "1": {
            "ClassEvt": "Borrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_Propietario"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Propietario"
                }
            }
        }
    }
};
ret["TBL_PropietarioMarca"]={
    "id": "TBL_PropietarioMarca",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Propietario",
    "IdSource": "DS_PropietarioMarca",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSidMarca",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSidMarca",
            "IdObj": "Hidden",
            "Label": "IdMarca",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSidProp",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSidProp",
            "IdObj": "Hidden",
            "Label": "IdProp",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSMarca",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSMarca",
            "IdObj": "PlainText",
            "Label": "Marca",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSPropietario",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSPropietario",
            "IdObj": "Hidden",
            "Label": "Propietario",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "5": {
            "id": "Estado",
            "Orden": "95",
            "Label": "Estado",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DSPMEstado",
            "Valid": {},
            "Param": {},
            "Value": "Activo",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "6": {
            "id": "Borrar",
            "Orden": "6",
            "Label": "Borrar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "Null",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Borrar",
            "Style": {},
            "CssClass": "Transp_Rojo1 "
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Borrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItem_PropMarca"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_PropMarca"
                }
            }
        }
    }
};
ret["TBL_ListaMarcas"]={
    "id": "TBL_ListaMarcas",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ListaMarcas",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "99",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSNombre",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "PlainText",
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "Seleccionar",
            "Orden": "1",
            "Label": "Agregar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "Null",
            "Valid": {},
            "Param": {},
            "ClassEvt": "InsertMarca",
            "Style": {},
            "CssClass": "Transp_Azul2"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "InsertMarca",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_PropMarca"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_PropMarca"
                }
            }
        }
    }
};
ret["TBL_ABMMarcas"]={
    "id": "TBL_ABMMarcas",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ListaMarcas",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "PlainText",
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSNombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "PlainText",
            "Label": "Nombre",
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
            "IdObj": "PlainText",
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "editar",
            "Orden": "3",
            "Label": "Editar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "Null",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Editar",
            "Style": {},
            "CssClass": "Transp_Azul2"
        },
        "4": {
            "id": "Borrar",
            "Orden": "4",
            "Label": "Borrar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "Null",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Borrar",
            "Style": {},
            "CssClass": "Transp_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Editar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditABMMarcas"
                }
            }
        },
        "1": {
            "ClassEvt": "Borrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_ABMMarcas"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ABMMarcas"
                }
            }
        }
    }
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
