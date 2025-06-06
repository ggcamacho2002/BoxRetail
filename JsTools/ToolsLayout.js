
function ToolsTraerStyle(ArrStyle){
  var ret='';
  for(var key in ArrStyle){

    if(ArrStyle[key]["Prop"])if(ArrStyle[key]["Prop"]!='')ret+=ArrStyle[key]["Prop"]+':'+ArrStyle[key]["Value"]+";";

  }

    return ret;
}
function ToolsTraerCssClass(ArrCssClass){
  var ret='';
  for(var key in ArrCssClass){

    ret+=ArrCssClass[key]["IdObj"]+" ";

  }

    return ret;
}
