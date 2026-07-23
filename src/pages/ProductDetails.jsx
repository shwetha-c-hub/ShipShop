import "../styles/ProductDetails.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WishlistContext } from "../context/WishlistContext";

function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    const product = products.find(
        (item) => item.id === Number(id)
    );
    const { wishlist, toggleWishlist } = useContext(WishlistContext);

    const isWishlisted = wishlist.some((item) => item.id === product.id);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="product-details">

            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">

                <h1>{product.name}</h1>

                <h2>₹{product.price}</h2>

                <p>
                    Premium quality clothing designed for comfort and
                    style. Perfect for everyday wear with a modern,
                    minimal look.
                </p>

                <div className="product-buttons">
                    <button onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>

                    <button
                        className="wishlist-btn"
                        onClick={() => toggleWishlist(product)}
                    >
                        {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                    </button>
                </div>

            </div>

        </div>
    );
}

export default ProductDetails; 