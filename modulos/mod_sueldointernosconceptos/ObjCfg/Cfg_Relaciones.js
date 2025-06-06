function CfgRelaciones(id,Param){
var ret={};

ret["REL_personalconcepto"]={
    "id": "REL_personalconcepto",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_PersonalSelecto",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_PersConcepto",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidpersonal"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_InsertConsepto"]={
    "id": "REL_InsertConsepto",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Tabla",
            "IdObjGet": "TBL_AllConceptos",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_PersConcepto",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidconcepto"
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_PersonalSelecto",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_PersConcepto",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidpersonal"
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
