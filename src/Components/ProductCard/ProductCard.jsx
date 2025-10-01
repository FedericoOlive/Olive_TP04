// Imports
import './ProductCard.css'

// Exports
export default ProductCard


function ProductCard(props)
{
    return (
        <div className = "ProductCard">
            <h1>{props.title}</h1>
            <h2>{props.title}</h2>
            <h3>{props.title}</h3>
            <h4>{props.title}</h4>
            <h5>{props.title}</h5>
            <p>{props.content}</p>
            <span>{props.price}</span>
            <button className = "ConfirmButton">Buy</button>
            <hr/>
        </div>
    )
}