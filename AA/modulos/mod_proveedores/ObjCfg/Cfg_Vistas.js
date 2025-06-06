function CfgVistas(id,Param){
var ret={};

ret["VT_Inicio"]={
    "id": "VT_Inicio",
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
            "IdObj": "ST_ListaProveedores",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_Impuestos"]={
    "id": "VT_Impuestos",
    "Grid": "GR_2x2",
    "OnGridFill": "1","EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_2x2-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_2x2-0-1",
                    "Visibilidad": "SHOW"
                },
                "2": {
                    "IdObj": "GR_2x2-1-0",
                    "Visibilidad": "SHOW"
                },
                "3": {
                    "IdObj": "GR_2x2-1-1",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_2x2-0-0",
            "TipoObj": "Card",
            "IdObj": "CD_Proveedor",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_2x2-1-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ListaProveedorImp",
            "EvtInicio": "Construir",
            "Param": {}
        },
        "2": {
            "Col": "GR_2x2-1-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ListaTasasImpuestos",
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
