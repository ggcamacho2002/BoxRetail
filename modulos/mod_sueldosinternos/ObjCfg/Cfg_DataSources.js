function CfgDataSources(id,Param){
var ret={};

ret["DS_SueldosIntItems"]={
    "id": "DS_SueldosIntItems",
    "TipoSource": "SrvConexion",
    "Class": "SueldosInternosItems",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSidpersonal",
            "Label": "Idpersonal"
        },
        "2": {
            "idSrc": "DStotal",
            "Label": "Total"
        },
        "3": {
            "idSrc": "DSfecha",
            "Label": "Fecha"
        },
        "4": {
            "idSrc": "DSestado",
            "Label": "Estado"
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
            "Label": "id"
        },
        "1": {
            "idSrc": "DSp_Nombre",
            "Label": "p_Nombre"
        },
        "2": {
            "idSrc": "DSp_Apellido",
            "Label": "p_Apellido"
        },
        "3": {
            "idSrc": "DSp_DNI",
            "Label": "p_DNI"
        },
        "4": {
            "idSrc": "DSp_FechaNacimiento",
            "Label": "p_FechaNacimiento"
        },
        "5": {
            "idSrc": "DSp_Sexo",
            "Label": "p_Sexo"
        },
        "6": {
            "idSrc": "DSp_Nacionalidad",
            "Label": "p_Nacionalidad"
        },
        "7": {
            "idSrc": "DSp_EstadoCivil",
            "Label": "p_EstadoCivil"
        },
        "8": {
            "idSrc": "DSp_Direccion",
            "Label": "p_Direccion"
        },
        "9": {
            "idSrc": "DSp_Telefono",
            "Label": "p_Telefono"
        },
        "10": {
            "idSrc": "DSp_Email",
            "Label": "p_Email"
        },
        "11": {
            "idSrc": "DSp_FechaIngreso",
            "Label": "p_FechaIngreso"
        },
        "12": {
            "idSrc": "DSEstado",
            "Label": "Estado"
        },
        "13": {
            "idSrc": "DShorasxjornal",
            "Label": "horasxjornal"
        },
        "14": {
            "idSrc": "DSidSindicato",
            "Label": "idSindicato"
        },
        "15": {
            "idSrc": "DSidcatSindicato",
            "Label": "idcatSindicato"
        },
        "16": {
            "idSrc": "DSidObraSocial",
            "Label": "idObraSocial"
        },
        "17": {
            "idSrc": "DSnombreSindicato",
            "Label": "nombreSindicato"
        },
        "18": {
            "idSrc": "DSPorcentaje",
            "Label": "Porcentaje"
        },
        "19": {
            "idSrc": "DScategoria",
            "Label": "categoria"
        },
        "20": {
            "idSrc": "DSObraSocial",
            "Label": "ObraSocial"
        },
        "21": {
            "idSrc": "DSBasico",
            "Label": "Basico"
        },
        "22": {
            "idSrc": "DSAntiguedad",
            "Label": "Antiguedad"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_SueldosInternos"]={
    "id": "DS_SueldosInternos",
    "TipoSource": "SrvConexion",
    "Class": "SueldosInternos",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSidpersonal",
            "Label": "Idpersonal"
        },
        "2": {
            "idSrc": "DStotal",
            "Label": "Total"
        },
        "3": {
            "idSrc": "DSfecha",
            "Label": "Fecha"
        },
        "4": {
            "idSrc": "DSestado",
            "Label": "Estado"
        },
        "5": {
            "idSrc": "DSantiguedad",
            "Label": "Antiguedad"
        },
        "6": {
            "idSrc": "DShsextra",
            "Label": "Hsextra"
        },
        "7": {
            "idSrc": "DSinasistencias",
            "Label": "Inasistencias"
        },
        "8": {
            "idSrc": "DSadelantos",
            "Label": "Adelantos"
        },
        "9": {
            "idSrc": "DSdescadelanto",
            "Label": "Descadelanto"
        },
        "10": {
            "idSrc": "DSnombrePersonal",
            "Label": "NombrePersonal"
        },
        "11": {
            "idSrc": "DSapellidoPersonal",
            "Label": "ApellidoPersonal"
        },
        "12": {
            "id": "diastrabajados",
            "idSrc": "DSdiastrabajados",
            "Label": "diastrabajados"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_LiquidacionItems"]={
    "id": "DS_LiquidacionItems",
    "TipoSource": "SrvConexion",
    "Class": "SueldosInternosItems",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "id"
        },
        "1": {
            "idSrc": "DSidsueldointerno",
            "Label": "idsueldointerno"
        },
        "2": {
            "idSrc": "DSestado",
            "Label": "estado"
        },
        "3": {
            "idSrc": "DSdetalle",
            "Label": "detalle"
        },
        "4": {
            "idSrc": "DSunidades",
            "Label": "unidades"
        },
        "5": {
            "idSrc": "DSvalorunitario",
            "Label": "valorunitario"
        },
        "6": {
            "idSrc": "DSremunerativo",
            "Label": "remunera"
        },
        "7": {
            "idSrc": "DSorden",
            "Label": "orden"
        },
        "8": {
            "idSrc": "DSfecha",
            "Label": "fecha"
        },
        "9": {
            "idSrc": "DSestadoSueldoInterno",
            "Label": "estadoSueldoInterno"
        },
        "10": {
            "idSrc": "DStotalSueldoInterno",
            "Label": "totalSueldoInterno"
        },
        "11": {
            "id": "tipo",
            "idSrc": "DStipo",
            "Label": "tipo"
        },
        "12": {
            "id": "DSdescuento",
            "idSrc": "DSdescuento",
            "Label": "DSdescuento"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {
        "0": {
            "idSrc": "DSorden",
            "Tipo": "ASC"
        }
    }
};
ret["DS_ListaLiquidaciones"]={
    "id": "DS_ListaLiquidaciones",
    "TipoSource": "SrvConexion",
    "Class": "SueldosInternos",
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
            "idSrc": "DStotal",
            "Label": "total"
        },
        "3": {
            "idSrc": "DSfecha",
            "Label": "fecha"
        },
        "4": {
            "idSrc": "DSestado",
            "Label": "estado"
        },
        "5": {
            "idSrc": "DSantiguedad",
            "Label": "antiguedad"
        },
        "6": {
            "idSrc": "DShsextra",
            "Label": "hsextra"
        },
        "7": {
            "idSrc": "DSinasistencias",
            "Label": "inasistencias"
        },
        "8": {
            "idSrc": "DSadelantos",
            "Label": "adelantos"
        },
        "9": {
            "idSrc": "DSdescadelanto",
            "Label": "descadelanto"
        },
        "10": {
            "idSrc": "DSdiastrabajados",
            "Label": "diastrabajados"
        },
        "11": {
            "idSrc": "DSnombrePersonal",
            "Label": "nombrePersonal"
        },
        "12": {
            "idSrc": "DSapellidoPersonal",
            "Label": "apellidoPersonal"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {
        "0": {
            "idSrc": "DSfecha",
            "Tipo": "DESC"
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
