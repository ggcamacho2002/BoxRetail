function CfgDialog(id,Param){
var ret={};

ret["DG_AltaCategorizacion"]={
    "id": "DG_AltaCategorizacion",
    "Tipo": "Movible",
    "Titulo": "Nueva Categorizacion",
    "TipoObj": "BiFormSel",
    "EvtInicio":"Iniciar","IdObj": "BiFormSel_AltaCategoriza",
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "50vw"
        },
        "1": {
            "Prop": "Height",
            "Value": "calc(100vh - 50px)"
        }
    },
    "CssClass": "",
    "Param": {}
};
ret["DG_AltaCategoria"]={
    "id": "DG_AltaCategoria",
    "Tipo": "Movible",
    "Titulo": "Alta Categoria",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaCategoria",
    "Style": {},
    "CssClass": "",
    "Param": {}
};
ret["DG_EditarCategoria"]={
    "id": "DG_EditarCategoria",
    "Tipo": "Movible",
    "Titulo": "Editar Categoria",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarCategoria",
    "Style": {},
    "CssClass": "",
    "Param": {}
};
ret["DG_AltaSubCateg"]={
    "id": "DG_AltaSubCateg",
    "Tipo": "Movible",
    "Titulo": "Alta Sub Categoria",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaSubCateg",
    "Style": {},
    "CssClass": "",
    "Param": {}
};
ret["DG_EditarSubCateg"]={
    "id": "DG_EditarSubCateg",
    "Tipo": "Movible",
    "Titulo": "Editar Sub Categoria",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarSubCateg",
    "Style": {},
    "CssClass": "",
    "Param": {}
};
ret["DG_AltaTipo"]={
    "id": "DG_AltaTipo",
    "Tipo": "Movible",
    "Titulo": "Nuevo Tipo",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaTipo",
    "Style": {},
    "CssClass": "",
    "Param": {}
};
ret["DG_EditarTipos"]={
    "id": "DG_EditarTipos",
    "Tipo": "Movible",
    "Titulo": "Editar Tipo",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarTipos",
    "Style": {},
    "CssClass": "",
    "Param": {}
};
ret["DG_EditarCategorizacion"]={
    "id": "DG_EditarCategorizacion",
    "Tipo": "Movible",
    "Titulo": "Editar Categorizacion",
    "TipoObj": "BiFormSel",
    "EvtInicio":"Iniciar","IdObj": "BiFormSel_EditarCategorizacion",
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "50vw"
        },
        "1": {
            "Prop": "Height",
            "Value": "calc(100vh - 50px)"
        }
    },
    "CssClass": "",
    "Param": {}
};
ret["DG_AltaSector"]={
    "id": "DG_AltaSector",
    "Tipo": "Movible",
    "Titulo": "Nuevo Sector",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_AltaSector",
    "Style": {},
    "CssClass": "",
    "Param": {}
};
ret["DG_EditarSector"]={
    "id": "DG_EditarSector",
    "Tipo": "Movible",
    "Titulo": "Editar Sector",
    "TipoObj": "Formulario",
    "EvtInicio":"Iniciar","IdObj": "FRM_EditarSector",
    "Style": {},
    "CssClass": "",
    "Param": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
