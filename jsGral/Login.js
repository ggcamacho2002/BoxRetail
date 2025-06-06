

function MostrarLogin() {
  var HtmlLogin = `

    <div class='BoxLogin'>
            <div id="LoginDiv" class='Login' display:'none'>
                <div id="LoginDivImg" class='LoginDivImg'>
                    <img src="img/logoLogin.png" alt="Logo del Login">
                </div> 
                <div id="LoginDivForm" class='LoginDivForm'>
                    <form id="loginForm" method="POST" onsubmit="return false;"  autocomplete="off">
                        <input type="text" id="FldUsuario" name="FldUsuario" placeholder='Usuario' autocomplete="off" value=''><br><br>
                        <input type="password" id="FldClave" name="FldClave" autocomplete="new-password" placeholder='Clave' value=''><br><br>
                        <button onclick='Login()'>Ingresar</button>
                    </form>
                </div> 
            </div>
      </div>
  `;

  document.body.innerHTML = HtmlLogin;

  document.getElementById('FldUsuario').value = ''
  document.getElementById('FldClave').value = ''

  document.body.style.display = 'flex';
}


async function Login(){

  var cl=new ServerConexion();
  cl.Metodo='Ingresar';	
  cl.Param={};
  cl.Param['NombreUsuario']=document.getElementById('FldUsuario').value;
  cl.Param['Clave']=  document.getElementById('FldClave').value;

  if(cl.Param['NombreUsuario']==''){
      cl.Param['NombreUsuario']='GermanC';
      cl.Param['Clave']='elrojo2002';
  }
  
  await cl.SrvLogin();

    if(cl.Out.usu_nombre){

            IniciarHome(cl.Out);

    }

}

