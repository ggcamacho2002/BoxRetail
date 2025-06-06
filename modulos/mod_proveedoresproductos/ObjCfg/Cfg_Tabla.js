function CfgTabla(id,Param){
var ret={};

ret["TBL_Proveedores"]={
    "id": "TBL_Proveedores",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_Proveedores",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSRazonSocial",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSRazonSocial",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Razon Social",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSestado",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "CargaMasiva",
            "Orden": "3",
            "Label": "Carga Masiva Productos",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "CargaMasiva",
            "Style": {},
            "CssClass": "Transp_Naranja1"
        },
        "4": {
            "id": "CargaIndividual",
            "Orden": "5",
            "Label": "Carga Individual Productos",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "ProdIndividual",
            "Style": {},
            "CssClass": "Transp_Azul2"
        },
        "5": {
            "id": "MapeoProd",
            "Orden": "4",
            "Label": "Mapeo Productos",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": "Transp_Violeta1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "ProdIndividual",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_idProv"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_ProvProductos"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_Proveedor"
                },
                "3": {
                    "Orden": "4",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ProveedorProducto"
                },
                "4": {
                    "Orden": "4",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Productos"
                }
            }
        },
        "1": {
            "ClassEvt": "CargaMasiva",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_idProv"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_CargaMasiva"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_Proveedor"
                },
                "3": {
                    "Orden": "4",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ProveedorProducto"
                }
            }
        }
    }
};
ret["TBL_ProveedorProducto"]={
    "id": "TBL_ProveedorProducto",
    "TipoObjPadre": "Formulario",
    "IdObjPadre": "FRM_Proveedor",
    "IdSource": "DS_ProveedorProducto",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSidProv",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSidProv",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "IdProv",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSidProd",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSidProd",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "IdProd",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSestado",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSnombreProducto",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSnombreProducto",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Nombre Producto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "Borrar",
            "Orden": "",
            "Label": "Borrar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Borrar",
            "Style": {},
            "CssClass": "Transp_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
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
                    "IdEvt": "EVT_ST_BuscarByRelacion_ProveedorProducto"
                }
            }
        }
    }
};
ret["TBL_Productos"]={
    "id": "TBL_Productos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_Productos",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSNombre",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSBarcode",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSBarcode",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Barcode",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSmarca",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSmarca",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Marca",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSSector",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSSector",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Sector",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSCategoria",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSCategoria",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Categoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSSubCategoria",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSSubCategoria",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "SubCategoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "7": {
            "id": "DSTipo",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSTipo",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Tipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DSTipoResumido",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSTipoResumido",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "TipoResumido",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DsPropietario",
            "Orden": "",
            "Label": "DsPropietario",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "idSrc": "DSPropietario",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "10": {
            "id": "Agregar",
            "Orden": "9",
            "Label": "Agregar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Agregar",
            "Style": {},
            "CssClass": "Transp_Azul2"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Agregar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_ProveedorProducto"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ProveedorProducto"
                }
            }
        }
    }
};
ret["TBL_ExcelProvProd"]={
    "id": "TBL_ExcelProvProd",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ExcelProvProducto",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSFile",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSFile",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "File",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSCodProv",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "COD",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Cod",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSNombreProdProv",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "PRODUCTO",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Producto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSBarcode",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "BARCODE",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Barcode",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "CodPropio",
            "Orden": "2",
            "Label": "CodPropio",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "idSrc": "CodPropio",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "6": {
            "id": "NombrePropio",
            "Orden": "3",
            "Label": "NombrePropio",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "idSrc": "NombrePropio",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "7": {
            "id": "Agregar",
            "Orden": "0",
            "Label": "Agregar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "AgregarProducto",
            "Style": {},
            "CssClass": "Fill_Azul1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "AgregarProducto",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_AgregarProducto"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ProveedorProducto"
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
