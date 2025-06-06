class Dialog {
    constructor(id) {
      this.id=id;
      this.Param;
      this.ObjEvt;


      this.Titulo='';
      this.idObjPadre='';
      this.Cfg={};
      this.idCfg;
      this.element;
      this.parent;

      this.ClassEvtHide=null;//Publico
      this.Titulo=null;//Publico
      this.HeaderCtrl=null;//Publico
      this.BodyHtml='';//Publico
      this.FooterHtml='';//Publico
      this.Style=null;//Publico
    }

    VerificarEstado(){

          this.element = document.getElementById(this.id);
          if(this.element)this.Out=1;
          else this.Out=0;

    }


    CargarCfg(){

      if(this.Cfg==undefined || this.Cfg=='' || Object.keys(this.Cfg).length==0)this.Cfg=CfgDialog(this.id);  


      if(this.Cfg!=null)if(this.Cfg.ClassEvtHide!=null)this.ClassEvtHide={Clase:'Dialog',IdObj:this.id,IdEvtClick:this.Cfg.ClassEvtHide};
  
      if(this.Ancho==null || this.Ancho=="undefined")if(this.Cfg!=null)if(this.Cfg.Ancho!=null)this.Ancho=this.Cfg.Ancho;
      if(this.Alto==null || this.Alto=="undefined")if(this.Cfg!=null)if(this.Cfg.Alto!=null)this.Alto=this.Cfg.Alto;
      if(this.ClassEvtHide==null || this.ClassEvtHide=="undefined")if(this.Cfg!=null)if(this.Cfg.ClassEvtHide!=null)this.ClassEvtHide=this.Cfg.ClassEvtHide;
      if(this.Titulo==null || this.Titulo=="undefined")if(this.Cfg!=null)if(this.Cfg.Titulo!=null)this.Titulo=this.Cfg.Titulo;
      if(this.HeaderCtrl==null || this.HeaderCtrl=="undefined")if(this.Cfg!=null)if(this.Cfg.HeaderCtrl!=null)this.HeaderCtrl=this.Cfg.HeaderCtrl;
      if(this.BodyHtml==null || this.BodyHtml=="undefined") this.BodyHtml='';//Publico
      if(this.FooterHtml==null || this.FooterHtml=="undefined") this.FooterHtml='';//Publico
      if(this.ClassEvtHide==null || this.ClassEvtHide=="undefined") this.ClassEvtHide={Clase:'Dialog',IdObj:this.id,IdEvtClick:'Dialog_Hide'};
      if(this.Style==null || this.Style=="undefined") if(this.Cfg!=null)if(this.Cfg.Style!=null)this.Style=this.Cfg.Style;

  
  }

  async Eventos(ObjEvt,IdEvt,Param) {
   
     this.CargarCfg();
    this.IdEvtActual=IdEvt;

    if(ObjEvt)this.ObjEvt=ObjEvt;
    if(Param)this.Param=Param;
    

    switch(IdEvt) {
		case "Dialog_Iniciar":await this.Iniciar();break;
		case "Dialog_IniciarSinClear":await this.ContinuarInicio();break;
		case "Dialog_Hide":this.Hide();break;
		case "Dialog_PadreHide":this.PadreHide();break;
    }
}


    eliminarAllDialog(){

      var elementos = document.querySelectorAll('div.Dialog');

      // Recorre la lista de elementos encontrados y los elimina
      elementos.forEach(function(elemento) {
        elemento.parentNode.removeChild(elemento);
      });

    }

    async Iniciar() {
     
    
         this.eliminarAllDialog();
        await this.ContinuarInicio();

    }
   async ContinuarInicio() {
     
    
      var xDom=document.getElementById(this.id);
      if(!xDom){

                  this.element = document.getElementById('Dialog');
                  this.parent =  document.getElementById('BoxVistas');
                 
                  var style= ToolsTraerStyle(this.Style);


                  if (!this.element) {
                      var div = document.createElement('div');
                      div.id = this.id;
                      div.className = 'Dialog';
                      div.setAttribute('idObjPadre', this.idObjPadre);
                      div.style.cssText +=style;
                      this.parent.appendChild(div);
                      if (!this.element) this.element = document.getElementById(this.id);
                      await this.Template();
                  }

                  this.element.onmousedown = this.dragMouseDown.bind(this);

      }

          if(this.Cfg.TipoObj!='' && this.Cfg.TipoObj!=undefined && this.Cfg.TipoObj!=null){
              
              var cl=InvokeClase(this.Cfg.TipoObj,this.Cfg.IdObj);
                  cl.Box="DialogBody-"+this.id;

                  var evt='';
                  if(this.Cfg.EvtInicio!='' && this.Cfg.EvtInicio!=undefined)evt=this.Cfg.TipoObj+'_'+this.Cfg.EvtInicio;
                  else evt=this.Cfg.TipoObj+'_Iniciar';

                  await cl.Eventos('',evt,this.Cfg.Param);

               

          }



    }

    LlenarBody(Html){

      var dialog = document.getElementById(`DialogBody-${this.id}`);

        if (dialog) {
            dialog.innerHTML = Html;
        }
      
    }




   async Template(){

      
     var Controles='';
    if(this.HeaderCtrl)if(Object.keys(this.HeaderCtrl).length>0)Controles=await this.InitHeaderControles();


      var BtnClose=`<button type="button" value="" class="Icon BotonIconClose" TipoObjPadre='Dialog' IdObjPadre='${this.id}' classevt="Dialog_Hide" onclick="new ${this.ClassEvtHide.Clase}('${this.ClassEvtHide.IdObj}').Eventos(this,'${this.ClassEvtHide.IdEvtClick}');"></button>`
     var html=`
          <div id="DialogHeader-${this.id}" class="DialogHeader"><div class='DialogTitulo'>${this.Titulo.toUpperCase()}</div><div class='DialogCtrl'>${Controles}</div><div class='DialogClose'>${BtnClose}</div></div>
          <div id="DialogBody-${this.id}" class="DialogBody">${this.BodyHtml}</div>
          <div id="DialogFooter-${this.id}" class="DialogFooter">${this.FooterHtml}</div>
     `;
     this.element.insertAdjacentHTML('beforeend',html);

    }

     async   InitHeaderControles(){	
          var ctrh='';			
          var controles=this.HeaderCtrl;
          for (var key in controles) {
              
                var ctr=new Actuadores(controles[key].id);
                ctr.TipoObjPadre="Dialog";
                ctr.IdObjPadre=this.id;
                ctr.Cfg=controles[key];
               await ctr.Iniciar();
                ctrh+=ctr.Out;		

                
          
          }	     
          return ctrh;	
        };

        dragMouseDown(e) {
              e = e || window.event;
              // Lista de etiquetas que, si se hace clic en ellas, no se iniciará el arrastre
              const excludedTags = ['INPUT', 'BUTTON', 'SELECT', 'TEXTAREA', 'A'];
              // También puedes excluir por clases, por ejemplo: 'class-name'
          
              // Comprobar si el elemento clicado o sus ancestros tienen una etiqueta excluida
              let element = e.target;
              while (element) {
                  if (excludedTags.includes(element.tagName) /* || element.classList.contains('class-name') */) {
                      // No hacer nada si se hizo clic en un elemento excluido
                      return;
                  }
                  element = element.parentElement;
              }
          
              e.preventDefault();
              // Iniciar el proceso de arrastre
              this.pos3 = e.clientX;
              this.pos4 = e.clientY;
              document.onmouseup = this.closeDragElement.bind(this);
              document.onmousemove = this.elementDrag.bind(this);
        }
        elementDrag(e) {
              e = e || window.event;
              e.preventDefault();
              this.pos1 = this.pos3 - e.clientX;
              this.pos2 = this.pos4 - e.clientY;
              this.pos3 = e.clientX;
              this.pos4 = e.clientY;
              this.element.style.top = (this.element.offsetTop - this.pos2) + "px";
              this.element.style.left = (this.element.offsetLeft - this.pos1) + "px";
          
              // Limit movement to parent area
              if (this.element.offsetTop < this.parent.offsetTop) {
                this.element.style.top = this.parent.offsetTop + "px";
              }
              if (this.element.offsetLeft < this.parent.offsetLeft) {
                this.element.style.left = this.parent.offsetLeft + "px";
              }
              if (this.element.offsetTop + this.element.offsetHeight > this.parent.offsetTop + this.parent.offsetHeight) {
                this.element.style.top = (this.parent.offsetTop + this.parent.offsetHeight - this.element.offsetHeight) + "px";
              }
              if (this.element.offsetLeft + this.element.offsetWidth > this.parent.offsetLeft + this.parent.offsetWidth) {
                this.element.style.left = (this.parent.offsetLeft + this.parent.offsetWidth - this.element.offsetWidth) + "px";
              }
        }
      
        closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
        }

        Show() {
          const element = document.querySelector(`#${this.id}`);
          if(element)element.classList.remove('Hide');
      }
      
      PadreHide() {

        const element = this.ObjEvt.closest('.Dialog');
        if(element)element.remove();

      }
      Hide() {
          const element = document.querySelector(`#${this.id}`);
          if(element)element.remove();
      }
        Remove(){
          const element = document.querySelector(`#${this.id}`);
          if(element)element.remove();
        }
      }