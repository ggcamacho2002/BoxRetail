function CfgDataSources(id,Param){
var ret={};

ret["DS_PedidosControlado"]={
    "id": "DS_PedidosControlado",
    "TipoSource": "SrvConexion",
    "Class": "ComprasOrdenes",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "id"
        },
        "1": {
            "idSrc": "DSpro_clave",
            "Label": "pro_clave"
        },
        "2": {
            "idSrc": "DSrec_fecha",
            "Label": "rec_fecha"
        },
        "3": {
            "idSrc": "DSrec_estado",
            "Label": "rec_estado"
        },
        "4": {
            "idSrc": "DSpro_razon_social",
            "Label": "pro_razon_social"
        },
        "5": {
            "idSrc": "DSpro_id",
            "Label": "pro_id"
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
ret["DS_CompraRecepcion"]={
    "id": "DS_CompraRecepcion",
    "TipoSource": "SrvConexion",
    "Class": "DocumentoProveedor",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id",
            "Orden": 0
        },
        "1": {
            "id": "DSpro_clave",
            "idSrc": "DSpro_clave",
            "Label": "Pro Clave",
            "Orden": 1
        },
        "2": {
            "id": "DStic_clave",
            "idSrc": "DStic_clave",
            "Label": "Tic Clave",
            "Orden": 2
        },
        "3": {
            "id": "DSdop_estado",
            "idSrc": "DSdop_estado",
            "Label": "Dop Estado",
            "Orden": 3
        },
        "4": {
            "id": "DSdop_iva",
            "idSrc": "DSdop_iva",
            "Label": "Dop Iva",
            "Orden": 4
        },
        "5": {
            "id": "DSdop_iibb",
            "idSrc": "DSdop_iibb",
            "Label": "Dop Iibb",
            "Orden": 5
        },
        "6": {
            "id": "DSdop_retiva",
            "idSrc": "DSdop_retiva",
            "Label": "Dop Retiva",
            "Orden": 6
        },
        "7": {
            "id": "DSdop_neto",
            "idSrc": "DSdop_neto",
            "Label": "Dop Neto",
            "Orden": 7
        },
        "8": {
            "id": "DSdop_total",
            "idSrc": "DSdop_total",
            "Label": "Dop Total",
            "Orden": 8
        },
        "9": {
            "id": "DSrazon_social",
            "idSrc": "DSrazon_social",
            "Label": "Razon Social",
            "Orden": 9
        },
        "10": {
            "id": "DStic_descripcion",
            "idSrc": "DStic_descripcion",
            "Label": "Tic Descripcion",
            "Orden": 10
        },
        "11": {
            "id": "DSFecha",
            "idSrc": "DSdop_fecha",
            "Label": "DSFecha",
            "Orden": 11
        },
        "12": {
            "id": "idremito",
            "idSrc": "DSidremito",
            "Label": "idremito",
            "Orden": 12
        },
        "13": {
            "id": "NroDocProv",
            "idSrc": "DSnrodocprov",
            "Label": "NroDocProv",
            "Orden": 13
        },
        "14": {
            "id": "fechaprov",
            "idSrc": "DSfechaprov",
            "Label": "fechaprov",
            "Orden": 14
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSdop_estado",
            "Valor": "Recepcion",
            "Tipo": "Igual"
        }
    },
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ComprobantesTipo"]={
    "id": "DS_ComprobantesTipo",
    "TipoSource": "SrvConexion",
    "Class": "ComprobantesTipo",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Value",
            "Orden": 0
        },
        "1": {
            "id": "DSTic_descripcion",
            "idSrc": "DSTic_descripcion",
            "Label": "Label",
            "Orden": 1
        },
        "2": {
            "id": "DSCom_clave",
            "idSrc": "DSCom_clave",
            "Label": "Com Clave",
            "Orden": 2
        },
        "3": {
            "id": "DSTic_numero",
            "idSrc": "DSTic_numero",
            "Label": "Tic Numero",
            "Orden": 3
        },
        "4": {
            "id": "DSCom_estado",
            "idSrc": "DSCom_estado",
            "Label": "Com Estado",
            "Orden": 4
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSCom_clave",
            "Valor": "2",
            "Tipo": "Igual",
            "Orden": 0
        },
        "1": {
            "idSrc": "DSTic_estado",
            "Valor": "activo",
            "Tipo": "Igual"
        }
    },
    "CfgParam": {},
    "CfgOrden": {
        "0": {
            "idSrc": "DStic_orden",
            "Tipo": "ASC"
        }
    }
};
ret["DS_DocumentoProveedorItems"]={
    "id": "DS_DocumentoProveedorItems",
    "TipoSource": "SrvConexion",
    "Class": "DocumentoProveedorItems",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id",
            "Orden": 0
        },
        "1": {
            "id": "DSdop_clave",
            "idSrc": "DSdop_clave",
            "Label": "Dop Clave",
            "Orden": 1
        },
        "2": {
            "id": "DSprd_clave",
            "idSrc": "DSprd_clave",
            "Label": "Prd Clave",
            "Orden": 2
        },
        "3": {
            "id": "DSdescripcion",
            "idSrc": "DSdescripcion",
            "Label": "Descripcion",
            "Orden": 3
        },
        "4": {
            "id": "DSestado",
            "idSrc": "DSestado",
            "Label": "Estado",
            "Orden": 4
        },
        "5": {
            "id": "DSiva",
            "idSrc": "DSiva",
            "Label": "Iva",
            "Orden": 5
        },
        "6": {
            "id": "DSretiva",
            "idSrc": "DSretiva",
            "Label": "Retiva",
            "Orden": 6
        },
        "7": {
            "id": "DSneto",
            "idSrc": "DSneto",
            "Label": "Neto",
            "Orden": 7
        },
        "8": {
            "id": "DStotal",
            "idSrc": "DStotal",
            "Label": "Total",
            "Orden": 8
        },
        "9": {
            "id": "DScantidad",
            "idSrc": "DScantidad",
            "Label": "Cantidad",
            "Orden": 9
        },
        "10": {
            "id": "DSirc_clave",
            "idSrc": "DSirc_clave",
            "Label": "Irc Clave",
            "Orden": 10
        },
        "11": {
            "id": "DSfecha",
            "idSrc": "DSfecha",
            "Label": "Fecha",
            "Orden": 11
        },
        "12": {
            "id": "DSorden",
            "idSrc": "DSorden",
            "Label": "Orden",
            "Orden": 12
        },
        "13": {
            "id": "DSPorcBonif",
            "idSrc": "DSPorcBonif",
            "Label": "PorcBonif",
            "Orden": 13
        },
        "14": {
            "id": "DSBonif",
            "idSrc": "DSBonif",
            "Label": "Bonif",
            "Orden": 14
        },
        "15": {
            "id": "DSNetoUnid",
            "idSrc": "DSNetoUnid",
            "Label": "NetoUnid",
            "Orden": 15
        },
        "16": {
            "id": "DSPorcIVA",
            "idSrc": "DSPorcIVA",
            "Label": "PorcIVA",
            "Orden": 16
        },
        "17": {
            "id": "DSPorcRetIva",
            "idSrc": "DSPorcRetIva",
            "Label": "PorcRetIva",
            "Orden": 17
        },
        "18": {
            "id": "DSPorcRetIIBB",
            "idSrc": "DSPorcRetIIBB",
            "Label": "PorcRetIIBB",
            "Orden": 18
        },
        "19": {
            "id": "DSImpInterno",
            "idSrc": "DSImpInterno",
            "Label": "ImpInterno",
            "Orden": 19
        },
        "20": {
            "id": "DSPorcImpInterno",
            "idSrc": "DSPorcImpInterno",
            "Label": "PorcImpInterno",
            "Orden": 20
        },
        "21": {
            "id": "DSprod_descripcion",
            "idSrc": "DSprod_descripcion",
            "Label": "Prod Descripcion",
            "Orden": 21
        },
        "22": {
            "id": "DSCantxPack",
            "idSrc": "DSCantxPack",
            "Label": "CantxPack",
            "Orden": 22
        },
        "23": {
            "id": "DSPacks",
            "idSrc": "DSPacks",
            "Label": "Packs",
            "Orden": 23
        },
        "24": {
            "id": "DSNetoPack",
            "idSrc": "DSNetoPack",
            "Label": "NetoPack",
            "Orden": 24
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSestado",
            "Valor": "Recepcion",
            "Tipo": "Igual"
        }
    },
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_DocsGuardados"]={
    "id": "DS_DocsGuardados",
    "TipoSource": "SrvConexion",
    "Class": "DocumentoProveedor",
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
            "id": "DStic_clave",
            "idSrc": "DStic_clave",
            "Label": "Tic Clave"
        },
        "3": {
            "id": "DSdop_estado",
            "idSrc": "DSdop_estado",
            "Label": "Dop Estado"
        },
        "4": {
            "id": "DSdop_fecha",
            "idSrc": "DSdop_fecha",
            "Label": "Dop Fecha"
        },
        "5": {
            "id": "DSdop_iva",
            "idSrc": "DSdop_iva",
            "Label": "Dop Iva"
        },
        "6": {
            "id": "DSdop_iibb",
            "idSrc": "DSdop_iibb",
            "Label": "Dop Iibb"
        },
        "7": {
            "id": "DSdop_retiva",
            "idSrc": "DSdop_retiva",
            "Label": "Dop Retiva"
        },
        "8": {
            "id": "DSdop_neto",
            "idSrc": "DSdop_neto",
            "Label": "Dop Neto"
        },
        "9": {
            "id": "DSdop_total",
            "idSrc": "DSdop_total",
            "Label": "Dop Total"
        },
        "10": {
            "id": "DSidremito",
            "idSrc": "DSidremito",
            "Label": "Idremito"
        },
        "11": {
            "id": "DSnrodocprov",
            "idSrc": "DSnrodocprov",
            "Label": "Nrodocprov"
        },
        "12": {
            "id": "DSfechaprov",
            "idSrc": "DSfechaprov",
            "Label": "Fechaprov"
        },
        "13": {
            "id": "DSrazon_social",
            "idSrc": "DSrazon_social",
            "Label": "Razon Social"
        },
        "14": {
            "id": "DStic_descripcion",
            "idSrc": "DStic_descripcion",
            "Label": "Tic Descripcion"
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSdop_estado",
            "Valor": "Guardado",
            "Tipo": "Igual"
        }
    },
    "CfgParam": {},
    "CfgOrden": {
        "0": {
            "idSrc": "DSdop_fecha",
            "Tipo": "DESC"
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
