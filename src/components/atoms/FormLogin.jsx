import { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/FormLogin.css'
import Imagen1 from '../../assets/img/imagen1.jpg'
function FormLogin() {
    const formdataL=useRef();
    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(formdataL.current);
        let URL="http://34.225.239.102/api/iniciar";
        console.log(formData.get(''));
        let options ={
            method:'POST',
            headers:{"Content-Type":"'application/json"},
            body:JSON.stringify({
                    usuario: formData.get('usuario'),
                    contrasenia: formData.get('contrasenia')
            })
        }
        fetch(URL ,options)
        .then(response => response.json())
        .then(data=>{alert(JSON.stringify(data))})
    }
            return (  
            <form ref={formdataL}>
            <div id='Form'>
            <div >
                    <img class src={Imagen1} alt="Login" className='loginp' />
                        </div>
                    <div className=''>
                    <input type="text" placeholder='Username' name="usuario"/>
                    <br /><br />
                    <input type="password" placeholder='Contraseña'  name="contrasenia"/>
                    <br /><br />
                    <button id='Boton' onClick={handlerClick}>Iniciar sesión</button>
                    <br />
                    <Link to="/register">¿No tienes cuenta?  registrate aqui</Link>
                    <br /><br />
                    <Link to="/autobuses">¿Tu camion no esta registrado?  registralo aqui</Link>
                    </div>
                    </div>
            
{            <div>
                
            </div>}
        </form>
        
        
      );
}
export default FormLogin;