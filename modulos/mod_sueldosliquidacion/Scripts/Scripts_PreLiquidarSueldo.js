function Scripts_PreLiquidarSueldo(ObjEvt,Params){

    // Selecciona todos los elementos input dentro del formulario con el ID 'FRM_Variables'
        var inputs = document.querySelectorAll('#FRM_Variables input');


        // Itera sobre cada input y establece el atributo readonly
        inputs.forEach(function(input) {
            input.setAttribute('readonly', true);
            input.classList.add('InputTextRO');
        }); 
        
        var boton = document.getElementById('Liquidar-0-Ctrl-FRM_Variables');
        if (boton) {
             boton.remove();
        }

        transformarSelectAInput('Anio-0-Fld-FRM_Variables');
        transformarSelectAInput('Mes-0-Fld-FRM_Variables');


      /*  var formtot = document.querySelector('#FRM_TotalesLiquidacion');
         var elementosOcultos = formtot.querySelectorAll('.Hiden');
        elementosOcultos.forEach(function(elemento) {
            elemento.classList.remove('Hiden');
        });*/

}


function transformarSelectAInput(idsel) {
    var select = document.getElementById(idsel);
    var valorSeleccionado = select.options[select.selectedIndex].text; // Obtener el texto seleccionado
  
    // Crear un elemento input
    var input = document.createElement('input');
    input.type = 'text'; // Tipo texto
    input.readOnly = true; // Hacerlo solo lectura
    input.classList.add('Fld', 'InputTextRO');
    input.value = valorSeleccionado; // Establecer el valor seleccionado del select
  
    // Ocultar el select
    select.style.display = 'none';
  
    // Insertar el input justo después del select en el DOM
    select.parentNode.insertBefore(input, select.nextSibling);
  }