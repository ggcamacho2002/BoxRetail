class Log {
  constructor(className) {
    this.className = className;
    this.ItemLog = "";
  }

  Iniciar(error) {
    const lineNumber = error.stack ? this.obtenerNumeroLinea(error.stack) : '';
    console.log(`Error en clase ${this.className}, línea ${lineNumber}:`, error);
    console.log(this.personalizarError(error));
  }

  obtenerNumeroLinea(stack) {
    const stackLines = stack.split('\n');
    const lineInfo = stackLines[1].split(':');
    const lineNumber = lineInfo[1];
    return lineNumber;
  }

  personalizarError(error) {
    switch (error.constructor.name) {
      case 'TypeError':
        return 'Error de tipo: ' + error.message;
      case 'ReferenceError':
        return 'Error de referencia: ' + error.message;
      default:
        return 'Error desconocido: ' + error.message;
    }
  }
}

