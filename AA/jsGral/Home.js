
async function IniciarHome(sesion){	
	
    var cl=new ServerConexion();
    cl.Metodo='Ingresar';	
    cl.Param={};
    cl.Param['usu_nombre']=sesion.usu_nombre;
   await cl.SrvHome();

    crearHome(cl.Out,sesion.usu_nombre);
};	

async function VolverHome(usunombre){	
	
    var cl=new ServerConexion();
    cl.Metodo='Ingresar';	
    cl.Param={};
    cl.Param['usu_nombre']=usunombre;
   await cl.SrvHome();

    crearHome(cl.Out,usunombre);
};	

function crearHome(data,sesion){

    let estructura = {};
    

    data.forEach(item => {
        if (!estructura[item.seccion]) {
            estructura[item.seccion] = {};
        }
    
        if (!estructura[item.seccion][item.subseccion]) {
            estructura[item.seccion][item.subseccion] = [];
        }
    
            // Creando un objeto que incluya tanto el módulo como el id.
            let itemConId = {
                modulo: item.modulo,
                titulo: item.titulo,
                id: item.id
            };
        
            estructura[item.seccion][item.subseccion].push(itemConId);
    });

    DivHome=crearHTMLMenu(estructura);
    crearHTMLScreen(DivHome,sesion);


}

function crearHTMLMenu(estructura) {
    let htmlTotal = '';

    for (let seccion in estructura) {
        let htmlSeccion = `<div class="Tarjeta"><h2>${seccion}</h2>`;

        for (let subseccion in estructura[seccion]) {
            let htmlSubseccion = `<div><h3>${subseccion}</h3><ul>`;

            estructura[seccion][subseccion].forEach(item => {
                htmlSubseccion += `<li id="${item.id}" onclick="IniciarModulo('${item.modulo}','${item.titulo}')">${item.titulo}</li>`;
            });

            htmlSubseccion += '</ul></div>';
            htmlSeccion += htmlSubseccion;
        }

        htmlSeccion += '</div>';
        htmlTotal += htmlSeccion;
    }

    return htmlTotal;
}

function crearHTMLScreen(DivHome,sesion) {

    var Html=`
                    <input type="hidden" id="GLOBAL_idSrcselecto"/>
                    <input type="hidden" id="GLOBAL_valorselecto"/>

                    <div id="SCREEN" class="SCREEN">
                    <div id="CabScreen" class="CabScreen" style="height:35px">
                        <div id="CabScreenLogo" class="CabScreenLogo"><img src="img/logoLogin.png"></div>
                        <div id="CabScreenRuta" class="CabScreenRuta">
                             <div id="CabScreenModulo" class="CabScreenModulo"></div>
                             <div id="CabScreenVista" class="CabScreenVista"></div>
                             <div id="CabScreenSubVista" class="CabScreenSubVista"></div>
                        </div>
                        <div id="CabScreenCtr" class="CabScreenCtr">
                            <input type="button" value="Consultas" onclick="Consultas();">
                            <input type="button" value="Tareas" onclick="Tareas();">
                            <input type="button" value="DashBoard" onclick="CambiarVista(0);">
                            <input type="button" value="Home" class='VolverHome' onclick="VolverHome('${sesion}');">
                        </div>
                        <div id="CabScreenUsuario" class="CabScreenUsuario">
                             <input type="text" id="usu_nombre"  value="${sesion}">
                        </div>
                    </div>
                    <div id="ScreenBody" class="ScreenBody">
                        <div id="BoxVistas" class="BoxVista">
                                <div id='DivHome'>${DivHome}</div>
                        </div>    
                    </div>
        `;

        document.body.innerHTML=Html;

        
}

