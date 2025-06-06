function CfgDialog(id,Param){
var ret={};

ret["DLG_Cliente"]={
    "id": "DLG_Cliente",
    "Titulo": "Cliente",
    "Ancho": "650px",
    "ClaseDialogo":"Large",
    "Alto": "auto",
    "OffsetY": "50px",
    "Closable": true,
    "Sticky":true,
    "Content": {
        "0": {
            "id": "FRM_Cliente",
            "Orden": 0,
            "Tipo": "Ui",
            "IdObj": "FormularioObjGral",
            "idSrc": "",
            "Label": "",
            "Param": {
                "ObjId": "FRM_Cliente"
            },
            "Style": {},
            "CssClass": ""
        }
    }
};

ret["DLG_ConfirmarEliminar"]={
    "id": "DLG_ConfirmarEliminar",
    "Titulo": "Confirmar Eliminación",
    "Ancho": "400px",
    "ClaseDialogo":"Medium",
    "Alto": "auto",
    "OffsetY": "50px",
    "Closable": true,
    "Sticky":true,
    "Content": {
        "0": {
            "id": "MensajeEliminar",
            "Orden": 0,
            "Tipo": "Ui",
            "IdObj": "HTMLContent",
            "idSrc": "",
            "Label": "",
            "Param": {
                "Content": "<div class='alert alert-warning'><i class='fa fa-exclamation-triangle'></i> ¿Está seguro que desea eliminar este cliente?</div>"
            },
            "Style": {},
            "CssClass": ""
        }
    },
    "Ctrl": {
        "0": {
            "id": "btnConfirmarEliminar",
            "Orden": 0,
            "Label": "Eliminar",
            "Tipo": "Ctrl",
            "IdObj": "BotonComun",
            "idSrc": "",
            "Valid": {},
            "Param": {
                "Icono": "fa-trash",
                "Texto": "Eliminar"
            },
            "Style": {},
            "CssClass": "btn-danger"
        },
        "1": {
            "id": "btnCancelarEliminar",
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
    }
};

if(id=="" || id==undefined){return ret;}
else{if(ret[id])return ret[id];	else {}}

}
