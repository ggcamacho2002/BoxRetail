function CfgEventos(id,Param){
var ret={};

ret["EVT_TBL_Buscar_This"]={
    "id": "EVT_TBL_Buscar_This",
    "ClassEvt": "TBL_Buscar_This",
    "Clase": "Tabla",
    "IdObj": "This",
    "IdEvt": "Tabla_Buscar",
    "Param": {}
};
ret["EVT_ST_Buscar_This"]={
    "id": "EVT_ST_Buscar_This",
    "ClassEvt": "ST_Buscar_This",
    "Clase": "SuperTabla",
    "IdObj": "This",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_ST_ModalQuery_This"]={
    "id": "EVT_ST_ModalQuery_This",
    "ClassEvt": "ST_ModalQuery_This",
    "Clase": "SuperTabla",
    "IdObj": "This",
    "IdEvt": "SuperTabla_ModalQuery",
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
ret["EVT_DG_Iniciar_EditUsr"]={
    "id": "EVT_DG_Iniciar_EditUsr",
    "ClassEvt": "DG_Iniciar_EditUsr",
    "Clase": "Dialog",
    "IdObj": "DG_FRM_EditarUsuario_0",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_ST_Buscar_ListUsr"]={
    "id": "EVT_ST_Buscar_ListUsr",
    "ClassEvt": "ST_Buscar_ListUsr",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaUsuariosRO",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Hide_EditUsr"]={
    "id": "EVT_DG_Hide_EditUsr",
    "ClassEvt": "DG_Hide_EditUsr",
    "Clase": "Dialog",
    "IdObj": "DG_FRM_EditarUsuario_0",
    "IdEvt": "Dialog_Hide",
    "Param": {}
};
ret["EVT_FRM_UpdateBd_EditUsr"]={
    "id": "EVT_FRM_UpdateBd_EditUsr",
    "ClassEvt": "FRM_UpdateBd_EditUsr",
    "Clase": "Formulario",
    "IdObj": "FRM_EditarUsuario",
    "IdEvt": "Formulario_UpdateBd",
    "Param": {
        "0": {
            "Key": "id",
            "Function": "This",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_FRM_InsertBd_AltaUsr"]={
    "id": "EVT_FRM_InsertBd_AltaUsr",
    "ClassEvt": "FRM_InsertBd_AltaUsr",
    "Clase": "Formulario",
    "IdObj": "FRM_AltaUsuarios",
    "IdEvt": "Formulario_InsertBd",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaUsr"]={
    "id": "EVT_DG_Iniciar_AltaUsr",
    "ClassEvt": "DG_Iniciar_AltaUsr",
    "Clase": "Dialog",
    "IdObj": "DG_FRM_AltaUsuarios_0",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Hide_AltaUsr"]={
    "id": "EVT_DG_Hide_AltaUsr",
    "ClassEvt": "DG_Hide_AltaUsr",
    "Clase": "Dialog",
    "IdObj": "DG_FRM_AltaUsuarios_0",
    "IdEvt": "Dialog_Hide",
    "Param": {}
};
ret["EVT_TBL_DelItemConfirm_ListUsr"]={
    "id": "EVT_TBL_DelItemConfirm_ListUsr",
    "ClassEvt": "TBL_DelItemConfirm_ListUsr",
    "Clase": "Tabla",
    "IdObj": "TBL_ListaUsuariosRO",
    "IdEvt": "Tabla_DelItemConfirm",
    "Param": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
