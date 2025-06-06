function CfgVistas(id,Param){
var ret={};

ret["VT_Manual"]={
    "id": "VT_Manual",
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
            "IdObj": "ST_Manual",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_OneSueldo"]={
    "id": "VT_OneSueldo",
    "Grid": "GR_1x2b",
    "OnGridFill": "1","EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x2b-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_1x2b-0-1",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_1x2b-0-0",
            "TipoObj": "Card",
            "IdObj": "CD_Variables",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_1x2b-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_SueldoLiqItems",
            "EvtInicio": "Construir",
            "Param": {}
        },
        "2": {
            "Col": "GR_1x2b-0-1",
            "TipoObj": "Card",
            "IdObj": "CD_Totales",
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
