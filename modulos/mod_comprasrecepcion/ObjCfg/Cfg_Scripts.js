function CfgScripts(id,Param){
var ret={};

ret["Scripts_CalcularTotal"]={
    "id": "Scripts_CalcularTotal",
    "Titulo": "",
    "Comentarios": "",
    "Inputs": {}
};
ret["Scripts_CalcularSubtotal"]={
    "id": "Scripts_CalcularSubtotal",
    "Titulo": "",
    "Comentarios": "",
    "Inputs": {}
};
ret["Scripts_CargarColumnaMasiva"]={
    "id": "Scripts_CargarColumnaMasiva",
    "Titulo": "",
    "Comentarios": "",
    "Inputs": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
