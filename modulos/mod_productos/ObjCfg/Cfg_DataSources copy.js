function CfgDataSources(id,Param){
var ret={};

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
ret["DS_Categorizacion"]={
    "id": "DS_Categorizacion",
    "TipoSource": "SrvConexion",
    "Class": "ProductosCategorizacion",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSidCategoria",
            "Label": "IdCategoria"
        },
        "2": {
            "idSrc": "DSidSubCategoria",
            "Label": "IdSubCategoria"
        },
        "3": {
            "idSrc": "DSidTipoProducto",
            "Label": "IdTipoProducto"
        },
        "4": {
            "idSrc": "DSidSector",
            "Label": "IdSector"
        },
        "5": {
            "idSrc": "DSEstado",
            "Label": "Estado"
        },
        "6": {
            "idSrc": "DSidvieja",
            "Label": "Idvieja"
        },
        "7": {
            "idSrc": "DSSector",
            "Label": "Sector"
        },
        "8": {
            "idSrc": "DSCategoria",
            "Label": "Categoria"
        },
        "9": {
            "idSrc": "DSSubCategoria",
            "Label": "SubCategoria"
        },
        "10": {
            "idSrc": "DSTipo",
            "Label": "Tipo"
        },
        "11": {
            "idSrc": "DSTipoResumido",
            "Label": "TipoResumido"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ListaProductos"]={
    "id": "DS_ListaProductos",
    "TipoSource": "SrvConexion",
    "Class": "Productos",
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
            "idSrc": "DSEstado",
            "Label": "Estado"
        },
        "3": {
            "idSrc": "DSDetalle",
            "Label": "Detalle"
        },
        "4": {
            "idSrc": "DSUnidMedida",
            "Label": "UnidMedida"
        },
        "5": {
            "idSrc": "DSMedida",
            "Label": "Medida"
        },
        "6": {
            "idSrc": "DSCantxPack",
            "Label": "CantxPack"
        },
        "7": {
            "idSrc": "DSTipoInNombre",
            "Label": "TipoInNombre"
        },
        "8": {
            "idSrc": "DSPackxBulto",
            "Label": "PackxBulto"
        },
        "9": {
            "idSrc": "DSPackPisoPalet",
            "Label": "PackPisoPalet"
        },
        "10": {
            "idSrc": "DSPackPalet",
            "Label": "PackPalet"
        },
        "11": {
            "idSrc": "DSBarcode",
            "Label": "Barcode"
        },
        "12": {
            "idSrc": "DSBarcodePack",
            "Label": "BarcodePack"
        },
        "13": {
            "idSrc": "DSBarcodeBulto",
            "Label": "BarcodeBulto"
        },
        "14": {
            "idSrc": "DSNota",
            "Label": "Nota"
        },
        "15": {
            "idSrc": "DSidMarca",
            "Label": "IdMarca"
        },
        "16": {
            "idSrc": "DSidCategoriza",
            "Label": "IdCategoriza"
        },
        "17": {
            "idSrc": "DSmarca",
            "Label": "Marca"
        },
        "18": {
            "idSrc": "DSSector",
            "Label": "Sector"
        },
        "19": {
            "idSrc": "DSCategoria",
            "Label": "Categoria"
        },
        "20": {
            "idSrc": "DSSubCategoria",
            "Label": "SubCategoria"
        },
        "21": {
            "idSrc": "DSTipo",
            "Label": "Tipo"
        },
        "22": {
            "id": "DSTipoResumido",
            "idSrc": "DSTipoResumido",
            "Label": "TipoResumido"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};

    /*UltimoRegistroDelCfg*/

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
