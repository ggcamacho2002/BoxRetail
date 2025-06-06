function CfgDataSources(id,Param){
var ret={};

ret["DS_ComprasOrdenes"]={
    "id": "DS_ComprasOrdenes",
    "TipoSource": "SrvConexion",
    "Class": "ComprasOrdenes",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSpro_clave",
            "Label": "Pro Clave"
        },
        "2": {
            "idSrc": "DSrec_fecha",
            "Label": "Rec Fecha"
        },
        "3": {
            "idSrc": "DSrec_estado",
            "Label": "Rec Estado"
        },
        "4": {
            "idSrc": "DSpro_razon_social",
            "Label": "Pro Razon Social"
        },
        "5": {
            "id": "DsTipo",
            "idSrc": "DSrec_tipo",
            "Label": "DsTipo"
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSrec_estado",
            "Valor": "Pedido",
            "Tipo": "Igual"
        }
    },
    "CfgParam": {},
    "CfgOrden": {
        "0": {
            "idSrc": "DSrec_fecha",
            "Tipo": "DESC"
        }
    }
};
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
            "idSrc": "DSTelefono",
            "Label": "Telefono",
            "Orden": 2
        },
        "3": {
            "idSrc": "DSMail",
            "Label": "Mail",
            "Orden": 3
        },
        "4": {
            "idSrc": "DSestado",
            "Label": "Estado",
            "Orden": 4
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
    "CfgOrden": {
        "0": {
            "idSrc": "DSRazonSocial",
            "Tipo": "ASC"
        }
    }
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
            "idSrc": "DSSector",
            "Label": "Sector"
        },
        "18": {
            "idSrc": "DSCategoria",
            "Label": "Categoria"
        },
        "19": {
            "idSrc": "DSSubCategoria",
            "Label": "SubCategoria"
        },
        "20": {
            "idSrc": "DSTipo",
            "Label": "Tipo"
        },
        "21": {
            "idSrc": "DSTipoResumido",
            "Label": "TipoResumido"
        },
        "22": {
            "idSrc": "DSmarca",
            "Label": "Marca"
        },
        "23": {
            "idSrc": "DSPropietario",
            "Label": "Propietario"
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
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "id": "DSrec_clave",
            "idSrc": "DSrec_clave",
            "Label": "Rec Clave"
        },
        "2": {
            "id": "DSirc_cantidad_recibida",
            "idSrc": "DSirc_cantidad_recibida",
            "Label": "Irc Cantidad Recibida"
        },
        "3": {
            "id": "DSUnidPedida",
            "idSrc": "DSUnidPedida",
            "Label": "UnidPedida"
        },
        "4": {
            "id": "DSPackPedido",
            "idSrc": "DSPackPedido",
            "Label": "PackPedido"
        },
        "5": {
            "id": "DSirc_estado",
            "idSrc": "DSirc_estado",
            "Label": "Irc Estado"
        },
        "6": {
            "id": "DSprd_clave",
            "idSrc": "DSprd_clave",
            "Label": "Prd Clave"
        },
        "7": {
            "id": "DSorden",
            "idSrc": "DSorden",
            "Label": "Orden"
        },
        "8": {
            "id": "DSidproveedor",
            "idSrc": "DSidproveedor",
            "Label": "Idproveedor"
        },
        "9": {
            "id": "DSProducto",
            "idSrc": "DSProducto",
            "Label": "Producto"
        },
        "10": {
            "id": "DSprecioultcompra",
            "idSrc": "DSprecioultcompra",
            "Label": "Precioultcompra"
        },
        "11": {
            "id": "DSprecioultcompraPack",
            "idSrc": "DSprecioultcompraPack",
            "Label": "PrecioultcompraPack"
        },
        "12": {
            "id": "DSstockunidades",
            "idSrc": "DSstockunidades",
            "Label": "Stockunidades"
        },
        "13": {
            "id": "DSstockminunidades",
            "idSrc": "DSstockminunidades",
            "Label": "Stockminunidades"
        },
        "14": {
            "id": "DSdiasreposicion",
            "idSrc": "DSdiasreposicion",
            "Label": "Diasreposicion"
        },
        "15": {
            "id": "DSdiasUltCompra",
            "idSrc": "DSdiasUltCompra",
            "Label": "DiasUltCompra"
        },
        "16": {
            "id": "DSultimaAuditoria",
            "idSrc": "DSultimaAuditoria",
            "Label": "UltimaAuditoria"
        },
        "17": {
            "id": "DSultimacompracant",
            "idSrc": "DSultimacompracant",
            "Label": "Ultimacompracant"
        },
        "18": {
            "id": "DSdiasUltVenta",
            "idSrc": "DSdiasUltVenta",
            "Label": "DiasUltVenta"
        },
        "19": {
            "id": "DSvencimientodias",
            "idSrc": "DSvencimientodias",
            "Label": "Vencimientodias"
        },
        "20": {
            "id": "DSSubTotal",
            "idSrc": "DSSubTotal",
            "Label": "SubTotal"
        },
        "21": {
            "id": "DSPrd_estado",
            "idSrc": "DSPrd_estado",
            "Label": "Prd Estado"
        },
        "22": {
            "id": "DSCantxPack",
            "idSrc": "DSCantxPack",
            "Label": "CantxPack"
        },
        "23": {
            "id": "DSsector",
            "idSrc": "DSsector",
            "Label": "Sector"
        },
        "24": {
            "id": "DSCategoria",
            "idSrc": "DSCategoria",
            "Label": "Categoria"
        },
        "25": {
            "id": "DSSubCategoria",
            "idSrc": "DSSubCategoria",
            "Label": "SubCategoria"
        },
        "26": {
            "id": "DSTipo",
            "idSrc": "DSTipo",
            "Label": "Tipo"
        },
        "27": {
            "id": "DSMarca",
            "idSrc": "DSMarca",
            "Label": "Marca"
        },
        "28": {
            "id": "DSPropietario",
            "idSrc": "DSPropietario",
            "Label": "Propietario"
        },
        "29": {
            "id": "DSPackxBulto",
            "idSrc": "DSPackxBulto",
            "Label": "PackxBulto"
        },
        "30": {
            "id": "DSPackPisoPalet",
            "idSrc": "DSPackPisoPalet",
            "Label": "PackPisoPalet"
        },
        "31": {
            "id": "DSPackPalet",
            "idSrc": "DSPackPalet",
            "Label": "PackPalet"
        },
        "32": {
            "id": "DSPromDia",
            "idSrc": "DSPromDia",
            "Label": "PromDia"
        },
        "33": {
            "id": "DSSugPedido",
            "idSrc": "DSSugPedido",
            "Label": "SugPedido"
        },
        "34": {
            "id": "DSDiasStk",
            "idSrc": "DSDiasStk",
            "Label": "DiasStk"
        },
        "35": {
            "id": "DSPackRecibido",
            "idSrc": "DSPackRecibido",
            "Label": "DSPackRecibido"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {
        "0": {
            "idSrc": "DSorden",
            "Tipo": "ASC"
        }
    }
};
ret["DS_ComprasOrdenesEspera"]={
    "id": "DS_ComprasOrdenesEspera",
    "TipoSource": "SrvConexion",
    "Class": "ComprasOrdenes",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "id": "DSpro_clave",
            "idSrc": "DSpro_clave",
            "Label": "Pro Clave"
        },
        "2": {
            "id": "DSrec_fecha",
            "idSrc": "DSrec_fecha",
            "Label": "Rec Fecha"
        },
        "3": {
            "id": "DSrec_estado",
            "idSrc": "DSrec_estado",
            "Label": "Rec Estado"
        },
        "4": {
            "id": "DSpro_razon_social",
            "idSrc": "DSpro_razon_social",
            "Label": "Pro Razon Social"
        },
        "5": {
            "id": "DSpro_id",
            "idSrc": "DSpro_id",
            "Label": "Pro Id"
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSrec_estado",
            "Valor": "EnEspera",
            "Tipo": "Igual",
            "Orden": 0
        }
    },
    "CfgParam": {},
    "CfgOrden": {
        "0": {
            "idSrc": "DSrec_fecha",
            "Tipo": "DESC"
        }
    }
};
ret["DS_ComprasOrdenesSinEstado"]={
    "id": "DS_ComprasOrdenesSinEstado",
    "TipoSource": "SrvConexion",
    "Class": "ComprasOrdenes",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "id": "DSpro_clave",
            "idSrc": "DSpro_clave",
            "Label": "Pro Clave"
        },
        "2": {
            "id": "DSrec_fecha",
            "idSrc": "DSrec_fecha",
            "Label": "Rec Fecha"
        },
        "3": {
            "id": "DSrec_estado",
            "idSrc": "DSrec_estado",
            "Label": "Rec Estado"
        },
        "4": {
            "id": "DSpro_razon_social",
            "idSrc": "DSpro_razon_social",
            "Label": "Pro Razon Social"
        },
        "5": {
            "id": "DSpro_id",
            "idSrc": "DSpro_id",
            "Label": "Pro Id"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ComprasOrdenesControlado"]={
    "id": "DS_ComprasOrdenesControlado",
    "TipoSource": "SrvConexion",
    "Class": "ComprasOrdenes",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "id": "DSpro_clave",
            "idSrc": "DSpro_clave",
            "Label": "Pro Clave"
        },
        "2": {
            "id": "DSrec_fecha",
            "idSrc": "DSrec_fecha",
            "Label": "Rec Fecha"
        },
        "3": {
            "id": "DSrec_estado",
            "idSrc": "DSrec_estado",
            "Label": "Rec Estado"
        },
        "4": {
            "id": "DSpro_razon_social",
            "idSrc": "DSpro_razon_social",
            "Label": "Pro Razon Social"
        },
        "5": {
            "id": "DSpro_id",
            "idSrc": "DSpro_id",
            "Label": "Pro Id"
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSrec_estado",
            "Valor": "Controlado",
            "Tipo": "Igual"
        }
    },
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ComprasOrdenesItemsEspera"]={
    "id": "DS_ComprasOrdenesItemsEspera",
    "TipoSource": "SrvConexion",
    "Class": "ComprasOrdenesItems",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "id": "DSrec_clave",
            "idSrc": "DSrec_clave",
            "Label": "Rec Clave"
        },
        "2": {
            "id": "DSirc_cantidad_recibida",
            "idSrc": "DSirc_cantidad_recibida",
            "Label": "Irc Cantidad Recibida"
        },
        "3": {
            "id": "DSPackRecibido",
            "idSrc": "DSPackRecibido",
            "Label": "PackRecibido"
        },
        "4": {
            "id": "DSUnidPedida",
            "idSrc": "DSUnidPedida",
            "Label": "UnidPedida"
        },
        "5": {
            "id": "DSPackPedido",
            "idSrc": "DSPackPedido",
            "Label": "PackPedido"
        },
        "6": {
            "id": "DSirc_estado",
            "idSrc": "DSirc_estado",
            "Label": "Irc Estado"
        },
        "7": {
            "id": "DSprd_clave",
            "idSrc": "DSprd_clave",
            "Label": "Prd Clave"
        },
        "8": {
            "id": "DSorden",
            "idSrc": "DSorden",
            "Label": "Orden"
        },
        "9": {
            "id": "DSidproveedor",
            "idSrc": "DSidproveedor",
            "Label": "Idproveedor"
        },
        "10": {
            "id": "DSProducto",
            "idSrc": "DSProducto",
            "Label": "Producto"
        },
        "11": {
            "id": "DSprecioultcompra",
            "idSrc": "DSprecioultcompra",
            "Label": "Precioultcompra"
        },
        "12": {
            "id": "DSprecioultcompraPack",
            "idSrc": "DSprecioultcompraPack",
            "Label": "PrecioultcompraPack"
        },
        "13": {
            "id": "DSstockunidades",
            "idSrc": "DSstockunidades",
            "Label": "Stockunidades"
        },
        "14": {
            "id": "DSstockminunidades",
            "idSrc": "DSstockminunidades",
            "Label": "Stockminunidades"
        },
        "15": {
            "id": "DSdiasreposicion",
            "idSrc": "DSdiasreposicion",
            "Label": "Diasreposicion"
        },
        "16": {
            "id": "DSdiasUltCompra",
            "idSrc": "DSdiasUltCompra",
            "Label": "DiasUltCompra"
        },
        "17": {
            "id": "DSultimaAuditoria",
            "idSrc": "DSultimaAuditoria",
            "Label": "UltimaAuditoria"
        },
        "18": {
            "id": "DSultimacompracant",
            "idSrc": "DSultimacompracant",
            "Label": "Ultimacompracant"
        },
        "19": {
            "id": "DSdiasUltVenta",
            "idSrc": "DSdiasUltVenta",
            "Label": "DiasUltVenta"
        },
        "20": {
            "id": "DSvencimientodias",
            "idSrc": "DSvencimientodias",
            "Label": "Vencimientodias"
        },
        "21": {
            "id": "DSSubTotal",
            "idSrc": "DSSubTotal",
            "Label": "SubTotal"
        },
        "22": {
            "id": "DSPrd_estado",
            "idSrc": "DSPrd_estado",
            "Label": "Prd Estado"
        },
        "23": {
            "id": "DSCantxPack",
            "idSrc": "DSCantxPack",
            "Label": "CantxPack"
        },
        "24": {
            "id": "DSsector",
            "idSrc": "DSsector",
            "Label": "Sector"
        },
        "25": {
            "id": "DSCategoria",
            "idSrc": "DSCategoria",
            "Label": "Categoria"
        },
        "26": {
            "id": "DSSubCategoria",
            "idSrc": "DSSubCategoria",
            "Label": "SubCategoria"
        },
        "27": {
            "id": "DSTipo",
            "idSrc": "DSTipo",
            "Label": "Tipo"
        },
        "28": {
            "id": "DSMarca",
            "idSrc": "DSMarca",
            "Label": "Marca"
        },
        "29": {
            "id": "DSPropietario",
            "idSrc": "DSPropietario",
            "Label": "Propietario"
        },
        "30": {
            "id": "DSPackxBulto",
            "idSrc": "DSPackxBulto",
            "Label": "PackxBulto"
        },
        "31": {
            "id": "DSPackPisoPalet",
            "idSrc": "DSPackPisoPalet",
            "Label": "PackPisoPalet"
        },
        "32": {
            "id": "DSPackPalet",
            "idSrc": "DSPackPalet",
            "Label": "PackPalet"
        },
        "33": {
            "id": "DSPromDia",
            "idSrc": "DSPromDia",
            "Label": "PromDia"
        },
        "34": {
            "id": "DSSugPedido",
            "idSrc": "DSSugPedido",
            "Label": "SugPedido"
        },
        "35": {
            "id": "DSDiasStk",
            "idSrc": "DSDiasStk",
            "Label": "DiasStk"
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSirc_estado",
            "Valor": "EnEspera",
            "Tipo": "Igual"
        },
        "1": {
            "idSrc": "DSUnidPedida",
            "Valor": "0",
            "Tipo": "Mayor"
        }
    },
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_COItemsImprimirControlado"]={
    "id": "DS_COItemsImprimirControlado",
    "TipoSource": "SrvConexion",
    "Class": "ComprasOrdenesItems",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id",
            "Orden": 0
        },
        "1": {
            "id": "DSrec_clave",
            "idSrc": "DSrec_clave",
            "Label": "Rec Clave",
            "Orden": 1
        },
        "2": {
            "id": "DSirc_cantidad_recibida",
            "idSrc": "DSirc_cantidad_recibida",
            "Label": "Irc Cantidad Recibida",
            "Orden": 2
        },
        "3": {
            "id": "DSPackRecibido",
            "idSrc": "DSPackRecibido",
            "Label": "PackRecibido",
            "Orden": 3
        },
        "4": {
            "id": "DSUnidPedida",
            "idSrc": "DSUnidPedida",
            "Label": "UnidPedida",
            "Orden": 4
        },
        "5": {
            "id": "DSPackPedido",
            "idSrc": "DSPackPedido",
            "Label": "PackPedido",
            "Orden": 5
        },
        "6": {
            "id": "DSirc_estado",
            "idSrc": "DSirc_estado",
            "Label": "Irc Estado",
            "Orden": 6
        },
        "7": {
            "id": "DSorden",
            "idSrc": "DSorden",
            "Label": "Orden",
            "Orden": 7
        },
        "8": {
            "id": "DSidproveedor",
            "idSrc": "DSidproveedor",
            "Label": "Idproveedor",
            "Orden": 8
        },
        "9": {
            "id": "DSProducto",
            "idSrc": "DSProducto",
            "Label": "Producto",
            "Orden": 9
        },
        "10": {
            "id": "DSprecioultcompraPack",
            "idSrc": "DSprecioultcompraPack",
            "Label": "PrecioultcompraPack",
            "Orden": 10
        },
        "11": {
            "id": "DSCantxPack",
            "idSrc": "DSCantxPack",
            "Label": "CantxPack",
            "Orden": 11
        },
        "12": {
            "id": "DifUnid",
            "idSrc": "DSDifUnid",
            "Label": "DifUnid"
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSirc_estado",
            "Valor": "Controlado",
            "Tipo": "Igual"
        },
        "1": {
            "idSrc": "DSUnidPedida",
            "Valor": "0",
            "Tipo": "Mayor"
        }
    },
    "CfgParam": {},
    "CfgOrden": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
