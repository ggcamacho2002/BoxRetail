function CfgFormulario(id,Param){
var ret={};

ret["FRM_Recepcion"]={
    "id": "FRM_Recepcion",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_CompraRecepcion",
    "CfgItems": {
        "0": {
            "id": "DSpro_clave",
            "Orden": 0,
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
        "1": {
            "id": "DStic_clave",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DStic_clave",
            "IdObj": "ComboDataSource",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "DS_ComprobantesTipo"
                }
            },
            "Label": "Tipo Comprobante",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "NroProv",
            "Orden": 2,
            "idSrc": "DSnrodocprov",
            "Label": "Nro Doc Proveedor",
            "Tipo": "Fld",
            "IdObj": "InputText",
            "Param": {},
            "Requerido": "1",
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "3": {
            "id": "FechaProv",
            "Orden": 3,
            "idSrc": "DSfechaprov",
            "Label": "Fecha DOC PROVEEDOR",
            "Tipo": "Fld",
            "IdObj": "InputFecha",
            "Param": {},
            "Requerido": "1",
            "Valid": {},
            "Value": "",
            "ClassEvt": "",
            "Style": {},
            "CssClass": ""
        },
        "4": {
            "id": "idremito",
            "Orden": 4,
            "idSrc": "",
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
            "id": "Guardar",
            "Orden": "0",
            "Label": "Iniciar Recepcion",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "InsertRecepcion",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "InsertRecepcion",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBdByRelacion_InsertDocProveedor"
                },
                "1": {
                    "Orden": 1,
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_this"
                },
                "2": {
                    "Orden": 2,
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Recepcion"
                }
            }
        }
    }
};
ret["FRM_ComprobanteSelecto"]={
    "id": "FRM_ComprobanteSelecto",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Horizontal",
    "IdSource": "DS_CompraRecepcion",
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
                    "Value": "70px"
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
            "id": "DStic_clave",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DStic_clave",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Tic Clave",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSrazon_social",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSrazon_social",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Proveedor",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DStic_descripcion",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DStic_descripcion",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Tipo Doc",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "",
                    "Value": "100px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DSidremito",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSidremito",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "remito Nro",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "6": {
            "id": "DSnrodocprov",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DSnrodocprov",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "Nro Doc. Prov.",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "7": {
            "id": "DSfechaprov",
            "Orden": 7,
            "Tipo": "Fld",
            "idSrc": "DSfechaprov",
            "IdObj": "InputROLabelDiv",
            "Param": {},
            "Label": "fecha prov",
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
        }
    },
    "Ctrl": {
        "0": {
            "id": "volver",
            "Orden": "0",
            "Label": "Volver",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "volver",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "100%"
                }
            },
            "CssClass": "Fill_Azul1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "TraerDatos",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_ComprobanteSelecto"
                },
                "1": {
                    "Orden": 1,
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_ST_BuscarByRelacion_DocProvItems"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_Scripts_Iniciar_CalcularTotal"
                }
            }
        },
        "1": {
            "ClassEvt": "volver",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Recepcion"
                }
            }
        }
    }
};
ret["FRM_ControlesRecepcion"]={
    "id": "FRM_ControlesRecepcion",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Horizontal",
    "IdSource": "DS_DocumentoProveedorItems",
    "CfgItems": {
        "0": {
            "id": "porcBonif",
            "Orden": 0,
            "idSrc": "",
            "Label": "% Bonif.",
            "Tipo": "Fld",
            "IdObj": "InputLabelDiv",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "0",
            "ClassEvt": "CargarColumna",
            "Style": {},
            "CssClass": "FldChico"
        },
        "1": {
            "id": "porciva",
            "Orden": 1,
            "idSrc": "",
            "Label": "% Iva",
            "Tipo": "Fld",
            "IdObj": "InputLabelDiv",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "0",
            "ClassEvt": "CargarColumna",
            "Style": {},
            "CssClass": "FldChico"
        },
        "2": {
            "id": "porcretiva",
            "Orden": 2,
            "idSrc": "",
            "Label": "% ret. Iva",
            "Tipo": "Fld",
            "IdObj": "InputLabelDiv",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "0",
            "ClassEvt": "CargarColumna",
            "Style": {},
            "CssClass": "FldChico"
        },
        "3": {
            "id": "porcretiibb",
            "Orden": 3,
            "idSrc": "",
            "Label": "% ret. iibb",
            "Tipo": "Fld",
            "IdObj": "InputLabelDiv",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "0",
            "ClassEvt": "CargarColumna",
            "Style": {},
            "CssClass": "FldChico"
        },
        "4": {
            "id": "impint",
            "Orden": 4,
            "idSrc": "",
            "Label": "% imp. int.",
            "Tipo": "Fld",
            "IdObj": "InputLabelDiv",
            "Param": {},
            "Requerido": 0,
            "Valid": {},
            "Value": "0",
            "ClassEvt": "CargarColumna",
            "Style": {},
            "CssClass": "FldChico"
        }
    },
    "Ctrl": {},
    "CfgEventos": {
        "0": {
            "ClassEvt": "CargarColumna",
            "Hilo": {
                "0": {
                    "Orden": 0,
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_Scripts_Iniciar_CargarColumnaMasiva"
                }
            },
            "Orden": 0
        }
    }
};
ret["FRM_EditRecepcion"]={
    "id": "FRM_EditRecepcion",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_CompraRecepcion",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_CompraRecepcion",
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
            "id": "DStic_clave",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DStic_clave",
            "IdObj": "ComboDataSource",
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "DS_ComprobantesTipo"
                }
            },
            "Label": "Tipo Comprobante",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "",
                    "Value": "",
                    "Orden": 0
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSdop_estado",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSdop_estado",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Dop Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DStic_descripcion",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DStic_descripcion",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Tic Descripcion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DSnrodocprov",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSnrodocprov",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Nro Doc Proveedor",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        },
        "6": {
            "id": "DSfechaprov",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DSfechaprov",
            "IdObj": "InputFecha",
            "Param": {},
            "Label": "fechaprov",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": "1",
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "guardar",
            "Orden": "0",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "GuardarDoc",
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
                    "IdEvt": "EVT_FRM_GetBdXidPadre_EditRecepcion"
                }
            }
        },
        "1": {
            "ClassEvt": "GuardarDoc",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_this"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_CompraRecepcion"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_this"
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
