function Scripts_ErrorCodigoBarra(ObjEvt,Params){
    var txt="";
    var aux=document.getElementById('DSNombreProducto-0-Fld-TBL_POSListaProductos');
     if(aux)txt=aux.innerHTML;

    if(txt=='Error Codigo Barra'){

                 var audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    // Crear un OscillatorNode
                var oscillator = audioContext.createOscillator();

                // Configurar las propiedades del oscillator
                oscillator.type = 'square';  // Tipo de onda: 'sine', 'square', 'sawtooth', 'triangle'
                oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Frecuencia en Hz

                // Conectar el oscillator al destino (salida de audio)
                oscillator.connect(audioContext.destination);

                // Iniciar el oscillator
                oscillator.start();

                // Detener el oscillator después de 200 milisegundos
                setTimeout(function() {
                    oscillator.stop();
                    // Limpieza después de detener el oscillator
                    oscillator.disconnect();
                }, 1000); // Duración del tono en milisegundos

    }

}