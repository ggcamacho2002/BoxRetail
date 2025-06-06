function CfgStaticData(id,Param){
var ret={};

ret["SD_estado"]={
    "id": "SD_estado",
    "ListOfValue": {
        "0": {
            "Value": "Activo",
            "Label": "Activo"
        },
        "1": {
            "Value": "Inactivo",
            "Label": "Inactivo"
        }
    }
};
ret["SD_Tipo"]={
    "id": "SD_Tipo",
    "ListOfValue": {
        "0": {
            "Value": "VAR",
            "Label": "VAR"
        },
        "1": {
            "Value": "SET",
            "Label": "SET"
        },
        "2": {
            "Value": "FUNCTION",
            "Label": "FUNCTION"
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
