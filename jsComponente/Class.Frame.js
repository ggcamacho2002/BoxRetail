class Frame{

    constructor(id){

            this.id=id;
            this.Cfg={};
            this.Out;
            this.Param;
            this.Box=null;
            this.CssClass==null;
            this.Style=null;
            this.Data;
            
     
       }
        
        CargarCfg(){
            
            if(this.Cfg==undefined || this.Cfg=='' || Object.keys(this.Cfg).length==0)
                                 this.Cfg=CfgFrame(this.id,this.Param);  
            if(this.Box==null)this.Box=this.Cfg.Box;
            if(this.CssClass==null)this.CssClass=this.Cfg.CssClass;
            if(this.Style!="")this.Style=`style="${ToolsTraerStyle(this.Cfg.Style)}"`;

        }



       async Iniciar(){

            this.CargarCfg();
            
            if(!document.getElementById(this.id))await this.Construir();
        }  
        
        async Construir(){
                  
                       var Html=`<div id='${this.id}' class='Frame ${this.CssClass}' ${this.Style}></div>`;
                    
                    if(this.Box){
                        if(this.Box!=''){
                                var clEvt=new ManejarDOM(this.id);
                                clEvt.Box=this.Box;
                                clEvt.Html=Html;
                               await clEvt.InsertarDOM();                          
                            }else this.Out=cl.Out;
                        }else this.Out=cl.Out;
    
        }	


        async Eventos(ObjEvt,idEvt,Param){	

            this.CargarCfg();

             if(!this.ObjEvt)if(ObjEvt!='')this.ObjEvt=ObjEvt;
             this.Param=CargarParam(Param);
             
             switch(idEvt){
                 
                 case 'Frame_Iniciar':                     
                    await this.Iniciar(); 
                 break;
                 case 'Frame_TraerHtml':                 
                    await this.TraerHtml();
                 break;
                 case 'Frame_Imprimir':                     
                    await this.Imprimir(); 
                 break;
                 case 'Frame_ImprimirFullDOM':                     
                       await this.ImprimirFullDOM(); 
                  
                 break;
                 case 'Frame_ImprimirFullDirecto':                     
                    await this.ImprimirFullDirecto(); 
                 break;

         }
  
     };


     async TraerHtml(){     

            var cl=new ServerConexion();

            cl.Class=this.Cfg.Class;
            cl.Metodo=this.Cfg.Metodo;	
            cl.Param=this.TraerParam();
           await cl.SrvGetHtml();
           return cl.Out;

          
        
        }


       TraerParam(){     
            var ParamInicial=this.Cfg.Param;
            var ParamFinal={}
            var value;

            for (var key in ParamInicial) {
                ParamFinal[key]={};

                if(ParamInicial[key].Tipo=="GetValue"){
                    value=Traer_Valor_Html(document.getElementById(ParamInicial[key]['Id/Value']));
                }else
                    if(ParamInicial[key].Tipo=="SetValue"){
                        value=ParamInicial[key]['Id/Value'];
                    }else
                        if(ParamInicial[key].Tipo=="LocalStore"){
                            value=localStorage.getItem(ParamInicial[key]['Id/Value']);
                        }
                
                ParamFinal[key]['idParam']=ParamInicial[key]['Key'];
                ParamFinal[key]['Value']=value;
            }

            return ParamFinal;
        
        }
        async Imprimir(){
            window.print();
        }

        async ImprimirFullDOM(){
                     var Html=await this.TraerHtml();
                    document.getElementById(this.id).innerHTML=Html;    
                    this.enviarImpresion(Html);
        }
        async ImprimirFullDirecto(){

                var Html=await this.TraerHtml();                
                Html=`<div id='${this.id}' class='Frame ${this.CssClass}' ${this.Style}>  ${Html} </div>`;
               this.enviarImpresion(Html);

        }


        async enviarImpresion(html){

            var newWin = window.open('', 'Print-Window');
            var html=`<html>
                <head>
                    <title></title>
                    <link rel="stylesheet" type="text/css" href="cssClassServer/${this.id}.css">
                </head>                            
                <body onload="window.print()">${html}</body>
            </html>
            `;


            newWin.document.open();
            newWin.document.write(html);
            newWin.document.close();

            setTimeout(function () {
            newWin.close();
            }, 10);
        }



        

}

