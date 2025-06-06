function idSrcMultiSelect(ididSrc,valselect){

    var valididSrc=$(`#${ididSrc}`).val();
    

    var arrval=valididSrc.split(',');
    var existe=0;
    var txtfinal='';
    var coma=',';

    for (var key in arrval) {

        if(arrval[key]!=valselect){
            if(txtfinal=='')coma='';else coma=',';
            txtfinal+=coma+arrval[key];
        }else{
            existe=1;
        }

    }    

    if(existe==0){

        if(txtfinal=='')coma='';else coma=',';
        txtfinal+=coma+valselect;
    }

    return txtfinal;

}
function InputCkeckBool(ObjEvt){
    
    if($("#"+ObjEvt.id).is(":checked"))ObjEvt.value=1;
    else ObjEvt.value=0;


}
function CfgActuadoresMerge(ArrSelectos,FullArr){

	var NewArray={};
	for (var key in ArrSelectos) {
		NewArray[ArrSelectos[key]]={};
		NewArray[ArrSelectos[key]]=FullArr[ArrSelectos[key]];
	}
	return NewArray;
	
}

function UpNroItem(obj,item){

    var form=obj.closest('form');
    if(form){

            if(form.attributes)if(form.attributes.itemselecto){
                        form.attributes.itemselecto.value=item;
                        var itemdom=document.querySelector('#id-' + item + '-Fld-' + form.attributes.id.value);
                        if(itemdom)form.attributes.idselecto.value=itemdom.value;
            
                }
        
    }  

}

