function CfgRelaciones(id,Param){
var ret={};

ret["REL_Buscar"]={
    "id": "REL_Buscar",
    "Mapeo": {
        "0": {
            "Cardinalidad": "Uno-Uno",
            "TipoObjGet": "Formulario",
            "IdObjGet": "FRM_Robot",
            "TipoObjSet": "Formulario",
            "IdObjSet": "FRM_Robot",
            "ItemsObjs": {
                "0": {
                    "ItemObjGet": "DSMsgInput",
                    "ItemObjSet": "DSMsgInput"
                }
            },
            "Condicionales": {}
        }
    },
    "MapeoValor": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
