import { createContext, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {

        const exists = wishlist.find(item => item.id === product.id);

        if (exists) return;

        setWishlist([...wishlist, product]);
    };

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id));
    };
    const toggleWishlist = (product) => {
        const exists = wishlist.some(item => item.id === product.id);

        if (exists) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };
    return (

        <WishlistContext.Provider
            value={{
                wishlist,
                toggleWishlist,
                addToWishlist,
                removeFromWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>

    );
}

export default WishlistProvider;