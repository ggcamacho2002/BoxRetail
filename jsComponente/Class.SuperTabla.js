class SuperTabla {

	constructor(id){

		this.id=id;//Privada
		this.idTbl=this.id+'-TBL';//Privada	
		this.Dom;//Privada	
		this.In//Ingreso Libre
		this.Out='';//Salida/Publica
		this.Box=null;
		this.TipoObjPadre=null;
		this.IdObjPadre=null;
		this.Cfg;//privada	

		this.ObjEvt;//Publica
		this.StaticCfg=1;//Publica
		this.TablaModo=null;//Publica
		this.Data=null;//Publica

		this.CfgEventos=null;//Modificadores
		this.CfgHeader=null;//Modificadores
		this.CfgTabla=null;//Modificadores
		this.CfgModalQuery=null;//Modificadores
		this.OrdenManual=null;
		this.CfgBaul=null;//Modificadores
		this.idTabla=null;
		this.DomTabla=null;
				
		this.CfgFields=null;
		this.CfgFiltros=null;
		this.CfgCtrl=null;
		this.CfgParam=null;



		var element = document.getElementById(this.id);
		if(element) {this.Dom = element;}
		
		
	};

	async Iniciar(){			

		if(!this.Dom){	
			await this.Eventos(null,"SuperTabla_Construir",null);
			await this.Eventos(this.ObjEvt,'SuperTabla_Buscar',null);
		}else {
			await this.Eventos(this.ObjEvt,'SuperTabla_Buscar',null);
		}
	}	


	FiltrarObj(Selectos,All){
		var xRet={};
		for (var key in Selectos) {

			if(All[Selectos[key]]){

				xRet[Selectos[key]]=All[Selectos[key]];

			}else{

				if(All[Selectos[key]['IdObj']]){

					xRet[Selectos[key]['IdObj']]=All[Selectos[key]['IdObj']];
				}		

			}		
		
		}	

		return xRet;
	}


	CargarCfg(){


			if(this.Cfg==null || Object.keys(this.Cfg).length==0)this.Cfg=CfgSuperTabla(this.id);
			
			if(this.Cfg!=null){
				
					if(this.idTabla==null){
						if(this.Cfg.idTabla)this.idTabla=this.Cfg.idTabla;
						else if(this.CfgTabla)if(this.Cfg.Tabla)this.idTabla=this.Cfg.Tabla.id;
					}	   
					if(this.CssClass==null)this.CssClass=this.Cfg.CssClass;
					if(this.Style==null)if(this.Cfg.Style)this.Style=`style='${ToolsTraerStyle(this.Cfg.Style)}'`;
					
					if(this.Box==null)if(this.Cfg.Box)this.Box=this.Cfg.Box;
					if(this.CfgTabla==null)if(this.Cfg.CfgTabla)this.CfgTabla=this.Cfg.CfgTabla;
					if(this.CfgModalQuery==null)if(this.Cfg.CfgModalQuery)this.CfgModalQuery=this.Cfg.ModalQuery;
					if(this.CfgBaul==null)if(this.Cfg.CfgBaul)this.CfgBaul=this.Cfg.Baul;					
					if(this.TablaModo==null)if(this.Cfg.TablaModo)this.TablaModo=this.Cfg.ModoInicio;
					if(this.CfgEventos==null)if(this.Cfg.CfgEventos)this.CfgEventos=this.Cfg.CfgEventos;
					if(this.TipoObjPadre==null)if(this.Cfg.TipoObjPadre)this.TipoObjPadre=this.Cfg.TipoObjPadre;
					if(this.IdObjPadre==null)if(this.Cfg.IdObjPadre)this.IdObjPadre=this.Cfg.IdObjPadre;
					if(this.OrdenManual==null)if(this.Cfg.OrdenManual)this.OrdenManual=this.Cfg.OrdenManual;
			}


			if(this.CfgHeader!=null){this.Cfg.Header=this.CfgHeader;}
		
	}


	async Refresh(){			

		await this.Eventos(this.ObjEvt,'Buscar',null);

	}	
    

	async Construir(){

    		var cl=new TempSuperTabla(this);
				cl.Cfg=this.Cfg;
				await cl.Render();	
				var Html=cl.Out;
				
				if(this.Box){
					if(this.Box!=''){			

								var clEvt=new ManejarDOM(this.id);
								clEvt.Box=this.Box;
								clEvt.Html=Html;
								await clEvt.InsertarDOM(); 

								
						}else this.Out=cl.Out;
					}else this.Out=cl.Out;
	
	}	

	///////////////////////////////////////////////////////////////////////////////
	TraerModoActual(){
		if(this.Dom)this.TablaModo=this.Dom.attributes.ModoActual.value;
	}	
	
	CambiarModo(Modo){
		
		this.TablaModo=Modo;
		if(this.Dom)this.Dom.attributes.ModoActual.value=Modo;

	switch(Modo){
		case 'RO':this.TablaModo='RO';break;//RO
		case 'EDIT'://EDIT
				this.TablaModo='EDIT';
		break;
		case 'SEL'://SEL
			this.TablaModo='RO';
			this.Cfg.TrEvent={Clase:'SuperTabla', IdObj:this.id,IdEvtClick:'GuardarBaul',Param:{}};
		break;
		case 'PICK'://PICK
			this.TablaModo='RO';
		break;
		case 'LIBRE'://PICK
			this.TablaModo='LIBRE';
		break;
	}					
	}




	async Eventos(ObjEvt,idEvt,InParam){	

		this.CargarCfg();
		
		if(ObjEvt!=null && ObjEvt!=null && ObjEvt!='undefined')
		this.ObjEvt=ObjEvt;
		
		if(InParam!=null && InParam!="null" && InParam!='undefined')
					this.Param=CargarParam(InParam);
		

		switch(idEvt){
			case 'SuperTabla_Iniciar':
				await this.Iniciar();
			break;
			case 'SuperTabla_Construir':				
					await this.Construir();				
						this.Dom=document.getElementById(this.id);
			break;
			case 'SuperTabla_Buscar':
				this.TraerModoActual();
				this.CambiarModo(this.TablaModo);
				await this.Busqueda();
				
			break;
			case 'SuperTabla_ModalQuery':
				this.IniciarMQ();				
			break;
			case 'SuperTabla_BuscarByRelacion':				
					await this.BuscarByRelacion();						
			break;
			case 'SuperTabla_PadreBuscar':				
					await this.PadreBuscar();
						
			break;
			case 'SuperTabla_BuscarByLocalStore':				
					await this.BuscarByLocalStore();						
			break;
			case 'SuperTabla_CambiarModoRO':
				this.Dom=document.getElementById(this.id);
				this.CambiarModo('RO');
				await this.Busqueda();
			break;
			case 'SuperTabla_CambiarModoEdit':
				this.Dom=document.getElementById(this.id);
				this.CambiarModo('EDIT');
				await this.Busqueda();
			break;
			case 'SuperTabla_SumatoriaTablaToField':
				this.SumatoriaTablaToField();
			break;
			case 'SuperTabla_CompletarFooter':
				this.CompletarFooter();
			break;
			case 'SuperTabla_OrdenManual':
				this.STOrdenManual();
			break;
			case 'SuperTabla_GuardarOrdenManual':
				await this.GuardarOrdenManual();
			break;
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

			case 'Libre':
				await this.Busqueda();
			break;			
			case 'BorrarST':
				document.getElementById(this.id).parentNode.innerHTML='';
			break;


			case 'CambiarModoSEL':
				this.Dom=document.getElementById(this.id);
				this.CambiarModo('SEL');
				await this.Busqueda();
				var cl=this.InstBaul();	
				cl.AbrirBaul();
			break;
			case 'CambiarModoPICK':
				this.Dom=document.getElementById(this.id);
				this.CambiarModo('PICK');
				await this.Busqueda();
			break;
			case 'LimpiarFiltros':
					DOMDatosLimpiarFiltros(this.id);
					await this.Busqueda();
			break;
			/*case 'AbrirModalQuery':
				this.IniciarMQ();
			break;*/
			case 'MQAddFiltroAvz':				
			var cl=new ModalQuery(this.id);
				cl.Cfg=this.Cfg.ModalQuery;
				cl.AddFiltroAvz();
				await this.Busqueda();
			break;
			case 'MQDelFiltroAvz':				
			var cl=new ModalQuery(this.id);
				cl.Cfg=this.Cfg.ModalQuery;
				cl.QuitarItemFiltro(this.ObjEvt);
				this.Busqueda();
			break;			
			case 'MQAddOrden':				
			var cl=new ModalQuery(this.id);
				cl.Cfg=this.Cfg.ModalQuery;
				cl.ObjEvt=this.ObjEvt;
				cl.AddOrden(InParam);
				await this.Busqueda();
			break;	

			case 'AbrirMBiCI':
				this.IniciarMBiCI();
			break;
			case 'AbrirMBiCU':
				this.IniciarMBiCU();
			break;
			case 'AbrirBaul':		
					var cl=this.InstBaul();	
						cl.AbrirBaul();
			break;			
			case 'CerrarBaul':
					var cl=this.InstBaul();	
						cl.CerrarBaul();			
			break;			
			case 'GuardarBaul':									
					var cl=this.InstBaul();	
						cl.GuardarBaul();
			break;
			case 'DeleteOneBaul':				
					var cl=this.InstBaul();	
						cl.DeleteOneBaul();
			break;
			case 'AbrirAccionesBaul':				
					var cl=this.InstBaul();	
						cl.AbrirAccionesBaul();
			break;
			case 'WorkFlows':			
					new Workflows(this.Param.IdObj).Iniciar();
			break;
			case 'ModalInternoInit':
					this.ModalInterno("Init");
			break;
			case 'ModalInternoHide':			
					this.ModalInterno("Hide");
			break;
			case 'ModalInternoShow':		
					this.ModalInterno("Show");				
			break;

			default:
				
			break;

		}

	};

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////OPERACIONES CON TABLA//////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////


	GetBdXidPadre(){

			var frmPadre=document.getElementById(this.Cfg.IdObjPadre);
           return frmPadre.getAttribute('idselecto');

	}



	async InstTabla(){

		var cl=new Tabla(this.idTabla);
			cl.Cfg=this.CfgTabla;
			cl.ObjEvt=this.ObjEvt;
			cl.TipoObjPadre="SuperTabla";
			cl.IdObjPadre=this.id;
			cl.Box=this.id+"-Body";
			cl.Data=this.Data;
			cl.Modo=this.TablaModo;			

			return cl;

	}

	async Busqueda(){	

				var cl=await this.InstTabla(); 	
				await cl.Iniciar();

				if(this.Data==null){
					cl.CfgFiltros=DOMDatosTraerFiltros(this.id);
					cl.CfgOrden=DOMDatosTraerOrdenamiento(this.Dom);
					cl.CfgParam=DOMDatosTraerParametros(this.id);	
				}else{
					cl.Data=this.Data;				
				}

				if(this.Cfg){
						
						if(this.Cfg.IdObjPadre){
									if(this.Cfg.IdObjPadre!='Null' && this.Cfg.IdObjPadre!=''){
									
										var idPadre=this.GetBdXidPadre();				

											var qpadre={
												idSrc:"DSid",
												Conex: "AND",
												Tipo:"Igual",
												Valor:idPadre,
											}
					
											var cant=Object.keys(cl.CfgFiltros).length;
											cl.CfgFiltros[cant]=qpadre;
									
								}
						}
				}
				
				await cl.Eventos(this.ObjEvt,"Tabla_Buscar");


	}

	async BuscarByRelacion(){	

				var cl=await this.InstTabla(); 	
				await cl.Iniciar();

				if(this.Data==null){
					cl.CfgFiltros=DOMDatosTraerFiltros(this.id);
					cl.CfgOrden=DOMDatosTraerOrdenamiento(this.Dom);
					cl.CfgParam=DOMDatosTraerParametros(this.id);	
				}else{
					cl.Data=this.Data;				
				}

				var clRel=new Relaciones(this.Param[0].IdObj);
				await clRel.Eventos(this.ObjEvt,"Relaciones-JoinFiltros",null);	

				var NewFiltros={};
				var relFiltros={};
					relFiltros=clRel.Out;   
				
    			if(cl.CfgFiltros){
					
					       if(Object.keys(cl.CfgFiltros).length>0){
								var i=0;
								for(let key in cl.CfgFiltros){NewFiltros[i]=cl.CfgFiltros[key];i++;}	
								for(let key in relFiltros){NewFiltros[i]=relFiltros[key];i++;}							
								cl.CfgFiltros=NewFiltros;
							}
						   	else{cl.CfgFiltros=relFiltros;}
				}
				else{cl.CfgFiltros=relFiltros;}				
				
				await cl.Eventos(this.ObjEvt,"Tabla_Buscar");				
			


	}
	async BuscarByLocalStore(){

			var cl=await this.InstTabla(); 	
			await cl.Iniciar();

			if(this.Data==null){
				cl.CfgFiltros=DOMDatosTraerFiltros(this.id);
				cl.CfgOrden=DOMDatosTraerOrdenamiento(this.Dom);
				cl.CfgParam=DOMDatosTraerParametros(this.id);	
			}else{
				cl.Data=this.Data;				
			}

			var LocalSValue=localStorage.getItem(this.Param[0].Value);
			var LocalScampo=this.Param[1].ItemObj;

			var NewFiltros={};
			var relFiltros={};
				relFiltros[0]={};   

				var qpadre={
					idSrc:LocalScampo,
					Conex: "AND",
					Tipo:"Igual",
					Valor:LocalSValue,
				}
				relFiltros[0]=qpadre;   


		
			if(cl.CfgFiltros){
				
					if(Object.keys(cl.CfgFiltros).length>0){
							var i=0;
							for(let key in cl.CfgFiltros){NewFiltros[i]=cl.CfgFiltros[key];i++;}	
							for(let key in relFiltros){NewFiltros[i]=relFiltros[key];i++;}							
							cl.CfgFiltros=NewFiltros;
						}
						else{cl.CfgFiltros=relFiltros;}
			}
			else{cl.CfgFiltros=relFiltros;}				
			
			await cl.Eventos(this.ObjEvt,"Tabla_Buscar");			
		
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////GuardarOrdenManual//////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////

	STOrdenManual(){

			if(this.OrdenManual){
				if(this.OrdenManual){
					 
						ToolsOrdenamientoTablas(this);

				}
			}

	}
	
	async GuardarOrdenManual(){
		var tablaOrden = document.getElementById("System-TablaOrdenamiento");
		var itemsOrden = tablaOrden.querySelectorAll('input[name="DSorden"]');
		
		var SetFields = {};
		
		itemsOrden.forEach((item, index) => {
			var id = item.getAttribute('data-dsid');
			var value = item.value;
		
			SetFields[index] = {"DSid": id, "DSorden": value};
		});


		var cl=new Tabla(this.idTabla);
		cl.Cfg=this.CfgTabla;
		await cl.Eventos(this.ObjEvt,'Tabla_UpdateMultiplesIds',SetFields);


		var cl=new Eventos();
			cl.ClaseActual=this;
		await cl.DispatchEvent(this.ObjEvt, 'click', this.OrdenManual.ClassEvtPostGuardar);		

		return cl;

	}



	//////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////OPERACIONES//////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////


	ModalInterno(Accion){

		switch(Accion){
			case 'Init':
				var MI=document.getElementById(this.id+'-ModalInterno');
					MI.innerHTML=this.In;
					MI.style.display="flex";
			break;
			case 'Hide':
				document.getElementById(this.id+'-ModalInterno').style.display="none";
			break;
			case 'Show':
				document.getElementById(this.id+'-ModalInterno').style.display="flex";
			break;
		}

	}

	TableContarItems(){
		var cl=new Tabla(this.id+'-TBL');
			cl.ContarItems();	
		this.Out=cl.Out;
	}

	TableNuevoItemDOM(){

		  	var cl=this.InstTabla();
			cl.Cfg=this.CfgTabla;
			cl.NuevoItemDOM(this.Data);

	}
	InstBaul(){

		if(this.Cfg.Baul){
			var cl=new Baul(this.id+'-Baul');
			cl.Cfg=this.Cfg.Baul;
			cl.ObjEvt=this.ObjEvt;
			cl.TipoObjPadre='SuperTabla';
			cl.IdObjPadre=this.id;
			cl.idTbl=this.idTbl;

			return cl;	
		}
	}

	TraerItemSelecto(){	
		var cl=this.InstTabla()
		cl.TraerItemSelecto();
		this.Out=cl.Out;
	}	
	TraerIdSelecto(){	
		var cl=this.InstTabla()
			cl.TraerIdSelecto();
			this.Out=cl.Out;
	}
	CrearModalFull(Titulo,Size){
		var Mf=new ModalFull('ModalFull-'+this.id);
		Mf.GralSize=Size;
		Mf.HeaderTitulo=Titulo;
		Mf.Iniciar();

	}
	async IniciarMBiCI(){

		this.CrearModalFull('INSERT REGISTRO','xxl');
		
		var cl=new BiFormSel(this.Cfg.MBiCI);
		cl.ObjEvt=this.ObjEvt;
		cl.Box="ModalFull-"+this.id+"-0-0";
		cl.Iniciar();

		var cl=new ControlPromesas('CambioEstadoST');
			cl.Cfg={"IdDOMObserver":this.Cfg.MBiCI,"Mutation":{"Tipo":"attributes","Param":{"attributeName":"estado"}},"Clase":"SuperTabla","IdObj":this.id,"IdEvt":"Buscar"};
			cl.Iniciar();
		
	}
	async IniciarMBiCU(){

		this.CrearModalFull('UPDATE REGISTRO','xxl');

		var cl=new BiFormSel(this.Cfg.MBiCU);
		cl.Modo='EDIT';
		cl.ObjEvt=this.ObjEvt;
		cl.Box="ModalFull-"+this.id+"-0-0";
		cl.Iniciar();

		var cl=new ControlPromesas('CambioEstadoST');
		cl.Cfg={"IdDOMObserver":this.Cfg.MBiCU,"Mutation":{"Tipo":"attributes","Param":{"attributeName":"estado"}},"Clase":"SuperTabla","IdObj":this.id,"IdEvt":"Buscar"};
		cl.Iniciar();
	

	}
	IniciarMQ(){
			var cl=new ModalQuery(this.id);
			cl.Cfg=this.Cfg.ModalQuery;
			cl.Iniciar();
	}
	TraerEventos(id,Param){

		var ret={};
		ret['ClickSelector']={TipoEvt:"onclick",TipoObj:'BiFormSel',IdObj:this.id, IdEvt:'ClickSelector',Param:Param}
	
		if(id==null)return ret;
		else return ret[id];	
	}	


	SumatoriaTablaToField(){

		var GetFieldTabla=this.Param[0].ItemObj;
		//var SetTipoObj=this.Param[1].TipoObj;
		var SetIdObj=this.Param[1].IdObj;
		var SetItemObj=this.Param[1].ItemObj;

		var idFldSet=SetItemObj+'-0-Fld-'+SetIdObj;

		var Valor=0;
		var ValorCampo='';

			var tbl=document.getElementById(this.idTabla);

			var camposASumar = tbl.querySelectorAll('[name="' + GetFieldTabla + '"]'); // Obtiene los campos a sumar
			camposASumar.forEach(function(campo) {
				ValorCampo= Traer_Valor_Html(campo);
				Valor += parseFloat(ValorCampo);
			});

		    document.getElementById(idFldSet).value=Valor;

	}


	
	async CompletarFooter(){	

		var auxFooter=this.Cfg.Footer.Fields;
		this.DomTabla=document.getElementById(this.idTabla);

		for (var key in auxFooter) {						

			await this.FooterSetCampos(auxFooter[key]);

		}	
	}	


	async FooterSetCampos(FldFooter){	

			if(FldFooter.Param){

					var auxParam=FldFooter.Param;		
					var Valor=0;		

					if(Object.keys(auxParam).length>0){
			
							if(auxParam[0]){
			
									switch(auxParam[0]['Key']){
											case 'SumatoriaIdSrc':												

													var camposASumar = this.DomTabla.querySelectorAll('[name="' + FldFooter.idSrc + '"]'); // Obtiene los campos a sumar
													var ValorCampo = '';
													camposASumar.forEach(function(campo) {
														ValorCampo= Traer_Valor_Html(campo);
														Valor += parseFloat(ValorCampo);
													});

											break;
											case 'Calculado':
												
												var form = document.getElementById('frm'+this.id+'-Footer');
												var fields = form.querySelectorAll('.Fld');

												var formula=auxParam[0]['Value'];

												Valor=this.evaluarFormulaConCampos(formula,fields);
											
											break;
									}
									
									var  auxid=FldFooter.id+"-0-Fld-"+this.id;
									document.getElementById(auxid).value=Valor;
			
			
							}
			
					}
				}
	};

	evaluarFormulaConCampos(formula, fields) {

		let ids = formula.match(/\b[a-zA-Z_]+[a-zA-Z0-9_]*\b/g);

		ids = [...new Set(ids)];
	
		let formulaParaEvaluar = formula;

		ids.forEach(id => {
			
			let campo = Array.from(fields).find(input => input.id.split('-')[0] === id);
	
			let valorCampo = campo ? campo.value : 0;

			let regex = new RegExp("\\b" + id + "\\b", "g");
			formulaParaEvaluar = formulaParaEvaluar.replace(regex, valorCampo);
		});

		try {
			let resultado = new Function('return ' + formulaParaEvaluar)();
			return resultado;
		} catch (error) {
			console.error("Error al evaluar la fórmula:", error);
			return null;
		}
	}



}

