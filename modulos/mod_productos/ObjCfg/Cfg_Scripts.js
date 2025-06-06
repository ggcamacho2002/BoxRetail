function CfgScripts(id,Param){
var ret={};

ret["Scripts_CambiarNombre"]={
    "id": "Scripts_CambiarNombre",
    "Titulo": "",
    "Comentarios": "",
    "Inputs": {
        "0": {
            "Nombre": "1111111",
            "Comentarios": "111"
        }
    }
};
ret["Scripts_FiltroPostGuardar"]={
    "id": "Scripts_FiltroPostGuardar",
    "Titulo": "",
    "Comentarios": "",
    "Inputs": {}
};

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
