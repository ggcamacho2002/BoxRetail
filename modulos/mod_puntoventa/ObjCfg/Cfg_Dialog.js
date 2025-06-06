function CfgDialog(id,Param){
var ret={};

ret["DG_Clientes"]={
    "id": "DG_Clientes",
    "Tipo": "Movible",
    "Titulo": "Seleccion de clientes",
    "TipoObj": "SuperTabla",
    "IdObj": "ST_Clientes",
    "EvtInicio": "Iniciar",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "550px"
        },
        "1": {
            "Prop": "top",
            "Value": "174px"
        },
        "2": {
            "Prop": "left",
            "Value": "60vw"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_InfoCliente"]={
    "id": "DG_InfoCliente",
    "Tipo": "Movible",
    "Titulo": "Informacion Cliente",
    "TipoObj": "Formulario",
    "IdObj": "FRM_InfoCliente",
    "EvtInicio": "Iniciar",
    "HeaderCtrl": {},
    "Style": {},
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_InfoProducto"]={
    "id": "DG_InfoProducto",
    "Tipo": "Movible",
    "Titulo": "Informacion del Producto",
    "TipoObj": "Formulario",
    "IdObj": "FRM_InfoProducto",
    "EvtInicio": "Iniciar",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "400px"
        },
        "1": {
            "Prop": "Width",
            "Value": "500px"
        },
        "2": {
            "Prop": "left",
            "Value": "40vw"
        },
        "3": {
            "Prop": "top",
            "Value": "200px"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_CobroDigital"]={
    "id": "DG_CobroDigital",
    "Tipo": "Movible",
    "Titulo": "Cobro Digital",
    "TipoObj": "Formulario",
    "IdObj": "FRM_CobroDigital",
    "EvtInicio": "Iniciar",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "300px"
        },
        "1": {
            "Prop": "Width",
            "Value": "300px"
        },
        "2": {
            "Prop": "left",
            "Value": "40vw"
        },
        "3": {
            "Prop": "top",
            "Value": "300px"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_CobroCtaCte"]={
    "id": "DG_CobroCtaCte",
    "Tipo": "Movible",
    "Titulo": "Cobro CtaCte",
    "TipoObj": "Formulario",
    "IdObj": "FRM_CobroCtaCte",
    "EvtInicio": "Iniciar",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "left",
            "Value": "40vw"
        },
        "1": {
            "Prop": "top",
            "Value": "300px"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_NuevoCheque"]={
    "id": "DG_NuevoCheque",
    "Tipo": "Movible",
    "Titulo": "Nuevo Cheque",
    "TipoObj": "Formulario",
    "IdObj": "FRM_NuevoCheque",
    "EvtInicio": "Iniciar",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "left",
            "Value": "40vw"
        },
        "1": {
            "Prop": "top",
            "Value": "300px"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_AnularRemito"]={
    "id": "DG_AnularRemito",
    "Tipo": "Movible",
    "Titulo": "Anular Remito",
    "TipoObj": "Formulario",
    "IdObj": "FRM_AnularRemito",
    "EvtInicio": "Iniciar",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "left",
            "Value": "50vw"
        },
        "1": {
            "Prop": "top",
            "Value": "154px"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_ListaPedidos"]={
    "id": "DG_ListaPedidos",
    "Tipo": "Movible",
    "Titulo": "Pedidos",
    "TipoObj": "SuperTabla",
    "IdObj": "ST_ListaPedidos",
    "EvtInicio": "Iniciar",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "30vw"
        },
        "1": {
            "Prop": "Width",
            "Value": "650px"
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
