function CfgImpresion(id,Param){
var ret={};

ret["IMP_Pedido"]={
    "id": "IMP_Pedido",
    "Titulo": "Pedido",
    "Fecha": "1",
    "Grid": "GR_3x1",
    "CssClass": "",
    "GridFill": {
        "0": {
            "Col": "GR_3x1-0-0",
            "TipoObj": "Titulo",
            "IdObj": "FRM_ImprimirPedido",
            "Param": {}
        },
        "1": {
            "Col": "GR_3x1-1-0",
            "TipoObj": "Formulario",
            "IdObj": "FRM_ImprimirPedido",
            "Param": {}
        },
        "2": {
            "Col": "GR_3x1-2-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ImprimirPedido",
            "Param": {}
        }
    }
};
ret["IMP_Controlado"]={
    "id": "IMP_Controlado",
    "Titulo": "Compras Recibidas \/ Controladas",
    "Fecha": "1",
    "Grid": "GR_3x1",
    "CssClass": "",
    "GridFill": {
        "0": {
            "Col": "GR_3x1-0-0",
            "TipoObj": "Titulo",
            "IdObj": "This",
            "Param": {}
        },
        "1": {
            "Col": "GR_3x1-1-0",
            "TipoObj": "Formulario",
            "IdObj": "FRM_ImprimirPedido",
            "Param": {}
        },
        "2": {
            "Col": "GR_3x1-2-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_COItemsImprimirControlado",
            "Param": {}
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
