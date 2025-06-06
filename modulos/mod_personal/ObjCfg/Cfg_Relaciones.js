function CfgRelaciones(id,Param){
var ret={};

ret["REL_TareaApersonal"]={
    "id": "REL_TareaApersonal",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Tabla",
            "IdObjGet": "TBL_TareasSelect",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_PersonalRelTareas",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidtarea"
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_PersonalSelecto",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_PersonalRelTareas",
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
ret["REL_PersonalTareasAsignadas"]={
    "id": "REL_PersonalTareasAsignadas",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_PersonalSelecto",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_PersonalRelTareas",
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
ret["REL_PersonalSindicato"]={
    "id": "REL_PersonalSindicato",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Tabla",
            "IdObjGet": "TBL_Personal",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_PersonalSindicato",
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
