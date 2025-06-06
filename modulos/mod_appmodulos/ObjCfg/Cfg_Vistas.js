function CfgVistas(id,Param){
var ret={};

ret["VT_VistaInicial"]={
    "id": "VT_VistaInicial",
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
            "IdObj": "ST_ListaModulos",
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
