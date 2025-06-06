function Scripts_ProcesarDiferencias(fila){
    var DSUnidPedida = ""
    var DSUnidRecibida = ""
    
    var DSPackPedido = "";
    var DSPackRecibida = "";
    var DSCantxPack = "";

    DSCantxPack = parseInt(fila.querySelector('input[name="DSCantxPack"]').value);

    DSUnidPedida = parseInt(fila.querySelector('input[name="DSUnidPedida"]').value);
    DSUnidRecibida =parseInt(fila.querySelector('input[name="DSirc_cantidad_recibida"]').value);

    DSPackPedido = parseInt(fila.querySelector('input[name="DSPackPedido"]').value);
    DSPackRecibida = parseInt(fila.querySelector('input[name="DSPackRecibido"]').value);
 
   var difUnidades = DSUnidRecibida - DSUnidPedida;

   fila.querySelector('input[name="DifUnidades"]').value=difUnidades;
   fila.querySelector('input[name="DifPack"]').value=(difUnidades/DSCantxPack).toFixed(2);
}