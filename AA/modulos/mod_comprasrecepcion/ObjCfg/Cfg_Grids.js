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
                    "Value": "min-content",
                    "Orden": 0
                }
            },
            "CssClass": "",
            "Cols": {
                "0": {
                    "Style": {
                        "0": {
                            "Prop": "flex-direction",
                            "Value": "row",
                            "Orden": 0
                        }
                    },
                    "CssClass": "",
                    "Orden": 0
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
        }
    },
    "": "Overflow"
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
