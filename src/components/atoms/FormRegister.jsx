import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import '../../assets/styles/FormRegister.css'
import Imagen1 from '../../assets/img/imagen1.jpg'
function FormRegister() {
    const formData1=useRef();

    const handlerClick = (e)=> {
        e.preventDefault();
        const formData=new FormData(formData1.current);
        let URI="http://34.225.239.102/api/registrar/usuario"
        console.log(formData.get('tipo'));
        let options={
            method:'POST',
            headers:{ "Content-Type":'application/json'},
            body:JSON.stringify({
                      
            nombre:formData.get('nombre'),
            usuario: formData.get('usuario'),
            correo: formData.get('email'),
            contrasenia: formData.get('contrasenia'),
            })
        }
        fetch(URI,options)
        .then(response=> response.json())
        .then(data=>{alert(JSON.stringify(data))})
    }
    return ( 
            <form ref={formData1}>
                <div id='Form'>
                    <div >
                    <img class src={Imagen1} alt="Login" className='loginp' />
                    </div>
                    <div className=''>
                    <input id='casillas' type="text" placeholder='Nombre' name='nombre'/>
                    <br /><br />
                    <input id='casillas' type="text" placeholder='Correo electronico' name='email'/>
                    <br /><br />
                    <input id='casillas' type="text" placeholder='Nombre de usuario' name='usuario'/>
                    <br /><br />
                    <input  id='casillas'type="password" placeholder='Contraseña' name='contrasenia'/>
                    <br />
                    <button id='Boton' onClick={handlerClick}>Iniciar sesión</button>
                    <br />
                    </div>                    
                </div>
                </form>    
     );
}

export default FormRegister;