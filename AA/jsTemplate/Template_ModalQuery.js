class TempModalQuery{

	constructor(idTbl){
	
		this.Out='';

		this.idTbl=idTbl;
		this.OrdenOptions='';
		this.FiltrosRapidos='';
		this.FiltrosAvz='';
		this.Param='';
	    this.Cfg;
	};

	async Iniciar(){	

		this.OrdenOptions=this.TraerOrdenOptions();
		this.FiltrosRapidos=this.TraerFiltrosRapidos();
		this.FiltrosAvz=this.TraerFiltrosAvz();
		this.Param=this.TraerParam();

		var html='';

			if(this.FiltrosRapidos!='')html+=this.TraerDivFiltros();
			if(this.FiltrosAvz!='')html+=this.TraerDivFiltrosAvz();
			if(this.OrdenOptions!='')html+=this.TraerDivOrden();
			                         html+=this.TraerDivParam();
			this.Out=html;


	};

	TraerFiltrosRapidos(){	

		var html='';
		var Items=this.Cfg.FiltrosRap;
		var idsrc='';
		var label='';
		
		Items=new ToolsGral().OrdenarItemsHtml(Items);
		
			for (var key in Items) {
		
				idsrc=Items[key].idSrc;
				label=Items[key].Label;

				var Enter='onkeypress="if(event.which == 13) {new SuperTabla(`'+this.idTbl+'`).Eventos(this,`SuperTabla_Buscar`);}"';

				if(Items[key]){
					html+=`<input id="Item${key}-${key}-FltRap-frmST_${this.idTbl}" name="${idsrc}" dsid="${idsrc}" type="text" value="" placeholder="${label} .........." class="MQFiltroRap InputText" ${Enter} >`;
				}

		}
		
		return html;	
	
	};

	TraerParam(){	

		var html='';
		var Items=this.Cfg.Param;
		var idsrc='';
		var label='';
		var value='';

		for (var key in Items) {
		
				idsrc=Items[key].idSrc;
				label=Items[key].Label;
				value=Items[key].Value;

				var Enter='onkeypress="if(event.which == 13) {new SuperTabla(`'+this.idTbl+'`).Eventos(this,`SuperTabla_Buscar`);}"';

				if(Items[key]){
					html+=`<span class="MQspanParam">${label}</span>`;
					html+=`<input  id="Item${key}-${key}-Param-frmST_${this.idTbl}" name="${idsrc}" dsid="${idsrc}" type="text" value="${value}" placeholder="${label} .........." class="MQFiltroRap InputText" ${Enter} >`;
				}

		}
		
		return html;	
	
	};

	
	TraerFiltrosAvz(){	
		var htmlFiltro='';

		if(this.Cfg.FiltroAvz){
				
			if(Object.keys(this.Cfg.FiltroAvz).length>0){
							htmlFiltro+='<select id="'+this.idTbl+'-idSrcBsqAvz">';
							htmlFiltro+='<option value="" selected="SELECTED">---Campo---</option>';//TEXTO	

						for (var key in this.Cfg.FiltroAvz) {
							htmlFiltro+='<option value="'+this.Cfg.FiltroAvz[key].idSrc+'">'+this.Cfg.FiltroAvz[key].Label.toUpperCase();+'</option>';
						}
						htmlFiltro+='</select>';
				}
		}
		
		return htmlFiltro;	
	
	};


	TraerOrdenOptions(){	

		var htmlOptOrden='';
		for (var key in this.Cfg.Orden) {
			htmlOptOrden+='<option value="'+key+'">'+this.Cfg.Orden[key].Label.toUpperCase();+'</option>';

		}
		
	return htmlOptOrden;	
	
	};


	TraerDivFiltros(){	
	
	var html='';	
			html+='<div id="Div-'+this.idTbl+'-FiltrosRap">';
				html+='<form id="frm'+this.idTbl+'-FiltrosRap" name="frm'+this.idTbl+'-FiltrosRap" method="POST"  onsubmit="return false;">';
					html+='<div class="ItemModal">';
					html+='<span class="ItemModalhead">FILTROS RAPIDOS</span>';
					html+='<span id="Span-'+this.idTbl+'-FltRapido" class="ItemModalBody MQFiltroRapido">';
								html+=this.FiltrosRapidos;
					html+='</span>';
					html+='<input id="FLT-id-'+this.idTbl+'" name="FLT-id" type="hidden"/>';			
					html+='</div>';
				html+='</form>';
			html+='</div>';
			

			return html;
		
	};
		

	TraerDivFiltrosAvz(){
	
		var Opciones='';
		Opciones+='<select id="'+this.idTbl+'-TipoBsqAvz" onchange="if(this.value==`Nulo`){new SuperTabla(`'+this.idTbl+'`).Eventos(this,`MQAddFiltroAvz`);}">';							
		Opciones+='<option value="" selected="SELECTED">---TIPO---</option>';//TEXTO
		Opciones+='<option value="Like">CONTIENE</option>';//TEXTO
		Opciones+='<option value="LikeIni">COMIENZA CON</option>';//TEXTO
		Opciones+='<option value="LikeFin">TERMINA CON</option>';//TEXTO
		Opciones+='<option value="NoLike">NO CONTIENE</option>';//TEXTO
		Opciones+='<option value="NoLikeIni">NO COMIENZA CON</option>';//TEXTO
		Opciones+='<option value="NoLikeFin">NO TERMINA CON</option>';//TEXTO		
		Opciones+='<option value="Igual">ES IGUAL A</option>';//NUMERO/FECHA
		Opciones+='<option value="Mayor">MAYOR A</option>';//NUMERO/FECHA
		Opciones+='<option value="Menor">MENOR QUE</option>';//NUMERO/FECHA
		Opciones+='<option value="MayorIgual">MAYOR/IGUAL A</option>';//NUMERO/FECHA
		Opciones+='<option value="MenorIgual">MENOR/IGUAL A</option>';//NUMERO/FECHA
		Opciones+='<option value="NoIgual">NO ES IGUAL A</option>';//NUMERO/FECHA
		Opciones+='<option value="Nulo">VACIO O NULO</option>';//NUMERO/FECHA
		Opciones+='</select>';
		
		var html='';
		html+='<div id="Div-'+this.idTbl+'-FiltrosAvz">';	
		html+='<div class="ItemModal">';
		html+='<span class="ItemModalhead">FILTROS AVANZADOS</span>';
		html+='<span id="Span-'+this.idTbl+'-FltAvz" class="MqFltAvzMenu">';						
							html+='<span>'+this.FiltrosAvz+'</span>';
							html+='<span>'+Opciones+'</span>';
							var acc='onkeypress="if(event.which == 13) {new SuperTabla(`'+this.idTbl+'`).Eventos(this,`MQAddFiltroAvz`);}"';
							html+='<span><input id="'+this.idTbl+'-FiltrosAvzValor" value=""  tipoobj="Filtro" placeholder="VALOR BSQ ....." type="text" '+acc+'/></span>';
		html+='</span>';
		
		
		html+='<span>';
					html+='<form id="frm'+this.idTbl+'-FiltrosAvz" name="frm'+this.idTbl+'-FiltrosAvz" method="POST"  onsubmit="return false;">';
								html+='<div id="'+this.idTbl+'-FiltrosAvzContent" class="FiltrosAvzContent"></div>';
					html+='</form>';
		html+='<span>';

		html+='</div>';
		html+='</div>';

		return html;

	}	
	TraerDivOrden(){	

		var html='';	

				html+='<div id="Div-'+this.idTbl+'-Orden">';	
				html+='<div class="ItemModal">';
				html+='<span class="ItemModalhead">ORDENAMIENTO</span>';
				html+='<span id="Span-'+this.idTbl+'-ORDEN" class="MqOrdenMenu">';						
							html+='<select id="'+this.idTbl+'-SelectOrden" style="min-width:100px;">';							
							html+='<option value="" selected="SELECTED">---SELECCIONAR---</option>';
							//html+='<option value="prod_nombre">NOMBRE</option>';
							html+=this.OrdenOptions;
							html+='</select>';	
							html+='<td><input type="button" id="btnOrdenAsc-'+this.idTbl+'" class="btn btn_blanco_azul" value="ASC" onclick="new SuperTabla(`'+this.idTbl+'`).Eventos(this,`MQAddOrden`,`asc`)"/>';						
							html+='<input type="button" id="btnOrdenDesc-'+this.idTbl+'" class="btn btn_blanco_azul" value="DESC" onclick="new SuperTabla(`'+this.idTbl+'`).Eventos(this,`MQAddOrden`,`desc`)"/></td>';	
				html+='</span>';	
				html+='<span>';
						html+='<form id="frm'+this.idTbl+'-Orden" name="frm'+this.idTbl+'-Orden" method="POST"  onsubmit="return false;">';
						html+='<div id="'+this.idTbl+'-OrdenContent" class="OrdenContent"></div>';
						html+='</form>';
				html+='<span>';

				html+='</div>';
				html+='</div>';

		return html;
	};
	
	TraerDivColumnas(){	
		var html='';
		   html+='<div id="Div-'+this.idTbl+'-Columns" class="ItemModal">';
			   html+='<form id="frm'+this.idTbl+'-Columns" name="frm'+this.idTbl+'-Columns" method="POST"  onsubmit="return false;">';
			   html+='<div class="sortable">';
					html+='<div class="ItemModalhead">COLUMNAS</div>';
					html+='<div>';
							html+='<ul id="ListColumns-'+this.idTbl+'">';
							html+=this.TraerColumnsQuery();				  
							html+='</ul>';
					html+='</div>';		
			   html+='</div>';		
			   html+='</form>';
		   html+='</div>';   
		   return html;
	};

	TraerDivParam(){	
	
		var html='';	
				html+='<div id="Div-'+this.idTbl+'-Param">';
					html+='<form id="frm'+this.idTbl+'-Param" name="frm'+this.idTbl+'-Param" method="POST"  onsubmit="return false;">';
						html+='<div class="ItemModal">';
						html+='<span class="ItemModalhead">PARAMETROS</span>';
						html+='<span id="Span-'+this.idTbl+'-Param" class="ItemModalBody MQParam">';
									html+=this.Param;
						html+='</span>';
						html+='<input id="FLT-id-'+this.idTbl+'" name="FLT-id" type="hidden"/>';			
						html+='</div>';
					html+='</form>';
				html+='</div>';
				
	
				return html;
			
		};



}




