class Baul{

constructor(id){

    this.id=id;
    this.Entrada;
    this.Entrada;
    this.Cfg;
    this.ObjEvt;
    this.TipoObjPadre;
    this.IdObjPadre;
    this.idTbl;
    this.IdSource;
   
};

InstTablaBaul(){		

    var auxcfg={	
        TipoObjPadre:this.TipoObjPadre,
        IdObjPadre:this.IdObjPadre,
        IdSource:this.Cfg.IdSource,
        CssClass:'',
        TrEvent:'',
        Dependencia:{},
        Formulario:{	
                Tipo:'RO',
                TipoObjPadre:"",
                IdObjPadre:"",
                IdSource:this.Cfg.IdSource,
                CssClass:'',
                Dependencia:{},
                Fields:this.Cfg.Fields,
                Ctrl:{"BtnDeleteBaul":PredefaultControls(this.TipoObjPadre,"BtnDeleteBaul",this.IdObjPadre)}											
        }
    };	


    var cl=new Tabla(this.id+'-Tbl');
    cl.Cfg=auxcfg;
    cl.Cfg.Modo='RO';
    cl.Cfg.Box='DialogBody-'+this.id;
    cl.ObjEvt=this.ObjEvt;		 
    return cl;

}

InstBaul(){

    this.Cfg['HeaderCtrl']={0:{"Label": "Acciones","IdObj":"BotonComun","Tipo":"Ctrl","CssClass":"btnAzul","Param":{},"Evento":{"Clase":this.TipoObjPadre,"IdObj":this.IdObjPadre,"IdEvtClick":"AbrirAccionesBaul"}}};
    this.Cfg['EventClose']={"Clase":this.TipoObjPadre,"IdObj":this.IdObjPadre,"IdEvtClick":"CerrarBaul"};
}

AbrirAccionesBaul(){
   var Modal=`${this.id}-ModalAcciones`;

   if($(`#${Modal}`).length==0){ 
        var btn='';     
        for (var key in this.Cfg.Acciones) {

                    var Ct=new Actuadores(key);
                    Ct.TipoObjPadre=this.TipoObjPadre;
                    Ct.TagLabel=1;
                    Ct.PlaceHolder=0;
                    Ct.TipoObjPadre="Baul";
                    Ct.IdObjPadre=key;
                    Ct.DSid=this.DSid;
                    Ct.Cfg={"Label":this.Cfg.Acciones[key],"Tipo":"Ctrl","IdObj":"BotonComun","Evento":{"Clase":"Workflows","IdEvtClick":'Iniciar'},"Param": {},"CssClass":"btnAzul"}
                    Ct.Iniciar();

                    btn+=Ct.Out

        }


        var html=`<div id='${this.id}-ModalAcciones' class='BaulModal ModalAcciones'>
                ${btn}
        </div>`;

        $('#'+this.id).append(html);

    }else {

        if($('#'+Modal)[0].style.display=='none'){
            this.Mostrar(Modal);	
        }else {
            this.Ocultar(Modal);
        }	
    }

}

Mostrar(idmodal){

$('#'+idmodal).show();		

}
Ocultar(idmodal){

$('#'+idmodal).hide();

}

AbrirBaul(){
    this.InstBaul();
    if(!localStorage.getItem(this.id)){
        
            var xDialog=new Dialog(this.id);
            
            xDialog.Cfg=this.Cfg;
            xDialog.IdObjPadre=this.IdObjPadre;
            xDialog.VerificarEstado();
            
            if(xDialog.Out==0){
                xDialog.Iniciar();						
                var cl=this.InstTablaBaul();
                cl.Iniciar();
                xDialog.Show();	
            }

    }

}

CerrarBaul(){
    this.InstBaul();
    var xDialog=new Dialog(this.id);
    xDialog.IdObjPadre=this.IdObjPadre;
    localStorage.removeItem(this.id);
    $('#'+this.idTbl +' tr').removeClass("TableObjSelecto");
    xDialog.Hide();	
}
GuardarBaul(){
    this.InstBaul();
    if(this.ObjEvt.className!='TableObjSelecto'){

        this.AbrirBaul()
        var idSrcs=ToolTblDOMQuery_TrFldId(this.ObjEvt);		
        
        this.ObjEvt.classList.add("TableObjSelecto");

        var cl=this.InstTablaBaul();
            cl.Data=idSrcs;
            cl.InsertRegistroSinValidar();
            cl.Buscar();
    }	

}
DeleteOneBaul(){
    this.InstBaul();
    var dsid=this.ObjEvt.closest('tr').attributes.dsid.value;
    var trtablapadre=$('#frm'+this.idTbl+' .TableObjSelecto');
    var sel = trtablapadre.filter(function(index, element) {return element.getAttribute('dsid') === dsid;});
    if(sel[0]){sel[0].classList.remove("TableObjSelecto");}  
     
    var cl=this.InstTablaBaul();
    cl.DeleteRegistro();
    cl.Buscar();	

}
RevisarBaul(){
    this.InstBaul();
    if(localStorage.getItem(this.id)){
        var DataBaul=JSON.parse(localStorage.getItem(this.id));
        var inputs=$('#frm'+this.idTbl)
        var fldok;
            for (var key in DataBaul) {

                fldok=inputs.find("[value='"+key+"']")[0];
                if(fldok)fldok.closest('tr').classList.add("TableObjSelecto");

            }	
    }		
}

}

