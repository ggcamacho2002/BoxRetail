function CfgDataSources(id,Param){
var ret={};

ret["DS_AppRoles"]={
    "id": "DS_AppRoles",
    "TipoSource": "SrvConexion",
    "Class": "AppRoles",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSnombre",
            "Label": "Nombre"
        },
        "2": {
            "idSrc": "DSestado",
            "Label": "Estado"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_AppRolModulo"]={
    "id": "DS_AppRolModulo",
    "TipoSource": "SrvConexion",
    "Class": "AppRolesModulos",
    "CfgItems": {
        "0": {
            "idSrc": "DSidrol",
            "Label": "Idrol"
        },
        "1": {
            "idSrc": "DSidmodulo",
            "Label": "Idmodulo"
        },
        "2": {
            "idSrc": "DSnombremodulo",
            "Label": "NombreModulo"
        },
        "3": {
            "idSrc": "DStitulomodulo",
            "Label": "Titulo Modulo"
        },
        "4": {
            "idSrc": "DSid",
            "Label": "Id"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ListaModulos"]={
    "id": "DS_ListaModulos",
    "TipoSource": "SrvConexion",
    "Class": "AppModulos",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSseccion",
            "Label": "Seccion"
        },
        "2": {
            "idSrc": "DSsubseccion",
            "Label": "Subseccion"
        },
        "3": {
            "idSrc": "DStitulo",
            "Label": "Titulo"
        },
        "4": {
            "idSrc": "DSmodulo",
            "Label": "Modulo"
        },
        "5": {
            "idSrc": "DSorden_seccion",
            "Label": "Orden Seccion"
        },
        "6": {
            "idSrc": "DSorden_subseccion",
            "Label": "Orden Subseccion"
        },
        "7": {
            "idSrc": "DSorden_modulo",
            "Label": "Orden Modulo"
        },
        "8": {
            "idSrc": "DSestado",
            "Label": "Estado"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
