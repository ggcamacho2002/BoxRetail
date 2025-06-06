async function Scripts_Validaciones(ObjEvt,Params){


        var auxid=ObjEvt.id.split('-');
        var name=auxid[0];
        var ret='';

            switch(name){

                case "AgregarCobro":ret=ValAgregarCobro(ObjEvt,auxid);break;
                case "CerrarPedido":ret=ValCerrarPedido(ObjEvt,auxid);break;
                case "CerrarComanda":ret=ValCerrarComanda(ObjEvt,auxid);break;
                case "Finalizar":ret=ValFinalizarComanda(ObjEvt,auxid);break;
                case "CtaCte":ret=HablitadoChequeCtaCte(name);break;
                case "Cheque":ret=HablitadoChequeCtaCte(name);break;
                case "Facturar":ret=ValFinalizarComanda(ObjEvt,auxid);break;
                case "Anular":ret=ValAnularComanda(ObjEvt,auxid);break;
            }

           return ret;

}


function ValAnularComanda(ObjEvt){
    var comentario=document.getElementById('DScomentario-0-Fld-FRM_AnularRemito').value;

    if (!comentario || /^\s*$/.test(comentario)) {

           alert('Debe agreagr un comentario con el motivo de la anulacion !!!'); 
           return 'ErrorStop';   
    }

}
async function validacionFormulario(ObjEvt){

    var frm=ObjEvt.closest('form')
    var v = frm.checkValidity();
     
    if(v==false){ 
        alert('Formulario : Verifique los Datos Ingresados !!!!');
        return 'ErrorStop';      
     }

}
async function HablitadoChequeCtaCte(tipo){
    var aux=1;
    var id='';
    if(tipo=="CtaCte") id='DSmaxctacte-0-Fld-FRM_NuevoRecibo';
    if(tipo=="Cheque") id='DScheque-0-Fld-FRM_NuevoRecibo';
    var aux=document.getElementById(id).value;
      if(aux==0){
        alert('No Habilitado !!!!');
        return 'ErrorStop';   
    }  

}
async function validacionFormulario(ObjEvt){

    var frm=ObjEvt.closest('form')
    var v = frm.checkValidity();
     
    if(v==false){ 
        alert('Formulario : Verifique los Datos Ingresados !!!!');
        return 'ErrorStop';      
     }

}


function ValAgregarCobro(ObjEvt,auxid){

    if(auxid[3]=='FRM_CobroCtaCte'){
        var monto=parseFloat(document.getElementById('DSmonto-0-Fld-FRM_CobroCtaCte').value);
        var dispo=parseFloat(document.getElementById('MontoDisp-0-Fld-FRM_CobroCtaCte').value);

        if(monto>dispo){
                 alert('El monto supera al saldo disponible !!!');
                 return 'ErrorStop'
        }
       return validacionFormulario(ObjEvt);
}       

}
function ValCerrarComanda(ObjEvt,auxid){

        var Subtotal=document.getElementById('Subtotal-0-Fld-ST_ComandasItems').value;
        Subtotal=parseFloat(Subtotal)
        if(Subtotal==0){
                 alert('Debe cargar almenos un Item!!!');
                 return 'ErrorStop'
        }

       return '';

}
function ValCerrarPedido(ObjEvt,auxid){

    var Subtotal=document.getElementById('Subtotal-0-Fld-ST_ComandasItems').value;
    Subtotal=parseFloat(Subtotal)
    if(Subtotal==0){
             alert('Debe cargar almenos un Item!!!');
             return 'ErrorStop'
    }

   return '';

}


function ValFinalizarComanda(ObjEvt,auxid){

        var Restan=document.getElementById('Restan-0-Fld-ST_ListaFormaCobro').value;
        var CondIva=document.getElementById('DSDetalleCondicionIva-0-Fld-FRM_NuevoRecibo').value;

        if(Restan != '0'){
                 alert('Debe completar el pago !!!');
                 return 'ErrorStop'
        }
        if(ObjEvt.id=="Facturar-0-Ctrl-ST_ListaFormaCobro"){
                if(CondIva == 'Responsable Inscripto'){
                    alert('Para Facturar a Responsable Inscripto Finalize la comanda y  hagalo en facturas Manuales!!!');
                    return 'ErrorStop'
                }
        }

       return '';

}

