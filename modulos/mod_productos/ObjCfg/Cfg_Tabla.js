function CfgTabla(id,Param){
var ret={};

ret["TBL_ListaProductos"]={
    "id": "TBL_ListaProductos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ListaProductos",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "2",
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
            "Orden": "0",
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
            "id": "DSEstado",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSEstado",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSidMarca",
            "Orden": "3",
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
        "4": {
            "id": "DSidCategoriza",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSidCategoriza",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "IdCategoriza",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSmarca",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSmarca",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Marca",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSSector",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSSector",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Sector",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "7": {
            "id": "DSCategoria",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSCategoria",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Categoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DSSubCategoria",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSSubCategoria",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "SubCategoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DSTipo",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DSTipo",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Tipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "10": {
            "id": "EditarBasico",
            "Orden": "11",
            "Label": "Editar Basico",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "EditarBasico",
            "Style": {},
            "CssClass": "Transp_Azul2"
        },
        "11": {
            "id": "Borrar",
            "Orden": "",
            "Label": "Borrar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "Null",
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
            "ClassEvt": "EditarBasico",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditarProducto"
                }
            }
        },
        "1": {
            "ClassEvt": "Borrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_ListaProductos"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListaProducto"
                }
            }
        }
    }
};
ret["TBL_ExtraProductos"]={
    "id": "TBL_ExtraProductos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ListaProductos",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSNombre",
            "Orden": 1,
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
            "id": "DSEstado",
            "Orden": 2,
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
            "ClassEvt": "UpdateOneField",
            "CssClass": "AnchoNumero",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSPackxBulto",
            "Orden": 8,
            "Tipo": "Fld",
            "idSrc": "DSPackxBulto",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "Pack x Bulto",
            "ClassEvt": "UpdateOneField",
            "CssClass": "AnchoNumero",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSPackPisoPalet",
            "Orden": 9,
            "Tipo": "Fld",
            "idSrc": "DSPackPisoPalet",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "Pack x Piso",
            "ClassEvt": "UpdateOneField",
            "CssClass": "AnchoNumero",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "4vw"
                }
            },
            "Valid": {}
        },
        "5": {
            "id": "DSPackPalet",
            "Orden": 10,
            "Tipo": "Fld",
            "idSrc": "DSPackPalet",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "Pack x Palet",
            "ClassEvt": "UpdateOneField",
            "CssClass": "AnchoNumero",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSBarcode",
            "Orden": 11,
            "Tipo": "Fld",
            "idSrc": "DSBarcode",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Barcode",
            "ClassEvt": "UpdateOneField",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "7": {
            "id": "DSBarcodePack",
            "Orden": 12,
            "Tipo": "Fld",
            "idSrc": "DSBarcodePack",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Barcode Pack",
            "ClassEvt": "UpdateOneField",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DSBarcodeBulto",
            "Orden": 13,
            "Tipo": "Fld",
            "idSrc": "DSBarcodeBulto",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Barcode Bulto",
            "ClassEvt": "UpdateOneField",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DSNota",
            "Orden": 14,
            "Tipo": "Fld",
            "idSrc": "DSNota",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Nota",
            "ClassEvt": "UpdateOneField",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "UpdateOneField",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "change",
                    "IdEvt": "EVT_TBL_UpdateOneField_ExtraProductos"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_TBL_SiguienteInput_This"
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
