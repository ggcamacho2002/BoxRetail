function CfgRelaciones(id,Param){
var ret={};

ret["REL_InsertOrdenCompra"]={
    "id": "REL_InsertOrdenCompra",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_SeleccionProveedor",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ComprasOrdenes",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSpro_clave"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_InsertProductos"]={
    "id": "REL_InsertProductos",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Tabla",
            "IdObjGet": "TBL_ListaProductos",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ComprasOrdenesItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSprd_clave",
                    "Orden": 0
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_ComprasOrdenes",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ComprasOrdenesItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSrec_clave"
                },
                "1": {
                    "ItemObjGet": "DSpro_clave",
                    "ItemObjSet": "DSidproveedor"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_BuscarOdenCompraItems"]={
    "id": "REL_BuscarOdenCompraItems",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_ComprasOrdenes",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_ComprasOrdenesItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSrec_clave"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_CompraItemEstado"]={
    "id": "REL_CompraItemEstado",
    "Mapeo": {},
    "MapeoValor": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "Valor": "EnEspera",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ComprasOrdenes",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSrec_estado"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_COrdenesUpdateToPedido"]={
    "id": "REL_COrdenesUpdateToPedido",
    "Mapeo": {},
    "MapeoValor": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "Valor": "Pedido",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ComprasOrdenesEspera",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSrec_estado"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_ItemsPedidoImprimir"]={
    "id": "REL_ItemsPedidoImprimir",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_ImprimirPedido",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_COrdenesItemsImprimir",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSrec_clave"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};
ret["REL_BuscarCompraItemControl"]={
    "id": "REL_BuscarCompraItemControl",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_ComprasOrdenesControl",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_COrdenesItemsControl",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSrec_clave"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};
ret["REL_UpdateControl"]={
    "id": "REL_UpdateControl",
    "Mapeo": {},
    "MapeoValor": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "Valor": "Controlado",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ComprasOrdenesSinEstado",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSrec_estado"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_UpdateEspera"]={
    "id": "REL_UpdateEspera",
    "Mapeo": {},
    "MapeoValor": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "Valor": "EnEspera",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ComprasOrdenesSinEstado",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSrec_estado"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_COItemsImprimirControlado"]={
    "id": "REL_COItemsImprimirControlado",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_ImprimirPedido",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_COItemsImprimirControlado",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSrec_clave"
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
