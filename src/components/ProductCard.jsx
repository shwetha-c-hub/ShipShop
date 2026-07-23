import "../styles/ProductCard.css";
import "../styles/WishList-btn.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ id, name, price, image }) {
    const { addToCart } = useContext(CartContext);
    const { wishlist, addToWishlist, removeFromWishlist } =
        useContext(WishlistContext);
    const isWishlisted = wishlist.some(item => item.id === id);
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