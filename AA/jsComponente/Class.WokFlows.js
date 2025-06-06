class Workflows{

constructor(id){
    
    this.id=id;this.Entrada;
    this.ObjEvt=''

    this.Out;
    this.OutAnterior='';
    this.Items=CfgWorkFlows(this.id,this.ObjEvt);

};

Iniciar(){
    var Itm='';
    for (var key in this.Items) {
       Itm=this.Items[key];

        var cl=eval(`new ${Itm.Clase}('${Itm.IdObj}')`);    
            cl.Entrada=this.OutAnterior;        
            cl.Eventos(this.ObjEvt,Itm.IdEvtClick,Itm.Param);
            this.OutAnterior=cl.Out;

    }
}

Eventos(ObjEvt,idEvt,InParam){	
    this.ObjEvt=ObjEvt;


    switch(idEvt){
        case 'Iniciar':
            this.Iniciar();
        break;
    }

};


}

