function CfgCard(id,Param){
var ret={};

ret["CD_CabComanda"]={
    "id": "CD_CabComanda",
    "Titulo": "",
    "SubTitulo": "",
    "BtnHide": "1",
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
        "IdObj": "FRM_Comanda",
        "Param": {}
    },
    "CfgEventos": {}
};
ret["CD_CabExtras"]={
    "id": "CD_CabExtras",
    "Titulo": "",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {},
    "CssClass": "",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Botonera",
        "IdObj": "Botonera_CabExtras",
        "Param": {}
    },
    "CfgEventos": {}
};
ret["CD_CargaProductos"]={
    "id": "CD_CargaProductos",
    "Titulo": "",
    "SubTitulo": "",
    "BtnHide": "1",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "min-content"
        },
        "1": {
            "Prop": "Width",
            "Value": "min-content"
        }
    },
    "CssClass": "",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_CargaProducto",
        "Param": {}
    },
    "CfgEventos": {}
};
ret["CD_NuevaComanda"]={
    "id": "CD_NuevaComanda",
    "Titulo": "Nueva Comanda",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "700px"
        },
        "1": {
            "Prop": "Height",
            "Value": "500px"
        }
    },
    "CssClass": "",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "BiFormSel",
        "IdObj": "BiFormSel_NuevaComanda",
        "Param": {}
    },
    "CfgEventos": {}
};
ret["CD_CabCaja"]={
    "id": "CD_CabCaja",
    "Titulo": "",
    "SubTitulo": "",
    "BtnHide": "1",
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "min-content"
        }
    },
    "CssClass": "",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_CabCaja",
        "Param": {}
    },
    "CfgEventos": {}
};
ret["CD_AperturaCaja"]={
    "id": "CD_AperturaCaja",
    "Titulo": "Apertura Caja",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "260px"
        },
        "1": {
            "Prop": "Width",
            "Value": "420px"
        }
    },
    "CssClass": "",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_AperturaCaja",
        "Param": {}
    },
    "CfgEventos": {}
};
ret["CD_FinalizaVentaCab"]={
    "id": "CD_FinalizaVentaCab",
    "Titulo": "Finalizar venta",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "min-content"
        },
        "1": {
            "Prop": "Width",
            "Value": "1050px"
        },
        "2": {
            "Prop": "Margin",
            "Value": "5px"
        }
    },
    "CssClass": "",
    "Ctrl": {
        "0": {
            "id": "volver",
            "Orden": "1",
            "Label": "volver",
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
        "IdObj": "FRM_NuevoRecibo",
        "Param": {}
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Volver",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_CambiarEstado_Carrito"
                }
            }
        }
    }
};
ret["CD_FormasCobro"]={
    "id": "CD_FormasCobro",
    "Titulo": "Formas de Cobro",
    "SubTitulo": "",
    "BtnHide": "0",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "min-content",
            "Orden": 0
        }
    },
    "CssClass": "",
    "Ctrl": {},
    "Fill": {
        "TipoObj": "Formulario",
        "IdObj": "FRM_ClientesRecibosItemsAlta",
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
