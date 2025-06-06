function CfgRelaciones(id,Param){
var ret={};

ret["REL_InsertRecepcion"]={
    "id": "REL_InsertRecepcion",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Tabla",
            "IdObjGet": "TBL_PedidosControlado",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_CompraRecepcion",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidremito"
                },
                "1": {
                    "ItemObjGet": "DSpro_clave",
                    "ItemObjSet": "DSpro_clave"
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Recepcion",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_CompraRecepcion",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DStic_clave",
                    "ItemObjSet": "DStic_clave"
                },
                "1": {
                    "ItemObjGet": "DSnrodocprov",
                    "ItemObjSet": "DSnrodocprov"
                },
                "2": {
                    "ItemObjGet": "DSfechaprov",
                    "ItemObjSet": "DSfechaprov"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};
ret["REL_ComprobanteSelItems"]={
    "id": "REL_ComprobanteSelItems",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_ComprobanteSelecto",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_DocProvItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSdop_clave"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};
ret["REL_UpdateRecepcion"]={
    "id": "REL_UpdateRecepcion",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Tabla",
            "IdObjGet": "TBL_CompraRecepcion",
            "TipoObjSet": "Formulario",
            "IdObjSet": "FRM_EditRecepcion",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSpro_clave",
                    "ItemObjSet": "DSpro_clave"
                },
                "1": {
                    "ItemObjGet": "idremito",
                    "ItemObjSet": ""
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};
ret["REL_CambiarEstadoArecepcion"]={
    "id": "REL_CambiarEstadoArecepcion",
    "Mapeo": {},
    "MapeoValor": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "Valor": "Recepcion",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_DocsGuardados",
            "ItemsObjs": {
                "0": {
                    "ItemObjSet": "DSdop_estado"
                }
            },
            "Condicionales": {}
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
