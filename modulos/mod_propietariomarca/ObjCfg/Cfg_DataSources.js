function CfgDataSources(id,Param){
var ret={};

ret["DS_Propietario"]={
    "id": "DS_Propietario",
    "TipoSource": "SrvConexion",
    "Class": "Propietario",
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
            "idSrc": "DSestado",
            "Label": "Estado"
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
ret["DS_PropietarioMarca"]={
    "id": "DS_PropietarioMarca",
    "TipoSource": "SrvConexion",
    "Class": "PropietarioMarcas",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSidMarca",
            "Label": "IdMarca"
        },
        "2": {
            "idSrc": "DSidProp",
            "Label": "IdProp"
        },
        "3": {
            "idSrc": "DSPMEstado",
            "Label": "PMEstado"
        },
        "4": {
            "idSrc": "DSMarca",
            "Label": "Marca"
        },
        "5": {
            "idSrc": "DSPropietario",
            "Label": "Propietario"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ListaMarcas"]={
    "id": "DS_ListaMarcas",
    "TipoSource": "SrvConexion",
    "Class": "ProductosMarcas",
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
            "idSrc": "DSestado",
            "Label": "Estado"
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

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
