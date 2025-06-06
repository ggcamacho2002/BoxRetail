function CfgVistas(id,Param){
var ret={};

ret["VT_Principal"]={
    "id": "VT_Principal",
    "Titulo": "Punto Venta",
    "Grid": "GR_POS",
    "OnGridFill": "1",
    "EvtInicio": "EVT_Scripts_Iniciar_InicioPuntoVenta",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_POS-0-0",
                    "Visibilidad": "SHOW",
                    "Orden": 0
                },
                "1": {
                    "IdObj": "",
                    "Visibilidad": "",
                    "Orden": 1
                },
                "2": {
                    "IdObj": "GR_POS-0-1",
                    "Visibilidad": "SHOW"
                },
                "3": {
                    "IdObj": "GR_POS-0-2",
                    "Visibilidad": "SHOW"
                },
                "4": {
                    "IdObj": "GR_POS-1-0",
                    "Visibilidad": "SHOW"
                },
                "5": {
                    "IdObj": "GR_POS-1-1",
                    "Visibilidad": "HIDE"
                },
                "6": {
                    "IdObj": "GR_POS-1-2",
                    "Visibilidad": "HIDE"
                }
            }
        },
        "1": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_POS-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_POS-0-1",
                    "Visibilidad": "SHOW"
                },
                "2": {
                    "IdObj": "GR_POS-0-2",
                    "Visibilidad": "SHOW"
                },
                "3": {
                    "IdObj": "GR_POS-1-0",
                    "Visibilidad": "HIDE"
                },
                "4": {
                    "IdObj": "GR_POS-1-1",
                    "Visibilidad": "SHOW"
                },
                "5": {
                    "IdObj": "GR_POS-1-2",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_POS-0-0",
            "TipoObj": "Botonera",
            "IdObj": "Botonera_Principal",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_POS-0-1",
            "TipoObj": "Card",
            "IdObj": "CD_CabCaja",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "2": {
            "Col": "GR_POS-0-2",
            "TipoObj": "Botonera",
            "IdObj": "Botonera_CabExtras",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "3": {
            "Col": "GR_POS-1-1",
            "TipoObj": "Formulario",
            "IdObj": "FRM_CargaProducto",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "4": {
            "Col": "GR_POS-1-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_POSListaProductos",
            "EvtInicio": "Construir",
            "Param": {}
        },
        "5": {
            "Col": "GR_POS-1-2",
            "TipoObj": "Formulario",
            "IdObj": "FRM_Comanda",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "6": {
            "Col": "GR_POS-1-2",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ComandasItems",
            "EvtInicio": "Construir",
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
