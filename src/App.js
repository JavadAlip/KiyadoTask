import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        alert(`${product.title} has been added to the cart!`);
    };

    return (
        <Router>
            <div className="App">
                <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <main className="p-4">
                    <Routes>
                        <Route path="/" element={<ProductList searchQuery={searchQuery} addToCart={addToCart} />} />
                        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
