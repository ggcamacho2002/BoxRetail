

async function ToolsGuardarOrdenamiento(ObjEvt,ObjId) {
  var cl=new SuperTabla(ObjId);
  await cl.Eventos(ObjEvt,'SuperTabla_GuardarOrdenManual','');
}

async function ToolsOrdenamientoTablas(Obj) {

  var ObjId=Obj.id;
  var idTabla=Obj.idTabla;
  var columns=Obj.OrdenManual.TblVisibles;
   /*   let itemModificado = {Orden: "999",idSrc: "DSid"};
      let nuevaClave = `item${Object.keys(columns).length + 1}`;
  columns[nuevaClave] = itemModificado;*/

  var CampoOrden=Obj.OrdenManual.CampoOrden;

  var cfgDialog={
    "Tipo": "Movible",
    "Titulo": "Ordenar Items",
    "TipoObj": "",
    "EvtInicio": "",
    "IdObj": "",
    "HeaderCtrl": {},
    "Style": {
        "0": {
          "Prop": "Width",
          "Value": "35vw"
        },
        "1": {
          "Prop": "height",
          "Value": "70vh"
        }
    },
    
  };

  var cld=new Dialog(ObjId+"-DialogOrden");
    cld.Cfg=cfgDialog;

   await cld.Eventos('','Dialog_Iniciar','');	    

  var dg=document.getElementById("DialogBody-"+ObjId+"-DialogOrden");
  dg.style.overflowY = "scroll";
  var newTabla=ToolsCopiarTabla(ObjId,idTabla, columns,CampoOrden);
  dg.appendChild(newTabla);


}

function ToolsCopiarTabla(ObjId, idTabla, columns, CampoOrden) {
  // Obtener la tabla original
  var tablaOriginal = document.getElementById(idTabla);
  if (!tablaOriginal) return null;

  // Crear una nueva tabla
  var tablaCopiada = document.createElement('table');
  tablaCopiada.id ='System-TablaOrdenamiento'; // Copiar clases para mantener el estilo
  tablaCopiada.className = tablaOriginal.className; // Copiar clases para mantener el estilo

  // Crear el thead para la tabla copiada
  var thead = tablaCopiada.createTHead();
  var rowHead = thead.insertRow();

  // Ordenar las columnas según el campo 'Orden'
  var columnKeys = Object.keys(columns).sort((a, b) => columns[a].Orden - columns[b].Orden);

  // Configurar cabeceras para la tabla copiada
  columnKeys.forEach(key => {
    var cell = rowHead.insertCell();
    cell.textContent = columns[key].Label;
  });

  // Añadir celdas de botones en el encabezado
  var cellUp = rowHead.insertCell();
  cellUp.textContent = "Arriba"; 
  var cellDown = rowHead.insertCell();
  cellDown.textContent = "Abajo"; 

  // Copiar y reorganizar filas y columnas
  var tbodyOriginal = tablaOriginal.getElementsByTagName('tbody')[0];
  var tbodyCopiado = tablaCopiada.createTBody();

  Array.from(tbodyOriginal.rows).forEach(row => {
    var newRow = tbodyCopiado.insertRow();
    // Configurar el atributo DSid con el valor de DSorden de la fila original
    var dsOrdenValue = row.querySelector('[name="DSid"]');
    dsOrdenValue = Traer_Valor_Html(dsOrdenValue);
   

    columnKeys.forEach(key => {
      var cell = newRow.insertCell();
      var originalCell = Array.from(row.cells).find(c => c.querySelector(`[name="${columns[key].idSrc}"]`));
      var inputInside = originalCell ? originalCell.querySelector('input') : null; // Verificar si hay un input en la celda original
    
      // Convertir la celda en un input si corresponde al CampoOrden
      if (columns[key].idSrc === CampoOrden) {
        var attrDsid = '';
        if (columns[key].idSrc === 'DSorden') attrDsid = `data-dsid=${dsOrdenValue}`;
    
        var inputValue = inputInside ? inputInside.value : (originalCell ? originalCell.textContent : ''); // Usar el valor del input si existe, sino usar textContent
        cell.innerHTML = `<input type="text" name="${CampoOrden}" ${attrDsid} class="Fld InputTextRO" style="width:50px" value="${inputValue}" />`;
        cell.className = originalCell.className; // Copiar las clases para mantener el estilo
      } else {
        if (originalCell) {
          cell.innerHTML = inputInside ? inputInside.outerHTML : originalCell.innerHTML; // Si hay un input, copiar todo el input, si no, copiar el HTML
          cell.className = originalCell.className; // Copiar las clases para mantener el estilo
        }
      }
    });
    


    // Insertar celdas para los botones en cada fila
    var cellButtonUp = newRow.insertCell();
    cellButtonUp.innerHTML = `<button type="button" class="Btn Ctrl BotonComun Transp_Azul2" onclick="ToolsOrdenTabla(this,'${CampoOrden}','${ObjId}')">ARRIBA</button>`;

    var cellButtonDown = newRow.insertCell();
    cellButtonDown.innerHTML = `<button type="button" class="Btn Ctrl BotonComun Transp_Azul2" onclick="ToolsOrdenTabla(this,'${CampoOrden}','${ObjId}')">ABAJO</button>`;
  });

  return tablaCopiada;
}




function ToolsOrdenTabla(ObjEvt, CampoOrden,ObjId) {
  var dialog = ObjEvt.closest('.Dialog');
  var divctr = dialog.querySelector('.DialogCtrl');  

  divctr.innerHTML = `<button id="BtnCompilarOrden" type="button" class="Btn Ctrl BotonComun btn btnRojoPastel addevt" style="width:80%;height:22px" onclick="ToolsGuardarOrdenamiento(this,'${ObjId}')">Guardar Cambios</button>`;

  const target = ObjEvt;
  const tableBody = target.closest('table tbody');

  if (target.tagName.toLowerCase() === 'button' && (target.textContent.trim() === 'ARRIBA' || target.textContent.trim() === 'ABAJO')) {
      const row = target.closest('tr');

      Array.from(tableBody.children).forEach(tr => tr.classList.remove('Ordenfila-activa'));

      row.classList.add('Ordenfila-activa');

      if (target.textContent.trim() === 'ARRIBA' && row.previousElementSibling) {
          tableBody.insertBefore(row, row.previousElementSibling);
      } else if (target.textContent.trim() === 'ABAJO' && row.nextElementSibling) {
          tableBody.insertBefore(row.nextElementSibling, row);
      }
      updateOrder(CampoOrden);
  }

  function updateOrder(CampoOrden) {
      [...tableBody.children].forEach((row, index) => {
          let inputNombre = row.querySelector('input[name="DSNombre"]');
          if (inputNombre) {
              inputNombre.dataset.order = index;
          }
          let inputNumero = row.querySelector(`input[name="${CampoOrden}"]`);
          if (inputNumero) {
              inputNumero.value = index;
          }
      });
  }
}

