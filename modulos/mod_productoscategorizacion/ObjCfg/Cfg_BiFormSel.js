function CfgBiFormSel(id,Param){
var ret={};

ret["BiFormSel_AltaCategoriza"]={
    "id": "BiFormSel_AltaCategoriza",
    "TipoObj": "Formulario",
    "IdObj": "FRM_AltaCategoriza",
    "Style": {},
    "CssClass": "",
    "Param": {},
    "Relacion": {
        "0": {
            "FormField": "DSCategoria",
            "DataSource": "DS_Categorias",
            "Campos": {
                "0": {
                    "TblOrden": "1",
                    "TblField": "DSCategoria",
                    "TblLabel": "Categoria",
                    "TblVisible": "1",
                    "FillFldForm": "DSCategoria"
                },
                "1": {
                    "TblOrden": "",
                    "TblField": "DSid",
                    "TblLabel": "",
                    "TblVisible": "0",
                    "FillFldForm": "DSidCategoria"
                }
            }
        },
        "1": {
            "FormField": "DSSubCategoria",
            "DataSource": "DS_SubCategorias",
            "Campos": {
                "0": {
                    "TblOrden": "2",
                    "TblField": "DSSubCategoria",
                    "TblLabel": "SubCategoria",
                    "TblVisible": "1",
                    "FillFldForm": "DSSubCategoria"
                },
                "1": {
                    "TblOrden": "99",
                    "TblField": "DSid",
                    "TblLabel": "",
                    "TblVisible": "1",
                    "FillFldForm": "DSidSubCategoria"
                }
            }
        },
        "2": {
            "FormField": "DSTipo",
            "DataSource": "DS_ProdTipos",
            "Campos": {
                "0": {
                    "TblOrden": "3",
                    "TblField": "DSProdTipo",
                    "TblLabel": "Tipo",
                    "TblVisible": "1",
                    "FillFldForm": "DSTipo"
                },
                "1": {
                    "TblOrden": "100",
                    "TblField": "DSid",
                    "TblLabel": "",
                    "TblVisible": "1",
                    "FillFldForm": "DSidTipoProducto"
                },
                "2": {
                    "TblOrden": "4",
                    "TblField": "DSProdTipoResumido",
                    "TblLabel": "Tipo Resumido",
                    "TblVisible": "1",
                    "FillFldForm": "DSTipoResumido"
                }
            }
        },
        "3": {
            "FormField": "DSSector",
            "DataSource": "DS_Sectores",
            "Campos": {
                "0": {
                    "TblOrden": "0",
                    "TblField": "DSSector",
                    "TblLabel": "Sector",
                    "TblVisible": "1",
                    "FillFldForm": "DSSector"
                },
                "1": {
                    "TblOrden": "",
                    "TblField": "DSid",
                    "TblLabel": "",
                    "TblVisible": "0",
                    "FillFldForm": "DSidSector"
                }
            }
        }
    }
};
ret["BiFormSel_EditarCategorizacion"]={
    "id": "BiFormSel_EditarCategorizacion",
    "TipoObj": "Formulario",
    "IdObj": "FRM_EditarCategorizacion",
    "Style": {},
    "CssClass": "",
    "Param": {},
    "Relacion": {
        "0": {
            "FormField": "DSCategoria",
            "DataSource": "DS_Categorias",
            "Campos": {
                "0": {
                    "TblOrden": "1",
                    "TblField": "DSCategoria",
                    "TblLabel": "Categoria",
                    "TblVisible": "1",
                    "FillFldForm": "DSCategoria"
                },
                "1": {
                    "TblOrden": "",
                    "TblField": "DSid",
                    "TblLabel": "",
                    "TblVisible": "0",
                    "FillFldForm": "DSidCategoria"
                }
            }
        },
        "1": {
            "FormField": "DSSubCategoria",
            "DataSource": "DS_SubCategorias",
            "Campos": {
                "0": {
                    "TblOrden": "1",
                    "TblField": "DSSubCategoria",
                    "TblLabel": "Sub Categoria",
                    "TblVisible": "1",
                    "FillFldForm": "DSSubCategoria"
                },
                "1": {
                    "TblOrden": "",
                    "TblField": "DSid",
                    "TblLabel": "",
                    "TblVisible": "0",
                    "FillFldForm": "DSidSubCategoria"
                }
            }
        },
        "2": {
            "FormField": "DSTipo",
            "DataSource": "DS_ProdTipos",
            "Campos": {
                "0": {
                    "TblOrden": "1",
                    "TblField": "DSProdTipo",
                    "TblLabel": "Tipo",
                    "TblVisible": "1",
                    "FillFldForm": "DSTipo"
                },
                "1": {
                    "TblOrden": "2",
                    "TblField": "DSProdTipoResumido",
                    "TblLabel": "Tipo Resum.",
                    "TblVisible": "1",
                    "FillFldForm": "DSTipoResumido"
                },
                "2": {
                    "TblOrden": "",
                    "TblField": "DSid",
                    "TblLabel": "",
                    "TblVisible": "0",
                    "FillFldForm": "DSidTipoProducto"
                }
            }
        },
        "3": {
            "FormField": "DSSector",
            "DataSource": "DS_Sectores",
            "Campos": {
                "0": {
                    "TblOrden": "1",
                    "TblField": "DSSector",
                    "TblLabel": "Sector",
                    "TblVisible": "1",
                    "FillFldForm": "DSSector"
                },
                "1": {
                    "TblOrden": "",
                    "TblField": "DSid",
                    "TblLabel": "",
                    "TblVisible": "0",
                    "FillFldForm": "DSidSector"
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
