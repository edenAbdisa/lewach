import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import TopHeader from "./components/topHeader";
import Footer from "./components/footer";

import About from "./pages/about";
import Cart from "./pages/cart";
import Dashboard from "./pages/dashboard";
import ProductDetail from "./pages/productDetail";
import Shop from "./pages/shop";

import Home from "./pages/about";
function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
