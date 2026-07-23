import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-logo">
                    <h2>ShipShop</h2>
                    <p>
                        Discover trendy fashion at affordable prices.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/wishlist">Wishlist</Link>
                </div>

                <div className="footer-contact">
                    <h3>Contact</h3>

                    <p>support@shipshop.com</p>

                    <div className="footer-icons">

                        <a
                            href="https://github.com/shwetha-c-hub"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://github.com/shwetha-c-hub"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>

                    </div>
                </div>

            </div>

            <hr />

            <p className="copyright">
                © 2026 ShipShop. All Rights Reserved.
            </p>

        </footer>
    );
}

export default Footer;