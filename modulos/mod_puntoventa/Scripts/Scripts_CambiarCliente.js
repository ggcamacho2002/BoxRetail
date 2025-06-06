function Scripts_CambiarCliente(ObjEvt,Params){
    var aux;
    var tr=ObjEvt.closest('tr');
    var frm=document.getElementById('FRM_Comanda');

    aux=tr.querySelector("input[name='DSid']");
    frm.DScli_clave.value=aux.value;
    localStorage.setItem("ClienteId",aux.value);

    aux=tr.querySelector("div[name='DSrazon_social']");
    frm.DScli_razon_social.value=aux.innerHTML;
    localStorage.setItem("ClienteRazonSocial",aux.innerHTML);

    aux=tr.querySelector("input[name='DSmaxctacte']");
    frm.DSmaxctacte.value=aux.value;
    localStorage.setItem("maxctacte",aux.value);

    aux=tr.querySelector("input[name='DScheque']");
    frm.DScheque.value=aux.value;
    localStorage.setItem("DScheque",aux.value);



}