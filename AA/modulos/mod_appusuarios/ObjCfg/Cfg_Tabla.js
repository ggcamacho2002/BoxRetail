function CfgTabla(id,Param){
var ret={};

ret["TBL_ListaUsuariosRO"]={
    "id": "TBL_ListaUsuariosRO",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "IdSource": "DS_AppUsuarios",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
           "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "DSid",
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
            "id": "DSclave",
           "Tipo": "Fld",
            "idSrc": "DSclave",
            "IdObj": "PlainText",
            "Label": "Clave",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSestado",
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
        "4": {
            "id": "Editar",
            "Label": "Editar",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Valid": {},
            "Param": {},
            "ClassEvt": "IniDialogEditar",
            "Style": {},
            "CssClass": "Transp_Azul2"
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
            "CssClass": "Transp_Rojo1"
        },
        "6": {
            "id": "Rol",
            "Label": "Rol",
            "Tipo": "Fld",
            "idSrc": "DSnombrerol",
            "IdObj": "PlainText",
            "Valid": {},
            "Param": {},
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "IniDialogEditar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditUsr"
                }
            }
        },
        "1": {
            "ClassEvt": "Borrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_ListUsr"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListUsr"
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
