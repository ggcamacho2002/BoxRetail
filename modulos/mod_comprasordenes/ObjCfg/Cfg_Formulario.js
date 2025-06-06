function CfgFormulario(id,Param){
var ret={};

ret["FRM_SeleccionProveedor"]={
    "id": "FRM_SeleccionProveedor",
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
    "IdSource": "DS_Proveedores",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "InputTextRO",
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
            "id": "DSRazonSocial",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSRazonSocial",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Razon Social",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "300px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSTelefono",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSTelefono",
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
        "3": {
            "id": "DSMail",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSMail",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Mail",
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
            "id": "0",
            "Orden": "0",
            "Label": "generar orden compra",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "insertOrdCompra",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "insertOrdCompra",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_ComprasOrdenes"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_ComprasOrdenes"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Hide_SeleccionProveedor"
                }
            }
        }
    }
};
ret["FRM_ComprasOrdenes"]={
    "id": "FRM_ComprasOrdenes",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Horizontal",
    "IdSource": "DS_ComprasOrdenes",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "100px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSpro_clave",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSpro_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Pro Clave",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSrec_fecha",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSrec_fecha",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Fecha",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSrec_estado",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSrec_estado",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Rec Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSpro_razon_social",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSpro_razon_social",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Proveedor",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "400px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DsTipo",
            "Orden": "5",
            "idSrc": "DSrec_tipo",
            "Label": "DsTipo",
            "Tipo": "Fld",
            "IdObj": "Hidden",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "Compra",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "volver",
            "Orden": 0,
            "Label": "volver",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "volver",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "48px"
                }
            },
            "CssClass": "Fill_Rosa1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_ComprasOrdenes"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ComprasOrdenesItems"
                }
            }
        },
        "1": {
            "ClassEvt": "volver",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_ListadoOrdenCompra"
                }
            }
        },
        "2": {
            "ClassEvt": "DGOrdenarItems",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_OrdenarItems"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_OrdenarItems"
                }
            }
        }
    }
};
ret["FRM_ImprimirPedido"]={
    "id": "FRM_ImprimirPedido",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Horizontal",
    "IdSource": "DS_ComprasOrdenesSinEstado",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "100px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSpro_clave",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSpro_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Pro Clave",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSrec_fecha",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSrec_fecha",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Fecha",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSrec_estado",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSrec_estado",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Rec Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSpro_razon_social",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSpro_razon_social",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Proveedor",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "400px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {},
    "CfgEventos": {
        "0": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_Imprimepedido"
                }
            }
        },
        "1": {
            "ClassEvt": "volver",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_ListadoOrdenCompra"
                }
            }
        }
    }
};
ret["FRM_ComprasOrdenAuxiliar"]={
    "id": "FRM_ComprasOrdenAuxiliar",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Horizontal",
    "IdSource": "DS_ComprasOrdenes",
    "CfgItems": {
        "0": {
            "id": "Dias",
            "Orden": "0",
            "idSrc": "",
            "Label": "Dias Analisis",
            "Tipo": "Fld",
            "IdObj": "ComboStaticVal",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Dias"
                }
            },
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
ret["FRM_ComprasOrdenesControl"]={
    "id": "FRM_ComprasOrdenesControl",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Horizontal",
    "IdSource": "DS_ComprasOrdenesSinEstado",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "100px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSpro_clave",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSpro_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Pro Clave",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSrec_fecha",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSrec_fecha",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Fecha",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSrec_estado",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSrec_estado",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Rec Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSpro_razon_social",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSpro_razon_social",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Proveedor",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "400px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "volver",
            "Orden": 0,
            "Label": "volver",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "volver",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "48px"
                }
            },
            "CssClass": "Fill_Rosa1"
        },
        "1": {
            "id": "FinalizarControl",
            "Orden": "",
            "Label": "Finalizar Control",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "UpdateControl",
            "Style": {
                "0": {
                    "Prop": "White-space",
                    "Value": "nowrap",
                    "Orden": 0
                },
                "1": {
                    "Prop": "Height",
                    "Value": "100%"
                }
            },
            "CssClass": "Fill_Verde1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_ComprasOrdenesControl"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_ST_BuscarByRelacion_COrdenesItemsControl"
                }
            }
        },
        "1": {
            "ClassEvt": "volver",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_ComprasEnEspera"
                }
            }
        },
        "2": {
            "ClassEvt": "DGOrdenarItems",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_OrdenarItems"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_OrdenarItems"
                }
            }
        },
        "3": {
            "ClassEvt": "UpdateControl",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_UpdateByRelacion_UpdateCOrdenEstadoControl"
                },
                "1": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_ListadoOrdenCompra"
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
