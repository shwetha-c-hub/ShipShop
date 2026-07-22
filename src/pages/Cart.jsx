import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useContext(CartContext);

    if (cart.length === 0) {
        return <h2>Your cart is empty 🛒</h2>;
    }
    const total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);
    return (
        <div className="cart-page">
            <h1>Your Cart</h1>

            {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} width="100" />

                    <h3>{item.name}</h3>

                    <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                    <div className="quantity-controls">
                        <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>
                            -
                        </button>
                        <span>{item.quantity}</span>
                        <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>
                            +
                        </button>
                    </div>
                    <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <h2 className="cart-total">
                Total: ₹{total}
            </h2>
        </div>
    );
}

export default Cart;