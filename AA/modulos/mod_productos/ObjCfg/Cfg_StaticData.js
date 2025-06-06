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
        },
        "2": {
            "Value": "Borrar",
            "Label": "Borrar"
        },
        "3": {
            "Value": "SinStock",
            "Label": "SinStock"
        }
    }
};
ret["SD_UnidadMedida"]={
    "id": "SD_UnidadMedida",
    "ListOfValue": {
        "0": {
            "Value": "kg",
            "Label": "kg"
        },
        "1": {
            "Value": "gr",
            "Label": "gr"
        },
        "2": {
            "Value": "lt",
            "Label": "lt"
        },
        "3": {
            "Value": "cc",
            "Label": "cc"
        },
        "4": {
            "Value": "u",
            "Label": "u"
        }
    }
};
ret["SD_BoolSiNo"]={
    "id": "SD_BoolSiNo",
    "ListOfValue": {
        "0": {
            "Value": "0",
            "Label": "NO"
        },
        "1": {
            "Value": "1",
            "Label": "SI"
        }
    }
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
