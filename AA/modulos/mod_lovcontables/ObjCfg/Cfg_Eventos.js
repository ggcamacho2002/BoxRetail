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

ret["EVT_FRM_GetBdXidPadre_This"]={
    "id": "EVT_FRM_GetBdXidPadre_This",
    "ClassEvt": "FRM_GetBdXidPadre_This",
    "Clase": "Formulario",
    "IdObj": "This",
    "IdEvt": "Formulario_GetBdXidPadre",
    "Param": {}
};
ret["EVT_FRM_UpdateBd_This"]={
    "id": "EVT_FRM_UpdateBd_This",
    "ClassEvt": "FRM_UpdateBd_This",
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
ret["EVT_FRM_InsertBd_This"]={
    "id": "EVT_FRM_InsertBd_This",
    "ClassEvt": "FRM_InsertBd_This",
    "Clase": "Formulario",
    "IdObj": "This",
    "IdEvt": "Formulario_InsertBd",
    "Param": {}
};


ret["EVT_ST_Buscar_TasasImpuestos"]={
    "id": "EVT_ST_Buscar_TasasImpuestos",
    "ClassEvt": "ST_Buscar_TasasImpuestos",
    "Clase": "SuperTabla",
    "IdObj": "ST_TasasImpuestos",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Iniciar_EditarTasasImpuestos"]={
    "id": "EVT_DG_Iniciar_EditarTasasImpuestos",
    "ClassEvt": "DG_Iniciar_EditarTasasImpuestos",
    "Clase": "Dialog",
    "IdObj": "DG_EditarTasasImpuestos",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_AltaTasasImpuestos"]={
    "id": "EVT_DG_Iniciar_AltaTasasImpuestos",
    "ClassEvt": "DG_Iniciar_AltaTasasImpuestos",
    "Clase": "Dialog",
    "IdObj": "DG_AltaTasasImpuestos",
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
ret["EVT_VT_ManualFill_TasasImpuestos"]={
    "id": "EVT_VT_ManualFill_TasasImpuestos",
    "ClassEvt": "VT_ManualFill_TasasImpuestos",
    "Clase": "Vistas",
    "IdObj": "VT_Inicio",
    "IdEvt": "Vistas_ManualFill",
    "Param": {
        "0": {
            "Key": "SelectObjeto",
            "Function": "GetObj",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_TasasImpuestos"
        },
        "1": {
            "Key": "SelectGrid",
            "Function": "GetObj",
            "ItemObj": "GR_1x2-0-1"
        },
        "2": {
            "Key": "SelectEvtInicio",
            "Function": "SetValue",
            "Value": "Iniciar"
        }
    }
};


   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
