function CfgDialog(id,Param){
var ret={};

ret["DG_AltaComprobante"]={
    "id": "DG_AltaComprobante",
    "Tipo": "Movible",
    "Titulo": "Alta Comprobante",
    "TipoObj": "Formulario",
    "IdObj": "FRM_AltaComprobante",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "30vw"
        },
        "1": {
            "Prop": "Height",
            "Value": "min-content"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_EditarComprobante"]={
    "id": "DG_EditarComprobante",
    "Tipo": "Movible",
    "Titulo": "Editar Comprobante",
    "TipoObj": "Formulario",
    "IdObj": "FRM_EditarComprobante",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "30vw"
        },
        "1": {
            "Prop": "Height",
            "Value": "min-content"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_AltaComprobanteTipo"]={
    "id": "DG_AltaComprobanteTipo",
    "Tipo": "Movible",
    "Titulo": "Alta ComprobanteTipo",
    "TipoObj": "Formulario",
    "IdObj": "FRM_AltaComprobanteTipo",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "30vw"
        },
        "1": {
            "Prop": "Height",
            "Value": "min-content"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_EditarComprobanteTipo"]={
    "id": "DG_EditarComprobanteTipo",
    "Tipo": "Movible",
    "Titulo": "Editar ComprobanteTipo",
    "TipoObj": "Formulario",
    "IdObj": "FRM_EditarComprobanteTipo",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "30vw"
        },
        "1": {
            "Prop": "Height",
            "Value": "min-content"
        }
    },
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
