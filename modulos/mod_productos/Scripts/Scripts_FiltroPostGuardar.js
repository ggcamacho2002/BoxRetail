function Scripts_FiltroPostGuardar(ObjEvt,Params){


        var aux=ObjEvt.id.split('-');
        var idFormu=aux[3];
        aux[0]='DSNombre';
        aux[2]='Fld';
        var IdDSNombre=aux.join('-');
    
        var Formu=document.getElementById(idFormu);
    
        var Marca=Formu.querySelector('[name="DSmarca"]').value;
        var TipoResumido=Formu.querySelector('[name="DSTipoResumido"]').value;

     /*   var Detalle=Formu.querySelector('[name="DSDetalle"]').value;
        var Medida=Formu.querySelector('[name="DSMedida"]').value;
        var UnidadMedida=Formu.querySelector('[name="DSUnidMedida"]').value;
        var CantxPack=Formu.querySelector('[name="DSCantxPack"]').value;
    
     */
        var TipoinNombre=Formu.querySelector('[name="DSTipoInNombre"]').value;
        if(TipoinNombre==0)TipoResumido=' ';
        else TipoResumido=' '+TipoResumido.toUpperCase();

        var Nombre=Marca.toUpperCase()+TipoResumido;
        
        
        document.getElementById('ST_BusqFull-0-Filtro-ST_ListaProducto').value=Nombre;
    



}