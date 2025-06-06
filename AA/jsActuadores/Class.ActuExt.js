class ActuExt{

    constructor(){

        this.Out;//Privado
};
    
    
    GenStringPropValue(input) {
    const styleArray = [];
    for (const key in input) {
        if (input.hasOwnProperty(key)) {
        const prop = input[key].Prop.toLowerCase();
        const value = input[key].Value;
        styleArray.push(`${prop}:${value}`);
        }
    }
    const styleString = styleArray.join(";");
    return styleString;
    }

    GenStringIdObj(input) {
        const cssClassArray = [];
        for (const key in input) {
          if (input.hasOwnProperty(key)) {
            const idObj = input[key].IdObj.toLowerCase();
            cssClassArray.push(idObj);
          }
        }
        const cssClassString = cssClassArray.join(" ");
        return cssClassString;
      }


      GenerateXJsonParam(input) {
        if (Array.isArray(input)) {
          const paramArray = [];
          input.forEach((item) => {
            const paramObject = {};
            for (const key in item) {
              if (item.hasOwnProperty(key)) {
                const originalKey = key;
                let paramKey = key;
                if (typeof key !== "string") {
                  paramKey = `"${key}"`;
                }
                const paramValue = item[originalKey].Value || item[originalKey];
                paramObject[paramKey] = paramValue;
              }
            }
            paramArray.push(paramObject);
          });
          const jsonString = JSON.stringify(paramArray);
          return jsonString;
        } else {
          const paramObject = {};
          for (const key in input) {
            if (input.hasOwnProperty(key)) {
              let paramKey = key;
              if (typeof key !== "string") {
                paramKey = `"${key}"`;
              }
              const paramValue = input[key].Value || input[key];
              paramObject[paramKey] = paramValue;
            }
          }
          const jsonString = JSON.stringify(paramObject);
          return jsonString;
        }
      }


    ResolveStyle(Style){
        var aux='';
        if(Style!=undefined){
                if(typeof Style === 'object' && Object.keys(Style).length > 0) {
                    aux= this.GenStringPropValue(Style);
                } else {
                    if(typeof Style === 'string')aux = Style;
                }
        }
        return aux;
    }
    ResolveCssClass(CssClass){
        var aux='';
        if(CssClass!=undefined && CssClass !=''){
            if(typeof CssClass === 'object' && Object.keys(CssClass).length > 0) {
                aux= this.GenStringIdObj(CssClass);
            } else {
                if(typeof CssClass === 'string')aux = CssClass;
            }
        }
          return aux;
    }
    ResolveParams(Params){
        var aux='';
        if(Params!=undefined){
                if(Object.keys(Params).length>0){ aux=encodeURIComponent(this.GenerateXJsonParam(Params));}
                else{
                    aux=encodeURIComponent(JSON.stringify(Params));
                }
        }
        return aux;
    }




}

