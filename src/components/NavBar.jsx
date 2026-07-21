import "../styles/Navbar.css";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";


function Navbar() {
    return (
        <nav>
            <h2 className="logo"><span>Ship</span>Shop</h2>

            <div className="search-bar">
                <IoSearch />
                <input type="text" placeholder="Search items..." />
            </div>

            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
            </ul>

            <div className="nav-icons">
                <button><FaHeart /></button>
                <button><FaShoppingCart /></button>
                <button><FaUser /> Login</button>
            </div>
        </nav>

    );
}

export default Navbar;