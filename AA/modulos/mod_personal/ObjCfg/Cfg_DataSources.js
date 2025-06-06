function CfgDataSources(id,Param){
var ret={};

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
            "id": "DSnombreSindicato",
            "idSrc": "DSnombreSindicato",
            "Label": "DSnombreSindicato"
        },
        "14": {
            "id": "DScategoria",
            "idSrc": "DScategoria",
            "Label": "DScategoria"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_Tareas"]={
    "id": "DS_Tareas",
    "TipoSource": "SrvConexion",
    "Class": "PersonalTareas",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "id"
        },
        "1": {
            "idSrc": "DSDetalle",
            "Label": "Detalle"
        },
        "2": {
            "idSrc": "DSvalor",
            "Label": "valor"
        },
        "3": {
            "idSrc": "DSestado",
            "Label": "estado"
        },
        "4": {
            "idSrc": "DSComentarios",
            "Label": "Comentarios"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_PersonalRelTareas"]={
    "id": "DS_PersonalRelTareas",
    "TipoSource": "SrvConexion",
    "Class": "PersonalRelTareas",
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
            "idSrc": "DSidtarea",
            "Label": "Idtarea"
        },
        "3": {
            "idSrc": "DSnombrePersonal",
            "Label": "NombrePersonal"
        },
        "4": {
            "idSrc": "DSapellidoPersonal",
            "Label": "ApellidoPersonal"
        },
        "5": {
            "idSrc": "DSDNIPersonal",
            "Label": "DNIPersonal"
        },
        "6": {
            "idSrc": "DSdetalleTarea",
            "Label": "DetalleTarea"
        },
        "7": {
            "idSrc": "DSvalorTarea",
            "Label": "ValorTarea"
        },
        "8": {
            "idSrc": "DSestadoTarea",
            "Label": "EstadoTarea"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_PersonalSindicato"]={
    "id": "DS_PersonalSindicato",
    "TipoSource": "SrvConexion",
    "Class": "PersonalSindicato",
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
            "idSrc": "DSidsindicato",
            "Label": "Idsindicato"
        },
        "3": {
            "idSrc": "DSidcategoria",
            "Label": "Idcategoria"
        },
        "4": {
            "idSrc": "DSnombreSindicato",
            "Label": "NombreSindicato"
        },
        "5": {
            "idSrc": "DScategoria",
            "Label": "Categoria"
        },
        "6": {
            "idSrc": "DSbasico",
            "Label": "Basico"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_Sindicatos"]={
    "id": "DS_Sindicatos",
    "TipoSource": "SrvConexion",
    "Class": "Sindicatos",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DSNombre",
            "Label": "Nombre"
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};
ret["DS_SindicatosBasicos"]={
    "id": "DS_SindicatosBasicos",
    "TipoSource": "SrvConexion",
    "Class": "SindicatosBasicos",
    "CfgItems": {
        "0": {
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "idSrc": "DScategoria",
            "Label": "Categoria"
        },
        "2": {
            "idSrc": "DSbasico",
            "Label": "Basico"
        },
        "3": {
            "idSrc": "DSidsindicato",
            "Label": "Idsindicato"
        },
        "4": {
            "idSrc": "DSNombreSindicato",
            "Label": "NombreSindicato"
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
