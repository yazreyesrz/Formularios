import "../../assets/styles/CharacterContainer.css"
function Personaje({img, name}) {
    return (
        <div className="character">
            <img src={img} alt={name} />
            <div>
                <span>{name}</span>
            </div>
        </div>
      );
}

export default Personaje;