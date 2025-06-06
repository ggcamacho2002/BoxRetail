function CfgGrids(id,Param){
var ret={};

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
ret["GR_1x3"]={
    "id": "GR_1x3",
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
                    "Style": {
                        "0": {
                            "Prop": "",
                            "Value": ""
                        }
                    },
                    "CssClass": ""
                },
                "2": {
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
