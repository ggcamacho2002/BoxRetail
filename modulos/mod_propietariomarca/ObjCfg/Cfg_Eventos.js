function CfgEventos(id,Param){
var ret={};

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
ret["EVT_DS_InsertOneByRelacion_PropMarca"]={
    "id": "EVT_DS_InsertOneByRelacion_PropMarca",
    "ClassEvt": "DS_InsertOneByRelacion_PropMarca",
    "Clase": "DataSources",
    "IdObj": "DS_PropietarioMarca",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_PropMarca"
        }
    }
};
ret["EVT_ST_Buscar_ListaMarcas"]={
    "id": "EVT_ST_Buscar_ListaMarcas",
    "ClassEvt": "ST_Buscar_ListaMarcas",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaMarcas",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_ST_BuscarByRelacion_PropMarca"]={
    "id": "EVT_ST_BuscarByRelacion_PropMarca",
    "ClassEvt": "ST_BuscarByRelacion_PropMarca",
    "Clase": "SuperTabla",
    "IdObj": "ST_PropMarcas",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_PropMarcaBuscar"
        }
    }
};
ret["EVT_TBL_DelItem_PropMarca"]={
    "id": "EVT_TBL_DelItem_PropMarca",
    "ClassEvt": "TBL_DelItem_PropMarca",
    "Clase": "Tabla",
    "IdObj": "TBL_PropietarioMarca",
    "IdEvt": "Tabla_DelItem",
    "Param": {}
};
ret["EVT_ST_Buscar_Propietario"]={
    "id": "EVT_ST_Buscar_Propietario",
    "ClassEvt": "ST_Buscar_Propietario",
    "Clase": "SuperTabla",
    "IdObj": "ST_Propietario",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_FRM_InsertBd_PropietarioAlta"]={
    "id": "EVT_FRM_InsertBd_PropietarioAlta",
    "ClassEvt": "FRM_InsertBd_PropietarioAlta",
    "Clase": "Formulario",
    "IdObj": "FRM_PropietarioAlta",
    "IdEvt": "Formulario_InsertBd",
    "Param": {}
};
ret["EVT_DG_Iniciar_PropietarioAlta"]={
    "id": "EVT_DG_Iniciar_PropietarioAlta",
    "ClassEvt": "DG_Iniciar_PropietarioAlta",
    "Clase": "Dialog",
    "IdObj": "DG_PropietarioAlta",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Hide_PropietarioAlta"]={
    "id": "EVT_DG_Hide_PropietarioAlta",
    "ClassEvt": "DG_Hide_PropietarioAlta",
    "Clase": "Dialog",
    "IdObj": "DG_PropietarioAlta",
    "IdEvt": "Dialog_Hide",
    "Param": {}
};
ret["EVT_TBL_DelItemConfirm_Propietario"]={
    "id": "EVT_TBL_DelItemConfirm_Propietario",
    "ClassEvt": "TBL_DelItemConfirm_Propietario",
    "Clase": "Tabla",
    "IdObj": "TBL_Propietario",
    "IdEvt": "Tabla_DelItemConfirm",
    "Param": {}
};
ret["EVT_FRM_GetBdXidPadre_PropietarioSelecto"]={
    "id": "EVT_FRM_GetBdXidPadre_PropietarioSelecto",
    "ClassEvt": "FRM_GetBdXidPadre_PropietarioSelecto",
    "Clase": "Formulario",
    "IdObj": "FRM_PropietarioSelecto",
    "IdEvt": "Formulario_GetBdXidPadre",
    "Param": {}
};
ret["EVT_Botonera_Iniciar_This"]={
    "id": "EVT_Botonera_Iniciar_This",
    "ClassEvt": "Botonera_Iniciar_This",
    "Clase": "Botonera",
    "IdObj": "Botonera_Principal",
    "IdEvt": "Botonera_Iniciar",
    "Param": {}
};
ret["EVT_VT_CambiarEstado_0-2"]={
    "id": "EVT_VT_CambiarEstado_0-2",
    "ClassEvt": "VT_CambiarEstado_0-2",
    "Clase": "Vistas",
    "IdObj": "VT_Inicio",
    "IdEvt": "Vistas_CambiarEstado",
    "Param": {
        "0": {
            "Key": "NroEstado",
            "Function": "Input",
            "Value": "2"
        }
    }
};
ret["EVT_ST_Buscar_ABMMarcas"]={
    "id": "EVT_ST_Buscar_ABMMarcas",
    "ClassEvt": "ST_Buscar_ABMMarcas",
    "Clase": "SuperTabla",
    "IdObj": "ST_ABMMarcas",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaABMMarcas"]={
    "id": "EVT_DG_Iniciar_AltaABMMarcas",
    "ClassEvt": "DG_Iniciar_AltaABMMarcas",
    "Clase": "Dialog",
    "IdObj": "DG_AltaABMMarcas",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditABMMarcas"]={
    "id": "EVT_DG_Iniciar_EditABMMarcas",
    "ClassEvt": "DG_Iniciar_EditABMMarcas",
    "Clase": "Dialog",
    "IdObj": "DG_EditABMMarcas",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_FRM_GetBdXidPadre_EditABMMarcas"]={
    "id": "EVT_FRM_GetBdXidPadre_EditABMMarcas",
    "ClassEvt": "FRM_GetBdXidPadre_EditABMMarcas",
    "Clase": "Formulario",
    "IdObj": "FRM_EditABMMarcas",
    "IdEvt": "Formulario_GetBdXidPadre",
    "Param": {}
};
ret["EVT_FRM_InsertBd_AltaABMMarcas"]={
    "id": "EVT_FRM_InsertBd_AltaABMMarcas",
    "ClassEvt": "FRM_InsertBd_AltaABMMarcas",
    "Clase": "Formulario",
    "IdObj": "FRM_AltaABMMarcas",
    "IdEvt": "Formulario_InsertBd",
    "Param": {}
};
ret["EVT_FRM_UpdateBd_EditABMMarcas"]={
    "id": "EVT_FRM_UpdateBd_EditABMMarcas",
    "ClassEvt": "FRM_UpdateBd_EditABMMarcas",
    "Clase": "Formulario",
    "IdObj": "FRM_EditABMMarcas",
    "IdEvt": "Formulario_UpdateBd",
    "Param": {
        "0": {
            "Key": "id",
            "Function": "This",
            "ItemObj": "DSid"
        }
    }
};
ret["EVT_DG_Hide_AltaABMMarcas"]={
    "id": "EVT_DG_Hide_AltaABMMarcas",
    "ClassEvt": "DG_Hide_AltaABMMarcas",
    "Clase": "Dialog",
    "IdObj": "DG_AltaABMMarcas",
    "IdEvt": "Dialog_Hide",
    "Param": {}
};
ret["EVT_DG_Hide_EditABMMarcas"]={
    "id": "EVT_DG_Hide_EditABMMarcas",
    "ClassEvt": "DG_Hide_EditABMMarcas",
    "Clase": "Dialog",
    "IdObj": "DG_EditABMMarcas",
    "IdEvt": "Dialog_Hide",
    "Param": {}
};
ret["EVT_TBL_DelItemConfirm_ABMMarcas"]={
    "id": "EVT_TBL_DelItemConfirm_ABMMarcas",
    "ClassEvt": "TBL_DelItemConfirm_ABMMarcas",
    "Clase": "Tabla",
    "IdObj": "TBL_ABMMarcas",
    "IdEvt": "Tabla_DelItemConfirm",
    "Param": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
