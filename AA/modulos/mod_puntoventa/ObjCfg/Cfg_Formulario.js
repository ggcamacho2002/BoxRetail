function CfgFormulario(id,Param){
var ret={};

ret["FRM_Comanda"]={
    "id": "FRM_Comanda",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "min-content"
        }
    },
    "Tipo": "Horizontal",
    "IdSource": "DS_Comanda",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Nro Remito",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "130px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSrev_estado",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSrev_estado",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Rev Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DScli_clave",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DScli_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Cli Clave",
            "ClassEvt": "UpdateCliente",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "NombreCliente",
            "Orden": 3,
            "idSrc": "DScli_razon_social",
            "Label": "Cliente",
            "Tipo": "Fld",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "ClassEvt": "SelCliente",
            "Style": {},
            "CssClass": "BuscarCliente",
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSmaxctacte",
            "Orden": "4",
            "idSrc": "DSmaxctacte",
            "Label": "DSmaxctacte",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "5": {
            "id": "DScheque",
            "Orden": "5",
            "idSrc": "DScheque",
            "Label": "DScheque",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "6": {
            "id": "DSidrecibo",
            "Orden": "6",
            "idSrc": "DSidrecibo",
            "Label": "DSidrecibo",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "anular",
            "Orden": "1",
            "Label": "anular",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Anular",
            "Style": {},
            "CssClass": "Fill_Rojo1 btnCabComanda"
        },
        "1": {
            "id": "InfoCliente",
            "Orden": "0",
            "Label": "Info Cliente",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "InfoCliente",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "50px"
                },
                "1": {
                    "Prop": "Font-size",
                    "Value": "10px !important"
                }
            },
            "CssClass": "Fill_Violeta1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "SelCliente",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_Clientes"
                }
            },
            "Orden": 0
        },
        "1": {
            "ClassEvt": "InfoCliente",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_InfoCliente"
                }
            },
            "Orden": 1
        },
        "2": {
            "ClassEvt": "Anular",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AnularRemito"
                }
            }
        }
    }
};
ret["FRM_CargaProducto"]={
    "id": "FRM_CargaProducto",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "min-content"
        }
    },
    "Tipo": "Horizontal",
    "IdSource": "DS_ComandasItems",
    "CfgItems": {
        "0": {
            "id": "Producto",
            "Orden": 0,
            "idSrc": "",
            "Label": "Buscar Producto",
            "Tipo": "Fld",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "244px"
                }
            },
            "CssClass": ""
        },
        "1": {
            "id": "Packs",
            "Orden": 1,
            "idSrc": "",
            "Label": "Cant. Packs",
            "Tipo": "Fld",
            "IdObj": "InputLabelDiv",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "PackEnter",
            "Style": {},
            "CssClass": "PacksUnid"
        },
        "2": {
            "id": "Unidades",
            "Orden": 2,
            "idSrc": "DScantPedida",
            "Label": "Cant. unidades",
            "Tipo": "Fld",
            "IdObj": "InputLabelDiv",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "UnidadEnter",
            "Style": {},
            "CssClass": "PacksUnid"
        },
        "3": {
            "id": "DSidProducto",
            "Orden": 3,
            "idSrc": "DSidProducto",
            "Label": "DSidProducto",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "4": {
            "id": "DScantxpack",
            "Orden": 4,
            "idSrc": "",
            "Label": "DScantxpack",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "5": {
            "id": "DSprecioventa",
            "Orden": "",
            "idSrc": "DSprecioventa",
            "Label": "DSprecioventa",
            "Tipo": "Fld",
            "IdObj": "Hidden",
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
            "ClassEvt": "PackEnter",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_Scripts_Iniciar_CargaProdPackEnter"
                }
            }
        },
        "1": {
            "ClassEvt": "UnidadEnter",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_Scripts_Iniciar_CargaProdUnidadEnter"
                },
                "1": {
                    "Orden": 1,
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_ComandasItems"
                },
                "2": {
                    "Orden": 2,
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ComandasItems"
                },
                "3": {
                    "Orden": 3,
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_Scripts_Iniciar_ReiniciarFormCargaProd"
                },
                "4": {
                    "Orden": "4",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_Scripts_Iniciar_CalcularAllItemSubtotal"
                }
            }
        }
    }
};
ret["FRM_NuevaComanda"]={
    "id": "FRM_NuevaComanda",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {
        "0": {
            "Prop": "",
            "Value": ""
        }
    },
    "Tipo": "Vertical",
    "IdSource": "DS_Comanda",
    "CfgItems": {
        "0": {
            "id": "DScli_clave",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DScli_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Cli Clave",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "1"
        },
        "1": {
            "id": "DScli_razon_social",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DScli_razon_social",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Cliente",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "200px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": "Consumidor Final"
        },
        "2": {
            "id": "DScli_Descuento",
            "Orden": "2",
            "idSrc": "DScli_Descuento",
            "Label": "DScli_Descuento",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "0",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "3": {
            "id": "DScheque",
            "Orden": "3",
            "idSrc": "DScheque",
            "Label": "DScheque",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "4": {
            "id": "DSmaxctacte",
            "Orden": "4",
            "idSrc": "DSmaxctacte",
            "Label": "DSmaxctacte",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "5": {
            "id": "DSidrecibo",
            "Orden": "5",
            "idSrc": "DSidrecibo",
            "Label": "DSidrecibo",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "BtnParticular",
            "Orden": "0",
            "Label": "Consumidor Final",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "50px"
                }
            },
            "CssClass": "Fill_Azul1"
        },
        "1": {
            "id": "NuevaComanda",
            "Orden": "1",
            "Label": "Nueva Comanda",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "NuevaComanda",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "NuevaComanda",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_NuevaComanda"
                },
                "1": {
                    "Orden": 1,
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_SetLStoreNuevaComanda"
                },
                "2": {
                    "Orden": 2,
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ComandasItems"
                },
                "3": {
                    "Orden": 3,
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_BuscarProductos"
                },
                "4": {
                    "Orden": 4,
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_CambiarEstado_Carrito"
                },
                "5": {
                    "Orden": 5,
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_FocusBusqueda"
                }
            },
            "Orden": 0
        }
    }
};
ret["FRM_InfoCliente"]={
    "id": "FRM_InfoCliente",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Clientes",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "idSrc": "DSid",
            "Label": "Id",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "1": {
            "id": "DSrazon_social",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSrazon_social",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Razon Social",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSdireccion",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSdireccion",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Direccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DScuit",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DScuit",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Cuit",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DStelefono",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DStelefono",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Telefono",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DSmail",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSmail",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Mail",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "6": {
            "id": "DSestado",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "7": {
            "id": "DSnombre_adic",
            "Orden": 7,
            "Tipo": "Fld",
            "idSrc": "DSnombre_adic",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Nombre Adic",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "8": {
            "id": "DStipo",
            "Orden": 8,
            "Tipo": "Fld",
            "idSrc": "DStipo",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Tipo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "9": {
            "id": "DSmaxctacte",
            "Orden": "9",
            "idSrc": "DSmaxctacte",
            "Label": "max ctacte",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "10": {
            "id": "DScheque",
            "Orden": "10",
            "idSrc": "DScheque",
            "Label": "cheque",
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
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXRelacion_InfoCliente"
                }
            }
        }
    }
};
ret["FRM_CabCaja"]={
    "id": "FRM_CabCaja",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "CabCaja",
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "min-content"
        },
        "1": {
            "Prop": "justify-content",
            "Value": "center"
        }
    },
    "Tipo": "Horizontal",
    "IdSource": "DS_CajasAperturaCierre",
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
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DShora_apertura",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DShora_apertura",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Apertura Caja",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "200px"
                },
                "1": {
                    "Prop": "Font-size",
                    "Value": "11px !important"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSidusuario",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSidusuario",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idusuario",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {},
    "CfgEventos": {}
};
ret["FRM_AperturaCaja"]={
    "id": "FRM_AperturaCaja",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_CajasAperturaCierre",
    "CfgItems": {
        "0": {
            "id": "DSnombreusuario",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Nombre usuario",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "257px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DShora_apertura",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DShora_apertura",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Hora Apertura",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "257px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DScambio",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DScambio",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "Cambio",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "200px"
                }
            },
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSidusuario",
            "Orden": 3,
            "idSrc": "DSidusuario",
            "Label": "DSidusuario",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "AbrirCaja",
            "Orden": "1",
            "Label": "Abrir Caja",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "AbrirCaja",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "40px"
                },
                "1": {
                    "Prop": "Margin",
                    "Value": "5px"
                }
            },
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "AbrirCaja",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_AperturaCaja"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_VistaNuevaComanda"
                }
            }
        }
    }
};
ret["FRM_NuevoRecibo"]={
    "id": "FRM_NuevoRecibo",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {
        "0": {
            "Prop": "",
            "Value": ""
        }
    },
    "Tipo": "Horizontal",
    "IdSource": "DS_ClientesRecibos",
    "CfgItems": {
        "0": {
            "id": "DSidremito",
            "Orden": "0",
            "idSrc": "DSidremito",
            "Label": "remito",
            "Tipo": "Fld",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "1": {
            "id": "DSrazon_social",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSClienteNombre",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Cliente",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "442px"
                },
                "1": {
                    "Prop": "Font-size",
                    "Value": "13px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSidCliente",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSidcliente",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "IdCliente",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "margin-left",
                    "Value": "10px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSmaxctacte",
            "Orden": "3",
            "idSrc": "DSClienteMaxCtaCte",
            "Label": "DSmaxctacte",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "4": {
            "id": "DScheque",
            "Orden": "4",
            "idSrc": "DSClienteCheque",
            "Label": "DScheque",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "5": {
            "id": "idRecibo",
            "Orden": "6",
            "idSrc": "DSid",
            "Label": " Nro Recibo",
            "Tipo": "Fld",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "6": {
            "id": "DSIdCondicionIva",
            "Orden": "7",
            "idSrc": "DSIdCondicionIva",
            "Label": "",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "7": {
            "id": "DSDetalleCondicionIva",
            "Orden": "5",
            "idSrc": "DSDetalleCondicionIva",
            "Label": "Condicion Iva",
            "Tipo": "Fld",
            "IdObj": "InputROLabelDiv",
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
    "CfgEventos": {}
};
ret["FRM_ClientesRecibosItemsAlta"]={
    "id": "FRM_ClientesRecibosItemsAlta",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Horizontal",
    "IdSource": "DS_ClientesRecibosItems",
    "CfgItems": {
        "0": {
            "id": "DSiddoccliente",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSiddoccliente",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Iddoccliente",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSdescripcion",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSdescripcion",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Descripcion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSiddocumento",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSiddocumento",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Entidad",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSidremito",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSidremito",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Identidad",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSidrecibo",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSidrecibo",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "DSidrecibo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DSMonto",
            "Orden": 5,
            "idSrc": "DSmonto",
            "Label": "Monto",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "6": {
            "id": "Efectivo",
            "Orden": 6,
            "idSrc": "",
            "Label": "Efectivo",
            "Tipo": "Fld",
            "IdObj": "InputNumber",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "AgregarFormaCobro",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "40px"
                }
            },
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "Digital",
            "Orden": 0,
            "Label": "Digital",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "CobroDigital",
            "Style": {},
            "CssClass": "btnCobroForma"
        },
        "1": {
            "id": "CtaCte",
            "Orden": 1,
            "Label": "CtaCte",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "CobroCtaCte",
            "Style": {},
            "CssClass": "btnCobroForma"
        },
        "2": {
            "id": "Cheque",
            "Orden": 2,
            "Label": "Cheque",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "CobroCheque",
            "Style": {},
            "CssClass": "btnCobroForma"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "AgregarFormaCobro",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_Scripts_Iniciar_AgregarFormaCobro"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ListaFormaCobro"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_Scripts_Iniciar_CalcularCobros"
                }
            }
        },
        "1": {
            "ClassEvt": "CobroDigital",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_CobroDigital"
                }
            }
        },
        "2": {
            "ClassEvt": "CobroCtaCte",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_Validaciones"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_CobroCtaCte"
                }
            }
        },
        "3": {
            "ClassEvt": "CobroCheque",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_Validaciones"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_NuevoCheque"
                }
            }
        }
    }
};
ret["FRM_CobroDigital"]={
    "id": "FRM_CobroDigital",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_ClientesRecibosItems",
    "CfgItems": {
        "0": {
            "id": "DSidcobroentidades",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSidcobroentidades",
            "IdObj": "ComboDataSource",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "DS_ComboCobrosEntidades"
                }
            },
            "Label": "Entidad",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "40px"
                },
                "1": {
                    "Prop": "Font-size",
                    "Value": "14px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSidcliente",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSidcliente",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idcliente",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSmonto",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSmonto",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "Monto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "1",
            "Valid": {
                "0": {
                    "ExpReg": "",
                    "Mensaje": ""
                }
            },
            "Value": ""
        },
        "3": {
            "id": "DSreferencia",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSreferencia",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Nro Comprobante",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSidrecibo",
            "Orden": "4",
            "idSrc": "DSidrecibo",
            "Label": "",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "AgregarCobro",
            "Orden": "0",
            "Label": "Agregar Cobro",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "AgregarCobro",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "40px"
                },
                "1": {
                    "Prop": "Margin-Top",
                    "Value": "10px"
                }
            },
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "AgregarCobro",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_CobroDigital"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_this"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ListaFormaCobro"
                },
                "3": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_CalcularCobros"
                }
            }
        }
    }
};
ret["FRM_CobroCtaCte"]={
    "id": "FRM_CobroCtaCte",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_ClientesRecibosItems",
    "CfgItems": {
        "0": {
            "id": "DSmonto",
            "Orden": "3",
            "idSrc": "DSmonto",
            "Label": "Monto",
            "Tipo": "Fld",
            "IdObj": "InputNumber",
            "Param": {},
            "Requerido": "1",
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "30"
                }
            },
            "CssClass": ""
        },
        "1": {
            "id": "DSMaxCtaCte",
            "Orden": "0",
            "idSrc": "DSMaxCtaCte",
            "Label": "Max. CtaCte",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "2": {
            "id": "DSsaldoCtaCte",
            "Orden": "1",
            "idSrc": "DSsaldoCtaCte",
            "Label": "saldo CtaCte",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "3": {
            "id": "MontoDisp",
            "Orden": "2",
            "idSrc": "",
            "Label": "Disponible",
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
    "Ctrl": {
        "0": {
            "id": "AgregarCobro",
            "Orden": "1",
            "Label": "Agregar Cobro",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "AgregarCobro",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "40px"
                },
                "1": {
                    "Prop": "Margin-Top",
                    "Value": "10px"
                }
            },
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_Scripts_Iniciar_TraerDatosCtaCte"
                }
            },
            "Orden": 0
        },
        "1": {
            "ClassEvt": "AgregarCobro",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_Validaciones"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_NuevoCobroCtaCte"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_this"
                },
                "3": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ListaFormaCobro"
                },
                "4": {
                    "Orden": "4",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_CalcularCobros"
                }
            },
            "Orden": 1
        }
    }
};
ret["FRM_NuevoCheque"]={
    "id": "FRM_NuevoCheque",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_ChequesTerceros",
    "CfgItems": {
        "0": {
            "id": "DSnumerocheque",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSnumerocheque",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Nro. cheque",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSbanco",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSbanco",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Banco",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSfecha_vencimiento",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSfecha_vencimiento",
            "IdObj": "InputFecha",
            "Param": {},
            "Label": "Fecha Vencimiento",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSmonto",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSmonto",
            "IdObj": "InputNumber",
            "Param": {},
            "Label": "Monto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSidmoneda",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSidmoneda",
            "IdObj": "ComboDataSource",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "DS_ComboTipoMonedas"
                }
            },
            "Label": "moneda",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DSidcliente",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSidcliente",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idcliente",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "6": {
            "id": "DScomentarios",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DScomentarios",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Comentarios",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "0",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "InsertarCheque",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "40px"
                },
                "1": {
                    "Prop": "Margin-Top",
                    "Value": "10px"
                }
            },
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "TraerCliente",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetDOMByRelation_NewChequeTraerCliente"
                }
            },
            "Orden": 0
        },
        "1": {
            "ClassEvt": "InsertarCheque",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_InsertCobroCheque"
                },
                "1": {
                    "Orden": 1,
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_this"
                },
                "2": {
                    "Orden": 2,
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ListaFormaCobro"
                },
                "3": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_CalcularCobros"
                }
            },
            "Orden": 1
        }
    }
};
ret["FRM_AnularRemito"]={
    "id": "FRM_AnularRemito",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Comanda",
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
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "Alerta",
            "Orden": 1,
            "idSrc": "",
            "Label": "",
            "Tipo": "Fld",
            "IdObj": "InputTextRO",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "Esta Seguro que quiere anular el remito ??",
            "ClassEvt": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "100%"
                }
            },
            "CssClass": "AnularAlerta"
        },
        "2": {
            "id": "DScomentario",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DScomentario",
            "IdObj": "TextLabelDiv",
            "Param": {},
            "Label": "Comentario",
            "ClassEvt": "",
            "CssClass": "AnularComentario",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "100%",
                    "Orden": 0
                }
            },
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "Anular",
            "Orden": "0",
            "Label": "Anular",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Anular",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        },
        "1": {
            "id": "Cancelar",
            "Orden": "1",
            "Label": "Cancelar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "",
            "Style": {},
            "CssClass": "Fill_Azul1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Anular",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_Scripts_Iniciar_Validaciones"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_LibreByRelacion_AnularRemito"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_this"
                },
                "3": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_LimpiarGrid_Multiuso"
                },
                "4": {
                    "Orden": "4",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_ManualFill_NuevaComanda"
                },
                "5": {
                    "Orden": "5",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_CambiarEstado_NuevaComanda"
                }
            }
        }
    }
};
ret["FRM_InfoProducto"]={
    "id": "FRM_InfoProducto",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_InfoProducto",
    "CfgItems": {
        "0": {
            "id": "DSidProd",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSidProd",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Clave",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSNombreProducto",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSNombreProducto",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Nombre Producto",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "100%"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSBarcode",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSBarcode",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "CÃƒÂ³digo de Barras",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSPVentaUnid",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSPVentaUnid",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Precio Venta",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSPCostoUnid",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSPCostoUnid",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Costo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DSStockActual",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSStockActual",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Stock Actual",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "6": {
            "id": "DSsector",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DSsector",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Sector",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "7": {
            "id": "DSCategoria",
            "Orden": 7,
            "Tipo": "Fld",
            "idSrc": "DSCategoria",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "CategorÃƒÂ­a",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "8": {
            "id": "DSMarca",
            "Orden": 8,
            "Tipo": "Fld",
            "idSrc": "DSMarca",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Marca",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "cerrar",
            "Orden": "0",
            "Label": "Cerrar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "CerrarDialog",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "CerrarDialog",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Cerrar_InfoProducto"
                }
            },
            "Orden": 0
        },
        "1": {
            "ClassEvt": "FRM_Load",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXRelacion_InfoProducto"
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
