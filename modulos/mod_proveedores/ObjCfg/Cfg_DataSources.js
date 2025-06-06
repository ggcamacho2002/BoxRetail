function CfgDataSources(id,Param){
var ret={};

ret["DS_Proveedores"]={
    "id": "DS_Proveedores",
    "TipoSource": "SrvConexion",
    "Class": "Proveedores",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSRazonSocial",
            "Label": "RazonSocial"
        },
        "2": {
            "idSrc": "DSDireccion",
            "Label": "Direccion"
        },
        "3": {
            "idSrc": "DSTelefono",
            "Label": "Telefono"
        },
        "4": {
            "idSrc": "DSMail",
            "Label": "Mail"
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
ret["DS_ProveedorImp"]={
    "id": "DS_ProveedorImp",
    "TipoSource": "SrvConexion",
    "Class": "ProveedoresImpuestos",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSidproveedor",
            "Label": "Idproveedor"
        },
        "2": {
            "idSrc": "DSidimpuesto",
            "Label": "Idimpuesto"
        },
        "3": {
            "idSrc": "DSRazonSocial",
            "Label": "RazonSocial"
        },
        "4": {
            "idSrc": "DSNombreImp",
            "Label": "NombreImp"
        },
        "5": {
            "idSrc": "DSPorcImp",
            "Label": "PorcImp"
        },
        "6": {
            "idSrc": "DSMininmoImp",
            "Label": "MininmoImp"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
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

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
