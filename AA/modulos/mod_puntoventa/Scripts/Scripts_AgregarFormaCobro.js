async function Scripts_AgregarFormaCobro(ObjEvt,Params){

    var auxid=ObjEvt.id.split('-');
    
        switch(auxid[0]){

            case "Efectivo": await PrivateAgregaEfectivo(ObjEvt,Params);break;

        }


       

}
async function PrivateAgregaEfectivo(ObjEvt,Param){


   if(ObjEvt.value!=''){
        var monto=ObjEvt.value;
        var Desc="Efectivo";
        var Ent="Efectivo";
        var idEnt=0;
        var idrecibo=document.getElementById("idRecibo-0-Fld-FRM_NuevoRecibo").value;

        await PrivateInsertarReg(ObjEvt,Desc,monto,Ent,idEnt,idrecibo);

        document.getElementById("Efectivo-0-Fld-FRM_ClientesRecibosItemsAlta").value='';
   }else alert('El monto en efectivo debe ser un numero y no puede estar vacio !!!');


         

}



async function PrivateInsertarReg(ObjEvt,Desc,monto,Ent,idEnt,idrecibo){

var idrem=document.getElementById("DSidremito-0-Fld-FRM_NuevoRecibo").value;
var idcli=document.getElementById("DSidCliente-0-Fld-FRM_NuevoRecibo").value;

    var setfield={};
    setfield[0]={

        DSdescripcion:Desc,
        DSmonto:monto,
        DSentidad:Ent,
        DSidentidad:idEnt,
        DSidremito:idrem,
        DSidcliente:idcli,
        DSidrecibo:idrecibo,
    }
    var cl=new DataSources('DS_ClientesRecibosItems');
     cl.SetFields=setfield;
     await cl.Eventos(ObjEvt,"DataSources_InsertOne","");

}

