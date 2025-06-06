function CfgVistas(id,Param){
var ret={};

ret["VT_Inicio"]={
    "id": "VT_Inicio",
    "Grid": "GR_1x4",
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
                    "IdObj": "GR_1x4-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_1x4-0-1",
                    "Visibilidad": "HIDE"
                },
                "2": {
                    "IdObj": "GR_1x4-0-2",
                    "Visibilidad": "HIDE"
                },
                "3": {
                    "IdObj": "GR_1x4-0-3",
                    "Visibilidad": "HIDE"
                }
            }
        },
        "1": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x4-0-0",
                    "Visibilidad": "HIDE"
                },
                "1": {
                    "IdObj": "GR_1x4-0-1",
                    "Visibilidad": "SHOW"
                },
                "2": {
                    "IdObj": "GR_1x4-0-2",
                    "Visibilidad": "SHOW"
                },
                "3": {
                    "IdObj": "GR_1x4-0-3",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_1x4-0-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ListaRoles",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_1x4-0-1",
            "TipoObj": "Card",
            "IdObj": "CD_RolSelecto",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "2": {
            "Col": "GR_1x4-0-2",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_AgregarModulos",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "3": {
            "Col": "GR_1x4-0-3",
            "TipoObj": "Card",
            "IdObj": "CD_AllModulos",
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
