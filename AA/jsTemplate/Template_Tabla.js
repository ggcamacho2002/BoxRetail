class TempTabla{

	constructor(Cfg){

		Object.assign(this, Cfg);
		this.Out;		
	};

	async Render(){
		
		var Html=`
			<div class='TableContainer' style='width:100%'>
				<table  id='${this.id}' ${this.Style} class="table ${this.CssClass}" Tipo="Tabla">
				<thead>
					<tr>                   
							${this.TraerHeader()}
					</tr>
				</thead>
				<tbody id='${this.id}-tbody'>
						   
				</tbody>
				</table>
			</div>
		`;
	
		this.Out=`<form id='frm${this.id}' data-idCfg='${this.id}' IdObjPadre='${this.IdObjPadre}' Tipo="Tabla" idCfg="${this.id}" idselecto='' itemselecto='0'  onsubmit='return false;'>${Html}</form>`;
	
	}
	TraerHeader(){
	
		var th='';
		var i=0;
		this.CfgItems=new ToolsGral().OrdenarItemsHtml(this.CfgItems);
		for (var key in this.CfgItems) {        
	 
			if(this.CfgItems[key])
			    if(this.CfgItems[key].IdObj!='Hidden'){
					var ClassCss='';
					if(this.ColsDragg==1)ClassCss+='TblColDrag';	

						if(this.CfgItems[key].LabelHdr)th+=`<td class='Tblcol ${ClassCss}'>${this.CfgItems[key].LabelHdr}</td>`;
							else{if(this.CfgItems[key].Label)th+=`<td class='blcol ${ClassCss}'>${this.CfgItems[key].Label}</td>`;
									else th+=`<td class='blcol ${ClassCss}'></td>`}
	
					i++;  
				}
		}        
		this._ColsVisibles=i;
				
	   return th;
	}	

	TraerTipoObj(IdObjActual,Tipo){
		if(IdObjActual!='Hidden' && Tipo=='Fld'){
			  if(this.Modo=='RO' || this.Modo=='PICK' || this.Modo=='SEL'){
					var aux='PlainText';
					if(IdObjActual=='PlainTextNumero' || IdObjActual=='PlainTextMoneda' || IdObjActual=='PlainTextPorcentaje')aux=IdObjActual;
				 return aux;
				}
			  else{return IdObjActual;}
	 
		}else return IdObjActual;
	 
	 }


	 async TrearItemsBody(Data,item){
	 
	  var Html='';

	  		this.CfgItems=new ToolsGral().OrdenarItemsHtml(this.CfgItems);	

		  for (var key in this.CfgItems) {
			 
				if(this.CfgItems[key]['idSrc'])this.CfgItems[key]["Value"]=Data[this.CfgItems[key]['idSrc']];
				if(Data['DSid']){this.CfgItems[key]["DSid"]=Data['DSid'];}
	 
	 
				var Fld=new Actuadores(this.CfgItems[key].id);
				  Fld.ClaseRouter=this.Cfg.ClaseRouter;
				  Fld.TipoObjPadre='Tabla';
				  Fld.IdObjPadre=this.id;
				  Fld.ClassEvt=this.CfgItems[key].ClassEvt;
				  Fld.IdObj=this.TraerTipoObj(this.CfgItems[key].IdObj,this.CfgItems[key].Tipo);
				  Fld.DSid=Data['DSid'];                    
				  Fld.NroItem=item;                    
				  Fld.Cfg=this.CfgItems[key];          
	 
				  await Fld.Iniciar();
	 
				  if(this.CfgItems[key].IdObj!='Hidden') Html+=`<td>${Fld.Out}</td>`;  
				  else  Html+=`<td style='display:none'>${Fld.Out}</td>`;                          
	  
		  } 
	   
	   var ClassEvt=`ClassEvt="row-frm${this.id}"`;
	   return `<tr id='row-${item}-frm${this.id}' item="${item}" dsid='${Data['DSid']}' ${ClassEvt}>${Html}</tr>`;
	 }
	 
	 async TraerBody(){
	 var Html='';
		 if(typeof this.Data === 'object' && this.Data !== null){    
	 
			   var item=0;
			   for (var key in this.Data) {
					
					 Html+=`${await this.TrearItemsBody(this.Data[key],item)}`;
					 item++;
			   }
	 
		 }else{
			   Html+=`<tr><td colspan='${this._ColsVisibles}' ><b class="SINRESULT">...........</b></td></tr>`;
		 }     

	   this.Out=Html;
	 }

	
	
	}
	