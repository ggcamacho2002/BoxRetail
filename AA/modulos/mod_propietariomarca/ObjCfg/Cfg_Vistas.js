function CfgVistas(id,Param){
var ret={};

ret["VT_Inicio"]={
    "id": "VT_Inicio",
    "Grid": "GR_1x5",
    "OnGridFill": "1","EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x5-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_1x5-0-1",
                    "Visibilidad": "SHOW"
                },
                "2": {
                    "IdObj": "GR_1x5-0-2",
                    "Visibilidad": "HIDE"
                },
                "3": {
                    "IdObj": "GR_1x5-0-3",
                    "Visibilidad": "HIDE"
                },
                "4": {
                    "IdObj": "GR_1x5-0-4",
                    "Visibilidad": "HIDE"
                },
                "5": {
                    "IdObj": "GR_1x5-0-5",
                    "Visibilidad": "HIDE"
                }
            }
        },
        "1": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x5-0-0",
                    "Visibilidad": "HIDE"
                },
                "1": {
                    "IdObj": "GR_1x5-0-1",
                    "Visibilidad": "HIDE"
                },
                "2": {
                    "IdObj": "GR_1x5-0-2",
                    "Visibilidad": "SHOW"
                },
                "3": {
                    "IdObj": "GR_1x5-0-3",
                    "Visibilidad": "SHOW"
                },
                "4": {
                    "IdObj": "GR_1x5-0-4",
                    "Visibilidad": "SHOW"
                },
                "5": {
                    "IdObj": "GR_1x5-0-5",
                    "Visibilidad": "HIDE"
                }
            }
        },
        "2": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x5-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_1x5-0-1",
                    "Visibilidad": "HIDE"
                },
                "2": {
                    "IdObj": "GR_1x5-0-2",
                    "Visibilidad": "HIDE"
                },
                "3": {
                    "IdObj": "GR_1x5-0-3",
                    "Visibilidad": "HIDE"
                },
                "4": {
                    "IdObj": "GR_1x5-0-4",
                    "Visibilidad": "HIDE"
                },
                "5": {
                    "IdObj": "GR_1x5-0-5",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_1x5-0-0",
            "TipoObj": "Botonera",
            "IdObj": "Botonera_Principal",
            "EvtInicio": "Iniciar", 
            "Param": {}
        },
        "1": {
            "Col": "GR_1x5-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_Propietario",
            "EvtInicio": "Iniciar", 
            "Param": {}
        },
        "2": {
            "Col": "GR_1x5-0-2",
            "TipoObj": "Card",
            "IdObj": "CD_PropietarioSelecto",
            "EvtInicio": "Iniciar", 
            "Param": {}
        },
        "3": {
            "Col": "GR_1x5-0-3",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ListaMarcas",
            "EvtInicio": "Iniciar", 
            "Param": {}
        },
        "4": {
            "Col": "GR_1x5-0-4",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_PropMarcas",
            "EvtInicio": "Iniciar", 
            "Param": {}
        },
        "5": {
            "Col": "GR_1x5-0-5",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ABMMarcas",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
