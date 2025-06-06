function CfgDataSources(id,Param){
var ret={};

ret["DS_Robot"]={
    "id": "DS_Robot",
    "TipoSource": "SrvConexion",
    "Class": "Robot",
    "CfgItems": {
        "0": {
            "id": "DSid",
            "idSrc": "DSid",
            "Label": "Id"
        },
        "1": {
            "id": "DSMsgInput",
            "idSrc": "DSMsgInput",
            "Label": "MsgInput"
        },
        "2": {
            "id": "DSMsgOutput",
            "idSrc": "DSMsgOutput",
            "Label": "MsgOutput"
        },
        "3": {
            "id": "",
            "idSrc": "",
            "Label": ""
        }
    },
    "CfgFiltros": {},
    "CfgParam": {},
    "CfgOrden": {}
};

///UltimoRegistroDelCfg///

   if(id=="" || id==undefined){return ret;}
    else{
                            if(ret[id])return ret[id];
                            else {}}
}
