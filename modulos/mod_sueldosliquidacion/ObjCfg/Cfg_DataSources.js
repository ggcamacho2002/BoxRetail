function CfgDataSources(id,Param){
var ret={};

ret["DS_Personal"]={
    "id": "DS_Personal",
    "TipoSource": "SrvConexion",
    "Class": "Personal",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSp_Nombre",
            "Label": "P Nombre"
        },
        "2": {
            "idSrc": "DSp_Apellido",
            "Label": "P Apellido"
        },
        "3": {
            "idSrc": "DSp_DNI",
            "Label": "P DNI"
        },
        "4": {
            "idSrc": "DSp_FechaNacimiento",
            "Label": "P FechaNacimiento"
        },
        "5": {
            "idSrc": "DSp_Sexo",
            "Label": "P Sexo"
        },
        "6": {
            "idSrc": "DSp_Nacionalidad",
            "Label": "P Nacionalidad"
        },
        "7": {
            "idSrc": "DSp_EstadoCivil",
            "Label": "P EstadoCivil"
        },
        "8": {
            "idSrc": "DSp_Direccion",
            "Label": "P Direccion"
        },
        "9": {
            "idSrc": "DSp_Telefono",
            "Label": "P Telefono"
        },
        "10": {
            "idSrc": "DSp_Email",
            "Label": "P Email"
        },
        "11": {
            "idSrc": "DSp_FechaIngreso",
            "Label": "P FechaIngreso"
        },
        "12": {
            "idSrc": "DSEstado",
            "Label": "Estado"
        },
        "13": {
            "idSrc": "DSnombreSindicato",
            "Label": "NombreSindicato"
        },
        "14": {
            "idSrc": "DScategoria",
            "Label": "Categoria"
        },
        "15": {
            "id": "Porcentaje",
            "idSrc": "DSPorcentaje",
            "Label": "Porcentaje"
        },
        "16": {
            "id": "DSBasico",
            "idSrc": "DSBasico",
            "Label": "DSBasico"
        },
        "17": {
            "id": "DSAntiguedad",
            "idSrc": "DSAntiguedad",
            "Label": "Antiguedad"
        },
        "18": {
            "id": "DSIdSindicato",
            "idSrc": "DSidSindicato",
            "Label": "DSIdSindicato"
        },
        "19": {
            "id": "DSCatIdSindicato",
            "idSrc": "DSidcatSindicato",
            "Label": "DSCatIdSindicato"
        },
        "20": {
            "id": "DSidObraSocial",
            "idSrc": "DSidObraSocial",
            "Label": "DSidObraSocial"
        },
        "21": {
            "id": "DSObraSocial",
            "idSrc": "DSObraSocial",
            "Label": "DSObraSocial"
        },
        "22": {
            "id": "DShorasxjornal",
            "idSrc": "DShorasxjornal",
            "Label": "DShorasxjornal"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_SueldosLiquidacion"]={
    "id": "DS_SueldosLiquidacion",
    "TipoSource": "SrvConexion",
    "Class": "SueldosLiquidacion",
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
            "idSrc": "DSremunerativos",
            "Label": "Remunerativos"
        },
        "3": {
            "idSrc": "DSnoremunerativos",
            "Label": "Noremunerativos"
        },
        "4": {
            "idSrc": "DSdescuentos",
            "Label": "Descuentos"
        },
        "5": {
            "idSrc": "DSneto",
            "Label": "Neto"
        },
        "6": {
            "idSrc": "DSfecha_creacion",
            "Label": "Fecha Creacion"
        },
        "7": {
            "idSrc": "DSanio",
            "Label": "Anio"
        },
        "8": {
            "idSrc": "DSmes",
            "Label": "Mes"
        },
        "9": {
            "idSrc": "DShorasal50",
            "Label": "Horasal50"
        },
        "10": {
            "idSrc": "DShorasal100",
            "Label": "Horasal100"
        },
        "11": {
            "idSrc": "DSdiastrabajados",
            "Label": "Diastrabajados"
        },
        "12": {
            "idSrc": "DSdiasferiados",
            "Label": "Diasferiados"
        },
        "13": {
            "idSrc": "DSidsindicato",
            "Label": "Idsindicato"
        },
        "14": {
            "idSrc": "DSidsindicatocat",
            "Label": "Idsindicatocat"
        },
        "15": {
            "idSrc": "DSporcsindicato",
            "Label": "Porcsindicato"
        },
        "16": {
            "idSrc": "DSbasico",
            "Label": "Basico"
        },
        "17": {
            "idSrc": "DSantiguedad",
            "Label": "Antiguedad"
        },
        "18": {
            "idSrc": "DSidobrasocial",
            "Label": "Idobrasocial"
        },
        "19": {
            "idSrc": "DSadicionalzona",
            "Label": "Adicionalzona"
        },
        "20": {
            "idSrc": "DSnombrePersonal",
            "Label": "NombrePersonal"
        },
        "21": {
            "idSrc": "DSapellidoPersonal",
            "Label": "ApellidoPersonal"
        },
        "22": {
            "idSrc": "DSnombreSindicato",
            "Label": "NombreSindicato"
        },
        "23": {
            "idSrc": "DSporcentajeSindicato",
            "Label": "PorcentajeSindicato"
        },
        "24": {
            "idSrc": "DScategoriaSindicato",
            "Label": "CategoriaSindicato"
        },
        "25": {
            "idSrc": "DSbasicoSindicato",
            "Label": "BasicoSindicato"
        },
        "26": {
            "idSrc": "DSnombreObrasocial",
            "Label": "NombreObrasocial"
        },
        "27": {
            "idSrc": "DSestadoObrasocial",
            "Label": "EstadoObrasocial"
        },
        "28": {
            "id": "DShorasxjornal",
            "idSrc": "DShorasxjornal",
            "Label": "DShorasxjornal"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_SueldosLiqItems"]={
    "id": "DS_SueldosLiqItems",
    "TipoSource": "SrvConexion",
    "Class": "SueldosLiquidacionItems",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSidsueldoconfig",
            "Label": "Idsueldoconfig"
        },
        "2": {
            "idSrc": "DSunidades",
            "Label": "Unidades"
        },
        "3": {
            "idSrc": "DSvalorunitario",
            "Label": "Valorunitario"
        },
        "4": {
            "idSrc": "DSremunerativo",
            "Label": "Remunerativo"
        },
        "5": {
            "idSrc": "DSnoremunerativo",
            "Label": "Noremunerativo"
        },
        "6": {
            "idSrc": "DSdescuento",
            "Label": "Descuento"
        },
        "7": {
            "idSrc": "DSidliquidacion",
            "Label": "Idliquidacion"
        },
        "8": {
            "idSrc": "DSconcepto",
            "Label": "Concepto"
        },
        "9": {
            "idSrc": "DScodigo",
            "Label": "Codigo"
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
