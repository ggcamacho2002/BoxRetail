function CfgEventos(id,Param){
var ret={};

ret["EVT_DG_Iniciar_EditarProveedor"]={
    "id": "EVT_DG_Iniciar_EditarProveedor",
    "ClassEvt": "DG_Iniciar_EditarProveedor",
    "Clase": "Dialog",
    "IdObj": "DG_EditarProveedor",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaProveedor"]={
    "id": "EVT_DG_Iniciar_AltaProveedor",
    "ClassEvt": "DG_Iniciar_AltaProveedor",
    "Clase": "Dialog",
    "IdObj": "DG_AltaProveedor",
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
ret["EVT_FRM_InsertBd_this"]={
    "id": "EVT_FRM_InsertBd_this",
    "ClassEvt": "FRM_InsertBd_this",
    "Clase": "Formulario",
    "IdObj": "This",
    "IdEvt": "Formulario_InsertBd",
    "Param": {}
};
ret["EVT_FRM_UpdateBd_DsId"]={
    "id": "EVT_FRM_UpdateBd_DsId",
    "ClassEvt": "FRM_UpdateBd_DsId",
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
ret["EVT_FRM_GetBdXidPadre_EditarProveedor"]={
    "id": "EVT_FRM_GetBdXidPadre_EditarProveedor",
    "ClassEvt": "FRM_GetBdXidPadre_EditarProveedor",
    "Clase": "Formulario",
    "IdObj": "FRM_EditarProveedor",
    "IdEvt": "Formulario_GetBdXidPadre",
    "Param": {}
};
ret["EVT_FRM_GetBdXidPadre_Proveedor"]={
    "id": "EVT_FRM_GetBdXidPadre_Proveedor",
    "ClassEvt": "FRM_GetBdXidPadre_Proveedor",
    "Clase": "Formulario",
    "IdObj": "FRM_Proveedor",
    "IdEvt": "Formulario_GetBdXidPadre",
    "Param": {}
};
ret["EVT_ST_Buscar_ListaProveedores"]={
    "id": "EVT_ST_Buscar_ListaProveedores",
    "ClassEvt": "ST_Buscar_ListaProveedores",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaProveedores",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_ST_Buscar_ListaTasasImpuestos"]={
    "id": "EVT_ST_Buscar_ListaTasasImpuestos",
    "ClassEvt": "ST_Buscar_ListaTasasImpuestos",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaTasasImpuestos",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_ST_BuscarByRelacion_ListaProveedorImp"]={
    "id": "EVT_ST_BuscarByRelacion_ListaProveedorImp",
    "ClassEvt": "ST_BuscarByRelacion_ListaProveedorImp",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaProveedorImp",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_ProvImpuestos"
        }
    }
};
ret["EVT_DS_InsertOneByRelacion_ProveedorImp"]={
    "id": "EVT_DS_InsertOneByRelacion_ProveedorImp",
    "ClassEvt": "DS_InsertOneByRelacion_ProveedorImp",
    "Clase": "DataSources",
    "IdObj": "DS_ProveedorImp",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_TasaImpuesto"
        }
    }
};
ret["EVT_VT_Cambiar_Impuestos"]={
    "id": "EVT_VT_Cambiar_Impuestos",
    "ClassEvt": "VT_Cambiar_Impuestos",
    "Clase": "Vistas",
    "IdObj": "VT_Impuestos",
    "IdEvt": "Vistas_Cambiar",
    "Param": {
        "0": {
            "Key": "idVista"
        },
        "1": {
            "Key": "Param"
        }
    }
};
ret["EVT_VT_Cambiar_Inicio"]={
    "id": "EVT_VT_Cambiar_Inicio",
    "ClassEvt": "VT_Cambiar_Inicio",
    "Clase": "Vistas",
    "IdObj": "VT_Inicio",
    "IdEvt": "Vistas_Cambiar",
    "Param": {
        "0": {
            "Key": "idVista"
        },
        "1": {
            "Key": "Param"
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
ret["EVT_LocalS_SetTablaSelecto_idProveedor"]={
    "id": "EVT_LocalS_SetTablaSelecto_idProveedor",
    "ClassEvt": "LocalS_SetTablaSelecto_idProveedor",
    "Clase": "LocalStorange",
    "IdObj": "This",
    "IdEvt": "LocalStorange_SetTablaSelecto",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Set",
            "Value": "idProveedor"
        },
        "1": {
            "Key": "ValorTipo",
            "Function": "Get",
            "TipoObj": "Tabla",
            "IdObj": "TBL_ListaProveedores",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_FRM_GetBdXLocalStore_Proveedor"]={
    "id": "EVT_FRM_GetBdXLocalStore_Proveedor",
    "ClassEvt": "FRM_GetBdXLocalStore_Proveedor",
    "Clase": "Formulario",
    "IdObj": "FRM_Proveedor",
    "IdEvt": "Formulario_GetBdXLocalStore",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Get",
            "Value": "idProveedor"
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
