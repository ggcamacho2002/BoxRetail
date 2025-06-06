function CfgVistas(id,Param){
var ret={};

ret["VT_Proveedores"]={
    "id": "VT_Proveedores",
    "Grid": "GR_1x1",
    "OnGridFill": "1","EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x1-0-0",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_1x1-0-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_Proveedores",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_ProvProductos"]={
    "id": "VT_ProvProductos",
    "Grid": "GR_2x2",
    "OnGridFill": "1","EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_2x2-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_2x2-0-1",
                    "Visibilidad": "HIDE"
                },
                "2": {
                    "IdObj": "GR_2x2-1-0",
                    "Visibilidad": "SHOW"
                },
                "3": {
                    "IdObj": "GR_2x2-1-1",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_2x2-0-0",
            "TipoObj": "Card",
            "IdObj": "CD_Proveedor",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_2x2-1-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_Productos",
            "EvtInicio": "Construir",
            "Param": {}
        },
        "2": {
            "Col": "GR_2x2-1-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ProveedorProducto",
            "EvtInicio": "Construir",
            "Param": {}
        }
    }
};
ret["VT_CargaMasiva"]={
    "id": "VT_CargaMasiva",
    "Grid": "GR_2x2",
    "OnGridFill": "1","EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_2x2-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_2x2-0-1",
                    "Visibilidad": "SHOW"
                },
                "2": {
                    "IdObj": "GR_2x2-1-0",
                    "Visibilidad": "SHOW"
                },
                "3": {
                    "IdObj": "GR_2x2-1-1",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_2x2-0-0",
            "TipoObj": "Card",
            "IdObj": "CD_Proveedor",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_2x2-0-1",
            "TipoObj": "Card",
            "IdObj": "CD_FileProv",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "2": {
            "Col": "GR_2x2-1-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ExcelProvProd",
            "EvtInicio": "Construir",
            "Param": {}
        },
        "3": {
            "Col": "GR_2x2-1-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ProveedorProducto",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
