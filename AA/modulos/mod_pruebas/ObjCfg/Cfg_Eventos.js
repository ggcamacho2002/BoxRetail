function CfgEventos(id,Param){
var ret={};

            
    ret["EVT_DG_Iniciar_Altaproveed"]={
        "id": "EVT_DG_Iniciar_Altaproveed",
        "ClassEvt": "DG_Iniciar_Altaproveed",
        "Clase": "Dialog",
        "IdObj": "DG_Altaproveed",
        "IdEvt": "Dialog_Iniciar",
        "Param":{}
      };
        
                
    ret["EVT_FRM_InsertBd_This"]={
        "id": "EVT_FRM_InsertBd_This",
        "ClassEvt": "FRM_InsertBd_This",
        "Clase": "Formulario",
        "IdObj": "This",
        "IdEvt": "Formulario_InsertBd",
        "Param":{}
      };
        
                
    ret["EVT_DG_Iniciar_Editarproveed"]={
        "id": "EVT_DG_Iniciar_Editarproveed",
        "ClassEvt": "DG_Iniciar_Editarproveed",
        "Clase": "Dialog",
        "IdObj": "DG_Editarproveed",
        "IdEvt": "Dialog_Iniciar",
        "Param":{}
      };
        
                
    ret["EVT_FRM_UpdateBd_This"]={
        "id": "EVT_FRM_UpdateBd_This",
        "ClassEvt": "FRM_UpdateBd_This",
        "Clase": "Formulario",
        "IdObj": "This",
        "IdEvt": "Formulario_UpdateBd",
        "Param":{"0": {"Key": "id","Function": "This","ItemObj": "DSid"}}
      };
        
                
    ret["EVT_FRM_GetBdXidPadre_This"]={
        "id": "EVT_FRM_GetBdXidPadre_This",
        "ClassEvt": "FRM_GetBdXidPadre_This",
        "Clase": "Formulario",
        "IdObj": "This",
        "IdEvt": "Formulario_GetBdXidPadre",
        "Param":{}
      };
        
                
    ret["EVT_TBL_DelItem_This"]={
        "id": "EVT_TBL_DelItem_This",
        "ClassEvt": "TBL_DelItem_This",
        "Clase": "Tabla",
        "IdObj": "This",
        "IdEvt": "Tabla_DelItem",
        "Param":{}
      };
        
                
    ret["EVT_TBL_DelItemConfirm_This"]={
        "id": "EVT_TBL_DelItemConfirm_This",
        "ClassEvt": "TBL_DelItemConfirm_This",
        "Clase": "Tabla",
        "IdObj": "This",
        "IdEvt": "Tabla_DelItemConfirm",
        "Param":{}
      };
        
                
    ret["EVT_ST_Buscar_proveed"]={
        "id": "EVT_ST_Buscar_proveed",
        "ClassEvt": "ST_Buscar_proveed",
        "Clase": "SuperTabla",
        "IdObj": "ST_proveed",
        "IdEvt": "SuperTabla_Buscar",
        "Param":{}
      };
        
                
    ret["EVT_DG_PadreHide_This"]={
        "id": "EVT_DG_PadreHide_This",
        "ClassEvt": "DG_PadreHide_This",
        "Clase": "Dialog",
        "IdObj": "This",
        "IdEvt": "Dialog_PadreHide",
        "Param":{}
      };
        
    ///UltimoRegistroDelCfg/// 
   
    
   
    
   
    
   
    
   
    
   
    
   
    
   
    
   
   
   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
