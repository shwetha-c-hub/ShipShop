import "../styles/Products.css";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function Products() {
    return (
        <section className="products">

            <h2>Featured Products</h2>

            <div className="products-grid">

                {products.map((product) => (

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

                ))}

            </div>

        </section>
    );
}

export default Products;