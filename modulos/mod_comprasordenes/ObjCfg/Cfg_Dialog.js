function CfgDialog(id,Param){
var ret={};

ret["DG_SeleccionProveedor"]={
    "id": "DG_SeleccionProveedor",
    "Tipo": "Movible",
    "Titulo": "Seleccion Proveedor",
    "TipoObj": "BiFormSel",
    "EvtInicio": "Iniciar",
    "IdObj": "BiFormSel_SeleccionProveedor",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "50vw"
        },
        "1": {
            "Prop": "Height",
            "Value": "50vh"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {}
};
ret["DG_AgregarProductos"]={
    "id": "DG_AgregarProductos",
    "Tipo": "Movible",
    "Titulo": "Agregar Productos",
    "TipoObj": "SuperTabla",
    "EvtInicio": "Iniciar",
    "IdObj": "ST_Productos",
    "HeaderCtrl": {},
    "Style": {
        "0": {
            "Prop": "Width",
            "Value": "35vw"
        },
        "1": {
            "Prop": "Height",
            "Value": "80vh"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {
        "0": {
            "ClassEvt": "Dialog_Hide",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_ComprasOrdenesItems"
                }
            }
        }
    }
};
ret["DG_Pedido"]={
    "id": "DG_Pedido",
    "Tipo": "Movible",
    "Titulo": "Imprimir Pedido",
    "TipoObj": "Impresion",
    "IdObj": "IMP_Pedido",
    "EvtInicio": "Iniciar",
    "HeaderCtrl": {
        "0": {
            "id": "Imprimir",
            "Orden": "1",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Label": "Imprimir",
            "ClassEvt": "Imprimir",
            "CssClass": "Fill_Verde1",
            "Style": {
                "0": {
                    "Prop": "",
                    "Value": "300px"
                }
            }
        }
    },
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "80vh"
        }
    },
    "CssClass": "",
    "Param": {},
    "CfgEventos": {
        "0": {
            "ClassEvt": "Imprimir",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_IMP_Imprimir_Pedido"
                }
            }
        }
    }
};
ret["DG_ImprimeControlado"]={
    "id": "DG_ImprimeControlado",
    "Tipo": "Movible",
    "Titulo": "Imprimir",
    "TipoObj": "Impresion",
    "IdObj": "IMP_Controlado",
    "EvtInicio": "Iniciar",
    "HeaderCtrl": {
        "0": {
            "id": "Imprimir",
            "Orden": "1",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Label": "Imprimir",
            "ClassEvt": "Imprimir",
            "CssClass": "Fill_Verde1",
            "Style": {}
        }
    },
    "Style": {},
    "CssClass": "",
    "Param": {},
    "CfgEventos": {
        "0": {
            "ClassEvt": "Imprimir",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_IMP_Imprimir_ImprimirControlado"
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
