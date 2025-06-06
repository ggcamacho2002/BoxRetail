async function Scripts_AgregarProducto(ObjEvt,Params){

   var aux=ObjEvt.id.split('-');
   aux[0]='CodPropio';
   aux[2]='Fld';
   var codpropio=aux.join('-');

    var codAgregar=document.getElementById(codpropio).value;
    var idProv=document.getElementById("DSid-0-Fld-FRM_Proveedor").value;

    if(codAgregar!=''){

            var cl=new DataSources('DS_ProveedorProducto');      
                cl.Metodo="DataSources_InsertOne";       
                cl.SetFields={0: {DSidProd:codAgregar, DSidProv: idProv}}
                await cl.Iniciar();


    }else alert('Error : CodPropio vacio, Antes debe Mapear el Campo !!!!');

}