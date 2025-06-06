function CfgVistas(id,Param){
var ret={};

ret["VT_Inicio"]={
    "id": "VT_Inicio",
    "Grid": "GR_GridInicio",
    "OnGridFill": "1","EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_GridInicio-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_GridInicio-0-1",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_GridInicio-0-0",
            "TipoObj": "Botonera",
            "IdObj": "Botonera_Principal",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_GridInicio-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ListaProdCat",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_categorias"]={
    "id": "VT_categorias",
    "Grid": "GR_1x2",
    "OnGridFill": "1","EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x2-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_1x2-0-1",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_1x2-0-0",
            "TipoObj": "Botonera",
            "IdObj": "Botonera_Principal",
            "EvtInicio": "Iniciar",
            "Param": {}
        },
        "1": {
            "Col": "GR_1x2-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_categorias",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};
ret["VT_subcategoria"]={
    "id": "VT_subcategoria",
    "Grid": "GR_1x2",
    "OnGridFill": "1","EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x2-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_1x2-0-1",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_1x2-0-0",
            "TipoObj": "Botonera",
            "IdObj": "Botonera_Principal",
            "EvtInicio": "Iniciar", 
            "Param": {}
        },
        "1": {
            "Col": "GR_1x2-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_subcategorias",
            "EvtInicio": "Iniciar", 
            "Param": {}
        }
    }
};
ret["VT_tipos"]={
    "id": "VT_tipos",
    "Grid": "GR_1x2",
    "OnGridFill": "1","EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x2-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_1x2-0-1",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_1x2-0-0",
            "TipoObj": "Botonera",
            "IdObj": "Botonera_Principal",
            "EvtInicio": "Iniciar", 
            "Param": {}
        },
        "1": {
            "Col": "GR_1x2-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_tipos",
            "EvtInicio": "Iniciar", 
            "Param": {}
        }
    }
};
ret["VT_Sectores"]={
    "id": "VT_Sectores",
    "Grid": "GR_1x2",
    "OnGridFill": "1","EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x2-0-0",
                    "Visibilidad": "SHOW"
                },
                "1": {
                    "IdObj": "GR_1x2-0-1",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_1x2-0-0",
            "TipoObj": "Botonera",
            "IdObj": "Botonera_Principal",
            "EvtInicio": "Iniciar", 
            "Param": {}
        },
        "1": {
            "Col": "GR_1x2-0-1",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_Sectores",
            "EvtInicio": "Iniciar", 
            "Param": {}
        }
    }
};


   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
