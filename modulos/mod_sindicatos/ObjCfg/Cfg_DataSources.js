function CfgDataSources(id,Param){
var ret={};

ret["DS_Sindicatos"]={
    "id": "DS_Sindicatos",
    "TipoSource": "SrvConexion",
    "Class": "Sindicatos",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "id"
        },
        "1": {
            "idSrc": "DSNombre",
            "Label": "Nombre"
        },
        "2": {
            "id": "Porcentaje",
            "idSrc": "DSPorcentaje",
            "Label": "Porcentaje"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_SindicatosBasicos"]={
    "id": "DS_SindicatosBasicos",
    "TipoSource": "SrvConexion",
    "Class": "SindicatosBasicos",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "id"
        },
        "1": {
            "idSrc": "DScategoria",
            "Label": "categoria"
        },
        "2": {
            "idSrc": "DSbasico",
            "Label": "basico"
        },
        "3": {
            "idSrc": "DSidsindicato",
            "Label": "idsindicato"
        },
        "4": {
            "idSrc": "DSNombreSindicato",
            "Label": "NombreSindicato"
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
