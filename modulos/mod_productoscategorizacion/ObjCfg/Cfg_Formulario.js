function CfgFormulario(id,Param){
var ret={};

ret["FRM_AltaCategoriza"]={
    "id": "FRM_AltaCategoriza",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_ProdCat",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "Id",
            "Requerido": 0,
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
            "Requerido": "1",
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
            "Requerido": "1",
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
            "Requerido": "1",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSEstado",
            "Orden": "92",
            "Tipo": "Fld",
            "idSrc": "DSEstado",
            "IdObj": "ComboStaticVal",
            "Label": "Estado",
            "Requerido": "1",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_estados"
                }
            },
            "Valid": {}
        },
        "5": {
            "id": "DSCategoria",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSCategoria",
            "IdObj": "InputTextRO",
            "Label": "Categoria",
            "Requerido": "1",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "DSSubCategoria",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSSubCategoria",
            "IdObj": "InputTextRO",
            "Label": "SubCategoria",
            "Requerido": "1",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "7": {
            "id": "DSTipo",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DSTipo",
            "IdObj": "InputTextRO",
            "Label": "Tipo",
            "Requerido": "1",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "8": {
            "id": "DSTipoResumido",
            "Orden": "10",
            "Tipo": "Fld",
            "idSrc": "DSTipoResumido",
            "IdObj": "InputTextRO",
            "Label": "TipoResumido",
            "Requerido": "1",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "9": {
            "id": "DSSector",
            "Orden": "6",
            "idSrc": "DSSector",
            "Label": "Sector",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": "1",
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "10": {
            "id": "DSidSector",
            "Orden": "98",
            "idSrc": "DSidSector",
            "Label": "DSidSector",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": "1",
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "1",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Guardar",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_This"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListaProdCat"
                },
                "2": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                }
            }
        }
    }
};
ret["FRM_AltaCategoria"]={
    "id": "FRM_AltaCategoria",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {
        "0": {
            "Prop": "",
            "Value": ""
        },
        "1": {
            "Prop": "",
            "Value": ""
        }
    },
    "Tipo": "Vertical",
    "IdSource": "DS_Categorias",
    "CfgItems": {
        "0": {
            "id": "DSCategoria",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSCategoria",
            "IdObj": "InputText",
            "Label": "Categoria",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSestado",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "ComboStaticVal",
            "Label": "Estado",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_estados"
                }
            },
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "1",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Guardar",
            "Style": {},
            "CssClass": "Fill_Rojo1 "
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_categoria"
                }
            }
        }
    }
};
ret["FRM_EditarCategoria"]={
    "id": "FRM_EditarCategoria",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_categorias",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Categorias",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "Id",
            "Requerido": 0,
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
            "IdObj": "InputText",
            "Label": "Categoria",
            "Requerido": 0,
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
            "IdObj": "ComboStaticVal",
            "Label": "Estado",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_estados"
                }
            },
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "1",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Guardar",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_xDSid"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_categoria"
                }
            }
        },
        "1": {
            "ClassEvt": "TraerDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
                }
            }
        }
    }
};
ret["FRM_AltaSubCateg"]={
    "id": "FRM_AltaSubCateg",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_SubCategorias",
    "CfgItems": {
        "0": {
            "id": "DSSubCategoria",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSSubCategoria",
            "IdObj": "InputText",
            "Label": "SubCategoria",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSestado",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "ComboStaticVal",
            "Label": "Estado",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_estados"
                }
            },
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "1",
            "Label": "Guardar",
            "Requerido": 0,
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Guardar",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_SubCategoria"
                }
            }
        }
    }
};
ret["FRM_EditarSubCateg"]={
    "id": "FRM_EditarSubCateg",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_subcategorias",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_SubCategorias",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "Id",
            "Requerido": 0,
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
            "IdObj": "InputText",
            "Label": "SubCategoria",
            "Requerido": 0,
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
            "IdObj": "ComboStaticVal",
            "Label": "Estado",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_estados"
                }
            },
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "1",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Guardar",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_xDSid"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_categoria"
                }
            }
        },
        "1": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
                }
            }
        }
    }
};
ret["FRM_AltaTipo"]={
    "id": "FRM_AltaTipo",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_ProdTipos",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "Id",
            "Requerido": 0,
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
            "IdObj": "InputText",
            "Label": "Tipo",
            "Requerido": 0,
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
            "IdObj": "InputText",
            "Label": "Tipo Resumido",
            "Requerido": 0,
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
            "IdObj": "ComboStaticVal",
            "Label": "Estado",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_estados"
                }
            },
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "1",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Guardar",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Tipos"
                }
            }
        }
    }
};
ret["FRM_EditarTipos"]={
    "id": "FRM_EditarTipos",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_tipos",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_ProdTipos",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "Id",
            "Requerido": 0,
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
            "IdObj": "InputText",
            "Label": "Tipo",
            "Requerido": 0,
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
            "IdObj": "InputText",
            "Label": "Tipo Resumido",
            "Requerido": 0,
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
            "IdObj": "ComboStaticVal",
            "Label": "Estado",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_estados"
                }
            },
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "1",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Guardar",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_xDSid"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Tipos"
                }
            }
        },
        "1": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
                }
            }
        }
    }
};
ret["FRM_EditarCategorizacion"]={
    "id": "FRM_EditarCategorizacion",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaProdCat",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_ProdCat",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Id",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSidCategoria",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSidCategoria",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "IdCategoria",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSidSubCategoria",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSidSubCategoria",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "IdSubCategoria",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSidTipoProducto",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSidTipoProducto",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "IdTipoProducto",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSEstado",
            "Orden": "92",
            "Tipo": "Fld",
            "idSrc": "DSEstado",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_estados"
                }
            },
            "Label": "Estado",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "DSCategoria",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSCategoria",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Categoria",
            "Requerido": "1",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "6": {
            "id": "DSSubCategoria",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DSSubCategoria",
            "IdObj": "InputText",
            "Param": {},
            "Label": "SubCategoria",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "7": {
            "id": "DSTipo",
            "Orden": "10",
            "Tipo": "Fld",
            "idSrc": "DSTipo",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Tipo",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "8": {
            "id": "DSTipoResumido",
            "Orden": "10",
            "Tipo": "Fld",
            "idSrc": "DSTipoResumido",
            "IdObj": "InputText",
            "Param": {},
            "Label": "TipoResumido",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "9": {
            "id": "DSidSector",
            "Orden": "98",
            "idSrc": "DSidSector",
            "Label": "DSidSector",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": "1",
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "10": {
            "id": "DSSector",
            "Orden": "6",
            "idSrc": "DSSector",
            "Label": "Sector",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "Param": {},
            "Requerido": "1",
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "1",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Guardar",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
                }
            }
        },
        "1": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_xDSid"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ListaProdCat"
                }
            }
        }
    }
};
ret["FRM_AltaSector"]={
    "id": "FRM_AltaSector",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Sectores",
    "CfgItems": {
        "0": {
            "id": "DSSector",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSSector",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Sector",
            "Requerido": "1",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSestado",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_estados"
                }
            },
            "Label": "Estado",
            "Requerido": 0,
            "ClassEvt": "Null",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "1",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Guardar",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Sectores"
                }
            }
        }
    }
};
ret["FRM_EditarSector"]={
    "id": "FRM_EditarSector",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Sectores",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Sectores",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Id",
            "Requerido": 0,
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
            "IdObj": "InputText",
            "Param": {},
            "Label": "Sector",
            "Requerido": 0,
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
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_estados"
                }
            },
            "Label": "Estado",
            "Requerido": 0,
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "1",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Guardar",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_xDSid"
                },
                "1": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Sectores"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                },
                "3": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Sectores"
                }
            }
        },
        "1": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
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
