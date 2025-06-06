class JsonViewer{

  constructor(id){
      
      this.id=id;
      this.DOMBox;//Debe ingresar el DOM
      this.Json; 
      this.ClaseRouter='';
      this.TipoObjPadre='JsonViewer';
      this.UltimoId;
      this.Cfg;
      this.CfgBtns;
      this.CfgPropActual;
      this.ModoInicio='CollapseAll';//CollapseAll/ExpandAll
      this.ObjEvt='';

  };
  


Iniciar() {

    const DivPrincipal = document.createElement('div');
    DivPrincipal.id=this.id;
    DivPrincipal.classList.add(`JsonViewer`);

    const DivHeader = document.createElement('div');
    DivHeader.classList.add(`DivHeader`);
   
    const DivBody = document.createElement('div');
    DivBody.classList.add(`DivBody`);


          const buttonsContainer = document.createElement('div');
          buttonsContainer.classList.add('toggle-all-buttons');
          this.CrearButtonHeader(buttonsContainer,'Expand All',DivBody);
          this.CrearButtonHeader(buttonsContainer,'Collapse All',DivBody);

    DivHeader.appendChild(buttonsContainer);      

    DivPrincipal.appendChild(DivHeader);

    this.FormatJsonItems(this.Json, DivBody);
    
    DivPrincipal.appendChild(DivBody);    

    this.DOMBox.appendChild(DivPrincipal);

    if(this.ModoInicio=='CollapseAll')this.ClickCollapseAll(DivPrincipal);
    if(this.ModoInicio=='ExpandAll')this.ClickExpandAll(DivPrincipal);


}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      FormatJsonItems(json, container, level = 1, parentId = null, parentKey = null) {
        for (let key in json) {
          const li = document.createElement('li');
          li.id = parentKey ? `${parentId}-${key}` : key;
          container.appendChild(li);
          
          if(parentId==null)this.UltimoId = `${key}`;
          else this.UltimoId = `${parentId}-${key}`;
          
          const value = json[key];
          
          if (typeof value === 'object') {
            this.handleObjectValue(li, key, value, level, parentId);
            
          } else {
            this.handleNonObjectValue(li, key, value);
            
          }
        }
      }

      handleObjectValue(li, key, value, level, parentId) {
        const ul = document.createElement('ul');
        ul.id='Ul-'+this.UltimoId;
        ul.classList.add(`level-${level}`);
        li.appendChild(ul);


        const toggleButton = document.createElement('button');
        toggleButton.id = "btnToggle_" + this.UltimoId;        
        toggleButton.classList.add('toggle-button');
        toggleButton.textContent = '-';
        
        toggleButton.addEventListener('click', () => {
          const subList = li.querySelector('ul');
          if (subList) {
            subList.classList.toggle('collapsed');
            toggleButton.textContent = subList.classList.contains('collapsed') ? '+' : '-';
          }
        });
        li.textContent = `${key}: `;
        li.appendChild(toggleButton);        
        
        this.AgregarBtnLi(li)

     
        const subList = document.createElement('ul');
        subList.classList.add(`level-${level + 1}`);
        subList.id='Ul-'+this.UltimoId;
        subList.classList.add('collapsed');
        li.appendChild(subList);


       
        this.FormatJsonItems(value, subList, level + 1, li.id, key);
      }
      /////////////////////////////////////////////////////////////////////////////////////////////////

      handleNonObjectValue(li, key, value) {
            const ul = document.createElement('ul');
            ul.classList.add(`level-1`);
            ul.id='Ul-'+this.UltimoId;
            li.appendChild(ul);       

          const span = this.traerSpanActuador(value,this.UltimoId);
          
          const valueContainer = document.createElement('span');
          valueContainer.appendChild(span);

          li.textContent = `${key}: `;
          li.appendChild(valueContainer);      

      }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


FiltrarProp(texto) {
  const patron = /(\d+)-/g;

      function reemplazar(match, p1) {
        if (parseInt(p1) >= 0) {
          return '';
        } else {
          return match;
        }
      }

  const resultado = texto.replace(patron, reemplazar);

  this.CfgPropActual=resultado;
}

    CreaBoton(Cfgbtns,Prop,key){
          const btn = document.createElement('button');
          btn.classList.add(key);
          btn.id=key+'_'+this.UltimoId;
          btn.name=this.UltimoId;
          btn.textContent = Cfgbtns.Titulo;
          btn.setAttribute('ClaseRouter', this.ClaseRouter);
          btn.setAttribute('TipoObjPadre', this.TipoObjPadre);
          btn.setAttribute('ClassEvt', Cfgbtns.ClassEvt);
          btn.setAttribute('IdObjPadre', this.id);


          return btn;
    }

    AgregarBtnLi(li){

      const cadena = this.UltimoId;
      const patron = /-(\d+)/g;

      const Prop = cadena.replace(patron, function(match, numero) {
        return "-Items";
      });

        if(this.Cfg["CfgControls"]){
              if(this.Cfg["CfgControls"][Prop]){          
                var Cfgbtns=this.Cfg["CfgControls"][Prop];          
                for(var key in Cfgbtns){
                    li.appendChild(this.CreaBoton(Cfgbtns[key],Prop,key));
                }
              } 
        }


    }

    TrearFields(Data,Item){

      var newCfg="";
     this.FiltrarProp(this.UltimoId);
      var Prop=this.CfgPropActual;     
      newCfg=this.Cfg['CfgItems'][Prop];
      

       if(newCfg){
          if(!newCfg.IdObj){
            newCfg["IdObj"]='PlainText';
            newCfg["Tipo"]='Fld';
        
        }             
        }else{
          newCfg={};
          newCfg["IdObj"]=newCfg.IdObj;
          newCfg["Tipo"]='Fld';
        }
        
        newCfg["Value"]=Data; 
        newCfg["Param"]={"UltId":Item};         

                var Fld=new Actuadores(Item);
                  Fld.ClaseRouter=this.Cfg.ClaseRouter;
                  Fld.TipoObjPadre=this.Cfg.TipoObjPadre;
                  Fld.IdObjPadre=this.id;
                  Fld.ClassEvt=newCfg.ClassEvt;         
                  Fld.Cfg=newCfg;         
                  Fld.Iniciar();

        return Fld.Out;

    }

    traerSpanActuador(value,IdAct){


      const span = document.createElement('span');
      span.classList.add('ItemProp');
      var Act = '';
      if (this.Cfg) if (this.Cfg)
      {
          Act = this.TrearFields(value,IdAct);
          
      }     
      if (Act == '') span.textContent = value;
      else{
        span.innerHTML = Act;
      } 

      return span;

 }

  CrearButtonHeader(buttonsContainer,Titulo,ContBody){

    const AllButton = document.createElement('button');
    AllButton.classList.add('toggle-all-button');

    if(Titulo=='Expand All')AllButton.id='BtnExpandAll';
    if(Titulo=='Collapse All')AllButton.id='BtnCollapseAll';

    AllButton.textContent =Titulo;
    AllButton.addEventListener('click', () => {

      if(Titulo=='Expand All') new JsonViewer(this.id).ClickExpandAll(ContBody);
      if(Titulo=='Collapse All') new JsonViewer(this.id).ClickCollapseAll(ContBody);

    });

    buttonsContainer.appendChild(AllButton);
  }

  ClickCollapseAll(container){

        const allExpanded = container.querySelectorAll('.toggle-button:not(.collapsed)');
        allExpanded.forEach((el) => {
          el.textContent = '+';
          const subList = el.parentElement.querySelector('ul');
          if (subList) {
            subList.classList.add('collapsed');
          }
        });

  }
  ExpandOne(element,toggleButton){

    if(!element){
        toggleButton=document.getElementById(toggleButton);
        var lipadre=toggleButton.closest('li');
        element = lipadre.querySelector('ul');
    }

        toggleButton.textContent = '-';
        element.classList.remove('collapsed');

  }
  ClickExpandAll(container){

    const allCollapsed = container.querySelectorAll('.collapsed');
    allCollapsed.forEach((el) => {
      const toggleButton = el.parentElement.querySelector('.toggle-button');
      if (toggleButton) {
         this.ExpandOne(el,toggleButton);
      }
    });

  }

  NuevoItem(idUl,NroItem,Estruct,CfgBtns){     

    this.CfgBtns=CfgBtns;
    var xJV = this.ObjEvt.parentNode.closest('.JsonViewer');
    var selUL = xJV.querySelector("#Ul-" + idUl);
   
    var toggleButton = selUL.parentElement.querySelector('.toggle-button')
    this.ExpandOne(selUL,toggleButton);

    this.UltimoId=idUl; 

    var json={};
    var keynro=NroItem;
        json[keynro]={};
    for(var key in Estruct){

      if (typeof Estruct[key] === "object"){
        
          json[keynro][key]={};

      }
      else {

        var txt =Estruct[key];
        if(txt=='GenerarId')txt=key+"-"+NroItem;
        json[keynro][key]=txt;
      }

    }
      
    this.FormatJsonItems(json, selUL, 2, idUl, idUl);
   
    var ulnew=selUL.querySelector("#Ul-"+idUl+"-"+NroItem); 
    ulnew.classList.remove('collapsed');

    var hijos = ulnew.querySelectorAll('.collapsed');
    hijos.forEach(function(hijo) {
      hijo.classList.remove('collapsed');
    });

  }

  DelItem(DomLi){

    DomLi.remove();
 
  }


  

}