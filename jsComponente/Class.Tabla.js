class Tabla{

constructor(id){
    
    this.id=id;
    this.Out='';
    this.Cfg={};

    this.Box=null;
    this.Modo=null
    this.IdObjPadre=null
    
    this.IdSource=null
    this.Data=null
    this.Style=null
    this.CssClass=null

    this.DataSource=null

    this.CfgItems=null
    this.CfgFiltros={};
    this.CfgOrden={};
    this.CfgParam={};
    this.CfgEventos=null
    

    this.Dom=null;
    this.AllEventos;
    this.Data=null;
    this.Columns;
    this.DOMidSrcs;    
    
    this.ObjEvt;
    this.Param;
    this.ColsDragg=1;

    

  };

  
CargarCfg(){

  if(this.Cfg==undefined || this.Cfg=='' || Object.keys(this.Cfg).length==0)this.Cfg=CfgTabla(this.id);         
  if(this.Cfg){
    if(this.Box==null)if(this.Cfg.Box!=null)this.Box=this.Cfg.Box;
    if(this.Modo==null)this.Modo=this.Cfg.Modo;
    if(this.IdObjPadre==null)this.IdObjPadre=this.Cfg.IdObjPadre;
    if(this.CfgEventos==null)this.CfgEventos=this.Cfg.CfgEventos;
    if(this.CfgFiltros==null)this.CfgFiltros=this.Cfg.CfgFiltros;
    if(this.CfgItems==null)this.CfgItems=Object.assign({}, this.Cfg.CfgItems, this.Cfg.Ctrl);
    if(this.IdSource==null)this.IdSource=this.Cfg.IdSource;
    if(this.CssClass==null)this.CssClass=this.Cfg.CssClass;
    if(this.Style==null)if(this.Cfg.Style)this.Style=`style='${ToolsTraerStyle(this.Cfg.Style)}'`;
    if(this.Data==null) if(this.DataSource==null) if(this.IdSource!=null)this.DataSource=CfgDataSources(this.IdSource);
   
  
    this.AllEventos=this.Eventos;


  }  


}  

async Iniciar(){  

  await this.Eventos(this.ObjEvt,'Tabla_Iniciar',this.Param);  
  
}
IniciarYBuscar(){  

  this.Eventos(this.ObjEvt,'Tabla_Iniciar',this.Param);  
  this.Eventos(this.ObjEvt,'Tabla_Buscar',this.Param);  
  
}

async Construir(){ 

  var cl=new TempTabla(this);
      cl.Cfg=this.Cfg;
      await cl.Render();	
    var Html=cl.Out;
    
    if(this.Box){
      if(this.Box!=''){			

            document.getElementById(this.Box).innerHTML = Html;       
            this.AddEventoInfoForm();
            
        }else this.Out=Html;
      }else this.Out=Html;

}

async Eventos(ObjEvt,IdEvt,Param) {
  
  if(ObjEvt)this.ObjEvt=ObjEvt;
  if(Param)this.Param=Param;

  this.CargarCfg();
  
  switch(IdEvt) {

       case "Tabla_Iniciar":
                  if(!document.getElementById(this.id))await this.Construir();
                  //this.Busqueda();
       break;
       case "Tabla_Buscar":
                  await this.Busqueda();
                  await this.LlenarBody();
       break;
       case "Tabla_DelItemConfirm":
                  await this.DeleteRegistroConfirm();
          break;
       case "Tabla_DelItem":
                  await this.DeleteRegistro();
       break;
       case "Tabla_UpdateOneField":
                  await this.UpdateOneField();
       break;
       case "Tabla_UpdateBdFila":
                  await this.UpdateBdFila();
       break;
       case "Tabla_UpdateBdAllFila":
                  await this.UpdateBdAllFilas();
       break;
       case "Tabla_SiguienteInput":
                  this.SiguienteInput();
       break;
       case "Tabla_SumarizarColumna":
                  this.SumarizarColumna();
       break;
       case "Tabla_UpdateMultiplesIds":
                  await this.UpdateMultiplesIds();
       break;

              
  }
}

TraerDom(){
  this.Dom= document.getElementById(this.id);
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////OTRAS OPERACIONES//////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

AddEventoInfoForm(){

      const tabla = document.getElementById(this.id);

      tabla.addEventListener('click', (event) => {
        let targetElement = event.target;  // empieza desde el elemento objetivo
        const valorDSid = targetElement.getAttribute('DSid');
        const valor = targetElement.id.split('-')[1];
        setFormIdSelecto(this.id, valorDSid);              
        setFormItemSelecto(this.id, valor);
      }, { capture: true });
 }
 SumarizarColumna(){

        const tabla = document.getElementById(this.id);
        var selector = `[name="${this.Param[0].ItemObj}"]`;
        var elementos = tabla.querySelectorAll(selector);

          let sumaTotal = 0;
          
          elementos.forEach((elemento) => {
            sumaTotal += parseFloat(elemento.textContent || elemento.value);
          });

          


          var elem=document.getElementById(this.Param[1].IdObj);
              selector = `[name="${this.Param[1].ItemObj}"]`;
              elementos = elem.querySelectorAll(selector);

              elementos[0].value=sumaTotal.toFixed(2);

 }


NuevoItemDOM(Data){
   
    const sinResultados = document.querySelector('#STDataSourcesCfgFiltros-TBL tbody .SINRESULT');
    if (sinResultados !== null) {
      // Eliminar el elemento tr que contiene el td con la clase SINRESULT
      sinResultados.parentNode.parentNode.remove();
    }

   this.ContarItems();
   var item=this.Out;

    var tt=new TempTabla(this);
    tt.Cfg=this.Cfg;
    tt.TrearItemsBody(Data,item);
    
        const elementoPadre = document.querySelector('#'+this.id+' tbody')
              elementoPadre.insertAdjacentHTML('beforeend', tt.Out);


}

/////////////////////////////////////////////////////////////////////////////////////////////////
async LlenarBody(){


        if(this.Data!=null && Object.keys(this.Data).length>0){ 
          
          let HtmlBody=new TempTabla(this)
              await HtmlBody.TraerBody();

          document.getElementById(this.id+'-tbody').innerHTML=HtmlBody.Out;
          await this.EvtPostLoadDOM();
      } 
}

//hay que sacarlooo o modificarlo
//////////////////////////////////////////////////////////////////////////////////////////////////

async TraerDataTabla(){
  
  if(this.IdSource){

      var cl=new DataSources(this.IdSource);
      cl.ObjEvt=this.ObjEvt;
      cl.Columns=this.CfgItems;
      cl.CfgFiltros=this.CfgFiltros;
      cl.CfgOrden=this.CfgOrden;
      cl.CfgParam=this.CfgParam;
      cl.Orden=this.Orden;
      cl.Param=this.Param;
     await cl.Iniciar();

      if(cl.Out)if(cl.Out.datos)this.Data=cl.Out.datos;
  }   

}

async Busqueda(){  

  if(this.Data==null){             
         
         if(this.IdSource!=null && this.IdSource!=null && this.IdSource!='undefined')
              await this.TraerDataTabla();	
         else alert('Error Class Tabla : No se especifico el DataSource o No se cargaron Datos !!!!!!!');
  }  

}

////////////////////////////////////Mutaciones/////////////////////////////////////////////////////////////////////////////////////
async Mutacion(Metodo){

       var cl=new DataSources(this.IdSource);
       cl.ObjEvt=this.ObjEvt;
       cl.Metodo=Metodo;
       cl.Filtros=this.CfgFiltros;
      await cl.Iniciar();

}

async UpdateBdFila(){

  
  var Fila=this.ObjEvt.closest('tr');


  var result=checkValidityItems(this.ObjEvt);
  if(result){      

      var valorDSid = this.ObjEvt.closest('tr').getAttribute('DSid');
      var cl=new DataSources(this.IdSource);
      cl.ObjEvt=this.ObjEvt;
      cl.Metodo="DataSources_UpdateById";
      cl.Filtros={0:{"idSrc":"DSid","Valor":valorDSid,"Conex":"AND","Tipo":"Igual"}};

      cl.SetFields={};
      cl.SetFields[0]=DOMDatosTraerOneFilaSetFields(Fila,this.CfgItems);

      await cl.Iniciar();
      
      this.Out=cl.Out;

  } else this.Out='ErrorValidacion';

}

async UpdateBdAllFilas(){

   var result=checkValidityItems(this.ObjEvt);
  if(result){      


     this.Param={};
  const tableTbodyTr = document.querySelectorAll(`#${this.id} tbody tr`);
      var i=0;
        tableTbodyTr.forEach(tableRow => {

          this.Param[i]=DOMDatosTraerOneFilaSetFields(tableRow,this.CfgItems);
          i++;
      });


      await this.UpdateMultiplesIds();
      
     
  } else this.Out='ErrorValidacion';

}


async UpdateOneField(){

  this.DOMidSrcs=this.ObjEvt.closest('tr').getElementsByTagName("input");


  var result=checkValidityItems(this.ObjEvt);
  if(result){      

      var valorDSid = this.ObjEvt.closest('tr').getAttribute('DSid');
      var cl=new DataSources(this.IdSource);
      cl.ObjEvt=this.ObjEvt;
      cl.Metodo="DataSources_UpdateById";
      cl.Filtros={0:{"idSrc":"DSid","Valor":valorDSid,"Conex":"AND","Tipo":"Igual"}};


      cl.SetFields=DOMDatosTraerOneSetField(this.ObjEvt,this.CfgItems);

      await cl.Iniciar();
      
      this.Out=cl.Out;

  } else this.Out='ErrorValidacion';

}
async UpdateMultiplesIds(){


      var cl=new DataSources(this.IdSource);
      cl.ObjEvt=this.ObjEvt;
      cl.Metodo="DataSources_UpdateMultiplesIds";
      cl.SetFields=this.Param;

      await cl.Iniciar();
      
      this.Out=cl.Out;
}

/*
InsertRegistroSinValidar(){    

        var cl=this.Mutacion();
            cl.SetCfgItems=DOMDatosTraerAllFldTrPadre(this.ObjEvt);
            cl.InsertOne();
            this.Out=cl.Out;   
}
InsertRegistro(){    
    var cl=this.Mutacion();
    var result=checkValidityItems(this.DOMidSrcs);
    if(result){        
        
            cl.SetCfgItems=DOMDatosTraerAllFldTrPadre(this.ObjEvt);
            cl.InsertOne();
            this.Out=cl.Out;
    } else this.Out='ErrorValidacion';
}
UpdateRegistroById(){
        var cl=this.Mutacion();
        var result=checkValidityItems(this.DOMidSrcs);
        if(result){                  
            cl.SetFields=DOMDatosTraerSetFields(this.DOMidSrcs,this.CfgItems);
            cl.UpdateById(this.DOMidSrcs['DSid'].value);
            this.Out=cl.Out;
        } else this.Out='ErrorValidacion';
   
}*/

async DeleteRegistroConfirm(){        
    if(confirm('Esta seguro que desea eliminar este registro !!!!'))
    await this.DeleteRegistro();
}


async DeleteRegistro(){
  
  //this.DOMidSrcs=this.ObjEvt.closest('tr').getElementsByTagName("input");
    const valorDSid = this.ObjEvt.closest('tr').getAttribute('DSid');
    var cl=new DataSources(this.IdSource);
    cl.ObjEvt=this.ObjEvt;
    cl.Metodo="DataSources_DeleteById";
    cl.Filtros={
                  0:{
                      "idSrc":"DSid",
                      "Valor":valorDSid,
                      "Conex":"AND",
                      "Tipo":"Igual"
                  }
    };
    await cl.Iniciar();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

ContarItems() {

    const filas = document.querySelectorAll(`#${this.id} tbody tr`);
    const filasSinResultado = Array.from(filas).filter(fila => !fila.querySelector('.SINRESULT'));
    this.Out = filasSinResultado.length;

}

 SiguienteInput(){
    
      var idSrc=this.ObjEvt.id.split('-')[0];
      var item=parseInt(this.ObjEvt.id.split('-')[1]);
      var newitem=item+1;
      var tipo=this.ObjEvt.id.split('-')[2];
      var frm=this.ObjEvt.id.split('-')[3];
      var newid=idSrc+'-'+newitem+'-'+tipo+'-'+frm;
      var newObj=document.getElementById(newid);
     if(newObj) newObj.focus();
     if(newObj) newObj.select();

}

async EvtPostLoadDOM(){

    const tblDom=document.getElementById(this.id);
  const tableTbodyTr = tblDom.querySelectorAll(`tbody tr`);

        tableTbodyTr.forEach(tableRow => {
        tableRow.addEventListener("click", function(e) {
          UpNroItem(this, e.currentTarget.id.split("-")[1]);
        });

      });
    
  TableColumnsDraggable(this.id);


    var cl = new Eventos();
    await cl.ManejarEventoLoadDom(tblDom);


/*
  var cl=new Eventos(); 
      cl.ClaseActual=this;
  var CfgEvt= this.Cfg.CfgEventos;
  
  for(var keyEvt in CfgEvt){
      for (var keyHilo in CfgEvt[keyEvt].Hilo){
          if(CfgEvt[keyEvt].Hilo[keyHilo].Trigger=='LoadDOM'){
               cl.DispatchEvent(tblDom,'LoadDOM',CfgEvt[keyEvt].ClassEvt);
          }
      } 
  }*/




}


}
