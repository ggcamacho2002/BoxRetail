function CfgImpresion(id,Param){
var ret={};

ret["IMP_LiquidacionManual"]={
    "id": "IMP_LiquidacionManual",
    "Titulo": "Liquidacion Sueldos",
    "Fecha": "1",
    "Grid": "GR_4x1",
    "CssClass": "",
    "GridFill": {
        "0": {
            "Col": "GR_4x1-0-0",
            "TipoObj": "Titulo",
            "IdObj": "This",
            "Param": {}
        },
        "1": {
            "Col": "GR_4x1-1-0",
            "TipoObj": "Formulario",
            "IdObj": "FRM_PersonalSelectoImpresion",
            "Param": {}
        },
        "2": {
            "Col": "GR_4x1-2-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_LiqItemsImprimir",
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
