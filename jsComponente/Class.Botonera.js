class Botonera{

 constructor(id){
    
    this.id=id;
    this.Box=null;
    this.Orientacion=null;
    this.Style=null;
    this.CssClass=null;
    this.Botones=null;
    this.CfgEventos=null;
};


CargarVariables(variables){

    for (let i = 0; i < variables.length; i++) {
        const variable = variables[i];      
        if (this[variable] == null || typeof this[variable] === 'undefined') {
          if (this.Cfg != null && this.Cfg[variable] != null) {
            this[variable] = this.Cfg[variable];
          } 
        }
      }

}
CargarCfg(){
    
    if (this.Cfg == null || typeof this.Cfg === 'undefined') {
            this.Cfg = CfgBotonera(this.id, this.Metodo);
      }
      
      const variables = ['Box','Orientacion', 'CssClass', 'Botones', 'CfgEventos'];
      this.CargarVariables(variables);

      if(this.Style==null)if(this.Cfg.Style)this.Style=`style='${ToolsTraerStyle(this.Cfg.Style)}'`;
}

async Template(){

	var html='';
    html=await this.TraerControls();
    return `
            <div id="${this.id}" Tipo='Botonera' class="Botonera Botonera${this.Orientacion} ${this.CssClass}"  ${this.Style}>
                    <form id='frm${this.id}' IdObjPadre='Botonera' Tipo="Botonera" idCfg="${this.id}" idselecto=''  itemselecto='0'  onsubmit='return false;'>
                        ${html}
                    </form>
            </div>
    `;
}

async TraerControls(){	
    var html='';

    let arrayDesdeObjeto = Object.keys(this.Botones).map(key => this.Botones[key]);

    arrayDesdeObjeto.sort((a, b) => {
        return parseInt(a.Orden) - parseInt(b.Orden);
    });
    
    this.Botones = arrayDesdeObjeto;
    
    for (var key in this.Botones) {
    var idItem=this.Botones[key]["id"];     
                                
            var Ct=new Actuadores(idItem);
            Ct.TagLabel=0;
            Ct.PlaceHolder=0;
            Ct.ClassEvt=this.Botones[key].ClassEvt;
            Ct.TipoObjPadre='Botonera';
            Ct.IdObjPadre=this.id;
            Ct.IdObj='BotonComun';
            Ct.Cfg=this.Botones[key];
            await Ct.Iniciar();
            
            html+='<div class="BotoneraContainer">'+Ct.Out+'</div>';     

        } 

    return html;    
};

async Iniciar() {
    
        this.CargarCfg();
        if(!document.getElementById(this.id))await this.Construir();        

}

async Construir(){

            var Html=await this.Template();
            
            if(this.Box){
                if(this.Box!=''){
                        var clEvt=new ManejarDOM(this.id);
                        clEvt.Box=this.Box;
                        clEvt.Eventos=this.Cfg.Eventos;
                        clEvt.Html=Html;
                        await clEvt.InsertarDOM();                         

                    }else this.Out=cl.Out;
                }else this.Out=cl.Out;


}	

async Eventos(ObjEvt,idEvt,Param){	

    if(!this.ObjEvt)if(ObjEvt!='')this.ObjEvt=ObjEvt;
    if(!this.Param)if(Param!='')this.Param=Param;
    if(this.Cfg==null)this.CargarCfg();
       
    switch(idEvt){

        case 'Botonera_Iniciar':
            await this.Iniciar();
            
        break;

    }

}



}

