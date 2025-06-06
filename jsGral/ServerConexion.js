class ServerConexion{

constructor(){

this.Out;
this.Class;
this.App='BoxRetail';	
this.Seccion='Global';	
this.Metodo;	
this.Param;


};

////////////////////////////////////ESPECIALES//////////////////////////////////////////////////////////

async SrvLogin(){	
	
	this.Url = '../'+this.App+'/Server/ClassGlobal/Login.php';
	var auxEnvio={};

		auxEnvio["Call"]="URL";
		auxEnvio["Class"]='Login';
		auxEnvio["Metodo"]=this.Metodo;
		if(this.Param){auxEnvio["Param"]=this.Param;}

	var Parametros=JSON.stringify(auxEnvio);
	var res= await this.TraerJson(Parametros);
	this.Out=res;	
};	


async SrvHome(){	
	
	this.Url = '../'+this.App+'/Server/ClassGlobal/Home.php';
	var auxEnvio={};

		auxEnvio["Call"]="URL";
		auxEnvio["Class"]='Home';
		auxEnvio["Metodo"]='Iniciar';
		if(this.Param){auxEnvio["Param"]=this.Param;}

	var Parametros=JSON.stringify(auxEnvio);
	var res= await this.TraerJson(Parametros);
	this.Out=res;	
};	


/////////////////////////////////////////////////////////////////////////////////////////////////////////

async TraerJson(param) {
    const url = this.Url; 

    try {
        const response = await fetch(url, {
            method: 'POST', // Método HTTP
            headers: {
                'Content-Type': 'application/json;charset=utf-8', // Tipo de contenido
            },
            body: param // Convertimos el parámetro a una cadena JSON
        });

        if (!response.ok) {
            // Si la respuesta no es 200-299, lanzamos un error
           // this.Error(response);
			throw new Error(`El servidor retornó el código de estado ${Response.status}`);		
        }

        // Convertimos la respuesta en JSON
        const data = await response.json();
		
        return data; // Devolvemos los datos

    } catch (error) {
        console.error('Error:', error);
        
        throw error; // Lanzamos el error para manejarlo en otro lugar
    }
}


async TraerHtml(param) {
    this.Url = '../'+this.App+'/Server/ClassGlobal/ReceptorUrlHtml.php';

    try {
        const response = await fetch(this.Url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.text(); 
        return data;  

    } catch (error) {
        console.error('Hubo un problema con la solicitud Fetch:', error);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

async SrvDispatch(){	
		
	this.Url = '../'+this.App+'/Server/ClassGlobal/ReceptorUrl.php';

	if(this.Param){
		if(this.Param)var Param=this.Param;
		
		if(this.Param.Orden)var Orden=this.Param.Orden;
		if(this.Param.Columns)var Columns=this.Param.Columns;
		if(this.Param.Filtros)var Filtros=this.Param.Filtros;
	}
	

	var Parametros ='{';
	
					//Parametros +='"App":"'+this.App+'",';
					Parametros +='"Call":"URL",';
					Parametros +='"Seccion":"'+this.Seccion+'",';
					Parametros +='"Class":"'+this.Class+'",';
					Parametros +='"Metodo":"'+this.Metodo+'"';
					
				
						if(Filtros)
						if(Filtros!=''){		
							Parametros +=Filtros;
						}
						if(Orden)	
						if(Orden!=''){	
					
							Parametros +=','+Orden;
						
						}
						if(Param)
						if(Param!=''){	
						
					    	Parametros +=','+Param;
						
						}
						if(Columns)
						if(Columns!=''){	
						
					    	Parametros +=','+Columns;
						
						}
	Parametros +='}';
	
	
	
	var res=await this.TraerJson(Parametros);
	this.Out=res;	
};	


async SrvDispatchStringify(){	
	
	var auxEnvio={};

		auxEnvio["Call"]="URL";
		auxEnvio["App"]=this.App;
		auxEnvio["Seccion"]=this.Seccion;
		auxEnvio["Class"]=this.Class;
		auxEnvio["Metodo"]=this.Metodo;
		if(this.Param){auxEnvio["Param"]=this.Param;}

	var Parametros=JSON.stringify(auxEnvio);
	var res=await this.TraerJson(Parametros);
	this.Out=res;	
};	


async BuscarById(){	    
	
	var Columns='';
	
	if(this.Param.Filtros)Filtros=this.Param.Filtros;
	if(this.Param.Columns)Columns=this.Param.Columns;


	var Parametros ='{';
	
					Parametros +='"Call":"URL",';
					Parametros +='"App":"'+this.App+'",';
					Parametros +='"Class":"'+this.Class+'",';
					Parametros +='"Metodo":"'+this.Metodo+'"';
					
				
						if(Filtros!=''){		
							Parametros +=Filtros;
						}	
						if(Columns!=''){	
						
					    	Parametros +=','+Columns;
						
						}
	Parametros +='}';
	
	
	
	var res=await this.TraerJson(Parametros);
	this.Out=res;	
};	


async SrvMutation(){	    
	
	if(this.Param.Filtros)Filtros=this.Param.Filtros;

	var Parametros ='{';
	
					Parametros +='"Call":"URL",';
					Parametros +='"Class":"'+this.Class+'",';
					Parametros +='"Metodo":"'+this.Metodo+'"';
					Parametros +='"App":"'+this.App+'"';
				
						if(Filtros!=''){		
							Parametros +=Filtros;
						}	
						
						if(this.Param.idSrcs)Parametros +=','+this.Param.idSrcs;
						else alert('error los idSrcs deben estar definidos');

	Parametros +='}';
	
	
	
	var res=await this.TraerJson(Parametros);
	this.Out=res;	

	
};	

async SubirFileSRV(inputFile) {
    this.Url = '../' + this.App + '/Server/ClassGlobal/SubirArchivo.php';

    if (!inputFile || !inputFile.files || inputFile.files.length === 0) {
        console.error("No hay archivo para cargar.");
        // Aquí deberías notificar al usuario que necesita seleccionar un archivo
        return;
    }

    const archivo = inputFile.files[0];
    if (!archivo) {
        console.error("El archivo no está disponible para ser subido.");
        // Notificar al usuario que el archivo no está disponible
        return;
    }

    let formData = new FormData();
    formData.append('file', archivo);

    try {
        const response = await fetch(this.Url, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

        const jsonResponse = await response.json();
        // Aquí manejas la respuesta del servidor, por ejemplo, notificando al usuario que el archivo se cargó correctamente

    } catch (error) {
		alert('No se pudo Cargar el archivo: Intente Reseteando el Campo y vuelva a Cargarlo :'+error.message);
    }
}

async SrvGetHtml(){	
	
	var auxEnvio={};

		auxEnvio["Call"]="URL";
		auxEnvio["Class"]=this.Class;
		auxEnvio["Seccion"]='Negocio';
		auxEnvio["Metodo"]=this.Metodo;
		if(this.Param){auxEnvio["Param"]=this.Param;}

		this.Out=await this.TraerHtml(auxEnvio);
	
};	


Error(Response,exception){	
	
		var msg='';
		
			if (Response === 0) {
				msg = 'NO CONECTADO.\n Verify Network.';
			} else if (Response.status == 404) {
				msg = 'Requested page not found. [404]';
			} else if (Response.status== 500) {
				msg = 'Internal Server Error [500].';
			} else if (exception === 'parsererror') {
				msg = 'JSON parse failed.';
			} else if (exception === 'timeout') {
				msg = 'Time out error.';
			} else if (exception === 'abort') {
				msg = 'Ajax request aborted.';
			} else {
				msg = 'Uncaught Error.\n' + Response.responseText;
			}
			
			alert(msg+'--'+Response.responseText);
			


	
};

ErrorNulo = function(){	
			
	alert('NO SE ENCONTRARON RESULTADOS');
	
};



}




