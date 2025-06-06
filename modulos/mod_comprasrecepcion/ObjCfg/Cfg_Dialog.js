function CfgDialog(id,Param){
var ret={};

ret["DG_AltaRecepcion"]={
    "id": "DG_AltaRecepcion",
    "Tipo": "Movible",
    "Titulo": "Alta Recepcion",
    "TipoObj": "Formulario",
    "IdObj": "FRM_Recepcion",
    "EvtInicio": "Iniciar",
    "HeaderCtrl": {},
    "Style": {},
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_EditRecepcion"]={
    "id": "DG_EditRecepcion",
    "Tipo": "Movible",
    "Titulo": "Editar Comprobante",
    "TipoObj": "Formulario",
    "IdObj": "FRM_EditRecepcion",
    "EvtInicio": "Iniciar",
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
