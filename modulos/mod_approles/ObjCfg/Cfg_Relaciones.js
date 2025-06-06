function CfgRelaciones(id,Param){
var ret={};

ret["REL_BsqRolModulo"]={
    "id": "REL_BsqRolModulo",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_RolSelecto",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_RolesModulos",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidrol"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_AltaRolModulo"]={
    "id": "REL_AltaRolModulo",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Tabla",
            "IdObjGet": "TBL_ListaRoles",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_AppRolModulo",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidrol"
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Tabla",
            "IdObjGet": "TBL_ListaModulos",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_AppRolModulo",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidmodulo"
                }
            },
            "Condicionales": {}
        }
    }
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
