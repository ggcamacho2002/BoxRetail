function CfgCard(id,Param){
var ret={};

ret["CD_PesonalSelecto"]={
    "id": "CD_PesonalSelecto",
    "Titulo": "Personal Selecto",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {},
    "CssClass": "",
    "Ctrl": {
        "0": {
            "id": "Volver",
            "Orden": "",
            "Label": "Volver",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "VolverPersonal",
            "Style": {},
            "CssClass": "Transp_Azul2"
        }
    },
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_PersonalSelecto",
        "Param": {}
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "VolverPersonal",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Inicio"
                }
            }
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
