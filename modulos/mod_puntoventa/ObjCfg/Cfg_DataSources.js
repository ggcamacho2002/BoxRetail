function CfgDataSources(id,Param){
var ret={};

ret["DS_Clientes"]={
    "id": "DS_Clientes",
    "TipoSource": "SrvConexion",
    "Class": "Clientes",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id",
            "Orden": 0
        },
        "1": {
            "id": "DSrazon_social",
            "idSrc": "DSrazon_social",
            "Label": "Razon Social",
            "Orden": 1
        },
        "2": {
            "id": "DSdireccion",
            "idSrc": "DSdireccion",
            "Label": "Direccion",
            "Orden": 2
        },
        "3": {
            "id": "DStelefono",
            "idSrc": "DStelefono",
            "Label": "Telefono",
            "Orden": 3
        },
        "4": {
            "id": "DSmail",
            "idSrc": "DSmail",
            "Label": "Mail",
            "Orden": 4
        },
        "5": {
            "id": "DSestado",
            "idSrc": "DSestado",
            "Label": "Estado",
            "Orden": 5
        },
        "6": {
            "id": "DSnombre_adic",
            "idSrc": "DSnombre_adic",
            "Label": "Nombre Adic",
            "Orden": 6
        },
        "7": {
            "id": "DSImpPorc_IVA",
            "idSrc": "DSImpPorc_IVA",
            "Label": "ImpPorc IVA",
            "Orden": 7
        },
        "8": {
            "id": "DSImpPorc_RENTAS",
            "idSrc": "DSImpPorc_RENTAS",
            "Label": "ImpPorc RENTAS",
            "Orden": 8
        },
        "9": {
            "id": "DSidtipocliente",
            "idSrc": "DSidtipocliente",
            "Label": "Idtipocliente",
            "Orden": 9
        },
        "10": {
            "id": "DStipo",
            "idSrc": "DStipo",
            "Label": "Tipo",
            "Orden": 10
        },
        "11": {
            "id": "DSdescuento",
            "idSrc": "DSdescuento",
            "Label": "Descuento",
            "Orden": 11
        },
        "12": {
            "id": "DSmaxctacte",
            "idSrc": "DSmaxctacte",
            "Label": "DSmaxctacte",
            "Orden": 12
        },
        "13": {
            "id": "DScheque",
            "idSrc": "DScheque",
            "Label": "DScheque",
            "Orden": 13
        },
        "14": {
            "id": "DSidCondicionIva",
            "idSrc": "DSidCondicionIva",
            "Label": "DSidCondicionIva"
        },
        "15": {
            "id": "DSdoctipo",
            "idSrc": "DSdoctipo",
            "Label": "DSdoctipo"
        },
        "16": {
            "id": "DSdocnro",
            "idSrc": "DSdocnro",
            "Label": "DSdocnro"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_Comanda"]={
    "id": "DS_Comanda",
    "TipoSource": "SrvConexion",
    "Class": "PuntoVentaComandas",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id",
            "Orden": 0
        },
        "1": {
            "id": "DSrev_estado",
            "idSrc": "DSrev_estado",
            "Label": "Rev Estado",
            "Orden": 1
        },
        "2": {
            "id": "DSrev_fecha",
            "idSrc": "DSrev_fecha",
            "Label": "Rev Fecha",
            "Orden": 2
        },
        "3": {
            "id": "DScli_clave",
            "idSrc": "DScli_clave",
            "Label": "Cli Clave",
            "Orden": 3
        },
        "4": {
            "id": "DSsys_usuario",
            "idSrc": "DSsys_usuario",
            "Label": "Sys Usuario",
            "Orden": 4
        },
        "5": {
            "id": "DScli_razon_social",
            "idSrc": "DScli_razon_social",
            "Label": "Cli Razon Social",
            "Orden": 5
        },
        "6": {
            "id": "DScli_direccion",
            "idSrc": "DScli_direccion",
            "Label": "Cli Direccion",
            "Orden": 6
        },
        "7": {
            "id": "DScli_telefono",
            "idSrc": "DScli_telefono",
            "Label": "Cli Telefono",
            "Orden": 7
        },
        "8": {
            "id": "DScli_mail",
            "idSrc": "DScli_mail",
            "Label": "Cli Mail",
            "Orden": 8
        },
        "9": {
            "id": "DScli_estado",
            "idSrc": "DScli_estado",
            "Label": "Cli Estado",
            "Orden": 9
        },
        "10": {
            "id": "DScli_Descuento",
            "idSrc": "DScli_Descuento",
            "Label": "DScli_Descuento",
            "Orden": 10
        },
        "11": {
            "id": "DSmaxctacte",
            "idSrc": "DSmaxctacte",
            "Label": "DSmaxctacte",
            "Orden": 11
        },
        "12": {
            "id": "DScheque",
            "idSrc": "DScheque",
            "Label": "DScheque",
            "Orden": 12
        },
        "13": {
            "id": "DSidrecibo",
            "idSrc": "DSidrecibo",
            "Label": "DSidrecibo",
            "Orden": 13
        },
        "14": {
            "id": "DScomentario",
            "idSrc": "DScomentario",
            "Label": "DScomentario"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ComandasItems"]={
    "id": "DS_ComandasItems",
    "TipoSource": "SrvConexion",
    "Class": "PuntoVentaComandasItems",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id",
            "Orden": 0
        },
        "1": {
            "id": "DScantPedida",
            "idSrc": "DScantPedida",
            "Label": "CantPedida",
            "Orden": 1
        },
        "2": {
            "id": "DScantVendida",
            "idSrc": "DScantVendida",
            "Label": "CantVendida",
            "Orden": 2
        },
        "3": {
            "id": "DSestado",
            "idSrc": "DSestado",
            "Label": "Estado",
            "Orden": 3
        },
        "4": {
            "id": "DSidRemitoV",
            "idSrc": "DSidRemitoV",
            "Label": "IdRemitoV",
            "Orden": 4
        },
        "5": {
            "id": "DSidProducto",
            "idSrc": "DSidProducto",
            "Label": "IdProducto",
            "Orden": 5
        },
        "6": {
            "id": "DSProducto",
            "idSrc": "DSProducto",
            "Label": "Producto",
            "Orden": 6
        },
        "7": {
            "id": "DSEstadoProd",
            "idSrc": "DSEstadoProd",
            "Label": "EstadoProd",
            "Orden": 7
        },
        "8": {
            "id": "DSEstadoRemitoV",
            "idSrc": "DSEstadoRemitoV",
            "Label": "EstadoRemitoV",
            "Orden": 8
        },
        "9": {
            "id": "DSFechaRemitoV",
            "idSrc": "DSFechaRemitoV",
            "Label": "FechaRemitoV",
            "Orden": 9
        },
        "10": {
            "id": "DSidCliente",
            "idSrc": "DSidCliente",
            "Label": "DSidCliente",
            "Orden": 10
        },
        "11": {
            "id": "DSPacksPedido",
            "idSrc": "DSPacksPedido",
            "Label": "DSPacksPedido",
            "Orden": 11
        },
        "12": {
            "id": "DSprecioventa",
            "idSrc": "DSprecioventa",
            "Label": "DSprecioventa",
            "Orden": 12
        },
        "13": {
            "id": "DSCantxPack",
            "idSrc": "DSCantxPack",
            "Label": "DSCantxPack",
            "Orden": 13
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_CajasAperturaCierre"]={
    "id": "DS_CajasAperturaCierre",
    "TipoSource": "SrvConexion",
    "Class": "CajasAperturaCierre",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id",
            "Orden": 0
        },
        "1": {
            "id": "DSestado",
            "idSrc": "DSestado",
            "Label": "Estado",
            "Orden": 1
        },
        "2": {
            "id": "DShora_apertura",
            "idSrc": "DShora_apertura",
            "Label": "Hora Apertura",
            "Orden": 2
        },
        "3": {
            "id": "DShora_cierre",
            "idSrc": "DShora_cierre",
            "Label": "DShora_cierre",
            "Orden": 3
        },
        "4": {
            "id": "DScambio",
            "idSrc": "DScambio",
            "Label": "Cambio",
            "Orden": 4
        },
        "5": {
            "id": "DSusuario",
            "idSrc": "DSsys_usuario",
            "Label": "Usuario",
            "Orden": 5
        },
        "6": {
            "id": "DSfacturado",
            "idSrc": "DSfacturado",
            "Label": "Facturado",
            "Orden": 6
        },
        "7": {
            "id": "DSretiros",
            "idSrc": "DSretiros",
            "Label": "Retiros",
            "Orden": 7
        },
        "8": {
            "id": "DSefectivo",
            "idSrc": "DSefectivo",
            "Label": "Efectivo",
            "Orden": 8
        },
        "9": {
            "id": "DSctacte",
            "idSrc": "DSctacte",
            "Label": "Ctacte",
            "Orden": 9
        },
        "10": {
            "id": "DScheques",
            "idSrc": "DScheques",
            "Label": "Cheques",
            "Orden": 10
        },
        "11": {
            "id": "DSDigital",
            "idSrc": "DSDigital",
            "Label": "Digital",
            "Orden": 11
        },
        "12": {
            "id": "DSdiferencia",
            "idSrc": "DSdiferencia",
            "Label": "Diferencia",
            "Orden": 12
        },
        "13": {
            "id": "DScobroctacte",
            "idSrc": "DScobroctacte",
            "Label": "Cobroctacte",
            "Orden": 13
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_DocumentoClientes"]={
    "id": "DS_DocumentoClientes",
    "TipoSource": "SrvConexion",
    "Class": "DocumentoClientes",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "id": "DSidTipoComprobante",
            "idSrc": "DSidTipoComprobante",
            "Label": "IdTipoComprobante"
        },
        "2": {
            "id": "DSidCliente",
            "idSrc": "DSidCliente",
            "Label": "IdCliente"
        },
        "3": {
            "id": "DSfechaemision",
            "idSrc": "DSfechaemision",
            "Label": "Fechaemision"
        },
        "4": {
            "id": "DSfechavencimiento",
            "idSrc": "DSfechavencimiento",
            "Label": "Fechavencimiento"
        },
        "5": {
            "id": "DSnetogravado",
            "idSrc": "DSnetogravado",
            "Label": "Netogravado"
        },
        "6": {
            "id": "DSexento",
            "idSrc": "DSexento",
            "Label": "Exento"
        },
        "7": {
            "id": "DStotal",
            "idSrc": "DStotal",
            "Label": "Total"
        },
        "8": {
            "id": "DSsaldo",
            "idSrc": "DSsaldo",
            "Label": "Saldo"
        },
        "9": {
            "id": "DSestado",
            "idSrc": "DSestado",
            "Label": "Estado"
        },
        "10": {
            "id": "DScodigotipocomprobante",
            "idSrc": "DScodigotipocomprobante",
            "Label": "Codigotipocomprobante"
        },
        "11": {
            "id": "DSnumeropuntoventa",
            "idSrc": "DSnumeropuntoventa",
            "Label": "Numeropuntoventa"
        },
        "12": {
            "id": "DSnumerocomprobante",
            "idSrc": "DSnumerocomprobante",
            "Label": "Numerocomprobante"
        },
        "13": {
            "id": "DSimportesubtotal",
            "idSrc": "DSimportesubtotal",
            "Label": "Importesubtotal"
        },
        "14": {
            "id": "DSimportetotal",
            "idSrc": "DSimportetotal",
            "Label": "Importetotal"
        },
        "15": {
            "id": "DScodigomoneda",
            "idSrc": "DScodigomoneda",
            "Label": "Codigomoneda"
        },
        "16": {
            "id": "DScodigoconcepto",
            "idSrc": "DScodigoconcepto",
            "Label": "Codigoconcepto"
        },
        "17": {
            "id": "DSrazon_social",
            "idSrc": "DSrazon_social",
            "Label": "Razon Social"
        },
        "18": {
            "id": "DSdireccion_cliente",
            "idSrc": "DSdireccion_cliente",
            "Label": "Direccion Cliente"
        },
        "19": {
            "id": "DSdescripcion_tipo_comprobante",
            "idSrc": "DSdescripcion_tipo_comprobante",
            "Label": "Descripcion Tipo Comprobante"
        },
        "20": {
            "id": "DSTipoMoneda",
            "idSrc": "DSTipoMoneda",
            "Label": "TipoMoneda"
        },
        "21": {
            "id": "DSCotizacionMoneda",
            "idSrc": "DSCotizacionMoneda",
            "Label": "CotizacionMoneda"
        },
        "22": {
            "id": "DSidremito",
            "idSrc": "DSidremito",
            "Label": "DSidremito"
        },
        "23": {
            "id": "DScheque",
            "idSrc": "DScheque",
            "Label": "DScheque"
        },
        "24": {
            "id": "DSmaxctacte",
            "idSrc": "DSmaxctacte",
            "Label": "DSmaxctacte"
        },
        "25": {
            "id": "DSidcondicioniva",
            "idSrc": "DSidcondicioniva",
            "Label": "DSidcondicioniva"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ComboTipoMonedas"]={
    "id": "DS_ComboTipoMonedas",
    "TipoSource": "SrvConexion",
    "Class": "Monedas",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Value",
            "Orden": 0
        },
        "1": {
            "id": "DSTipoMoneda",
            "idSrc": "DSTipoMoneda",
            "Label": "Label",
            "Orden": 1
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSEstado",
            "Valor": "Activo",
            "Tipo": "Igual"
        }
    },
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ComboComprobantesTipo"]={
    "id": "DS_ComboComprobantesTipo",
    "TipoSource": "SrvConexion",
    "Class": "ComprobantesTipo",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Valor",
            "Orden": 0
        },
        "1": {
            "id": "DSTic_descripcion",
            "idSrc": "DSTic_descripcion",
            "Label": "Label",
            "Orden": 1
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSTic_DeudorAcreedor",
            "Valor": "D",
            "Tipo": "Igual"
        },
        "1": {
            "idSrc": "DSCom_descripcion",
            "Valor": "Facturacion",
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
ret["DS_ComboCobrosEntidades"]={
    "id": "DS_ComboCobrosEntidades",
    "TipoSource": "SrvConexion",
    "Class": "CobrosEntidades",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Value",
            "Orden": 0
        },
        "1": {
            "id": "DSnombreentidad",
            "idSrc": "DSnombreentidad",
            "Label": "Label",
            "Orden": 1
        },
        "2": {
            "id": "DSestado",
            "idSrc": "DSestado",
            "Label": "Estado",
            "Orden": 2
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSestado",
            "Valor": "Activo",
            "Tipo": "Igual"
        },
        "1": {
            "idSrc": "DStipo",
            "Valor": "Digital",
            "Tipo": "Igual"
        }
    },
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ClientesCtaCte"]={
    "id": "DS_ClientesCtaCte",
    "TipoSource": "SrvConexion",
    "Class": "ClientesCtaCte",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "id": "DSfechaemision",
            "idSrc": "DSfechaemision",
            "Label": "Fechaemision"
        },
        "2": {
            "id": "DStotal",
            "idSrc": "DStotal",
            "Label": "Total"
        },
        "3": {
            "id": "DSestado",
            "idSrc": "DSestado",
            "Label": "Estado"
        },
        "4": {
            "id": "DSidMoneda",
            "idSrc": "DSidMoneda",
            "Label": "IdMoneda"
        },
        "5": {
            "id": "DSidremito",
            "idSrc": "DSidremito",
            "Label": "Idremito"
        },
        "6": {
            "id": "DSrazon_social",
            "idSrc": "DSrazon_social",
            "Label": "Razon Social"
        },
        "7": {
            "id": "DSMaxCtaCte",
            "idSrc": "DSMaxCtaCte",
            "Label": "MaxCtaCte"
        },
        "8": {
            "id": "DSTipoMoneda",
            "idSrc": "DSTipoMoneda",
            "Label": "TipoMoneda"
        },
        "9": {
            "id": "DSCotizacionMoneda",
            "idSrc": "DSCotizacionMoneda",
            "Label": "CotizacionMoneda"
        },
        "10": {
            "id": "DScodigomoneda",
            "idSrc": "DScodigomoneda",
            "Label": "Codigomoneda"
        },
        "11": {
            "id": "DSsaldo",
            "idSrc": "DSsaldo",
            "Label": "Saldo"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ImprimirComanda"]={
    "id": "DS_ImprimirComanda",
    "TipoSource": "SrvConexion",
    "Class": "PuntoVentaComandas",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "id": "DSrev_estado",
            "idSrc": "DSrev_estado",
            "Label": "Rev Estado"
        },
        "2": {
            "id": "DSrev_fecha",
            "idSrc": "DSrev_fecha",
            "Label": "Rev Fecha"
        },
        "3": {
            "id": "DScli_clave",
            "idSrc": "DScli_clave",
            "Label": "Cli Clave"
        },
        "4": {
            "id": "DSsys_usuario",
            "idSrc": "DSsys_usuario",
            "Label": "Sys Usuario"
        },
        "5": {
            "id": "DSrev_Sector",
            "idSrc": "DSrev_Sector",
            "Label": "Rev Sector"
        },
        "6": {
            "id": "DScli_razon_social",
            "idSrc": "DScli_razon_social",
            "Label": "Cli Razon Social"
        },
        "7": {
            "id": "DScli_direccion",
            "idSrc": "DScli_direccion",
            "Label": "Cli Direccion"
        },
        "8": {
            "id": "DScli_cuit",
            "idSrc": "DScli_cuit",
            "Label": "Cli Cuit"
        },
        "9": {
            "id": "DScli_telefono",
            "idSrc": "DScli_telefono",
            "Label": "Cli Telefono"
        },
        "10": {
            "id": "DScli_mail",
            "idSrc": "DScli_mail",
            "Label": "Cli Mail"
        },
        "11": {
            "id": "DScli_estado",
            "idSrc": "DScli_estado",
            "Label": "Cli Estado"
        },
        "12": {
            "id": "DSmaxctacte",
            "idSrc": "DSmaxctacte",
            "Label": "Maxctacte"
        },
        "13": {
            "id": "DScli_Descuento",
            "idSrc": "DScli_Descuento",
            "Label": "Cli Descuento"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {
        "0": {
            "Key": "",
            "Value": ""
        }
    },
    "CfgOrden": {}
};
ret["DS_ClientesRecibos"]={
    "id": "DS_ClientesRecibos",
    "TipoSource": "SrvConexion",
    "Class": "ClientesRecibos",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "id": "DSidcliente",
            "idSrc": "DSidcliente",
            "Label": "Idcliente"
        },
        "2": {
            "id": "DSidremito",
            "idSrc": "DSidremito",
            "Label": "Idremito"
        },
        "3": {
            "id": "DSiddocumento",
            "idSrc": "DSiddocumento",
            "Label": "Iddocumento"
        },
        "4": {
            "id": "DSfecha",
            "idSrc": "DSfecha",
            "Label": "Fecha"
        },
        "5": {
            "id": "DSmonto",
            "idSrc": "DSmonto",
            "Label": "Monto"
        },
        "6": {
            "id": "DSestado",
            "idSrc": "DSestado",
            "Label": "Estado"
        },
        "7": {
            "id": "DSsys_usuario",
            "idSrc": "DSsys_usuario",
            "Label": "Sys Usuario"
        },
        "8": {
            "id": "DSClienteNombre",
            "idSrc": "DSClienteNombre",
            "Label": "ClienteNombre"
        },
        "9": {
            "id": "DSClienteMaxCtaCte",
            "idSrc": "DSClienteMaxCtaCte",
            "Label": "ClienteMaxCtaCte"
        },
        "10": {
            "id": "DSClienteCheque",
            "idSrc": "DSClienteCheque",
            "Label": "ClienteCheque"
        },
        "11": {
            "id": "DSnumeroRemito",
            "idSrc": "DSnumeroRemito",
            "Label": "NumeroRemito"
        },
        "12": {
            "id": "DSentidad",
            "idSrc": "DSentidad",
            "Label": "DSentidad"
        },
        "13": {
            "id": "DSIdCondicionIva",
            "idSrc": "DSIdCondicionIva",
            "Label": "DSIdCondicionIva"
        },
        "14": {
            "id": "DSDetalleCondicionIva",
            "idSrc": "DSDetalleCondicionIva",
            "Label": "DSDetalleCondicionIva"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ClientesRecibosItems"]={
    "id": "DS_ClientesRecibosItems",
    "TipoSource": "SrvConexion",
    "Class": "ClientesRecibosItems",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "id": "DSestado",
            "idSrc": "DSestado",
            "Label": "Estado"
        },
        "2": {
            "id": "DSmonto",
            "idSrc": "DSmonto",
            "Label": "Monto"
        },
        "3": {
            "id": "DSentidad",
            "idSrc": "DSentidad",
            "Label": "Entidad"
        },
        "4": {
            "id": "DSidcobroentidades",
            "idSrc": "DSidcobroentidades",
            "Label": "Idcobroentidades"
        },
        "5": {
            "id": "DSidentidad",
            "idSrc": "DSidentidad",
            "Label": "Identidad"
        },
        "6": {
            "id": "DSreferencia",
            "idSrc": "DSreferencia",
            "Label": "Referencia"
        },
        "7": {
            "id": "DSdetalle",
            "idSrc": "DSdetalle",
            "Label": "Detalle"
        },
        "8": {
            "id": "DSnombreentidad",
            "idSrc": "DSnombreentidad",
            "Label": "Nombreentidad"
        },
        "9": {
            "id": "DStasaentidad",
            "idSrc": "DStasaentidad",
            "Label": "Tasaentidad"
        },
        "10": {
            "id": "DSidcliente",
            "idSrc": "DSidcliente",
            "Label": "Idcliente"
        },
        "11": {
            "id": "DSidrecibo",
            "idSrc": "DSidrecibo",
            "Label": "Idrecibo"
        },
        "12": {
            "id": "DSchqNro",
            "idSrc": "DSchqNro",
            "Label": "ChqNro"
        },
        "13": {
            "id": "DSchqBanco",
            "idSrc": "DSchqBanco",
            "Label": "ChqBanco"
        },
        "14": {
            "id": "DSchqfechaV",
            "idSrc": "DSchqfechaV",
            "Label": "ChqfechaV"
        },
        "15": {
            "id": "DSchqidmoneda",
            "idSrc": "DSchqidmoneda",
            "Label": "Chqidmoneda"
        },
        "16": {
            "id": "DSchqcoment",
            "idSrc": "DSchqcoment",
            "Label": "Chqcoment"
        },
        "17": {
            "id": "DSidRemito",
            "idSrc": "DSidRemito",
            "Label": "DSidRemito"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_POSListaProductos"]={
    "id": "DS_POSListaProductos",
    "TipoSource": "SrvConexion",
    "Class": "PuntoVentaProductos",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "id": "DSidProd",
            "idSrc": "DSidProd",
            "Label": "Clave"
        },
        "2": {
            "id": "DSNombreProducto",
            "idSrc": "DSNombreProducto",
            "Label": "Nombre Producto"
        },
        "3": {
            "id": "DSEstadoProducto",
            "idSrc": "DSEstadoProducto",
            "Label": "Estado"
        },
        "4": {
            "id": "DSCantxPack",
            "idSrc": "DSCantxPack",
            "Label": "Cant x Pack"
        },
        "5": {
            "id": "DSBarcode",
            "idSrc": "DSBarcode",
            "Label": "Código de Barras"
        },
        "6": {
            "id": "DSBarcodePack",
            "idSrc": "DSBarcodePack",
            "Label": "Código de Barras Pack"
        },
        "7": {
            "id": "DSPVentaUnid",
            "idSrc": "DSPVentaUnid",
            "Label": "Precio Venta"
        },
        "8": {
            "id": "DSPVentaPack",
            "idSrc": "DSPVentaPack",
            "Label": "Precio Venta Pack"
        },
        "9": {
            "id": "DSPVentaPorc",
            "idSrc": "DSPVentaPorc",
            "Label": "Porcentaje Venta"
        },
        "10": {
            "id": "DSFlagOferta",
            "idSrc": "DSFlagOferta",
            "Label": "Oferta"
        },
        "11": {
            "id": "DSPClienteUnid",
            "idSrc": "DSPClienteUnid",
            "Label": "Precio Cliente Unidad"
        },
        "12": {
            "id": "DSPClientePack",
            "idSrc": "DSPClientePack",
            "Label": "Precio Cliente Pack"
        },
        "13": {
            "id": "DSidCliente",
            "idSrc": "DSidCliente",
            "Label": "Id Cliente"
        },
        "14": {
            "id": "DSidRemito",
            "idSrc": "DSidRemito",
            "Label": "Id Remito"
        },
        "15": {
            "id": "DSCliDescuento",
            "idSrc": "DSCliDescuento",
            "Label": "Cliente Descuento"
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSEstadoProducto",
            "Valor": "inactivo",
            "Tipo": "NoIgual"
        }
    },
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_AfipFacturaTicket"]={
    "id": "DS_AfipFacturaTicket",
    "TipoSource": "SrvConexion",
    "Class": "AfipFacturaTicket",
    "CfgItems": {
        "0": {
            "id": "id",
            "idSrc": "id",
            "Label": "Id"
        },
        "1": {
            "id": "Concepto",
            "idSrc": "Concepto",
            "Label": "Concepto"
        },
        "2": {
            "id": "DocTipo",
            "idSrc": "DocTipo",
            "Label": "DocTipo"
        },
        "3": {
            "id": "DocNro",
            "idSrc": "DocNro",
            "Label": "DocNro"
        },
        "4": {
            "id": "CbteFch",
            "idSrc": "CbteFch",
            "Label": "CbteFch"
        },
        "5": {
            "id": "ImpNeto",
            "idSrc": "ImpNeto",
            "Label": "ImpNeto"
        },
        "6": {
            "id": "ImpTotConc",
            "idSrc": "ImpTotConc",
            "Label": "ImpTotConc"
        },
        "7": {
            "id": "ImpIVA",
            "idSrc": "ImpIVA",
            "Label": "ImpIVA"
        },
        "8": {
            "id": "ImpTrib",
            "idSrc": "ImpTrib",
            "Label": "ImpTrib"
        },
        "9": {
            "id": "ImpOpEx",
            "idSrc": "ImpOpEx",
            "Label": "ImpOpEx"
        },
        "10": {
            "id": "ImpTotal",
            "idSrc": "ImpTotal",
            "Label": "ImpTotal"
        },
        "11": {
            "id": "MonId",
            "idSrc": "MonId",
            "Label": "MonId"
        },
        "12": {
            "id": "MonCotiz",
            "idSrc": "MonCotiz",
            "Label": "MonCotiz"
        },
        "13": {
            "id": "AlicIvaId",
            "idSrc": "AlicIvaId",
            "Label": "AlicIvaId"
        },
        "14": {
            "id": "IvaBaseImp",
            "idSrc": "IvaBaseImp",
            "Label": "IvaBaseImp"
        },
        "15": {
            "id": "IvaImporte",
            "idSrc": "IvaImporte",
            "Label": "IvaImporte"
        },
        "16": {
            "id": "TributoId",
            "idSrc": "TributoId",
            "Label": "TributoId"
        },
        "17": {
            "id": "TributoDesc",
            "idSrc": "TributoDesc",
            "Label": "TributoDesc"
        },
        "18": {
            "id": "TributoBaseImp",
            "idSrc": "TributoBaseImp",
            "Label": "TributoBaseImp"
        },
        "19": {
            "id": "TributoAlic",
            "idSrc": "TributoAlic",
            "Label": "TributoAlic"
        },
        "20": {
            "id": "TributoImporte",
            "idSrc": "TributoImporte",
            "Label": "TributoImporte"
        },
        "21": {
            "id": "idcliente",
            "idSrc": "idcliente",
            "Label": "idcliente"
        },
        "22": {
            "id": "idremito",
            "idSrc": "idremito",
            "Label": "idremito"
        },
        "23": {
            "id": "CallEntidad",
            "idSrc": "CallEntidad",
            "Label": "CallEntidad"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_AfipFacturaTicketImprimir"]={
    "id": "DS_AfipFacturaTicketImprimir",
    "TipoSource": "SrvConexion",
    "Class": "AfipFacturaTicketImprimir",
    "CfgItems": {
        "0": {
            "id": "id",
            "idSrc": "id",
            "Label": "Id"
        },
        "1": {
            "id": "idFactura",
            "idSrc": "idFactura",
            "Label": "IdFactura"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ListaPedidos"]={
    "id": "DS_ListaPedidos",
    "TipoSource": "SrvConexion",
    "Class": "PuntoVentaComandas",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "id": "DSrev_estado",
            "idSrc": "DSrev_estado",
            "Label": "Rev Estado"
        },
        "2": {
            "id": "DSrev_fecha",
            "idSrc": "DSrev_fecha",
            "Label": "Rev Fecha"
        },
        "3": {
            "id": "DScli_clave",
            "idSrc": "DScli_clave",
            "Label": "Cli Clave"
        },
        "4": {
            "id": "DSsys_usuario",
            "idSrc": "DSsys_usuario",
            "Label": "Sys Usuario"
        },
        "5": {
            "id": "DSrev_Sector",
            "idSrc": "DSrev_Sector",
            "Label": "Rev Sector"
        },
        "6": {
            "id": "DScomentario",
            "idSrc": "DScomentario",
            "Label": "Comentario"
        },
        "7": {
            "id": "DScli_razon_social",
            "idSrc": "DScli_razon_social",
            "Label": "Cli Razon Social"
        },
        "8": {
            "id": "DScli_direccion",
            "idSrc": "DScli_direccion",
            "Label": "Cli Direccion"
        },
        "9": {
            "id": "DScli_doctipo",
            "idSrc": "DScli_doctipo",
            "Label": "Cli Doctipo"
        },
        "10": {
            "id": "DScli_docnro",
            "idSrc": "DScli_docnro",
            "Label": "Cli Docnro"
        },
        "11": {
            "id": "DScli_telefono",
            "idSrc": "DScli_telefono",
            "Label": "Cli Telefono"
        },
        "12": {
            "id": "DScli_mail",
            "idSrc": "DScli_mail",
            "Label": "Cli Mail"
        },
        "13": {
            "id": "DScli_estado",
            "idSrc": "DScli_estado",
            "Label": "Cli Estado"
        },
        "14": {
            "id": "DScheque",
            "idSrc": "DScheque",
            "Label": "Cheque"
        },
        "15": {
            "id": "DSmaxctacte",
            "idSrc": "DSmaxctacte",
            "Label": "Maxctacte"
        },
        "16": {
            "id": "DScli_Descuento",
            "idSrc": "DScli_Descuento",
            "Label": "Cli Descuento"
        },
        "17": {
            "id": "DSidrecibo",
            "idSrc": "DSidrecibo",
            "Label": "Idrecibo"
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DSrev_estado",
            "Valor": "Pedido",
            "Tipo": "Igual",
            "Orden": 0
        }
    },
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_InfoProducto"]={
    "id": "DS_InfoProducto",
    "TipoSource": "SrvConexion",
    "Class": "PuntoVentaProductos",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id",
            "Orden": 0
        },
        "1": {
            "id": "DSidProd",
            "idSrc": "DSidProd",
            "Label": "Clave",
            "Orden": 1
        },
        "2": {
            "id": "DSNombreProducto",
            "idSrc": "DSNombreProducto",
            "Label": "Nombre Producto",
            "Orden": 2
        },
        "3": {
            "id": "DSEstadoProducto",
            "idSrc": "DSEstadoProducto",
            "Label": "Estado",
            "Orden": 3
        },
        "4": {
            "id": "DSCantxPack",
            "idSrc": "DSCantxPack",
            "Label": "Cant x Pack",
            "Orden": 4
        },
        "5": {
            "id": "DSBarcode",
            "idSrc": "DSBarcode",
            "Label": "Código de Barras",
            "Orden": 5
        },
        "6": {
            "id": "DSBarcodePack",
            "idSrc": "DSBarcodePack",
            "Label": "Código de Barras Pack",
            "Orden": 6
        },
        "7": {
            "id": "DSPVentaUnid",
            "idSrc": "DSPVentaUnid",
            "Label": "Precio Venta",
            "Orden": 7
        },
        "8": {
            "id": "DSPVentaPack",
            "idSrc": "DSPVentaPack",
            "Label": "Precio Venta Pack",
            "Orden": 8
        },
        "9": {
            "id": "DSPVentaPorc",
            "idSrc": "DSPVentaPorc",
            "Label": "Porcentaje Venta",
            "Orden": 9
        },
        "10": {
            "id": "DSFlagOferta",
            "idSrc": "DSFlagOferta",
            "Label": "Oferta",
            "Orden": 10
        },
        "11": {
            "id": "DSPClienteUnid",
            "idSrc": "DSPClienteUnid",
            "Label": "Precio Cliente Unidad",
            "Orden": 11
        },
        "12": {
            "id": "DSPClientePack",
            "idSrc": "DSPClientePack",
            "Label": "Precio Cliente Pack",
            "Orden": 12
        },
        "13": {
            "id": "DSidCliente",
            "idSrc": "DSidCliente",
            "Label": "Id Cliente",
            "Orden": 13
        },
        "14": {
            "id": "DSidRemito",
            "idSrc": "DSidRemito",
            "Label": "Id Remito",
            "Orden": 14
        },
        "15": {
            "id": "DSCliDescuento",
            "idSrc": "DSCliDescuento",
            "Label": "Cliente Descuento",
            "Orden": 15
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
