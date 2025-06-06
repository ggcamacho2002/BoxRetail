function CfgVistas(id,Param){
var ret={};

ret["VT_Sindicatos"]={
    "id": "VT_Sindicatos",
    "Grid": "GR_1x1",
    "OnGridFill": "1","EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x1-0-0",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_1x1-0-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_Sindicatos",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_SindicatoBasicos"]={
    "id": "VT_SindicatoBasicos",
    "Grid": "GR_2x1",
    "OnGridFill": "1","EvtInicio": "",
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
            "IdObj": "CD_SindicatoSelecto",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_2x1-1-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_SindicatosBasicos",
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
