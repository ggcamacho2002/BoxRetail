function CfgBiFormSel(id,Param){
var ret={};

ret["BiFormSel_SeleccionProveedor"]={
    "id": "BiFormSel_SeleccionProveedor",
    "TipoObj": "Formulario",
    "IdObj": "FRM_SeleccionProveedor",
    "Style": {},
    "CssClass": "",
    "Param": {},
    "Relacion": {
        "0": {
            "FormField": "DSid",
            "DataSource": "DS_Proveedores",
            "Campos": {
                "0": {
                    "TblOrden": "1",
                    "TblField": "DSRazonSocial",
                    "TblLabel": "Proveedor",
                    "TblVisible": "1",
                    "FillFldForm": "DSRazonSocial"
                },
                "1": {
                    "TblOrden": "2",
                    "TblField": "DSid",
                    "TblLabel": "id",
                    "TblVisible": "0",
                    "FillFldForm": "DSid"
                },
                "2": {
                    "TblOrden": "2",
                    "TblField": "DSTelefono",
                    "TblLabel": "Telefono",
                    "TblVisible": "0",
                    "FillFldForm": "DSTelefono"
                },
                "3": {
                    "TblOrden": "3",
                    "TblField": "DSMail",
                    "TblLabel": "Mail",
                    "TblVisible": "0",
                    "FillFldForm": "DSMail"
                }
            }
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
