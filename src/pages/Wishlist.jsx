import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import "../styles/Wishlist.css";

function Wishlist() {
    const { wishlist } = useContext(WishlistContext);

    if (wishlist.length === 0) {
        return (
            <div className="empty-wishlist">
                <h1>Your wishlist is empty</h1>

                <p>
                    Save your favorite products here.
                </p>

                <Link to="/shop">
                    <button>Explore Products</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="wishlist-page">
            <h1>My Wishlist</h1>

            <div className="wishlist-grid">
                {wishlist.map((product) => (
                    <div key={product.id} className="wishlist-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>₹{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Wishlist;