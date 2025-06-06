function CfgEventos(id,Param){
var ret={};

ret["EVT_ST_Buscar_ListaRol"]={
    "id": "EVT_ST_Buscar_ListaRol",
    "ClassEvt": "ST_Buscar_ListaRol",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaRoles",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaRol"]={
    "id": "EVT_DG_Iniciar_AltaRol",
    "ClassEvt": "DG_Iniciar_AltaRol",
    "Clase": "Dialog",
    "IdObj": "DG_FRM_AltaRol_0",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditRol"]={
    "id": "EVT_DG_Iniciar_EditRol",
    "ClassEvt": "DG_Iniciar_EditRol",
    "Clase": "Dialog",
    "IdObj": "DG_FRM_EditarRol_0",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_FRM_UpdateBd_EditRol"]={
    "id": "EVT_FRM_UpdateBd_EditRol",
    "ClassEvt": "FRM_UpdateBd_EditRol",
    "Clase": "Formulario",
    "IdObj": "FRM_EditarRol",
    "IdEvt": "Formulario_UpdateBd",
    "Param": {
        "0": {
            "Key": "id",
            "Function": "This",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_FRM_InsertBd_AltaRol"]={
    "id": "EVT_FRM_InsertBd_AltaRol",
    "ClassEvt": "FRM_InsertBd_AltaRol",
    "Clase": "Formulario",
    "IdObj": "FRM_AltaRol",
    "IdEvt": "Formulario_InsertBd",
    "Param": {}
};
ret["EVT_DG_Hide_EditRol"]={
    "id": "EVT_DG_Hide_EditRol",
    "ClassEvt": "DG_Hide_EditRol",
    "Clase": "Dialog",
    "IdObj": "DG_FRM_EditarRol_0",
    "IdEvt": "Dialog_Hide",
    "Param": {}
};
ret["EVT_FRM_GetBdXidPadre_EditRol"]={
    "id": "EVT_FRM_GetBdXidPadre_EditRol",
    "ClassEvt": "FRM_GetBdXidPadre_EditRol",
    "Clase": "Formulario",
    "IdObj": "FRM_EditarRol",
    "IdEvt": "Formulario_GetBdXidPadre",
    "Param": {}
};
ret["EVT_TBL_DelItemConfirm_ListaRol"]={
    "id": "EVT_TBL_DelItemConfirm_ListaRol",
    "ClassEvt": "TBL_DelItemConfirm_ListaRol",
    "Clase": "Tabla",
    "IdObj": "TBL_ListaRoles",
    "IdEvt": "Tabla_DelItemConfirm",
    "Param": {}
};
ret["EVT_CD_Iniciar_AllMod"]={
    "id": "EVT_CD_Iniciar_AllMod",
    "ClassEvt": "CD_Iniciar_AllMod",
    "Clase": "Card",
    "IdObj": "CD_AllModulos",
    "IdEvt": "Card_Iniciar",
    "Param": {}
};
ret["EVT_ST_Buscar_ListMod"]={
    "id": "EVT_ST_Buscar_ListMod",
    "ClassEvt": "ST_Buscar_ListMod",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaModulos",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DS_InsertOneByRelacion_RolMod"]={
    "id": "EVT_DS_InsertOneByRelacion_RolMod",
    "ClassEvt": "DS_InsertOneByRelacion_RolMod",
    "Clase": "DataSources",
    "IdObj": "DS_AppRolModulo",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_AltaRolModulo"
        }
    }
};
ret["EVT_TBL_DelItemConfirm_This"]={
    "id": "EVT_TBL_DelItemConfirm_This",
    "ClassEvt": "TBL_DelItemConfirm_This",
    "Clase": "Tabla",
    "IdObj": "This",
    "IdEvt": "Tabla_DelItemConfirm",
    "Param": {}
};
ret["EVT_VT_CambiarEstado_1-1"]={
    "id": "EVT_VT_CambiarEstado_1-1",
    "ClassEvt": "VT_CambiarEstado_1-1",
    "Clase": "Vistas",
    "IdObj": "VT_Inicio",
    "IdEvt": "Vistas_CambiarEstado",
    "Param": {
        "0": {
            "Key": "NroEstado",
            "Function": "Input",
            "Value": "1"
        }
    }
};
ret["EVT_ST_BuscarByRelacion_RolModulo"]={
    "id": "EVT_ST_BuscarByRelacion_RolModulo",
    "ClassEvt": "ST_BuscarByRelacion_RolModulo",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaModulos",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_BsqRolModulo"
        }
    }
};
ret["EVT_DG_Hide_AltaRol"]={
    "id": "EVT_DG_Hide_AltaRol",
    "ClassEvt": "DG_Hide_AltaRol",
    "Clase": "Dialog",
    "IdObj": "DG_FRM_AltaRol_0",
    "IdEvt": "Dialog_Hide",
    "Param": {}
};
ret["EVT_VT_CambiarEstado_0-0"]={
    "id": "EVT_VT_CambiarEstado_0-0",
    "ClassEvt": "VT_CambiarEstado_0-0",
    "Clase": "Vistas",
    "IdObj": "VT_Inicio",
    "IdEvt": "Vistas_CambiarEstado",
    "Param": {
        "0": {
            "Key": "NroEstado",
            "Function": "Input",
            "Value": "0"
        }
    }
};
ret["EVT_FRM_GetBdXidPadre_FillFrmRolSelecto"]={
    "id": "EVT_FRM_GetBdXidPadre_FillFrmRolSelecto",
    "ClassEvt": "FRM_GetBdXidPadre_FillFrmRolSelecto",
    "Clase": "Formulario",
    "IdObj": "FRM_RolSelecto",
    "IdEvt": "Formulario_GetBdXidPadre",
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

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
