class TempSuperTabla{

	constructor(Cfg){
		Object.assign(this, Cfg);

		this.Out='';
		this.HtmlHeaderFiltros='';
		this.HtmlHeaderParam='';
		this.HtmlHeaderControles='';
		this.HtmlModalQuery='';
		this.HtmlFooter='';

	};


	Html(){			
		var cab='';
		var footer='';
		if(this.Cfg.Titulo!='')cab=`<span class='StablaCabTitulo'>${this.Cfg.Titulo}</span>${this.HtmlHeaderFiltros}${this.HtmlHeaderParam}${this.HtmlHeaderControles}`;
		if(this.HtmlFooter!='')footer=`<div id='${this.id}-Footer' class='StablaFooter'>${this.HtmlFooter}</div>`;

		return  `<div id='${this.id}' Tipo='SuperTabla' ModoActual='${this.Cfg.ModoInicio}' ${this.Style} class="Stabla ${this.CssClass}">  
			
						<div id='${this.id}-Header' class='StablaCab'>
								${cab}
						</div>
						<div id='${this.id}-Body' class='StablaBody'></div>						
						${footer}					
						<div id='${this.id}-ModalInterno' class='ModalBox' style='display:none;'>${this.HtmlModalQuery}</div>
								
			</div>`; 

	};
		

	async Render(){	    

		
		this.Titulo=this.InitTitulo();
		if(this.Cfg){
			if(this.Cfg.Header){
					if(this.Cfg.Header.Filtros)if(Object.keys(this.Cfg.Header.Filtros).length>0)this.HtmlHeaderFiltros=await this.InitHtmlHeaderFiltros();else this.HtmlHeaderFiltros='';
					if(this.Cfg.Header.Param)if(Object.keys(this.Cfg.Header.Param).length>0)this.HtmlHeaderParam=await this.InitHtmlHeaderParam();else this.HtmlHeaderParam='';
					if(this.Cfg.Header.Ctrl)if(Object.keys(this.Cfg.Header.Ctrl).length>0)this.HtmlHeaderControles=await this.InitHtmlHeaderControles();else this.HtmlHeaderControles='';
			}
			if(this.Cfg.Footer)if(Object.keys(this.Cfg.Footer).length>0)this.HtmlFooter=await this.InitHtmlFooter();else this.HtmlFooter='';
			if(this.Cfg.ModalQuery)if(Object.keys(this.Cfg.ModalQuery).length>0)this.HtmlModalQuery=await this.InitHtmlModalQuery();else this.HtmlModalQuery='';
		}


		this.Out=this.Html();

	};

	InitTitulo(){	
		return "<div id='boxcab-"+this.id+"-titulo' class='StablaCabTitulo'><span><p>"+this.Cfg.Titulo+"</p></span></div>";
	};


	async InitHtmlHeaderFiltros(){	

	
		var filt='';			
		var auxFltr=this.Cfg.Header.Filtros;	
		var TipoObjPadre=this.Cfg.TipoObjPadre;
		if(!TipoObjPadre)TipoObjPadre='SuperTabla';
		
		auxFltr=new ToolsGral().OrdenarItemsHtml(auxFltr);
		
		for (var key in auxFltr) {
			
					var Fltr=new Actuadores(auxFltr[key].id);
					Fltr.TipoObjPadre='SuperTabla';
					Fltr.ClassEvt=auxFltr[key].ClassEvt;
					Fltr.IdObjPadre=this.id;
					Fltr.TagLabel=0;
					Fltr.PlaceHolder=1;
					Fltr.Cfg=auxFltr[key];
					await Fltr.Iniciar();
					filt+=Fltr.Out;
		
		}	

		var html="<div id='boxcab-"+this.id+"-Fltr' class='StablaCabFltr'>";
		html+="<form id='frm"+this.id+"-FiltrosCab' name='frm"+this.id+"-FiltrosCab' IdObjPadre='"+this.idObjPadre+"' method='POST'  onsubmit='return false;'>"; 
		html+=filt;
		html+="</form>";
		html+="</div>";

		return html;	
	};

	

	async InitHtmlFooter(){	
		var html='';
		if(this.Cfg.Footer.Fields){

					var filt='';			
					var auxFooter = combinarObjetosSecuencia(this.Cfg.Footer.Fields, this.Cfg.Footer.Ctrl);		
					
					auxFooter=new ToolsGral().OrdenarItemsHtml(auxFooter);
					if(Object.keys(auxFooter).length>0){
						for (var key in auxFooter) {
						
							var fld=new Actuadores(auxFooter[key].id);
							fld.TipoObjPadre='SuperTabla';
							fld.ClassEvt=auxFooter[key].ClassEvt;
							fld.IdObjPadre=this.id;
							fld.TagLabel=0;
							fld.PlaceHolder=1;
							fld.Cfg=auxFooter[key];
							await fld.Iniciar();
							filt+=fld.Out;
				
						}	
						///   html="<div id='boxFooter-"+this.id+"' class='StablaCabFltr'>";
							html+="<form id='frm"+this.id+"-Footer' name='frm"+this.id+"-Footer' IdObjPadre='"+this.idObjPadre+"' method='POST'  onsubmit='return false;'>"; 
							html+=filt;
							html+="</form>";
						//    html+="</div>";		
						
					}
		}

		return html;	
	};


	async InitHtmlHeaderParam(){	
		var filt='';			
		var auxParam=this.Cfg.Header.Param;		
		auxParam=new ToolsGral().OrdenarItemsHtml(auxParam);
		for (var key in auxParam) {
				
					var Param=new Actuadores(auxParam[key].id);
					Param.TipoObjPadre='SuperTabla';
					Param.IdObjPadre=this.id;
					Param.ClassEvt=auxParam[key].ClassEvt;
					Param.TagLabel=0;
					Param.PlaceHolder=1;
					Param.Formu='Param';
					Param.Cfg=auxParam[key];
					await Param.Iniciar();

					filt+=Param.Out;
		
		}	

		var html="<div id='boxcab-"+this.id+"-Param' class='StablaCabParam'>";
		html+="<form id='frm"+this.id+"-Param' name='frm"+this.id+"-Param' method='POST' IdObjPadre='"+this.idObjPadre+"' onsubmit='return false;'>"; 
		html+=filt;
		html+="</form>";
		html+="</div>";

		return html;	
	};

	
	async InitHtmlHeaderControles(){	
		var ctrh='';			
		var controles=this.Cfg.Header.Ctrl;
		controles=new ToolsGral().OrdenarItemsHtml(controles);
		for (var key in controles) {
				
					var ctr=new Actuadores(controles[key].id);
					ctr.ClaseRouter=this.Cfg.ClaseRouter;
					ctr.TipoObjPadre='SuperTabla';
					ctr.ClassEvt=controles[key].ClassEvt;
					ctr.IdObjPadre=this.id;
					ctr.Cfg=controles[key];
					await ctr.Iniciar();
					ctrh+=ctr.Out;					
		
		}	
		var html="<div id='boxcab-"+this.id+"-ctr' class='StablaCabCtrl'>";
		html+=ctrh;
 		html+="</div>";

		return html;	
	};

	async InitHtmlModalQuery(){	

			var ModalQ=new TempModalQuery(this.id);
			ModalQ.Cfg=this.Cfg.ModalQuery;
			await ModalQ.Iniciar();
			return ModalQ.Out;	
	
	};



}




