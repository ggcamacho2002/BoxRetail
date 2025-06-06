function CfgEventos(id,Param){
var ret={};

ret["EVT_VT_Cambiar_Proveedores"]={
    "id": "EVT_VT_Cambiar_Proveedores",
    "ClassEvt": "VT_Cambiar_Proveedores",
    "Clase": "Vistas",
    "IdObj": "VT_Proveedores",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_VT_Cambiar_ProvProductos"]={
    "id": "EVT_VT_Cambiar_ProvProductos",
    "ClassEvt": "VT_Cambiar_ProvProductos",
    "Clase": "Vistas",
    "IdObj": "VT_ProvProductos",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_ST_Buscar_ProveedorProducto"]={
    "id": "EVT_ST_Buscar_ProveedorProducto",
    "ClassEvt": "ST_Buscar_ProveedorProducto",
    "Clase": "SuperTabla",
    "IdObj": "ST_ProveedorProducto",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_ST_BuscarByRelacion_ProveedorProducto"]={
    "id": "EVT_ST_BuscarByRelacion_ProveedorProducto",
    "ClassEvt": "ST_BuscarByRelacion_ProveedorProducto",
    "Clase": "SuperTabla",
    "IdObj": "ST_ProveedorProducto",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_ProveedorProducto"
        }
    }
};
ret["EVT_DS_InsertOneByRelacion_ProveedorProducto"]={
    "id": "EVT_DS_InsertOneByRelacion_ProveedorProducto",
    "ClassEvt": "DS_InsertOneByRelacion_ProveedorProducto",
    "Clase": "DataSources",
    "IdObj": "DS_ProveedorProducto",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_AgregarProdProv"
        }
    }
};
ret["EVT_ST_Buscar_Productos"]={
    "id": "EVT_ST_Buscar_Productos",
    "ClassEvt": "ST_Buscar_Productos",
    "Clase": "SuperTabla",
    "IdObj": "ST_Productos",
    "IdEvt": "SuperTabla_Buscar",
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
ret["EVT_VT_Cambiar_CargaMasiva"]={
    "id": "EVT_VT_Cambiar_CargaMasiva",
    "ClassEvt": "VT_Cambiar_CargaMasiva",
    "Clase": "Vistas",
    "IdObj": "VT_CargaMasiva",
    "IdEvt": "Vistas_Cambiar",
    "Param": {}
};
ret["EVT_DS_SubirArchivo_ExcelProvProd"]={
    "id": "EVT_DS_SubirArchivo_ExcelProvProd",
    "ClassEvt": "DS_SubirArchivo_ExcelProvProd",
    "Clase": "DataSources",
    "IdObj": "DS_ExcelProvProducto",
    "IdEvt": "DataSources_SubirArchivo",
    "Param": {
        "0": {
            "Key": "FileRuta",
            "Function": "GetObj",
            "TipoObj": "Formulario",
            "IdObj": "FRM_ExcelProvProd",
            "ItemObj": "DSFile"
        },
        "1": {
            "Key": "ItemField",
            "Function": "GetObj",
            "Value": "0"
        }
    }
};
ret["EVT_ST_Buscar_ExcelProvProd"]={
    "id": "EVT_ST_Buscar_ExcelProvProd",
    "ClassEvt": "ST_Buscar_ExcelProvProd",
    "Clase": "SuperTabla",
    "IdObj": "ST_ExcelProvProd",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_AgregarProducto"]={
    "id": "EVT_Scripts_Iniciar_AgregarProducto",
    "ClassEvt": "Scripts_Iniciar_AgregarProducto",
    "Clase": "Scripts",
    "IdObj": "Scripts_AgregarProducto",
    "IdEvt": "Scripts_Iniciar",
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
ret["EVT_LocalS_SetTablaSelecto_idProv"]={
    "id": "EVT_LocalS_SetTablaSelecto_idProv",
    "ClassEvt": "LocalS_SetTablaSelecto_idProv",
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
            "IdObj": "TBL_Proveedores",
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
