function CfgEventos(id,Param){
var ret={};

ret["EVT_ConfirmarEliminarCliente"]={
    "id": "EVT_ConfirmarEliminarCliente",
    "ClassEvt": "TBL_DelItemConfirm_This",
    "Clase": "Tabla",
    "IdObj": "This",
    "IdEvt": "Tabla_DelItemConfirm",
    "Param": {}
};

ret["EVT_AbrirEditarCliente"]={
    "id": "EVT_AbrirEditarCliente",
    "ClassEvt": "DG_Iniciar_EditarCliente",
    "Clase": "Dialog",
    "IdObj": "DG_EditarCliente",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};

ret["EVT_AbrirAltaCliente"]={
    "id": "EVT_AbrirAltaCliente",
    "ClassEvt": "DG_Iniciar_AltaCliente",
    "Clase": "Dialog",
    "IdObj": "DG_AltaCliente",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
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

ret["EVT_ST_Buscar_ListaClientes"]={
    "id": "EVT_ST_Buscar_ListaClientes",
    "ClassEvt": "ST_Buscar_ListaClientes",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaClientes",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
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

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
