class BiFormSel{

    constructor(id){

        this.ThisClase='BiFormSel';//Obligatorio
        this.id=id;
        this.Cfg={};//Obligatorio
        this.ObjEvt=null;
        this.Box=null;
        this.CssClass=null;
        this.Style=null;
        this.Param=null;
        this.Out;

        this.idForm=null;
        this.Relacion=null;

    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
/////////////////////////////////////////////////////////////////////CONFIGURACION///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


CargarCfg(){
    
    if(this.id.split('_')[0]=='FRM'){
        var formPadre = this.ObjEvt.closest('form');
        this.id=formPadre.getAttribute('idObjPadre');;
    }

    if(this.Cfg==undefined || this.Cfg=='' || Object.keys(this.Cfg).length==0)this.Cfg=CfgBiFormSel(this.id);         
        
        if(this.Box==null)if(this.Cfg.Box)this.Box=this.Cfg.Box;
        if(this.idForm==null)if(this.Cfg.IdObj)this.idForm=this.Cfg.IdObj;
        if(this.CssClass==null)if(this.Cfg.CssClass)this.CssClass=this.Cfg.CssClass;
        if(this.Style==null)if(this.Cfg.Style)this.Style=this.Cfg.Style=`style='${this.Cfg.Style}'`;
        if(this.Param==null)if(this.Cfg.Param)this.Param=this.Cfg.Param;
        if(this.Relacion==null)if(this.Cfg.Relacion)this.Relacion=this.Cfg.Relacion;

  }  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


async Template(){	

    var html='';	                
            html+=`<div id='${this.id}' class="BiFormSel">`;
                        html+='<div class="BiFormSelForm" id="'+this.id+'_BoxForm">';                         	
                        html+='</div>';
                    html+='<div  id="'+this.id+'_BoxLOV" tipoobj="BiFormSelLOV" class="BiFormSelLOV" selectoractivo=""></div>';
                    html+=`<input type='Hidden' ${this.Comun} value='${this.Cfg.Value}'/>`;
            html+='</div>';	
                
    return html;

};

    async Iniciar(){  

        await this.Eventos(this.ObjEvt,'BiFormSel_Iniciar',this.Param);  
        
    }
  
    async Construir(){ 

        var dom=document.getElementById(this.id);

        if(!dom){

            var Html=await this.Template();
            
            if(this.Box){
            if(this.Box!=''){			

                    document.getElementById(this.Box).innerHTML = Html;
                    
                }else this.Out=Html;
            }else this.Out=Html;
        }


    }

    
    async Eventos(ObjEvt,IdEvt,Param) {
    
            if(ObjEvt)this.ObjEvt=ObjEvt;
            this.CargarCfg();            
            if(Param)this.Param=Param;
   
            
            switch(IdEvt){                
                case 'BiFormSel_Iniciar':
                    await this.Construir();
                    await this.TraerForm();
                break;
                case 'BiFormSel_IniciarSelector':
                    await this.TraerSelector();
                break;
                case 'BiFormSel_PickSelector':
                    this.PickSelector();
                break;
                case 'BiFormSel_BusqGral':
                    this.STBusqGral();
                break;

    
        }
    };


    CambiarEstado(newestado){
        var dom=$('#'+this.id)[0];
        dom.attributes.estado.value=newestado;
    }


   async TraerForm(){

        var frm=new Formulario(this.idForm);
            frm.CargarCfg();
        
    
        var frmCfgItems=frm.Cfg.CfgItems;
        var FormField='';
        var newCfgItem={};
        var encontrado=0;

            for(var key in frmCfgItems){
                
                encontrado=0;

                for(var key2 in this.Relacion){
                    
                    FormField=this.Relacion[key2]['FormField'];

                    if(frmCfgItems[key].id==FormField){
                       
                        newCfgItem[key]={
                                 "id": frmCfgItems[key].id,
                                 "Orden": frmCfgItems[key].Orden,
                                 "Label": frmCfgItems[key].Label,
                                 "Tipo": 'Fld',
                                 "idSrc": frmCfgItems[key].idSrc, 
                                 "Value": frmCfgItems[key].Value,
                                 "Requerido": frmCfgItems[key].Requerido,
                                 "IdObj": 'BiFormSel_InitSelector',
                                 "Param":frmCfgItems[key].id,
                                 "Style":frmCfgItems[key].Style,
                                 "ClassCss":frmCfgItems[key].ClassCss,

                            }


                        encontrado=1;

                    }
                }    

                if(encontrado==0)newCfgItem[key]=frmCfgItems[key];

            }

           frm.TipoObjPadre='BiFormSel';
           frm.IdObjPadre=this.id;
           frm.Cfg.CfgItems=newCfgItem;
           frm.Box=this.id+'_BoxForm';
           frm.Iniciar();
    }


   InstanciarST(fldName){

        var CfgItems={};
        var i=1;
        var RelCampos={};
        var item={};
        var DataSrc='';
        var Visible='';

        CfgItems[0]={"id":'Sel',"Orden":0,"Tipo": "Ctrl","idSrc":"","IdObj": "BiFormSel_PickSelector","Label":"Sel","CssClass": "Transp_Azul2","Param":this.id+"-"+fldName};

           for(var key in this.Relacion){           
               var Rel=this.Relacion[key];               
                   if(Rel.FormField==fldName){
                       DataSrc=Rel.DataSource;
                       RelCampos=Rel.Campos;
                   }
           }
           for(var key in RelCampos){
               item=RelCampos[key];
               if(item.TblVisible==1)Visible="PlainText"; else Visible="Hidden"; 
               CfgItems[i]={"id":item.id,"Orden":i,"Tipo": "Fld","idSrc":item.TblField,"IdObj": Visible,"Label":item.TblLabel},
               i++;
           }    



       var CfgTabla={
           "id": 'TBL-'+fldName+'-'+this.id,
           "TipoObjPadre": "Formulario",
           "IdObjPadre": this.idForm,
           "IdSource": DataSrc,
           "Style": {},
           "CssClass": "",
           "CfgItems":CfgItems,
           "CfgEventos": {}
       }; 

       var cfgST={
           "id": 'ST-'+fldName+'-'+this.id,
           "TipoObjPadre": "Null",
           "IdObjPadre": "Null",
           "Titulo": "Selector",
           "idTabla": "",
           "CfgTabla":CfgTabla,
           "ModoInicio": "RO",
           "Header": {
               "Filtros": {"0": {"Orden": "1","idSrc": "ST_BusqFull","Tipo": "Filtro","IdObj": "BiFormSel_BusqGral","Value": "","Label": "Buscar","ClassEvt": "","CssClass": "","Style": {}}},
               "Ctrl": {}
           },
           "Footer": {},
           "ModalQuery": {},
           "CfgEventos": {}
       };

       return cfgST;
           

    }

    async TraerSelector(){

         var fldName=this.ObjEvt.getAttribute("Param");
        var cfgST=this.InstanciarST(fldName);
        var cl=new SuperTabla('ST-'+fldName+'-'+this.id);                   
            cl.Box=this.id+'_BoxLOV'; 
            cl.Cfg=cfgST;
            await cl.Iniciar();

    }
    async STBusqGral(){

        var fldName=this.ObjEvt.id.split('-')[4];

        var cfgST=this.InstanciarST(fldName);
        var cl=new SuperTabla('ST-'+fldName+'-'+this.id);                   
            cl.Box=this.id+'_BoxLOV'; 
            cl.Cfg=cfgST;
            await cl.Eventos(this.ObjEvt,'SuperTabla_Buscar','');
    }


    PickSelector(){

        var Relacion=this.Cfg.Relacion;
        var itemCampo={};
        var ItemTabla;
        var ItemTablaValue;
        var objid=this.ObjEvt.id.split('-');
        var NroItem=objid[1];
        var fldName=this.ObjEvt.getAttribute("Param");

        for(var key in Relacion){           
                       
            if(Relacion[key].FormField==fldName){

                    var Campos=Relacion[key].Campos;
                    for(var key2 in Campos){
                        itemCampo=Campos[key2];

                        ItemTabla=document.getElementById(itemCampo.TblField+"-"+NroItem+"-Fld-null");
                        if(ItemTabla.tagName=='INPUT')ItemTablaValue=ItemTabla.value;
                        else ItemTablaValue=ItemTabla.innerHTML;


                        if(itemCampo.FillFldForm!=null && itemCampo.FillFldForm!="" && itemCampo.FillFldForm!="Null")
                                 document.getElementById(itemCampo.FillFldForm+"-0-Fld-"+this.Cfg.IdObj).value=ItemTablaValue;

                    }    

            }
            
            
    
        }


    }



        

}

