function CfgDataSources(id,Param){
var ret={};

ret["DS_SueldoIntConcepto"]={
    "id": "DS_SueldoIntConcepto",
    "TipoSource": "SrvConexion",
    "Class": "SueldosInternosConceptos",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "id"
        },
        "1": {
            "idSrc": "DSdescripcion",
            "Label": "descripcion"
        },
        "2": {
            "idSrc": "DSvalorunitario",
            "Label": "valorunitario"
        },
        "3": {
            "idSrc": "DSestado",
            "Label": "estado"
        },
        "4": {
            "idSrc": "DStipo",
            "Label": "tipo"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_Personal"]={
    "id": "DS_Personal",
    "TipoSource": "SrvConexion",
    "Class": "Personal",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "id",
            "Orden": 0
        },
        "1": {
            "idSrc": "DSp_Nombre",
            "Label": "p_Nombre",
            "Orden": 1
        },
        "2": {
            "idSrc": "DSp_Apellido",
            "Label": "p_Apellido",
            "Orden": 2
        },
        "3": {
            "idSrc": "DSp_DNI",
            "Label": "p_DNI",
            "Orden": 3
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_AllConceptos"]={
    "id": "DS_AllConceptos",
    "TipoSource": "SrvConexion",
    "Class": "SueldosInternosConceptos",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "id"
        },
        "1": {
            "idSrc": "DSdescripcion",
            "Label": "descripcion"
        },
        "2": {
            "idSrc": "DSvalorunitario",
            "Label": "valorunitario"
        },
        "3": {
            "idSrc": "DSestado",
            "Label": "estado"
        },
        "4": {
            "idSrc": "DStipo",
            "Label": "tipo"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_PersConcepto"]={
    "id": "DS_PersConcepto",
    "TipoSource": "SrvConexion",
    "Class": "SueldosIntPersConcepto",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "id"
        },
        "1": {
            "idSrc": "DSidpersonal",
            "Label": "idpersonal"
        },
        "2": {
            "idSrc": "DSidconcepto",
            "Label": "idconcepto"
        },
        "3": {
            "idSrc": "DSestado",
            "Label": "estado"
        },
        "4": {
            "id": "DSConcepto",
            "idSrc": "DSConcepto",
            "Label": "DSConcepto"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
