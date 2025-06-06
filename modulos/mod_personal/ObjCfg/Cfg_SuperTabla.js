function CfgSuperTabla(id,Param){
var ret={};

ret["ST_Personal"]={
    "id": "ST_Personal",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Personal",
    "idTabla": "TBL_Personal",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "ST_BusqFull",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "",
                "Style": {}
            }
        },
        "Ctrl": {
            "0": {
                "Tipo": "Ctrl",
                "IdObj": "ST_ModalQuery",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Nuevo",
                "ClassEvt": "EvtNuevoReg",
                "CssClass": "Fill_Violeta2",
                "Style": {}
            }
        }
    },
    "Footer": {},
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {
            "0": {
                "idSrc": "DSid",
                "Label": "id",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "idSrc": "DSp_Nombre",
                "Label": "Nombre",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "idSrc": "DSp_Apellido",
                "Label": "Apellido",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "idSrc": "DSp_DNI",
                "Label": "DNI",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "4": {
                "idSrc": "DSp_FechaNacimiento",
                "Label": "Fecha Nacimiento",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "5": {
                "idSrc": "DSp_Sexo",
                "Label": "Sexo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "6": {
                "idSrc": "DSp_Nacionalidad",
                "Label": "Nacionalidad",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "7": {
                "idSrc": "DSp_EstadoCivil",
                "Label": "Estado Civil",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "8": {
                "idSrc": "DSp_Direccion",
                "Label": "Direccion",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "9": {
                "idSrc": "DSp_Telefono",
                "Label": "Telefono",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "10": {
                "idSrc": "DSp_Email",
                "Label": "Email",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "11": {
                "idSrc": "DSp_FechaIngreso",
                "Label": "Fecha Ingreso",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "12": {
                "idSrc": "DSActivo",
                "Label": "Activo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "idSrc": "DSid",
                "Label": "id"
            },
            "1": {
                "idSrc": "DSp_Nombre",
                "Label": "Nombre"
            },
            "2": {
                "idSrc": "DSp_Apellido",
                "Label": "Apellido"
            },
            "3": {
                "idSrc": "DSp_DNI",
                "Label": "DNI"
            },
            "4": {
                "idSrc": "DSp_FechaNacimiento",
                "Label": "Fecha Nacimiento"
            },
            "5": {
                "idSrc": "DSp_Sexo",
                "Label": "Sexo"
            },
            "6": {
                "idSrc": "DSp_Nacionalidad",
                "Label": "Nacionalidad"
            },
            "7": {
                "idSrc": "DSp_EstadoCivil",
                "Label": "Estado Civil"
            },
            "8": {
                "idSrc": "DSp_Direccion",
                "Label": "Direccion"
            },
            "9": {
                "idSrc": "DSp_Telefono",
                "Label": "Telefono"
            },
            "10": {
                "idSrc": "DSp_Email",
                "Label": "Email"
            },
            "11": {
                "idSrc": "DSp_FechaIngreso",
                "Label": "Fecha Ingreso"
            },
            "12": {
                "idSrc": "DSActivo",
                "Label": "Activo"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSid",
                "Label": "id"
            },
            "1": {
                "idSrc": "DSp_Nombre",
                "Label": "Nombre"
            },
            "2": {
                "idSrc": "DSp_Apellido",
                "Label": "Apellido"
            },
            "3": {
                "idSrc": "DSp_DNI",
                "Label": "DNI"
            },
            "4": {
                "idSrc": "DSp_FechaNacimiento",
                "Label": "Fecha Nacimiento"
            },
            "5": {
                "idSrc": "DSp_Sexo",
                "Label": "Sexo"
            },
            "6": {
                "idSrc": "DSp_Nacionalidad",
                "Label": "Nacionalidad"
            },
            "7": {
                "idSrc": "DSp_EstadoCivil",
                "Label": "Estado Civil"
            },
            "8": {
                "idSrc": "DSp_Direccion",
                "Label": "Direccion"
            },
            "9": {
                "idSrc": "DSp_Telefono",
                "Label": "Telefono"
            },
            "10": {
                "idSrc": "DSp_Email",
                "Label": "Email"
            },
            "11": {
                "idSrc": "DSp_FechaIngreso",
                "Label": "Fecha Ingreso"
            },
            "12": {
                "idSrc": "DSActivo",
                "Label": "Activo"
            }
        },
        "Param": {
            "0": {
                "idSrc": "DsLimite",
                "Label": "Limite",
                "Value": "100"
            }
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtNuevoReg",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaPersonal"
                }
            }
        }
    }
};
ret["ST_Tareas"]={
    "id": "ST_Tareas",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Tareas",
    "idTabla": "TBL_Tareas",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "ST_BusqFull",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "Null",
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
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Nuevo",
                "ClassEvt": "EvtNuevoReg",
                "CssClass": "Fill_Violeta2",
                "Style": {}
            },
            "2": {
                "Orden": "3",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Modo Edicion",
                "ClassEvt": "ModoEdicion",
                "CssClass": "Fill_GrisOscuro",
                "Style": {}
            },
            "3": {
                "Orden": "4",
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Label": "Modo RO",
                "ClassEvt": "ModoRO",
                "CssClass": "Fill_GrisOscuro",
                "Style": {}
            }
        }
    },
    "Footer": {},
        "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
        "FiltrosRap": {
            "0": {
                "idSrc": "DSDetalle",
                "Label": "Detalle",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "idSrc": "DSvalor",
                "Label": "valor",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "idSrc": "DSestado",
                "Label": "estado",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "idSrc": "DSComentarios",
                "Label": "Comentarios",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {
            "0": {
                "idSrc": "DSDetalle",
                "Label": "Detalle"
            },
            "1": {
                "idSrc": "DSvalor",
                "Label": "valor"
            },
            "2": {
                "idSrc": "DSestado",
                "Label": "estado"
            },
            "3": {
                "idSrc": "DSComentarios",
                "Label": "Comentarios"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSDetalle",
                "Label": "Detalle"
            },
            "1": {
                "idSrc": "DSvalor",
                "Label": "valor"
            },
            "2": {
                "idSrc": "DSestado",
                "Label": "estado"
            },
            "3": {
                "idSrc": "DSComentarios",
                "Label": "Comentarios"
            }
        },
        "Param": {
            "0": {
                "idSrc": "DsLimite",
                "Label": "Limite",
                "Value": "100"
            }
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtNuevoReg",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AltaTareas"
                }
            }
        },
        "1": {
            "ClassEvt": "ModoEdicion",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_CambiarModoEdit_Tareas"
                }
            }
        },
        "2": {
            "ClassEvt": "ModoRO",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_CambiarModoRO_Tareas"
                }
            }
        }
    }
};
ret["ST_TareasSelect"]={
    "id": "ST_TareasSelect",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "Titulo": "Tareas Disponibles",
    "idTabla": "TBL_TareasSelect",
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
ret["ST_PersonalRelTareas"]={
    "id": "ST_PersonalRelTareas",
    "TipoObjPadre": "Formulario",
    "IdObjPadre": "FRM_PersonalSelecto",
    "Titulo": "Tareas Asignadas",
    "idTabla": "TBL_PersonalRelTareas",
    "ModoInicio": "RO",
    "Header": {
        "Filtros": {
            "0": {
                "Orden": "1",
                "idSrc": "ST_BusqFull",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Buscar",
                "ClassEvt": "BuscarGral",
                "CssClass": "",
                "Style": {}
            }
        },
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
    "CfgEventos": {
        "0": {
            "ClassEvt": "BuscarGral",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "keyPressEnter",
                    "IdEvt": "EVT_ST_BuscarByRelacion_PersonalRelTareas"
                }
            }
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
