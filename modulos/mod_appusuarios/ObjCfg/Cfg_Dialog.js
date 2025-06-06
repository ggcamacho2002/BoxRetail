function CfgDialog(id,Param){
var ret={};

ret["DG_FRM_EditarUsuario_0"]={
    "id": "DG_FRM_EditarUsuario_0",
    "Tipo": "Movible",
    "Titulo": "Editar Usuario",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarUsuario",
    "Style": {},
    "CssClass": "",
    "Param": {}
};
ret["DG_FRM_AltaUsuarios_0"]={
    "id": "DG_FRM_AltaUsuarios_0",
    "Tipo": "Movible",
    "Titulo": "Alta Usuario",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaUsuarios",
    "Style": {},
    "CssClass": "",
    "Param": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
