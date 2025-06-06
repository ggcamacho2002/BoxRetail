function CfgEventos(id,Param){
var ret={};

ret["EVT_TBL_DelItemConfirm_This"]={
    "id": "EVT_TBL_DelItemConfirm_This",
    "ClassEvt": "TBL_DelItemConfirm_This",
    "Clase": "Tabla",
    "IdObj": "This",
    "IdEvt": "Tabla_DelItemConfirm",
    "Param": {}
};
ret["EVT_ST_Buscar_PedidosControlado"]={
    "id": "EVT_ST_Buscar_PedidosControlado",
    "ClassEvt": "ST_Buscar_PedidosControlado",
    "Clase": "SuperTabla",
    "IdObj": "ST_PedidosControlado",
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
ret["EVT_VT_Cambiar_Recepcion"]={
    "id": "EVT_VT_Cambiar_Recepcion",
    "ClassEvt": "VT_Cambiar_Recepcion",
    "Clase": "Vistas",
    "IdObj": "VT_Recepcion",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaRecepcion"]={
    "id": "EVT_DG_Iniciar_AltaRecepcion",
    "ClassEvt": "DG_Iniciar_AltaRecepcion",
    "Clase": "Dialog",
    "IdObj": "DG_AltaRecepcion",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DS_InsertOneByRelacion_CompraRecepcion"]={
    "id": "EVT_DS_InsertOneByRelacion_CompraRecepcion",
    "ClassEvt": "DS_InsertOneByRelacion_CompraRecepcion",
    "Clase": "DataSources",
    "IdObj": "DS_CompraRecepcion",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_InsertRecepcion"
        }
    }
};
ret["EVT_DG_PadreHide_this"]={
    "id": "EVT_DG_PadreHide_this",
    "ClassEvt": "DG_PadreHide_this",
    "Clase": "Dialog",
    "IdObj": "This",
    "IdEvt": "Dialog_PadreHide",
    "Param": {}
};
ret["EVT_TBL_DelItemConfirm_CompraRecepcion"]={
    "id": "EVT_TBL_DelItemConfirm_CompraRecepcion",
    "ClassEvt": "TBL_DelItemConfirm_CompraRecepcion",
    "Clase": "Tabla",
    "IdObj": "TBL_CompraRecepcion",
    "IdEvt": "Tabla_DelItemConfirm",
    "Param": {}
};
ret["EVT_ST_Buscar_CompraRecepcion"]={
    "id": "EVT_ST_Buscar_CompraRecepcion",
    "ClassEvt": "ST_Buscar_CompraRecepcion",
    "Clase": "SuperTabla",
    "IdObj": "ST_CompraRecepcion",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_FRM_InsertBdByRelacion_InsertDocProveedor"]={
    "id": "EVT_FRM_InsertBdByRelacion_InsertDocProveedor",
    "ClassEvt": "FRM_InsertBdByRelacion_InsertDocProveedor",
    "Clase": "Formulario",
    "IdObj": "FRM_Recepcion",
    "IdEvt": "Formulario_InsertBdByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_InsertRecepcion"
        }
    }
};
ret["EVT_VT_Cambiar_RecepcionItems"]={
    "id": "EVT_VT_Cambiar_RecepcionItems",
    "ClassEvt": "VT_Cambiar_RecepcionItems",
    "Clase": "Vistas",
    "IdObj": "VT_RecepcionItems",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_LocalS_SetTablaSelecto_Comprobante"]={
    "id": "EVT_LocalS_SetTablaSelecto_Comprobante",
    "ClassEvt": "LocalS_SetTablaSelecto_Comprobante",
    "Clase": "LocalStorange",
    "IdObj": "This",
    "IdEvt": "LocalStorange_SetTablaSelecto",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Set",
            "Value": "idcomprobante"
        },
        "1": {
            "Key": "ValorTipo",
            "Function": "Get",
            "TipoObj": "Tabla",
            "IdObj": "TBL_CompraRecepcion",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_FRM_GetBdXLocalStore_ComprobanteSelecto"]={
    "id": "EVT_FRM_GetBdXLocalStore_ComprobanteSelecto",
    "ClassEvt": "FRM_GetBdXLocalStore_ComprobanteSelecto",
    "Clase": "Formulario",
    "IdObj": "FRM_ComprobanteSelecto",
    "IdEvt": "Formulario_GetBdXLocalStore",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Get",
            "Value": "idcomprobante"
        }
    }
};
ret["EVT_TBL_UpdateOneField_DocProvItems"]={
    "id": "EVT_TBL_UpdateOneField_DocProvItems",
    "ClassEvt": "TBL_UpdateOneField_DocProvItems",
    "Clase": "Tabla",
    "IdObj": "TBL_DocProvItems",
    "IdEvt": "Tabla_UpdateOneField",
    "Param": {}
};
ret["EVT_TBL_SiguienteInput_This"]={
    "id": "EVT_TBL_SiguienteInput_This",
    "ClassEvt": "TBL_SiguienteInput_This",
    "Clase": "Tabla",
    "IdObj": "This",
    "IdEvt": "Tabla_SiguienteInput",
    "Param": {}
};
ret["EVT_ST_BuscarByRelacion_DocProvItems"]={
    "id": "EVT_ST_BuscarByRelacion_DocProvItems",
    "ClassEvt": "ST_BuscarByRelacion_DocProvItems",
    "Clase": "SuperTabla",
    "IdObj": "ST_DocProvItems",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_ComprobanteSelItems"
        }
    }
};
ret["EVT_Scripts_Iniciar_CalcSubTotal"]={
    "id": "EVT_Scripts_Iniciar_CalcSubTotal",
    "ClassEvt": "Scripts_Iniciar_CalcSubTotal",
    "Clase": "Scripts",
    "IdObj": "Scripts_CalcularSubtotal",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_TBL_UpdateBdFila_This"]={
    "id": "EVT_TBL_UpdateBdFila_This",
    "ClassEvt": "TBL_UpdateBdFila_This",
    "Clase": "Tabla",
    "IdObj": "This",
    "IdEvt": "Tabla_UpdateBdFila",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CargarColumnaMasiva"]={
    "id": "EVT_Scripts_Iniciar_CargarColumnaMasiva",
    "ClassEvt": "Scripts_Iniciar_CargarColumnaMasiva",
    "Clase": "Scripts",
    "IdObj": "Scripts_CargarColumnaMasiva",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CalcularTotal"]={
    "id": "EVT_Scripts_Iniciar_CalcularTotal",
    "ClassEvt": "Scripts_Iniciar_CalcularTotal",
    "Clase": "Scripts",
    "IdObj": "Scripts_CalcularTotal",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_TBL_UpdateBdAllFila_DocProvItems"]={
    "id": "EVT_TBL_UpdateBdAllFila_DocProvItems",
    "ClassEvt": "TBL_UpdateBdAllFila_DocProvItems",
    "Clase": "Tabla",
    "IdObj": "TBL_DocProvItems",
    "IdEvt": "Tabla_UpdateBdAllFila",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditRecepcion"]={
    "id": "EVT_DG_Iniciar_EditRecepcion",
    "ClassEvt": "DG_Iniciar_EditRecepcion",
    "Clase": "Dialog",
    "IdObj": "DG_EditRecepcion",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_FRM_GetBdXidPadre_EditRecepcion"]={
    "id": "EVT_FRM_GetBdXidPadre_EditRecepcion",
    "ClassEvt": "FRM_GetBdXidPadre_EditRecepcion",
    "Clase": "Formulario",
    "IdObj": "FRM_EditRecepcion",
    "IdEvt": "Formulario_GetBdXidPadre",
    "Param": {}
};
ret["EVT_FRM_UpdateBd_this"]={
    "id": "EVT_FRM_UpdateBd_this",
    "ClassEvt": "FRM_UpdateBd_this",
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
ret["EVT_VT_Cambiar_DocsGuardados"]={
    "id": "EVT_VT_Cambiar_DocsGuardados",
    "ClassEvt": "VT_Cambiar_DocsGuardados",
    "Clase": "Vistas",
    "IdObj": "VT_Guardados",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_DS_UpdateByRelacion_EstadoARecepcion"]={
    "id": "EVT_DS_UpdateByRelacion_EstadoARecepcion",
    "ClassEvt": "DS_UpdateByRelacion_EstadoARecepcion",
    "Clase": "DataSources",
    "IdObj": "DS_DocsGuardados",
    "IdEvt": "DataSources_UpdateByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_CambiarEstadoArecepcion"
        },
        "1": {
            "Key": "FldId",
            "Function": "GetObj",
            "TipoObj": "Tabla",
            "IdObj": "TBL_DocsGuardados",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_ST_Buscar_DocsGuardados"]={
    "id": "EVT_ST_Buscar_DocsGuardados",
    "ClassEvt": "ST_Buscar_DocsGuardados",
    "Clase": "SuperTabla",
    "IdObj": "ST_DocsGuardados",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
