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
                    "Value": "min-content"
                }
            },
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
        },
        "1": {
            "Style": {
                "0": {
                    "Prop": "",
                    "Value": ""
                }
            },
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

ret["GR_Principal"]={
    "id": "GR_Principal",
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

if(id=="" || id==undefined){return ret;}
else{if(ret[id])return ret[id];	else {}}

}
