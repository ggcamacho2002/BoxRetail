



function volver(){
		
	//$('VISTA').show();	
	
}

function combinarObjetosSecuencia(obj1, obj2) {
  // Convertimos los objetos en arrays para trabajar con ellos más fácilmente
  const arr1 = Object.entries(obj1).map(([key, value]) => ({ key, value }));
  const arr2 = Object.entries(obj2).map(([key, value]) => ({ key, value }));
  
  // Calculamos el índice de inicio para los elementos del segundo objeto
  const inicioIndexSegundoObjeto = arr1.length;

  // Creamos el objeto resultado iniciando con una copia del primer objeto
  const resultado = { ...obj1 };

  // Añadimos los elementos del segundo objeto, ajustando sus claves
  arr2.forEach((item, index) => {
    resultado[inicioIndexSegundoObjeto + index] = item.value;
  });

  return resultado;
}

function combinarObjetos(obj1, obj2) {
  // Verificamos si alguno de los objetos es nulo
  if (obj1 === null) return obj2;
  if (obj2 === null) return obj1;

  // Creamos el objeto resultado iniciando con una copia del primer objeto
  const resultado = { ...obj1 };
  
  // Obtenemos las claves del segundo objeto
  const keysObj2 = Object.keys(obj2);

  // Calculamos el índice de inicio para los elementos del segundo objeto
  const inicioIndexSegundoObjeto = Object.keys(obj1).length;

  // Añadimos los elementos del segundo objeto al primero, ajustando sus claves
  keysObj2.forEach((key, index) => {
    resultado[inicioIndexSegundoObjeto + index] = obj2[key];
  });

  return resultado;
}


function filterArray(array, key, value) {
    return array.filter(function(item) {
      return item[key] === value;
    });
}

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}



function CargarParam(Param){
    if (typeof Param === 'object' && Param !== null) {
        return Param;
      } else if (typeof Param === 'string') {
        var str = decodeURIComponent(Param);
        if (/{.*}/.test(str)) { // Check if `str` contains "{" and "}"
          try {
            var json = JSON.parse(str);
            if (typeof json === 'object' && json !== null) {
              return json;
            }
          } catch (e) {
            // Parsing failed, so it's a simple string
          }
        }
        // If we reach here, `str` is not a valid JSON object
        return str;
      }
}
function setFormItemSelecto(id,value) {
  var frm = document.querySelector('#frm' + id);
  frm.setAttribute('itemselecto',value);
}

function setFormIdSelecto(id,value) {
  var frm = document.querySelector('#frm' + id);
  frm.setAttribute('idselecto',value);
  
}

function TraerFormItemSelecto(id) {
  var frm = document.querySelector('#frm' + id);
  return frm.getAttribute('itemselecto');
}

function TraerFormIdSelecto(id) {
  var frm = document.querySelector('#frm' + id);
  return frm.getAttribute('idselecto');
}

function Traer_Valor_Html(element) {
  
    switch(element.tagName) {
      case 'INPUT':
      case 'TEXTAREA':
      case 'SELECT':
      case 'BUTTON':
      return element.value;
      default:
      return element.innerHTML;
    }
    
}

function Set_Valor_Html(element,Value) {
  
  switch(element.tagName) {
    case 'INPUT':
    case 'TEXTAREA':
    case 'SELECT':
    case 'BUTTON':
    return element.value=Value;
    default:
    return element.innerHTML=Value;
  }
  
}

function DecodeURIParam(Param){
  if (typeof Param === 'object' && Param !== null) {
    return Param;
    } else if (typeof Param === 'string') {
    var str = decodeURIComponent(Param);
    if (/{.*}/.test(str)) { // Check if `str` contains "{" and "}"
      try {
      var json = JSON.parse(str);
      if (typeof json === 'object' && json !== null) {
        return json;
      }
      } catch (e) {
      // Parsing failed, so it's a simple string
      }
    }
    // If we reach here, `str` is not a valid JSON object
    return str;
    }
  }



function ToolsTraerStyle(ArrStyle){
  var ret='';
  for(var key in ArrStyle){

    if(ArrStyle[key]["Prop"])if(ArrStyle[key]["Prop"]!='')ret+=ArrStyle[key]["Prop"]+':'+ArrStyle[key]["Value"]+";";

  }

    return ret;
}
function ToolsTraerCssClass(ArrCssClass){
  var ret='';
  for(var key in ArrCssClass){

    ret+=ArrCssClass[key]["IdObj"]+" ";

  }

    return ret;
}

function  BuscarParametroEvento(ObjEvt,arrParam,NombreParam){
  var item={};
  var valor='';

  for (let key in arrParam) {
      if (arrParam[key].Key === NombreParam) {
              item=arrParam[key];
      }
  }

  if(item.ItemObj=='')var Obj=item.Key;
  else var Obj=item.ItemObj;


  if(item.Function!='Input'){

    var Formu=ObjEvt.closest('form');
    var ItemSelecto=ObjEvt.id.split('-')[1];
    var idselecto='';
    idselecto=Obj+"-"+ItemSelecto+"-Fld-"+Formu.id;

  }     
  
  switch(item.Function) {
      case "Input":valor=item.Value;break;
      case "GetValue": valor=TraerValor(idselecto); break;
      case "GetHtml": valor=document.getElementById(idselecto).innerHTML; break;
      case "GetProperty": valor=document.getElementById('').value; break;        
      case "This": valor=document.getElementById(idselecto).value; break;        
  }

  return valor;

}

function  TraerValor(idselecto){
  var elemento = document.getElementById(idselecto);
  var valor;
  
  if (elemento.value !== undefined) {
      // Si el elemento tiene un atributo 'value'
      valor = elemento.value;
  } else {
      // Si el elemento no tiene un atributo 'value', utiliza innerHTML
      valor = elemento.innerHTML;
  }

  return valor;
}


  
function  TraerValorByObjeto(TipoObj,IdObj,ItemObj){

  switch(TipoObj){

      case 'Tabla': 
                  var FrmTbl=document.getElementById('frm'+IdObj);
                  var ItemSel=FrmTbl.getAttribute('itemselecto');
                  var trsel = FrmTbl.querySelector('tr[item="'+ItemSel+'"]');
                  var bsqItem = trsel.querySelector('[name="'+ItemObj+'"]');
                  return Traer_Valor_Html(bsqItem);
      break;
      case 'Formulario': 
                  var Frm=document.getElementById(IdObj);
                  var ItemSel=0;
                  var bsqItem = Frm.querySelector('[name="'+ItemObj+'"]');  
                  return Traer_Valor_Html(bsqItem);                     
      break;
      case 'LocalStore': 
                  return localStorage .getItem(ItemObj);     
      break;
      case 'SuperTabla': 
                  var ST=document.getElementById(IdObj);
                  var ItemSel=0;
                  var bsqItem = ST.querySelector('[name="'+ItemObj+'"]');  
                  return Traer_Valor_Html(bsqItem);         
      break;

  }
}
