import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    if (!product) return null;
    return (
        <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white w-full h-full">
            <img className="w-full h-48 object-cover mb-4" src={product.image} alt={product.title} />
            <h2 className="text-xl font-bold mb-2 text-left">{product.title}</h2>
            <p className="text-gray-700 mb-4 text-left">{product.description}</p>
            <div className="flex items-center justify-between w-full">
                <p className="text-lg font-semibold">${product.price}</p>
                <button
                    className="bg-black text-white py-2 px-4 rounded hover:bg-slate-500"
                    onClick={() => addToCart(product)}> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
