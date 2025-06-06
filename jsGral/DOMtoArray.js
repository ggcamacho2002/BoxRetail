class DOMtoArray {

constructor(){
	
};

	SerializeFormToArray(Formu){
		var serialJson='';
		var domFormu=document.getElementById(Formu);
		if(domFormu)	
		if(domFormu.length>0){
		var domFormu = document.getElementById(Formu);
		if (domFormu) {
		   serialJson = serialize(domFormu);
		}
		
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
	ItemsMultiParam(Input){

		var Param={};
		var Items={};
		for (var it in Input) {
						
				for (var key in Input[it]) {
				
					Param[key]=Input[it][key];
		
				}		
				Items[it]={};
				Items[it]=Param;
					
		}	
			
	return Items;	
	}

	ItemsOneParam(Input){

	var Param={};
	var value='';
	for (var key in Input) {

		if(Input[key].name){
			if(Input[key].value)value=Input[key].value;else value=Input[key].innerHtml;
			
			if(value!='' && value!=undefined && value!="undefined")Param[Input[key].name]=value;
		}								
	}					
	return Param;	
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	ByClassOne(CssClass){
				var items=document.getElementsByClassName(CssClass);
				return this.ItemsOneParam(items);	
	}
		
	ByFormOne(idform) {
			var form = document.getElementById(idform);
			if(form)return this.ItemsOneParam(form.elements);
	}

		
	ByFormMultiple(idform){
			var items=this.SerializeFormToArray(idform);
			if(items)return items;	
	}
		

}