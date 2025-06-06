function CfgSuperTabla(id,Param){
var ret={};

ret["ST_ListaProveedores"]={
    "id": "ST_ListaProveedores",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Lista Proveedores",
    "idTabla": "TBL_ListaProveedores",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "1",
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "ST_BusqFull",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "Orden": "1",
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Nuevo",
                "ClassEvt": "Nuevo",
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
        "FiltrosRap": {},
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
    "CfgEventos": {
        "0": {
            "ClassEvt": "Nuevo",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaProveedor"
                }
            }
        }
    }
};
ret["ST_ListaTasasImpuestos"]={
    "id": "ST_ListaTasasImpuestos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Tasas e Impuestos",
    "idTabla": "TBL_TasasImpuestos",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "1",
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "ST_BusqFull",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {}
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {},
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
ret["ST_ListaProveedorImp"]={
    "id": "ST_ListaProveedorImp",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaProveedores",
    "Titulo": "Impuestos Asignados",
    "idTabla": "TBL_ListaProveedorImp",
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
        "FiltrosRap": {},
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

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
