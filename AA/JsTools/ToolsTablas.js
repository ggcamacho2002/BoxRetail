
function ToolTblDOMQuery_AllFldId(IdTabla){

    var ItemsFld=$('#frm'+IdTabla+' .fld');
    return ToolTblDOMQuery_FldId(ItemsFld);

}

function ToolTblDOMQuery_TrFldId(TrSel){

    var Obj=TrSel.closest('tr').id;
    var ItemsFld=$(`#${Obj} .Fld`);
    return ToolTblDOMQuery_FldId(ItemsFld);

}

function ToolTblDOMQuery_AllSelecto(IdTabla){

    var ItemsFld=$('#frm'+IdTabla+' .TableObjSelecto');
    return ToolTblDOMQuery_FldId(ItemsFld);


}

function ToolTblDOMQuery_FldId(ItemsFld){

    var ret={};
    var id='';

    for (var key in ItemsFld) {
        if(ItemsFld[key].id){ 
           if(ItemsFld[key].name)id=ItemsFld[key].name;
           else {if(ItemsFld[key].attributes.name)id=ItemsFld[key].attributes.name.value;}

            if(id){
                    if(ItemsFld[key].value)ret[id]=ItemsFld[key].value;
                    else {ret[id]=ItemsFld[key].attributes.value.value;}
            }
        }
   }
   
   return ret;

}

function TableColumnsDraggable(tableId) {
    var table = document.getElementById(tableId);

    if(table){
            var tableHeaders = table.querySelectorAll(".TblColDrag");
            var dragIndex;
          
            for (var i = 0; i < tableHeaders.length; i++) {
              tableHeaders[i].addEventListener("mousedown", function(event) {
                dragIndex = event.target.cellIndex;
              });
              tableHeaders[i].addEventListener("mouseup", function(event) {
                if (dragIndex >= 0) {
                  var dropIndex = event.target.cellIndex;
                  if (dragIndex !== dropIndex) {
                    var rows = table.getElementsByTagName("tr");
                    for (var j = 0; j < rows.length; j++) {
                      var cells = rows[j].getElementsByTagName("td");
                      var dragCell = cells[dragIndex];
                      rows[j].removeChild(dragCell);
                      if (dropIndex < cells.length) {
                        rows[j].insertBefore(dragCell, cells[dropIndex]);
                      } else {
                        rows[j].appendChild(dragCell);
                      }
                    }
                  }
                }
                dragIndex = -1;
              });
            }
    }       
  }

  function clasesEditables(){//solo para modo edit
    return ".InputText ,.InputNumber";
  }

  function EvtPressEnterSigInput(obj) {
    var inputs = obj.querySelectorAll(clasesEditables());
    inputs.forEach(input => {
      input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            SiguienteInput(event);
        }
      });
    });
  }

function SiguienteInput(evento){
    
    var idSrc=evento.currentTarget.id.split('-')[0];
    var item=parseInt(evento.currentTarget.id.split('-')[1]);
    var newitem=item+1;
    var tipo=evento.currentTarget.id.split('-')[2];
    var frm=evento.currentTarget.id.split('-')[3];
    var newid=idSrc+'-'+newitem+'-'+tipo+'-'+frm;
    $('#'+newid).focus().select();

}

