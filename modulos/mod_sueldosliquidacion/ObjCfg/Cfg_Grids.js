function CfgGrids(id,Param){
var ret={};

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
ret["GR_1x2b"]={
    "id": "GR_1x2b",
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
                            "Value": "400px"
                        }
                    },
                    "CssClass": ""
                },
                "1": {
                    "Style": {},
                    "CssClass": "GridVertical"
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
