function CfgVistas(id,Param){
var ret={};

ret["VT_SueldosConfigItems"]={
    "id": "VT_SueldosConfigItems",
    "Grid": "GR_1x3",
    "OnGridFill": "1","EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x3-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_1x3-0-1",
                    "Visibilidad": "SHOW"
                },
                "2": {
                    "IdObj": "GR_1x3-0-2",
                    "Visibilidad": "HIDE"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_1x3-0-0",
            "TipoObj": "Botonera",
            "IdObj": "Botonera_Principal",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_1x3-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_SueldosItemsConfig",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_Formulas"]={
    "id": "VT_Formulas",
    "Grid": "GR_1x2",
    "OnGridFill": "1","EvtInicio": "",
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
            "IdObj": "Botonera_Principal",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_1x2-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_Formulas",
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
