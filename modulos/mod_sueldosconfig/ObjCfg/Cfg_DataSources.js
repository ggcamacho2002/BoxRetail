function CfgDataSources(id,Param){
var ret={};

ret["DS_SueldosItemsConfig"]={
    "id": "DS_SueldosItemsConfig",
    "TipoSource": "SrvConexion",
    "Class": "SueldosConfig",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "id"
        },
        "1": {
            "idSrc": "DSconcepto",
            "Label": "concepto"
        },
        "2": {
            "idSrc": "DScodigo",
            "Label": "codigo"
        },
        "3": {
            "idSrc": "DSsubtotaltipo",
            "Label": "subtotaltipo"
        },
        "4": {
            "idSrc": "DSformulaunidad",
            "Label": "formulaunidad"
        },
        "5": {
            "idSrc": "DSoperacion",
            "Label": "operacion"
        },
        "6": {
            "idSrc": "DSformulavalorunit",
            "Label": "formulavalorunit"
        },
        "7": {
            "idSrc": "DSestado",
            "Label": "estado"
        },
        "8": {
            "idSrc": "DSorden",
            "Label": "orden"
        },
        "9": {
            "idSrc": "DStipo",
            "Label": "tipo"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_SueldosParam"]={
    "id": "DS_SueldosParam",
    "TipoSource": "SrvConexion",
    "Class": "SueldosParam",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSconcepto",
            "Label": "Concepto"
        },
        "2": {
            "idSrc": "DScodigo",
            "Label": "Codigo"
        },
        "3": {
            "idSrc": "DStipo",
            "Label": "Tipo"
        },
        "4": {
            "idSrc": "DSorden",
            "Label": "Orden"
        },
        "5": {
            "idSrc": "DSestado",
            "Label": "Estado"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
