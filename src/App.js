import Navbar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { useState } from "react";
import Wishlist from "./pages/Wishlist";
import Footer from "./components/Footer";
function App() {
  const [search, setSearch] = useState("");
  <Route
    path="/product/:id"
    element={<ProductDetails />}
  />
  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <Routes>

        <Route
          path="/"
          element={<Home search={search} />}
        />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
          path="/shop"
          element={<Shop search={search} />}
        />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <>


        <Routes>
          {/* all your routes */}
        </Routes>

        <Footer />
      </>
    </>
  );
}

export default App;