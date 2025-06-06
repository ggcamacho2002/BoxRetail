function CfgFormulario(id,Param){
var ret={};

ret["FRM_Cliente"]={
    "id": "FRM_Cliente",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaClientes",
    "CssClass": "",
    "Style": {},
    "Tipo": "Horizontal",
    "IdSource": "DS_Clientes",
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
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSnombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSnombre",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSapellido",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSapellido",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Apellido",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSdireccion",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSdireccion",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Dirección",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DStelefono",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DStelefono",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Teléfono",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DSmail",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSmail",
            "IdObj": "InputTextRO",
            "Param": {},
            "Label": "Email",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Value": ""
        }
    },
    "Ctrl": {},
    "CfgEventos": {}
};

ret["FRM_AltaCliente"]={
    "id": "FRM_AltaCliente",
    "TipoObjPadre": "Tabla",
    "IdObjPadre": "TBL_ListaClientes",
    "CssClass": "",
    "Style": {},
    "Tipo": "Vertical",
    "IdSource": "DS_Clientes",
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
            "Valid": {},
            "Value": ""
        },
        "1": {
            "id": "DSnombre",
            "Orden": 1,
            "Tipo": "Fld",
            "idSrc": "DSnombre",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Nombre",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Value": ""
        },
        "2": {
            "id": "DSapellido",
            "Orden": 2,
            "Tipo": "Fld",
            "idSrc": "DSapellido",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Apellido",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Value": ""
        },
        "3": {
            "id": "DSdireccion",
            "Orden": 3,
            "Tipo": "Fld",
            "idSrc": "DSdireccion",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Dirección",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Value": ""
        },
        "4": {
            "id": "DStelefono",
            "Orden": 4,
            "Tipo": "Fld",
            "idSrc": "DStelefono",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Teléfono",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {},
            "Value": ""
        },
        "5": {
            "id": "DSmail",
            "Orden": 5,
            "Tipo": "Fld",
            "idSrc": "DSmail",
            "IdObj": "InputText",
            "Param": {},
            "Label": "Email",
            "ClassEvt": "",
            "CssClass": "",
            "Style": {},
            "Valid": {
                "Required": true,
                "Email": true
            },
            "Value": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "BtnGuardar",
            "Orden": 0,
            "Label": "Guardar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {
                "Icono": "fa-save",
                "Texto": "Guardar"
            },
            "Style": {},
            "CssClass": "btn-success"
        },
        "1": {
            "id": "BtnCancelar",
            "Orden": 1,
            "Label": "Cancelar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {
                "Icono": "fa-times",
                "Texto": "Cancelar"
            },
            "Style": {},
            "CssClass": "btn-secondary"
        }
    },
    "CfgEventos": {
        "0": {
            "IdEvento": "EVT_GuardarCliente",
            "IdCtrl": "BtnGuardar",
            "Evento": "click"
        },
        "1": {
            "IdEvento": "EVT_CerrarDialog",
            "IdCtrl": "BtnCancelar",
            "Evento": "click"
        }
    }
};

if(id=="" || id==undefined){return ret;}
else{if(ret[id])return ret[id];	else {}}

}
