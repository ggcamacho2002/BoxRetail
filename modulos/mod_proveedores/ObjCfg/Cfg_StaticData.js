function CfgStaticData(id,Param){
var ret={};

ret["SD_Estado"]={
    "id": "SD_Estado",
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

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
