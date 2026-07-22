import "../styles/ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard(props) {
    const { addToCart } = useContext(CartContext);
    return (
        <div className="product-card">

            <img src={props.image} alt={props.name} />

            <h3>{props.name}</h3>

            <p className="price">₹{props.price}</p>

            <button
                onClick={() => addToCart(props)}
            >
                Add to Cart
            </button>

        </div>
    );
}

export default ProductCard;