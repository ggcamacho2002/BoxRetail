function CfgVistas(id,Param){
var ret={};

ret["VT_ListadoOrdenCompra"]={
    "id": "VT_ListadoOrdenCompra",
    "Titulo": "Lista Orden Compra",
    "Grid": "GR_1x2",
    "OnGridFill": "1",
    "EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x2-0-0",
                    "Visibilidad": "SHOW",
                    "Orden": 0
                },
                "1": {
                    "IdObj": "GR_1x2-0-1",
                    "Visibilidad": "SHOW",
                    "Orden": 1
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_1x2-0-0",
            "TipoObj": "Botonera",
            "IdObj": "Botonera_General",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_1x2-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ComprasOrdenes",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_Pedido"]={
    "id": "VT_Pedido",
    "Titulo": "pedido",
    "Grid": "GR_2x1",
    "OnGridFill": "1",
    "EvtInicio": "",
    "CssClass": "",
    "Style": {
        "0": {
            "Prop": "",
            "Value": ""
        }
    },
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_2x1-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_2x1-1-0",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_2x1-0-0",
            "TipoObj": "Card",
            "IdObj": "CD_ComprasOrden",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_2x1-1-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ComprasOrdenesItems",
            "EvtInicio": "Construir",
            "Param": {}
        },
        "2": {
            "Col": "GR_2x1-0-0",
            "TipoObj": "Card",
            "IdObj": "CD_ComprasOrdenAuxiliar",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_ComprasOrdenControl"]={
    "id": "VT_ComprasOrdenControl",
    "Titulo": "Controlar Compra Orden",
    "Grid": "GR_2x1",
    "OnGridFill": "1",
    "EvtInicio": "",
    "CssClass": "",
    "Style": {
        "0": {
            "Prop": "",
            "Value": ""
        }
    },
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_2x1-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_2x1-1-0",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_2x1-0-0",
            "TipoObj": "Card",
            "IdObj": "CD_ComprasOrdenesControl",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_2x1-1-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_COrdenesItemsControl",
            "EvtInicio": "Construir",
            "Param": {}
        }
    }
};
ret["VT_ItemsControlados"]={
    "id": "VT_ItemsControlados",
    "Titulo": "Compra Orden Controlada",
    "Grid": "GR_2x1",
    "OnGridFill": "1",
    "EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_2x1-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_2x1-1-0",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_2x1-0-0",
            "TipoObj": "Card",
            "IdObj": "CD_ComprasOrdenesControl",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_2x1-1-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_COrdenesItemsControlados",
            "EvtInicio": "Construir",
            "Param": {}
        }
    }
};
ret["VT_ComprasControladas"]={
    "id": "VT_ComprasControladas",
    "Titulo": "Compras Controladas",
    "Grid": "GR_CompraControlada",
    "OnGridFill": "1",
    "EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_CompraControlada-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_CompraControlada-0-1",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_CompraControlada-0-0",
            "TipoObj": "Botonera",
            "IdObj": "Botonera_General",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_CompraControlada-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ComprasControladas",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_ComprasEnEspera"]={
    "id": "VT_ComprasEnEspera",
    "Titulo": "Compras En Espera",
    "Grid": "GR_1x2",
    "OnGridFill": "1",
    "EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x2-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_1x2-0-1",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_1x2-0-0",
            "TipoObj": "Botonera",
            "IdObj": "Botonera_General",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_1x2-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ComprasOrdenesEspera",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
