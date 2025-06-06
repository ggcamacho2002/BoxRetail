function CfgCard(id,Param){
var ret={};

ret["CD_ListaModulos"]={
    "id": "CD_ListaModulos",
    "Titulo": "Modulos",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {},
    "CssClass": "",
    "Fill": {}
};
ret["CD_AllModulos"]={
    "id": "CD_AllModulos",
    "Titulo": "Card Modulos",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {},
    "CssClass": "",
    "Fill": {
        "TipoObj": "SuperTabla",
        "IdObj": "ST_ListaModulos",
        "Param": {
            "0": {
                "Key": "",
                "Value": ""
            }
        }
    }
};
ret["CD_RolSelecto"]={
    "id": "CD_RolSelecto",
    "Titulo": "Rol Selecto",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {},
    "CssClass": "",
    "Ctrl": {
        "0": {
            "id": "Volver",
            "Orden": "1",
            "Label": "Volver",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Volver",
            "Style": {},
            "CssClass": "Fill_Azul1"
        }
    },
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_RolSelecto",
        "Param": {}
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Volver",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_CambiarEstado_0-0"
                }
            }
        }
    }
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
