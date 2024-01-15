"use client"
import { useState } from 'react';

export const useQuantity = () => {
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        setQuantity(quantity + 1);
    };
    
    const decrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };

    return {quantity, increment, decrement}
}