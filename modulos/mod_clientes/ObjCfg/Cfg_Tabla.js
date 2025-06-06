function CfgTabla(id,Param){
var ret={};

ret["TBL_ListaClientes"]={
    "id": "TBL_ListaClientes",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_Clientes",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSrazon_social",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSrazon_social",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Razon Social",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSdireccion",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSdireccion",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Direccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DStelefono",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DStelefono",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Telefono",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSmail",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSmail",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Mail",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSestado",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSnombre_adic",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DSnombre_adic",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Nombre Adicional",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "7": {
            "id": "Borrar",
            "Orden": "",
            "Label": "Borrar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "BORRAR",
            "Style": {},
            "CssClass": "Transp_Rojo1"
        },
        "8": {
            "id": "Editar",
            "Orden": "",
            "Label": "Editar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Editar",
            "Style": {},
            "CssClass": "Transp_Azul2"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "BORRAR",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ConfirmarEliminarCliente"
                }
            }
        },
        "1": {
            "ClassEvt": "Editar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_AbrirEditarCliente"
                }
            }
        },
        "2": {
            "ClassEvt": "AGREGAR",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_AbrirAltaCliente"
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
