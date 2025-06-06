function CfgDialog(id,Param){
var ret={};

ret["DG_AltaPersonal"]={
    "id": "DG_AltaPersonal",
    "Tipo": "Movible",
    "Titulo": "Alta Personal",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaPersonal",
    "HeaderCtrl": {},
    "Style": {},
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_EditarPersonal"]={
    "id": "DG_EditarPersonal",
    "Tipo": "Movible",
    "Titulo": "Editar Personal",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarPersonal",
    "HeaderCtrl": {},
    "Style": {},
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_AltaTareas"]={
    "id": "DG_AltaTareas",
    "Tipo": "Movible",
    "Titulo": "Alta Tareas",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaTareas",
    "HeaderCtrl": {},
    "Style": {},
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_EditarTareas"]={
    "id": "DG_EditarTareas",
    "Tipo": "Movible",
    "Titulo": "Editar Tareas",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarTareas",
    "HeaderCtrl": {},
    "Style": {},
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_PersonalSindicato"]={
    "id": "DG_PersonalSindicato",
    "Tipo": "Movible",
    "Titulo": "Convenio de Trabaja",
    "TipoObj": "BiFormSel",
    "EvtInicio":"Iniciar","IdObj": "BiFormSel_PersonalSindicato",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "70vw"
        },
        "1": {
            "Prop": "Height",
            "Value": "80vh"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_AllDatos"]={
    "id": "DG_AllDatos",
    "Tipo": "Movible",
    "Titulo": "Todos los datos",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AllDatos",
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
