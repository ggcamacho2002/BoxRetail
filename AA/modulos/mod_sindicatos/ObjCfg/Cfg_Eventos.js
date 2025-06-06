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
ret["EVT_ST_Buscar_Sindicatos"]={
    "id": "EVT_ST_Buscar_Sindicatos",
    "ClassEvt": "ST_Buscar_Sindicatos",
    "Clase": "SuperTabla",
    "IdObj": "ST_Sindicatos",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditarSindicatos"]={
    "id": "EVT_DG_Iniciar_EditarSindicatos",
    "ClassEvt": "DG_Iniciar_EditarSindicatos",
    "Clase": "Dialog",
    "IdObj": "DG_EditarSindicatos",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaSindicatos"]={
    "id": "EVT_DG_Iniciar_AltaSindicatos",
    "ClassEvt": "DG_Iniciar_AltaSindicatos",
    "Clase": "Dialog",
    "IdObj": "DG_AltaSindicatos",
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
ret["EVT_ST_Buscar_SindicatosBasicos"]={
    "id": "EVT_ST_Buscar_SindicatosBasicos",
    "ClassEvt": "ST_Buscar_SindicatosBasicos",
    "Clase": "SuperTabla",
    "IdObj": "ST_SindicatosBasicos",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditarSindicatosBasicos"]={
    "id": "EVT_DG_Iniciar_EditarSindicatosBasicos",
    "ClassEvt": "DG_Iniciar_EditarSindicatosBasicos",
    "Clase": "Dialog",
    "IdObj": "DG_EditarSindicatosBasicos",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaSindicatosBasicos"]={
    "id": "EVT_DG_Iniciar_AltaSindicatosBasicos",
    "ClassEvt": "DG_Iniciar_AltaSindicatosBasicos",
    "Clase": "Dialog",
    "IdObj": "DG_AltaSindicatosBasicos",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_VT_Cambiar_Sindicatos"]={
    "id": "EVT_VT_Cambiar_Sindicatos",
    "ClassEvt": "VT_Cambiar_Sindicatos",
    "Clase": "Vistas",
    "IdObj": "VT_Sindicatos",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_VT_Cambiar_SindicatoBasicos"]={
    "id": "EVT_VT_Cambiar_SindicatoBasicos",
    "ClassEvt": "VT_Cambiar_SindicatoBasicos",
    "Clase": "Vistas",
    "IdObj": "VT_SindicatoBasicos",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_ST_BuscarByRelacion_SindicatosBasicos"]={
    "id": "EVT_ST_BuscarByRelacion_SindicatosBasicos",
    "ClassEvt": "ST_BuscarByRelacion_SindicatosBasicos",
    "Clase": "SuperTabla",
    "IdObj": "ST_SindicatosBasicos",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_SindicatosBasicos"
        }
    }
};
ret["EVT_LocalS_SetTablaSelecto_Sindicato"]={
    "id": "EVT_LocalS_SetTablaSelecto_Sindicato",
    "ClassEvt": "LocalS_SetTablaSelecto_Sindicato",
    "Clase": "LocalStorange",
    "IdObj": "This",
    "IdEvt": "LocalStorange_SetTablaSelecto",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Set",
            "Value": "idSindicato"
        },
        "1": {
            "Key": "ValorTipo",
            "Function": "Get",
            "TipoObj": "Tabla",
            "IdObj": "TBL_Sindicatos",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_FRM_GetBdXLocalStore_idSindicato"]={
    "id": "EVT_FRM_GetBdXLocalStore_idSindicato",
    "ClassEvt": "FRM_GetBdXLocalStore_idSindicato",
    "Clase": "Formulario",
    "IdObj": "FRM_SindicatoSelecto",
    "IdEvt": "Formulario_GetBdXLocalStore",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Get",
            "Value": "idSindicato"
        }
    }
};
ret["EVT_DS_InsertOneByRelacion_NuevaCategoriaBasico"]={
    "id": "EVT_DS_InsertOneByRelacion_NuevaCategoriaBasico",
    "ClassEvt": "DS_InsertOneByRelacion_NuevaCategoriaBasico",
    "Clase": "DataSources",
    "IdObj": "DS_SindicatosBasicos",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_InsertCategoriaBasico"
        }
    }
};
ret["EVT_TBL_UpdateOneField_SindicatosBasico"]={
    "id": "EVT_TBL_UpdateOneField_SindicatosBasico",
    "ClassEvt": "TBL_UpdateOneField_SindicatosBasico",
    "Clase": "Tabla",
    "IdObj": "TBL_SindicatosBasicos",
    "IdEvt": "Tabla_UpdateOneField",
    "Param": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
