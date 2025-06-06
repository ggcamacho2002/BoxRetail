class DataSources{

constructor(id){
    
    this.id=id;//Privada
    this.Envio={};//Privada

    this.Seccion;//Publica
    this.Class=null;//Publica
    this.Metodo=null//Publica
    this.ObjEvt=null;//Publica
    this.idSrc=null;//Publica
    this.Cfg=null;  //Publica
    this.TipoSource=null;//Publica
    this.CfgItems=null;//Publica
    this.CfgFiltros=null;//Publica
    this.CfgParam=null;//Publica
    this.CfgOrden=null;//Publica
    this.ClientFields=null;//Publica

    this.Filtros=null;//Publica
    this.Orden=null;//Publica
    this.Param=null;//Publica
    this.SetFields;

    this.Out;//Publica

};

TraerTipo(){

    this.Out=this.TipoSource;

}


CargarCfg(){
    
    if (this.Cfg == null || typeof this.Cfg === 'undefined') {
            this.Cfg = CfgDataSources(this.id, this.Metodo);
      }
      
      const variables = ['TipoSource', 'Metodo', 'Class', 'Seccion', 'CfgItems','idSrc'];
      
      for (let i = 0; i < variables.length; i++) {
        const variable = variables[i];
      
        if (this[variable] == null || typeof this[variable] === 'undefined' || Object.keys(this[variable]).length == 0) {
          if (this.Cfg != null && this.Cfg[variable] != null) {
            this[variable] = this.Cfg[variable];
          } 
        }
      }


      if (this.Cfg) {
        if (this.Cfg.CfgFiltros) {
            this.CfgFiltros = this.CfgFiltros ? combinarObjetos(this.Cfg.CfgFiltros, this.CfgFiltros) : this.Cfg.CfgFiltros;
        }
    
        if (this.Cfg.CfgOrden) {
            this.CfgOrden = this.CfgOrden ? combinarObjetos(this.Cfg.CfgOrden, this.CfgOrden) : this.Cfg.CfgOrden;
        }
        
        if (this.Cfg.CfgParam != null || typeof this.Cfg.CfgParam !== 'undefined'){

            if(this.Cfg.CfgParam == ''){this.CfgParam=this.Cfg.CfgParam;}
            else{if(Object.keys(this.Cfg.CfgParam).length > 0){this.Param=Object.assign(this.Cfg.CfgParam,this.CfgParam);}}

        }
      }  

      

      if(this.Seccion==null)this.Seccion='Negocio';


}


async Iniciar(){ 
    this.CargarCfg();
    await this.Eventos(this.ObjEvt,this.Metodo,this.Param)
}

async Eventos(ObjEvt,idEvt,Param){	

    if(!this.ObjEvt)if(ObjEvt!='')this.ObjEvt=ObjEvt;
    if(!this.Param)if(Param!='')this.Param=Param;
    if(this.Cfg==null)this.CargarCfg();
    if(idEvt==null)idEvt='DataSources_Buscar';
       
    //entra al metodo y setea todas las variables
    switch(idEvt){

        case 'DataSources_Buscar':
            this.Metodo='Buscar';
            await this.Buscar();
        break;
        case 'DataSources_BuscarById':
            this.Metodo='BuscarById';
            await this.BuscarById();
        break;
        case 'DataSources_UpdateById':
            this.Metodo='UpdateById';
            await this.UpdateById();
        break;
        case 'DataSources_UpdateMultiplesIds':
            this.Metodo='UpdateMultiplesIds';
            await this.UpdateMultiplesIds();
        break;
        case 'DataSources_DeleteById':
            this.Metodo='DeleteById';
            await this.DeleteById();
        break;
        case 'DataSources_InsertOne':
            this.Metodo='InsertOne';
            await this.InsertOne();
        break;
        case 'DataSources_InsertOneByRelacion':
            this.Metodo='InsertOne';
            await this.InsertOneByRelacion();
        break;
        case 'DataSources_UpdateByRelacion':
            this.Metodo='UpdateById';
            await this.UpdateByRelacion();
        break;
        case 'DataSources_SubirArchivo':
                await this.SubirArchivo();
        break;
        case 'DataSources_TraerJsonExcel':
                this.Metodo='ExcelToJson'
                await this.TraerJsonExcel();
        break;
        case 'DataSources_LibreByRelacion':
                 await this.LibreByRelacion();
        break;
        case 'DataSources_Libre':
                 await this.Libre();
        break;
        case 'Formulario_GetBdXUltIdInsertado':                    
             await this.GetBdXUltimoIdInsertado();
        break;
    }

}


async Ejecutar(){

    

    this.CargarParam();
    
    switch(this.TipoSource){

        case 'LocalStorage':
            this.Out={};
            this.Out['datos']=this.TraerLocalStorage();
        break;
        case 'StaticData':
            this.Out={};
            this.Out['datos']=CfgStaticData(this.Cfg.Class);
        break;
        case 'SrvConexion':
            this.Out=await this.TraerSrvConexion();
        break;
        case 'Json':
            this.Out=this.TraerJson();
        break;
        case 'ArrayGlobal':
            this.Out=this.TraerArrayGlobal();
        break;
        case 'Excel':
            this.Out=await this.TraerJsonExcel();
        break;
        case 'Libre':
            this.Out=await this.Libre();
        break;        
        
    }

}


EvaluarParam(input) {
  // Usamos una expresión regular para capturar cualquier nombre de función y su contenido
  const regex = /(\w+)\(([^)]*)\)/;
  const match = input.match(regex);
  if (match) {
    switch(match[1]){
        case 'LocalStore': input=localStorage.getItem(match[2]); break;
        case 'GetDOMbyId': 
            var auxdom=document.getElementById(match[2]);
            input=Traer_Valor_Html(auxdom);
        break;
    }
  }
    return input;
 
}

