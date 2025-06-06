function CfgVistas(id,Param){
var ret={};

ret["VT_Inicio"]={
    "id": "VT_Inicio",
    "Titulo": "Pedidos En Controlado",
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
            "IdObj": "ST_PedidosControlado",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_Recepcion"]={
    "id": "VT_Recepcion",
    "Titulo": "Recepcion de Pedidos",
    "Grid": "GR_1x2",
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
            "IdObj": "ST_CompraRecepcion",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_RecepcionItems"]={
    "id": "VT_RecepcionItems",
    "Titulo": "Recepcion Compra",
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
            "IdObj": "CD_ComprobanteSelecto",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_2x1-1-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_DocProvItems",
            "EvtInicio": "Construir",
            "Param": {}
        },
        "2": {
            "Col": "GR_2x1-0-0",
            "TipoObj": "Card",
            "IdObj": "CD_ControlesRecepcion",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_Guardados"]={
    "id": "VT_Guardados",
    "Titulo": "Documentos Guardados",
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
            "IdObj": "ST_DocsGuardados",
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
