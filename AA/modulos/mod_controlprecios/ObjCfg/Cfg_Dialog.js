function CfgDialog(id,Param){
var ret={};

ret["DG_CambiaCompra"]={
    "id": "DG_CambiaCompra",
    "Tipo": "Movible",
    "Titulo": "Cambiar Precio Compra",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_CambiaCompra",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "30vw"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {
        "0": {
            "ClassEvt": "CambiarPorc",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": ""
                }
            }
        }
    }
};
ret["DG_CambiaVenta"]={
    "id": "DG_CambiaVenta",
    "Tipo": "Movible",
    "Titulo": "Cambiar % de venta",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_CambiaVenta",
    "HeaderCtrl": {},
    "Style": {},
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
