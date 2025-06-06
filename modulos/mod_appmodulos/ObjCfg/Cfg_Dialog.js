function CfgDialog(id,Param){
var ret={};

ret["DG_FRM_AltaModulo_ModAlta"]={
    "id": "DG_FRM_AltaModulo_ModAlta",
    "Tipo": "Movible",
    "Titulo": "Nuevo Modulo",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaModulo",
    "Style": {},
    "CssClass": "",
    "Param": {}
};
ret["DG_FRM_EditarModulo_ModEditar"]={
    "id": "DG_FRM_EditarModulo_ModEditar",
    "Tipo": "Movible",
    "Titulo": "Editar Modulo",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarModulo",
    "Style": {},
    "CssClass": "",
    "Param": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
