import "../styles/Categories.css";
const categories = [
    "Tops and Tees",
    "Bottoms",
    "Jackets",
    "Dresses",
    "Accessories",
    "Footware"
];


function Categories() {
    return (
        <section className="categories">

            <h2 className="h2">Shop by Category</h2>

            <div className="category-grid">

                {categories.map((category) => (
                    <div className="category-card" key={category}>
                        <h3>{category}</h3>
                    </div>
                ))}

            </div>

        </section>
    )
}
export default Categories;