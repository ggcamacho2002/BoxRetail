class ManejarDOM{

    constructor(id){
    
        this.idSubcriptor=id;
        this.Box="";
        this.Html="";
        this.TipoObjPadre="";
        this.Out;
      
    };
    


     async InsertarDOM(NoLoadDom) {
     
        var idSub=this.idSubcriptor;
        var idBox=this.Box;

            const box = document.getElementById(idBox);
            if (box) {
               // box.innerHTML = this.Html; // Inserta el HTML en el contenedor
                box.insertAdjacentHTML('beforeend', this.Html);
                

                   var ObjSub=document.getElementById(idSub);
                    var cl = new Eventos();
                    await cl.ManejarEventoLoadDom(ObjSub);


            }    
    
    }




    
}
    
    
