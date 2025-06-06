function CfgCard(id,Param){
var ret={};

ret["CRD_Cliente"]={
    "id": "CRD_Cliente",
    "CssClass": "card-primary card-outline",
    "Tipo": "Card",
    "Titulo": "Cliente",
    "Body": {
        "Tipo": "Grid",
        "IdObj": "GR_1x1",
        "idSrc": "",
        "Param": {},
        "GridFill": {
            "0": {
                "Col": "GR_1x1-0-0",
                "TipoObj": "FormularioObjGral",
                "IdObj": "FRM_Cliente",
                "Param": {},
                "Orden": 0
            }
        }
    },
    "Footer": {},
    "Ctrl": {}
};

if(id=="" || id==undefined){return ret;}
else{if(ret[id])return ret[id];	else {}}

}
