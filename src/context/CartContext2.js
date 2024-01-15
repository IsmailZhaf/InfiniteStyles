"use client"
// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Buat context baru
const CartContext = createContext();

// Fungsi reducer untuk mengelola state keranjang
const cartReducer = (state, action) => {
    switch (action.type) {
    case 'ADD_TO_CART':
      // Logika untuk menambahkan produk ke keranjang
    return [...state, action.payload];
    // Tambahkan case untuk aksi lainnya jika diperlukan

    default:
    return state;
    }
};

// Komponen Provider untuk CartContext
export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
    <CartContext.Provider value={{ cart, dispatch }}>
        {children}
    </CartContext.Provider>
    );
};

// Fungsi custom hook untuk menggunakan context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
