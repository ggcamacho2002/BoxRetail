function CfgRelaciones(id,Param){
var ret={};

ret["REL_InsertComandaItem"]={
    "id": "REL_InsertComandaItem",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Comanda",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ComandasItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidRemitoV"
                },
                "1": {
                    "ItemObjGet": "DScli_clave",
                    "ItemObjSet": "DSidCliente"
                }
            },
            "Condicionales": {},
            "Orden": 0
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_CargaProducto",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ComandasItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSidProducto",
                    "ItemObjSet": "DSidProducto"
                },
                "1": {
                    "ItemObjGet": "DScantPedida",
                    "ItemObjSet": "DScantPedida"
                },
                "2": {
                    "ItemObjGet": "DSprecioventa",
                    "ItemObjSet": "DSprecioventa"
                }
            },
            "Condicionales": {},
            "Orden": 1
        }
    },
    "MapeoValor": {}
};
ret["REL_BuscarComandasItems"]={
    "id": "REL_BuscarComandasItems",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Comanda",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_ComandasItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidRemitoV"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};
ret["REL_ProductosClientes"]={
    "id": "REL_ProductosClientes",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Comanda",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_POSListaProductos",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DScli_clave",
                    "ItemObjSet": "DSidCliente",
                    "Orden": 0
                },
                "1": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidRemito",
                    "Orden": 1
                }
            },
            "Condicionales": {},
            "Orden": 0
        }
    },
    "MapeoValor": {}
};
ret["REL_CambiarCliente"]={
    "id": "REL_CambiarCliente",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Tabla",
            "IdObjGet": "TBL_Clientes",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_Comanda",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DScli_clave"
                }
            },
            "Condicionales": {},
            "Orden": 0
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Comanda",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_Comanda",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSid",
                    "Orden": 0
                },
                "1": {
                    "ItemObjGet": "DSidrecibo",
                    "ItemObjSet": "DSidrecibo",
                    "Orden": 1
                }
            },
            "Condicionales": {},
            "Orden": 1
        }
    },
    "MapeoValor": {}
};
ret["REL_InfoCliente"]={
    "id": "REL_InfoCliente",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Comanda",
            "TipoObjSet": "Formulario",
            "IdObjSet": "FRM_InfoCliente",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DScli_clave",
                    "ItemObjSet": "DSid"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};
ret["REL_InfoProducto"]={
    "id": "REL_InfoProducto",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Tabla",
            "IdObjGet": "TBL_POSListaProductos",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_InfoProducto",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSidProd",
                    "ItemObjSet": "DSidProd"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};
