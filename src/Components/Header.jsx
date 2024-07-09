import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../Assets/logo.png';

const Header = ({ searchQuery, setSearchQuery }) => {
    return (
        <header className='bg-slate-300 p-4 h-[80px] flex justify-between items-center fixed top-0 left-0 w-full z-10'>
            <Link to="/">
                <img src={logo} alt="Logo" className="w-[80px] h-[80px] mr-auto" />
            </Link>
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border rounded px-2 py-1 mx-2"
                />
                <nav>
                    <Link to="/" className="text-lg mx-2">Home</Link>
                    <Link to="/cart" className="text-lg mx-2">Cart</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
