class ModalQuery{
	constructor(idST) {
	  this.idST = idST;
	  this.idTbl = this.idST + "-TBL";
	  this.CfgST = CfgSuperTabla(idST, "");
	  this.FormTabla;
	  this.Cfg;
	  this.Out;
	}
  
	Iniciar() {
	  var modal = this.idST + "-ModalInterno";
	  var DOMModal = document.getElementById(modal);
	  var hijos = DOMModal.children;
  
	  if (hijos.length == 0) {
		var TempModal = new TempModalQuery(this.idST);
		TempModal.Cfg = this.Cfg;
		TempModal.FormTabla = this.FormTabla;
		TempModal.Iniciar();
  
		DOMModal.innerHTML = TempModal.Out;
  
		this.Mostrar(modal);
	  } else {
		if (DOMModal.style.display == "none") {
		  this.Mostrar(modal);
		} else {
		  this.Ocultar(modal);
		}
	  }
	}
  
	Mostrar(idmodal) {
	  document.getElementById(idmodal).style.display = "flex";
	}
	Ocultar(idmodal) {
	  document.getElementById(idmodal).style.display = "none";
	}
	OcultarTodos() {
	  var modales = document.getElementsByClassName("ModalBox");
	  for (var i = 0; i < modales.length; i++) {
		modales[i].style.display = "none";
	  }
	}
  
	AddOrden(tipo) {
	  var valor = document.getElementById(this.idST + "-SelectOrden").value;
	  var valortxt = document.querySelector("#" + this.idST + "-SelectOrden option:checked").textContent;
	  var idSrc = this.Cfg.Orden[valor].idSrc;
  
	  if (valor != "") {
		var ordenVal = document.getElementById(this.idST + "-OrdenVal-" + valor);
		if (ordenVal) {
		  alert("El idSrc Orden seleccionado --> ya Existe !!!!!!");
		} else {
		  var tr = `<div id='${this.idST}-OrdenItem-${valor}' class='ItemsOrden'>`;
		  if (tipo == "asc") tr += `<span>${valortxt} ( ASC )</span>`;
		  if (tipo == "desc") tr += `<span>${valortxt} ( DESC )</span>`;
  
		  tr += `<span><input type='button' class='btn btnRojoPastel' value='DEL' onclick="new ModalQuery('${this.idST}').QuitarItemOrden('${valor}');"></span>`;
		  tr += `<input id='${this.idST}-OrdenVal-${valor}' class='OrdenSerial' name='${idSrc}' value='${tipo}' style='display:none'/>`;
		  tr += "</div>";
  
		  document.getElementById(this.idST + "-OrdenContent").innerHTML += tr;
		}
  
		new SuperTabla(this.idST).Eventos("", "SuperTabla_Buscar");
	  }
	}
  
	QuitarItemOrden(valor) {
	  var ordenItem = document.getElementById(this.idST + "-OrdenItem-" + valor);
	  ordenItem.parentNode.removeChild(ordenItem);
	  new SuperTabla(this.idST).Eventos("", "SuperTabla_Buscar");
	}
  

	AddFiltroAvz() {
		let tr = "";
		const item = document.getElementById(this.idST + "-FiltrosAvzContent").childElementCount;
	  
		const tipoTXT = document.querySelector(`#${this.idST}-TipoBsqAvz option:checked`).textContent;
		const idSrcTXT = document.querySelector(`#${this.idST}-idSrcBsqAvz option:checked`).textContent;
		const valorTXT = document.getElementById(this.idST + "-FiltrosAvzValor").value;
	  
		const conecTXT = `
		  <select id="${this.idST}-ConectorBsqAvz-${item}" name="Conex-${item}">
			<option value="AND" selected="SELECTED">Y</option>
			<option value="OR">O</option>
		  </select>
		`;
	  
		const tipo = document.getElementById(this.idST + "-TipoBsqAvz").value;
		const idSrc = document.getElementById(this.idST + "-idSrcBsqAvz").value;
		//const idSrc = this.Cfg.FiltroAvz[idSrc].idSrc;
		const valor = document.getElementById(this.idST + "-FiltrosAvzValor").value;
	  
		if (idSrc && tipo) {
		  if (tipo === "Nulo" || valor) {
			document.getElementById(this.idST + "-idSrcBsqAvz").value = "";
			document.getElementById(this.idST + "-TipoBsqAvz").value = "";
			document.getElementById(this.idST + "-FiltrosAvzValor").value = "";
			
			var idItem=this.idST+"-FiltrosAvzItem-"+item;
			tr += `<div id="${idItem}" class="ItemFltAvz">`;
			tr += `<span>${conecTXT}</span>`;
			tr += `<span>${idSrcTXT}</span>`;
			tr += `<span>${tipoTXT}</span>`;
			tr += `<span>${valorTXT}</span>`;
			tr += `<span><input type="button" class="btn btnRojoPastel" value="DEL" onclick="new SuperTabla('${this.idST}').Eventos(this,'MQDelFiltroAvz');"></span>`;
			tr += `<input id="${this.idST}-FtlAvzidSrc-${item}" name="idSrc-${item}" value="${idSrc}" style="display:none"/>`;
			tr += `<input id="${this.idST}-FtlAvzTipo-${item}" name="Tipo-${item}" value="${tipo}" style="display:none"/>`;
			tr += `<input id="${this.idST}-FtlAvzValor-${item}" name="Valor-${item}" value="${valorTXT}" style="display:none"/>`;
			tr += "</div>";
	  
			document.getElementById(this.idST + "-FiltrosAvzContent").insertAdjacentHTML('beforeend', tr);
			new SuperTabla(this.idST).Eventos("", "SuperTabla_Buscar");
		  } else {
			alert("Debe llenar el valor buscado o seleccionar el tipo (Vacio-Nulo) !!!!");
		  }
		} else {
		  alert("Debe llenar idSrc y tipo !!!!");
		}
	  }

	QuitarItemFiltro(element) {
	  var filtrosAvzItem = element.closest('.ItemFltAvz');
	  filtrosAvzItem.parentNode.removeChild(filtrosAvzItem);
	  new SuperTabla(this.idST).Eventos("", "SuperTabla_Buscar");
	}
  
	HideShowColumn(col) {
	  if (col.value == "HIDE") {
		col.value = "SHOW";
		col.className = "btnSmall btnAzul";
		col.closest("li").style = "";
		col.closest("li").dataset.estado = "SHOW";
	  } else {
		if (col.value == "SHOW") {
		  col.value = "HIDE";
		  col.className = "btnSmall btnRojoPastel";
		  col.closest("li").style = "background: gray";
		  col.closest("li").dataset.estado = "HIDE";
		}
	  }
  
	  new SuperTabla(this.idST).Eventos("", "SuperTabla_Buscar");
	}
  }
  
