function CfgSuperTabla(id,Param){
var ret={};

ret["ST_ListaUsuariosRO"]={
    "id": "ST_ListaUsuariosRO",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Lista Usuarios",
    "idTabla": "TBL_ListaUsuariosRO",
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
                "ClassEvt": "NuevoReg",
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
                "idSrc": "DSnombre",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Nombre",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "idSrc": "DSclave",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Clave",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "idSrc": "DSnombre",
                "Label": "Nombre"
            },
            "1": {
                "idSrc": "DSclave",
                "Label": "Clave"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSnombre",
                "Label": "Nombre"
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
            "ClassEvt": "NuevoReg",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaUsr"
                }
            }
        },
        "1": {
            "ClassEvt": "ModalQuery",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_ModalQuery_This"
                }
            }
        },
        "2": {
            "ClassEvt": "BuscarHeader",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
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
