function CfgSuperTabla(id,Param){
var ret={};

ret["ST_Proveedores"]={
    "id": "ST_Proveedores",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Lista de Proveedores",
    "idTabla": "TBL_Proveedores",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "1",
                "idSrc": "DSRazonSocial",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "BuscarHeader",
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
    "CfgEventos": {
        "0": {
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
ret["ST_Productos"]={
    "id": "ST_Productos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Lista Productos",
    "idTabla": "TBL_Productos",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "1",
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
                "Orden": "1",
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "",
                "CssClass": "",
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
                "Orden": "0",
                "idSrc": "DSNombre",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Nombre",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "8",
                "idSrc": "DSBarcode",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Barcode",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "Orden": "1",
                "idSrc": "DSmarca",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Marca",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "Orden": "3",
                "idSrc": "DSSector",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Sector",
                "CssClass": "",
                "Style": {}
            },
            "4": {
                "Orden": "4",
                "idSrc": "DSCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Categoria",
                "CssClass": "",
                "Style": {}
            },
            "5": {
                "Orden": "5",
                "idSrc": "DSSubCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "SubCategoria",
                "CssClass": "",
                "Style": {}
            },
            "6": {
                "Orden": "6",
                "idSrc": "DSTipo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Tipo",
                "CssClass": "",
                "Style": {}
            },
            "7": {
                "Orden": "2",
                "idSrc": "DSPropietario",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Propietario",
                "CssClass": "",
                "Style": {}
            },
         
        },
        "FiltroAvz": {
        },
        "Orden": {
            "0": {
                "Orden": "1",
                "idSrc": "DSNombre",
                "Label": "Nombre"
            },
         
        },
        "Param": {
            "0": {
                "idSrc": "DSLimite",
                "Label": "Limite",
                "Value": "100"
            },            
        }
    },
    "CfgEventos": {
        "0": {
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
ret["ST_ProveedorProducto"]={
    "id": "ST_ProveedorProducto",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Productos Adheridos",
    "idTabla": "TBL_ProveedorProducto",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "Buscar",
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "STBusqFull",
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
    "CfgEventos": {
        "0": {
            "ClassEvt": "STBusqFull",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ProveedorProducto"
                }
            }
        }
    }
};
ret["ST_ExcelProvProd"]={
    "id": "ST_ExcelProvProd",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Excel Seleccionado",
    "idTabla": "TBL_ExcelProvProd",
    "ModoInicio": "EDIT",
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

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
