class ToolsGral{

	constructor(){	
	
    	this.Out='';
    	this.ObjPadreCfg='';
		
	}
 
	OrdenarItemsHtml(Items) {
		var NewItems = [];
		var OrdenSinEspecificar = [];
	
		if (Items) {
			for (var key in Items) {
				if (Items[key]) {
					if (Items[key].Orden !== undefined) {
						// Convertir `Orden` a número si es posible, para mantener la coherencia
						var itemConOrden = Object.assign({}, Items[key]); // Hacer una copia para evitar modificar el objeto original
						itemConOrden.Orden = parseFloat(itemConOrden.Orden);
						if (isNaN(itemConOrden.Orden)) {
							// Si `Orden` no es un número, tratarlo como sin especificar
							OrdenSinEspecificar.push(itemConOrden);
						} else {
							NewItems.push(itemConOrden);
						}
					} else {
						// Manejar elementos sin `Orden` de forma separada
						OrdenSinEspecificar.push(Items[key]);
					}
				}
			}
		}
	
		// Ordenar `NewItems` basado en `Orden`
		NewItems.sort(function(a, b) {
			return a.Orden - b.Orden;
		});
	
		// Añadir elementos sin especificar `Orden` al final
		NewItems = NewItems.concat(OrdenSinEspecificar);
	
		return NewItems;
	}

	}

