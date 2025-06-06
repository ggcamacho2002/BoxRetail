function CfgTabla(id,Param){
var ret={};

ret["TBL_ListaProdCat"]={
    "id": "TBL_ListaProdCat",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ProdCat",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "PlainText",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSidCategoria",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSidCategoria",
            "IdObj": "Hidden",
            "Label": "IdCategoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSidSubCategoria",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSidSubCategoria",
            "IdObj": "Hidden",
            "Label": "IdSubCategoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSidTipoProducto",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSidTipoProducto",
            "IdObj": "Hidden",
            "Label": "IdTipoProducto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSEstado",
            "Orden": "11",
            "Tipo": "Fld",
            "idSrc": "DSEstado",
            "IdObj": "PlainText",
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "5": {
            "id": "DSidvieja",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSidvieja",
            "IdObj": "Hidden",
            "Label": "Idvieja",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "DSCategoria",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DSCategoria",
            "IdObj": "PlainText",
            "Label": "Categoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "7": {
            "id": "DSSubCategoria",
            "Orden": 7,
            "Tipo": "Fld",
            "idSrc": "DSSubCategoria",
            "IdObj": "PlainText",
            "Label": "SubCategoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "8": {
            "id": "DSTipo",
            "Orden": 8,
            "Tipo": "Fld",
            "idSrc": "DSTipo",
            "IdObj": "PlainText",
            "Label": "Tipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "9": {
            "id": "DSTipoResumido",
            "Orden": 9,
            "Tipo": "Fld",
            "idSrc": "DSTipoResumido",
            "IdObj": "PlainText",
            "Label": "TipoResumido",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "10": {
            "id": "Borrar",
            "Orden": "13",
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
        },
        "11": {
            "id": "Editar",
            "Orden": "12",
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
        },
        "12": {
            "id": "DSSector",
            "Orden": "1",
            "Label": "Sector",
            "Tipo": "Fld",
            "IdObj": "PlainText",
            "idSrc": "DSSector",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Borrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_ListaProdCat"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListaProdCat"
                }
            }
        },
        "1": {
            "ClassEvt": "Editar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditarCategorizacion"
                }
            }
        }
    }
};
ret["TBL_categorias"]={
    "id": "TBL_categorias",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_Categorias",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSCategoria",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSCategoria",
            "IdObj": "PlainText",
            "Label": "Categoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSestado",
            "Orden": 2,
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
        "3": {
            "id": "Borrar",
            "Orden": "5",
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
        },
        "4": {
            "id": "Editar",
            "Orden": "3",
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
                    "IdEvt": "EVT_ST_Buscar_categoria"
                }
            }
        },
        "1": {
            "ClassEvt": "Editar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditarCategoria"
                }
            }
        }
    }
};
ret["TBL_subcategorias"]={
    "id": "TBL_subcategorias",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_SubCategorias",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "PlainText",
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSSubCategoria",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSSubCategoria",
            "IdObj": "PlainText",
            "Label": "SubCategoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSestado",
            "Orden": 2,
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
        "3": {
            "id": "Borrar",
            "Orden": "4",
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
        },
        "4": {
            "id": "Editar",
            "Orden": "3",
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
                    "IdEvt": "EVT_ST_Buscar_SubCategoria"
                }
            }
        },
        "1": {
            "ClassEvt": "Editar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditarSubCateg"
                }
            }
        }
    }
};
ret["TBL_tipos"]={
    "id": "TBL_tipos",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_ProdTipos",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSProdTipo",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSProdTipo",
            "IdObj": "PlainText",
            "Label": "Tipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSProdTipoResumido",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSProdTipoResumido",
            "IdObj": "PlainText",
            "Label": "Tipo Resum.",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSestado",
            "Orden": 3,
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
            "id": "Borrar",
            "Orden": "5",
            "Label": "Borrar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": "Transp_Rojo1"
        },
        "5": {
            "id": "Editar",
            "Orden": "4",
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
                    "IdEvt": "EVT_ST_Buscar_Tipos"
                }
            }
        },
        "1": {
            "ClassEvt": "Editar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditarTipo"
                }
            }
        }
    }
};
ret["TBL_Sectores"]={
    "id": "TBL_Sectores",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_Sectores",
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
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSSector",
            "Orden": 1,
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
        "2": {
            "id": "DSestado",
            "Orden": 2,
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
        "3": {
            "id": "Editar",
            "Orden": "3",
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
        },
        "4": {
            "id": "Borrar",
            "Orden": "4",
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
            "ClassEvt": "Editar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditarSector"
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
                    "IdEvt": "EVT_ST_Buscar_Sectores"
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
