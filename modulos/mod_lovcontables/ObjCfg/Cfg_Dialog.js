function CfgDialog(id,Param){
var ret={};

ret["DG_AltaTasasImpuestos"]={
    "id": "DG_AltaTasasImpuestos",
    "Tipo": "Movible",
    "Titulo": "Nuevo Impuesto",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaTasasImpuestos",
    "Style": {},
    "CssClass": "",
    "Param": {}
};
ret["DG_EditarTasasImpuestos"]={
    "id": "DG_EditarTasasImpuestos",
    "Tipo": "Movible",
    "Titulo": "Editar Impuesto",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarTasasImpuestos",
    "Style": {},
    "CssClass": "",
    "Param": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
