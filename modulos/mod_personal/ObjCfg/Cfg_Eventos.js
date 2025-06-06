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
ret["EVT_ST_Buscar_Personal"]={
    "id": "EVT_ST_Buscar_Personal",
    "ClassEvt": "ST_Buscar_Personal",
    "Clase": "SuperTabla",
    "IdObj": "ST_Personal",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditarPersonal"]={
    "id": "EVT_DG_Iniciar_EditarPersonal",
    "ClassEvt": "DG_Iniciar_EditarPersonal",
    "Clase": "Dialog",
    "IdObj": "DG_EditarPersonal",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaPersonal"]={
    "id": "EVT_DG_Iniciar_AltaPersonal",
    "ClassEvt": "DG_Iniciar_AltaPersonal",
    "Clase": "Dialog",
    "IdObj": "DG_AltaPersonal",
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
ret["EVT_VT_Cambiar_Inicio"]={
    "id": "EVT_VT_Cambiar_Inicio",
    "ClassEvt": "VT_Cambiar_Inicio",
    "Clase": "Vistas",
    "IdObj": "VT_Inicio",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_VT_Cambiar_Tareas"]={
    "id": "EVT_VT_Cambiar_Tareas",
    "ClassEvt": "VT_Cambiar_Tareas",
    "Clase": "Vistas",
    "IdObj": "VT_Tareas",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_ST_Buscar_Tareas"]={
    "id": "EVT_ST_Buscar_Tareas",
    "ClassEvt": "ST_Buscar_Tareas",
    "Clase": "SuperTabla",
    "IdObj": "ST_Tareas",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditarTareas"]={
    "id": "EVT_DG_Iniciar_EditarTareas",
    "ClassEvt": "DG_Iniciar_EditarTareas",
    "Clase": "Dialog",
    "IdObj": "DG_EditarTareas",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaTareas"]={
    "id": "EVT_DG_Iniciar_AltaTareas",
    "ClassEvt": "DG_Iniciar_AltaTareas",
    "Clase": "Dialog",
    "IdObj": "DG_AltaTareas",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DS_InsertOneByRelacion_TareaApersonal"]={
    "id": "EVT_DS_InsertOneByRelacion_TareaApersonal",
    "ClassEvt": "DS_InsertOneByRelacion_TareaApersonal",
    "Clase": "DataSources",
    "IdObj": "DS_PersonalRelTareas",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_TareaApersonal"
        }
    }
};
ret["EVT_ST_Buscar_PersonalRelTareas"]={
    "id": "EVT_ST_Buscar_PersonalRelTareas",
    "ClassEvt": "ST_Buscar_PersonalRelTareas",
    "Clase": "SuperTabla",
    "IdObj": "ST_PersonalRelTareas",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_VT_Cambiar_PersonalTareas"]={
    "id": "EVT_VT_Cambiar_PersonalTareas",
    "ClassEvt": "VT_Cambiar_PersonalTareas",
    "Clase": "Vistas",
    "IdObj": "VT_PersonalTareas",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_LocalS_SetTablaSelecto_PersonalSelecto"]={
    "id": "EVT_LocalS_SetTablaSelecto_PersonalSelecto",
    "ClassEvt": "LocalS_SetTablaSelecto_PersonalSelecto",
    "Clase": "LocalStorange",
    "IdObj": "This",
    "IdEvt": "LocalStorange_SetTablaSelecto",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Set",
            "Value": "idPersonal"
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
ret["EVT_FRM_GetBdXLocalStore_PersonalSelecto"]={
    "id": "EVT_FRM_GetBdXLocalStore_PersonalSelecto",
    "ClassEvt": "FRM_GetBdXLocalStore_PersonalSelecto",
    "Clase": "Formulario",
    "IdObj": "FRM_PersonalSelecto",
    "IdEvt": "Formulario_GetBdXLocalStore",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Get",
            "Value": "idPersonal"
        }
    }
};
ret["EVT_ST_BuscarByRelacion_PersonalRelTareas"]={
    "id": "EVT_ST_BuscarByRelacion_PersonalRelTareas",
    "ClassEvt": "ST_BuscarByRelacion_PersonalRelTareas",
    "Clase": "SuperTabla",
    "IdObj": "ST_PersonalRelTareas",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_PersonalTareasAsignadas"
        }
    }
};
ret["EVT_ST_CambiarModoEdit_Tareas"]={
    "id": "EVT_ST_CambiarModoEdit_Tareas",
    "ClassEvt": "ST_CambiarModoEdit_Tareas",
    "Clase": "SuperTabla",
    "IdObj": "ST_Tareas",
    "IdEvt": "SuperTabla_CambiarModoEdit",
    "Param": {}
};
ret["EVT_ST_CambiarModoRO_Tareas"]={
    "id": "EVT_ST_CambiarModoRO_Tareas",
    "ClassEvt": "ST_CambiarModoRO_Tareas",
    "Clase": "SuperTabla",
    "IdObj": "ST_Tareas",
    "IdEvt": "SuperTabla_CambiarModoRO",
    "Param": {}
};
ret["EVT_TBL_UpdateOneField_Tareas"]={
    "id": "EVT_TBL_UpdateOneField_Tareas",
    "ClassEvt": "TBL_UpdateOneField_Tareas",
    "Clase": "Tabla",
    "IdObj": "TBL_Tareas",
    "IdEvt": "Tabla_UpdateOneField",
    "Param": {}
};
ret["EVT_DG_Iniciar_PersonalSindicato"]={
    "id": "EVT_DG_Iniciar_PersonalSindicato",
    "ClassEvt": "DG_Iniciar_PersonalSindicato",
    "Clase": "Dialog",
    "IdObj": "DG_PersonalSindicato",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_FRM_GetBdXRelacion_SindicatoCateg"]={
    "id": "EVT_FRM_GetBdXRelacion_SindicatoCateg",
    "ClassEvt": "FRM_GetBdXRelacion_SindicatoCateg",
    "Clase": "Formulario",
    "IdObj": "FRM_PersonalSindicato",
    "IdEvt": "Formulario_GetBdXRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_PersonalSindicato"
        }
    }
};
ret["EVT_DG_Hide_PersonalSindicato"]={
    "id": "EVT_DG_Hide_PersonalSindicato",
    "ClassEvt": "DG_Hide_PersonalSindicato",
    "Clase": "Dialog",
    "IdObj": "DG_PersonalSindicato",
    "IdEvt": "Dialog_Hide",
    "Param": {}
};
ret["EVT_DG_Iniciar_AllDatos"]={
    "id": "EVT_DG_Iniciar_AllDatos",
    "ClassEvt": "DG_Iniciar_AllDatos",
    "Clase": "Dialog",
    "IdObj": "DG_AllDatos",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
