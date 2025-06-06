function CfgSuperTabla(id,Param){
var ret={};

ret["ST_ListaClientes"]={
    "id": "ST_ListaClientes",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Lista Clientes",
    "idTabla": "TBL_ListaClientes",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "1",
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "ST_BusqFull",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "Orden": "1",
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Nuevo",
                "ClassEvt": "Nuevo",
                "CssClass": "Fill_Violeta2",
                "Style": {}
            }
        }
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
    "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},
    "ModalQuery":{
        "FiltrosRap": {
            "0": {
                "id": "FilDSrazon_social",
                "Orden": 0,
                "ColTarget": "DSrazon_social",
                "Label": "Razon Social",
                "Tipo": "Text",
                "idSrc": "",
                "Param": {}
            },
            "1": {
                "id": "FilDSid",
                "Orden": 1,
                "ColTarget": "DSid",
                "Label": "ID",
                "Tipo": "Text",
                "idSrc": "",
                "Param": {}
            },
            "2": {
                "id": "FilDSestado",
                "Orden": 2,
                "ColTarget": "DSestado",
                "Label": "Estado",
                "Tipo": "Text",
                "idSrc": "",
                "Param": {}
            }
        },
        "FiltrosAvz": {}
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
