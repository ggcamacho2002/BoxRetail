function CfgEventos(id,Param){
var ret={};

ret["EVT_VT_Cambiar_Manual"]={
    "id": "EVT_VT_Cambiar_Manual",
    "ClassEvt": "VT_Cambiar_Manual",
    "Clase": "Vistas",
    "IdObj": "VT_Manual",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_VT_Cambiar_OneSueldo"]={
    "id": "EVT_VT_Cambiar_OneSueldo",
    "ClassEvt": "VT_Cambiar_OneSueldo",
    "Clase": "Vistas",
    "IdObj": "VT_OneSueldo",
    "IdEvt": "Vistas_Cambiar",
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
            "Value": "idPersonal"
        },
        "1": {
            "Key": "ValorTipo",
            "Function": "Get",
            "TipoObj": "Tabla",
            "IdObj": "TBL_ListaManual",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_FRM_GetBdXLocalStore_idPersonal"]={
    "id": "EVT_FRM_GetBdXLocalStore_idPersonal",
    "ClassEvt": "FRM_GetBdXLocalStore_idPersonal",
    "Clase": "Formulario",
    "IdObj": "FRM_Variables",
    "IdEvt": "Formulario_GetBdXLocalStore",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Get",
            "Value": "idPersonal"
        }
    }
};
ret["EVT_DS_InsertOneByRelacion_NuevaLiquidacion"]={
    "id": "EVT_DS_InsertOneByRelacion_NuevaLiquidacion",
    "ClassEvt": "DS_InsertOneByRelacion_NuevaLiquidacion",
    "Clase": "DataSources",
    "IdObj": "DS_SueldosLiquidacion",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_insertliquidacion"
        }
    }
};
ret["EVT_FRM_GetBdXUltIdInsertado_TotLiquidacion"]={
    "id": "EVT_FRM_GetBdXUltIdInsertado_TotLiquidacion",
    "ClassEvt": "FRM_GetBdXUltIdInsertado_TotLiquidacion",
    "Clase": "Formulario",
    "IdObj": "FRM_TotalesLiquidacion",
    "IdEvt": "Formulario_GetBdXUltIdInsertado",
    "Param": {}
};
ret["EVT_ST_BuscarByRelacion_SueldoLiqItems"]={
    "id": "EVT_ST_BuscarByRelacion_SueldoLiqItems",
    "ClassEvt": "ST_BuscarByRelacion_SueldoLiqItems",
    "Clase": "SuperTabla",
    "IdObj": "ST_SueldoLiqItems",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_SueldoLiqItems"
        }
    }
};
ret["EVT_Scripts_Iniciar_PreLiquidarSueldo"]={
    "id": "EVT_Scripts_Iniciar_PreLiquidarSueldo",
    "ClassEvt": "Scripts_Iniciar_PreLiquidarSueldo",
    "Clase": "Scripts",
    "IdObj": "Scripts_PreLiquidarSueldo",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_AnioMesActual"]={
    "id": "EVT_Scripts_Iniciar_AnioMesActual",
    "ClassEvt": "Scripts_Iniciar_AnioMesActual",
    "Clase": "Scripts",
    "IdObj": "Scripts_AnioMesActual",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