async Libre(){      
    
    this.Metodo=this.Param[0].Value;

   this.Param[1].Value=this.EvaluarParam(this.Param[1].Value);
   this.Envio["SetFields"]=[];
   this.Envio["SetFields"][0]=this.Param[1];        
   await this.Ejecutar();


}    

async LibreByRelacion(){      
    this.Metodo=this.Param[0].Value;

    var cl=new Relaciones(this.Param[1].IdObj);

   cl.Eventos(this.ObjEvt,"Relaciones_JoinValoresHtml",null);

   this.Envio["SetFields"]=this.unificarClaves(cl.Out);        
   await this.Ejecutar();



}    


 async TraerArchivo(){

    this.CargarCfg();
    if(this.Param[0].Key=='idRelacion'){
        var idRelacion=this.Param[0].Value; 
        var rel=CfgRelaciones(idRelacion)
        if(rel){

            var mapeo=rel.Mapeo[0];

            var IdObjGet=mapeo.IdObjGet;
            var ItemObjGet=mapeo.ItemsObjs[0].ItemObjGet;

            var id="SubirFile_"+ItemObjGet+"-0-Fld-"+IdObjGet;
            var inputFile=document.getElementById(id);

            if(inputFile.files)
                if(inputFile.files[0])return inputFile;
                else {
                    alert('Error: Falta seleccionar el archivo o el archivo no funciona !!!');
                    return 0;
                }
            
        }else{
             alert('Error: No se encuentra la relacion con el campo File');
             return 0;
        }
    }else{

        alert('Error: Falta Definir la relacion con el campo File');
        return 0;
    }
}

async SubirArchivo(){  
    
   var inputFile=await this.TraerArchivo();

    if(inputFile!=0){

        var cl=new ServerConexion();
        cl.Seccion=this.Seccion;
        cl.Class=this.Class;
        cl.Metodo='CargarExcel';
        await cl.SubirFileSRV(inputFile);

    }
   
      
    

}   

async TraerJsonExcel(){      

    var inputFile=await this.TraerArchivo();

    if(inputFile!=0){

        inputFile=inputFile.files[0].name;
    
        this.Envio["NombreArchivo"]=inputFile;
    
        return await this.TraerSrvConexion();

    }
}    

async Buscar(){      
   
    if(this.Metodo=='undefined' || this.Metodo=='')this.Metodo= 'Buscar';

    this.CargarColumns();
    this.CargarFiltros();  
    this.CargarOrden();
    await this.Ejecutar();

}


async BuscarById(){       
    
   var id=this.idSrc;
    var flt={}; 
    flt[0]={"idSrc":"DSid","Valor":id,"Tipo":'Igual'};

        this.Metodo='BuscarById';
        this.Filtros=flt;

        this.CargarColumns(); 
        this.CargarFiltros();  
        await this.Ejecutar();

}

async GetBdXUltimoIdInsertado(){       
    
    var ultid=localStorage.getItem('system-RespUltEvento-queryId');
    var flt={}; 
    flt[0]={"idSrc":"DSid","Valor":ultid,"Tipo":'Igual'};

        this.Metodo='BuscarById';
        this.Filtros=flt;

        this.CargarColumns(); 
        this.CargarFiltros();  
        await this.Ejecutar();

}


async UpdateById(){ 
    
        if(this.Filtros==null){
            var flt={}; 
            flt[0]={"idSrc":"DSid","Valor":this.Param};
            this.Filtros=flt;
        }   
        
        this.CargarFiltros(); 
        this.Envio["SetFields"]=this.SetFields;
        await this.Ejecutar();
}

async UpdateMultiplesIds(){     

  
    this.Envio["SetFields"]=this.SetFields;
    this.CargarFiltros(); 
    await this.Ejecutar();

}

async DeleteById(){    

    this.CargarFiltros();   
    await this.Ejecutar();

}
async InsertOne(){     
 
        this.Envio["SetFields"]=this.unificarClaves(this.SetFields);
        await this.Ejecutar();

}



