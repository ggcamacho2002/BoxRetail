function DOMDatosTraerSetFields(DOMInputs, CfgItems) {
    var col = {};

    // Itera sobre cada configuración en CfgItems
    for (var key in CfgItems) {
        var idsr = CfgItems[key].idSrc;
        if (idsr && idsr != "") {
            // Itera sobre cada input en DOMInputs
            for (var i = 0; i < DOMInputs.length; i++) {
                var input = DOMInputs[i];
                // Comprueba si el nombre del input coincide con idsr
                if (input.name === idsr) {
                    col[idsr] = input.value;
                    break; // Deja de buscar una vez que se encuentra el input correspondiente
                }
            }
        }
    }
    return col;
}

function DOMDatosTraerOneFilaSetFields(Fila,CfgItems){

    ////////ingresa una fila
    var col={};
    var rows=Fila.querySelectorAll('input,select');
    return DOMDatosTraerSetFields(rows,CfgItems);
    

}





function DOMDatosTraerOneSetField(ObjEvt,CfgItems){
   
     var dsFld=ObjEvt.name;

     var col={};
     col[0]={}
     col[0][dsFld]=ObjEvt.value

    return col;
}


function DOMDatosTraerFiltros(idEntidad){	

    var Filtros={};
    var aux=new DOMtoArray().ByFormOne("frm"+idEntidad+"-FiltrosCab");
    var aux2=new DOMtoArray().ByFormOne("frm"+idEntidad+"-FiltrosRap");

    var i=0;
    for (var key in aux) {
         Filtros[i]={};
         Filtros[i]['idSrc']=key;
         Filtros[i]['Conex']='AND';
         Filtros[i]['Tipo']='Like';
         Filtros[i]['Valor']=aux[key];
         i++
    }
    for (var key2 in aux2) {
        Filtros[i]={};
        Filtros[i]['idSrc']=key2;
        Filtros[i]['Conex']='AND';
        Filtros[i]['Tipo']='Like';
        Filtros[i]['Valor']=aux2[key2];
        i++
    }


    var fltavz=new DOMtoArray().ByFormMultiple("frm"+idEntidad+"-FiltrosAvz");

    if(!aux)aux='';
    if(!aux2)aux2='';
    if(!fltavz)fltavz='';

    return Unir2Arrays(Filtros, fltavz);


};
function Unir2Arrays(arr1,arr2) {

    var arr = Object.values(arr1).concat(Object.values(arr2));
    var aux = {};
    for (var i = 0; i < arr.length; i++) {
      aux[i] = arr[i];
    }

    return aux;
}
  
function DOMDatosTraerParametros(idEntidad){	
    return new DOMtoArray().ByFormOne("frm"+idEntidad+"-Param");
}; 
function DOMDatosTraerOrdenamiento(xDom){	
if (xDom){
   var Input=xDom.querySelectorAll('.OrdenSerial') 
   var Param={};
   var value='';
   i=0;
   for (var key in Input) {

       if(Input[key].name){
           
                if(Input[key].value)value=Input[key].value;
                else value=Input[key].innerHtml;
           
           if(value!='' && value!=undefined && value!="undefined"){

            Param[i]={};
            Param[i]['idSrc']=Input[key].name;
            Param[i]['Tipo']=value;

           }

       }								
       i++;
   }

   return Param;
}   
};
function DOMDatosLimpiarFiltros(idEntidad){	

    var fltrap=$('#frm'+idEntidad+'-FiltrosRap')[0];
    var Param=$('#frm'+idEntidad+'-Param')[0];
    var FiltrosAvz=$('#frm'+idEntidad+'-FiltrosAvz')[0];
    var FiltrosCab=$('#frm'+idEntidad+'-FiltrosCab')[0];

    if(fltrap)fltrap.reset();
    if(Param)Param.reset();
    if(FiltrosAvz)FiltrosAvz.reset();
    if(FiltrosCab)FiltrosCab.reset();


    $('#'+idEntidad+'-SelectOrden').val('');

    $('#'+idEntidad+'-FiltrosAvzContent').html('');
    $('#'+idEntidad+'-OrdenContent').html('');

};

function DOMDatosTraerAllFldTrPadre(ObjEvt){

    var idTr=ObjEvt.closest('tr').id;
    var ItemsFld=$(`#${idTr} .Fld`);
    var ret={};
    var id='';

    for (var key in ItemsFld) {
         if(ItemsFld[key].id){ 
            if(ItemsFld[key].name)id=ItemsFld[key].name;
            else id=ItemsFld[key].attributes.name.value;
            if(ItemsFld[key].value)ret[id]=ItemsFld[key].value;
            else {ret[id]=ItemsFld[key].attributes.value.value;}
         }
    }

    return ret;
}




function checkValidityItems(elements) {
    
    var isValid = true;

    if(elements.length && elements.nodeName !== "SELECT"){
            for (var i = 0; i < elements.length; i++) {
                    if (!elements[i].checkValidity()) {
                        isValid = false;
                        break;
                    }
            }
    }else{

        if (!elements.checkValidity()) {
            isValid = false;
        }
    }

    if (!isValid) {
      alert("Datos mal ingresados !!!!");
    }
    return isValid;
  }


  function observarCambios(selector, callback) {
    // Crear un nuevo MutationObserver
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                // Ejecutar la función callback pasada como argumento
                callback();

                // Desconectar el observer después de la ejecución
                observer.disconnect();
            }
        });
    });

    // Configurar el observer para observar cambios en el elemento deseado
    var elemento = document.querySelector(selector);
    if (elemento) {
        observer.observe(elemento, { childList: true });
    } else {
        console.error('Elemento no encontrado: ', selector);
    }
}