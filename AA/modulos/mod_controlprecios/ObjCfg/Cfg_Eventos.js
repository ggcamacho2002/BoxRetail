function CfgEventos(id,Param){
var ret={};

ret["EVT_FRM_GetBdXidPadre_This"]={
    "id": "EVT_FRM_GetBdXidPadre_This",
    "ClassEvt": "FRM_GetBdXidPadre_This",
    "Clase": "Formulario",
    "IdObj": "This",
    "IdEvt": "Formulario_GetBdXidPadre",
    "Param": {}
};
ret["EVT_DG_Iniciar_CambiaCompra"]={
    "id": "EVT_DG_Iniciar_CambiaCompra",
    "ClassEvt": "DG_Iniciar_CambiaCompra",
    "Clase": "Dialog",
    "IdObj": "DG_CambiaCompra",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CalculaPackUnidad"]={
    "id": "EVT_Scripts_Iniciar_CalculaPackUnidad",
    "ClassEvt": "Scripts_Iniciar_CalculaPackUnidad",
    "Clase": "Scripts",
    "IdObj": "Scripts_CalculaPackUnidad",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_SeteaPackUnidadOLd"]={
    "id": "EVT_Scripts_Iniciar_SeteaPackUnidadOLd",
    "ClassEvt": "Scripts_Iniciar_SeteaPackUnidadOLd",
    "Clase": "Scripts",
    "IdObj": "Scripts_SeteaPackUnidadOLd",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_FRM_UpdateBd_This"]={
    "id": "EVT_FRM_UpdateBd_This",
    "ClassEvt": "FRM_UpdateBd_This",
    "Clase": "Formulario",
    "IdObj": "This",
    "IdEvt": "Formulario_UpdateBd",
    "Param": {
        "0": {
            "Key": "id",
            "Function": "This",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_DG_PadreHide_This"]={
    "id": "EVT_DG_PadreHide_This",
    "ClassEvt": "DG_PadreHide_This",
    "Clase": "Dialog",
    "IdObj": "This",
    "IdEvt": "Dialog_PadreHide",
    "Param": {}
};
ret["EVT_ST_Buscar_ProductosPrecios"]={
    "id": "EVT_ST_Buscar_ProductosPrecios",
    "ClassEvt": "ST_Buscar_ProductosPrecios",
    "Clase": "SuperTabla",
    "IdObj": "ST_ProductosPrecios",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CambiaPorcVenta"]={
    "id": "EVT_Scripts_Iniciar_CambiaPorcVenta",
    "ClassEvt": "Scripts_Iniciar_CambiaPorcVenta",
    "Clase": "Scripts",
    "IdObj": "Scripts_CambiaPorcVenta",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_CambiaVenta"]={
    "id": "EVT_DG_Iniciar_CambiaVenta",
    "ClassEvt": "DG_Iniciar_CambiaVenta",
    "Clase": "Dialog",
    "IdObj": "DG_CambiaVenta",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