async UpdateByRelacion(){    

  
    
    var cl=new Relaciones(this.Param[0].IdObj);
        
        var obj=this.Param[1];
        var valor=TraerValorByObjeto(obj.TipoObj,obj.IdObj,obj.ItemObj);
       
       this.Filtros={};
       this.Filtros[0]=this.ArmaFiltro("DSid","Igual",valor,"AND");

       cl.Eventos(this.ObjEvt,"Relaciones_JoinValoresHtml",null);

       this.Envio["SetFields"]=this.unificarClaves(cl.Out);      
       
       this.CargarFiltros(); 
       await this.Ejecutar();

}

async InsertOneByRelacion(){     

    var cl=new Relaciones(this.Param[0].IdObj);
            cl.Eventos(this.ObjEvt,"Relaciones_JoinValoresHtml",null);

        this.Envio["SetFields"]=this.unificarClaves(cl.Out);       
        await this.Ejecutar();

}


ArmaFiltro(idsrc,op,valor,Conex){     

    var NewFiltros={};

                NewFiltros["idSrc"]=idsrc;
                NewFiltros["Tipo"]=op;
                NewFiltros["Valor"]=valor;
                NewFiltros["Conex"]=Conex;	

    return NewFiltros;

}

////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////LocalStorage///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
TraerLocalStorage(){

    var cl=new LocalStorage(this.idSrc);
    cl.Metodo=this.Metodo;
    cl.Param=this.Envio;
    cl.Iniciar();
    return cl.Out;


}



////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////General////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

async TraerSrvConexion(){
  var param='';
  if(isObject(this.Envio)){
    param=JSON.stringify(this.Envio);   
     param = param.slice(1, -1);
   }else param=this.Envio; 

    var cl=new ServerConexion();
    cl.Seccion=this.Seccion;
    cl.Class=this.Class;
    cl.Metodo=this.Metodo;	
    cl.Param=param;
   await cl.SrvDispatch();

    if(cl.Out){
                if (cl.Out.result=='Exito')return cl.Out;
                else{
                             alert('Ocurrio un error !!!! verifique el siguiente Id de Error:'+cl.Out.Error);
                             return 'ErrorStop'
                }   
    }else{

        alert('Ocurrio un error !!!! verifique el siguiente Id de Error:'+cl.Out.Error);
        return 'ErrorStop'

    }
    
    
}
/////////////////////////////////////////////////////////

CargarColumns(){

    var cols={}
    var i=0;

    if(this.ClientFields==null){

         for (var key in this.CfgItems) {            
            cols[key]=this.CfgItems[key];
        }
    }else{

        for (var key in this.ClientFields) {
            var idsrc= this.ClientFields[key]["idSrc"];
            if(this.CfgItems[idsrc]) if(this.CfgItems[idsrc]==1)cols[i++]=idsrc;
        }

    }
    this.Envio["Columns"]=cols;


}

CargarFiltros(){

     if(this.Filtros && this.CfgFiltros) this.Filtros=this.Unir2Arrays(this.Filtros,this.CfgFiltros);
     else {

        if(this.Filtros==undefined && this.CfgFiltros)this.Filtros=this.CfgFiltros;

     }
    if(this.Filtros) if(Object.keys(this.Filtros).length>0)this.Envio["Filtros"]=this.Filtros;

    
}
Unir2Arrays(arr1,arr2) {

    var arr = Object.values(arr1).concat(Object.values(arr2));
    var aux = {};
    for (var i = 0; i < arr.length; i++) {
      aux[i] = arr[i];
    }

    return aux;
}

CargarParam(){
    
   if((this.CfgParam))if(Object.keys(this.CfgParam).length>0)this.Envio["Param"]=this.CfgParam;

   if(this.Param){
            if(this.Param["DSLimite"]){
            
                         if(this.Envio["Param"]){
                                 if(this.Envio["Param"][0]){
                                        this.Envio["Param"][0]["Param"]="DSLimite";
                                        this.Envio["Param"][0]["Valor"]=this.Param.DSLimite;
                                 }
                         }else{
                                        this.Envio["Param"]={};
                                        this.Envio["Param"][0]={};
                                        this.Envio["Param"][0]["Param"]="DSLimite";
                                        this.Envio["Param"][0]["Valor"]=this.Param.DSLimite;
                         }
            }
    }

}


CargarOrden(){

   if(this.Orden==undefined && this.CfgOrden)this.Orden=this.CfgOrden;
   if(this.Orden) if(Object.keys(this.Orden).length>0)this.Envio["Orden"]=this.Orden;

}

unificarClaves(objeto) {
    // Crear un nuevo objeto donde se almacenarán las propiedades unificadas
    let resultado = {};
  
    // Iterar sobre cada clave del objeto original
    for (const clave in objeto) {
      if (objeto.hasOwnProperty(clave)) {
        // Combinar las propiedades de cada sub-objeto en el resultado
        resultado = { ...resultado, ...objeto[clave] };
      }
    }
  
    // Retornar un nuevo objeto con todas las propiedades combinadas bajo una sola clave
    return { "0": resultado };
  }

}

