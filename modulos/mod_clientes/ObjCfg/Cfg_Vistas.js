function CfgVistas(id,Param){
var ret={};

ret["VST_Clientes"]={
    "id": "VST_Clientes",
    "Grid": "GR_1x1",
    "OnGridFill": "1",
    "EvtInicio": "",
    "CssClass": "",
    "Style": {},
    "Estados": {
        "0": {
            "OnOff": {
                "0": {
                    "IdObj": "GR_1x1-0-0",
                    "Visibilidad": "SHOW"
                }
            }
        }
    },
    "GridFill": {
        "0": {
            "Col": "GR_1x1-0-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ListaClientes",
            "EvtInicio": "Iniciar",
            "Param": {}
        }
    }
};

ret["VST_ListadoClientes"]={
    "id": "VST_ListadoClientes",
    "Titulo": "Listado de Clientes",
    "Icono": "fa-list",
    "Descripcion": "Listado de todos los clientes",
    "Vista": {
        "0": {
            "Zona": "Principal",
            "Tipo": "Ui",
            "IdObj": "Tabla",
            "idSrc": "",
            "Label": "",
            "Param": {
                "ObjId": "TBL_GrillaCliDet"
            },
            "Style": {},
            "CssClass": ""
        }
    }
};

if(id=="" || id==undefined){return ret;}
else{if(ret[id])return ret[id];	else {}}

}
