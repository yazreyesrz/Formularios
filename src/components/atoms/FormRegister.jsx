import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import '../../assets/styles/FormRegister.css'
import Imagen1 from '../../assets/img/imagen1.jpg'
function FormRegister() {
  /*  const navigate = useNavigate()
     const name = useRef()
    const username = useRef()
    const password = useRef() 
    const form = useRef()*/

    const handlerClick = (e)=> {
       // e.preventDefault();
        // console.log(typeof(name) )
        // alert('Nombre: ' + name.current.value)
        //navigate("/")
        // Instrucciones para el elemento form
        //const newForm = new FormData(form.current)
       // alert('Nombre; '+ newForm.get('name'))
    }
    return ( 
            <form >
                <div id='Form'>
                    <div >
                    <img class src={Imagen1} alt="Login" className='loginp' />
                    </div>
                    <div className=''>
                    <input id='casillas' type="text" placeholder='Nombre' />
                    <br /><br />
                    <input id='casillas' type="text" placeholder='Correo electronico' />
                    <br /><br />
                    <input id='casillas' type="text" placeholder='Nombre de usuario' />
                    <br /><br />
                    <input  id='casillas'type="password" placeholder='Contraseña' />
                    <br />
                    <button id='Boton' onClick={handlerClick}>Iniciar sesión</button>
                    <br />
                    </div>                    
                </div>
                </form>    
     );
}

export default FormRegister;