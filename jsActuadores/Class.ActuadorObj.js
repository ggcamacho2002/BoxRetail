class ActuadorObj{

    constructor(id){
        
        this.id=id;this.Entrada;
        this.TipoObjPadre=null;
        this.IdObjPadre=null;
        this.IdObj=null;  
        this.Tipo=null;      

        this.Clase;
        this.ClaseEvt='';
        this.IdEvt='';
        this.Param='';	
        this.idHtml;
        this.Evento;
        
        this.Label='';
        this.CssClass='';
        this.Style='';

        this.NroItem=0;	
        this.Requerido;	
        this.Value='';
        this.Comun='';
        this.TagLabel=0;
        this.PlaceHolder=0;
        this.Valid='';
    
        this.InstEvtClick="";	
        this.InstEvtChange="";	
        this.InstEvtKeyPressEnter="";	

        this.ReturnArrKeys=0;
      
    };

    IniciarPropiedades(){
        
        if(!this.CssClass)this.CssClass='';
        this.Clase=this.Tipo;
        if(this.Style!='') this.Style=`style='${this.Style}'`;
        if(this.PlaceHolder!='')this.PlaceHolder=`placeholder='${this.Label} ..........'`;  

}
   async Iniciar(){

      this.IniciarPropiedades();  
        
      var ObjSel=this.TraerArrayObj();

             switch(ObjSel.Tag){

                    case "Div": this.TraerPlainText(ObjSel);break;	
                    case "Input":this.TraerInput(ObjSel);break;	
                    case "Select":await this.TraerSelect(ObjSel);break;	
                    case "Button":this.TraerButton(ObjSel);break;	
                    case "BotonValor":this.TraerButtonValor(ObjSel);break;	
                    case "Icon":this.TraerIcon(ObjSel);break;	
                    case "FieldButton":this.TraerFieldButton(ObjSel);break;	
                    case "InputLabelDiv":this.TraerInputLabelDiv(ObjSel);break;	
                    case "TextLabelDiv":this.TraerTextLabelDiv(ObjSel);break;	
                    case "Form_Alta":this.TraerForm_Alta(ObjSel);break;	
                    case "Form_Editar":this.TraerForm_Editar(ObjSel);break;	
                    case "BiFormSel_InitSelector":this.TraerBiFormSel_InitSelector(ObjSel);break;	
                    case "BiFormSel_PickSelector":this.TraerBiFormSel_PickSelector(ObjSel);break;	
                    case "BiFormSel_BusqGral":this.TraerBiFormSel_BusqGral(ObjSel);break;	
                    case "File":this.TraerInputFile(ObjSel);break;	
                    case "PlainTextNumero":this.TraerPlainTextNumero(ObjSel);break;
                    case "InputAnio":this.TraerAnio(ObjSel);break;	
                    case "InputMes":this.TraerMes(ObjSel);break;	

                    ////////especiales
                    case "ST_ModalQuery":this.TraerST_ModalQuery(ObjSel);break;	
                    case "ST_OrdenManual":this.TraerST_OrdenManual(ObjSel);break;	
                    case "ST_BusqFull":this.TraerST_BusqFull(ObjSel);break;

            }

}


TraerArrayObj(){

            var Act={};

                Act['Hidden']={Tag:'Input',Type:'hidden'};
                Act['PlainText']={Tag:'Div',Type:'PlainText'};
                Act['PlainTextNumero']={Tag:'PlainTextNumero',Type:'PlainTextNumero'};
                Act['InputText']={Tag:'Input',Type:'text'};
                Act['InputTextRO']={Tag:'Input',Type:'text',PropExtra:'readOnly'};
                Act['InputFecha']={Tag:'Input',Type:'date'};
                Act['InputAnio']={Tag:'InputAnio',Type:'InputAnio'};
                Act['InputMes']={Tag:'InputMes',Type:'InputMes'};                
                Act['InputNumber']={Tag:'Input',Type:'number'};
                Act['InputNumberRO']={Tag:'Input',Type:'number',PropExtra:'readOnly'};
                Act['InputTextROClick']={Tag:'Input',Type:'text',PropExtra:'readOnly'};
                Act['InputCheck']={Tag:'Input',Type:'checkbox'};
                Act['ComboStaticVal']={Tag:'Select',Type:'ComboStaticVal'};
                Act['ComboDataSource']={Tag:'Select',Type:'ComboDataSource'};
                Act['BotonComun']={Tag:'Button',Type:'button'};
                Act['BotonValor']={Tag:'BotonValor',Type:'BotonValor'};
                Act['BotonIcon']={Tag:'Button',Type:'button'};
                Act['FieldButton']={Tag:'FieldButton',Type:'button'};
                Act['ST_ModalQuery']={Tag:'ST_ModalQuery',Type:'text'};
                Act['InputLabelDiv']={Tag:'InputLabelDiv',Type:'text'};
                Act['TextLabelDiv']={Tag:'TextLabelDiv',Type:'text'};
                Act['InputROLabelDiv']={Tag:'InputLabelDiv',Type:'text',PropExtra:'readOnly'};
                Act['Form_Alta']={Tag:'Form_Alta',Type:'text'};
                Act['Form_Editar']={Tag:'Form_Editar',Type:'text'};
                Act['BiFormSel_InitSelector']={Tag:'BiFormSel_InitSelector',Type:'text',PropExtra:'readOnly'};
                Act['BiFormSel_PickSelector']={Tag:'BiFormSel_PickSelector',Type:'text'};
                Act['BiFormSel_BusqGral']={Tag:'BiFormSel_BusqGral',Type:'text'};
                Act['File']={Tag:'File',Type:'text'};
                Act['ST_BusqFull']={Tag:'ST_BusqFull',Type:'text'};
                Act['ST_OrdenManual']={Tag:'ST_OrdenManual',Type:'Button'};
    
    if(this.ReturnArrKeys==1)return Act;
    else return Act[this.IdObj];

}  
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

    TraerPlainText(o){
        
        this.Out=`<div ${this.Comun} Param='${this.Param}' value="${this.Value}" class="${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style}>${this.Value}</div>`;
    }
    TraerInput(o){        
        this.Out=`<input ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" ${this.PlaceHolder} class="${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style} ${o.PropExtra} ${this.Valid}/>`;
       if(o.Type!='hidden') if(this.TagLabel==1) this.Out=`<label for="${this.id}">${this.Label}</label> ${this.Out}`;
    }

    TraerButton(o){
        this.Out=`<button ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" class="Btn ${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style}> ${this.Label}</button>`;
    }
    TraerButtonValor(o){
        this.Out=`<button ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" class="Btn ${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style}> ${this.Value}</button>`;
    }

    TraerIcon(o){
        this.Out=`<button ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" class="Btn ${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style}> ${this.Label}</button>`;
    }    
    
    
    async TraerSelect(Param){

        this.CargarParam();
      
        var LOV={};

        if(Param.Type=='ComboDataSource'){
            var cl=new DataSources(this.Param[0].Value);
                cl.Metodo='DataSources_Buscar';
                await cl.Iniciar();
                LOV['ListOfValue']=this.ModifDataSourceSelect(cl);
       }
        if(Param.Type=='ComboStaticVal'){
            LOV=CfgStaticData(this.Param[0].Value);
        }        
        var Options=this.TraerOptionSelect(LOV.ListOfValue);
        this.Out=`<select ${this.Comun}" ${this.InstEvtChange} ${this.InstEvtClick}  ${this.Style} class="${this.Clase} ${this.IdObj} ${this.CssClass}">${Options}</select>`;
        if(Param.Type!='hidden') if(this.TagLabel==1) this.Out=`<label for="${this.id}">${this.Label}</label> ${this.Out}`;
    }
    
    CargarParam(){

        if (typeof this.Param === "string") {
            this.Param=JSON.parce(this.Param);
          }
    }
    

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////ESPECIALES//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

TraerAnio(o){        
    this.Out=`<input ${this.Comun} Param='${this.Param}' type="number value="${this.Value}" ${this.PlaceHolder} class="${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style} min="1900" max="2150" step="1" ${this.Valid}>`;
   if(o.Type!='hidden') if(this.TagLabel==1) this.Out=`<label for="${this.id}">${this.Label}</label> ${this.Out}`;
}
TraerMes(o){        
    this.Out=`<input ${this.Comun} Param='${this.Param}' type="number" value="${this.Value}" ${this.PlaceHolder} class="${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style} min="1" max="12" step="1" ${this.Valid}>`;
   if(o.Type!='hidden') if(this.TagLabel==1) this.Out=`<label for="${this.id}">${this.Label}</label> ${this.Out}`;
}


TraerInputFile(o){        
    this.Out='';
    this.Out=`<label for="${this.id}">${this.Label}</label> ${this.Out}`;
    this.Out+=`<div id="DivSubirFile_${this.id}" class="DivSubirFile">
                        <input type="file" id="SubirFile_${this.id}" accept=".xlsx,.xls" style="display:none;" onchange="new ActuadorObj().CargarFile('${this.id}');">
                        <div id="FileLabel_${this.id}" class="${this.Clase} ${this.IdObj} ${this.CssClass}" onclick="document.getElementById('SubirFile_${this.id}').click()"> Buscar Archivo ....</div>
                        <input id="DivLabelFlot_Hidden" type="text" value="" style="display:none">
                        <button value="${this.Value}" class="Btn Transp_Verde1" ${this.Style} onclick="new ActuadorObj('${this.id}').ResetFile()" >Reset</button>
                </div>`;
  
}
TraerST_BusqFull(o){

    this.Out=`<input ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" ${this.PlaceHolder} class="${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style}  onkeypress="if(event.which == 13) {new SuperTabla('${this.IdObjPadre}').Eventos(this,'SuperTabla_Buscar');}"/>`;
}

TraerInputLabelDiv(o){        
    this.Out=`<input ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" class="${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style} ${o.PropExtra} ${this.Valid}>`;    
    this.Out=`<div class="InputLabelDiv"><div class="ILDLabel">${this.Label}</div><div class="ILDInput">${this.Out}</div></div>`;
}
TraerTextLabelDiv(o){        
    this.Out=`<textarea  ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" class="${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style} ${o.PropExtra} ${this.Valid}></textarea>`;    
    this.Out=`<div class="InputLabelDiv"><div class="ILDLabel">${this.Label}</div><div class="ILDInput">${this.Out}</div></div>`;
}
TraerPlainTextNumero(o){      
    
    const formateador = new Intl.NumberFormat('es-AR', { style: 'decimal',minimumFractionDigits: 2,});
    const valor = formateador.format(this.Value);      
    this.Out=`<div ${this.Comun} Param='${this.Param}' value="${this.Value}" class="${this.Clase} ${this.IdObj} ${this.CssClass}">${valor}</div>`;
}
TraerST_ModalQuery(o){
    if(this.CssClass=='')this.CssClass='Fill_Azul1'
    this.Out=`<button ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" class="Btn ${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style} onclick="new SuperTabla('${this.IdObjPadre}').Eventos(this,'SuperTabla_ModalQuery');"> ${this.Label}</button>`;
}
TraerST_OrdenManual(o){
    if(this.CssClass=='')this.CssClass='Fill_Violeta1'
    this.Out=`<button ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" class="Btn ${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style} onclick="new SuperTabla('${this.IdObjPadre}').Eventos(this,'SuperTabla_OrdenManual');"> ${this.Label}</button>`;
}
TraerForm_Alta(o){
    if(this.CssClass=='')this.CssClass='Fill_Rojo1'
    this.Out=`<button ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" class="Btn ${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style} onclick="new Formulario('${this.IdObjPadre}').Eventos(this,'Formulario_InsertBd');"> ${this.Label}</button>`;
}
TraerForm_Editar(o){
    if(this.CssClass=='')this.CssClass='Fill_Rojo1'
    this.Out=`<button ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" class="Btn ${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style} onclick="new Formulario('${this.IdObjPadre}').Eventos(this,'Formulario_InsertBd');"> ${this.Label}</button>`;
}

TraerBiFormSel_InitSelector(o){
    this.Out=`<input ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" ${this.PlaceHolder} class="InputText InputSelector ${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style} ${o.PropExtra} ${this.Valid} onclick="new BiFormSel('${this.IdObjPadre}').Eventos(this,'BiFormSel_IniciarSelector');">`;   
     if(this.TagLabel==1) this.Out=`<label for="${this.id}">${this.Label}</label> ${this.Out}`;   
}
TraerBiFormSel_PickSelector(o){
    var idobj=this.Param.split('-')[0];
    this.Param=this.Param.split('-')[1];

    var click=`new BiFormSel('${idobj}').Eventos(this,'BiFormSel_PickSelector');`
    if(this.CssClass=='')this.CssClass='Transp_Azul2'
    this.Out=`<button ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" class="Btn ${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style} onclick="${click}" >${this.Label}</button>`;
}
TraerBiFormSel_BusqGral(o){

    var auxid=this.IdObjPadre.split("-")[2];
    this.Out=`<input ${this.Comun} Param='${this.Param}' type="${o.Type}" value="${this.Value}" ${this.PlaceHolder} class="${this.Clase} ${this.IdObj} ${this.CssClass}" ${this.Style}  onkeypress="if(event.which == 13) {new BiFormSel('${auxid}').Eventos(this,'BiFormSel_BusqGral');}"/>`;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

EnviarOtroObjAlEvento(idObj,TipoEvt){

    if(this.Evento){
         if(this.Evento.Param){xJsonParam=JSON.stringify(this.Evento.Param);this.Evento.Param=this.Evento.Param.replace(/"/g, "&quot;");}
    return `new ${this.Evento.Clase}('${this.id}').Eventos(document.getElementById('${idObj}'),'${this.Evento[TipoEvt]}','${this.Evento.Param}');`;
    }else return '';    
}

TraerOptionSelect(Data){
    var xOption="";
    var xSelected="";
    for (var key in Data) {
        if(this.Value==Data[key].Value) xSelected="selected";
        else xSelected="";
        xOption+=`<option value="${Data[key].Value}" ${xSelected}>${Data[key].Label}</option>`;
    }
    return xOption;
}
ModifDataSourceSelect(cl){

    var cfgi=Object.values(cl.Cfg.CfgItems);
    var newdatos={};
    for (var key in cl.Out.datos){
        newdatos[key]={};
        for (var key2 in cl.Out.datos[key]){  
            var item =  cfgi.find(item => item.idSrc === key2);
                                       
            if(item.Label=='Value' || item.Label=='Label'){
                newdatos[key][item.Label]=cl.Out.datos[key][key2];
            }
                 
        }
    }
    return newdatos;
}
CargarParam(){

    if (typeof this.Param === "string") {
        this.Param=JSON.parse(this.Param);
      }
}

CargarFile(id) {

    var inputFile = document.getElementById('SubirFile_'+id);
    var label = document.getElementById('FileLabel_'+id);
    
    var fileName = inputFile.value.split('\\').pop();
    
    if (fileName) {
        label.innerHTML = fileName;
    } else {
        label.innerHTML = "Subir archivo";
    }
  
    //GrabarFileSrv();
  }
ResetFile() {
        document.getElementById(`SubirFile_${this.id}`).value='';
        document.getElementById(`FileLabel_${this.id}`).innerHTML=' Buscar Archivo ....';
  }
  

    
    
}

