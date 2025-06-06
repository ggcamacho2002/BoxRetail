function CfgEventos(id,Param){
var ret={};

ret["EVT_ST_Buscar_Personal"]={
    "id": "EVT_ST_Buscar_Personal",
    "ClassEvt": "ST_Buscar_Personal",
    "Clase": "SuperTabla",
    "IdObj": "ST_Personal",
    "IdEvt": "SuperTabla_Buscar",
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
ret["EVT_VT_Cambiar_LiquidacionManual"]={
    "id": "EVT_VT_Cambiar_LiquidacionManual",
    "ClassEvt": "VT_Cambiar_LiquidacionManual",
    "Clase": "Vistas",
    "IdObj": "VT_LiquidacionManual",
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
ret["EVT_DS_InsertOneByRelacion_SueldoInt"]={
    "id": "EVT_DS_InsertOneByRelacion_SueldoInt",
    "ClassEvt": "DS_InsertOneByRelacion_SueldoInt",
    "Clase": "DataSources",
    "IdObj": "DS_SueldosInternos",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_InsertSueldoInt"
        }
    }
};
ret["EVT_ST_BuscarByRelacion_LiquidacionItems"]={
    "id": "EVT_ST_BuscarByRelacion_LiquidacionItems",
    "ClassEvt": "ST_BuscarByRelacion_LiquidacionItems",
    "Clase": "SuperTabla",
    "IdObj": "ST_LiquidacionItems",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_UltimoIdLiq"
        }
    }
};
ret["EVT_TBL_SumarizarColumna_sumaTotal"]={
    "id": "EVT_TBL_SumarizarColumna_sumaTotal",
    "ClassEvt": "TBL_SumarizarColumna_sumaTotal",
    "Clase": "Tabla",
    "IdObj": "TBL_LiquidacionItems",
    "IdEvt": "Tabla_SumarizarColumna",
    "Param": {
        "0": {
            "Key": "Columna",
            "Function": "GetValue",
            "TipoObj": "Tabla",
            "IdObj": "TBL_LiquidacionItems",
            "ItemObj": "DSremunerativo"
        },
        "1": {
            "Key": "SetField",
            "Function": "SetValue",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_LiquidacionItems",
            "ItemObj": "TotalRemu"
        }
    }
};
ret["EVT_TBL_SumarizarColumna_descuento"]={
    "id": "EVT_TBL_SumarizarColumna_descuento",
    "ClassEvt": "TBL_SumarizarColumna_descuento",
    "Clase": "Tabla",
    "IdObj": "TBL_LiquidacionItems",
    "IdEvt": "Tabla_SumarizarColumna",
    "Param": {
        "0": {
            "Key": "Columna",
            "Function": "GetValue",
            "TipoObj": "Tabla",
            "IdObj": "TBL_LiquidacionItems",
            "ItemObj": "DSdescuento"
        },
        "1": {
            "Key": "SetField",
            "Function": "SetValue",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_LiquidacionItems",
            "ItemObj": "TotalDes"
        }
    }
};
ret["EVT_FRM_CambiarModoRO_PersonalSelecto"]={
    "id": "EVT_FRM_CambiarModoRO_PersonalSelecto",
    "ClassEvt": "FRM_CambiarModoRO_PersonalSelecto",
    "Clase": "Formulario",
    "IdObj": "FRM_PersonalSelecto",
    "IdEvt": "Formulario_CambiarModoRO",
    "Param": {}
};
ret["EVT_DG_Iniciar_ImprimeLiqManual"]={
    "id": "EVT_DG_Iniciar_ImprimeLiqManual",
    "ClassEvt": "DG_Iniciar_ImprimeLiqManual",
    "Clase": "Dialog",
    "IdObj": "DG_LiquidacioManual",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_FRM_GetBdXLocalStore_PersonalSelectoImpresion"]={
    "id": "EVT_FRM_GetBdXLocalStore_PersonalSelectoImpresion",
    "ClassEvt": "FRM_GetBdXLocalStore_PersonalSelectoImpresion",
    "Clase": "Formulario",
    "IdObj": "FRM_PersonalSelectoImpresion",
    "IdEvt": "Formulario_GetBdXLocalStore",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Get",
            "Value": "idPersonal"
        }
    }
};
ret["EVT_ST_BuscarByRelacion_LiqItemsImprimir"]={
    "id": "EVT_ST_BuscarByRelacion_LiqItemsImprimir",
    "ClassEvt": "ST_BuscarByRelacion_LiqItemsImprimir",
    "Clase": "SuperTabla",
    "IdObj": "ST_LiqItemsImprimir",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_LiqItemImprimir"
        }
    }
};
ret["EVT_IMP_Imprimir_LiquidacionManual"]={
    "id": "EVT_IMP_Imprimir_LiquidacionManual",
    "ClassEvt": "IMP_Imprimir_LiquidacionManual",
    "Clase": "Impresion",
    "IdObj": "IMP_LiquidacionManual",
    "IdEvt": "Impresion_Imprimir",
    "Param": {}
};
ret["EVT_VT_Cambiar_ListadoLiquidaciones"]={
    "id": "EVT_VT_Cambiar_ListadoLiquidaciones",
    "ClassEvt": "VT_Cambiar_ListadoLiquidaciones",
    "Clase": "Vistas",
    "IdObj": "VT_ListadoLiquidaciones",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_FRM_GetBdXLocalStore_ListaPersonal"]={
    "id": "EVT_FRM_GetBdXLocalStore_ListaPersonal",
    "ClassEvt": "FRM_GetBdXLocalStore_ListaPersonal",
    "Clase": "Formulario",
    "IdObj": "FRM_ListaPersonal",
    "IdEvt": "Formulario_GetBdXLocalStore",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Get",
            "Value": "idPersonal"
        }
    }
};
ret["EVT_ST_BuscarByRelacion_ListaLiquidaciones"]={
    "id": "EVT_ST_BuscarByRelacion_ListaLiquidaciones",
    "ClassEvt": "ST_BuscarByRelacion_ListaLiquidaciones",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaLiquidaciones",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_ListaLiquidaciones"
        }
    }
};
ret["EVT_Scripts_Iniciar_EliminarLiquidacion"]={
    "id": "EVT_Scripts_Iniciar_EliminarLiquidacion",
    "ClassEvt": "Scripts_Iniciar_EliminarLiquidacion",
    "Clase": "Scripts",
    "IdObj": "Scripts_EliminarLiquidacion",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_LocalS_SetTablaSelecto_idsueldointerno"]={
    "id": "EVT_LocalS_SetTablaSelecto_idsueldointerno",
    "ClassEvt": "LocalS_SetTablaSelecto_idsueldointerno",
    "Clase": "LocalStorange",
    "IdObj": "This",
    "IdEvt": "LocalStorange_SetTablaSelecto",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Set",
            "Value": "system-RespUltEvento-queryId"
        },
        "1": {
            "Key": "ValorTipo",
            "Function": "Get",
            "TipoObj": "Tabla",
            "IdObj": "TBL_ListaLiquidaciones",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_ST_CompletarFooter_LiqItemsImprimir"]={
    "id": "EVT_ST_CompletarFooter_LiqItemsImprimir",
    "ClassEvt": "ST_CompletarFooter_LiqItemsImprimir",
    "Clase": "SuperTabla",
    "IdObj": "ST_LiqItemsImprimir",
    "IdEvt": "SuperTabla_CompletarFooter",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_HablitarBotonesFooter"]={
    "id": "EVT_Scripts_Iniciar_HablitarBotonesFooter",
    "ClassEvt": "Scripts_Iniciar_HablitarBotonesFooter",
    "Clase": "Scripts",
    "IdObj": "Scripts_HablitarBotonesFooter",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_ST_CompletarFooter_LiquidacionItems"]={
    "id": "EVT_ST_CompletarFooter_LiquidacionItems",
    "ClassEvt": "ST_CompletarFooter_LiquidacionItems",
    "Clase": "SuperTabla",
    "IdObj": "ST_LiquidacionItems",
    "IdEvt": "SuperTabla_CompletarFooter",
    "Param": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
