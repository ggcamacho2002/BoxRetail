function CfgTabla(id,Param){
var ret={};

ret["TBL_Personal"]={
    "id": "TBL_Personal",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_Personal",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSp_Nombre",
            "Orden": "1",
            "Tipo": "Fld",
            "idSrc": "DSp_Nombre",
            "IdObj": "PlainText",
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSp_Apellido",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSp_Apellido",
            "IdObj": "PlainText",
            "Label": "Apellido",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSp_DNI",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSp_DNI",
            "IdObj": "Hidden",
            "Label": "DNI",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSp_FechaNacimiento",
            "Orden": "4",
            "Tipo": "Fld",
            "idSrc": "DSp_FechaNacimiento",
            "IdObj": "Hidden",
            "Label": "FechaNac.",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "5": {
            "id": "DSp_Sexo",
            "Orden": "5",
            "Tipo": "Fld",
            "idSrc": "DSp_Sexo",
            "IdObj": "Hidden",
            "Label": "Sexo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "DSp_Nacionalidad",
            "Orden": "6",
            "Tipo": "Fld",
            "idSrc": "DSp_Nacionalidad",
            "IdObj": "Hidden",
            "Label": "Nacionalidad",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "7": {
            "id": "DSp_EstadoCivil",
            "Orden": "7",
            "Tipo": "Fld",
            "idSrc": "DSp_EstadoCivil",
            "IdObj": "Hidden",
            "Label": "Estado Civil",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "8": {
            "id": "DSp_Direccion",
            "Orden": "8",
            "Tipo": "Fld",
            "idSrc": "DSp_Direccion",
            "IdObj": "Hidden",
            "Label": "Direccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "9": {
            "id": "DSp_Telefono",
            "Orden": "9",
            "Tipo": "Fld",
            "idSrc": "DSp_Telefono",
            "IdObj": "Hidden",
            "Label": "Telefono",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "10": {
            "id": "DSp_Email",
            "Orden": "10",
            "Tipo": "Fld",
            "idSrc": "DSp_Email",
            "IdObj": "Hidden",
            "Label": "Email",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "11": {
            "id": "DSp_FechaIngreso",
            "Orden": "11",
            "Tipo": "Fld",
            "idSrc": "DSp_FechaIngreso",
            "IdObj": "Hidden",
            "Label": "Fecha Ingreso",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "12": {
            "id": "DSEstado",
            "Orden": "12",
            "Tipo": "Fld",
            "idSrc": "DSEstado",
            "IdObj": "PlainText",
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "13": {
            "id": "Editar",
            "Orden": "14",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Label": "Editar",
            "ClassEvt": "EvtEditar",
            "CssClass": "Transp_Azul2",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "14": {
            "id": "Borrar",
            "Orden": "15",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Label": "Borrar",
            "ClassEvt": "EvtBorrar",
            "CssClass": "Transp_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "15": {
            "id": "AgregarTarea",
            "Orden": "16",
            "Label": "Agregar Tareas",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "agregarTarea",
            "Style": {},
            "CssClass": "Transp_Naranja1"
        },
        "16": {
            "id": "Sindicato",
            "Orden": "17",
            "Label": "Sindicato",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Sindicatos",
            "Style": {},
            "CssClass": "Transp_Violeta1"
        },
        "17": {
            "id": "AllDatos",
            "Orden": "13",
            "Label": "Todos los Datos",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "AllDatos",
            "Style": {},
            "CssClass": "Transp_Verde1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtEditar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditarPersonal"
                }
            }
        },
        "1": {
            "ClassEvt": "EvtBorrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Personal"
                }
            }
        },
        "2": {
            "ClassEvt": "agregarTarea",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_LocalS_SetTablaSelecto_PersonalSelecto"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_VT_Cambiar_PersonalTareas"
                },
                "2": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_GetBdXLocalStore_PersonalSelecto"
                },
                "3": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_PersonalRelTareas"
                }
            }
        },
        "3": {
            "ClassEvt": "Sindicatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_PersonalSindicato"
                }
            }
        },
        "4": {
            "ClassEvt": "AllDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_AllDatos"
                }
            }
        }
    }
};
ret["TBL_Tareas"]={
    "id": "TBL_Tareas",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Style": {},
    "CssClass": "",
    "IdSource": "DS_Tareas",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "PlainText",
            "Label": "id",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSDetalle",
            "Tipo": "Fld",
            "idSrc": "DSDetalle",
            "IdObj": "PlainText",
            "Label": "Detalle",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSvalor",
            "Tipo": "Fld",
            "idSrc": "DSvalor",
            "IdObj": "InputText",
            "Label": "valor",
            "ClassEvt": "UpdateValor",
            "Requerido": "1",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSestado",
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "PlainText",
            "Label": "estado",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSComentarios",
            "Tipo": "Fld",
            "idSrc": "DSComentarios",
            "IdObj": "Hidden",
            "Label": "Comentarios",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "5": {
            "id": "Editar",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Label": "Editar",
            "ClassEvt": "EvtEditar",
            "CssClass": "Transp_Azul2",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "Borrar",
            "Tipo": "Ctrl",
            "idSrc": "",
            "IdObj": "BotonComun",
            "Label": "Borrar",
            "ClassEvt": "EvtBorrar",
            "CssClass": "Transp_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtEditar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Iniciar_EditarTareas"
                }
            }
        },
        "1": {
            "ClassEvt": "EvtBorrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Tareas"
                }
            }
        },
        "2": {
            "ClassEvt": "UpdateValor",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "change",
                    "IdEvt": "EVT_TBL_UpdateOneField_Tareas"
                }
            }
        }
    }
};
ret["TBL_TareasSelect"]={
    "id": "TBL_TareasSelect",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "IdSource": "DS_Tareas",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": "0",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "DSDetalle",
            "Orden": "2",
            "Tipo": "Fld",
            "idSrc": "DSDetalle",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Detalle",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "DSvalor",
            "Orden": "3",
            "Tipo": "Fld",
            "idSrc": "DSvalor",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "PlainText",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "agregar",
            "Orden": "1",
            "Label": "agregar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "InsertTarea",
            "Style": {},
            "CssClass": "Transp_Naranja1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "InsertTarea",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_DS_InsertOneByRelacion_TareaApersonal"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_BuscarByRelacion_PersonalRelTareas"
                }
            }
        }
    }
};
ret["TBL_PersonalRelTareas"]={
    "id": "TBL_PersonalRelTareas",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_PersonalSelect",
    "IdSource": "DS_PersonalRelTareas",
    "Style": {},
    "CssClass": "",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "1": {
            "id": "idpersonal",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSidpersonal",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idpersonal",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "2": {
            "id": "idtarea",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSidtarea",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idtarea",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "3": {
            "id": "DSdetalleTarea",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DSdetalleTarea",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Tarea",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "4": {
            "id": "DSvalorTarea",
            "Orden": 7,
            "Tipo": "Fld",
            "idSrc": "DSvalorTarea",
            "IdObj": "PlainText",
            "Param": {},
            "Label": "Valor Mensual",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {}
        },
        "5": {
            "id": "Borrar",
            "Orden": "",
            "Label": "Borrar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {},
            "Value": "",
            "ClassEvt": "Borrar",
            "Style": {},
            "CssClass": "Transp_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "Borrar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_TBL_DelItemConfirm_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
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
