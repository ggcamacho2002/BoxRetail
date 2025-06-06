function CfgVistas(id,Param){
var ret={};

ret["VT_SueldoIntConcepto"]={
    "id": "VT_SueldoIntConcepto",
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
            "IdObj": "ST_SueldoIntConcepto",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_Inicio"]={
    "id": "VT_Inicio",
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
            "IdObj": "ST_Personal",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_PersonalConcepto"]={
    "id": "VT_PersonalConcepto",
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
                    "Visibilidad": "SHOW"
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
            "TipoObj": "Card",
            "IdObj": "CD_persoalselecto",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "2": {
            "Col": "GR_1x3-0-2",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_AllConceptos",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "3": {
            "Col": "GR_1x3-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_PersConcepto",
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
