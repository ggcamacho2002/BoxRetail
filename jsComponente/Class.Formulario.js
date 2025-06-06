class Formulario{

    constructor(id){

            this.id=id;
            this.Cfg=null;
            this.Out;
            this.Param;
            this.Box=null;
            this.ObjDOM==null;
            this.CfgEventos=null;
            this.IdObjPadre=null;
            this.TipoObjPadre=null;

            this.Data;
            
            this.DSid='';

       }
        
        CargarCfg(){
            
            if(this.Cfg==undefined || this.Cfg=='' || Object.keys(this.Cfg).length==0|| this.Cfg==null){
                this.Cfg=CfgFormulario(this.id,this.Param); 

                if(this.Cfg){
                    if(this.Box==null)if(this.Cfg.Box)this.Box=this.Cfg.Box;
                    if(this.CfgEventos==null)this.CfgEventos=this.Cfg.CfgEventos;
                    if(this.IdObjPadre==null)this.IdObjPadre=this.Cfg.IdObjPadre;
                    if(this.TipoObjPadre==null)this.TipoObjPadre=this.Cfg.TipoObjPadre;
                }                  
                
    
                if(this.ObjDOM==null)this.ObjDOM = document.querySelector('#' + this.id);
            }

        }



       async Iniciar(){

            if(!this.Cfg)this.CargarCfg()

            if(this.Cfg.Modo=='Update')this.Eventos('',"Cargar",{"DSid":this.DSid});

            if(!document.getElementById(this.id))await this.Construir();
        }  
        
        async Construir(){
    
                    var cl=new TempFormulario(this);
                    await cl.Render();
                    var Html=cl.Out;	
                    
                    if(this.Box){
                        if(this.Box!=''){
                                var clEvt=new ManejarDOM(this.id);
                                clEvt.Box=this.Box;
                                clEvt.Html=Html;
                               await clEvt.InsertarDOM();                         
                            }else this.Out=cl.Out;
                        }else this.Out=cl.Out;

        }	

      async Eventos(ObjEvt,idEvt,Param){	

            if(!this.ObjEvt)if(ObjEvt!='')this.ObjEvt=ObjEvt;
            this.CargarCfg();

           
             this.Param=CargarParam(Param);
             
             switch(idEvt){

                 case 'Formulario_Iniciar':                    
                        await this.Iniciar(); 
                 break;
                 case 'Formulario_LlenarBd':                    
                        var dsid=BuscarParametroEvento(this.ObjEvt,this.Param,'id');
                        await this.LlenarBd(dsid); 
                 break;
                 case 'Formulario_UpdateBd': 
                        var dsid=BuscarParametroEvento(this.ObjEvt,this.Param,'id');
                        await this.UpdateBd(dsid); 
                 break;
                 case 'Formulario_UpdateBdById': 
                    var aux=document.getElementById(this.id);
                    var dsid=aux.querySelector("[name='DSid']");
                    await this.UpdateBd(dsid.value); 
                 break;
                 case 'Formulario_UpdateBdByRelacion': 
                        await this.UpdateBdByRelacion(); 
                 break;
                 case 'Formulario_InsertBdByRelacion':                    
                       await this.InsertBdByRelacion(); 
                 break;
                 case 'Formulario_InsertBd':                    
                       await this.InsertBd(); 
                 break;
                 case 'Formulario_GetBdXidPadre':                    
                       await this.LlenarBdXidPadre(); 
                 break;
                 case 'Formulario_Reset':                    
                     document.getElementById(this.id).reset();
                 break;
                 case 'Formulario_CambiarModoRO':                    
                     this.CamabiarModoRO();
                 break;
                 case 'Formulario_GetBdXLocalStore':                    
                     await this.GetBdXLocalStore();
                 break;
                 case 'Formulario_GetBdXRelacion':                    
                     await this.GetBdXRelacion();
                 break;
                 case 'Formulario_GetBdXUltIdInsertado':                    
                     await this.GetBdXUltimoIdInsertado();
                 break;
                 case 'Formulario_GetDOMByRelation':                    
                          await this.GetDOMByRelation();
                 break;


         }
  
     };

     CamabiarModoRO(ObjEvt,Params){

            var inputs = this.ObjDOM.querySelectorAll('input');
    
            inputs.forEach(function(input) {

                input.setAttribute('readonly', true);
                input.classList.add('InputTextRO');
            }); 
            
            var select = this.ObjDOM.querySelectorAll('select');

            select.forEach(function(obj) {
                this.transformarSelectAInput(obj.id);
            });    
            
            var botones = this.ObjDOM.querySelector('button');

            if (Object.keys(botones).length>0){
                botones.forEach(function(elemento) {
                    elemento.classList.add('Hide');
                });
                
            }else{

                botones.classList.add('Hide');
            }

    }
    
    
    transformarSelectAInput(idsel) {
        var select = document.getElementById(idsel);
        var valorSeleccionado = select.options[select.selectedIndex].text; // Obtener el texto seleccionado
      
        // Crear un elemento input
        var input = document.createElement('input');
        input.type = 'text'; // Tipo texto
        input.readOnly = true; // Hacerlo solo lectura
        input.classList.add('Fld', 'InputTextRO');
        input.value = valorSeleccionado; // Establecer el valor seleccionado del select
      
        // Ocultar el select
        select.style.display = 'none';
      
        // Insertar el input justo después del select en el DOM
        select.parentNode.insertBefore(input, select.nextSibling);
      }

      async LlenarBdXidPadre(){  

            var frmPadre=document.getElementById('frm'+this.Cfg.IdObjPadre);
            var idSelecto=frmPadre.getAttribute('idselecto');
           await this.LlenarBd(idSelecto);

        };
      async GetBdXRelacion(){  


        var clRel=new Relaciones(this.Param[0].IdObj);
        clRel.Eventos(this.ObjEvt,"Relaciones-JoinFiltros",null);	

        var relFiltros={};
            relFiltros=clRel.Out; 

            var cl=new DataSources(this.Cfg.IdSource);
            cl.Metodo="DataSources_Buscar";
            cl.Filtros=relFiltros;
            await cl.Iniciar(); 

            this.Data=cl.Out.datos[0];
            this.LlenarDOM();

      };

       async GetBdXLocalStore(){  

           var cl=new LocalStorange();
               cl.Param=this.Param;
               cl.Get();

           await this.LlenarBd(cl.Out);

        };
       async GetBdXUltimoIdInsertado(){  

           var ultid=localStorage.getItem('system-RespUltEvento-queryId');
           await this.LlenarBd(ultid);

        };


       async LlenarBd(dsid){  
            
           //this.ObjDOM.attributes.keypadre.value=idds;
           var cl=new DataSources(this.Cfg.IdSource);
               cl.Metodo="DataSources_BuscarById";
               cl.idSrc=dsid;
               await cl.Iniciar();             

               this.Data=cl.Out.datos[0];

               await this.LlenarDOM();

        };

       async LlenarDOM(){  
            
              if(this.ObjDOM){
                    for (var key in this.Data) {
                       if(this.ObjDOM[key]) this.ObjDOM[key].value=this.Data[key];
                    }  
               }

        };


        async UpdateBdByRelacion(){       

            this.formu=this.ObjEvt.form.attributes['id'].value;
           
            var v = document.getElementById(this.formu).checkValidity();
            if(v==true){ 
              
                 var cl=new DataSources(this.Cfg.IdSource);
                 cl.SetFields=this.TraerSetCfgItems(this.Cfg.CfgItems);
                 cl.Metodo='DataSources_UpdateByRelacion';
                 cl.Param=this.Param;
                 await cl.Iniciar();

                 this.Out=cl.Out;
                              
             }else alert('Formulario Incompleto: Verifique los Datos Ingresados !!!!');
        
        };

        
        async UpdateBd(DSid){       

            this.formu=this.ObjEvt.form.attributes['id'].value;
           
            var v = document.getElementById(this.formu).checkValidity();
            if(v==true){ 
              
                 var cl=new DataSources(this.Cfg.IdSource);
                 cl.SetFields=this.TraerSetCfgItems(this.Cfg.CfgItems);
                 cl.Metodo='DataSources_UpdateById';
                 cl.Param=DSid;
                 await cl.Iniciar();

                 this.Out=cl.Out;
                              
             }else alert('Formulario Incompleto: Verifique los Datos Ingresados !!!!');
        
        };

        async GetDOMByRelation(){

            if(this.Param[0].Key=='idRelacion'){
                var idRelacion=this.Param[0].IdObj; 
                if(idRelacion){
    
                        var cl=new Relaciones(idRelacion);
                            cl.Eventos(this.ObjEvt,'Relaciones_JoinValoresHtml','');
                            cl.AgregarObjDestino(cl.Out);
                            var seter=cl.Out;
                            var DomObjPadre;
                            var DomObjtoSet;
                            
                            for(var NombreObj in seter){
    
                                DomObjPadre=document.getElementById(NombreObj);
    
                                for(var Prop in seter[NombreObj]){
                                    
                                    DomObjtoSet=DomObjPadre.querySelector("[name='"+Prop+"']")
                                    DomObjtoSet.value=seter[NombreObj][Prop];                            
                                }    
                            }
    
                    
                }else{
                     alert('Error: No se encuentra la relacion');
                     return 0;
                }
            }
    
         };


        ValidacionRORequerid(){
    
            var v = true;
                   var camposReadonly = document.querySelectorAll('#' + this.formu + ' input[readonly]');
            
                   camposReadonly.forEach(function(campo) {
                    if(campo.value.trim() === "" && campo.hasAttribute('required')) {
                        campo.style.backgroundColor = "#8b7272"; 
                        v = false;
                    } else {
                        campo.style.backgroundColor = "";
                    }
                });
                return v;

        } 


        async InsertBd(){       

            this.formu=this.ObjEvt.form.attributes['id'].value;
          
            var v = document.querySelector('#' + this.formu).checkValidity();
            
            if(v==true){
                v= this.ValidacionRORequerid();
            }


            if(v==true){ 
              
                 var cl=new DataSources(this.Cfg.IdSource);
                 cl.SetFields=this.TraerSetCfgItems(this.Cfg.CfgItems);
                 cl.Metodo='DataSources_InsertOne';
                 await cl.Iniciar();

                this.Out=cl.Out;           
             
             }else {
                 alert('Formulario Incompleto: Verifique los Datos Ingresados !!!!');
                 this.Out='ErrorStop';       
            }    
        
        };
        async InsertBdByRelacion(){       

            this.formu=this.ObjEvt.form.attributes['id'].value;
          
            var v = document.querySelector('#' + this.formu).checkValidity();
            
            if(v==true){
                v= this.ValidacionRORequerid();
            }


            if(v==true){ 
              
                 var cl=new DataSources(this.Cfg.IdSource);
                 cl.SetFields=this.TraerSetCfgItems(this.Cfg.CfgItems);
                 cl.Param=this.Param;
                 cl.Metodo='DataSources_InsertOneByRelacion';
                 await cl.Iniciar();

                this.Out=cl.Out;           
             
             }else {
                 alert('Formulario Incompleto: Verifique los Datos Ingresados !!!!');
                 this.Out='ErrorStop';       
            }    
        
        };


         TraerSetCfgItems(CfgItems) {

            var newObj = {};
            var valor ="";
            var prop='';
            newObj[0] ={};
        
             for (var key in CfgItems) {
                
               if(CfgItems[key].idSrc){     
                    if(CfgItems[key].idSrc!=null && CfgItems[key].idSrc!=undefined && CfgItems[key].idSrc !='Null'  && CfgItems[key].idSrc !=''){

                        prop=CfgItems[key].idSrc;
                        valor = this.ObjDOM[CfgItems[key].idSrc].value;                  
                        newObj[0][prop] = valor;

                    }
                }
             }


        
            return newObj; // Asegúrate de devolver el objeto resultante
        }


        

}

