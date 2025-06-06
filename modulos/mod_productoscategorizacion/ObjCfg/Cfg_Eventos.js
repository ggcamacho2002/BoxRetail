function CfgEventos(id,Param){
var ret={};

ret["EVT_DG_Iniciar_AltaCategorizacion"]={
    "id": "EVT_DG_Iniciar_AltaCategorizacion",
    "ClassEvt": "DG_Iniciar_AltaCategorizacion",
    "Clase": "Dialog",
    "IdObj": "DG_AltaCategorizacion",
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
ret["EVT_TBL_DelItemConfirm_ListaProdCat"]={
    "id": "EVT_TBL_DelItemConfirm_ListaProdCat",
    "ClassEvt": "TBL_DelItemConfirm_ListaProdCat",
    "Clase": "Tabla",
    "IdObj": "TBL_ListaProdCat",
    "IdEvt": "Tabla_DelItemConfirm",
    "Param": {}
};
ret["EVT_ST_Buscar_ListaProdCat"]={
    "id": "EVT_ST_Buscar_ListaProdCat",
    "ClassEvt": "ST_Buscar_ListaProdCat",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaProdCat",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_VT_Cambiar_categorias"]={
    "id": "EVT_VT_Cambiar_categorias",
    "ClassEvt": "VT_Cambiar_categorias",
    "Clase": "Vistas",
    "IdObj": "VT_categorias",
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
ret["EVT_VT_Cambiar_subcateg"]={
    "id": "EVT_VT_Cambiar_subcateg",
    "ClassEvt": "VT_Cambiar_subcateg",
    "Clase": "Vistas",
    "IdObj": "VT_subcategoria",
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
ret["EVT_VT_Cambiar_tipos"]={
    "id": "EVT_VT_Cambiar_tipos",
    "ClassEvt": "VT_Cambiar_tipos",
    "Clase": "Vistas",
    "IdObj": "VT_tipos",
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
ret["EVT_VT_Cambiar_categorizacion"]={
    "id": "EVT_VT_Cambiar_categorizacion",
    "ClassEvt": "VT_Cambiar_categorizacion",
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
ret["EVT_DG_Iniciar_AltaCategoria"]={
    "id": "EVT_DG_Iniciar_AltaCategoria",
    "ClassEvt": "DG_Iniciar_AltaCategoria",
    "Clase": "Dialog",
    "IdObj": "DG_AltaCategoria",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditarCategoria"]={
    "id": "EVT_DG_Iniciar_EditarCategoria",
    "ClassEvt": "DG_Iniciar_EditarCategoria",
    "Clase": "Dialog",
    "IdObj": "DG_EditarCategoria",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaSubCateg"]={
    "id": "EVT_DG_Iniciar_AltaSubCateg",
    "ClassEvt": "DG_Iniciar_AltaSubCateg",
    "Clase": "Dialog",
    "IdObj": "DG_AltaSubCateg",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditarSubCateg"]={
    "id": "EVT_DG_Iniciar_EditarSubCateg",
    "ClassEvt": "DG_Iniciar_EditarSubCateg",
    "Clase": "Dialog",
    "IdObj": "DG_EditarSubCateg",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaTipo"]={
    "id": "EVT_DG_Iniciar_AltaTipo",
    "ClassEvt": "DG_Iniciar_AltaTipo",
    "Clase": "Dialog",
    "IdObj": "DG_AltaTipo",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditarTipo"]={
    "id": "EVT_DG_Iniciar_EditarTipo",
    "ClassEvt": "DG_Iniciar_EditarTipo",
    "Clase": "Dialog",
    "IdObj": "DG_EditarTipos",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_ST_Buscar_categoria"]={
    "id": "EVT_ST_Buscar_categoria",
    "ClassEvt": "ST_Buscar_categoria",
    "Clase": "SuperTabla",
    "IdObj": "ST_categorias",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_ST_Buscar_SubCategoria"]={
    "id": "EVT_ST_Buscar_SubCategoria",
    "ClassEvt": "ST_Buscar_SubCategoria",
    "Clase": "SuperTabla",
    "IdObj": "ST_subcategorias",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_ST_Buscar_Tipos"]={
    "id": "EVT_ST_Buscar_Tipos",
    "ClassEvt": "ST_Buscar_Tipos",
    "Clase": "SuperTabla",
    "IdObj": "ST_tipos",
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
ret["EVT_FRM_GetBdXidPadre_This"]={
    "id": "EVT_FRM_GetBdXidPadre_This",
    "ClassEvt": "FRM_GetBdXidPadre_This",
    "Clase": "Formulario",
    "IdObj": "This",
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
ret["EVT_FRM_UpdateBd_xDSid"]={
    "id": "EVT_FRM_UpdateBd_xDSid",
    "ClassEvt": "FRM_UpdateBd_xDSid",
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
ret["EVT_DG_Iniciar_EditarCategorizacion"]={
    "id": "EVT_DG_Iniciar_EditarCategorizacion",
    "ClassEvt": "DG_Iniciar_EditarCategorizacion",
    "Clase": "Dialog",
    "IdObj": "DG_EditarCategorizacion",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_VT_Cambiar_Sectores"]={
    "id": "EVT_VT_Cambiar_Sectores",
    "ClassEvt": "VT_Cambiar_Sectores",
    "Clase": "Vistas",
    "IdObj": "VT_Sectores",
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
ret["EVT_ST_Buscar_Sectores"]={
    "id": "EVT_ST_Buscar_Sectores",
    "ClassEvt": "ST_Buscar_Sectores",
    "Clase": "SuperTabla",
    "IdObj": "ST_Sectores",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaSector"]={
    "id": "EVT_DG_Iniciar_AltaSector",
    "ClassEvt": "DG_Iniciar_AltaSector",
    "Clase": "Dialog",
    "IdObj": "DG_AltaSector",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditarSector"]={
    "id": "EVT_DG_Iniciar_EditarSector",
    "ClassEvt": "DG_Iniciar_EditarSector",
    "Clase": "Dialog",
    "IdObj": "DG_EditarSector",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
