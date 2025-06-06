function CfgSuperTabla(id,Param){
var ret={};

ret["ST_ProductosPrecios"]={
    "id": "ST_ProductosPrecios",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Control Precios",
    "idTabla": "TBL_ProductosPrecios",
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
                "Label": "Busqueda Avanzada",
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
                "Orden": "",
                "idSrc": "DSNombreProducto",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Producto",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "",
                "idSrc": "DSsector",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Sector",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "Orden": "",
                "idSrc": "DSCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Categoria",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "Orden": "",
                "idSrc": "DSSubCategoria",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "SubCategoria",
                "CssClass": "",
                "Style": {}
            },
            "4": {
                "Orden": "",
                "idSrc": "DSTipo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Tipo",
                "CssClass": "",
                "Style": {}
            },
            "5": {
                "Orden": "",
                "idSrc": "DSMarca",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Marca",
                "CssClass": "",
                "Style": {}
            },
            "6": {
                "Orden": "",
                "idSrc": "DSPropietario",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Propietario",
                "CssClass": "",
                "Style": {}
            },
            "7": {
                "Orden": "",
                "idSrc": "DSEstadoProducto",
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
                "Orden": "",
                "idSrc": "DSNombreProducto",
                "Label": "Producto"
            },
            "1": {
                "Orden": "",
                "idSrc": "DSsector",
                "Label": "Sector"
            },
            "2": {
                "Orden": "",
                "idSrc": "DSCategoria",
                "Label": "Categoria"
            },
            "3": {
                "Orden": "",
                "idSrc": "DSSubCategoria",
                "Label": "SubCategoria"
            },
            "4": {
                "Orden": "",
                "idSrc": "DSTipo",
                "Label": "Tipo"
            },
            "5": {
                "Orden": "",
                "idSrc": "DSMarca",
                "Label": "Marca"
            },
            "6": {
                "Orden": "",
                "idSrc": "DSPropietario",
                "Label": "Propietario"
            },
            "7": {
                "Orden": "",
                "idSrc": "DSEstadoProducto",
                "Label": "Estado"
            }
        },
        "Orden": {
            "0": {
                "Orden": "",
                "idSrc": "DSNombreProducto",
                "Label": "Producto"
            },
            "1": {
                "Orden": "",
                "idSrc": "DSsector",
                "Label": "Sector"
            },
            "2": {
                "Orden": "",
                "idSrc": "DSCategoria",
                "Label": "Categoria"
            },
            "3": {
                "Orden": "",
                "idSrc": "DSSubCategoria",
                "Label": "SubCategoria"
            },
            "4": {
                "Orden": "",
                "idSrc": "DSTipo",
                "Label": "Tipo"
            },
            "5": {
                "Orden": "",
                "idSrc": "DSMarca",
                "Label": "Marca"
            },
            "6": {
                "Orden": "",
                "idSrc": "DSPropietario",
                "Label": "Propietario"
            },
            "7": {
                "Orden": "",
                "idSrc": "DSEstadoProducto",
                "Label": "Estado"
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
    "CfgEventos": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
