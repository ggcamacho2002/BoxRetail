function CfgEventos(id,Param){
var ret={};

ret["EVT_ST_Buscar_this"]={
    "id": "EVT_ST_Buscar_this",
    "ClassEvt": "ST_Buscar_this",
    "Clase": "SuperTabla",
    "IdObj": "This",
    "IdEvt": "SuperTabla_Buscar",
    "Param": {}
};
ret["EVT_DG_Iniciar_Clientes"]={
    "id": "EVT_DG_Iniciar_Clientes",
    "ClassEvt": "DG_Iniciar_Clientes",
    "Clase": "Dialog",
    "IdObj": "DG_Clientes",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_FRM_InsertBd_NuevaComanda"]={
    "id": "EVT_FRM_InsertBd_NuevaComanda",
    "ClassEvt": "FRM_InsertBd_NuevaComanda",
    "Clase": "Formulario",
    "IdObj": "FRM_NuevaComanda",
    "IdEvt": "Formulario_InsertBd",
    "Param": {}
};
ret["EVT_VT_CambiarEstado_NuevaComanda"]={
    "id": "EVT_VT_CambiarEstado_NuevaComanda",
    "ClassEvt": "VT_CambiarEstado_NuevaComanda",
    "Clase": "Vistas",
    "IdObj": "VT_Principal",
    "IdEvt": "Vistas_CambiarEstado",
    "Param": {
        "0": {
            "Key": "NroEstado",
            "Function": "Input",
            "Value": "0"
        }
    }
};
ret["EVT_VT_CambiarEstado_Carrito"]={
    "id": "EVT_VT_CambiarEstado_Carrito",
    "ClassEvt": "VT_CambiarEstado_Carrito",
    "Clase": "Vistas",
    "IdObj": "VT_Principal",
    "IdEvt": "Vistas_CambiarEstado",
    "Param": {
        "0": {
            "Key": "NroEstado",
            "Function": "Input",
            "Value": "1"
        }
    }
};
ret["EVT_Scripts_Iniciar_SetLStoreNuevaComanda"]={
    "id": "EVT_Scripts_Iniciar_SetLStoreNuevaComanda",
    "ClassEvt": "Scripts_Iniciar_SetLStoreNuevaComanda",
    "Clase": "Scripts",
    "IdObj": "Scripts_SetLStoreNuevaComanda",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_ProductosTrClick"]={
    "id": "EVT_Scripts_Iniciar_ProductosTrClick",
    "ClassEvt": "Scripts_Iniciar_ProductosTrClick",
    "Clase": "Scripts",
    "IdObj": "Scripts_ProductosTrClick",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CargaProdPackEnter"]={
    "id": "EVT_Scripts_Iniciar_CargaProdPackEnter",
    "ClassEvt": "Scripts_Iniciar_CargaProdPackEnter",
    "Clase": "Scripts",
    "IdObj": "Scripts_CargaProdPackEnter",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_DS_InsertOneByRelacion_ComandasItems"]={
    "id": "EVT_DS_InsertOneByRelacion_ComandasItems",
    "ClassEvt": "DS_InsertOneByRelacion_ComandasItems",
    "Clase": "DataSources",
    "IdObj": "DS_ComandasItems",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_InsertComandaItem"
        }
    }
};
ret["EVT_ST_BuscarByRelacion_ComandasItems"]={
    "id": "EVT_ST_BuscarByRelacion_ComandasItems",
    "ClassEvt": "ST_BuscarByRelacion_ComandasItems",
    "Clase": "SuperTabla",
    "IdObj": "ST_ComandasItems",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_BuscarComandasItems"
        }
    }
};
ret["EVT_TBL_DelItem_ComandasItems"]={
    "id": "EVT_TBL_DelItem_ComandasItems",
    "ClassEvt": "TBL_DelItem_ComandasItems",
    "Clase": "Tabla",
    "IdObj": "TBL_ComandasItems",
    "IdEvt": "Tabla_DelItem",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CargaProdUnidadEnter"]={
    "id": "EVT_Scripts_Iniciar_CargaProdUnidadEnter",
    "ClassEvt": "Scripts_Iniciar_CargaProdUnidadEnter",
    "Clase": "Scripts",
    "IdObj": "Scripts_CargaProdUnidadEnter",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_ReiniciarFormCargaProd"]={
    "id": "EVT_Scripts_Iniciar_ReiniciarFormCargaProd",
    "ClassEvt": "Scripts_Iniciar_ReiniciarFormCargaProd",
    "Clase": "Scripts",
    "IdObj": "Scripts_ReiniciarFormCargaProd",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_ProdMarcarOferta"]={
    "id": "EVT_Scripts_Iniciar_ProdMarcarOferta",
    "ClassEvt": "Scripts_Iniciar_ProdMarcarOferta",
    "Clase": "Scripts",
    "IdObj": "Scripts_ProdMarcarOferta",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_FocusBusqueda"]={
    "id": "EVT_Scripts_Iniciar_FocusBusqueda",
    "ClassEvt": "Scripts_Iniciar_FocusBusqueda",
    "Clase": "Scripts",
    "IdObj": "Scripts_FocusBusqueda",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_ST_BuscarByRelacion_BuscarProductos"]={
    "id": "EVT_ST_BuscarByRelacion_BuscarProductos",
    "ClassEvt": "ST_BuscarByRelacion_BuscarProductos",
    "Clase": "SuperTabla",
    "IdObj": "ST_POSListaProductos",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_ProductosClientes"
        }
    }
};
ret["EVT_Scripts_Iniciar_ErrorCodigoBarra"]={
    "id": "EVT_Scripts_Iniciar_ErrorCodigoBarra",
    "ClassEvt": "Scripts_Iniciar_ErrorCodigoBarra",
    "Clase": "Scripts",
    "IdObj": "Scripts_ErrorCodigoBarra",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CalcularSubtotal"]={
    "id": "EVT_Scripts_Iniciar_CalcularSubtotal",
    "ClassEvt": "Scripts_Iniciar_CalcularSubtotal",
    "Clase": "Scripts",
    "IdObj": "Scripts_CalcularSubtotal",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CambiaCantidad"]={
    "id": "EVT_Scripts_Iniciar_CambiaCantidad",
    "ClassEvt": "Scripts_Iniciar_CambiaCantidad",
    "Clase": "Scripts",
    "IdObj": "Scripts_CambiaCantidad",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_TBL_UpdateOneField_ComandasItems"]={
    "id": "EVT_TBL_UpdateOneField_ComandasItems",
    "ClassEvt": "TBL_UpdateOneField_ComandasItems",
    "Clase": "Tabla",
    "IdObj": "TBL_ComandasItems",
    "IdEvt": "Tabla_UpdateOneField",
    "Param": {}
};
ret["EVT_DG_Iniciar_InfoCliente"]={
    "id": "EVT_DG_Iniciar_InfoCliente",
    "ClassEvt": "DG_Iniciar_InfoCliente",
    "Clase": "Dialog",
    "IdObj": "DG_InfoCliente",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_FRM_GetDOMByRelation_TraerCliente"]={
    "id": "EVT_FRM_GetDOMByRelation_TraerCliente",
    "ClassEvt": "FRM_GetDOMByRelation_TraerCliente",
    "Clase": "Formulario",
    "IdObj": "FRM_Comanda",
    "IdEvt": "Formulario_GetDOMByRelation",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_SeleccionNuevoCliente"
        }
    }
};
ret["EVT_DG_PadreHide_this"]={
    "id": "EVT_DG_PadreHide_this",
    "ClassEvt": "DG_PadreHide_this",
    "Clase": "Dialog",
    "IdObj": "This",
    "IdEvt": "Dialog_PadreHide",
    "Param": {}
};
ret["EVT_DS_LibreByRelacion_CambiarCliente"]={
    "id": "EVT_DS_LibreByRelacion_CambiarCliente",
    "ClassEvt": "DS_LibreByRelacion_CambiarCliente",
    "Clase": "DataSources",
    "IdObj": "DS_Comanda",
    "IdEvt": "DataSources_LibreByRelacion",
    "Param": {
        "0": {
            "Key": "Medodo",
            "Function": "GetObj",
            "Value": "CambiarCliente"
        },
        "1": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_CambiarCliente"
        }
    }
};
ret["EVT_Scripts_Iniciar_CalcularAllItemSubtotal"]={
    "id": "EVT_Scripts_Iniciar_CalcularAllItemSubtotal",
    "ClassEvt": "Scripts_Iniciar_CalcularAllItemSubtotal",
    "Clase": "Scripts",
    "IdObj": "Scripts_CalcularAllItemSubtotal",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_FRM_GetBdXRelacion_InfoCliente"]={
    "id": "EVT_FRM_GetBdXRelacion_InfoCliente",
    "ClassEvt": "FRM_GetBdXRelacion_InfoCliente",
    "Clase": "Formulario",
    "IdObj": "FRM_InfoCliente",
    "IdEvt": "Formulario_GetBdXRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_InfoCliente"
        }
    }
};
ret["EVT_DS_LibreByRelacion_ComandaPendiente"]={
    "id": "EVT_DS_LibreByRelacion_ComandaPendiente",
    "ClassEvt": "DS_LibreByRelacion_ComandaPendiente",
    "Clase": "DataSources",
    "IdObj": "DS_Comanda",
    "IdEvt": "DataSources_LibreByRelacion",
    "Param": {
        "0": {
            "Key": "Medodo",
            "Function": "GetObj",
            "Value": "ComandaPendiente"
        },
        "1": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_ComandaPendiente"
        }
    }
};
ret["EVT_VT_ManualFill_NuevaComanda"]={
    "id": "EVT_VT_ManualFill_NuevaComanda",
    "ClassEvt": "VT_ManualFill_NuevaComanda",
    "Clase": "Vistas",
    "IdObj": "VT_Principal",
    "IdEvt": "Vistas_ManualFill",
    "Param": {
        "0": {
            "Key": "SelectObjeto",
            "Function": "GetObj",
            "TipoObj": "Card",
            "IdObj": "CD_NuevaComanda"
        },
        "1": {
            "Key": "SelectGrid",
            "Function": "GetObj",
            "ItemObj": "GR_POS-1-0"
        },
        "2": {
            "Key": "SelectEvtInicio",
            "Function": "SetValue",
            "Value": "Iniciar"
        }
    }
};
ret["EVT_DS_Libre_VerificarApertura"]={
    "id": "EVT_DS_Libre_VerificarApertura",
    "ClassEvt": "DS_Libre_VerificarApertura",
    "Clase": "DataSources",
    "IdObj": "DS_CajasAperturaCierre",
    "IdEvt": "DataSources_Libre",
    "Param": {
        "0": {
            "Key": "Metodo",
            "Function": "GetObj",
            "Value": "VerificarApertura"
        },
        "1": {
            "Key": "Param",
            "Function": "GetObj",
            "Value": "gato"
        }
    }
};
ret["EVT_VT_ManualFill_AperturaCaja"]={
    "id": "EVT_VT_ManualFill_AperturaCaja",
    "ClassEvt": "VT_ManualFill_AperturaCaja",
    "Clase": "Vistas",
    "IdObj": "VT_Principal",
    "IdEvt": "Vistas_ManualFill",
    "Param": {
        "0": {
            "Key": "SelectObjeto",
            "Function": "GetObj",
            "TipoObj": "Card",
            "IdObj": "CD_AperturaCaja"
        },
        "1": {
            "Key": "SelectGrid",
            "Function": "GetObj",
            "ItemObj": "GR_POS-1-0"
        },
        "2": {
            "Key": "SelectEvtInicio",
            "Function": "SetValue",
            "Value": "Iniciar"
        }
    }
};
ret["EVT_FRM_InsertBd_AperturaCaja"]={
    "id": "EVT_FRM_InsertBd_AperturaCaja",
    "ClassEvt": "FRM_InsertBd_AperturaCaja",
    "Clase": "Formulario",
    "IdObj": "FRM_AperturaCaja",
    "IdEvt": "Formulario_InsertBd",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_VistaNuevaComanda"]={
    "id": "EVT_Scripts_Iniciar_VistaNuevaComanda",
    "ClassEvt": "Scripts_Iniciar_VistaNuevaComanda",
    "Clase": "Scripts",
    "IdObj": "Scripts_VistaNuevaComanda",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CerrarComanda"]={
    "id": "EVT_Scripts_Iniciar_CerrarComanda",
    "ClassEvt": "Scripts_Iniciar_CerrarComanda",
    "Clase": "Scripts",
    "IdObj": "Scripts_CerrarComanda",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_VT_ManualFill_FinalizaVentaCab"]={
    "id": "EVT_VT_ManualFill_FinalizaVentaCab",
    "ClassEvt": "VT_ManualFill_FinalizaVentaCab",
    "Clase": "Vistas",
    "IdObj": "VT_Principal",
    "IdEvt": "Vistas_ManualFill",
    "Param": {
        "0": {
            "Key": "SelectObjeto",
            "Function": "GetObj",
            "TipoObj": "Card",
            "IdObj": "CD_FinalizaVentaCab"
        },
        "1": {
            "Key": "SelectGrid",
            "Function": "GetObj",
            "ItemObj": "GR_POS-1-0"
        },
        "2": {
            "Key": "SelectEvtInicio",
            "Function": "SetValue",
            "Value": "Iniciar"
        }
    }
};
ret["EVT_VT_ManualFill_FinalizaVentaFormaPago"]={
    "id": "EVT_VT_ManualFill_FinalizaVentaFormaPago",
    "ClassEvt": "VT_ManualFill_FinalizaVentaFormaPago",
    "Clase": "Vistas",
    "IdObj": "VT_Principal",
    "IdEvt": "Vistas_ManualFill",
    "Param": {
        "0": {
            "Key": "SelectObjeto",
            "Function": "GetObj",
            "TipoObj": "Card",
            "IdObj": "CD_FormasCobro"
        },
        "1": {
            "Key": "SelectGrid",
            "Function": "GetObj",
            "ItemObj": "GR_POS-1-0"
        },
        "2": {
            "Key": "SelectEvtInicio",
            "Function": "SetValue",
            "Value": "Iniciar"
        }
    }
};
ret["EVT_VT_ManualFill_ListaCobroForma"]={
    "id": "EVT_VT_ManualFill_ListaCobroForma",
    "ClassEvt": "VT_ManualFill_ListaCobroForma",
    "Clase": "Vistas",
    "IdObj": "VT_Principal",
    "IdEvt": "Vistas_ManualFill",
    "Param": {
        "0": {
            "Key": "SelectObjeto",
            "Function": "GetObj",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ListaFormaCobro"
        },
        "1": {
            "Key": "SelectGrid",
            "Function": "GetObj",
            "ItemObj": "GR_POS-1-0"
        },
        "2": {
            "Key": "SelectEvtInicio",
            "Function": "SetValue",
            "Value": "Construir"
        }
    }
};
ret["EVT_TBL_DelItem_this"]={
    "id": "EVT_TBL_DelItem_this",
    "ClassEvt": "TBL_DelItem_this",
    "Clase": "Tabla",
    "IdObj": "This",
    "IdEvt": "Tabla_DelItem",
    "Param": {}
};
ret["EVT_ST_BuscarByRelacion_ListaFormaCobro"]={
    "id": "EVT_ST_BuscarByRelacion_ListaFormaCobro",
    "ClassEvt": "ST_BuscarByRelacion_ListaFormaCobro",
    "Clase": "SuperTabla",
    "IdObj": "ST_ListaFormaCobro",
    "IdEvt": "SuperTabla_BuscarByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_BsqFormaCobro"
        }
    }
};
ret["EVT_Scripts_Iniciar_AgregarFormaCobro"]={
    "id": "EVT_Scripts_Iniciar_AgregarFormaCobro",
    "ClassEvt": "Scripts_Iniciar_AgregarFormaCobro",
    "Clase": "Scripts",
    "IdObj": "Scripts_AgregarFormaCobro",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_CobroDigital"]={
    "id": "EVT_DG_Iniciar_CobroDigital",
    "ClassEvt": "DG_Iniciar_CobroDigital",
    "Clase": "Dialog",
    "IdObj": "DG_CobroDigital",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DS_InsertOneByRelacion_CobroDigital"]={
    "id": "EVT_DS_InsertOneByRelacion_CobroDigital",
    "ClassEvt": "DS_InsertOneByRelacion_CobroDigital",
    "Clase": "DataSources",
    "IdObj": "DS_ClientesRecibosItems",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_NuevoCobroDigital"
        }
    }
};
ret["EVT_DS_Libre_SaldoClienteCtaCte"]={
    "id": "EVT_DS_Libre_SaldoClienteCtaCte",
    "ClassEvt": "DS_Libre_SaldoClienteCtaCte",
    "Clase": "DataSources",
    "IdObj": "DS_ClientesCtaCte",
    "IdEvt": "DataSources_Libre",
    "Param": {
        "0": {
            "Key": "Metodo",
            "Function": "GetObj",
            "Value": "SaldoClienteCtaCte"
        },
        "1": {
            "Key": "Param",
            "Function": "SetValue",
            "Value": ""
        }
    }
};
ret["EVT_Scripts_Iniciar_TraerDatosCtaCte"]={
    "id": "EVT_Scripts_Iniciar_TraerDatosCtaCte",
    "ClassEvt": "Scripts_Iniciar_TraerDatosCtaCte",
    "Clase": "Scripts",
    "IdObj": "Scripts_TraerDatosCtaCte",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_CobroCtaCte"]={
    "id": "EVT_DG_Iniciar_CobroCtaCte",
    "ClassEvt": "DG_Iniciar_CobroCtaCte",
    "Clase": "Dialog",
    "IdObj": "DG_CobroCtaCte",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DS_InsertOneByRelacion_NuevoCobroCtaCte"]={
    "id": "EVT_DS_InsertOneByRelacion_NuevoCobroCtaCte",
    "ClassEvt": "DS_InsertOneByRelacion_NuevoCobroCtaCte",
    "Clase": "DataSources",
    "IdObj": "DS_ClientesRecibosItems",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_NuevoCobroCtaCte"
        }
    }
};
ret["EVT_Scripts_Iniciar_Validaciones"]={
    "id": "EVT_Scripts_Iniciar_Validaciones",
    "ClassEvt": "Scripts_Iniciar_Validaciones",
    "Clase": "Scripts",
    "IdObj": "Scripts_Validaciones",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_CambiarCliente"]={
    "id": "EVT_Scripts_Iniciar_CambiarCliente",
    "ClassEvt": "Scripts_Iniciar_CambiarCliente",
    "Clase": "Scripts",
    "IdObj": "Scripts_CambiarCliente",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_NuevoCheque"]={
    "id": "EVT_DG_Iniciar_NuevoCheque",
    "ClassEvt": "DG_Iniciar_NuevoCheque",
    "Clase": "Dialog",
    "IdObj": "DG_NuevoCheque",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_FRM_GetDOMByRelation_NewChequeTraerCliente"]={
    "id": "EVT_FRM_GetDOMByRelation_NewChequeTraerCliente",
    "ClassEvt": "FRM_GetDOMByRelation_NewChequeTraerCliente",
    "Clase": "Formulario",
    "IdObj": "FRM_NuevoCheque",
    "IdEvt": "Formulario_GetDOMByRelation",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_NewChequeTraerCliente"
        }
    }
};
ret["EVT_DS_InsertOneByRelacion_InsertCobroCheque"]={
    "id": "EVT_DS_InsertOneByRelacion_InsertCobroCheque",
    "ClassEvt": "DS_InsertOneByRelacion_InsertCobroCheque",
    "Clase": "DataSources",
    "IdObj": "DS_ClientesRecibosItems",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_NuevoCobroCheque"
        }
    }
};
ret["EVT_Scripts_Iniciar_CalcularCobros"]={
    "id": "EVT_Scripts_Iniciar_CalcularCobros",
    "ClassEvt": "Scripts_Iniciar_CalcularCobros",
    "Clase": "Scripts",
    "IdObj": "Scripts_CalcularCobros",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_DS_InsertOneByRelacion_CrearDocumento"]={
    "id": "EVT_DS_InsertOneByRelacion_CrearDocumento",
    "ClassEvt": "DS_InsertOneByRelacion_CrearDocumento",
    "Clase": "DataSources",
    "IdObj": "DS_DocumentoClientes",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_CrearDocumentoX"
        }
    }
};
ret["EVT_Frame_ImprimirFullDirecto_ImprimirComanda"]={
    "id": "EVT_Frame_ImprimirFullDirecto_ImprimirComanda",
    "ClassEvt": "Frame_ImprimirFullDirecto_ImprimirComanda",
    "Clase": "Frame",
    "IdObj": "Frame_ImprimirComanda",
    "IdEvt": "Frame_ImprimirFullDirecto",
    "Param": {}
};
ret["EVT_Scripts_Iniciar_InicioPuntoVenta"]={
    "id": "EVT_Scripts_Iniciar_InicioPuntoVenta",
    "ClassEvt": "Scripts_Iniciar_InicioPuntoVenta",
    "Clase": "Scripts",
    "IdObj": "Scripts_InicioPuntoVenta",
    "IdEvt": "Scripts_Iniciar",
    "Param": {}
};
ret["EVT_VT_LimpiarGrid_Multiuso"]={
    "id": "EVT_VT_LimpiarGrid_Multiuso",
    "ClassEvt": "VT_LimpiarGrid_Multiuso",
    "Clase": "Vistas",
    "IdObj": "VT_Principal",
    "IdEvt": "Vistas_LimpiarGrid",
    "Param": {
        "0": {
            "Key": "SelectGrid",
            "Function": "GetObj",
            "ItemObj": "GR_POS-1-0"
        }
    }
};
ret["EVT_FRM_GetBdXRelacion_NuevoRecibo"]={
    "id": "EVT_FRM_GetBdXRelacion_NuevoRecibo",
    "ClassEvt": "FRM_GetBdXRelacion_NuevoRecibo",
    "Clase": "Formulario",
    "IdObj": "FRM_NuevoRecibo",
    "IdEvt": "Formulario_GetBdXRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_TraerRecibo"
        }
    }
};
ret["EVT_FRM_GetBdXUltIdInsertado_Comanda"]={
    "id": "EVT_FRM_GetBdXUltIdInsertado_Comanda",
    "ClassEvt": "FRM_GetBdXUltIdInsertado_Comanda",
    "Clase": "Formulario",
    "IdObj": "FRM_Comanda",
    "IdEvt": "Formulario_GetBdXUltIdInsertado",
    "Param": {}
};
ret["EVT_Frame_ImprimirFullDirecto_TiketAfip"]={
    "id": "EVT_Frame_ImprimirFullDirecto_TiketAfip",
    "ClassEvt": "Frame_ImprimirFullDirecto_TiketAfip",
    "Clase": "Frame",
    "IdObj": "Frame_ImprimirTiketAfip",
    "IdEvt": "Frame_ImprimirFullDirecto",
    "Param": {}
};
ret["EVT_DS_InsertOneByRelacion_CrearDocumentoFactura"]={
    "id": "EVT_DS_InsertOneByRelacion_CrearDocumentoFactura",
    "ClassEvt": "DS_InsertOneByRelacion_CrearDocumentoFactura",
    "Clase": "DataSources",
    "IdObj": "DS_DocumentoClientes",
    "IdEvt": "DataSources_InsertOneByRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_CrearDocumentoFactura"
        }
    }
};
ret["EVT_DS_LibreByRelacion_CrearFacturaReal"]={
    "id": "EVT_DS_LibreByRelacion_CrearFacturaReal",
    "ClassEvt": "DS_LibreByRelacion_CrearFacturaReal",
    "Clase": "DataSources",
    "IdObj": "DS_DocumentoClientes",
    "IdEvt": "DataSources_LibreByRelacion",
    "Param": {
        "0": {
            "Key": "Metodo",
            "Function": "GetObj",
            "Value": "InsertFacturaPOS"
        },
        "1": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_InsertFacturaPOS"
        }
    }
};
ret["EVT_DG_Iniciar_AnularRemito"]={
    "id": "EVT_DG_Iniciar_AnularRemito",
    "ClassEvt": "DG_Iniciar_AnularRemito",
    "Clase": "Dialog",
    "IdObj": "DG_AnularRemito",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DS_LibreByRelacion_AnularRemito"]={
    "id": "EVT_DS_LibreByRelacion_AnularRemito",
    "ClassEvt": "DS_LibreByRelacion_AnularRemito",
    "Clase": "DataSources",
    "IdObj": "DS_Comanda",
    "IdEvt": "DataSources_LibreByRelacion",
    "Param": {
        "0": {
            "Key": "Metodo",
            "Function": "GetObj",
            "Value": "AnularComanda"
        },
        "1": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_AnularRemito"
        }
    }
};
ret["EVT_DS_LibreByRelacion_CrearRecibo"]={
    "id": "EVT_DS_LibreByRelacion_CrearRecibo",
    "ClassEvt": "DS_LibreByRelacion_CrearRecibo",
    "Clase": "DataSources",
    "IdObj": "DS_Comanda",
    "IdEvt": "DataSources_LibreByRelacion",
    "Param": {
        "0": {
            "Key": "Metodo",
            "Function": "GetObj",
            "Value": "CrearRecibo"
        },
        "1": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_CrearRecibo"
        }
    }
};
ret["EVT_DS_LibreByRelacion_CrearPedido"]={
    "id": "EVT_DS_LibreByRelacion_CrearPedido",
    "ClassEvt": "DS_LibreByRelacion_CrearPedido",
    "Clase": "DataSources",
    "IdObj": "DS_Comanda",
    "IdEvt": "DataSources_LibreByRelacion",
    "Param": {
        "0": {
            "Key": "Metodo",
            "Function": "GetObj",
            "Value": "CrearPedido"
        },
        "1": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_CrearPedido"
        }
    }
};
ret["EVT_DG_Iniciar_ListaPedidos"]={
    "id": "EVT_DG_Iniciar_ListaPedidos",
    "ClassEvt": "DG_Iniciar_ListaPedidos",
    "Clase": "Dialog",
    "IdObj": "DG_ListaPedidos",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Iniciar_InfoProducto"]={
    "id": "EVT_DG_Iniciar_InfoProducto",
    "ClassEvt": "DG_Iniciar_InfoProducto",
    "Clase": "Dialog",
    "IdObj": "DG_InfoProducto",
    "IdEvt": "Dialog_Iniciar",
    "Param": {}
};
ret["EVT_DG_Cerrar_InfoProducto"]={
    "id": "EVT_DG_Cerrar_InfoProducto",
    "ClassEvt": "DG_Cerrar_InfoProducto",
    "Clase": "Dialog",
    "IdObj": "DG_InfoProducto",
    "IdEvt": "Dialog_Cerrar",
    "Param": {}
};
ret["EVT_DS_BuscarOne_InfoProducto"]={
    "id": "EVT_DS_BuscarOne_InfoProducto",
    "ClassEvt": "DS_BuscarOne_InfoProducto",
    "Clase": "DataSources",
    "IdObj": "DS_InfoProducto",
    "IdEvt": "DataSources_BuscarOne",
    "Param": {
        "0": {
            "Key": "FltIdItem",
            "Function": "GetAttr",
            "TipoObj": "Html",
            "IdObj": "#TBL_POSListaProductos tr.TrSelect",
            "Attr": "IdItem"
        },
        "1": {
            "Key": "FltCampo",
            "Value": "DSidProd"
        },
        "2": {
            "Key": "PostEvt",
            "Value": "EVT_DG_Iniciar_InfoProducto"
        }
    }
};
ret["EVT_DS_Cargar_InfoProducto"]={
    "id": "EVT_DS_Cargar_InfoProducto",
    "ClassEvt": "DS_Cargar_InfoProducto",
    "Clase": "DataSources",
    "IdObj": "DS_InfoProducto",
    "IdEvt": "DataSources_Cargar",
    "Param": {}
};
ret["EVT_FRM_GetBdXRelacion_InfoProducto"]={
    "id": "EVT_FRM_GetBdXRelacion_InfoProducto",
    "ClassEvt": "FRM_GetBdXRelacion_InfoProducto",
    "Clase": "Formulario",
    "IdObj": "FRM_InfoProducto",
    "IdEvt": "Formulario_GetBdXRelacion",
    "Param": {
        "0": {
            "Key": "idRelacion",
            "Function": "GetObj",
            "TipoObj": "Relaciones",
            "IdObj": "REL_InfoProducto"
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
