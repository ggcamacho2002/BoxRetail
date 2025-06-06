function CfgDialog(id,ObjEvt){
		
	var ret={};

                
   ret["DG_Altaproveed"]={
     "id": "DG_Altaproveed",
     "Tipo":"Movible",
     "Titulo":"Alta proveed",
     "TipoObj": "Formulario",
     "EvtInicio":"Iniciar","IdObj": "FRM_Altaproveed",
     "HeaderCtrl": {},
     "Style": {
            "0": {
                "Prop": "Width",
                "Value": "50vw"
            },
            "1": {
                "Prop": "Height",
                "Value": "50vh"
            }
      },
     "CssClass": "",
     "Param": {},
     "CfgEventos": {}
    };
      
               
   ret["DG_Editarproveed"]={
     "id": "DG_Editarproveed",
     "Tipo":"Movible",
     "Titulo":"Editar proveed",
     "TipoObj": "Formulario",
     "EvtInicio":"Iniciar","IdObj": "FRM_Editarproveed",
     "HeaderCtrl": {},
     "Style": {
            "0": {
                "Prop": "Width",
                "Value": "50vw"
            },
            "1": {
                "Prop": "Height",
                "Value": "50vh"
            }
      },
     "CssClass": "",
     "Param": {},
     "CfgEventos": {}
    };
      
   ///UltimoRegistroDelCfg/// 
   
    
   
   
	if(id=="" || id==undefined){return ret;}
	else{if(ret[id])return ret[id];	else {}}

}	
