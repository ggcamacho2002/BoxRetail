function CfgFormulario(id,Param){
var ret={};

ret["FRM_AltaProducto"]={
    "id": "FRM_AltaProducto",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaProductos",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_ListaProductos",
    "CfgItems": {
        "0": {
            "id": "DSNombre",
            "Orden": "14",
            "Tipo": "Fld",
            "idSrc": "DSNombre",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "Fill_Violeta2",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "300px"
                },
                "1": {
                    "Prop": "Font-size",
                    "Value": "8px"
                }
            },
            "Valid": {}
        },
        "1": {
            "id": "DSEstado",
            "Orden": "13",
            "Tipo": "Fld",
            "idSrc": "DSEstado",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estado"
                }
            },
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "",
                    "Value": ""
                }
            },
            "Valid": {}
        },
        "2": {
            "id": "DSDetalle",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSDetalle",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Detalle",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSUnidMedida",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DSUnidMedida",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_UnidadMedida"
                }
            },
            "Label": "UnidMedida",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSMedida",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSMedida",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "Medida",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSCantxPack",
            "Orden": "10",
            "Tipo": "Fld",
            "idSrc": "DSCantxPack",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "CantxPack",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSTipoInNombre",
            "Orden": "11",
            "Tipo": "Fld",
            "idSrc": "DSTipoInNombre",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_BoolSiNo"
                }
            },
            "Label": "TipoInNombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Value": "1"
        },
        "7": {
            "id": "DSPackxBulto",
            "Orden": "15",
            "Tipo": "Fld",
            "idSrc": "DSPackxBulto",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "PackxBulto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DSPackPisoPalet",
            "Orden": "16",
            "Tipo": "Fld",
            "idSrc": "DSPackPisoPalet",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "PackPisoPalet",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DSPackPalet",
            "Orden": "17",
            "Tipo": "Fld",
            "idSrc": "DSPackPalet",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "PackPalet",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "10": {
            "id": "DSBarcode",
            "Orden": "18",
            "Tipo": "Fld",
            "idSrc": "DSBarcode",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Barcode",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "11": {
            "id": "DSBarcodePack",
            "Orden": "19",
            "Tipo": "Fld",
            "idSrc": "DSBarcodePack",
            "IdObj": "InputText",
            "Param": {},
            "Label": "BarcodePack",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "12": {
            "id": "DSBarcodeBulto",
            "Orden": "20",
            "Tipo": "Fld",
            "idSrc": "DSBarcodeBulto",
            "IdObj": "InputText",
            "Param": {},
            "Label": "BarcodeBulto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "13": {
            "id": "DSNota",
            "Orden": "21",
            "Tipo": "Fld",
            "idSrc": "DSNota",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Nota",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "14": {
            "id": "DSidMarca",
            "Orden": "22",
            "Tipo": "Fld",
            "idSrc": "DSidMarca",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "IdMarca",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "15": {
            "id": "DSidCategoriza",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSidCategoriza",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Categorizacion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "16": {
            "id": "DSmarca",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSmarca",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Marca",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "17": {
            "id": "DSSector",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSSector",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Sector",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "18": {
            "id": "DSCategoria",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSCategoria",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Categoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "19": {
            "id": "DSSubCategoria",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSSubCategoria",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "SubCategoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "20": {
            "id": "DSTipo",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSTipo",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Tipo",
            "ClassEvt": "CambioNombre",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "21": {
            "id": "DSTipoResumido",
            "Orden": "6",
            "idSrc": "DSTipoResumido",
            "Label": "TipoResumido",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {},
    "CfgEventos": {
        "0": {
            "ClassEvt": "CambioNombre",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_CambiarNombre"
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
