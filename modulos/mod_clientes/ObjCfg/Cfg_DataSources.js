function CfgDataSources(id,Param){
var ret={};

ret["DS_Clientes"]={
    "id": "DS_Clientes",
    "TipoSource": "SrvConexion",
    "Class": "Clientes",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSrazon_social",
            "Label": "Razon Social"
        },
        "2": {
            "idSrc": "DSdireccion",
            "Label": "Direccion"
        },
        "3": {
            "idSrc": "DStelefono",
            "Label": "Telefono"
        },
        "4": {
            "idSrc": "DSmail",
            "Label": "Mail"
        },
        "5": {
            "idSrc": "DSestado",
            "Label": "Estado"
        },
        "6": {
            "idSrc": "DSnombre_adic",
            "Label": "Nombre Adicional"
        },
        "7": {
            "idSrc": "DSidtipocliente",
            "Label": "Tipo Cliente"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_InfoCliente"]={
    "id": "DS_InfoCliente",
    "TipoSource": "SrvConexion",
    "Class": "Clientes",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSrazon_social",
            "Label": "Razon Social"
        },
        "2": {
            "idSrc": "DSdireccion",
            "Label": "Direccion"
        },
        "3": {
            "idSrc": "DStelefono",
            "Label": "Telefono"
        },
        "4": {
            "idSrc": "DSmail",
            "Label": "Mail"
        },
        "5": {
            "idSrc": "DSestado",
            "Label": "Estado"
        },
        "6": {
            "idSrc": "DSnombre_adic",
            "Label": "Nombre Adicional"
        },
        "7": {
            "idSrc": "DSidtipocliente",
            "Label": "Tipo Cliente"
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
