function CfgSuperTabla(id,Param){
var ret={};

ret["ST_SueldoIntConcepto"]={
    "id": "ST_SueldoIntConcepto",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Sueldos Int. Conceptos",
    "idTabla": "TBL_SueldoIntConcepto",
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
                "Orden": "0",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "Fill_Azul1",
                "Style": {}
            },
            "1": {
                "Tipo": "Ctrl",
                "IdObj": "BotonComun",
                "Orden": "1",
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
                "Orden": "1",
                "idSrc": "DSdescripcion",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Descripcion",
                "CssClass": "",
                "Style": {}
            },
            "1": {
                "Orden": "2",
                "idSrc": "DStipo",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "Label": "Tipo",
                "CssClass": "",
                "Style": {}
            }
        },
        "FiltroAvz": {},
        "Orden": {
            "0": {
                "Orden": "1",
                "idSrc": "DSdescripcion",
                "Label": "Descripcion"
            },
            "1": {
                "Orden": "2",
                "idSrc": "DSvalorunitario",
                "Label": "Valor"
            },
            "2": {
                "Orden": "3",
                "idSrc": "DStipo",
                "Label": "Tipo"
            },
            "3": {
                "Orden": "4",
                "idSrc": "DSestado",
                "Label": "estado"
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
                    "IdEvt": "EVT_DG_Iniciar_AltaSueldoIntConcepto"
                }
            }
        }
    }
};
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
                "Orden": "0",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "Fill_Azul1",
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
                "Label": "p_Nombre",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "idSrc": "DSp_Apellido",
                "Label": "p_Apellido",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "idSrc": "DSp_DNI",
                "Label": "p_DNI",
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
                "Label": "p_Nombre"
            },
            "2": {
                "idSrc": "DSp_Apellido",
                "Label": "p_Apellido"
            },
            "3": {
                "idSrc": "DSp_DNI",
                "Label": "p_DNI"
            }
        },
        "Orden": {
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
    "CfgEventos": {}
};
ret["ST_AllConceptos"]={
    "id": "ST_AllConceptos",
    "TipoObjPadre": "",
    "IdObjPadre": "",
    "Titulo": "Todos los Conceptos",
    "idTabla": "TBL_AllConceptos",
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
                "Orden": "0",
                "Label": "Buscar",
                "ClassEvt": "Null",
                "CssClass": "Fill_Azul1",
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
                "idSrc": "DSdescripcion",
                "Label": "descripcion",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "2": {
                "idSrc": "DSvalorunitario",
                "Label": "valorunitario",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "3": {
                "idSrc": "DSestado",
                "Label": "estado",
                "Tipo": "Filtro",
                "IdObj": "InputText",
                "Value": "",
                "CssClass": "",
                "Style": {}
            },
            "4": {
                "idSrc": "DStipo",
                "Label": "tipo",
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
                "idSrc": "DSdescripcion",
                "Label": "descripcion"
            },
            "2": {
                "idSrc": "DSvalorunitario",
                "Label": "valorunitario"
            },
            "3": {
                "idSrc": "DSestado",
                "Label": "estado"
            },
            "4": {
                "idSrc": "DStipo",
                "Label": "tipo"
            }
        },
        "Orden": {
            "0": {
                "idSrc": "DSid",
                "Label": "id"
            },
            "1": {
                "idSrc": "DSdescripcion",
                "Label": "descripcion"
            },
            "2": {
                "idSrc": "DSvalorunitario",
                "Label": "valorunitario"
            },
            "3": {
                "idSrc": "DSestado",
                "Label": "estado"
            },
            "4": {
                "idSrc": "DStipo",
                "Label": "tipo"
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
    "CfgEventos": {}
};

            
   ret["ST_PersConcepto"]={
     "id": "ST_PersConcepto",
     "TipoObjPadre": "",
     "IdObjPadre": "",
     "Titulo":"Personal Concepto",
     "idTabla": "TBL_PersConcepto",
     "ModoInicio": "RO",
     "Header": {
         "Filtros": {
                "0": {"idSrc": "ST_BusqFull","Tipo": "Filtro","IdObj": "ST_BusqFull","Value": "","Label": "Buscar","ClassEvt": "Null","CssClass": "","Style": {}}
              },"Ctrl": {"0": {"Tipo": "Ctrl","IdObj": "ST_ModalQuery","Orden": "0","Label": "Buscar","ClassEvt": "Null","CssClass": "Fill_Azul1","Style": {}}}
     },
     "Footer": {},
         "OrdenManual": {"CampoOrden": "","TblVisibles": {},"ClassEvtPostGuardar":""},"ModalQuery":{
          "FiltrosRap": {
                  "0": {"idSrc": "DSid","Label": "id","Tipo":"Filtro","IdObj":"InputText","Value":"","CssClass":"","Style":{},},"1": {"idSrc": "DSidpersonal","Label": "idpersonal","Tipo":"Filtro","IdObj":"InputText","Value":"","CssClass":"","Style":{},},"2": {"idSrc": "DSidconcepto","Label": "idconcepto","Tipo":"Filtro","IdObj":"InputText","Value":"","CssClass":"","Style":{},},"3": {"idSrc": "DSestado","Label": "estado","Tipo":"Filtro","IdObj":"InputText","Value":"","CssClass":"","Style":{},},
                },
                "FiltroAvz": {
                  "0": {"idSrc": "DSid","Label": "id",},"1": {"idSrc": "DSidpersonal","Label": "idpersonal",},"2": {"idSrc": "DSidconcepto","Label": "idconcepto",},"3": {"idSrc": "DSestado","Label": "estado",},
                },
                "Orden": {
                  "0": {"idSrc": "DSid","Label": "id",},"1": {"idSrc": "DSidpersonal","Label": "idpersonal",},"2": {"idSrc": "DSidconcepto","Label": "idconcepto",},"3": {"idSrc": "DSestado","Label": "estado",},
                },
                "Param": {
                  "0": {"idSrc": "DsLimite","Label": "Limite","Value": "100"}
                }
     },
     "CfgEventos": {
          
     }
   };
   
   ///UltimoRegistroDelCfg/// 
   
   

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
