import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = ({ searchQuery, addToCart }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
                setFilteredProducts(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        filterProducts(category, searchQuery);
    };

    const filterProducts = (category, query) => {
        let filtered = products;
        if (category !== 'all') {
            filtered = filtered.filter(product => product.category === category);
        }
        if (query) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        }
        setFilteredProducts(filtered);
    };

    useEffect(() => {
        filterProducts(selectedCategory, searchQuery);
    }, [searchQuery]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-[100px]">
            <div className="col-span-full mb-4">
                <label htmlFor="category">Filter by Category:</label>
                <select id="category" className="ml-2 p-1" value={selectedCategory}
                    onChange={e => handleCategoryChange(e.target.value)}>
                    <option value="all">All Products</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
            </div>
            {filteredProducts.length === 0 ? (
                <div className="col-span-full">
                    <p className="text-center">No products found!</p>
                </div>
            ) : (
                filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))
            )}
        </div>
    );
};

export default ProductList;

