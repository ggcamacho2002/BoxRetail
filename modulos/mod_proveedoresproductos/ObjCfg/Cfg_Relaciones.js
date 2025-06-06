function CfgRelaciones(id,Param){
var ret={};

ret["REL_ProveedorProducto"]={
    "id": "REL_ProveedorProducto",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Proveedor",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_ProveedorProducto",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidProv"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_AgregarProdProv"]={
    "id": "REL_AgregarProdProv",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Tabla",
            "IdObjGet": "TBL_Productos",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ProveedorProducto",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidProd"
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Proveedor",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ProveedorProducto",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidProv"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_ExcelProvProducto"]={
    "id": "REL_ExcelProvProducto",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_ExcelProvProd",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ExcelProvProducto",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSFile",
                    "ItemObjSet": "DSFile"
                }
            },
            "Condicionales": {}
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
