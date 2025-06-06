function CfgEventos(id,Param){
var ret={};

ret["EVT_ST_Buscar_ListMod"]={
    "id": "EVT_ST_Buscar_ListMod",
    "ClassEvt": "ST_Buscar_ListMod",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaModulos",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditMod"]={
    "id": "EVT_DG_Iniciar_EditMod",
    "ClassEvt": "DG_Iniciar_EditMod",
    "Clase": "Dialog",
    "IdObj": "DG_FRM_EditarModulo_ModEditar",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaMod"]={
    "id": "EVT_DG_Iniciar_AltaMod",
    "ClassEvt": "DG_Iniciar_AltaMod",
    "Clase": "Dialog",
    "IdObj": "DG_FRM_AltaModulo_ModAlta",
    "IdEvt": "Dialog_Iniciar",
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
ret["EVT_FRM_GetBdXidPadre_EditMod"]={
    "id": "EVT_FRM_GetBdXidPadre_EditMod",
    "ClassEvt": "FRM_GetBdXidPadre_EditMod",
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
ret["EVT_DG_Hide_EditMod"]={
    "id": "EVT_DG_Hide_EditMod",
    "ClassEvt": "DG_Hide_EditMod",
    "Clase": "Dialog",
    "IdObj": "DG_FRM_EditarModulo_ModEditar",
    "IdEvt": "Dialog_Hide",
    "Param": {}
};
ret["EVT_DG_Hide_AltaMod"]={
    "id": "EVT_DG_Hide_AltaMod",
    "ClassEvt": "DG_Hide_AltaMod",
    "Clase": "Dialog",
    "IdObj": "DG_FRM_AltaModulo_ModAlta",
    "IdEvt": "Dialog_Hide",
    "Param": {}
};
ret["EVT_FRM_UpdateBd_ModEdit"]={
    "id": "EVT_FRM_UpdateBd_ModEdit",
    "ClassEvt": "FRM_UpdateBd_ModEdit",
    "Clase": "Formulario",
    "IdObj": "FRM_EditarModulo",
    "IdEvt": "Formulario_UpdateBd",
    "Param": {
        "0": {
            "Key": "id",
            "Function": "This",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_ST_Buscar_This"]={
    "id": "EVT_ST_Buscar_This",
    "ClassEvt": "ST_Buscar_This",
    "Clase": "SuperTabla",
    "IdObj": "This",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
