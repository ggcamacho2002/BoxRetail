
function serialize(form) {
	var data = new FormData(form);
	var output = "";
	for (const [key, value] of data.entries()) {
	  output += `${key}=${encodeURIComponent(value)}&`;
	}
	return output.slice(0, -1);
  }


  
	
	function SerializeFormAJson(Formu,NombreParam){
	
		if($('#'+Formu).length>0){
	
			var serialJson= $('#'+Formu).serialize();
			
				if(serialJson!=''){
					var aux=serialJson.split('&');
	
					var spl='';
					
						for (var i = 0; i < aux.length; i++) {
							if(aux[i]!=''){
								var parIgual=aux[i].split('=');
								
								if(parIgual[1]!=''){
									spl+='"'+parIgual[0]+'":"';
									spl+=aux[i].split('=')[1]+'",';
								}
							}
						}
						
	
					var ejson='';	
					
					if(spl!=''){	
						var txt='{';
						txt += spl.substring(0, spl.length - 1);	
						txt+='}';
						
						ejson='"'+NombreParam+'":'+txt;
					}
					
					return ejson;
				}
		} 
	}
	
	
	function SerializeFormToArray(Formu){
		
		if($('#'+Formu).length>0){
		   var serialJson= $('#'+Formu).serialize();
		
			if(serialJson!=''){
	
				var aux=serialJson.split('&');
				var items={};
						
					for (var i = 0; i < aux.length; i++) {
						if(aux[i]!=''){
							var parIgual=aux[i].split('=');
							
							if(parIgual[1]!=''){
	
								var auxitem=parIgual[0].split('-');
								if(!items[auxitem[1]])items[auxitem[1]]={};
								items[auxitem[1]][auxitem[0]]=parIgual[1];
										
							}
						}
					}
	
			}
		 return items;
		} 
	}
	
	
	
		function ArrayOneColumAJson(Formu,NombreParam){
	
			var items=SerializeFormToArray(Formu);
			if(items!=undefined){
				var txt='';
				var ejson='';
				for (var it = 0; it < items.length; it++) {
					ejson='';
					for (var key in items[it]) {
					
						ejson+='"'+key+'":"'+items[it][key]+'",';
			
					}
					txt+= ejson.substring(0, ejson.length - 1);	
					txt+=',';
				}	
			
	
	
				if(txt!=''){	
					var txtfinal='';
					txtfinal = txt.substring(0, txt.length - 1);				
					var retjson='"'+NombreParam+'":{'+txtfinal+'}';
				}
			}	
			return retjson;	
		}
	
	
		function ArraySimpleAJson(items,NombreParam){
	
			var txt='';
	
			for (var it = 0; it < items.length; it++) {
		
				txt+='"'+it+'":"'+items[it]+'",';
				
			}
			if(txt!=''){	
				var txtfinal='';
				txtfinal = txt.substring(0, txt.length - 1);				
				var retjson='"'+NombreParam+'":{'+txtfinal+'}';
			}
		
			return retjson;
		
		}
	
