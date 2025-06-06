function CfgTabla(id,Param){
var ret={};

ret["TBL_ListaRoles"]={
    "id": "TBL_ListaRoles",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_AppRoles",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
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
            "id": "DSnombre",
            "Tipo": "Fld",
            "idSrc": "DSnombre",
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
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "PlainText",
            "Label": "Estado",
            "ClassEvt": "Editar",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "Editar",
            "Label": "Editar",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Valid": {},
            "Param": {},
            "ClassEvt": "DialogAlta",
            "Style": {},
            "CssClass": "Transp_Azul2"
        },
        "4": {
            "id": "Borrar",
            "Label": "Borrar",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Valid": {},
            "Param": {},
            "ClassEvt": "Borrar",
            "Style": {},
            "CssClass": "Transp_Rojo1"
        },
        "5": {
            "id": "Modulos",
            "Label": "Modulos",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Valid": {},
            "Param": {},
            "ClassEvt": "RolModulos",
            "Style": {},
            "CssClass": "Transp_Naranja1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Editar",
            "Hilo": {}
        },
        "1": {
            "ClassEvt": "DialogAlta",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditRol"
                }
            }
        },
        "2": {
            "ClassEvt": "Borrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_ListaRol"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListaRol"
                }
            }
        },
        "3": {
            "ClassEvt": "RolModulos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_FillFrmRolSelecto"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_RolModulo"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_CambiarEstado_1-1"
                }
            }
        }
    }
};
ret["TBL_RolesModulos"]={
    "id": "TBL_RolesModulos",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaRoles",
    "IdSource": "DS_AppRolModulo",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
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
            "id": "DSidrol",
            "Tipo": "Fld",
            "idSrc": "DSidrol",
            "IdObj": "Hidden",
            "Label": "Idrol",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSidmodulo",
            "Tipo": "Fld",
            "idSrc": "DSidmodulo",
            "IdObj": "Hidden",
            "Label": "Idmodulo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSnombremodulo",
            "Tipo": "Fld",
            "idSrc": "DSnombremodulo",
            "IdObj": "Hidden",
            "Label": "Nombre Modulo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DStitulomodulo",
            "Label": "Titulo Modulo",
            "Tipo": "Fld",
            "idSrc": "DStitulomodulo",
            "IdObj": "PlainText",
            "Valid": {},
            "Param": {},
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "5": {
            "id": "Borrar",
            "Label": "Borrar",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Valid": {},
            "Param": {},
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
                    "IdEvt": "EVT_TBL_DelItemConfirm_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_RolModulo"
                }
            }
        }
    }
};
ret["TBL_ListaModulos"]={
    "id": "TBL_ListaModulos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ListaModulos",
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
            "id": "DSseccion",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSseccion",
            "IdObj": "PlainText",
            "Label": "Seccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSsubseccion",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSsubseccion",
            "IdObj": "PlainText",
            "Label": "Subseccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DStitulo",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DStitulo",
            "IdObj": "PlainText",
            "Label": "Titulo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "Agregar",
            "Orden": "4",
            "Label": "Agregar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "Null",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Agregar",
            "Style": {},
            "CssClass": "Transp_Azul2"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Agregar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_RolMod"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_RolModulo"
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
