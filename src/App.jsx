import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/page/Home";
import ProductList from "./components/page/ProductList";
import Cart from "./components/page/Cart";
import Product from "./components/page/ProductMain";
import Login from "./components/page/Login";
import Register from "./components/page/Register";

const App = () => {
  const user = true;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route 
            path="/login" 
            element={user ? <Navigate to="/" /> : <Login />} 
          />
          <Route 
            path="/register" 
            element={user ? <Navigate to="/" /> : <Register />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
