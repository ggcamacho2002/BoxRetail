class ModalFull{

constructor(id){
    
        this.id=id;this.Entrada;
    this.Out='';
    this.Cfg;

    this.GralSize='';
    this.GralCssClass='';		
    this.GralStyle='';
 
    this.HeaderTitulo='';
    this.HeaderCssClass='';	
    this.HeaderStyle='';
 
    this.BodyGrid='';
    this.BodyCssClass='';	
    this.BodyStyle='';
 
    this.FooterCfgItems='';
    this.FooterCssClass='';	
    this.FooterStyle='';
 

};

Iniciar(ObjEvt){
   
    if(ObjEvt)this.ObjEvt=ObjEvt;

    this.Cfg=CfgModalFull(this.id,this.ObjEvt);
    if(!this.Cfg.Gral)this.Cfg=this.CfgPref();
    this.CargarParam();

   $('#PagBody').append(this.CrearModal());
   
 }

 CargarParam(){

   this.GralSize=this.Cfg.Gral.Size;
   this.GralCssClass=this.Cfg.Gral.CssClass;		
   this.GralStyle=this.Cfg.Gral.Style;	

   this.HeaderTitulo=this.Cfg.Header.Titulo;
   this.HeaderCssClass=this.Cfg.Header.CssClass;		
   this.HeaderStyle=this.Cfg.Header.Style;

   this.BodyGrid=this.Cfg.Body.Grid;
   this.BodyCssClass=this.Cfg.Body.CssClass;		
   this.BodyStyle=this.Cfg.Body.Style;

   this.FooterCfgItems=this.Cfg.Footer.CfgItems;
   this.FooterCssClass=this.Cfg.Footer.CssClass;		
   this.FooterStyle=this.Cfg.Footer.Style;

 }

 CfgPref(){
    var ret={	
            Gral:{Size:this.GralSize,CssClass:this.GralCssClass,Style:this.GralStyle},
            Header:{Titulo:this.HeaderTitulo,CssClass:this.HeaderCssClass,Style:this.HeaderStyle},
            Body:{Grid:this.BodyGrid,CssClass:this.BodyCssClass,Style:this.BodyStyle},
            Footer:{CfgItems:this.FooterCfgItems,CssClass:this.FooterCssClass,Style:this.FooterStyle},
    }

    
    return ret;

}


CrearModal(){	

     var estilo='';
    if(this.Cfg.Gral.Style!='')estilo=`style='${this.GralStyle}'`;
    if(this.GralSize!='')this.GralSize='modal-'+this.GralSize;
   
    var ModalFooter='';
    var aux=this.ModalFooter();

    if(aux!='')ModalFooter=`<div class="modal-footer ${this.FooterCssClass}">${this.ModalFooter()}</div>`;

            var t=`
                    <!-- Modal -->
                    <div class="modal" id="${this.id}">
                    <div class="modal-dialog ${this.GralSize}"  ${estilo}>
                        <div class="modal-content">
                                <div class="modal-header ${this.HeaderCssClass}">
                                        ${this.ModalHeader()}
                                </div>
                                <div class="modal-body ${this.BodyCssClass}" id="modalbody-${this.id}">
                                    ${this.ModalBody()}
                                </div>
                                    ${ModalFooter}
                        </div>
   
            `;
return t;

};

ModalHeader(){

var Html='';
    Html= `<div class="modal-title" id="modalTitulo-${this.id}">${this.HeaderTitulo}</div>
           <div id='${this.id}HeaderItems'></div>
           <button type="button" class="btn btn-close" onclick="new ModalFull('${this.id}').Hide()"></button>`;

return Html;
    
}


ModalBody(){    

    if(this.BodyGrid && this.BodyGrid!=''){ 
        var g=new Grid(this.BodyGrid);
        g.Iniciar();
         return g.Out;
    }else{
        var g=new Grid(this.id);
         g.Iniciar();
         return g.Out; 
    }     
}


ModalFooter(){

    var array=this.FooterCfgItems;
    var fhtml='';

    for (var item in array) {

        var CfgItem=array[item];
        var Act=new Actuador(item);
        Act.IdObjPadre=this.id;
        Act.NroItem=0;
        Act.Tipo=CfgItem.Tipo;
        Act.Label=CfgItem.Label;
        Act.CssClass=CfgItem.CssClass;
        Act.Param=CfgItem.Param;
        Act.EvtCtr=CfgItem.EvtCtr;
        Act.Iniciar();  
        
        fhtml+=Act.Out;
    };

    return fhtml;

}



Show(){
    
    $('#'+this.id).show();
   
}


Hide(){
   
    var myModal =$('.Modal');
        myModal.remove();
}


}

