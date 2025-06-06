function CfgSuperTabla(id,Param){
var ret={};

ret["ST_proveed"]={
    "id": "ST_proveed",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "lista de proveedores",
    "idTabla": "TBL_proveed",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "ST_BusqFull",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Orden": "0",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "Fill_Azulclaro",
                "Style": {}
            },
            "1": {
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Orden": "1",
                "Label": "Nuevo",
                "ClassEvt": "EvtNuevoReg",
                "CssClass": "Fill_VioletaPastel",
                "Style": {}
            }
        }
    },
    "Footer": {},
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {
            "0": {
                "idSrc": "DSid",
                "Label": "id",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {},
                "Orden": 0
            },
            "1": {
                "idSrc": "DSRazonSocial",
                "Label": "RazonSocial",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {},
                "Orden": 1
            },
            "2": {
                "idSrc": "DSDireccion",
                "Label": "Direccion",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {},
                "Orden": 2
            }
        },
        "FiltroAvz": {
            "0": {
                "idSrc": "DSid",
                "Label": "id",
                "Orden": 0
            },
            "1": {
                "idSrc": "DSDireccion",
                "Label": "Direccion",
                "Orden": 1
            },
            "2": {
                "idSrc": "DSestado",
                "Label": "estado",
                "Orden": 2
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSid",
                "Label": "id"
            },
            "1": {
                "idSrc": "DSRazonSocial",
                "Label": "RazonSocial"
            },
            "2": {
                "idSrc": "DSDireccion",
                "Label": "Direccion"
            },
            "3": {
                "idSrc": "DSTelefono",
                "Label": "Telefono"
            },
            "4": {
                "idSrc": "DSMail",
                "Label": "Mail"
            },
            "5": {
                "idSrc": "DSestado",
                "Label": "estado"
            }
        },
        "Param": {
            "0": {
                "idSrc": "DsLimite",
                "Label": "Limite",
                "Value": "100"
            }
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtNuevoReg",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_Altaproveed"
                }
            }
        }
    }
};
ret["ST_compra"]={
    "id": "ST_compra",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "",
    "idTabla": "TBL_compra",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {},
        "Ctrl": {}
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {
            "0": {
                "Orden": 0,
                "idSrc": "DSirc_cantidad_recibida",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": 1,
                "idSrc": "",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "a",
                "Label": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {},
        "Orden": {},
        "Param": {
            "0": {
                "idSrc": "DSLimite",
                "Label": "Limite",
                "Value": "100"
            }
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
