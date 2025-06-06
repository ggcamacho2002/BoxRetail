function CfgSuperTabla(id,Param){
var ret={};

ret["ST_Manual"]={
    "id": "ST_Manual",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Liquidacion manual de sueldos",
    "idTabla": "TBL_ListaManual",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {},
        "Ctrl": {}
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {},
        "FiltroAvz": {},
        "Orden": {},
        "Param": {
            "0": {
                "idSrc": "DSLimite",
                "Label": "Limite",
                "Value": "100"
            }
        }
    },
    "CfgEventos": {}
};
ret["ST_SueldosLiquidacion"]={
    "id": "ST_SueldosLiquidacion",
    "TipoObjPadre": "Formulario",
    "IdObjPadre": "FRM_Variables",
    "Titulo": "Liquidacion de Sueldos",
    "idTabla": "TBL_SueldosLiquidacion",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {},
        "Ctrl": {}
    },
    "Footer": {
        "Fields": {},
        "Ctrl": {}
    },
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {},
        "FiltroAvz": {},
        "Orden": {},
        "Param": {
            "0": {
                "idSrc": "DSLimite",
                "Label": "Limite",
                "Value": "100"
            }
        }
    },
    "CfgEventos": {}
};
ret["ST_SueldoLiqItems"]={
    "id": "ST_SueldoLiqItems",
    "TipoObjPadre": "Formulario",
    "IdObjPadre": "FRM_TotalesLiquidacion",
    "Titulo": "Liquidacion Sueldo Items",
    "idTabla": "TBL_SueldoLiqItems",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {},
        "Ctrl": {}
    },
    "Footer": {
        "0": {
            "Orden": 0
        },
        "1": {
            "Orden": 1
        }
    },
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {},
        "FiltroAvz": {},
        "Orden": {},
        "Param": {
            "0": {
                "idSrc": "DSLimite",
                "Label": "Limite",
                "Value": "100"
            }
        }
    },
    "CfgEventos": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
