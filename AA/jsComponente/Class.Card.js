class Card{

constructor(id){
    
    this.id=id;
    this.idObjPadre='';
    this.Tipo='';
    this.Box='';
    this.Out='';
    this.Titulo='';
    this.SubTitulo='';
    this.idHeaderForm='';
    this.Param=null;
    this.Fill=null;
    this.Cfg=null;

};


CargarCfg(){

    if(this.Cfg==null){this.Cfg=CfgCard(this.id);} 

    if(this.Box=='' || this.Box=='undefined' || this.Box==null){if(this.Cfg)if(this.Cfg.Box!='') this.Box=this.Cfg.Box ;}
    if(this.Titulo=='' || this.Titulo=='undefined' || this.Titulo==null){if(this.Cfg)if(this.Cfg.Titulo!=''){this.Titulo=this.Cfg.Titulo ;}}
    if(this.SubTitulo=='' || this.SubTitulo=='undefined' || this.SubTitulo==null){if(this.Cfg)if(this.Cfg.SubTitulo!='') this.SubTitulo=this.Cfg.SubTitulo ;}
    if(this.Cfg.Fill)if(this.Cfg.Fill!=null && this.Cfg.Fill!=''){this.Fill=this.Cfg.Fill;} 
}



async Iniciar() {
    
        this.CargarCfg();
        if(!document.getElementById(this.id))await this.Construir();        

}

async Construir(){

            var cl=new TempCard(this);
            cl.idObjPadre=this.idObjPadre;
            cl.Cfg=this.Cfg;
            cl.Titulo=this.Titulo;
            cl.idHeaderForm=this.idHeaderForm;
            cl.SubTitulo=this.SubTitulo;
            await cl.Render();	
            var Html=cl.Out;
            
            if(this.Box){
                if(this.Box!=''){
                        var clEvt=new ManejarDOM(this.id);
                        clEvt.Box=this.Box;
                        clEvt.Eventos=this.Cfg.Eventos;
                        clEvt.Html=Html;
                        await clEvt.InsertarDOM();                         
                        await this.FillCard();                        

                    }else this.Out=cl.Out;
                }else this.Out=cl.Out;


}	

async FillCard(){
	
    if(this.Fill!='' && this.Fill!=undefined){
        
            var cl=InvokeClase(this.Fill.TipoObj,this.Fill.IdObj);     
                cl.Box=this.id+"-Body";   
                await cl.Iniciar();   
    }
      
}



async Eventos(ObjEvt,IdEvt,Param) {

   this.CargarCfg();

    switch(IdEvt) {
		case "Card_Iniciar":await this.Iniciar(); break;
		case "Card_Hide":this.Hide(); break;
		case "Hide":this.Hide(); break;
    }
}


MostrarFooter(){
    
    document.getElementById(this.id+'-Footer').style.display="block";
    document.getElementById(this.id+'-Body').style.height="calc(100% - 80px)";

}


HideRemove(){
    var Dom=document.getElementById(this.id); 
    Dom.remove();   
}

Hide() {
    var Dom = document.getElementById(this.id);
    Dom.classList.add('Hide');
}
Show() {
    var Dom = document.getElementById(this.id);
    Dom.classList.remove('Hide');
}


}

