function CfgDataSources(id,Param){
var ret={};

ret["DS_Comprobante"]={
    "id": "DS_Comprobante",
    "TipoSource": "SrvConexion",
    "Class": "Comprobantes",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "id"
        },
        "1": {
            "idSrc": "DScomdescripcion",
            "Label": "comdescripcion"
        },
        "2": {
            "idSrc": "DScomestado",
            "Label": "comestado"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ComprobanteTipo"]={
    "id": "DS_ComprobanteTipo",
    "TipoSource": "SrvConexion",
    "Class": "ComprobantesTipo",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id",
            "Orden": 0
        },
        "1": {
            "idSrc": "DSTic_descripcion",
            "Label": "Tic_descripcion",
            "Orden": 1
        },
        "2": {
            "idSrc": "DSTic_estado",
            "Label": "Tic_estado",
            "Orden": 2
        },
        "3": {
            "idSrc": "DSCom_clave",
            "Label": "Com_clave",
            "Orden": 3
        },
        "4": {
            "idSrc": "DSTic_DeudorAcreedor",
            "Label": "Tic_DeudorAcreedor",
            "Orden": 4
        },
        "5": {
            "idSrc": "DSTic_numero",
            "Label": "Tic_numero",
            "Orden": 5
        },
        "6": {
            "idSrc": "DSCom_descripcion",
            "Label": "Com_descripcion",
            "Orden": 6
        },
        "7": {
            "idSrc": "DSCom_estado",
            "Label": "Com_estado",
            "Orden": 7
        },
        "8": {
            "id": "Tic_Orden",
            "idSrc": "DStic_orden",
            "Label": "Tic_Orden"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_ComprobanteCombo"]={
    "id": "DS_ComprobanteCombo",
    "TipoSource": "SrvConexion",
    "Class": "Comprobantes",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Value"
        },
        "1": {
            "id": "DScomdescripcion",
            "idSrc": "DScomdescripcion",
            "Label": "Label"
        },
        "2": {
            "id": "DScomestado",
            "idSrc": "DScomestado",
            "Label": "Comestado"
        }
    },
    "CfgFiltros": {
        "0": {
            "idSrc": "DScomestado",
            "Valor": "Activo",
            "Tipo": "Igual"
        }
    },
    "CfgParam": {},
    "CfgOrden": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
