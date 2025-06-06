function CfgDialog(id,Param){
var ret={};

ret["DG_AltaSindicatos"]={
    "id": "DG_AltaSindicatos",
    "Tipo": "Movible",
    "Titulo": "Alta Sindicatos",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaSindicatos",
    "HeaderCtrl": {},
    "Style": {},
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_EditarSindicatos"]={
    "id": "DG_EditarSindicatos",
    "Tipo": "Movible",
    "Titulo": "Editar Sindicatos",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarSindicatos",
    "HeaderCtrl": {},
    "Style": {},
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_AltaSindicatosBasicos"]={
    "id": "DG_AltaSindicatosBasicos",
    "Tipo": "Movible",
    "Titulo": "Alta Sindicatos Basicos",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaSindicatosBasicos",
    "HeaderCtrl": {},
    "Style": {},
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_EditarSindicatosBasicos"]={
    "id": "DG_EditarSindicatosBasicos",
    "Tipo": "Movible",
    "Titulo": "Editar Sindicatos Basicos",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarSindicatosBasicos",
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
