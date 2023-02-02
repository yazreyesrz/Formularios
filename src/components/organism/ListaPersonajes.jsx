import {useState} from 'react'
import Personaje from '../molecules/Personaje'
import "../../assets/styles/Personaje.css"

function ListaPersonajes() {
    const [characters, setCharacters] = useState([])
    const handlerClick = (e) => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then (data => {
            console.log(data)
            setCharacters(data.results)
        })
    }

    return ( 
        <>
        <div>
            <h2>Lista de personajes</h2>
            <button onClick={handlerClick}>Mostrar personajes</button>
            <div className='ListaPersonajes'>
                {characters.map( character => 
                    <Personaje 
                        img={character.image} 
                        name={character.name}
                    />)
                }
            </div>
            </div>
        </>
     );
}

export default ListaPersonajes;