function CfgRelaciones(id,Param){
var ret={};

ret["REL_PropMarca"]={
    "id": "REL_PropMarca",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Tabla",
            "IdObjGet": "TBL_ListaMarcas",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_PropietarioMarca",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidMarca"
                }
            },
            "Condicionales": {}
        },
        "1": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_PropietarioSelecto",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_PropietarioMarca",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidProp"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_PropMarcaBuscar"]={
    "id": "REL_PropMarcaBuscar",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_PropietarioSelecto",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_PropietarioMarca",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidProp"
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
