import "../styles/Products.css";
import products from "../data/products";
import ProductCard from "./ProductCard";

function Products() {
    return (
        <section className="products">

            <h2>Featured Products</h2>

            <div className="products-grid">

                {products.map((product) => (

                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />

                ))}

            </div>

        </section>
    );
}

export default Products;