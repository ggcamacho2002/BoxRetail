function CfgVistas(id,Param){
var ret={};

ret["VT_Inicio"]={
    "id": "VT_Inicio",
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
        },
        "1": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x3-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_1x3-0-1",
                    "Visibilidad": "HIDE"
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
            "IdObj": "Botonera_Inicio",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_1x3-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ListaProducto",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "2": {
            "Col": "GR_1x3-0-2",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ExtraProductos",
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
