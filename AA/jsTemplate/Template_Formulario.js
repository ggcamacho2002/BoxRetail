class TempFormulario{

	constructor(Cfg){
		Object.assign(this, Cfg);
		this.htmlCfgItems='';
		this.htmlCtrl='';
		this.Out;
	};


	async Render(){	

		await this.TraerCfgItems();
		await this.TraerControls();
		var footer='';
		var CtrCab='';
		if(this.Cfg.Tipo=='Horizontal')if(this.htmlCtrl!='')CtrCab=`<div id="CtrCab-${this.id}" class="FormularioCtrCab ${this.Cfg.Tipo}" >${this.htmlCtrl}</div>`; 
		if(this.Cfg.Tipo=='Vertical')if(this.htmlCtrl!='')footer=`<div id="Footer-${this.id}" class="FormularioFooter ${this.Cfg.Tipo}">${this.htmlCtrl}</div>`; 
		
		var style='';
		if(this.Style!="")style=`style="${ToolsTraerStyle(this.Cfg.Style)}"`;


		var html='';				
						html+=`
					
						<div class="Formulario ${this.Cfg.CssClass}" ${style}>
								  <form id="${this.id}" name="${this.id}"  method="POST" onsubmit="return false;" IdObjPadre="${this.IdObjPadre}" Tipo="Formulario" itemselecto="0" KeyPadre='' > 
									<div  id="CfgItems-${this.id}" class="FormularioBodyCfgItems ${this.Cfg.Tipo}">${this.htmlCfgItems}${CtrCab}</div> 
									${footer}
									</form>	
						 </div>`;
						   
			   
		this.Out= html;
	
	};


	TraerHeader(){
	
		var th='';
		var i=0;
		for (var key in this.Cfg.CfgItems) {        
	 
			if(this.Cfg.CfgItems[key])
			    if(this.Cfg.CfgItems[key].IdObj!='Hidden'){
					var ClassCss='';
					if(this.Cfg.ColsDragg==1)ClassCss+='TblColDrag';	

						if(this.Cfg.CfgItems[key].LabelHdr)th+=`<td class='Tblcol ${ClassCss}'>${this.Cfg.CfgItems[key].LabelHdr}</td>`;
							else{if(this.Cfg.CfgItems[key].Label)th+=`<td class='blcol ${ClassCss}'>${this.Cfg.CfgItems[key].Label}</td>`;
									else th+=`<td class='blcol ${ClassCss}'></td>`}
	
					i++;  
				}
		}        
		this._ColsVisibles=i;
				
	   return th;
	}
	VerificarEventos(id){
		var ClassEvt='';
		var Eventos=null;
		if(this.CfgEventos){
		   Eventos=Object.values(this.CfgEventos).find(evt => evt.ClassEvt === id);
		  	if(Eventos)if(Eventos.ClassEvt)ClassEvt=Eventos.ClassEvt;
		   }
		return ClassEvt;
	}

	async TraerCfgItems(){	
        
		this.Cfg.CfgItems=new ToolsGral().OrdenarItemsHtml(this.Cfg.CfgItems);
		for (var key in this.Cfg.CfgItems) {
			var idItem=this.Cfg.CfgItems[key]["id"];
			var idSrc=this.Cfg.CfgItems[key]["idSrc"];
			if(!this.Cfg.CfgItems[key].Value)this.Cfg.CfgItems[key].Value='';  

					if(this.Data)if(this.Data[0]){if(this.Data[0][idSrc]!=undefined)this.Cfg.CfgItems[key]['Value']=this.Data[0][idSrc];}        

					var Fld=new Actuadores(idItem);
					Fld.TipoObjPadre='Formulario';
					Fld.IdObjPadre=this.id;
					Fld.ClassEvt=this.Cfg.CfgItems[key].ClassEvt;
					Fld.TagLabel=1;
					Fld.PlaceHolder=0;					
					Fld.DSid=this.DSid;
					Fld.Cfg=this.Cfg.CfgItems[key];
					await Fld.Iniciar();					
				   
					if(this.Cfg.CfgItems[key].IdObj!='Hidden'){
						this.htmlCfgItems+=`<div class="FormularioBoxCfgItems ${this.Cfg.Tipo}">${Fld.Out}</div>`;
					}      
					else{this.htmlCfgItems+=Fld.Out;}
	
		} 
	};

	async TraerControls(){	
		  
		    this.Cfg.Ctrl=new ToolsGral().OrdenarItemsHtml(this.Cfg.Ctrl);
		   for (var key in this.Cfg.Ctrl) {
			var idItem=this.Cfg.Ctrl[key]["id"];     
									   
					var Ct=new Actuadores(idItem);
					Ct.TagLabel=1;
					Ct.PlaceHolder=0;
					Ct.ClassEvt=this.Cfg.Ctrl[key].ClassEvt;
					Ct.TipoObjPadre='Formulario';
					Ct.IdObjPadre=this.id;
					Ct.DSid=this.DSid;
					Ct.Cfg=this.Cfg.Ctrl[key];
					await Ct.Iniciar();
				   
					this.htmlCtrl+='<div class="FormularioBoxCtrl">'+Ct.Out+'</div>';     
	
		} 
	};


	
	
	}
	