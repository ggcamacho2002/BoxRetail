async function IniciarModulo(moduloId,titulo) {

    // Cargamos las dependencias
    await CargaDependencias(moduloId);

    document.getElementById('BoxVistas').innerHTML='';
    document.getElementById('CabScreenModulo').innerHTML=titulo;
    document.getElementById('tituloPagina').innerHTML='BR-'+titulo;

      var param=CfgParametros('Globales',null);
  
 
    new Eventos().Iniciar();    


    const vista = new Vistas(param.VistaInicio);
          vista.Iniciar();

          
          
  }
  
async function CargaDependencias(moduloId) {


  var fP ='modulos/mod_'+moduloId+"/";

  loadCss(fP+'CssModulo/CssModulo.css')
  .then(() => {
    console.log('CSS loaded successfully!');
  })
  .catch(error => {});


    const urls = DefineObjCfg(moduloId);
     await CrearCod(urls);  

     const urls2 = DefineScripts(moduloId);
     await CrearCod(urls2);
}

function DefineObjCfg(Modulo) {

    var fP;
    var scripts;
    
    fP ='modulos/mod_'+Modulo+"/";
    scripts = [
         ///////////Basicos///////////
         fP+"ObjCfg/Cfg_Parametros.js",
         fP+"ObjCfg/Cfg_DataSources.js",
         fP+"ObjCfg/Cfg_Grids.js",
         fP+"ObjCfg/Cfg_Vistas.js",         
         fP+"ObjCfg/Cfg_Tabla.js",
         fP+"ObjCfg/Cfg_SuperTabla.js",
         fP+"ObjCfg/Cfg_Scripts.js",
         fP+"ObjCfg/Cfg_Formulario.js",
         fP+"ObjCfg/Cfg_Botonera.js",
         fP+"ObjCfg/Cfg_Eventos.js",
         fP+"ObjCfg/Cfg_Relaciones.js",
         fP+"ObjCfg/Cfg_Card.js", 
         fP+"ObjCfg/Cfg_StaticData.js",        
         fP+"ObjCfg/Cfg_Dialog.js",         
         fP+"ObjCfg/Cfg_BiFormSel.js",    
         fP+"ObjCfg/Cfg_BiSTSel.js",         
         fP+"ObjCfg/Cfg_SelectorValores.js",         
         fP+"ObjCfg/Cfg_Frame.js",         
         fP+"ObjCfg/Cfg_Impresion.js",         
    ];

return scripts;

}

function InvokeClase(IdClase,id){

  var cl;
  switch(IdClase) {
    case "ToolsGral":cl=new ToolsGral(id); break;
    case "DataSources":cl=new DataSources(id); break;
    case "Grids":cl=new Grid(id); break;
    case "Vistas":cl=new Vistas(id); break;
    case "Tabla":cl=new Tabla(id); break;
    case "Botonera":cl=new Botonera(id); break;
    case "Scripts":cl=new Scripts(id); break;
    case "Formulario":cl=new Formulario(id); break;
    case "SuperTabla":cl=new SuperTabla(id); break;
    case "Card":cl=new Card(id); break;
    case "BiFormSel":cl=new BiFormSel(id); break;
    case "Impresion":cl=new Impresion(id); break;
    case "BiSTSel":cl=new BiSTSel(id); break;    
    case "Dialog":cl=new Dialog(id); break;    
    case "Relaciones":cl=new Relaciones(id); break;    
    case "LocalStorange":cl=new LocalStorange(id); break;    
    case "Frame":cl=new Frame(id); break;    
    case "ManejarDOM":cl=new ManejarDOM(id); break;    
    
    
    default:alert('No se encontro la clase en Modulos.js'); break;
  } 

   return cl;
  }


function DefineScripts(Modulo) {

    var fP;
    var scripts=[];   
    fP ='modulos/mod_'+Modulo+"/";
    var ItemsCfg=Object.keys(CfgScripts());

    for(var key in ItemsCfg){
      scripts [key]=fP+"Scripts/"+ItemsCfg[key]+".js";
    }
        
    return scripts;

}


function loadCss(url) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    link.type = 'text/css';

    // Handle both successful loading and errors
    link.onload = () => resolve();
    link.onerror = error => {
      console.error('Failed to load CSS:', url, error);
      reject(error);
    };

    // Append the link element to the head for proper CSS loading
    document.head.appendChild(link);
  });
}

function cargarCod(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }


  function CrearCod(urls) {
  const promesas = urls.map(cargarCod);
  return Promise.all(promesas);
  }


function srvModulo(){	

    var cl=new ServerConexion();
    cl.Metodo='Ingresar';	
    cl.Param={};
    cl.Param['usu_nombre']=$datos.usu_nombre;
    cl.SrvHome();

    crearHome(cl.Out);
};	

function srvModulo(){	

    var cl=new ServerConexion();
    cl.Metodo='Ingresar';	
    cl.Param={};
    cl.Param['usu_nombre']=$datos.usu_nombre;
    cl.SrvHome();

    crearHome(cl.Out);
};	





