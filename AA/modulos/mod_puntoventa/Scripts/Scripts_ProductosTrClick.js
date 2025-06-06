function Scripts_ProductosTrClick(ObjEvt,Params){
//DSNombreProducto-0-Fld-TBL_POSListaProductos
       
 var aux=ObjEvt.id.split('-');
 var Producto="";
 var tr=ObjEvt.closest('tr');
 var aux2=null;
 var frm=document.getElementById('FRM_CargaProducto');

 aux2=tr.querySelector("div[name='DSEstadoProducto']");
 var estado=aux2.innerHTML.toLowerCase();

       if(estado!='sinstock' && estado!='sin stock'){

              if (aux[0]=='DSNombreProducto')Producto=ObjEvt.innerHTML;
              else {
                     var aux2=tr.querySelector("div [name='DSNombreProducto']");
                     Producto=aux2.innerHTML;
              }
              frm.Producto.value=Producto;

              aux2=tr.querySelector("input[name='DSidProd']");
              frm.DSidProducto.value=aux2.value;

              aux2=tr.querySelector("input[name='DSCantxPack']");
              frm.DScantxpack.value=aux2.value;

              aux2=tr.querySelector("div[name='DSPClienteUnid']");
              frm.DSprecioventa.value=aux2.innerHTML;

              frm.Packs.value=0;
              frm.DScantPedida.value=frm.DScantxpack.value;

              frm.Packs.focus();
              frm.Packs.select();

       }else{
              var aux2=tr.querySelector("div [name='DSNombreProducto']");
              Producto=aux2.innerHTML;

              alert('El producto ' + Producto + ' no tiene Stock !!!!!' );

       }


}