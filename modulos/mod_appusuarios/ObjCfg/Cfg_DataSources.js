function CfgDataSources(id,Param){
var ret={};

ret["DS_AppUsuarios"]={
    "id": "DS_AppUsuarios",
    "TipoSource": "SrvConexion",
    "Class": "AppUsuarios",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "DSid"
        },
        "1": {
            "idSrc": "DSnombre",
            "Label": "DSnombre"
        },
        "2": {
            "idSrc": "DSclave",
            "Label": "DSclave"
        },
        "3": {
            "idSrc": "DSestado",
            "Label": "DSestado"
        },
        "4": {
            "idSrc": "DSidrol",
            "Label": "Rol"
        },
        "5": {
            "idSrc": "DSnombrerol",
            "Label": "NombreRol"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ListaRoles"]={
    "id": "DS_ListaRoles",
    "TipoSource": "SrvConexion",
    "Class": "AppRoles",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Value"
        },
        "1": {
            "idSrc": "DSnombre",
            "Label": "Label"
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSestado",
            "Valor": "Activo",
            "Tipo": "Igual"
        }
    },
    "CfgParam": {},
    "CfgOrden": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
