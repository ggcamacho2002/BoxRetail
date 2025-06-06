class Actuadores{

    constructor(id){
        
        this.id=id;
        this.Entrada;
        this.TipoObjPadre;
        this.IdObjPadre;

        this.Cfg;

        this.IdObj='';//Requerido
        this.Tipo;//Requerido
        this.Comun='';//Privado
        this.Name='';
        this.Requerido;
        this.ClassEvt='';
        this.NroItem=0;	
        this.Label='';
        this.Style='';
        this.Value='';
        this.DSid='';
        this.ClaseEvt='';
        this.IdEvt='';
        this.Param='';	
        this.TagLabel=0;
        this.PlaceHolder=0;        
        this.Valid='';
        this.InstEvtClick='';	
        this.InstEvtChange='';	
        this.InstEvtKeyPressEnter='';	
          
        this.Out;//Privado

};
    
    CargarParam(){

        var xActExt=new ActuExt();
      //  this.ClaseRouter=`claserouter="${this.ClaseRouter}"`;
        if(this.ClassEvt!=null && this.ClassEvt!='' && this.ClassEvt !=undefined)this.ClassEvt=`ClassEvt="${this.ClassEvt}"`;
        else if(this.Cfg.ClassEvt!=null && this.Cfg.ClassEvt!=''){this.ClassEvt=`ClassEvt="${this.Cfg.ClassEvt}"`;}

        
        if(this.IdObj=='')this.IdObj=this.Cfg.IdObj;//Requerido

        this.Tipo=this.Cfg.Tipo;//Requerido
        this.Requerido=this.Cfg.Requerido;//Requerido

        if(this.DSid!='' && this.DSid!='Null') {this.DSid=`DSid='${this.DSid}'`};

        if(this.id=='' || this.id==undefined){
            if(this.Cfg.idSrc==''|| this.Cfg.idSrc==undefined) this.id=this.Label.trim();
            else this.id=this.Cfg.idSrc;
        }
        

        if(this.Cfg.Tipo!='Ctrl'){
            var valueforname=this.Cfg.idSrc;
            if(valueforname=='' && valueforname!='Null')valueforname=this.id;
             this.Name=`name="${valueforname}"`;    
        }


        this.id=`${this.id}-${this.NroItem}-${this.Cfg.Tipo}-${this.IdObjPadre}`;
        this.idHtml=`id="${this.id}"`;

        if(this.Cfg.Valid)if(this.Cfg.Valid!='')this.Valid=`${this.Cfg.Valid}`;        

        this.CssClass=xActExt.ResolveCssClass(this.Cfg.CssClass);      
        this.Style=xActExt.ResolveStyle(this.Cfg.Style);
        this.Param=this.Cfg.Param;

        if(this.Cfg.Label)this.Label=this.Cfg.Label.toUpperCase();
        if(this.PlaceHolder==1)this.PlaceHolder=this.Label;  

        if(this.Requerido=="1")this.Requerido='required';else this.Requerido='';

        this.Value = this.Cfg.Value ?? '';
        this.Comun=`${this.idHtml} ${this.Name} ${this.DSid} ${this.ClaseRouter} ${this.ClassEvt} TipoObj="${this.Cfg.IdObj}"  TipoObjPadre="${this.TipoObjPadre}" IdObjpadre="${this.IdObjPadre}" ${this.Requerido}`;   

    }


    async Iniciar(){
    var cl='';

    this.CargarParam(); 

        cl=new ActuadorObj(this.id);
        cl.idHtml=this.idHtml;
        cl.Tipo=this.Tipo;
        cl.Comun=this.Comun;
        cl.Evento=this.Cfg.Evento;
        cl.TipoObjPadre=this.TipoObjPadre;
        cl.IdObjPadre=this.IdObjPadre;
        cl.IdObj=this.IdObj;
        cl.ClaseEvt=this.ClaseEvt;
        cl.TagLabel=this.TagLabel;
        cl.IdEvt=this.IdEvt;
        cl.Param=this.Param;		
        cl.Label=this.Label;
        cl.Valid=this.Valid;
        cl.PlaceHolder=this.PlaceHolder;
        cl.Style=this.Style;
        cl.CssClass=this.CssClass;
        cl.NroItem=this.NroItem;
        cl.Value=this.Value;


        await cl.Iniciar();
        this.Out=cl.Out;

    }

}

