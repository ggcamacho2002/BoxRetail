function CfgBiFormSel(id,Param){
var ret={};

ret["BiFormSel_NuevaComanda"]={
    "id": "BiFormSel_NuevaComanda",
    "TipoObj": "Formulario",
    "IdObj": "FRM_NuevaComanda",
    "Style": {},
    "CssClass": "",
    "Param": {},
    "Relacion": {
        "0": {
            "FormField": "DScli_razon_social",
            "DataSource": "DS_Clientes",
            "Campos": {
                "0": {
                    "TblOrden": "1",
                    "TblField": "DSid",
                    "TblLabel": "Id Cliente",
                    "TblVisible": "0",
                    "FillFldForm": "DScli_clave"
                },
                "1": {
                    "TblOrden": "2",
                    "TblField": "DSrazon_social",
                    "TblLabel": "Razon Social",
                    "TblVisible": "1",
                    "FillFldForm": "DScli_razon_social"
                },
                "2": {
                    "TblOrden": "2",
                    "TblField": "DSdescuento",
                    "TblLabel": "DSdescuento",
                    "TblVisible": "0",
                    "FillFldForm": "DScli_Descuento"
                },
                "3": {
                    "TblOrden": "3",
                    "TblField": "DSmaxctacte",
                    "TblLabel": "",
                    "TblVisible": "0",
                    "FillFldForm": "DSmaxctacte"
                },
                "4": {
                    "TblOrden": "4",
                    "TblField": "DScheque",
                    "TblLabel": "",
                    "TblVisible": "0",
                    "FillFldForm": "DScheque"
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
