function CfgDialog(id,ObjEvt){
		
	var ret={};

                
   ret["DG_AltaSueldoIntConcepto"]={
     "id": "DG_AltaSueldoIntConcepto",
     "Tipo":"Movible",
     "Titulo":"Alta SueldoIntConcepto",
     "TipoObj": "Formulario",
     "EvtInicio":"Iniciar","IdObj": "FRM_AltaSueldoIntConcepto",
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
      
               
   ret["DG_EditarSueldoIntConcepto"]={
     "id": "DG_EditarSueldoIntConcepto",
     "Tipo":"Movible",
     "Titulo":"Editar SueldoIntConcepto",
     "TipoObj": "Formulario",
     "EvtInicio":"Iniciar","IdObj": "FRM_EditarSueldoIntConcepto",
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
