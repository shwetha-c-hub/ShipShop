import "../styles/ProductCard.css";

function ProductCard(props) {
    return (
        <div className="product-card">

            <img src={props.image} alt={props.name} />

            <h3>{props.name}</h3>

            <p className="price">₹{props.price}</p>

            <button>Add to Cart</button>

        </div>
    );
}

export default ProductCard;