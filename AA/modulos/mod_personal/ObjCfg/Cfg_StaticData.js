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
ret["SD_EstadoCivil"]={
    "id": "SD_EstadoCivil",
    "ListOfValue": {
        "0": {
            "Value": "Soltero",
            "Label": "Soltero"
        },
        "1": {
            "Value": "Casado",
            "Label": "Casado"
        },
        "2": {
            "Value": "Divorciado",
            "Label": "Divorciado"
        },
        "3": {
            "Value": "Viudo",
            "Label": "Viudo"
        },
        "4": {
            "Value": "Otro",
            "Label": "Otro"
        }
    }
};
ret["SD_Sexo"]={
    "id": "SD_Sexo",
    "ListOfValue": {
        "0": {
            "Value": "Masculino",
            "Label": "Masculino"
        },
        "1": {
            "Value": "Femenino",
            "Label": "Femenino"
        },
        "2": {
            "Value": "Otro",
            "Label": "Otro"
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
