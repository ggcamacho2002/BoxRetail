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
ret["SD_SubtotalTipo"]={
    "id": "SD_SubtotalTipo",
    "ListOfValue": {
        "0": {
            "Value": "Remunerativo",
            "Label": "Remunerativo"
        },
        "1": {
            "Value": "Noremunerativo",
            "Label": "Noremunerativo"
        },
        "2": {
            "Value": "Descuento",
            "Label": "Descuento"
        }
    }
};
ret["SD_Operacion"]={
    "id": "SD_Operacion",
    "ListOfValue": {
        "0": {
            "Value": "+",
            "Label": "+"
        },
        "1": {
            "Value": "-",
            "Label": "-"
        },
        "2": {
            "Value": "X",
            "Label": "X"
        },
        "3": {
            "Value": "%",
            "Label": "%"
        },
        "4": {
            "Value": "\/",
            "Label": "\/"
        }
    }
};
ret["SD_Tipo"]={
    "id": "SD_Tipo",
    "ListOfValue": {
        "0": {
            "Value": "Obligatorio",
            "Label": "Obligatorio"
        },
        "1": {
            "Value": "Temporal",
            "Label": "Temporal"
        },
        "2": {
            "Value": "NoObligatorio",
            "Label": "NoObligatorio"
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
