class TempCard{

	constructor(Cfg){
		Object.assign(this, Cfg);
		this.Titulo='';
		this.SubTitulo='';
		this.BtnHide='1';
		this.Style='';
		this.idHeaderForm='';
		this.Fill='';
		
		this.Out;		
	};
	CargarCfg(){

		if(this.Cfg.Titulo)if(this.Cfg.Titulo!=null && this.Cfg.Titulo!=''){this.Titulo=this.Cfg.Titulo;} 
		if(this.Cfg.HeaderForm)if(this.Cfg.HeaderForm!=null && this.Cfg.HeaderForm!=''){this.HeaderForm=this.Cfg.HeaderForm;} 
		if(this.Cfg.SubTitulo)if(this.Cfg.SubTitulo!=null && this.Cfg.SubTitulo!=''){this.SubTitulo=this.Cfg.SubTitulo;} 
		if(this.Cfg.BtnHide)if(this.Cfg.BtnHide!=null && this.Cfg.BtnHide!=''){this.BtnHide=this.Cfg.BtnHide;} 
		if(this.Cfg.Style)if(this.Cfg.Style!=null && this.Cfg.Style!=''){this.Style=`style='${ToolsTraerStyle(this.Cfg.Style)}'`;} 
		if(this.Cfg.Style)if(this.Cfg.Style!=null && this.Cfg.Style!=''){this.Style=`style='${ToolsTraerStyle(this.Cfg.Style)}'`;} 
		


   }
	
	async Render(){

			this.CargarCfg();

			this.Out=`
						<div id='${this.id}' class="Card ${this.Cfg.CssClass}" Tipo="Card" idObjPadre="${this.idObjPadre}" ${this.Style}>
							${await this.TraerHeader()}
							<div id='${this.id}-Body' class="card-body"></div>
							<div id='${this.id}-Footer' class="card-Footer">${await this.TraerFooter()}</div>
						
					  </div>
				`;
			  
		}
		
	async TraerHeader(){
		var ret='';   
	
			if(this.Cfg.Titulo!=''){
	
					ret=`
								<div id='${this.id}-Header' class="card-header">
								
									<span class='card-titulo'>${this.Titulo}</span>
									<span class='card-subtitulo'>${this.SubTitulo}</span>
									<span class='card-HeaderCenter'>${await this.TraerHeaderFormulario()}</span>
									<span class='card-header-ctrl'>	<form id='frm${this.id}' IdObjPadre='${this.IdObjPadre}' Tipo="Tabla" idCfg="${this.id}" idselecto=''  itemselecto='0'  onsubmit='return false;'>${await this.InitHtmlHeaderControles()}${this.HtmlCardHide()}</form></span>
									
								</div>
					`;
			}    
			
		return ret; 
			  
	}

	async TraerHeaderFormulario(){

		var Html='';

		if(this.idHeaderForm!=''){

			var Frm=new Formulario(this.idHeaderForm);    
			Frm.ObjEvt=this.ObjEvt;                    
			await Frm.Iniciar();
			Html=Frm.Out;
			
		}

		return Html;
	}

	async InitHtmlHeaderControles(){	
		var ctrh='';			
		if(this.Cfg!=undefined){
				if(this.Cfg.Ctrl){
					var controles=this.Cfg.Ctrl;
						controles=new ToolsGral().OrdenarItemsHtml(controles);
							for (var key in controles) {
									
										var ctr=new Actuadores(controles[key].id);
										ctr.TipoObjPadre='Card';
										ctr.ClassEvt=controles[key].ClassEvt;
										ctr.IdObjPadre=this.id;
										ctr.Cfg=controles[key];
										await ctr.Iniciar();
										ctrh+=ctr.Out;					
							
							}	
							return ctrh;
				}else return '';

			}else return '';
			
	};

	async TraerFooter(){
		var stl='';    
		var ret='';   
	
			if(this.Footer!='' && this.Footer!=undefined){
				return this.Footer;
			}return ''; 
			  
	}
	

	HtmlCardHide(){
	
	  var xHtml='';
	  
       if(this.BtnHide=='1'){
		
				xHtml=`<button type="button" value="" id='BtnHide_${this.id}' class="btn btnRojoPastel" onclick="new Card('${this.id}').Hide();">Close</button>`;

		}     
	
	  return xHtml;
	
	}
	

	
	
	}
	