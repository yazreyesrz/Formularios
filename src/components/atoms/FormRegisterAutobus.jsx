import '../../assets/styles/FormRegisterAutobus.css'
import Imagen1 from '../../assets/img/imagen1.jpg'
import { Link } from 'react-router-dom';

function FormRegisterAutobus() {
return(
    <form >
    <div id='Form1'>

        <div>
         <h1>Gatobuses</h1>
        <img class src={Imagen1} alt="Login" className='loginf' />
        </div>
        <div class="contenedor-flexbox">
            <div id='Caja2'>
            <input id='casillas' type="text" placeholder='Clave autobus' />
            <br /><br />
            <input id='casillas' type="text" placeholder='Placa autobus' />
            <br /><br />
            </div>
            <div id='Caja2'>
            <input id='casillas' type="text" placeholder='Numero de asientos' />
             <br /><br />
            <input id='casillas' type="text" placeholder='Fecha de alta' />
            <br /><br />
            </div>
        </div>
        <div>
        <input id='casillas2' type="text" placeholder='Tipo' />
            <br /><br />
            <input id='casillas2' type="text" placeholder='Nombre del chofer' />
            <br /><br />
            <input id='casillas2' type="text" placeholder='Numero de licencia' />
            <br /><br />
            <button>Alta de autobus</button>
        </div>


    </div>
       
    </form>
);





}
export default FormRegisterAutobus;