function CfgDialog(id,Param){
var ret={};

ret["DG_FRM_EditarRol_0"]={
    "id": "DG_FRM_EditarRol_0",
    "Tipo": "Movible",
    "Titulo": "Editar Rol",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarRol",
    "Style": {},
    "CssClass": "",
    "Param": {}
};
ret["DG_FRM_AltaRol_0"]={
    "id": "DG_FRM_AltaRol_0",
    "Tipo": "Movible",
    "Titulo": "Alta Rol",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaRol",
    "Style": {},
    "CssClass": "",
    "Param": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
