function CfgStaticData(id,Param){
var ret={};

ret["EstadosCliente"]={
    "id": "EstadosCliente",
    "Datos": {
        "0": {
            "Codigo": "A",
            "Valor": "Activo"
        },
        "1": {
            "Codigo": "I",
            "Valor": "Inactivo"
        },
        "2": {
            "Codigo": "S",
            "Valor": "Suspendido"
        }
    }
};

if(id=="" || id==undefined){return ret;}
else{if(ret[id])return ret[id];	else {}}

}
