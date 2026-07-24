import "../styles/ProductCard.css";
import "../styles/WishList-btn.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function ProductCard({ id, name, price, image }) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">

            <img src={image} alt={name} />

            <h3>{name}</h3>

            <p className="price">₹{price}</p>

            <button
                className="add-cart-btn"
                onClick={(e) => {
                    e.preventDefault();
                    addToCart({ id, name, price, image });
                }}
            >
                Add to Cart
            </button>

        </div>
    );
}

export default ProductCard;