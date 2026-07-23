import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { useState } from "react";

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
      </Routes>
    </>
  );
}

export default App;