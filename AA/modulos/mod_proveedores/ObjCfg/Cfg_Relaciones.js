function CfgRelaciones(id,Param){
var ret={};

ret["REL_TasaImpuesto"]={
    "id": "REL_TasaImpuesto",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Tabla",
            "IdObjGet": "TBL_TasasImpuestos",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ProveedorImp",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidimpuesto"
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Proveedor",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ProveedorImp",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidproveedor"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_ProvImpuestos"]={
    "id": "REL_ProvImpuestos",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Proveedor",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_ProveedorImp",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidproveedor"
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
