class Vistas{

constructor(id){	

    this.id=id;
    this.Entrada;
    this.CfgGrid=null;
    this.Cfg=null;
    this.Box='BoxVistas';
    this.Testing=0;
    this.Estado=0;
    this.OnGridFill=1;
    this.Dom;

}

CargarCfg(){		

       this.Dom=document.getElementById(this.id);

       if(this.Cfg==undefined || this.Cfg=='undefined' || this.Cfg=='') this.Cfg=CfgVistas(this.id);
       else if(Object.keys(this.Cfg).length==0)this.Cfg=CfgVistas(this.id);

}

async Iniciar() {

    if(!this.Dom){
        if(!this.Cfg) this.CargarCfg();
        await this.Construir();
            if(this.Cfg.EvtInicio!=''){

                   await this.EjecutarEvtInicio();
                
            }  
    }else
    {
        this.Mostrar();
    }
     
}


async Construir(){

	if(!this.Dom){

            var Style='';
            var auxStyle='display:none;';
            var CssClass='';

            if(this.Cfg.Style)auxStyle+=ToolsTraerStyle(this.Cfg.Style);

            Style=`style="${auxStyle}"`;
            if(this.Cfg.CssClass) if(this.Cfg.CssClass!="") CssClass=ToolsTraerCssClass(this.Cfg.CssClass);

            var html=`<div id='${this.id}' Tipo="Vistas" class='Vista ${CssClass}' ${Style} >`;                                                    
            var Testing=0;

            if(this.Cfg.Titulo) document.getElementById('CabScreenVista').innerHTML=' > '+ this.Cfg.Titulo;

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
                    
                    this.CambiarEstadoVista("0");
                    document.getElementById(this.id).style.display='';

                    this.Mostrar();
                    if(this.OnGridFill==1)await this.InsertarObjetos();     
    }

        

}

async Eventos(ObjEvt,IdEvt,Param) {

    this.CargarCfg();
  
    if(ObjEvt)this.ObjEvt=ObjEvt;
    if(Param)this.Param=Param;    
    
    
    switch(IdEvt) {
  
         case "Iniciar":await this.Iniciar();break;
         case "Vistas_Iniciar":await this.Iniciar();break;
         case "Vistas_CambiarEstado": await this.CambiarEstadoVista();break;
         case "Vistas_Cambiar": await this.CambiarVista();break;
         case "Vistas_Ocultar":this.Ocultar();break;  
         case "Vistas_Mostrar":this.Mostrar();break;
         case "Vistas_ManualFill":await this.ManualFill();break;
         case "Vistas_LimpiarGrid":await this.LimpiarGrid();break;
  
                
    }
  }


async CambiarEstadoVista(Nro) {

    if(Nro!=0)if(!Nro)Nro=BuscarParametroEvento(this.ObjEvt,this.Param,'NroEstado');
    
    return new Promise((resolve, reject) => {

        var ItemsEstado=this.Cfg.Estados[Nro]['OnOff'];
        if(ItemsEstado){
                    var vis='';
                    var idGrid='';
                    var cl='';
    
                    for (var key in ItemsEstado) {
    
                        idGrid=ItemsEstado[key].IdObj;
                        vis=ItemsEstado[key].Visibilidad;
    
                        cl=new Grid(idGrid.split('-')[0]);
                        cl.idVista=this.id;
                        cl.CambiarVisibilidad(vis,idGrid);
                    
                    }    
    
        }

        resolve(); 

    });

}
async CambiarVista() {

    var boxvistas = document.getElementById('BoxVistas');
    var vistas = boxvistas.querySelectorAll('.Vista');
    
    if(this.Cfg.Titulo) document.getElementById('CabScreenVista').innerHTML=' > '+ this.Cfg.Titulo;
    
    vistas.forEach(function(vista) {
        vista.style.display = "none";
    });
    await this.Eventos(this.ObjEvt,'Iniciar',this.Param);

    this.Mostrar();
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
async LimpiarGrid() {

    var IdGrid=this.Param[0]['ItemObj'].split('-')[0];
    var col=this.Param[0]['ItemObj'];

    var cl=new Grid(IdGrid); 
        cl.idVista=this.id;
        cl.LimpiarCol(this.id+'_'+col);
        
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
                                                var cl=InvokeClase(ItemGrid[key].TipoObj,ItemGrid[key].IdObj); 
                                                    cl.Box=xBox;                                                    
                                                    var evt='';
                                                    if(ItemGrid[key].EvtInicio!='')evt=ItemGrid[key].TipoObj+'_'+ItemGrid[key].EvtInicio;
                                                    else evt=ItemGrid[key].TipoObj+'_Iniciar';

                                                    await cl.Eventos('',evt,ItemGrid[key].Param);
                                        }else{
                                                document.getElementById(xBox).innerHTML='';
                                        }
                                        

                        }
                    
                  
                }    
    }

}


async EjecutarEvtInicio(){
    
    var cl=new Eventos();
    cl.ClaseActual=this;

    var Hilo={
        IdEvt: this.Cfg.EvtInicio,
        Orden:"0",
        Trigger:"click",
    };

    await cl.ejecutarHilo(Hilo);	  


}
     
Ocultar() {
    if(document.getElementById(this.id))document.getElementById(this.id).style.display = "none";
 }
     
 Mostrar() {
     document.getElementById(this.id).style.display = "block";
 }
 


}

