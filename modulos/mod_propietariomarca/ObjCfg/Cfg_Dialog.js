function CfgDialog(id,Param){
var ret={};

ret["DG_PropietarioAlta"]={
    "id": "DG_PropietarioAlta",
    "Tipo": "Movible",
    "Titulo": "Nuevo Propietario",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_PropietarioAlta",
    "Style": {},
    "CssClass": "",
    "Param": {
        "0": {
            "Key": "",
            "Value": ""
        }
    }
};
ret["DG_AltaABMMarcas"]={
    "id": "DG_AltaABMMarcas",
    "Tipo": "Movible",
    "Titulo": "Nueva Marca",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaABMMarcas",
    "Style": {},
    "CssClass": "",
    "Param": {}
};
ret["DG_EditABMMarcas"]={
    "id": "DG_EditABMMarcas",
    "Tipo": "Movible",
    "Titulo": "Editar Marca",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditABMMarcas",
    "Style": {},
    "CssClass": "",
    "Param": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
