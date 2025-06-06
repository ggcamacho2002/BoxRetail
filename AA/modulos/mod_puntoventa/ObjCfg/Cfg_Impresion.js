function CfgImpresion(id,Param){
var ret={};

ret["IMP_Comanda"]={
    "id": "IMP_Comanda",
    "Titulo": "Imprimir Remito",
    "Fecha": "",
    "Grid": "GR_ImprimeComanda",
    "CssClass": "",
    "GridFill": {
        "0": {
            "Col": "GR_ImprimeComanda-0-0",
            "TipoObj": "Formulario",
            "IdObj": "FRM_NuevoRecibo",
            "Param": {},
            "Orden": 0
        },
        "1": {
            "Col": "GR_ImprimeComanda-1-0",
            "TipoObj": "SuperTabla",
            "IdObj": "ST_ComandasItems",
            "Param": {},
            "Orden": 1
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
