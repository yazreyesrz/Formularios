import { useRef } from 'react';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import '../../assets/styles/FormLogin.css'
import Imagen1 from '../../assets/img/imagen1.jpg'
function FormLogin() {
    const [description, setDescription] = useState({msn: "CC", v : 1})
    const [username, setUsername] = useState('')
    const [stateForm, setStateForm] = useState('')
    const handlerClick = (e) => {
        e.preventDefault()
        setDescription({msn: username})    
    }
    const handlerChange = (e) => {
        console.log(stateForm.username)
       setStateForm({...stateForm,username:""})
        console.log(stateForm.username)
    }
    const handlerChangePassword = (e) => {
        setStateForm({...stateForm,password: e.target.value})
    }
    /*function FormLogin(){
        const form=useRef();
        const handlerChange=(e)=>
            e.preventDefault();
            to="/Regist"
    }*/
    
            return (
                
                    
               
            <form >
            <div id='Form'>


            <div >

                    <img class src={Imagen1} alt="Login" className='loginp' />
                        </div>
                    <div className=''>
                    <input type="text" placeholder='Username' value={stateForm.username} onChange={handlerChange}/>
                    <br /><br />
                    <input type="password" placeholder='Contraseña' value ={stateForm.password} onChange={handlerChangePassword}/>
                    <br /><br />
                    <button id='Boton' onClick={handlerClick}>Iniciar sesión</button>
                    <br />
                    <Link to="/register">¿No tienes cuenta?  registrate aqui</Link>
                    <br /><br />
                    <Link to="/autobuses">¿Tu camion no esta registrado?  registralo aqui</Link>
                    </div>
                    </div>
                   
           
            
{            <div>
                <label>{JSON.stringify(stateForm)}</label>
            </div>}
        </form>
        
        
      );
}
export default FormLogin;