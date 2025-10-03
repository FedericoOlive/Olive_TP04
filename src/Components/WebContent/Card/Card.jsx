// Imports
import './Card.css'

// Exports
export default Card

/* Note: Estructura de Card:
 name: "Andrés Morales",
 profession: "Consultor de Marketing",
 imgUrl: "https://randomuser.me/api/portraits/men/10.jpg",
 description: "Ayudo a marcas a crecer y conectar con su audiencia."
 */

function Card(props)
{
    return (
        <div className = "Card">
            <div className = "HorizontalLayout">
                <img className = "CardImage" src = {props.imgUrl} alt = "Foto de usuario"/>
                <div className = "VerticalLayout">
                    <h1>{props.name}</h1>
                    <h3>{props.profession}</h3>
                </div>
            </div>

            <div className = "Description">
                <span>{props.description}</span>
            </div>

            <hr/>
        </div>
    )
}