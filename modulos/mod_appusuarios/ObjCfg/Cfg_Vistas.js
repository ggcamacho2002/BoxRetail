function CfgVistas(id,Param){
var ret={};

ret["VT_AppUsuarios"]={
    "id": "VT_AppUsuarios",
    "Grid": "GR_AppUsuarios",
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
                    "IdObj": "GR_AppUsuarios-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_AppUsuarios-0-1",
                    "Visibilidad": "HIDE"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_AppUsuarios-0-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ListaUsuariosRO",
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
