class LocalStorage{

constructor(id){	

    this.id=id;
    this.Metodo=null;
    this.DataIn=null;
    this.Cfg;
    this.DataStore={};
    this.Out='';

    var aux=localStorage.getItem(this.id);
    if(aux)if(aux!=undefined)if(aux!="undefined") this.DataStore=JSON.parse(aux);


}

Iniciar(){

  if(this.Metodo==null)this.Metodo=this.Cfg.Metodo;  
 // if(this.DataIn==null)this.DataIn=this.Cfg.DataIn;  

   switch(this.Metodo){
      case 'BuscarById':this.BuscarById(); break;
      case 'Buscar':this.Buscar(); break;
      case 'InsertOne':this.InsertOne(); break;
      case 'DeleteById':this.DeleteById(); break;
      case 'DeleteByIdSinMsj':this.DeleteByIdSinMsj(); break;
   }

}

BuscarById(){
    this.Out=this.DataStore;


}
Buscar(){

    const cl = new QueryArray(this.DataStore);
    cl.Cfg =this.Cfg; 
    cl.Iniciar();
    this.Out=cl.Out;

}

InsertOne(){

    if(Object.keys(this.DataStore).length==0){

        localStorage.setItem(this.id,JSON.stringify(this.DataIn));
    
    }
}

InsertOneChild(){

        if(this.DataIn.DSid){
            if(!this.DataStore[this.DataIn.DSid]){
                    this.DataStore[this.DataIn.DSid]=this.DataIn;
                    localStorage.setItem(this.id,JSON.stringify(this.DataStore));
            }else{
                alert('Error (class LocalStorage) el Id para insertar ya existe !!!!!');
            }
            
        }else alert('Error (class LocalStorage) No se encuentro el Id en los datos ingresados!!!!!');
    


}


DeleteById(DSid){

    if(DSid==undefined)DSid=this.id;

    if(DSid){
        if(this.DataStore[DSid]){
               delete this.DataStore[DSid];
                localStorage.setItem(this.id,JSON.stringify(this.DataStore));
        }else{
            alert('Error (class LocalStorage) el Id que desea Eliminar no existe !!!!!');
        }
    }else alert('Error (class LocalStorage) No se encuentro el Id en los datos ingresados!!!!!');

}
DeleteByIdSinMsj(DSid){

    if(DSid==undefined)DSid=this.id;
    localStorage.removeItem(DSid);

}




  

}

