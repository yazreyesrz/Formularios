import {useRef} from "react"
import '../../assets/styles/FormRegisterAutobus.css'
import Imagen1 from '../../assets/img/imagen1.jpg'


function FormRegisterAutobus() {
    
    const formdata1=useRef();
    const handlerClick = (e) =>{
        e.preventDefault();
        const formData = new FormData (formdata1.current)
        let URI="http://34.225.239.102/api/autobus/register"
        console.log(formData.get('tipo'));
        let options={
            method:'POST',
            headers:{ "Content-Type":'application/json'},
            body:JSON.stringify({
                    clave:formData.get('clave'),
                    placa:formData.get('placa') ,
                    numasientos: formData.get('numasientos'),
                    fecha: formData.get('fecha'),
                    tipo: formData.get('tipo'),
                    nombre: formData.get('nombre'),
                    licencia:formData.get('licencia')
        })
    }
    fetch(URI,options)
        .then(response=> response.json())
        .then(data=>{alert(JSON.stringify(data))})
}

    
return(
    <form ref={formdata1}>
    <div id='Form1'>

        <div>
         <h1>Gatobuses</h1>
        <img class src={Imagen1} alt="Login" className='loginf' />
        </div>
        <div class="contenedor-flexbox">
            <div id='Caja2'>
            <label htmlFor="Clave autobus">Clave autobus
            <input id='Clave autobus' type="text" placeholder='' name="clave"/>
            </label>
            <br /><br />
            <label htmlFor="Placaautobus">
                Placa Autobus
                <input id='Placaautobus' type="text" name="placa"/>
            </label>
            <br /><br />
            </div>
            <div id='Caja2'>
                <label htmlFor="numeroasiento">
                    Numero de Asiento
                    <input id='numeroasiento' type="number"  name="numasientos"/>
                </label>
             <br /><br />
             <label htmlFor="fechaalta">
                Fecha de alta
                <input id='fechaalta' type="date"  name="fecha"/>
             </label>
            <br /><br />
            </div>
        </div>
        <div>
        <label htmlFor="Tipo">Tipo</label>
        <select name="tipo" >
            <option value="Turismo">Turismo</option>
            <option value="Lujo">Lujo</option>
        </select>
            <br /><br />
            <label htmlFor="Nombre del Chofer">
                 Nombre del Chofer
            <input id="NombreChofer" type="text" name="nombre" />
            </label>
            <br /><br />
            
            <br /><br />
            <label htmlFor="numlicencia">
                Numero de Licencia
                <input id='numlicencia' type="text"  name="licencia"/>
            </label>
            <button onClick={handlerClick}>Alta de autobus</button>
        </div>


    </div>
       
    </form>
);





}
export default FormRegisterAutobus;