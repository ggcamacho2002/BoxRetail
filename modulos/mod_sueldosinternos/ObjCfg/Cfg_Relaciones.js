function CfgRelaciones(id,Param){
var ret={};

ret["REL_InsertSueldoInt"]={
    "id": "REL_InsertSueldoInt",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_PersonalSelecto",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_SueldosInternos",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidpersonal"
                },
                "1": {
                    "ItemObjGet": "DSAntiguedad",
                    "ItemObjSet": "DSantiguedad"
                },
                "2": {
                    "ItemObjGet": "HsExtra",
                    "ItemObjSet": "DShsextra"
                },
                "3": {
                    "ItemObjGet": "INASISTENCIAS",
                    "ItemObjSet": "DSinasistencias"
                },
                "4": {
                    "ItemObjGet": "Adelantos",
                    "ItemObjSet": "DSadelantos"
                },
                "5": {
                    "ItemObjGet": "DescAdelantos",
                    "ItemObjSet": "DSdescadelanto"
                },
                "6": {
                    "ItemObjGet": "Dias",
                    "ItemObjSet": "DSdiastrabajados"
                }
            },
            "Condicionales": {},
        }
    }
};
ret["REL_PersonalSueldoItem"]={
    "id": "REL_PersonalSueldoItem",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_PersonalSelecto",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_LiquidacionItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "",
                    "ItemObjSet": ""
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_UltimoIdLiq"]={
    "id": "REL_UltimoIdLiq",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "LocalStore",
            "IdObjGet": "This",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_LiquidacionItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "system-RespUltEvento-queryId",
                    "ItemObjSet": "DSidsueldointerno"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_LiqItemImprimir"]={
    "id": "REL_LiqItemImprimir",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "LocalStore",
            "IdObjGet": "This",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_LiqItemsImprimir",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "system-RespUltEvento-queryId",
                    "ItemObjSet": "DSidsueldointerno"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_ListaLiquidaciones"]={
    "id": "REL_ListaLiquidaciones",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_ListaPersonal",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_ListaLiquidaciones",
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
