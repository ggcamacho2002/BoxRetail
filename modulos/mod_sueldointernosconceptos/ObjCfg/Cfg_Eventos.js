function CfgEventos(id,Param){
var ret={};

ret["EVT_DG_Iniciar_AltaSueldoIntConcepto"]={
    "id": "EVT_DG_Iniciar_AltaSueldoIntConcepto",
    "ClassEvt": "DG_Iniciar_AltaSueldoIntConcepto",
    "Clase": "Dialog",
    "IdObj": "DG_AltaSueldoIntConcepto",
    "IdEvt": "Dialog_Iniciar",
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
ret["EVT_DG_Iniciar_EditarSueldoIntConcepto"]={
    "id": "EVT_DG_Iniciar_EditarSueldoIntConcepto",
    "ClassEvt": "DG_Iniciar_EditarSueldoIntConcepto",
    "Clase": "Dialog",
    "IdObj": "DG_EditarSueldoIntConcepto",
    "IdEvt": "Dialog_Iniciar",
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
ret["EVT_FRM_GetBdXidPadre_This"]={
    "id": "EVT_FRM_GetBdXidPadre_This",
    "ClassEvt": "FRM_GetBdXidPadre_This",
    "Clase": "Formulario",
    "IdObj": "This",
    "IdEvt": "Formulario_GetBdXidPadre",
    "Param": {}
};
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
ret["EVT_ST_Buscar_SueldoIntConcepto"]={
    "id": "EVT_ST_Buscar_SueldoIntConcepto",
    "ClassEvt": "ST_Buscar_SueldoIntConcepto",
    "Clase": "SuperTabla",
    "IdObj": "ST_SueldoIntConcepto",
    "IdEvt": "SuperTabla_Buscar",
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
ret["EVT_VT_Cambiar_SueldoIntConcepto"]={
    "id": "EVT_VT_Cambiar_SueldoIntConcepto",
    "ClassEvt": "VT_Cambiar_SueldoIntConcepto",
    "Clase": "Vistas",
    "IdObj": "VT_SueldoIntConcepto",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_VT_Cambiar_Inicio"]={
    "id": "EVT_VT_Cambiar_Inicio",
    "ClassEvt": "VT_Cambiar_Inicio",
    "Clase": "Vistas",
    "IdObj": "VT_Inicio",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_VT_Cambiar_PersonalConcepto"]={
    "id": "EVT_VT_Cambiar_PersonalConcepto",
    "ClassEvt": "VT_Cambiar_PersonalConcepto",
    "Clase": "Vistas",
    "IdObj": "VT_PersonalConcepto",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_ST_Buscar_Personal"]={
    "id": "EVT_ST_Buscar_Personal",
    "ClassEvt": "ST_Buscar_Personal",
    "Clase": "SuperTabla",
    "IdObj": "ST_Personal",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_LocalS_SetTablaSelecto_idPersonal"]={
    "id": "EVT_LocalS_SetTablaSelecto_idPersonal",
    "ClassEvt": "LocalS_SetTablaSelecto_idPersonal",
    "Clase": "LocalStorange",
    "IdObj": "This",
    "IdEvt": "LocalStorange_SetTablaSelecto",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Set",
            "Value": "idpersonal"
        },
        "1": {
            "Key": "ValorTipo",
            "Function": "Get",
            "TipoObj": "Tabla",
            "IdObj": "TBL_Personal",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_FRM_GetBdXLocalStore_idpersonal"]={
    "id": "EVT_FRM_GetBdXLocalStore_idpersonal",
    "ClassEvt": "FRM_GetBdXLocalStore_idpersonal",
    "Clase": "Formulario",
    "IdObj": "FRM_PersonalSelecto",
    "IdEvt": "Formulario_GetBdXLocalStore",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Get",
            "Value": "idpersonal"
        }
    }
};
ret["EVT_ST_Buscar_AllConceptos"]={
    "id": "EVT_ST_Buscar_AllConceptos",
    "ClassEvt": "ST_Buscar_AllConceptos",
    "Clase": "SuperTabla",
    "IdObj": "ST_AllConceptos",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_ST_Buscar_PersConcepto"]={
    "id": "EVT_ST_Buscar_PersConcepto",
    "ClassEvt": "ST_Buscar_PersConcepto",
    "Clase": "SuperTabla",
    "IdObj": "ST_PersConcepto",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_ST_BuscarByRelacion_PersConcepto"]={
    "id": "EVT_ST_BuscarByRelacion_PersConcepto",
    "ClassEvt": "ST_BuscarByRelacion_PersConcepto",
    "Clase": "SuperTabla",
    "IdObj": "ST_PersConcepto",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_personalconcepto"
        }
    }
};
ret["EVT_DS_InsertOneByRelacion_PersConcepto"]={
    "id": "EVT_DS_InsertOneByRelacion_PersConcepto",
    "ClassEvt": "DS_InsertOneByRelacion_PersConcepto",
    "Clase": "DataSources",
    "IdObj": "DS_PersConcepto",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_InsertConsepto"
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
