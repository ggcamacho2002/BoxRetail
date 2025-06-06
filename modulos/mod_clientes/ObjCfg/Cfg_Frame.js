function CfgFrame(id,Param){
var ret={};

ret["FRM_Principal"]={
    "id": "FRM_Principal",
    "CssClass": "",
    "Titulo": "Gestión de Clientes",
    "Content": {
        "Tipo": "Grid",
        "IdObj": "GR_Principal",
        "idSrc": "",
        "Param": {}
    }
};

if(id=="" || id==undefined){return ret;}
else{if(ret[id])return ret[id];	else {}}

}
