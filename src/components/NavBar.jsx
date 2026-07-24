import "../styles/Navbar.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";



function Navbar({ search, setSearch }) {
    const { cart } = useContext(CartContext);

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
                <Link to="/wishlist" className="wishlist-link">
                    <FaHeart />

                </Link>
                <Link to="/cart" className="cart-btn">
                    <FaShoppingCart />
                    <span>{totalItems}</span>
                </Link>

                <Link to="/login" className="login-btn">
                    Login
                </Link>
            </div>
        </nav>

    );
}

export default Navbar;