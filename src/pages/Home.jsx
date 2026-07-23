import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";

function Home({ search }) {
    return (
        <>
            <Hero />
            <Categories />
            <Products search={search} />
        </>
    );
}

export default Home;