function CfgCard(id,Param){
var ret={};

ret["CD_ComprasOrden"]={
    "id": "CD_ComprasOrden",
    "Titulo": "",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "min-content",
            "Orden": 0
        }
    },
    "CssClass": "CardHeader",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_ComprasOrdenes",
        "Param": {}
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Volver",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_ListadoOrdenCompra"
                }
            }
        }
    }
};
ret["CD_ComprasOrdenAuxiliar"]={
    "id": "CD_ComprasOrdenAuxiliar",
    "Titulo": "",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {},
    "CssClass": "CardHeader",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_ComprasOrdenAuxiliar",
        "Param": {}
    },
    "CfgEventos": {}
};
ret["CD_ComprasOrdenesControl"]={
    "id": "CD_ComprasOrdenesControl",
    "Titulo": "",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {},
    "CssClass": "",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_ComprasOrdenesControl",
        "Param": {}
    },
    "CfgEventos": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
