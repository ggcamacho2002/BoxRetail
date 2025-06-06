function CfgFrame(id,Param){
var ret={};

ret["Frame_Respuesta"]={
    "id": "Frame_Respuesta",
    "CssClass": "",
    "Style": {
        "0": {
            "Prop": "Height",
            "Value": "500px",
            "Orden": 0
        },
        "1": {
            "Prop": "Padding",
            "Value": "10px"
        }
    },
    "Class": "Robot",
    "Metodo": "Buscar",
    "Param": {
        "0": {
            "Key": "pregunta",
            "Tipo": "GetValue",
            "Id\/Value": "DSMsgInput-0-Fld-FRM_Robot"
        }
    }
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
