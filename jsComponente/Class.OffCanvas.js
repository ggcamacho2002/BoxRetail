class OffCanvas{

constructor(id){
    
    this.id=id;
    this.Entrada;
    this.Out='';
    this.Box='';
    this.Position;
    this.Ancho='w-10';
    this.Titulo='';
    this.BodyHtml='';//NO REQUERIDO
    this.Cfg;
    this.CssClass='';
    this.HeaderCtrl;				
    this.Style='';
    this.Dom;
};

Iniciar(){

    this.Style='';

            switch(this.Position){

                case 'InBox':
                    
                    var elemento=document.getElementById(this.Box);
                    const posicion =elemento.getBoundingClientRect();
                    this.Style+=`top:${posicion.top}px;left:${posicion.right+8}px;`;
                        this.Position='offcanvas-InBox';
                break;            
              }  
              document.getElementById(this.Box).insertAdjacentHTML('beforeend', this.Template()); 
              this.Dom=document.getElementById(this.id); 
              
              this.Show();
              
}


TraerHeaderCtrl(){	
    var ctrh='';			
    for (var key in this.HeaderCtrl) {
            
                var ctr=new Actuadores(key);
                ctr.TipoObjPadre='';
                ctr.TipoObjPadre="OffCanvas";
                ctr.IdObjPadre=this.IdObjPadre;
                ctr.Cfg=this.HeaderCtrl[key];
                ctr.Iniciar();
                ctrh+=ctr.Out;					
    
    }	
    this.HeaderCtrlHtml=ctrh;
}
TraerHeaderClose(){	
    return `<button  type="button" value="" class="btn btnRojoPastel" onclick="new OffCanvas('${this.id}').Hide();">Close</button>`;
}


Template(){	

        this.TraerHeaderCtrl();

        var t=`
                <div id='${this.id}' class="offcanvas ${this.Position} ${this.CssClass} ${this.Ancho}" style="display:none;${this.Style}" >
                    <div class="offcanvas-header">
                        <div class="offcanvas-Headertitle" id="${this.id}-OffCanvasLabel"><span>${this.Titulo}</span></div>
                        <div class="offcanvas-HeaderCtrl ">${this.HeaderCtrlHtml}</div>
                        <div class="offcanvas-HeaderClose"> ${this.TraerHeaderClose()} </div>
                    </div>  
                    <div id="${this.id}-Body" class="offcanvas-body" style="padding-top: 0px;">${this.BodyHtml}</div>
                </div>
        `;

return t;

};

Show(){

    this.Dom.style.display = "block";

}

Hide(){
    this.Dom=document.getElementById(this.id); 
    this.Dom.remove();   
}
HideRemove(){
    this.Dom=document.getElementById(this.id); 
   if(this.Dom)this.Dom.remove();   
}


}

