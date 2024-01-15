import React from 'react'
// import { CartContext } from '@/context/CartContext';
import { CartPage } from '@/components/Cart/CartPage'

export default async function Page({params}) {
    const {id} = params;
    const response = await fetch(`https://v1.appbackend.io/v1/rows/HPKXSTv3dGlW/${id}`);
    const productData  = await response.json();
    return (
        // <CartContext.Provider value={productData}>
            <div>
                <CartPage productData={productData}/>
            </div>
        // </CartContext.Provider>
    )
}
