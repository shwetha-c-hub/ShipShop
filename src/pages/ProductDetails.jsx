import "../styles/ProductDetails.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    const product = products.find(
        (item) => item.id === Number(id)
    );

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

                <button
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>

            </div>

        </div>
    );
}

export default ProductDetails; 