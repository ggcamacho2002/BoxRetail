function CfgGrids(id,Param){
var ret={};

ret["GR_1x1"]={
    "id": "GR_1x1",
    "CssClass": "",
    "Testing": "0",
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
ret["GR_2x2"]={
    "id": "GR_2x2",
    "CssClass": "",
    "Testing": "0",
    "Style": {},
    "Rows": {
        "0": {
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "115px"
                }
            },
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {
                        "0": {
                            "Prop": "Width",
                            "Value": "20%"
                        }
                    },
                    "CssClass": ""
                },
                "1": {
                    "Style": {
                        "0": {
                            "Prop": "Width",
                            "Value": "80%"
                        }
                    },
                    "CssClass": ""
                }
            }
        },
        "1": {
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "calc(100% - 115px)"
                }
            },
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {
                        "0": {
                            "Prop": "Width",
                            "Value": "50%"
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
