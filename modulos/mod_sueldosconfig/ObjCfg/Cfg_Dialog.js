function CfgDialog(id,Param){
var ret={};

ret["DG_AltaSueldosItemsConfig"]={
    "id": "DG_AltaSueldosItemsConfig",
    "Tipo": "Movible",
    "Titulo": "Alta SueldosItemsConfig",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaSueldosItemsConfig",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "50vw"
        },
        "1": {
            "Prop": "Height",
            "Value": "50vh"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_EditarSueldosItemsConfig"]={
    "id": "DG_EditarSueldosItemsConfig",
    "Tipo": "Movible",
    "Titulo": "Editar SueldosItemsConfig",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarSueldosItemsConfig",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "50vw"
        },
        "1": {
            "Prop": "Height",
            "Value": "50vh"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_FormulaUnidad"]={
    "id": "DG_FormulaUnidad",
    "Tipo": "Movible",
    "Titulo": "Actualizar Formula Unidad",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_FormulaUnidad",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "min-content"
        },
        "1": {
            "Prop": "Height",
            "Value": "260px"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_FormulaValorUnitario"]={
    "id": "DG_FormulaValorUnitario",
    "Tipo": "Movible",
    "Titulo": "Editar Valor Unitario",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_FormulaValorUnitario",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "min-content"
        },
        "1": {
            "Prop": "Height",
            "Value": "260px"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_Parametros"]={
    "id": "DG_Parametros",
    "Tipo": "Movible",
    "Titulo": "Listado de parametros",
    "TipoObj": "SuperTabla",
    "EvtInicio":"Iniciar","IdObj": "ST_SueldosParam",
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
