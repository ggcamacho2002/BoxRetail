function CfgBiFormSel(id,Param){
var ret={};

ret["BiFormSel_PersonalSindicato"]={
    "id": "BiFormSel_PersonalSindicato",
    "TipoObj": "Formulario",
    "IdObj": "FRM_PersonalSindicato",
    "Style": {},
    "CssClass": "",
    "Param": {},
    "Relacion": {
        "0": {
            "FormField": "DSnombreSindicato",
            "DataSource": "DS_Sindicatos",
            "Campos": {
                "0": {
                    "TblOrden": "1",
                    "TblField": "DSNombre",
                    "TblLabel": "Sindicato",
                    "TblVisible": "1",
                    "FillFldForm": "DSnombreSindicato"
                },
                "1": {
                    "TblOrden": "2",
                    "TblField": "DSid",
                    "TblLabel": "",
                    "TblVisible": "0",
                    "FillFldForm": "DSidsindicato"
                }
            }
        },
        "1": {
            "FormField": "DScategoria",
            "DataSource": "DS_SindicatosBasicos",
            "Campos": {
                "0": {
                    "TblOrden": "1",
                    "TblField": "DScategoria",
                    "TblLabel": "Categoria",
                    "TblVisible": "1",
                    "FillFldForm": "DScategoria"
                },
                "1": {
                    "TblOrden": "2",
                    "TblField": "DSid",
                    "TblLabel": "",
                    "TblVisible": "1",
                    "FillFldForm": "DSidcategoria"
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
