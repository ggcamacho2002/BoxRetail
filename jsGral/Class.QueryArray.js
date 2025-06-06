class QueryArray {
    constructor(tabla) {
      this.tabla = tabla;
      this.Cfg = null;
      this.Out = null;
    }
  
    Iniciar() {
      this.Select = this.Cfg.CfgItems;
      this.Where = this.Cfg.CfgFiltros;
      this.Order = this.Cfg.CfgOrder;
  
      this.Query();
    }
  
    Query() {
      let resultados = [];
      var idSrcs=0;
      if (typeof this.Select !== "object" || this.Select === null) {
        // Si no se especificaron idSrcs en la selección,
        // se seleccionan todos los idSrcs de la tabla
        idSrcs = Object.keys(this.tabla[0]);
        this.Select = idSrcs.reduce((obj, idSrc) => {
          obj[idSrc] = idSrc;
          return obj;
        }, {});
        
      } else {
        // Seleccionar idSrcs especificados en this.Select
        idSrcs = Object.keys(this.Select);
      }


      const registros = Object.values(this.tabla);
      registros.forEach(registro => {
        const nuevoRegistro = {};
        idSrcs.forEach(idSrc => {
          nuevoRegistro[this.Select[idSrc]] = registro[idSrc];
        });
        resultados.push(nuevoRegistro);
      });
  
      // Aplicar cláusula WHERE
      if (this.Where !== null && this.Where !== undefined) {
        resultados = resultados.filter(registro => {
          return this.cumpleWhere(registro, this.Where);
        });
      }
  
      // Ordenar resultados
      if (this.Order !== null && this.Order !== undefined) {
        const orden = Object.values(this.Order);
        orden.forEach(criterio => {
          resultados = this.ordenarPor(resultados, criterio.idSrc, criterio.tipo);
        });
      }
  
      this.Out = resultados;
    }
  
    SeleccionaridSrcs() {
      let resultados = [];
      const idSrcs = Object.keys(this.Select);
      const registros = Object.values(this.tabla);
      registros.forEach(registro => {
        const nuevoRegistro = {};
        idSrcs.forEach(idSrc => {
          nuevoRegistro[this.Select[idSrc]] = registro[idSrc];
        });
        resultados.push(nuevoRegistro);
      });
      this.Out = resultados;
    }
  
    AplicarClausulaWhere() {
      let resultados = this.Out;
      if (this.Where !== null && this.Where !== undefined) {
        resultados = resultados.filter(registro => {
          return this.cumpleWhere(registro, this.Where);
        });
      }
      this.Out = resultados;
    }
  
    OrdenarResultados() {
      let resultados = this.Out;
      if (this.Order !== null && this.Order !== undefined) {
        const orden = Object.values(this.Order);
        orden.forEach(criterio => {
          resultados = this.ordenarPor(resultados, criterio.idSrc, criterio.tipo);
        });
      }
      this.Out = resultados;
    }
  
    cumpleWhere(registro, where) {
      for (let i in where) {
        const condicion = where[i];
        const valor = registro[condicion.idSrc];
        switch (condicion.tipo) {
          case '>':
            if (valor <= condicion.value) return false;
            break;
          case '<':
            if (valor >= condicion.value) return false;
            break;
          case '>=':
            if (valor < condicion.value) return false;
            break;
          case '<=':
            if (valor > condicion.value) return false;
            break;
          case '=':
            if (valor != condicion.value) return false;
            break;
          case '<>':
            if (valor == condicion.value) return false;
            break;
          case 'LIKE':
            const patron = new RegExp(condicion.value, 'i');
            if (!patron.test(valor)) return false;
            break;
        }
      }
      return true;

    }
    ordenarPor(arreglo, idSrc, tipo) {
        return arreglo.sort((a, b) => {
          const valorA = a[idSrc];
          const valorB = b[idSrc];
          let comparacion = 0;
          if (valorA > valorB) {
            comparacion = 1;
          } else if (valorA < valorB) {
            comparacion = -1;
          }
          if (tipo === 'DESC') {
            comparacion = comparacion * -1;
          }
          return comparacion;
        });
      }
}


    /*ejemplo

var tabla = {
  "1": { id: 1, nombre: "Juan", edad: 30 },
  "2": { id: 2, nombre: "Ana", edad: 25 },
  "3": { id: 3, nombre: "Pedro", edad: 35 },
  "4": { id: 4, nombre: "Sofía", edad: 28 },
  "5": { id: 5, nombre: "Carlos", edad: 40 }
};
var Cfg = {
  Select: {
    id: "ID",
    nombre: "Nombre",
    edad: "Edad"
  },
  Where: {
    1: { idSrc: "edad", tipo: ">", value: 28 }
  },
  Order: {
    1: { idSrc: "edad", tipo: "ASC" },
    2: { idSrc: "nombre", tipo: "DESC" }
  }
};

//////instanciar////////

const cl = new QueryArray(tabla);
cl.Cfg =Cfg 
cl.Iniciar();

*/