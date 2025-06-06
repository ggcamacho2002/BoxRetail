class Eventos {
    constructor() {
        this.ClaseActual = '';
        this.TipoObjPadre = '';
        this.Out;
    }

    Iniciar() {
        // Configurar el MutationObserver
        const observer = new MutationObserver(this.manejarCambiosDOM.bind(this));
        const config = { childList: true, subtree: true };
        observer.observe(document.body, config);

        // Opcional: Añadir event listeners a los elementos existentes al cargar la página
        this.inicializarEventListeners();
    }

    inicializarEventListeners() {
        const elementos = document.querySelectorAll('input[classevt], button[classevt],select[classevt]');
        elementos.forEach(elemento => {
            if (!elemento.classList.contains('addevt') && elemento.getAttribute('classevt') !== null && elemento.getAttribute('classevt') !== '' && elemento.getAttribute('classevt') !== 'Null' && elemento.getAttribute('classevt') !== 'undefined') {
                elemento.addEventListener('click', this.ManejarEventos.bind(this));
                elemento.addEventListener('change', this.ManejarEventos.bind(this));
                if (elemento.tagName === 'INPUT') {
                    elemento.addEventListener('keydown', (evento) => {
                        if (evento.key === 'Enter') {
                            this.ManejarEventos(evento);
                        }
                    });
                }
                elemento.classList.add('addevt');
            }
        });
    }

    manejarCambiosDOM(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // Comprueba si el nodo es un input o un botón y si no tiene ya el evento asignado
                        if (node.matches('input[classevt], button[classevt],select[classevt],div[classevt]') && !node.classList.contains('addevt')) {
                            this.agregarEventosANodo(node);
                        }
                        // Hacer lo mismo para todos los elementos input y botones dentro del nodo
                        node.querySelectorAll('input[classevt], button[classevt],select[classevt],div[classevt]').forEach(elemento => {
                            if (!elemento.classList.contains('addevt')) {
                                this.agregarEventosANodo(elemento);
                            }
                        });
                    }
                });
            }
        }
    }

    async agregarEventosANodo(nodo) {
        if (nodo.getAttribute('classevt') !== null && nodo.getAttribute('classevt') !== '' && nodo.getAttribute('classevt') !== 'Null' && nodo.getAttribute('classevt') !== 'undefined') {
            nodo.addEventListener('click', this.ManejarEventos.bind(this));
            nodo.addEventListener('change', this.ManejarEventos.bind(this));
            if (nodo.tagName === 'INPUT') {
                nodo.addEventListener('keypress', (evento) => {
                    if (evento.key === 'Enter') {
                         this.ManejarEventos(evento);
                    }
                });
            }
            nodo.classList.add('addevt');
        }
    }

   async ManejarEventoLoadDom(ObjSub) {
    
        this.idObj = ObjSub.id;
        this.TipoObjPadre = ObjSub.getAttribute('Tipo');
        let trigger = "LoadDOM";

        if(this.TipoObjPadre){

                this.ClaseActual=InvokeClase(this.TipoObjPadre,this.idObj);
                this.ClaseActual.CargarCfg();
                var cargado=0;
        
                if(this.ClaseActual.Cfg)
                if(this.ClaseActual.Cfg.CfgEventos){
                                var CfgEvt= this.ClaseActual.Cfg.CfgEventos;
                                
                                for(var keyEvt in CfgEvt){
        
                                        for (var keyHilo in CfgEvt[keyEvt].Hilo){
                                            if(CfgEvt[keyEvt].Hilo[keyHilo].Trigger=='LoadDOM' && cargado==0){
                                                    await this.DispatchEvent(ObjSub,trigger,CfgEvt[keyEvt].ClassEvt);
                                                    cargado=1;
                                            }
                                        } 
                                        cargado=0;
                                }
                }

        }


    
    }

