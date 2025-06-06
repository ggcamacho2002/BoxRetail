function CfgFormulario(id,Param){
var ret={};

ret["FRM_Robot"]={
    "id": "FRM_Robot",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Robot",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSMsgInput",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSMsgInput",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Input",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "margin",
                    "Value": "10px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "enviar",
            "Orden": "0",
            "Label": "Enviar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "TraerDatos",
            "Style": {
                "0": {
                    "Prop": "Height",
                    "Value": "40px"
                },
                "1": {
                    "Prop": "Margin-Top",
                    "Value": "10px"
                }
            },
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "TraerDatos",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_Frame_TraerHtml_Respuesta"
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
