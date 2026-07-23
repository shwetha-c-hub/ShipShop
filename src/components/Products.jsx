import "../styles/Products.css";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function Products({ search }) {
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes((search || "").toLowerCase())
    );
    return (
        <section className="products">

            <h2>Featured Products</h2>

            <div className="products-grid">

                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <ProductCard
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        </Link>
                    ))
                ) : (
                    <h2>No products found.</h2>
                )}

            </div>

        </section>
    );
}

export default Products;