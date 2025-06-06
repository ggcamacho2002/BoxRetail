class SelectorValores{

    constructor(id){

       this.id=id;
       this.ObjEvt;
       this.Cfg=null;
       this.PickMapPadre=null;
       this.Param=null;
       this.ObjPadreCfg=null;
       this.Tipo=null;
       this.SubObjecto=null;
       this.DomValores=null;
       this.Out;

       this.CargarCfg();
    };



    CargarCfg(){
            
      if(this.Cfg==undefined || this.Cfg==null || Object.keys(this.Cfg).length==0)this.Cfg=CfgSelectorValores(this.id);       
      if(this.Param==null)if(this.Cfg.Param)this.Param=this.Cfg.Param;
      if(this.Tipo==null)if(this.Cfg.Tipo)this.Tipo=this.Cfg.Tipo;
      if(this.SubObjecto==null)if(this.Cfg.SubObjecto)this.SubObjecto=this.Cfg.SubObjecto;

          
    }



    Iniciar(){
         
          this.Eventos(this.ObjEvt,'Iniciar',this.Param)
    }


    Construir(){
     switch(this.Tipo){

          case 'DialogTabla':
              this.DialogTabla();
          break;

          case 'DialogForm':
              this.DialogForm();
          break;

     }

    }

    DialogForm(){

          var ret = {
            Titulo:'Seleccionar',
            Ancho:'600px',
            Alto:'150px'    
          };

          var cldialog=new Dialog("Dialog_"+this.id);  
          cldialog.Cfg= ret;
          cldialog.Iniciar(); 

          var clForm=new Formulario(this.SubObjecto.IdObj);  
          clForm.ObjEvt=this.ObjEvt;
          clForm.Param=this.SubObjecto.Param;
          clForm.CargarCfg();
          clForm.Iniciar();

          var ValueDep='';
          if(this.ObjPadreCfg.Relaciones)
              if(Object.keys(this.ObjPadreCfg.Relaciones).length>0)
                  ValueDep=this.Dependencia(this.ObjPadreCfg.Relaciones);

              if(ValueDep!='' && ValueDep!=undefined){

                if (clForm.CfgFiltros != null) {
                  if (Object.keys(clForm.CfgFiltros).length === 0) {
                    clForm.CfgFiltros[0] = ValueDep;
                  } else {
                    clForm.CfgFiltros[clForm.CfgFiltros.length] = ValueDep;
                  }
                }

              }

         cldialog.LlenarBody(clForm.Out)
 
          this.AddEvento(cldialog);
          cldialog.Show(); 


    }

    DialogTabla(){

          var ret = {
            Titulo:'Seleccionar',
            Ancho:'600px',
            Alto:'900px'       
          };

          var cldialog=new Dialog("RelDialog_"+this.id);  
          cldialog.Cfg= ret;
          cldialog.Iniciar(); 

          var clTbl=new Tabla(this.SubObjecto.IdObj);  
          clTbl.ObjEvt=this.ObjEvt;
          clTbl.Param=this.SubObjecto.Param;
          clTbl.CargarCfg();

          var ValueDep='';
          if(this.ObjPadreCfg.Relaciones)
              if(Object.keys(this.ObjPadreCfg.Relaciones).length>0)
                  ValueDep=this.Dependencia(this.ObjPadreCfg.Relaciones);

              if(ValueDep!='' && ValueDep!=undefined){

                if (clTbl.CfgFiltros != null) {
                  if (Object.keys(clTbl.CfgFiltros).length === 0) {
                    clTbl.CfgFiltros[0] = ValueDep;
                  } else {
                    clTbl.CfgFiltros[clTbl.CfgFiltros.length] = ValueDep;
                  }
                }

              }
              clTbl.IniciarYBuscar();  

          cldialog.LlenarBody(clTbl.Out); 

          clTbl.Eventos(this.ObjEvt,'Buscar','');           
          clTbl.TraerDom();
          this.DomValores = clTbl.Dom.querySelector("tbody");                 

          this.AddEvento(cldialog);
          cldialog.Show(); 


    }

    
    Dependencia(Relaciones){

      let idRel=this.Param.IdObj;
      let rel=Object.values(Relaciones).find(evt => evt.id === idRel);
      
      if(rel){
        if(rel.Dependence)
        if(Object.keys(rel.Dependence).length>0){
      
          let idObjPadre='';
          let idSrcRel='';
          let auxidSrcRel='';
          let ValorOrigen='';
      
          if(rel.Dependence.ObjPadre=='This')idObjPadre=this.ObjPadreCfg.id;
          else idObjPadre=rel.Dependence.ObjPadre;
      
          idObjPadre='frm'+idObjPadre;
      
          var item=document.getElementById(idObjPadre).getAttribute('itemselecto');
      
          auxidSrcRel = rel.Dependence.Field + "-" + item + "-Fld-" + idObjPadre;
          idSrcRel=document.getElementById(auxidSrcRel);
      
          if(rel.Dependence.Prop=="Value")ValorOrigen=Traer_Valor_Html(idSrcRel);
          
          let cfgFiltros={};
              cfgFiltros[idSrcRel.name]=ValorOrigen;

          return cfgFiltros;

      
        }
      }
          else{
               // let error = new Error('1');//no se especifico el id de objeto en la relacion!!!
               // new Log().Iniciar(error);
          }
          let numOfFilters = Object.keys(Relaciones).length;
          //cfgFiltros[numOfFilters] = Values;

    };

    Eventos(ObjEvt,idEvt,Param){	


       if(!this.ObjEvt)if(ObjEvt!='')this.ObjEvt=ObjEvt;
       this.Param=CargarParam(Param);
       
       switch(idEvt){
           
        case "Iniciar":
               this.Construir();
        break;
        default: break;  

       }

  };

    AddEvento(ObjContenedor){

            if (this.DomValores) {

                 var PickMaps=this.PickMapPadre;
          
                if(PickMaps){

                  var ObjEvt=this.ObjEvt;
                         
                          this.DomValores.addEventListener('click', function(event) {        
 
                                    var Formu=event.currentTarget.closest("form");
                                    var item=Formu.getAttribute('itemselecto');
                                    var splitFormPadre = Formu.getAttribute('idobjpadre').split("-");
                                    var itemPadre=splitFormPadre[1];
                                    var idFormPadre = splitFormPadre[splitFormPadre.length - 1];

                                    var idDestino='';                                    
                                    var idOrigen='';
                                    var keyRel='';
                                    var idSrcOrigen='';


                                    for (var key in PickMaps) {
                                      var pickMap = PickMaps[key];           
                                          
                                          keyRel=Object.keys(pickMap)[0];

                                          idDestino=keyRel + "-" + itemPadre + "-Fld-" + idFormPadre;
                                          let idSrcDestino=document.getElementById(idDestino);
                                          if(!idSrcDestino){idSrcDestino=ObjEvt}
                                                      

                                          if(pickMap[keyRel] !='ValueClear'){

                                                idOrigen = pickMap[keyRel] + "-" + item + "-Fld-" + Formu.id;
                                                idSrcOrigen=Formu.querySelector("#"+idOrigen);

                                                var ValorOrigen=Traer_Valor_Html(idSrcOrigen);
                                                 Set_Valor_Html(idSrcDestino,ValorOrigen);

                                                 idSrcDestino.dispatchEvent(new Event('change'));
                                          }
                                          else{

                                                    Set_Valor_Html(idSrcDestino,'');
                                                    idSrcDestino.dispatchEvent(new Event('change'));
                                            
                                          }
                                     }

                                    ObjContenedor.Hide();
                     
                            });
                }        
            }
            
    }


    
    
}

