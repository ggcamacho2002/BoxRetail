function CfgGrids(id,Param){
var ret={};

ret["GR_GridInicio"]={
    "id": "GR_GridInicio",
    "CssClass": "",
    "Testing": "0",
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
ret["GR_1x2"]={
    "id": "GR_1x2",
    "CssClass": "",
    "Testing": "0",
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
ret["GR_1-1/2-2"]={
    "id": "GR_1-1\/2-2",
    "CssClass": "",
    "Testing": 1,
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
        },
        "1": {
            "Style": {},
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {},
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

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
