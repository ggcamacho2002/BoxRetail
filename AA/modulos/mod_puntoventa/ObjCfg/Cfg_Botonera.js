function CfgBotonera(id,Param){
var ret={};

ret["Botonera_Principal"]={
    "id": "Botonera_Principal",
    "Orientacion": "Horizontal",
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "550px"
        },
        "1": {
            "Prop": "Height",
            "Value": "40px"
        }
    },
    "CssClass": "BotoneraPrincipal",
    "Botones": {
        "0": {
            "Orden": 0,
            "ClassEvt": "",
            "Label": "Comandas",
            "Style": {},
            "Param": {},
            "CssClass": "BtnCabExtra"
        },
        "1": {
            "Orden": 1,
            "ClassEvt": "Pedidos",
            "Label": "Pedidos",
            "Style": {},
            "Param": {},
            "CssClass": "BtnCabExtra"
        },
        "2": {
            "Orden": 2,
            "ClassEvt": "",
            "Label": "ofertas",
            "Style": {},
            "Param": {},
            "CssClass": "BtnCabExtra"
        },
        "3": {
            "Orden": 3,
            "ClassEvt": "",
            "Label": "Ctas. Ctes.",
            "Style": {},
            "Param": {},
            "CssClass": "BtnCabExtra"
        },
        "4": {
            "Orden": 4,
            "ClassEvt": "",
            "Label": "Facturas",
            "Style": {},
            "Param": {},
            "CssClass": "BtnCabExtra"
        },
        "5": {
            "Orden": 5,
            "ClassEvt": "",
            "Label": "Otros",
            "Style": {},
            "Param": {},
            "CssClass": "BtnCabExtra"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Pedidos",
            "Hilo": {
                "0": {
                    "Orden": "0",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_ListaPedidos"
                }
            }
        }
    }
};
ret["Botonera_CabExtras"]={
    "id": "Botonera_CabExtras",
    "Orientacion": "Horizontal",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "40px"
        }
    },
    "CssClass": "BotoneraExtras",
    "Botones": {
        "0": {
            "Orden": "0",
            "ClassEvt": "",
            "Label": "Retiro Dinero",
            "Style": {},
            "Param": {},
            "CssClass": "BtnCabExtra"
        },
        "1": {
            "Orden": "1",
            "ClassEvt": "",
            "Label": "Cerrar Caja",
            "Style": {},
            "Param": {},
            "CssClass": "BtnCabExtra"
        },
        "2": {
            "Orden": "2",
            "ClassEvt": "",
            "Label": "Volver",
            "Style": {
                "0": {
                    "Prop": "Background-color",
                    "Value": "#2b5cab"
                }
            },
            "Param": {},
            "CssClass": "BtnCabExtra"
        }
    },
    "CfgEventos": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
