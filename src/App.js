import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './app/pages/Home';
import About from './app/pages/About';
import Contact from './app/pages/Contact';
import OurStore from './app/pages/OurStore';
import Blog from './app/pages/Blog';
import CompareProduct from './app/pages/CompareProduct';
import Wishlist from './app/pages/Wishlist';
import Login from './app/pages/Login';
import Forgotpassword from './app/pages/Forgotpassword';
import Signup from './app/pages/Signup';
import Resetpassword from './app/pages/Resetpassword';
import SingleBlog from './app/pages/SingleBlog';
import PrivacyPolicy from './app/pages/PrivacyPolicy';
import ShippingPolicy from './app/pages/ShippingPolicy';
import RefundPolicy from './app/pages/RefundPolicy';
import TermAndConditions from './app/pages/TermAndConditions';
import Cart from './app/pages/Cart';
import SingleProduct from './app/pages/SingleProduct';
import Checkout from './app/pages/Checkout';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>}/>
        <Route path="product" element={<OurStore/>}/>
        <Route path="product/:id" element={<SingleProduct/>}/>
        <Route path="blogs" element={<Blog/>}/>
        <Route path="blog/:id" element={<SingleBlog/>}/>
        <Route path="compare-product" element={<CompareProduct/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="forgot-password" element={<Forgotpassword/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="reset-password" element={<Resetpassword/>}/>
        <Route path="privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="shipping-policy" element={<ShippingPolicy/>}/>
        <Route path="refund-policy" element={<RefundPolicy/>}/>
        <Route path="term-and-conditions" element={<TermAndConditions/>}/>
       
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}
      

export default App;
