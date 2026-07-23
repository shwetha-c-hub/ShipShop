import "../styles/Navbar.css";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";


function Navbar({ search, setSearch }) {
    const { cart } = useContext(CartContext);
    const { wishlist } = useContext(WishlistContext);
    const totalItems = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);
    return (
        <nav>
            <h2 className="logo"><span>Ship</span>Shop</h2>

            <div className="search-bar">
                <IoSearch />
                <input
                    type="text"
                    placeholder="Search items..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>

            <div className="nav-icons">
                <button><FaHeart /> {wishlist.length}</button>
                <button><Link to="/cart" className="cart-btn">
                    <FaShoppingCart />
                    <span>{totalItems}</span>
                </Link></button>
                <button><Link to="/login">Login</Link></button>
            </div>
        </nav>

    );
}

export default Navbar;