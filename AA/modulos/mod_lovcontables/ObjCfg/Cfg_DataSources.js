function CfgDataSources(id,Param){
var ret={};

ret["DS_TasasImpuestos"]={
    "id": "DS_TasasImpuestos",
    "TipoSource": "SrvConexion",
    "Class": "TasasImpuestos",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSNombre",
            "Label": "Nombre"
        },
        "2": {
            "idSrc": "DSPorc",
            "Label": "Porc"
        },
        "3": {
            "idSrc": "DSMinimo",
            "Label": "Minimo"
        },
        "4": {
            "idSrc": "DSEstado",
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
