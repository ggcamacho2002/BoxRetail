function CfgGrids(id,Param){
var ret={};

ret["GR_1x1"]={
    "id": "GR_1x1",
    "CssClass": "",
    "Testing": 0,
    "Style": {},
    "Rows": {
        "0": {
            "Style": {},
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {},
                    "CssClass": ""
                }
            }
        }
    }
};
ret["GR_2x1"]={
    "id": "GR_2x1",
    "CssClass": "",
    "Testing": 0,
    "Style": {},
    "Rows": {
        "0": {
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "min-content"
                }
            },
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {},
                    "CssClass": "GridHeader"
                }
            }
        },
        "1": {
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "calc(100% - 115px) "
                }
            },
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {},
                    "CssClass": ""
                }
            }
        }
    }
};
ret["GR_1x2"]={
    "id": "GR_1x2",
    "CssClass": "",
    "Testing": 0,
    "Style": {},
    "Rows": {
        "0": {
            "Style": {},
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {
                        "0": {
                            "Prop": "Width",
                            "Value": "min-content"
                        }
                    },
                    "CssClass": "",
                    "Orden": 0
                },
                "1": {
                    "Style": {},
                    "CssClass": "",
                    "Orden": 1
                }
            }
        }
    }
};
ret["GR_3x1"]={
    "id": "GR_3x1",
    "CssClass": "",
    "Testing": 0,
    "Style": {},
    "Rows": {
        "0": {
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "20px"
                }
            },
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {},
                    "CssClass": ""
                }
            }
        },
        "1": {
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "68px"
                }
            },
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {},
                    "CssClass": ""
                }
            }
        },
        "2": {
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "calc(100% - 88px);"
                }
            },
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {},
                    "CssClass": ""
                }
            }
        }
    }
};
ret["GR_CompraControlada"]={
    "id": "GR_CompraControlada",
    "CssClass": "",
    "Testing": 0,
    "Style": {},
    "Rows": {
        "0": {
            "Style": {},
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {
                        "0": {
                            "Prop": "Width",
                            "Value": "min-content"
                        }
                    },
                    "CssClass": ""
                },
                "1": {
                    "Style": {},
                    "CssClass": ""
                }
            }
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
