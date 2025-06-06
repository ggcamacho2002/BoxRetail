class ControlPromesas{

	constructor(id){	
	
		this.id=id;this.Entrada;
		this.Cfg;//{"IdDOMObserver":idBCFS,"Mutation":{"Tipo":"attributes","Param":{"attributeName":"estado"},"Clase":"SuperTabla","IdObj":this.id,"IdEvt":"Buscar"};
		this.Out='';
	
	
	}
	
		Iniciar(){
		
			const div = document.getElementById(this.Cfg.IdDOMObserver);
		
			const xPromesa = new Promise((resolve, reject) => {
				const observer = new MutationObserver((mutations) => {
					mutations.forEach((mutation) => {
						var Valid=0;
						if (mutation.type === "attributes" && mutation.attributeName == this.Cfg.Mutation.Param.attributeName) {Valid=1;}

						if(Valid==1){
							resolve(`{"Clase":"${this.Cfg.Clase}","IdEvt":"${this.Cfg.IdEvt}","IdObj":"${this.Cfg.IdObj}"}`);
							observer.disconnect();
						}

					});
				});
				
				if(this.Cfg.Mutation.Tipo=='attributes')observer.observe(div, { attributes: true });

			});
			
			xPromesa.then(function(param) {
				var aux=JSON.parse(param);
					eval(`new ${aux.Clase}('${aux.IdObj}').Eventos('','${aux.IdEvt}');`);
			});
				

		}
	

	}

