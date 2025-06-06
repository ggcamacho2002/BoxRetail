class Impresion{

constructor(id){	

    this.id=id;
    this.Entrada;
    this.CfgGrid=null;
    this.Cfg=null;
    this.Box='';
    this.Param='';
    this.Testing=0;
    this.Estado=0;
    this.OnGridFill=1;
    this.Dom;
    
    this.CssClass=null;
    this.Fecha=null;
    this.Grid=null;
    this.GridFill=null;
    this.Titulo=null;
    this.IdObj=null;
    this.TipoObj=null;

}

CargarCfg(){		

       this.Dom=document.getElementById(this.id);

       if(this.Cfg==undefined || this.Cfg=='undefined' || this.Cfg=='') this.Cfg=CfgImpresion(this.id);
       else if(Object.keys(this.Cfg).length==0)this.Cfg=CfgImpresion(this.id);


       const variables = ['CssClass', 'Fecha', 'Grid', 'GridFill', 'Titulo'];
      
       for (let i = 0; i < variables.length; i++) {
         const variable = variables[i];
       
         if (this[variable] == null || typeof this[variable] === 'undefined' || Object.keys(this[variable]).length == 0) {
           if (this.Cfg != null && this.Cfg[variable] != null) {
             this[variable] = this.Cfg[variable];
           } 
         }
       }
}

async Iniciar() {

    if(!this.Dom){
        if(!this.Cfg) this.CargarCfg();
        await this.Construir();  
    }else
    {
        this.Mostrar();
    }
     
}


async Construir(){

	if(!this.Dom){

            var Style='';
            var CssClass='';

            if(this.Cfg.CssClass) if(this.Cfg.CssClass!="") CssClass=ToolsTraerCssClass(this.Cfg.CssClass);

            var html=`<div id='${this.id}' Tipo="Impresion" class='Impresion ${CssClass}'>`;                                                    
            var Testing=0;


            if(!this.CfgGrid){

                this.CfgGrid=CfgGrids(this.Cfg.Grid);
                if(this.CfgGrid)Testing=this.CfgGrid.Testing;
               if(this.CfgGrid.Box) this.CfgGrid.Box='';

            }
            
            var cl=new Grid(this.Cfg.Grid);
                cl.idVista=this.id;
                cl.Cfg=this.CfgGrid;
                cl.Testing=this.Testing;
                await cl.Iniciar();                
      
                    html+=cl.Out; 
                    html+=`</div>`; 
                
                    document.getElementById(this.Box).innerHTML=html;
                    await this.InsertarObjetos();     
    }

        

}

async Eventos(ObjEvt,IdEvt,Param) {

    this.CargarCfg();
  
    if(ObjEvt)this.ObjEvt=ObjEvt;
    if(Param)this.Param=Param;    
    
    
    switch(IdEvt) {
  
         case "Iniciar":await this.Iniciar();break;
         case "Impresion_Iniciar":await this.Iniciar();break;
         case "Impresion_ManualFill":this.ManualFill();break;
         case "Impresion_Imprimir":this.Imprimir();break;
  
                
    }
  }

async ManualFill() {

    var TipoObj=this.Param[0]['TipoObj'];
    var IdObj=this.Param[0]['IdObj'];
    var IdGrid=this.Param[1]['ItemObj'];
    var EvtInicio=this.Param[2]['Value'];


    var cl=InvokeClase(TipoObj,IdObj); 
    cl.Box=this.id+'_'+IdGrid;                                                    
    var evt='';
    if(EvtInicio!='')evt=TipoObj+'_'+EvtInicio;
    else evt=TipoObj+'_Iniciar';

    await cl.Eventos('',evt,'');

}


async InsertarObjetos(){
 
    var ItemGrid=this.Cfg.GridFill;
   // var idGrid=this.Cfg.Grid;
    var xBox='';
    if(ItemGrid){
                for (var key in ItemGrid) {

                       if(ItemGrid[key]){
                            
                                    xBox=this.id+'_'+ItemGrid[key].Col;
                       
                                        if(ItemGrid[key].TipoObj){

                                                await this.InvocarClase(ItemGrid[key],xBox)
                                    
                                        }else{
                                                document.getElementById(xBox).innerHTML='';
                                        }
                                        

                        }
                    
                  
                }    
    }

}

async InvocarClase(ItemGrid, xBox) {    
    this.TipoObj=ItemGrid.TipoObj
    var IdObj=ItemGrid.IdObj
     this.Param=ItemGrid.Param

    this.Box=xBox;

        switch(this.TipoObj){

            case 'Titulo': this.Traer_Titulo(IdObj);break;
            case 'Formulario': await this.Traer_Formulario(IdObj);break;
            case 'SuperTabla': await this.Traer_SuperTabla(IdObj);break;
            case 'Tabla': await this.Traer_Tabla(IdObj);break;
            default: alert('class Impresion no se encontro el componente!!');break;

        }


}


Traer_Titulo(){
    var fechaActual='';

    if(this.Fecha==1){  

        let fechaActualaux = new Date();

            let opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
              fechaActual = fechaActualaux.toLocaleDateString('es-AR', opciones);
    }

    document.getElementById(this.Box).innerHTML=`<div class='ImprimeCabecera'><div class='ImprimeTitulo'>${this.Titulo}</div><div class='ImprimeFecha'>Fecha: ${fechaActual}</div></div>`;

}

async Traer_Formulario(IdObj){

    var cl=new Formulario(IdObj); 
        cl.Box=this.Box;

    var evt=this.TipoObj+'_Iniciar';
    await cl.Eventos('',evt,this.Param);

}
async Traer_SuperTabla(IdObj){

    var cl=new SuperTabla(IdObj); 
        cl.Box=this.Box;

    var evt=this.TipoObj+'_Construir';
    await cl.Eventos('',evt,this.Param);

}

async Traer_Tabla(IdObj){

    var cl=new Tabla(IdObj); 
        cl.Box=this.Box;

    var evt=this.TipoObj+'_Construir';
    await cl.Eventos('',evt,this.Param);

}


/*
Imprimir() {

        const contenido = document.getElementById(this.id).innerHTML;
        const ventanaDeImpresion = window.open('', '_blank', 'height=600,width=800');
        ventanaDeImpresion.document.write(`
          <html>
            <head>
            <link href="cssClass/Baul.css" rel="stylesheet" type="text/css" />
              <title>Impresion</title>
            </head>
            <body>
              ${contenido}
            </body>
          </html>
        `);
        ventanaDeImpresion.document.close();
        ventanaDeImpresion.focus();
        ventanaDeImpresion.print();
        ventanaDeImpresion.onafterprint = ventanaDeImpresion.close; // Cierra la ventana después de imprimir

}*/


Imprimir(){
    window.print();
}


}

