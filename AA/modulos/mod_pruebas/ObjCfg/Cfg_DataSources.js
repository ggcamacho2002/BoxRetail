function CfgDataSources(id,Param){
var ret={};

ret["DS_proveed"]={
    "id": "DS_proveed",
    "TipoSource": "SrvConexion",
    "Class": "Proveedores",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "id"
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
            "Label": "estado"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_compra"]={
    "id": "DS_compra",
    "TipoSource": "SrvConexion",
    "Class": "ComprasOrdenesItems",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id",
            "Orden": 0
        },
        "1": {
            "idSrc": "DSrec_clave",
            "Label": "Rec Clave",
            "Orden": 1
        },
        "2": {
            "idSrc": "DSirc_cantidad_recibida",
            "Label": "Irc Cantidad Recibida",
            "Orden": 2
        },
        "3": {
            "idSrc": "DSUnidPedida",
            "Label": "UnidPedida",
            "Orden": 3
        },
        "4": {
            "idSrc": "DSPackPedido",
            "Label": "PackPedido",
            "Orden": 4
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ComprasOrdenesItems"]={
    "id": "DS_ComprasOrdenesItems",
    "TipoSource": "SrvConexion",
    "Class": "ComprasOrdenesItems",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSrec_clave",
            "Label": "Rec Clave"
        },
        "2": {
            "idSrc": "DSirc_cantidad_recibida",
            "Label": "Irc Cantidad Recibida"
        },
        "3": {
            "idSrc": "DSUnidPedida",
            "Label": "UnidPedida"
        },
        "4": {
            "idSrc": "DSPackPedido",
            "Label": "PackPedido"
        },
        "5": {
            "idSrc": "DSirc_estado",
            "Label": "Irc Estado"
        },
        "7": {
            "idSrc": "DSProducto",
            "Label": "Producto"
        },
        "8": {
            "idSrc": "DSprecioultcompra",
            "Label": "Precioultcompra"
        },
        "9": {
            "idSrc": "DSprecioultcompraPack",
            "Label": "PrecioultcompraPack"
        },
        "10": {
            "idSrc": "DSstockunidades",
            "Label": "Stockunidades"
        },
        "11": {
            "idSrc": "DSstockminunidades",
            "Label": "Stockminunidades"
        },
        "12": {
            "idSrc": "DSdiasreposicion",
            "Label": "Diasreposicion"
        },
        "13": {
            "idSrc": "DSdiasUltCompra",
            "Label": "DiasUltCompra"
        },
        "14": {
            "idSrc": "DSultimaAuditoria",
            "Label": "UltimaAuditoria"
        },
        "15": {
            "idSrc": "DSultimacompracant",
            "Label": "Ultimacompracant"
        },
        "16": {
            "idSrc": "DSdiasUltVenta",
            "Label": "DiasUltVenta"
        },
        "17": {
            "idSrc": "DSvencimientodias",
            "Label": "Vencimientodias"
        },
        "18": {
            "idSrc": "DSSubTotal",
            "Label": "SubTotal"
        },
        "19": {
            "idSrc": "DSPrd_estado",
            "Label": "Prd Estado"
        },
        "20": {
            "idSrc": "DSCantxPack",
            "Label": "CantxPack"
        },
        "21": {
            "idSrc": "DSsector",
            "Label": "Sector"
        },
        "22": {
            "idSrc": "DSCategoria",
            "Label": "Categoria"
        },
        "23": {
            "idSrc": "DSSubCategoria",
            "Label": "SubCategoria"
        },
        "24": {
            "idSrc": "DSTipo",
            "Label": "Tipo"
        },
        "25": {
            "idSrc": "DSMarca",
            "Label": "Marca"
        },
        "26": {
            "idSrc": "DSPropietario",
            "Label": "Propietario"
        },
        "27": {
            "idSrc": "DSPackxBulto",
            "Label": "PackxBulto"
        },
        "28": {
            "idSrc": "DSPackPisoPalet",
            "Label": "PackPisoPalet"
        },
        "29": {
            "idSrc": "DSPackPalet",
            "Label": "PackPalet"
        },
        "30": {
            "idSrc": "DSPromDia",
            "Label": "PromDia"
        },
        "31": {
            "idSrc": "DSSugPedido",
            "Label": "SugPedido"
        },
        "32": {
            "idSrc": "DSDiasStk",
            "Label": "DiasStk"
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
