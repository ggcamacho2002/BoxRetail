function CfgDataSources(id,Param){
var ret={};

ret["DS_Proveedores"]={
    "id": "DS_Proveedores",
    "TipoSource": "SrvConexion",
    "Class": "Proveedores",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id",
            "Orden": 0
        },
        "1": {
            "idSrc": "DSRazonSocial",
            "Label": "RazonSocial",
            "Orden": 1
        },
        "2": {
            "idSrc": "DSestado",
            "Label": "Estado",
            "Orden": 2
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ProveedorProducto"]={
    "id": "DS_ProveedorProducto",
    "TipoSource": "SrvConexion",
    "Class": "ProveedoresProductos",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSidProv",
            "Label": "IdProv"
        },
        "2": {
            "idSrc": "DSidProd",
            "Label": "IdProd"
        },
        "3": {
            "idSrc": "DSestado",
            "Label": "Estado"
        },
        "4": {
            "idSrc": "DSNombreProdProv",
            "Label": "NombreProdProv"
        },
        "5": {
            "idSrc": "DSCodProdProv",
            "Label": "CodProdProv"
        },
        "6": {
            "idSrc": "DSnombreProducto",
            "Label": "NombreProducto"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_Productos"]={
    "id": "DS_Productos",
    "TipoSource": "SrvConexion",
    "Class": "Productos",
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
            "idSrc": "DSTipoResumido",
            "Label": "TipoResumido"
        },
        "23": {
            "id": "DSPropietario",
            "idSrc": "DSPropietario",
            "Label": "Propietario"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ExcelProvProducto"]={
    "id": "DS_ExcelProvProducto",
    "TipoSource": "Excel",
    "Class": "ExcelProveedorProducto",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSFile",
            "Label": "File"
        },
        "2": {
            "idSrc": "COD",
            "Label": "COD"
        },
        "3": {
            "idSrc": "PRODUCTO",
            "Label": "PRODUCTO"
        },
        "4": {
            "idSrc": "BARCODE",
            "Label": "BARCODE"
        },
        "5": {
            "idSrc": "CodPropio",
            "Label": "CodPropio"
        },
        "6": {
            "idSrc": "NombrePropio",
            "Label": "NombrePropio"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {
        "0": {
            "Key": "idRelacion",
            "Value": "REL_ExcelProvProducto"
        }
    },
    "CfgOrden": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
