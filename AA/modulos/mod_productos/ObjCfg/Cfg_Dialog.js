function CfgDialog(id,Param){
var ret={};

ret["DG_AltaProducto"]={
    "id": "DG_AltaProducto",
    "Tipo": "Movible",
    "Titulo": "Nuevo Producto",
    "TipoObj": "BiFormSel",
    "EvtInicio":"Iniciar","IdObj": "BiFormSel_AltaProducto",
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "50vw"
        },
        "1": {
            "Prop": "Height",
            "Value": "50vw"
        }
    },
    "CssClass": "",
    "Param": {}
};
ret["DG_EditarProducto"]={
    "id": "DG_EditarProducto",
    "Tipo": "Movible",
    "Titulo": "Editar Producto",
    "TipoObj": "BiFormSel",
    "EvtInicio":"Iniciar","IdObj": "BiFormSel_EditarProducto",
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "50vw"
        },
        "1": {
            "Prop": "Height",
            "Value": "50vw"
        }
    },
    "CssClass": "",
    "Param": {}
};


   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
