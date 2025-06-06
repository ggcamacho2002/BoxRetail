class Scripts{


    constructor(id){
    
        this.id=id;
        this.ObjEvt=null;
        this.Cfg=null;
        this.Out=null;
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
                this.Cfg = CfgScripts(this.id, "");
          }
          
          const variables = ['Titulo','Inputs'];
          this.CargarVariables(variables);
    }
    
    
    async Iniciar() {
      
        this.CargarCfg();
        this.Eventos(this.ObjEvt,'Scripts_Inicar',this.Cfg.Inputs);              
    
    }
    
   
    async Eventos(ObjEvt,idEvt,Param){	
    
        if(!this.ObjEvt)if(ObjEvt!='')this.ObjEvt=ObjEvt;
        if(!this.Param)if(Param!='')this.Param=Param;
        if(this.Cfg==null)this.CargarCfg();
                   
        switch(idEvt){    
            case 'Scripts_Iniciar':
                this.Out=await window[this.Cfg.id](this.ObjEvt,this.Cfg.Inputs);                
            break;
    
        }
    
    }
    
    
    
    }