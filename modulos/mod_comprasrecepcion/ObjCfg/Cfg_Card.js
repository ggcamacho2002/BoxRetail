function CfgCard(id,Param){
var ret={};

ret["CD_ComprobanteSelecto"]={
    "id": "CD_ComprobanteSelecto",
    "Titulo": "",
    "SubTitulo": "",
    "BtnHide": "1",
    "Style": {
        "0": {
            "Prop": "",
            "Value": ""
        }
    },
    "CssClass": "",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_ComprobanteSelecto",
        "Param": {}
    },
    "CfgEventos": {}
};
ret["CD_ControlesRecepcion"]={
    "id": "CD_ControlesRecepcion",
    "Titulo": "",
    "SubTitulo": "",
    "BtnHide": "1",
    "Style": {
        "0": {
            "Prop": "margin-left",
            "Value": "10px"
        }
    },
    "CssClass": "",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_ControlesRecepcion",
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
