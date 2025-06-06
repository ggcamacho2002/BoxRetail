function CfgFormulario(id,Param){
var ret={};

ret["FRM_AltaPersonal"]={
    "id": "FRM_AltaPersonal",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Personal",
    "Tipo": "Vertical",
    "IdSource": "DS_Personal",
    "CfgItems": {
        "0": {
            "id": "DSp_Nombre",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Nombre",
            "IdObj": "InputText",
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSp_Apellido",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Apellido",
            "IdObj": "InputText",
            "Label": "Apellido",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSp_DNI",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_DNI",
            "IdObj": "InputText",
            "Label": "DNI",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSp_FechaNacimiento",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_FechaNacimiento",
            "IdObj": "InputFecha",
            "Label": "Fecha Nacimiento",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSp_Sexo",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Sexo",
            "IdObj": "ComboStaticVal",
            "Label": "Sexo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Sexo"
                }
            },
            "Valid": {}
        },
        "5": {
            "id": "DSp_Nacionalidad",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Nacionalidad",
            "IdObj": "InputText",
            "Label": "Nacionalidad",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "6": {
            "id": "DSp_EstadoCivil",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_EstadoCivil",
            "IdObj": "ComboStaticVal",
            "Label": "Estado Civil",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_EstadoCivil"
                }
            },
            "Valid": {}
        },
        "7": {
            "id": "DSp_Direccion",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Direccion",
            "IdObj": "InputText",
            "Label": "Direccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "8": {
            "id": "DSp_Telefono",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Telefono",
            "IdObj": "InputText",
            "Label": "Telefono",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "9": {
            "id": "DSp_Email",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Email",
            "IdObj": "InputText",
            "Label": "Email",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "300px"
                }
            },
            "Param": {},
            "Valid": {}
        },
        "10": {
            "id": "DSp_FechaIngreso",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_FechaIngreso",
            "IdObj": "InputFecha",
            "Label": "Fecha Ingreso",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "11": {
            "id": "DSEstado",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSEstado",
            "IdObj": "ComboStaticVal",
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estado"
                }
            },
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Label": "Guardar",
            "ClassEvt": "EvtGuardar",
            "CssClass": "Fill_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtGuardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Personal"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                }
            }
        }
    }
};
ret["FRM_EditarPersonal"]={
    "id": "FRM_EditarPersonal",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Personal",
    "Tipo": "Vertical",
    "IdSource": "DS_Personal",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Tipo": "Fld",
            "Requerido": 1,
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
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Nombre",
            "IdObj": "InputText",
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSp_Apellido",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Apellido",
            "IdObj": "InputText",
            "Label": "Apellido",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "3": {
            "id": "DSp_DNI",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_DNI",
            "IdObj": "InputText",
            "Label": "DNI",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "4": {
            "id": "DSp_FechaNacimiento",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_FechaNacimiento",
            "IdObj": "InputFecha",
            "Label": "Fecha Nacim.",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "5": {
            "id": "DSp_Sexo",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Sexo",
            "IdObj": "ComboStaticVal",
            "Label": "Sexo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Sexo"
                }
            },
            "Valid": {}
        },
        "6": {
            "id": "DSp_Nacionalidad",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Nacionalidad",
            "IdObj": "InputText",
            "Label": "Nacionalidad",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "7": {
            "id": "DSp_EstadoCivil",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_EstadoCivil",
            "IdObj": "ComboStaticVal",
            "Label": "Estado Civil",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_EstadoCivil"
                }
            },
            "Valid": {}
        },
        "8": {
            "id": "DSp_Direccion",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Direccion",
            "IdObj": "InputText",
            "Label": "Direccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "9": {
            "id": "DSp_Telefono",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Telefono",
            "IdObj": "InputText",
            "Label": "Telefono",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "10": {
            "id": "DSp_Email",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_Email",
            "IdObj": "InputText",
            "Label": "Email",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "300px"
                }
            },
            "Param": {},
            "Valid": {}
        },
        "11": {
            "id": "DSp_FechaIngreso",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSp_FechaIngreso",
            "IdObj": "InputFecha",
            "Label": "Fecha Ingreso",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "12": {
            "id": "DSEstado",
            "Tipo": "Fld",
            "Requerido": 1,
            "idSrc": "DSEstado",
            "IdObj": "ComboStaticVal",
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estado"
                }
            },
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Label": "Guardar",
            "ClassEvt": "EvtGuardar",
            "CssClass": "Fill_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtCargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
                }
            }
        },
        "1": {
            "ClassEvt": "EvtGuardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Personal"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                }
            }
        }
    }
};
ret["FRM_AltaTareas"]={
    "id": "FRM_AltaTareas",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Tareas",
    "Tipo": "Vertical",
    "IdSource": "DS_Tareas",
    "CfgItems": {
        "0": {
            "id": "DSDetalle",
            "Tipo": "Fld",
            "idSrc": "DSDetalle",
            "IdObj": "InputText",
            "Label": "Detalle",
            "ClassEvt": "",
            "Requerido": "1",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSvalor",
            "Tipo": "Fld",
            "idSrc": "DSvalor",
            "IdObj": "InputNumber",
            "Label": "valor",
            "ClassEvt": "",
            "Requerido": "1",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSestado",
            "Tipo": "Fld",
            "idSrc": "DSestado",
            "IdObj": "ComboStaticVal",
            "Label": "estado",
            "ClassEvt": "",
            "Requerido": "1",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estado"
                }
            },
            "Valid": {}
        },
        "3": {
            "id": "DSComentarios",
            "Tipo": "Fld",
            "idSrc": "DSComentarios",
            "IdObj": "InputText",
            "Label": "Comentarios",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Label": "Guardar",
            "ClassEvt": "EvtGuardar",
            "CssClass": "Fill_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtGuardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_InsertBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Tareas"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                }
            }
        }
    }
};
ret["FRM_EditarTareas"]={
    "id": "FRM_EditarTareas",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Tareas",
    "Tipo": "Vertical",
    "IdSource": "DS_Tareas",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Label": "id",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "",
                    "Value": ""
                }
            },
            "Param": {},
            "Valid": {}
        },
        "1": {
            "id": "DSDetalle",
            "Tipo": "Fld",
            "idSrc": "DSDetalle",
            "IdObj": "InputText",
            "Label": "Detalle",
            "ClassEvt": "",
            "Requerido": "1",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        },
        "2": {
            "id": "DSvalor",
            "Tipo": "Fld",
            "idSrc": "DSvalor",
            "IdObj": "InputNumber",
            "Label": "valor",
            "ClassEvt": "",
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
            "IdObj": "ComboStaticVal",
            "Label": "estado",
            "ClassEvt": "",
            "Requerido": "1",
            "CssClass": "",
            "Style": {},
            "Param": {
                "0": {
                    "Key": "LOVSource",
                    "Value": "SD_Estado"
                }
            },
            "Valid": {}
        },
        "4": {
            "id": "DSComentarios",
            "Tipo": "Fld",
            "idSrc": "DSComentarios",
            "IdObj": "InputText",
            "Label": "Comentarios",
            "ClassEvt": "",
            "Requerido": "0",
            "CssClass": "",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Label": "Guardar",
            "ClassEvt": "EvtGuardar",
            "CssClass": "Fill_Rojo1",
            "Style": {},
            "Param": {},
            "Valid": {}
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "EvtCargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
                }
            }
        },
        "1": {
            "ClassEvt": "EvtGuardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Tareas"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_PadreHide_This"
                }
            }
        }
    }
};
ret["FRM_PersonalSelecto"]={
    "id": "FRM_PersonalSelecto",
    "TipoObjPadre": "Null",
    "IdObjPadre": "Null",
    "CssClass": "",
    "Style": {
        "0": {
            "Prop": "",
            "Value": ""
        }
    },
    "Tipo": "Vertical",
    "IdSource": "DS_Personal",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSp_Nombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSp_Nombre",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSp_Apellido",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSp_Apellido",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Apellido",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {},
    "CfgEventos": {}
};
ret["FRM_PersonalSindicato"]={
    "id": "FRM_PersonalSindicato",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Personal",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_PersonalSindicato",
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
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSidpersonal",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSidpersonal",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idpersonal",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSidsindicato",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSidsindicato",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idsindicato",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSidcategoria",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSidcategoria",
            "IdObj": "Hidden",
            "Param": {},
            "Label": "Idcategoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSnombreSindicato",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSnombreSindicato",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Sindicato",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {
                "0": {
                    "Prop": "Width",
                    "Value": "350px"
                }
            },
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DScategoria",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DScategoria",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Categoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "Guardar",
            "Orden": "1",
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "Param": {},
            "ClassEvt": "Guardar",
            "Style": {},
            "CssClass": "Fill_Rojo1"
        }
    },
    "CfgEventos": {
        "0": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXRelacion_SindicatoCateg"
                }
            }
        },
        "1": {
            "ClassEvt": "Guardar",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "click",
                    "IdEvt": "EVT_FRM_UpdateBd_This"
                },
                "1": {
                    "Orden": "2",
                    "Trigger": "click",
                    "IdEvt": "EVT_DG_Hide_PersonalSindicato"
                },
                "2": {
                    "Orden": "3",
                    "Trigger": "click",
                    "IdEvt": "EVT_ST_Buscar_Personal"
                }
            }
        }
    }
};
ret["FRM_AllDatos"]={
    "id": "FRM_AllDatos",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_Personal",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Personal",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "Orden": 0,
            "Tipo": "Fld",
            "idSrc": "DSid",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "id",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSp_Nombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSp_Nombre",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSp_Apellido",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSp_Apellido",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Apellido",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSp_DNI",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSp_DNI",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "DNI",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DSp_FechaNacimiento",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DSp_FechaNacimiento",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Fecha Nacimiento",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DSp_Sexo",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSp_Sexo",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Sexo",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "6": {
            "id": "DSp_Nacionalidad",
            "Orden": 6,
            "Tipo": "Fld",
            "idSrc": "DSp_Nacionalidad",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Nacionalidad",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "7": {
            "id": "DSp_EstadoCivil",
            "Orden": 7,
            "Tipo": "Fld",
            "idSrc": "DSp_EstadoCivil",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Estado Civil",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "8": {
            "id": "DSp_Direccion",
            "Orden": 8,
            "Tipo": "Fld",
            "idSrc": "DSp_Direccion",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Direccion",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "9": {
            "id": "DSp_Telefono",
            "Orden": 9,
            "Tipo": "Fld",
            "idSrc": "DSp_Telefono",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Telefono",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "10": {
            "id": "DSp_Email",
            "Orden": 10,
            "Tipo": "Fld",
            "idSrc": "DSp_Email",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Email",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "11": {
            "id": "DSp_FechaIngreso",
            "Orden": 11,
            "Tipo": "Fld",
            "idSrc": "DSp_FechaIngreso",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Fecha Ingreso",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "12": {
            "id": "DSEstado",
            "Orden": 12,
            "Tipo": "Fld",
            "idSrc": "DSEstado",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Estado",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "13": {
            "id": "DSnombreSindicato",
            "Orden": 13,
            "Tipo": "Fld",
            "idSrc": "DSnombreSindicato",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Sindicato",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        },
        "14": {
            "id": "DScategoria",
            "Orden": 14,
            "Tipo": "Fld",
            "idSrc": "DScategoria",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Categoria",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Requerido": 0,
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {},
    "CfgEventos": {
        "0": {
            "ClassEvt": "CargarDatos",
            "Hilo": {
                "0": {
                    "Orden": "1",
                    "Trigger": "LoadDOM",
                    "IdEvt": "EVT_FRM_GetBdXidPadre_This"
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
