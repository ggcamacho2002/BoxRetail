function CfgCard(id,Param){
var ret={};

ret["CD_Proveedor"]={
    "id": "CD_Proveedor",
    "Titulo": "Proveedor Selecto",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "min-content"
        }
    },
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
        "IdObj": "FRM_Proveedor",
        "Param": {}
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Volver",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_Proveedores"
                }
            }
        }
    }
};
ret["CD_FileProv"]={
    "id": "CD_FileProv",
    "Titulo": "Cargar Archivo",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "min-content"
        }
    },
    "CssClass": "",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_ExcelProvProd",
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
