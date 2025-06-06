function Scripts_AnioMesActual(ObjEvt,Params){


    var fechaActual = new Date();
    // Extrae el año y el mes de la fecha actual
    var anioActual = fechaActual.getFullYear();
    var mesActual = fechaActual.getMonth() + 1; // getMonth() devuelve un índice basado en cero, por lo tanto, se suma 1 para obtener el mes correcto
    
    document.getElementById('Anio-0-Fld-FRM_Variables').value = anioActual;

    var mesConDosDigitos = ('0' + mesActual).slice(-2);
    document.getElementById('Mes-0-Fld-FRM_Variables').value = mesConDosDigitos;

}