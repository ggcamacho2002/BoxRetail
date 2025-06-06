function CfgTabla(id,Param){
var ret={};

ret["TBL_ListaModulos"]={
    "id": "TBL_ListaModulos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_AppModulos",
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
            "Valid": {},
        },
        "1": {
            "id": "DSseccion",
            "Tipo": "Fld",
            "idSrc": "DSseccion",
            "IdObj": "PlainText",
            "Label": "Seccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {},
        },
        "2": {
            "id": "DSsubseccion",
            "Tipo": "Fld",
            "idSrc": "DSsubseccion",
            "IdObj": "PlainText",
            "Label": "Subseccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {},
        },
        "3": {
            "id": "DStitulo",
            "Tipo": "Fld",
            "idSrc": "DStitulo",
            "IdObj": "PlainText",
            "Label": "Titulo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {},
        },
        "4": {
            "id": "DSmodulo",
            "Tipo": "Fld",
            "idSrc": "DSmodulo",
            "IdObj": "PlainText",
            "Label": "Modulo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {},
        },
        "5": {
            "id": "DSorden_seccion",
            "Tipo": "Fld",
            "idSrc": "DSorden_seccion",
            "IdObj": "PlainText",
            "Label": "Orden Seccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {},
        },
        "6": {
            "id": "DSorden_subseccion",
            "Tipo": "Fld",
            "idSrc": "DSorden_subseccion",
            "IdObj": "PlainText",
            "Label": "Orden Subseccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {},
        },
        "7": {
            "id": "DSorden_modulo",
            "Label": "Orden Modulo",
            "Tipo": "Fld",
            "idSrc": "DSorden_modulo",
            "IdObj": "PlainText",
            "Valid": {},
            "Param": {},
            "ClassEvt": "",
            "Style": {},
            "CssClass": "",
            "Orden": 7
        },
        "8": {
            "id": "DSestado",
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "PlainText",
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {},
            "Orden": 8
        },
        "9": {
            "id": "Editar",
            "Label": "Editar",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Valid": {},
            "Param": {},
            "ClassEvt": "Editar",
            "Style": {},
            "CssClass": "Transp_Azul2",
            "Orden": 9
        },
        "10": {
            "id": "Borrar",
            "Label": "Borrar",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Valid": {},
            "Param": {},
            "ClassEvt": "Borrar",
            "Style": {},
            "CssClass": "Transp_Rojo1",
            "Orden": 10
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Editar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditMod"
                }
            }
        },
        "1": {
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
                    "IdEvt": "EVT_ST_Buscar_ListMod"
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
