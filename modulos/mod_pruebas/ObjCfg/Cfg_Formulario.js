function CfgFormulario(id,Param){
var ret={};

            
   ret["FRM_Altaproveed"]={
     "id": "FRM_Altaproveed",
     "TipoObjPadre": "Tabla",
     "IdObjPadre": "TBL_proveed",
     "Tipo":"Vertical",
     "IdSource": "DS_proveed",
     "CfgItems": {
      "0": {
                "id": "DSid","Orden": "0","Tipo": "Fld","idSrc": "DSid","IdObj": "InputText","Requerido": "0","Label": "id","ClassEvt": "","Requerido": "0","CssClass": "","Style": {},"Param": {},"Valid":{}},"1": {
                "id": "DSRazonSocial","Orden": "1","Tipo": "Fld","idSrc": "DSRazonSocial","IdObj": "InputText","Requerido": "0","Label": "RazonSocial","ClassEvt": "","Requerido": "0","CssClass": "","Style": {},"Param": {},"Valid":{}},"2": {
                "id": "DSDireccion","Orden": "2","Tipo": "Fld","idSrc": "DSDireccion","IdObj": "InputText","Requerido": "0","Label": "Direccion","ClassEvt": "","Requerido": "0","CssClass": "","Style": {},"Param": {},"Valid":{}},"3": {
                "id": "DSTelefono","Orden": "3","Tipo": "Fld","idSrc": "DSTelefono","IdObj": "InputText","Requerido": "0","Label": "Telefono","ClassEvt": "","Requerido": "0","CssClass": "","Style": {},"Param": {},"Valid":{}},"4": {
                "id": "DSMail","Orden": "4","Tipo": "Fld","idSrc": "DSMail","IdObj": "InputText","Requerido": "0","Label": "Mail","ClassEvt": "","Requerido": "0","CssClass": "","Style": {},"Param": {},"Valid":{}},"5": {
                "id": "DSestado","Orden": "5","Tipo": "Fld","idSrc": "DSestado","IdObj": "InputText","Requerido": "0","Label": "estado","ClassEvt": "","Requerido": "0","CssClass": "","Style": {},"Param": {},"Valid":{}},
      },
     "Ctrl": {
      "0": {"id": "Guardar","Tipo": "Ctrl","IdObj": "BotonComun","Label": "Guardar","ClassEvt": "EvtGuardar","CssClass": "Fill_RojoPastel","Style": {},"Param": {},"Valid":{}}
      },
      "CfgEventos": {
        "0": {"ClassEvt": "EvtGuardar",
                                  "Hilo": {
                                        "0": {"Orden": "1","Trigger": "click","IdEvt": "EVT_FRM_InsertBd_This"},
                                        "1": {"Orden": "2","Trigger": "click","IdEvt": "EVT_ST_Buscar_proveed"},
                                        "2": {"Orden": "3","Trigger": "click","IdEvt": "EVT_DG_PadreHide_This"}
                                  }
                            }
      }
    };
      
               
   ret["FRM_Editarproveed"]={
     "id": "FRM_Editarproveed",
     "TipoObjPadre": "Tabla",
     "IdObjPadre": "TBL_proveed",
     "Tipo":"Vertical",
     "IdSource": "DS_proveed",
     "CfgItems": {
      "0": {
                "id": "DSid","Orden": "0","Tipo": "Fld","idSrc": "DSid","IdObj": "InputText","Requerido": "0","Label": "id","ClassEvt": "","Requerido": "0","CssClass": "","Style": {},"Param": {},"Valid":{}},"1": {
                "id": "DSRazonSocial","Orden": "1","Tipo": "Fld","idSrc": "DSRazonSocial","IdObj": "InputText","Requerido": "0","Label": "RazonSocial","ClassEvt": "","Requerido": "0","CssClass": "","Style": {},"Param": {},"Valid":{}},"2": {
                "id": "DSDireccion","Orden": "2","Tipo": "Fld","idSrc": "DSDireccion","IdObj": "InputText","Requerido": "0","Label": "Direccion","ClassEvt": "","Requerido": "0","CssClass": "","Style": {},"Param": {},"Valid":{}},"3": {
                "id": "DSTelefono","Orden": "3","Tipo": "Fld","idSrc": "DSTelefono","IdObj": "InputText","Requerido": "0","Label": "Telefono","ClassEvt": "","Requerido": "0","CssClass": "","Style": {},"Param": {},"Valid":{}},"4": {
                "id": "DSMail","Orden": "4","Tipo": "Fld","idSrc": "DSMail","IdObj": "InputText","Requerido": "0","Label": "Mail","ClassEvt": "","Requerido": "0","CssClass": "","Style": {},"Param": {},"Valid":{}},"5": {
                "id": "DSestado","Orden": "5","Tipo": "Fld","idSrc": "DSestado","IdObj": "InputText","Requerido": "0","Label": "estado","ClassEvt": "","Requerido": "0","CssClass": "","Style": {},"Param": {},"Valid":{}},
      },
     "Ctrl": {
      "0": {"id": "Guardar","Tipo": "Ctrl","IdObj": "BotonComun","Label": "Guardar","ClassEvt": "EvtGuardar","CssClass": "Fill_RojoPastel","Style": {},"Param": {},"Valid":{}}
      },
      "CfgEventos": {
        "0": {"ClassEvt": "EvtCargarDatos",
                                "Hilo": {
                                      "0": {"Orden": "1","Trigger": "LoadDOM","IdEvt": "EVT_FRM_GetBdXidPadre_This"}
                                }
                          },
                          "1": {"ClassEvt": "EvtGuardar",
                                "Hilo": {
                                      "0": {"Orden": "1","Trigger": "click","IdEvt": "EVT_FRM_UpdateBd_This"},
                                      "1": {"Orden": "2","Trigger": "click","IdEvt": "EVT_ST_Buscar_proveed"},
                                      "2": {"Orden": "3","Trigger": "click","IdEvt": "EVT_DG_PadreHide_This"}
                                }
                          }
      }
    };
      
   ///UltimoRegistroDelCfg/// 
   
    
   
           
if(id=="" || id==undefined){return ret;}
else{if(ret[id])return ret[id];	else {}}
}
