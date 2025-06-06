function CfgDataSources(id,Param){
var ret={};

ret["DS_AppModulos"]={
    "id": "DS_AppModulos",
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
            "idSrc": "DSestado",
            "Label": "Estado"
        },
        "8": {
            "idSrc": "DSorden_modulo",
            "Label": "Orden Modulo"
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
