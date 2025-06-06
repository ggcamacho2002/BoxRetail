class Tabs{

constructor(id){
    
        this.id=id;this.Entrada;
    this.Col=1;
    this.Cfg='';
    this.Items={};
    this.Out='';
    this.Box='';

};

Iniciar(){

    this.Cfg=CfgTabs(this.id);

    if(this.Cfg==undefined || this.Cfg=='' ){
            alert('El id solicitado no existe -->CFG TABS!!!!');
    }else{

        this.Items=this.Cfg.Items;
        var html=this.Template();
        
        if(this.Cfg.Box!=undefined && this.Cfg.Box!='')this.Box=this.Cfg.Box;       
        if(this.Box!='')$('#'+this.Box).html(html);
        else this.Out=html;        
    }

}


Template(){

    var  Html=`<ul class="nav nav-tabs navbar-dark" id="Tab-${this.id}" role="tablist">`;
    var estado='active';
    var i=0;
    for (var tab in this.Items) {
        
        Html+=`<li class="nav-item" role="presentation">
                  <button id='#Tab-${this.id}-${tab}' class="nav-link ${estado}" data-nrotab='${i}' data-bs-toggle="tab" data-bs-target="#Tab-${this.id}-${tab}" type="button" role="tab" aria-controls="Tab-${tab}" aria-selected="true">${this.Items[tab].Titulo}</button>
              </li>
        `;    
        estado='';

        i++;
    }    

    Html+=`</ul>`;
    Html+=`<div class="tab-content" id="myTabContent">`; 
    estado='active';
    var xGrid;
    for (var tab in this.Items) {
        
        var htmlbody='';
        if(this.Items[tab].Grid!=undefined && this.Items[tab].Grid!='' ){
        
            xGrid=new Grid(this.Items[tab].Grid);
            xGrid.Iniciar();
            htmlbody=xGrid.Out;   


        }    
        
        Html+=` <div class="tab-pane fade show ${estado} bg-dark" id="Tab-${this.id}-${tab}" role="tabpanel" aria-labelledby="${this.Items[tab].Titulo}">`;           
        Html+=htmlbody;             
        Html+=`</div>`;             
    
        estado='';
    }   

    Html+=`</div>`;

    return Html;
          
}



LlenarTab(NroTab,Html){

    var id=`${this.id}-${NroTab}`;           
    
    $(`#Tab-${id}`).html(Html);

}    

GetTabActivo(){

    return $('#Tab-'+this.id).find('.active')[0].attributes['data-nrotab'].value;

}


}

