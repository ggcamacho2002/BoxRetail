function CfgStaticData(id,Param){
var ret={};

ret["DS_estados"]={
    "id": "DS_estados",
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
ret["DS_SiNo"]={
    "id": "DS_SiNo",
    "ListOfValue": {
        "0": {
            "Value": "Si",
            "Label": "Si"
        },
        "1": {
            "Value": "No",
            "Label": "No"
        }
    }
};
ret["DS_Data"]={
    "id": "DS_Data",
    "ListOfValue": {
        "0": {
            "Value": "",
            "Label": ""
        }
    }
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
