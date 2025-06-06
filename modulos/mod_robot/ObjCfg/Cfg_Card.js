function CfgCard(id,Param){
var ret={};

ret["CD_robot"]={
    "id": "CD_robot",
    "Titulo": "Pregunta",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "600px",
            "Orden": 0
        },
        "1": {
            "Prop": "Height",
            "Value": "min-content",
            "Orden": 1
        }
    },
    "CssClass": "",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_Robot",
        "Param": {}
    },
    "CfgEventos": {}
};
ret["CD_respuesta"]={
    "id": "CD_respuesta",
    "Titulo": "Respuesta",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "600px"
        },
        "1": {
            "Prop": "Height",
            "Value": "min-content"
        },
        "2": {
            "Prop": "Margin-top",
            "Value": "15px"
        }
    },
    "CssClass": "",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Frame",
        "IdObj": "Frame_Respuesta",
        "Param": {}
    },
    "CfgEventos": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
