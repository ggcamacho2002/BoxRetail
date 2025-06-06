function CfgSuperTabla(id,Param){
var ret={};

ret["ST_ListaModulos"]={
    "id": "ST_ListaModulos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Lista Modulos",
    "idTabla": "TBL_ListaModulos",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "BuscarHeader",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Nuevo",
                "ClassEvt": "DialogAlta",
                "CssClass": "Fill_Violeta2",
                "Style": {}
            }
        }
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {
            "0": {
                "idSrc": "DSseccion",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Seccion",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "idSrc": "DSsubseccion",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "SubSeccion",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "idSrc": "DStitulo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Titulo",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "idSrc": "DSmodulo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Modulo",
                "CssClass": "",
                "Style": {}
            },
            "4": {
                "idSrc": "DSorden_seccion",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Seccion",
                "CssClass": "",
                "Style": {}
            },
            "5": {
                "idSrc": "DSorden_subseccion",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "SubSeccion",
                "CssClass": "",
                "Style": {}
            },
            "6": {
                "idSrc": "DSestado",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Estado",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "idSrc": "DSseccion",
                "Label": "Seccion"
            },
            "1": {
                "idSrc": "DSsubseccion",
                "Label": "SubSeccion"
            },
            "2": {
                "idSrc": "DStitulo",
                "Label": "Titulo"
            },
            "3": {
                "idSrc": "DSmodulo",
                "Label": "Modulo"
            }
        },
        "Orden": {
            "0": {
                "Orden": "0",
                "idSrc": "DSseccion",
                "Label": "Seccion"
            },
            "1": {
                "Orden": "1",
                "idSrc": "DSsubseccion",
                "Label": "DStitulo"
            },
            "2": {
                "Orden": "2",
                "idSrc": "DStitulo",
                "Label": "titulo"
            },
            "3": {
                "Orden": "3",
                "idSrc": "DSmodulo",
                "Label": "modulo"
            },
            "4": {
                "Orden": "4",
                "idSrc": "DSorden_seccion",
                "Label": "orden seccion"
            },
            "5": {
                "Orden": "5",
                "idSrc": "DSorden_subseccion",
                "Label": "orden subseccion"
            },
            "6": {
                "Orden": "6",
                "idSrc": "DSorden_modulo",
                "Label": "orden modulo"
            },
            "7": {
                "Orden": "7",
                "idSrc": "DSestado",
                "Label": "estado"
            }
        },
        "Param": {
            "0": {
                "idSrc": "DSLimite",
                "Label": "Limite",
                "Value": "100"
            }
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "DialogAlta",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaMod"
                }
            }
        },
        "1": {
            "ClassEvt": "ModalQuery",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_ModalQuery_ListMod"
                }
            }
        },
        "2": {
            "ClassEvt": "BuscarHeader",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_Buscar_This"
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
