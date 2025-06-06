function CfgDialog(id,Param){
var ret={};

ret["DG_AltaProveedor"]={
    "id": "DG_AltaProveedor",
    "Tipo": "Movible",
    "Titulo": "Nuevo Provedor",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaProveedor",
    "Style": {},
    "CssClass": "",
    "Param": {}
};
ret["DG_EditarProveedor"]={
    "id": "DG_EditarProveedor",
    "Tipo": "Movible",
    "Titulo": "Editar Proveedor",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarProveedor",
    "Style": {},
    "CssClass": "",
    "Param": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