async ManejarEventos(e) {
    
    let target = e.target;
    let ClassEvt = target.getAttribute('ClassEvt');
    this.TipoObjPadre = target.getAttribute('TipoObjPadre');
    let idobjpadre = target.getAttribute('idobjpadre');
    let trigger = e.type;
    
    if(e.key=='Enter')trigger='keyPressEnter';

    if (ClassEvt !== null && ClassEvt !== "" && ClassEvt !== "Null") {
            
                    if (this.TipoObjPadre !== null && this.TipoObjPadre !== "") {
                        if (idobjpadre !== null && idobjpadre !== "") {
                                //Se requiere encontrar la clase del padre para poder traer la cfg de los eventos
                                    this.ClaseActual=InvokeClase(this.TipoObjPadre,idobjpadre);
                                    this.ClaseActual.TipoClase=this.TipoObjPadre;
                                    this.ClaseActual.CargarCfg();
                                   await this.DispatchEvent(target,trigger,ClassEvt);
                        }
                    }
            
        } 


}

async DispatchEvent(ObjEvt, Trigger, ClassEvt) {
this.ObjEvt=ObjEvt;


var cfgEventos=this.ClaseActual.Cfg.CfgEventos;

let selectEvent = "";
if(cfgEventos)
        if(cfgEventos!=undefined)
            if(Object.keys(cfgEventos).length > 0){

                    selectEvent = Object.values(cfgEventos).find(evt => evt.ClassEvt === "TrEvent");

                    if (!selectEvent) {
                            selectEvent = Object.values(cfgEventos).find(evt => evt.ClassEvt === ClassEvt);
                    }          
                                                
                    if (selectEvent) {
                        await this.ejecutarEvento(selectEvent.Hilo,Trigger);                              
                    }
                    
            }
}

async ejecutarEvento(Hilo, Trigger) {
    var sigue = 1;

    var filtradoHilo = Object.values(Hilo).filter(evt => evt.Trigger === Trigger);
    
    filtradoHilo.sort((a, b) => +a.Orden - +b.Orden);

    for (let itemHilo of filtradoHilo) {
        sigue = await this.ejecutarHilo(itemHilo);
        if (sigue === 0) { 
            break;
        }
    }
}

async ejecutarHilo(itemHilo) {

    if (!itemHilo) {
        console.error('El evento proporcionado no es válido');
        return;
    }

    var cfgEvento=CfgEventos(itemHilo.IdEvt);
    if(!cfgEvento) console.error('Error:', 'No se encontro el evento');
    var IdObj=''; 	
    if(cfgEvento.IdObj=='This')IdObj=this.ClaseActual.id;
    else IdObj=cfgEvento.IdObj;

    const clNewEvt =InvokeClase(cfgEvento.Clase,IdObj);
    const param = cfgEvento.Param || '';
    await clNewEvt.Eventos(this.ObjEvt, cfgEvento.IdEvt, param);
    this.Out=clNewEvt.Out;
    if(clNewEvt.Out && clNewEvt.Out!='ErrorStop'){
           localStorage.setItem('system-RespUltEvento-TipoOp',clNewEvt.Out.TipoOp);
           localStorage.setItem('system-RespUltEvento-Result',clNewEvt.Out.result);
           localStorage.setItem('system-RespUltEvento-rows',clNewEvt.Out.rows);
           localStorage.setItem('system-RespUltEvento-queryId',clNewEvt.Out.queryId);

           if (clNewEvt.Out.datos && JSON.stringify(clNewEvt.Out.datos).length <= 500000) {
            localStorage.setItem('system-RespUltEvento-datos', JSON.stringify(clNewEvt.Out.datos));
           }else{
            localStorage.setItem('system-RespUltEvento-datos', "Demaciados Datos");
           }


    }       

    if(clNewEvt.Out=='ErrorStop'){

        localStorage.setItem('system-RespUltEvento-TipoOp',"Error");
        localStorage.setItem('system-RespUltEvento-Result',"Error");
        localStorage.setItem('system-RespUltEvento-rows',"Error");
        localStorage.setItem('system-RespUltEvento-queryId',"Error");
        localStorage.setItem('system-RespUltEvento-datos',"Error");
        return 0;
        
    }
    else return 1;

}



}
