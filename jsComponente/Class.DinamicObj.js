class DinamicObj {
  constructor(id) {
      this.id=id;
      this.Cfg;
      this.ObjEvt;
      this.Param;
  }


    CargarCfg(){
           
           if(this.Cfg==undefined || this.Cfg=='' || Object.keys(this.Cfg).length==0)
                          this.Cfg=CfgDinamicObj(this.id,this.Metodo);

    }
    Iniciar() {

            this.Eventos(this.ObjEvt,'Iniciar',this.Param);
    }

    Eventos(ObjEvt,IdEvt,Param) {

        this.CargarCfg();

        if(ObjEvt)this.ObjEvt=ObjEvt;
        if(Param)this.Param=CargarParam(Param);

        switch(IdEvt) {
                case "Iniciar":
                        this.Construir();                        
                break;
        }
    }

    Construir(){
        
        const Obj=Object.values(this.Cfg.Objects);

        for (let Item of Obj) {

                var cl=FabClases(Item.Tipo);
                    cl.id=Item.IdObj;
                    cl.Param=Item.Param;
                    cl.ObjEvt=this.ObjEvt;    
                   
                    cl.Iniciar();
                    var Html=cl.Out;

                   if(Item.InsertId)if(Item.InsertId!='')document.getElementById(Item.InsertId).innerHTML=Html;     
                   if(Item.Evento){
                            var param='';
                            if(Item.Evento.Param) param=Item.Evento.Param;
                            cl.Eventos(this.ObjEvt,Item.Evento.id,param); 
                   }

        }
    }


}