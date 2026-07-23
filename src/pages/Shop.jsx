import Products from "../components/Products";

function Shop({ search }) {
    return (
        <div>
            <h1>Shop</h1>
            <Products search={search} />
        </div>
    );
}

export default Shop;