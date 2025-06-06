function CfgGrids(id,Param){
var ret={};

ret["GR_POS"]={
    "id": "GR_POS",
    "CssClass": "",
    "Testing": 0,
    "Style": {},
    "Rows": {
        "0": {
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "45px",
                    "Orden": 0
                },
                "1": {
                    "Prop": "border-bottom",
                    "Value": "1px solid gray"
                }
            },
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {
                        "0": {
                            "Prop": "Width",
                            "Value": "555px"
                        },
                        "1": {
                            "Prop": "align-items",
                            "Value": "Center"
                        }
                    },
                    "CssClass": "",
                    "Orden": 0
                },
                "1": {
                    "Style": {
                        "0": {
                            "Prop": "Width",
                            "Value": "100%"
                        },
                        "1": {
                            "Prop": "align-items",
                            "Value": "Center"
                        }
                    },
                    "CssClass": "",
                    "Orden": 1
                },
                "2": {
                    "Style": {
                        "0": {
                            "Prop": "Width",
                            "Value": "450px"
                        }
                    },
                    "CssClass": ""
                }
            },
            "Orden": 0
        },
        "1": {
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "calc(100% - 40px) "
                }
            },
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {
                        "0": {
                            "Prop": "align-items",
                            "Value": "Center"
                        },
                        "1": {
                            "Prop": "Margin",
                            "Value": "10px"
                        }
                    },
                    "CssClass": ""
                },
                "1": {
                    "Style": {
                        "0": {
                            "Prop": "Width",
                            "Value": "50%"
                        }
                    },
                    "CssClass": ""
                },
                "2": {
                    "Style": {
                        "0": {
                            "Prop": "Width",
                            "Value": "50%"
                        }
                    },
                    "CssClass": ""
                }
            },
            "Orden": 1
        }
    },
    "": ""
};
ret["GR_ImprimeComanda"]={
    "id": "GR_ImprimeComanda",
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
                            "Prop": "Height",
                            "Value": "min-content"
                        }
                    },
                    "CssClass": ""
                }
            }
        },
        "1": {
            "Style": {},
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {},
                    "CssClass": ""
                }
            }
        },
        "2": {
            "Style": {},
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {
                        "0": {
                            "Prop": "Height",
                            "Value": "min-content"
                        }
                    },
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
