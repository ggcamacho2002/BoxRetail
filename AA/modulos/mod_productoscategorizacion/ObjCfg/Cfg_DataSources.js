function CfgDataSources(id,Param){
var ret={};

ret["DS_ProdCat"]={
    "id": "DS_ProdCat",
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
            "idSrc": "DSEstado",
            "Label": "Estado"
        },
        "5": {
            "idSrc": "DSidvieja",
            "Label": "Idvieja"
        },
        "6": {
            "idSrc": "DSCategoria",
            "Label": "Categoria"
        },
        "7": {
            "idSrc": "DSSubCategoria",
            "Label": "SubCategoria"
        },
        "8": {
            "idSrc": "DSTipo",
            "Label": "Tipo"
        },
        "9": {
            "idSrc": "DSTipoResumido",
            "Label": "TipoResumido"
        },
        "10": {
            "id": "DSSector",
            "idSrc": "DSSector",
            "Label": "Sector"
        },
        "11": {
            "id": "DSidSector",
            "idSrc": "DSidSector",
            "Label": "idSector"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_Categorias"]={
    "id": "DS_Categorias",
    "TipoSource": "SrvConexion",
    "Class": "ProductosCategorias",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSCategoria",
            "Label": "Categoria"
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
ret["DS_SubCategorias"]={
    "id": "DS_SubCategorias",
    "TipoSource": "SrvConexion",
    "Class": "ProductosSubCategorias",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSSubCategoria",
            "Label": "SubCategoria"
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
ret["DS_ProdTipos"]={
    "id": "DS_ProdTipos",
    "TipoSource": "SrvConexion",
    "Class": "ProductosTipos",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSProdTipo",
            "Label": "ProdTipo"
        },
        "2": {
            "idSrc": "DSProdTipoResumido",
            "Label": "ProdTipoResumido"
        },
        "3": {
            "idSrc": "DSestado",
            "Label": "Estado"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_Sectores"]={
    "id": "DS_Sectores",
    "TipoSource": "SrvConexion",
    "Class": "ProductosSectores",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSSector",
            "Label": "Sector"
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

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
