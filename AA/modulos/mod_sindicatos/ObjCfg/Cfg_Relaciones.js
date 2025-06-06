function CfgRelaciones(id,Param){
var ret={};

ret["REL_SindicatosBasicos"]={
    "id": "REL_SindicatosBasicos",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_SindicatoSelecto",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_SindicatosBasicos",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidsindicato"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_InsertCategoriaBasico"]={
    "id": "REL_InsertCategoriaBasico",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_SindicatoSelecto",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_SindicatosBasicos",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidsindicato"
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_AltaSindicatosBasicos",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_SindicatosBasicos",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DScategoria",
                    "ItemObjSet": "DScategoria"
                },
                "1": {
                    "ItemObjGet": "DSbasico",
                    "ItemObjSet": "DSbasico"
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