ret["REL_ComandaPendiente"]={
    "id": "REL_ComandaPendiente",
    "Mapeo": {},
    "MapeoValor": {
        "0": {
            "Cardinalidad": "",
            "Valor": "Formando",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_Comanda",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSrev_estado"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_NuevoRecibo"]={
    "id": "REL_NuevoRecibo",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Comanda",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_DocumentoClientes",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidremito",
                    "Orden": 0
                },
                "1": {
                    "ItemObjGet": "DScli_clave",
                    "ItemObjSet": "DSidCliente",
                    "Orden": 1
                }
            },
            "Condicionales": {},
            "Orden": 0
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "SuperTabla",
            "IdObjGet": "ST_ComandasItems",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_DocumentoClientes",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "Subtotal",
                    "ItemObjSet": "DStotal"
                }
            },
            "Condicionales": {},
            "Orden": 1
        }
    },
    "MapeoValor": {
        "0": {
            "Cardinalidad": "",
            "Valor": "3",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_DocumentoClientes",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSidTipoComprobante"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_BsqFormaCobro"]={
    "id": "REL_BsqFormaCobro",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_NuevoRecibo",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_ListaFormaCobro",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidrecibo",
                    "Orden": 0
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};
ret["REL_NuevoCobroDigital"]={
    "id": "REL_NuevoCobroDigital",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_NuevoRecibo",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ClientesRecibosItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidrecibo",
                    "Orden": 0
                },
                "1": {
                    "ItemObjGet": "DSidcliente",
                    "ItemObjSet": "DSidcliente"
                },
                "2": {
                    "ItemObjGet": "DSidremito",
                    "ItemObjSet": "DSidRemito"
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_CobroDigital",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ClientesRecibosItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSidcobroentidades",
                    "ItemObjSet": "DSidcobroentidades",
                    "Orden": 0
                },
                "1": {
                    "ItemObjGet": "DSreferencia",
                    "ItemObjSet": "DSreferencia",
                    "Orden": 1
                },
                "2": {
                    "ItemObjGet": "DSmonto",
                    "ItemObjSet": "DSmonto",
                    "Orden": 2
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "Valor": "Digital",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ClientesRecibosItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSentidad"
                }
            },
            "Condicionales": {},
            "Orden": 0
        }
    }
};
ret["REL_BsqSaldoCtaCte"]={
    "id": "REL_BsqSaldoCtaCte",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_NuevoRecibo",
            "TipoObjSet": "Formulario",
            "IdObjSet": "FRM_CobroCtaCte",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "",
                    "ItemObjSet": ""
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};
ret["REL_NuevoCobroCtaCte"]={
    "id": "REL_NuevoCobroCtaCte",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_CobroCtaCte",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ClientesRecibosItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSmonto",
                    "ItemObjSet": "DSmonto",
                    "Orden": 0
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_NuevoRecibo",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ClientesRecibosItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidrecibo",
                    "Orden": 0
                },
                "1": {
                    "ItemObjGet": "DSidcliente",
                    "ItemObjSet": "DSidcliente",
                    "Orden": 1
                },
                "2": {
                    "ItemObjGet": "DSidremito",
                    "ItemObjSet": "DSidRemito"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {
        "0": {
            "Cardinalidad": "",
            "Valor": "CtaCte",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ClientesRecibosItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSentidad"
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "Valor": "4",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ClientesRecibosItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSidcobroentidades"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_NewChequeTraerCliente"]={
    "id": "REL_NewChequeTraerCliente",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_NuevoRecibo",
            "TipoObjSet": "Formulario",
            "IdObjSet": "FRM_NuevoCheque",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSidCliente",
                    "ItemObjSet": "DSidcliente"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};
ret["REL_NuevoCobroCheque"]={
    "id": "REL_NuevoCobroCheque",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_NuevoCheque",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ClientesRecibosItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSnumerocheque",
                    "ItemObjSet": "DSchqNro"
                },
                "1": {
                    "ItemObjGet": "DSbanco",
                    "ItemObjSet": "DSchqBanco"
                },
                "2": {
                    "ItemObjGet": "DSfecha_vencimiento",
                    "ItemObjSet": "DSchqfechaV"
                },
                "3": {
                    "ItemObjGet": "DSmonto",
                    "ItemObjSet": "DSmonto"
                },
                "4": {
                    "ItemObjGet": "DSidmoneda",
                    "ItemObjSet": "DSchqidmoneda"
                },
                "5": {
                    "ItemObjGet": "DScomentarios",
                    "ItemObjSet": "DSchqcoment"
                },
                "6": {
                    "ItemObjGet": "DSidcliente",
                    "ItemObjSet": "DSidcliente"
                },
                "7": {
                    "ItemObjGet": "DSnumerocheque",
                    "ItemObjSet": "DSreferencia"
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_NuevoRecibo",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ClientesRecibosItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidrecibo"
                },
                "1": {
                    "ItemObjGet": "DSidcliente",
                    "ItemObjSet": "DSidcliente"
                },
                "2": {
                    "ItemObjGet": "DSidremito",
                    "ItemObjSet": "DSidRemito"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "Valor": "Cheque",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ClientesRecibosItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSentidad"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_CrearDocumentoX"]={
    "id": "REL_CrearDocumentoX",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_NuevoRecibo",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_DocumentoClientes",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSidremito",
                    "ItemObjSet": "DSidremito"
                },
                "1": {
                    "ItemObjGet": "DSidcliente",
                    "ItemObjSet": "DSidCliente"
                },
                "2": {
                    "ItemObjGet": "DSIdCondicionIva",
                    "ItemObjSet": "DSidcondicioniva"
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "SuperTabla",
            "IdObjGet": "ST_ListaFormaCobro",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_DocumentoClientes",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "TotalCarrito",
                    "ItemObjSet": "DStotal"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "Valor": "Comanda",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_DocumentoClientes",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSidTipoComprobante"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_CrearDocumentoFactura"]={
    "id": "REL_CrearDocumentoFactura",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_NuevoRecibo",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_DocumentoClientes",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSidremito",
                    "ItemObjSet": "DSidremito"
                },
                "1": {
                    "ItemObjGet": "DSidcliente",
                    "ItemObjSet": "DSidCliente"
                },
                "2": {
                    "ItemObjGet": "DSIdCondicionIva",
                    "ItemObjSet": "DSidcondicioniva"
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "SuperTabla",
            "IdObjGet": "ST_ListaFormaCobro",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_DocumentoClientes",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "TotalCarrito",
                    "ItemObjSet": "DStotal"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "Valor": "Factura",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_DocumentoClientes",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSidTipoComprobante"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_TraerRecibo"]={
    "id": "REL_TraerRecibo",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Comanda",
            "TipoObjSet": "Formulario",
            "IdObjSet": "FRM_NuevoRecibo",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidremito"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};
ret["REL_InsertFacturaPOS"]={
    "id": "REL_InsertFacturaPOS",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "LocalStore",
            "IdObjGet": "This",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_DocumentoClientes",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "system-RespUltEvento-queryId",
                    "ItemObjSet": "DSid"
                }
            },
            "Condicionales": {},
            "Orden": 0
        }
    },
    "MapeoValor": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "Valor": "Factura",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_DocumentoClientes",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSidTipoComprobante"
                }
            },
            "Condicionales": {},
            "Orden": 0
        }
    }
};
ret["REL_AnularRemito"]={
    "id": "REL_AnularRemito",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_AnularRemito",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_Comanda",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DScomentario",
                    "ItemObjSet": "DScomentario",
                    "Orden": 0
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Comanda",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_Comanda",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSid"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};
ret["REL_CrearRecibo"]={
    "id": "REL_CrearRecibo",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Comanda",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_Comanda",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSid",
                    "Orden": 0
                },
                "1": {
                    "ItemObjGet": "DScli_clave",
                    "ItemObjSet": "DScli_clave",
                    "Orden": 1
                }
            },
            "Condicionales": {},
            "Orden": 0
        }
    },
    "MapeoValor": {}
};
ret["REL_CrearPedido"]={
    "id": "REL_CrearPedido",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Comanda",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_Comanda",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSid"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
