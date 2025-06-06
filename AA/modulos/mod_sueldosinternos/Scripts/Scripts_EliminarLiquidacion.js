function Scripts_EliminarLiquidacion(ObjEvt,Params){

        var auxid=ObjEvt.id.split('-');
        var item=auxid[1];

        var estado=document.getElementById('DSestado-'+item+'-Fld-TBL_ListaLiquidaciones').innerHTML;

        if(estado=='Activo'){

                var tabla=ObjEvt.closest('table');

                var cl=new Tabla(tabla.id);
                    cl.Eventos(ObjEvt,'Tabla_DelItemConfirm','');


                    
        }else{

            alert('Para que una liquidacion se pueda eliminar su estado deber ser ACTIVO !!!!!');

        }


}