function CfgTabla(id,Param){
var ret={};

ret["TBL_proveed"]={
    "id": "TBL_proveed",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_proveed",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
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
            "id": "",
            "Orden": 1,
            "Label": "",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "2": {
            "id": "DSMail",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSMail",
            "IdObj": "PlainText",
            "Label": "Mail",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
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
                    "IdEvt": "EVT_DG_Iniciar_Editarproveed"
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
                    "IdEvt": "EVT_ST_Buscar_proveed"
                }
            }
        }
    }
};
ret["TBL_compra"]={
    "id": "TBL_compra",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_compra",
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
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSirc_cantidad_recibida",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSirc_cantidad_recibida",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Irc Cantidad Recibida",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSdiasUltCompra",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSdiasUltCompra",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "DiasUltCompra",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        }
    },
    "CfgEventos": {}
};
ret["TBL_ComprasOrdenesItems"]={
    "id": "TBL_ComprasOrdenesItems",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ComprasOrdenesItems",
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
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSrec_clave",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSrec_clave",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "col2",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSirc_cantidad_recibida",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSirc_cantidad_recibida",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "col3",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSUnidPedida",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSUnidPedida",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "col4",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSPackPedido",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSPackPedido",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "col5",
            "ClassEvt": "",
            "Value": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
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
