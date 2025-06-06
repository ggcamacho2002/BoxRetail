function CfgEventos(id,Param){
var ret={};

ret["EVT_DG_Iniciar_AltaProducto"]={
    "id": "EVT_DG_Iniciar_AltaProducto",
    "ClassEvt": "DG_Iniciar_AltaProducto",
    "Clase": "Dialog",
    "IdObj": "DG_AltaProducto",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_FRM_InsertBd_AltaProducto"]={
    "id": "EVT_FRM_InsertBd_AltaProducto",
    "ClassEvt": "FRM_InsertBd_AltaProducto",
    "Clase": "Formulario",
    "IdObj": "FRM_AltaProducto",
    "IdEvt": "Formulario_InsertBd",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CambiarNombre"]={
    "id": "EVT_Scripts_Iniciar_CambiarNombre",
    "ClassEvt": "Scripts_Iniciar_CambiarNombre",
    "Clase": "Scripts",
    "IdObj": "Scripts_CambiarNombre",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_FiltroPostGuardar"]={
    "id": "EVT_Scripts_Iniciar_FiltroPostGuardar",
    "ClassEvt": "Scripts_Iniciar_FiltroPostGuardar",
    "Clase": "Scripts",
    "IdObj": "Scripts_FiltroPostGuardar",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_ST_Buscar_ListaProducto"]={
    "id": "EVT_ST_Buscar_ListaProducto",
    "ClassEvt": "ST_Buscar_ListaProducto",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaProducto",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_FRM_UpdateBd_EditarProducto"]={
    "id": "EVT_FRM_UpdateBd_EditarProducto",
    "ClassEvt": "FRM_UpdateBd_EditarProducto",
    "Clase": "Formulario",
    "IdObj": "FRM_EditarProducto",
    "IdEvt": "Formulario_UpdateBd",
    "Param": {
        "0": {
            "Key": "id",
            "Function": "This",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_DG_Iniciar_EditarProducto"]={
    "id": "EVT_DG_Iniciar_EditarProducto",
    "ClassEvt": "DG_Iniciar_EditarProducto",
    "Clase": "Dialog",
    "IdObj": "DG_EditarProducto",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_FRM_GetBdXidPadre_EditarProducto"]={
    "id": "EVT_FRM_GetBdXidPadre_EditarProducto",
    "ClassEvt": "FRM_GetBdXidPadre_EditarProducto",
    "Clase": "Formulario",
    "IdObj": "FRM_EditarProducto",
    "IdEvt": "Formulario_GetBdXidPadre",
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
ret["EVT_TBL_DelItemConfirm_ListaProductos"]={
    "id": "EVT_TBL_DelItemConfirm_ListaProductos",
    "ClassEvt": "TBL_DelItemConfirm_ListaProductos",
    "Clase": "Tabla",
    "IdObj": "TBL_ListaProductos",
    "IdEvt": "Tabla_DelItemConfirm",
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
ret["EVT_VT_CambiarEstado_0-1"]={
    "id": "EVT_VT_CambiarEstado_0-1",
    "ClassEvt": "VT_CambiarEstado_0-1",
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
ret["EVT_TBL_UpdateOneField_ExtraProductos"]={
    "id": "EVT_TBL_UpdateOneField_ExtraProductos",
    "ClassEvt": "TBL_UpdateOneField_ExtraProductos",
    "Clase": "Tabla",
    "IdObj": "TBL_ExtraProductos",
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

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
