class LocalStorange {
  constructor(id) {
    this.id = "id";
    this.Param = "";
    this.Out=null;
    
  }


Eventos(ObjEvt,IdEvt,Param) {

  this.Param=Param;
  switch(IdEvt) {
          case "LocalStorange_SetTablaSelecto":this.SetTablaSelecto(); break;
          case "LocalStorange_Get-Delete":this.GetDelete(); break;
          case "LocalStorange_Get":this.Get(); break;
      }
  }

Get(){

  var clave=this.Param[0].Value;
      this.Out=localStorage.getItem(clave);

}


SetTablaSelecto(){

  var clave=this.Param[0].Value;
  var Tabla=this.Param[1].IdObj;
  var campo=this.Param[1].ItemObj;

      var itemSelecto=document.getElementById("frm"+Tabla).getAttribute('itemselecto');      
      var valorSet=Traer_Valor_Html(document.getElementById(campo+"-"+itemSelecto+"-Fld-"+Tabla));

      localStorage.setItem(clave,valorSet);

}

GetDelete(){

  var clave=this.Param.Value;
      this.Out=localStorage.getItem(clave);
      localStorage.removeItem(clave);
}




}

