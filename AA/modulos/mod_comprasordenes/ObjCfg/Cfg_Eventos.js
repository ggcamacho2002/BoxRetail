function CfgEventos(id,Param){
var ret={};

ret["EVT_DG_Iniciar_SeleccionProveedor"]={
    "id": "EVT_DG_Iniciar_SeleccionProveedor",
    "ClassEvt": "DG_Iniciar_SeleccionProveedor",
    "Clase": "Dialog",
    "IdObj": "DG_SeleccionProveedor",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_ST_Buscar_ComprasOrdenes"]={
    "id": "EVT_ST_Buscar_ComprasOrdenes",
    "ClassEvt": "ST_Buscar_ComprasOrdenes",
    "Clase": "SuperTabla",
    "IdObj": "ST_ComprasOrdenes",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Hide_SeleccionProveedor"]={
    "id": "EVT_DG_Hide_SeleccionProveedor",
    "ClassEvt": "DG_Hide_SeleccionProveedor",
    "Clase": "Dialog",
    "IdObj": "DG_SeleccionProveedor",
    "IdEvt": "Dialog_Hide",
    "Param": {}
};
ret["EVT_DS_InsertOneByRelacion_ComprasOrdenes"]={
    "id": "EVT_DS_InsertOneByRelacion_ComprasOrdenes",
    "ClassEvt": "DS_InsertOneByRelacion_ComprasOrdenes",
    "Clase": "DataSources",
    "IdObj": "DS_ComprasOrdenes",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_InsertOrdenCompra"
        }
    }
};
ret["EVT_VT_Cambiar_Pedido"]={
    "id": "EVT_VT_Cambiar_Pedido",
    "ClassEvt": "VT_Cambiar_Pedido",
    "Clase": "Vistas",
    "IdObj": "VT_Pedido",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CambioUnidad"]={
    "id": "EVT_Scripts_Iniciar_CambioUnidad",
    "ClassEvt": "Scripts_Iniciar_CambioUnidad",
    "Clase": "Scripts",
    "IdObj": "Scripts_CambioUnidad",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CambioPack"]={
    "id": "EVT_Scripts_Iniciar_CambioPack",
    "ClassEvt": "Scripts_Iniciar_CambioPack",
    "Clase": "Scripts",
    "IdObj": "Scripts_CambioPack",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CalcularTotalParcial"]={
    "id": "EVT_Scripts_Iniciar_CalcularTotalParcial",
    "ClassEvt": "Scripts_Iniciar_CalcularTotalParcial",
    "Clase": "Scripts",
    "IdObj": "Scripts_CalcularTotalParcial",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AgregarProductos"]={
    "id": "EVT_DG_Iniciar_AgregarProductos",
    "ClassEvt": "DG_Iniciar_AgregarProductos",
    "Clase": "Dialog",
    "IdObj": "DG_AgregarProductos",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DS_InsertOneByRelacion_ComprasOrdenesItems"]={
    "id": "EVT_DS_InsertOneByRelacion_ComprasOrdenesItems",
    "ClassEvt": "DS_InsertOneByRelacion_ComprasOrdenesItems",
    "Clase": "DataSources",
    "IdObj": "DS_ComprasOrdenesItems",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_InsertProductos"
        }
    }
};
ret["EVT_LocalS_SetTablaSelecto_OrdenCompra"]={
    "id": "EVT_LocalS_SetTablaSelecto_OrdenCompra",
    "ClassEvt": "LocalS_SetTablaSelecto_OrdenCompra",
    "Clase": "LocalStorange",
    "IdObj": "This",
    "IdEvt": "LocalStorange_SetTablaSelecto",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Set",
            "Value": "idordencompra"
        },
        "1": {
            "Key": "ValorTipo",
            "Function": "Get",
            "TipoObj": "Tabla",
            "IdObj": "TBL_ComprasOrdenes",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_FRM_GetBdXLocalStore_ComprasOrdenes"]={
    "id": "EVT_FRM_GetBdXLocalStore_ComprasOrdenes",
    "ClassEvt": "FRM_GetBdXLocalStore_ComprasOrdenes",
    "Clase": "Formulario",
    "IdObj": "FRM_ComprasOrdenes",
    "IdEvt": "Formulario_GetBdXLocalStore",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Get",
            "Value": "idordencompra"
        }
    }
};
ret["EVT_ST_BuscarByRelacion_ComprasOrdenesItems"]={
    "id": "EVT_ST_BuscarByRelacion_ComprasOrdenesItems",
    "ClassEvt": "ST_BuscarByRelacion_ComprasOrdenesItems",
    "Clase": "SuperTabla",
    "IdObj": "ST_ComprasOrdenesItems",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_BuscarOdenCompraItems"
        }
    }
};
ret["EVT_VT_Cambiar_ListadoOrdenCompra"]={
    "id": "EVT_VT_Cambiar_ListadoOrdenCompra",
    "ClassEvt": "VT_Cambiar_ListadoOrdenCompra",
    "Clase": "Vistas",
    "IdObj": "VT_ListadoOrdenCompra",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_TBL_UpdateOneField_CompraOrdenItems"]={
    "id": "EVT_TBL_UpdateOneField_CompraOrdenItems",
    "ClassEvt": "TBL_UpdateOneField_CompraOrdenItems",
    "Clase": "Tabla",
    "IdObj": "TBL_ComprasOrdenesItems",
    "IdEvt": "Tabla_UpdateOneField",
    "Param": {}
};
ret["EVT_TBL_DelItemConfirm_ComprasOrdenes"]={
    "id": "EVT_TBL_DelItemConfirm_ComprasOrdenes",
    "ClassEvt": "TBL_DelItemConfirm_ComprasOrdenes",
    "Clase": "Tabla",
    "IdObj": "TBL_ComprasOrdenes",
    "IdEvt": "Tabla_DelItemConfirm",
    "Param": {}
};
ret["EVT_DG_PadreHide_this"]={
    "id": "EVT_DG_PadreHide_this",
    "ClassEvt": "DG_PadreHide_this",
    "Clase": "Dialog",
    "IdObj": "This",
    "IdEvt": "Dialog_PadreHide",
    "Param": {}
};
ret["EVT_TBL_OcultarRegDuplicados_ListaProductos"]={
    "id": "EVT_TBL_OcultarRegDuplicados_ListaProductos",
    "ClassEvt": "TBL_OcultarRegDuplicados_ListaProductos",
    "Clase": "Tabla",
    "IdObj": "TBL_ListaProductos",
    "IdEvt": "Tabla_OcultarRegDuplicados",
    "Param": {
        "0": {
            "Key": "FldVerifPadre",
            "Function": "GetValue",
            "TipoObj": "Tabla",
            "IdObj": "",
            "ItemObj": ""
        },
        "1": {
            "Key": "FldVerifHijo",
            "Function": "GetValue",
            "TipoObj": "Tabla",
            "IdObj": "This",
            "ItemObj": ""
        }
    }
};
ret["EVT_DS_UpdateByRelacion_ComprasOrdenesEstado"]={
    "id": "EVT_DS_UpdateByRelacion_ComprasOrdenesEstado",
    "ClassEvt": "DS_UpdateByRelacion_ComprasOrdenesEstado",
    "Clase": "DataSources",
    "IdObj": "DS_ComprasOrdenes",
    "IdEvt": "DataSources_UpdateByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_CompraItemEstado"
        },
        "1": {
            "Key": "FldId",
            "Function": "GetObj",
            "TipoObj": "Tabla",
            "IdObj": "TBL_ComprasOrdenes",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_ST_Buscar_ComprasOrdenesEspera"]={
    "id": "EVT_ST_Buscar_ComprasOrdenesEspera",
    "ClassEvt": "ST_Buscar_ComprasOrdenesEspera",
    "Clase": "SuperTabla",
    "IdObj": "ST_ComprasOrdenesEspera",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_TBL_DelItemConfirm_ComprasOrdenesEspera"]={
    "id": "EVT_TBL_DelItemConfirm_ComprasOrdenesEspera",
    "ClassEvt": "TBL_DelItemConfirm_ComprasOrdenesEspera",
    "Clase": "Tabla",
    "IdObj": "TBL_ComprasOrdenesEspera",
    "IdEvt": "Tabla_DelItemConfirm",
    "Param": {}
};
ret["EVT_DS_UpdateByRelacion_COrdenesUpdateToPedido"]={
    "id": "EVT_DS_UpdateByRelacion_COrdenesUpdateToPedido",
    "ClassEvt": "DS_UpdateByRelacion_COrdenesUpdateToPedido",
    "Clase": "DataSources",
    "IdObj": "DS_ComprasOrdenesEspera",
    "IdEvt": "DataSources_UpdateByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_COrdenesUpdateToPedido"
        },
        "1": {
            "Key": "FldId",
            "Function": "GetObj",
            "TipoObj": "Tabla",
            "IdObj": "TBL_ComprasOrdenesEspera",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_IMP_Imprimir_Pedido"]={
    "id": "EVT_IMP_Imprimir_Pedido",
    "ClassEvt": "IMP_Imprimir_Pedido",
    "Clase": "Impresion",
    "IdObj": "IMP_Pedido",
    "IdEvt": "Impresion_Imprimir",
    "Param": {}
};
ret["EVT_DG_Iniciar_ImprimePedido"]={
    "id": "EVT_DG_Iniciar_ImprimePedido",
    "ClassEvt": "DG_Iniciar_ImprimePedido",
    "Clase": "Dialog",
    "IdObj": "DG_Pedido",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_ST_BuscarByRelacion_ImprimirPedido"]={
    "id": "EVT_ST_BuscarByRelacion_ImprimirPedido",
    "ClassEvt": "ST_BuscarByRelacion_ImprimirPedido",
    "Clase": "SuperTabla",
    "IdObj": "ST_ImprimirPedido",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_ItemsPedidoImprimir"
        }
    }
};
ret["EVT_FRM_GetBdXLocalStore_Imprimepedido"]={
    "id": "EVT_FRM_GetBdXLocalStore_Imprimepedido",
    "ClassEvt": "FRM_GetBdXLocalStore_Imprimepedido",
    "Clase": "Formulario",
    "IdObj": "FRM_ImprimirPedido",
    "IdEvt": "Formulario_GetBdXLocalStore",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Get",
            "Value": "idordencompra"
        }
    }
};
ret["EVT_LocalS_SetTablaSelecto_idOrdenCompra"]={
    "id": "EVT_LocalS_SetTablaSelecto_idOrdenCompra",
    "ClassEvt": "LocalS_SetTablaSelecto_idOrdenCompra",
    "Clase": "LocalStorange",
    "IdObj": "This",
    "IdEvt": "LocalStorange_SetTablaSelecto",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Set",
            "Value": "idordencompra"
        },
        "1": {
            "Key": "ValorTipo",
            "Function": "Get",
            "TipoObj": "Tabla",
            "IdObj": "TBL_ComprasOrdenesEspera",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_VT_Cambiar_ComprasOrdenControl"]={
    "id": "EVT_VT_Cambiar_ComprasOrdenControl",
    "ClassEvt": "VT_Cambiar_ComprasOrdenControl",
    "Clase": "Vistas",
    "IdObj": "VT_ComprasOrdenControl",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_TBL_UpdateOneField_COrdenesItemsControl"]={
    "id": "EVT_TBL_UpdateOneField_COrdenesItemsControl",
    "ClassEvt": "TBL_UpdateOneField_COrdenesItemsControl",
    "Clase": "Tabla",
    "IdObj": "TBL_COrdenesItemsControl",
    "IdEvt": "Tabla_UpdateOneField",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CambioPackControl"]={
    "id": "EVT_Scripts_Iniciar_CambioPackControl",
    "ClassEvt": "Scripts_Iniciar_CambioPackControl",
    "Clase": "Scripts",
    "IdObj": "Scripts_CambioPackControl",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CambioUnidadControl"]={
    "id": "EVT_Scripts_Iniciar_CambioUnidadControl",
    "ClassEvt": "Scripts_Iniciar_CambioUnidadControl",
    "Clase": "Scripts",
    "IdObj": "Scripts_CambioUnidadControl",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_FRM_GetBdXLocalStore_ComprasOrdenesControl"]={
    "id": "EVT_FRM_GetBdXLocalStore_ComprasOrdenesControl",
    "ClassEvt": "FRM_GetBdXLocalStore_ComprasOrdenesControl",
    "Clase": "Formulario",
    "IdObj": "FRM_ComprasOrdenesControl",
    "IdEvt": "Formulario_GetBdXLocalStore",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Get",
            "Value": "idordencompra"
        }
    }
};
ret["EVT_ST_BuscarByRelacion_COrdenesItemsControl"]={
    "id": "EVT_ST_BuscarByRelacion_COrdenesItemsControl",
    "ClassEvt": "ST_BuscarByRelacion_COrdenesItemsControl",
    "Clase": "SuperTabla",
    "IdObj": "ST_COrdenesItemsControl",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_BuscarCompraItemControl"
        }
    }
};
ret["EVT_TBL_SiguienteInput_This"]={
    "id": "EVT_TBL_SiguienteInput_This",
    "ClassEvt": "TBL_SiguienteInput_This",
    "Clase": "Tabla",
    "IdObj": "This",
    "IdEvt": "Tabla_SiguienteInput",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_DiferenciasMultiples"]={
    "id": "EVT_Scripts_Iniciar_DiferenciasMultiples",
    "ClassEvt": "Scripts_Iniciar_DiferenciasMultiples",
    "Clase": "Scripts",
    "IdObj": "Scripts_DiferenciasMultiples",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_DiferenciasOneFila"]={
    "id": "EVT_Scripts_Iniciar_DiferenciasOneFila",
    "ClassEvt": "Scripts_Iniciar_DiferenciasOneFila",
    "Clase": "Scripts",
    "IdObj": "Scripts_DiferenciasOneFila",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_DS_UpdateByRelacion_UpdateCOrdenEstadoControl"]={
    "id": "EVT_DS_UpdateByRelacion_UpdateCOrdenEstadoControl",
    "ClassEvt": "DS_UpdateByRelacion_UpdateCOrdenEstadoControl",
    "Clase": "DataSources",
    "IdObj": "DS_ComprasOrdenes",
    "IdEvt": "DataSources_UpdateByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_UpdateControl"
        },
        "1": {
            "Key": "FldId",
            "Function": "GetObj",
            "TipoObj": "Formulario",
            "IdObj": "FRM_ComprasOrdenesControl",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_VT_Cambiar_ItemsControlados"]={
    "id": "EVT_VT_Cambiar_ItemsControlados",
    "ClassEvt": "VT_Cambiar_ItemsControlados",
    "Clase": "Vistas",
    "IdObj": "VT_ItemsControlados",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_VT_Cambiar_ComprasControladas"]={
    "id": "EVT_VT_Cambiar_ComprasControladas",
    "ClassEvt": "VT_Cambiar_ComprasControladas",
    "Clase": "Vistas",
    "IdObj": "VT_ComprasControladas",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_VT_Cambiar_ComprasEnEspera"]={
    "id": "EVT_VT_Cambiar_ComprasEnEspera",
    "ClassEvt": "VT_Cambiar_ComprasEnEspera",
    "Clase": "Vistas",
    "IdObj": "VT_ComprasEnEspera",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_DS_UpdateByRelacion_UpdateEstadoEspera"]={
    "id": "EVT_DS_UpdateByRelacion_UpdateEstadoEspera",
    "ClassEvt": "DS_UpdateByRelacion_UpdateEstadoEspera",
    "Clase": "DataSources",
    "IdObj": "DS_ComprasOrdenesSinEstado",
    "IdEvt": "DataSources_UpdateByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_UpdateEspera"
        },
        "1": {
            "Key": "FldId",
            "Function": "GetObj",
            "TipoObj": "Tabla",
            "IdObj": "TBL_ComprasOrdenesControlados",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_ST_Buscar_ComprasControladas"]={
    "id": "EVT_ST_Buscar_ComprasControladas",
    "ClassEvt": "ST_Buscar_ComprasControladas",
    "Clase": "SuperTabla",
    "IdObj": "ST_ComprasControladas",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_LocalS_SetTablaSelecto_idOrdenCompra2"]={
    "id": "EVT_LocalS_SetTablaSelecto_idOrdenCompra2",
    "ClassEvt": "LocalS_SetTablaSelecto_idOrdenCompra2",
    "Clase": "LocalStorange",
    "IdObj": "This",
    "IdEvt": "LocalStorange_SetTablaSelecto",
    "Param": {
        "0": {
            "Key": "Clave",
            "Function": "Set",
            "Value": "idordencompra"
        },
        "1": {
            "Key": "ValorTipo",
            "Function": "Get",
            "TipoObj": "Tabla",
            "IdObj": "TBL_ComprasOrdenesControlados",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_TBL_UpdateBdFila_COrdenesItemsControl"]={
    "id": "EVT_TBL_UpdateBdFila_COrdenesItemsControl",
    "ClassEvt": "TBL_UpdateBdFila_COrdenesItemsControl",
    "Clase": "Tabla",
    "IdObj": "TBL_COrdenesItemsControl",
    "IdEvt": "Tabla_UpdateBdFila",
    "Param": {}
};
ret["EVT_IMP_Imprimir_ImprimirControlado"]={
    "id": "EVT_IMP_Imprimir_ImprimirControlado",
    "ClassEvt": "IMP_Imprimir_ImprimirControlado",
    "Clase": "Impresion",
    "IdObj": "IMP_Controlado",
    "IdEvt": "Impresion_Imprimir",
    "Param": {}
};
ret["EVT_DG_Iniciar_ImprimeControlado"]={
    "id": "EVT_DG_Iniciar_ImprimeControlado",
    "ClassEvt": "DG_Iniciar_ImprimeControlado",
    "Clase": "Dialog",
    "IdObj": "DG_ImprimeControlado",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_ST_BuscarByRelacion_COItemsImprimirControlado"]={
    "id": "EVT_ST_BuscarByRelacion_COItemsImprimirControlado",
    "ClassEvt": "ST_BuscarByRelacion_COItemsImprimirControlado",
    "Clase": "SuperTabla",
    "IdObj": "ST_COItemsImprimirControlado",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_COItemsImprimirControlado"
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
