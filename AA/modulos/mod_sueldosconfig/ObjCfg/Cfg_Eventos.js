function CfgEventos(id,Param){
var ret={};

ret["EVT_TBL_DelItem_This"]={
    "id": "EVT_TBL_DelItem_This",
    "ClassEvt": "TBL_DelItem_This",
    "Clase": "Tabla",
    "IdObj": "This",
    "IdEvt": "Tabla_DelItem",
    "Param": {}
};
ret["EVT_TBL_DelItemConfirm_This"]={
    "id": "EVT_TBL_DelItemConfirm_This",
    "ClassEvt": "TBL_DelItemConfirm_This",
    "Clase": "Tabla",
    "IdObj": "This",
    "IdEvt": "Tabla_DelItemConfirm",
    "Param": {}
};
ret["EVT_ST_Buscar_SueldosItemsConfig"]={
    "id": "EVT_ST_Buscar_SueldosItemsConfig",
    "ClassEvt": "ST_Buscar_SueldosItemsConfig",
    "Clase": "SuperTabla",
    "IdObj": "ST_SueldosItemsConfig",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditarSueldosItemsConfig"]={
    "id": "EVT_DG_Iniciar_EditarSueldosItemsConfig",
    "ClassEvt": "DG_Iniciar_EditarSueldosItemsConfig",
    "Clase": "Dialog",
    "IdObj": "DG_EditarSueldosItemsConfig",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaSueldosItemsConfig"]={
    "id": "EVT_DG_Iniciar_AltaSueldosItemsConfig",
    "ClassEvt": "DG_Iniciar_AltaSueldosItemsConfig",
    "Clase": "Dialog",
    "IdObj": "DG_AltaSueldosItemsConfig",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_PadreHide_This"]={
    "id": "EVT_DG_PadreHide_This",
    "ClassEvt": "DG_PadreHide_This",
    "Clase": "Dialog",
    "IdObj": "This",
    "IdEvt": "Dialog_PadreHide",
    "Param": {}
};
ret["EVT_FRM_GetBdXidPadre_This"]={
    "id": "EVT_FRM_GetBdXidPadre_This",
    "ClassEvt": "FRM_GetBdXidPadre_This",
    "Clase": "Formulario",
    "IdObj": "This",
    "IdEvt": "Formulario_GetBdXidPadre",
    "Param": {}
};
ret["EVT_FRM_InsertBd_This"]={
    "id": "EVT_FRM_InsertBd_This",
    "ClassEvt": "FRM_InsertBd_This",
    "Clase": "Formulario",
    "IdObj": "This",
    "IdEvt": "Formulario_InsertBd",
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
ret["EVT_VT_Cambiar_SueldosConfigItems"]={
    "id": "EVT_VT_Cambiar_SueldosConfigItems",
    "ClassEvt": "VT_Cambiar_SueldosConfigItems",
    "Clase": "Vistas",
    "IdObj": "VT_SueldosConfigItems",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_VT_Cambiar_Formulas"]={
    "id": "EVT_VT_Cambiar_Formulas",
    "ClassEvt": "VT_Cambiar_Formulas",
    "Clase": "Vistas",
    "IdObj": "VT_Formulas",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_DG_Iniciar_FormulaUnidad"]={
    "id": "EVT_DG_Iniciar_FormulaUnidad",
    "ClassEvt": "DG_Iniciar_FormulaUnidad",
    "Clase": "Dialog",
    "IdObj": "DG_FormulaUnidad",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_ST_Buscar_Formulas"]={
    "id": "EVT_ST_Buscar_Formulas",
    "ClassEvt": "ST_Buscar_Formulas",
    "Clase": "SuperTabla",
    "IdObj": "ST_Formulas",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Iniciar_FormulaValorUnitario"]={
    "id": "EVT_DG_Iniciar_FormulaValorUnitario",
    "ClassEvt": "DG_Iniciar_FormulaValorUnitario",
    "Clase": "Dialog",
    "IdObj": "DG_FormulaValorUnitario",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_IniciarSinClear_Parametros"]={
    "id": "EVT_DG_IniciarSinClear_Parametros",
    "ClassEvt": "DG_IniciarSinClear_Parametros",
    "Clase": "Dialog",
    "IdObj": "DG_Parametros",
    "IdEvt": "Dialog_IniciarSinClear",
    "Param": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
