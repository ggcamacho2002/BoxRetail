function CfgBiFormSel(id,Param){
var ret={};

ret["BiFormSel_AltaProducto"]={
    "id": "BiFormSel_AltaProducto",
    "TipoObj": "Formulario",
    "IdObj": "FRM_AltaProducto",
    "Style": {},
    "CssClass": "",
    "Param": {},
    "Relacion": {
        "0": {
            "FormField": "DSmarca",
            "DataSource": "DS_PropietarioMarca",
            "Campos": {
                "0": {
                    "TblOrden": "1",
                    "TblField": "DSMarca",
                    "TblLabel": "Marca",
                    "TblVisible": "1",
                    "FillFldForm": "DSmarca"
                },
                "1": {
                    "TblOrden": "2",
                    "TblField": "DSidMarca",
                    "TblLabel": "",
                    "TblVisible": "0",
                    "FillFldForm": "DSidMarca"
                },
                "2": {
                    "TblOrden": "3",
                    "TblField": "DSPropietario",
                    "TblLabel": "propietario",
                    "TblVisible": "1",
                    "FillFldForm": "Null"
                }
            }
        },
        "1": {
            "FormField": "DSidCategoriza",
            "DataSource": "DS_Categorizacion",
            "Campos": {
                "0": {
                    "TblOrden": "1",
                    "TblField": "DSCategoria",
                    "TblLabel": "Categoria",
                    "TblVisible": "1",
                    "FillFldForm": "DSCategoria"
                },
                "1": {
                    "TblOrden": "2",
                    "TblField": "DSSubCategoria",
                    "TblLabel": "SubCategoria",
                    "TblVisible": "1",
                    "FillFldForm": "DSSubCategoria"
                },
                "2": {
                    "TblOrden": "3",
                    "TblField": "DSTipo",
                    "TblLabel": "Tipo",
                    "TblVisible": "1",
                    "FillFldForm": "DSTipo"
                },
                "3": {
                    "TblOrden": "0",
                    "TblField": "DSSector",
                    "TblLabel": "Sector",
                    "TblVisible": "1",
                    "FillFldForm": "DSSector"
                },
                "4": {
                    "TblOrden": "",
                    "TblField": "DSid",
                    "TblLabel": "",
                    "TblVisible": "0",
                    "FillFldForm": "DSidCategoriza"
                },
                "5": {
                    "TblOrden": "4",
                    "TblField": "DSTipoResumido",
                    "TblLabel": "Tipo Res.",
                    "TblVisible": "1",
                    "FillFldForm": "DSTipoResumido"
                }
            }
        }
    }
};
ret["BiFormSel_EditarProducto"]={
    "id": "BiFormSel_EditarProducto",
    "TipoObj": "Formulario",
    "IdObj": "FRM_EditarProducto",
    "Style": {},
    "CssClass": "",
    "Param": {},
    "Relacion": {
        "0": {
            "FormField": "DSmarca",
            "DataSource": "DS_PropietarioMarca",
            "Campos": {
                "0": {
                    "TblOrden": "1",
                    "TblField": "DSMarca",
                    "TblLabel": "Marca",
                    "TblVisible": "1",
                    "FillFldForm": "DSmarca"
                },
                "1": {
                    "TblOrden": "2",
                    "TblField": "DSidMarca",
                    "TblLabel": "",
                    "TblVisible": "0",
                    "FillFldForm": "DSidMarca"
                },
                "2": {
                    "TblOrden": "3",
                    "TblField": "DSPropietario",
                    "TblLabel": "Propietario",
                    "TblVisible": "1",
                    "FillFldForm": ""
                }
            }
        },
        "1": {
            "FormField": "DSidCategoriza",
            "DataSource": "DS_Categorizacion",
            "Campos": {
                "0": {
                    "TblOrden": "1",
                    "TblField": "DSCategoria",
                    "TblLabel": "Categoria",
                    "TblVisible": "1",
                    "FillFldForm": "DSCategoria"
                },
                "1": {
                    "TblOrden": "2",
                    "TblField": "DSSubCategoria",
                    "TblLabel": "SubCategoria",
                    "TblVisible": "1",
                    "FillFldForm": "DSSubCategoria"
                },
                "2": {
                    "TblOrden": "3",
                    "TblField": "DSTipo",
                    "TblLabel": "Tipo",
                    "TblVisible": "1",
                    "FillFldForm": "DSTipo"
                },
                "3": {
                    "TblOrden": "0",
                    "TblField": "DSSector",
                    "TblLabel": "Sector",
                    "TblVisible": "1",
                    "FillFldForm": "DSSector"
                },
                "4": {
                    "TblOrden": "",
                    "TblField": "DSid",
                    "TblLabel": "",
                    "TblVisible": "0",
                    "FillFldForm": "DSidCategoriza"
                },
                "5": {
                    "TblOrden": "4",
                    "TblField": "DSTipoResumido",
                    "TblLabel": "Tipo Res.",
                    "TblVisible": "1",
                    "FillFldForm": "DSTipoResumido"
                }
            }
        }
    }
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
