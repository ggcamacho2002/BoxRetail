class Relaciones{

    constructor(id){

       this.id=id;
       this.ObjEvt;
       this.Cfg;
       this.AllCfg;
       this.Mapeo;
       this.Param;
       this.Metodo;
       this.Out;

    };

    CargarCfg(){
    
        if(this.id==''){
             alert('No se Expecifico el id de relacion');
             
        }     
        else{
                    if (this.Cfg == null || typeof this.Cfg === 'undefined') {
                        this.Cfg = CfgRelaciones(this.id, this.Metodo);
                     }
                
                const variables = ['Mapeo'];
                
                for (let i = 0; i < variables.length; i++) {
                    const variable = variables[i];
                
                    if (this[variable] == null || typeof this[variable] === 'undefined') {
                    if (this.Cfg != null && this.Cfg[variable] != null) {
                        this[variable] = this.Cfg[variable];
                    } 
                    }
                }   

        }


    
    }


    async Iniciar(){ 
        this.CargarCfg();
        await this.Eventos(this.ObjEvt,this.Metodo,null)
    }
    
    async Eventos(ObjEvt,idEvt,Param){	
    
        if(!this.ObjEvt)if(ObjEvt!='')this.ObjEvt=ObjEvt;
        if(!this.Param)if(Param!='')this.Param=Param;
        if(this.Cfg==null)this.CargarCfg();
        var arrMapeo={};
        
       if(this.Cfg.Mapeo && this.Cfg.MapeoValor) arrMapeo = this.combineObjects(this.Cfg.Mapeo, this.Cfg.MapeoValor);
       if(!this.Cfg.Mapeo &&  this.Cfg.MapeoValor) arrMapeo = this.Cfg.MapeoValor;
       if(this.Cfg.Mapeo &&  !this.Cfg.MapeoValor) arrMapeo = this.Cfg.Mapeo;

        switch(idEvt){
    
            case 'Relaciones_JoinValoresHtml':                
                await this.JoinValoresHtml(arrMapeo);
            break;
            case 'Relaciones_JoinOneFiltros':
                arrMapeo=this.BuscarUnItem(arrMapeo,this.Param);
                await this.JoinFiltros(arrMapeo);
            break;
            case 'Relaciones-JoinFiltros':
                this.JoinValoresHtml(arrMapeo);
                await this.JoinFiltros(this.Out);
            break;
        }
    
    }


    async JoinValoresHtml(arrMapeo){ 

        var itemMapeo={};
        var NewArr={};
      
        var i=0;
        for(var key in arrMapeo){
            NewArr[i]={};
            itemMapeo=arrMapeo[key];
                var ItemObj='';
                
                for(var key in itemMapeo.ItemsObjs){
                    
                    ItemObj=itemMapeo.ItemsObjs[key];                                
                    if(itemMapeo.TipoObjGet)NewArr[i][ItemObj.ItemObjSet]=TraerValorByObjeto(itemMapeo.TipoObjGet,itemMapeo.IdObjGet,ItemObj.ItemObjGet);
                    else {if(itemMapeo.Valor){NewArr[i][ItemObj.ItemObjSet]=itemMapeo.Valor;}}
                                                    
                }     
            i++;
        }

           this.Out=NewArr;
    }

    async AgregarObjDestino(arr){ 
   
        var NewArr={};

        for(var key in arr){

            NewArr[this.Mapeo[key].IdObjSet]=arr[key];
        }
        this.Out=NewArr;
    }

    async JoinFiltros(Joins){ 


            var NewFiltros={};

            for(var key in Joins){
            
                   var idsrc=Object.keys(Joins[key])[0];
                        NewFiltros[key]={}
                        NewFiltros[key]["idSrc"]=idsrc;
                        NewFiltros[key]["Tipo"]="Igual";
                        NewFiltros[key]["Valor"]=Joins[key][idsrc];
                        NewFiltros[key]["Conex"]="AND";		
                              
            }

           this.Out=NewFiltros;
    }



///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
combineObjects(obj1, obj2) {
    const result = {...obj1}; // Copia del primer objeto
    const startIndex = Object.keys(obj1).length; // Índice inicial para el segundo objeto

    // Añadir elementos de obj2 a result, empezando desde startIndex
    Object.keys(obj2).forEach((key, index) => {
        result[startIndex + index] = obj2[key];
    });

    return result;
}



    BuscarUnItem(arrMapeo,Items){

            alert();

    }





    
    
}

