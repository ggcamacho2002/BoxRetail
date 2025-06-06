class Grid{

constructor(id){
    
    this.id=id;
    this.Entrada;
    this.idVista;
    this.idTemplate;
    this.Out='';
    this.Cfg;
    this.Fabrica=0;
    this.Testing=0;
    this.Box='';  
    this.idHtml='';
};

async Iniciar() {

        this.CargarCfg();
        if (this.Cfg !== undefined) {
           await this.Construir();
        }  
}

CargarCfg(){

    if(this.id==undefined)this.id='';

    if(this.Cfg==undefined || this.Cfg=='undefined' || this.Cfg=='') this.Cfg=CfgGrids(this.id);
    else if(Object.keys(this.Cfg).length==0)this.Cfg=CfgGrids(this.id);
    
    if(this.Testing==0)if(this.Cfg!=undefined)if(this.Cfg.Testing) this.Testing=this.Cfg.Testing;

     if(this.Cfg==undefined){
        alert(this.id +' : id de GRID inexistente --> (Ver Cfg_Grids) !!!!');
    }

    this.idHtml=this.idVista+'_'+this.id;
  

}

async Construir(){


        var Style='';
        var CssClass='';
        if(this.Cfg.Style) if(this.Cfg.Style!="") Style=`style="${ToolsTraerStyle(this.Cfg.Style)}"`;
        if(this.Cfg.CssClass) if(this.Cfg.CssClass!="") CssClass=ToolsTraerCssClass(this.Cfg.CssClass);

        var html=`<div  id="${this.idHtml}"  class="Grid ${CssClass}" ${Style}>${this.Crear()}</div> `;

        
        if(this.Box!='')document.getElementById(this.Box).innerHTML=html;
        else  if(this.Cfg.Box!=undefined && this.Cfg.Box!='')this.Box=this.Cfg.Box;         
                    else this.Out=html;         
    

}


async Eventos(ObjEvt,idEvt,Param){	

    this.CargarCfg();

     if(!this.ObjEvt)if(ObjEvt!='')this.ObjEvt=ObjEvt;
     this.Param=CargarParam(Param);
     
     switch(idEvt){
         
         case 'Grids_Iniciar':                     
            await this.Iniciar(); 
         break;

 }

};


async LimpiarCol(idCol){
    document.getElementById(idCol).innerHTML='';
}

Crear(){

   var Html='';
   var CssClass='';
   var Style='';

    var nrorow=0;
    var Rows=this.Cfg.Rows;
    for (var KeyRow in Rows) {             
        Style=''; 
        if(Rows[KeyRow].Style) if(Object.keys(Rows[KeyRow].Style).length>0) Style=`style="${ToolsTraerStyle(Rows[KeyRow].Style)}"`;
        
        if(Rows[KeyRow].CssClass) if(Object.keys(Rows[KeyRow].CssClass).length>0) CssClass=Rows[KeyRow].CssClass;

            Html+=`<div id="${this.idHtml}-${nrorow}" class='GridRow ${CssClass}' ${Style}>`;

                 if(Object.keys(Rows[KeyRow].Cols).length>0) Html+=this.AddCol(nrorow,Rows[KeyRow].Cols);
                 else {alert("Error en Class Grid (id: "+this.idHtml+ ") : la fila "+KeyRow+" no posee Columnas !!!!");}

            Html+=`</div>`;
    
            nrorow++;
            
    }

    return Html;

}



AddCol(nrorow,cols){
var Html='';
var CssClass='';
var Style='';
var Test='';
var txttest='';
var id='';


    for (var keyCol in cols) {

        id=`${this.idHtml}-${nrorow}-${keyCol}`;
        if(this.Testing==1){Test='GridTesting';txttest=`ROW -${nrorow}  <>  COL - ${keyCol}`;}

        
        if(cols[keyCol].Style) if(Object.keys(cols[keyCol].Style).length>0) Style=`style="${ToolsTraerStyle(cols[keyCol].Style)}"`;

        if(cols[keyCol].CssClass)CssClass=cols[keyCol].CssClass + ' '+Test;
        else CssClass=Test;


        var hSubGrid='';    
        if(cols[keyCol].SubGrid=="" || cols[keyCol].SubGrid=="null" || cols[keyCol].SubGrid==undefined)hSubGrid=txttest;
        else{            
            var xCfg={};
            
              try{
                   xCfg=CfgGrids(cols[keyCol].SubGrid);
              }catch(e){}
                
                 if(xCfg == "undefined")xCfg=ParamGrids(cols[keyCol].SubGrid)

            var g=new Grid(id+'_SubG');
            g.Cfg=xCfg;
            g.Testing=this.Testing;
            g.Iniciar();
            hSubGrid=g.Out;
        }
       
        Html+= `<div id="${id}" class='GridCol ${CssClass}' ${Style}>${hSubGrid}</div>`;

        Style='';
        CssClass='';

    }

    return Html;

}

Llenar(Row,Col,Html){

    var id=`${this.id}-${Row}-${Col}`;

    $(`#${id}`).html(Html);

    //GridIns-1-0


}

CambiarVisibilidad(tipo,idobj){
  
    this.idHtml=this.idVista+'_'+idobj;
    if(tipo=='SHOW')this.ShowDiv();
    if(tipo=='HIDE')this.HideDiv();

}

HideDiv() {
    var div = document.getElementById(this.idHtml);
    if (div) {
        // Ocultamos el div
        div.classList.add("Hide");

    }
}
ShowDiv() {
    var div = document.getElementById(this.idHtml);
    if (div) {
        // Ocultamos el div
        div.classList.remove("Hide");

    }
}


}


