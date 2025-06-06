function CfgRelaciones(id,Param){
var ret={};

ret["REL_insertliquidacion"]={
    "id": "REL_insertliquidacion",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Variables",
            "TipoObjSet": "DataSources",
            "IdObjSet": "DS_SueldosLiquidacion",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidpersonal"
                },
                "1": {
                    "ItemObjGet": "Anio",
                    "ItemObjSet": "DSanio"
                },
                "2": {
                    "ItemObjGet": "Mes",
                    "ItemObjSet": "DSmes"
                },
                "3": {
                    "ItemObjGet": "exta50",
                    "ItemObjSet": "DShorasal50"
                },
                "4": {
                    "ItemObjGet": "Extra100",
                    "ItemObjSet": "DShorasal100"
                },
                "5": {
                    "ItemObjGet": "DiaTrabajado",
                    "ItemObjSet": "DSdiastrabajados"
                },
                "6": {
                    "ItemObjGet": "FeriadosTrabajados",
                    "ItemObjSet": "DSdiasferiados"
                },
                "7": {
                    "ItemObjGet": "DSidSindicato",
                    "ItemObjSet": "DSidsindicato"
                },
                "8": {
                    "ItemObjGet": "DSidcatSindicato",
                    "ItemObjSet": "DSidsindicatocat"
                },
                "9": {
                    "ItemObjGet": "DSidObraSocial",
                    "ItemObjSet": "DSidobrasocial"
                },
                "10": {
                    "ItemObjGet": "DSPorcentaje",
                    "ItemObjSet": "DSporcsindicato"
                },
                "11": {
                    "ItemObjGet": "DSBasico",
                    "ItemObjSet": "DSbasico"
                },
                "12": {
                    "ItemObjGet": "DSAntiguedad",
                    "ItemObjSet": "DSantiguedad"
                },
                "13": {
                    "ItemObjGet": "DShorasxjornal",
                    "ItemObjSet": "DShorasxjornal"
                }
            },
            "Condicionales": {}
        }
    }
};
ret["REL_SueldoLiqItems"]={
    "id": "REL_SueldoLiqItems",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_TotalesLiquidacion",
            "TipoObjSet": "Tabla",
            "IdObjSet": "TBL_SueldoLiqItems",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSid",
                    "ItemObjSet": "DSidliquidacion"
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
