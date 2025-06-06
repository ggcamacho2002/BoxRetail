function CfgDataSources(id,Param){
var ret={};

ret["DS_ProductosPrecios"]={
    "id": "DS_ProductosPrecios",
    "TipoSource": "SrvConexion",
    "Class": "ProductosPrecios",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSidProd",
            "Label": "IdProd"
        },
        "2": {
            "idSrc": "DSDias",
            "Label": "Dias"
        },
        "3": {
            "idSrc": "DSPVentaUnid",
            "Label": "PVentaUnid"
        },
        "4": {
            "idSrc": "DSPVentaPack",
            "Label": "PVentaPack"
        },
        "5": {
            "idSrc": "DSPVentaPorc",
            "Label": "PVentaPorc"
        },
        "6": {
            "idSrc": "DSPCompraUnid",
            "Label": "PCompraUnid"
        },
        "7": {
            "idSrc": "DSPCompraPack",
            "Label": "PCompraPack"
        },
        "8": {
            "idSrc": "DSPrecioCompraPendiente",
            "Label": "PrecioCompraPendiente"
        },
        "9": {
            "idSrc": "DSPCompraAntUnid",
            "Label": "PCompraAntUnid"
        },
        "10": {
            "idSrc": "DSDifCompraAnt",
            "Label": "DifCompraAnt"
        },
        "11": {
            "idSrc": "DSNombreProducto",
            "Label": "NombreProducto"
        },
        "12": {
            "idSrc": "DSEstadoProducto",
            "Label": "EstadoProducto"
        },
        "13": {
            "idSrc": "DSsector",
            "Label": "Sector"
        },
        "14": {
            "idSrc": "DSCategoria",
            "Label": "Categoria"
        },
        "15": {
            "idSrc": "DSSubCategoria",
            "Label": "SubCategoria"
        },
        "16": {
            "idSrc": "DSTipo",
            "Label": "Tipo"
        },
        "17": {
            "idSrc": "DSMarca",
            "Label": "Marca"
        },
        "18": {
            "idSrc": "DSPropietario",
            "Label": "Propietario"
        },
        "19": {
            "id": "DSCantxPack",
            "idSrc": "DSCantxPack",
            "Label": "CantxPack"
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
