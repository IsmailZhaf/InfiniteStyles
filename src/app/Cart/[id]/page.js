import React from 'react'
// import { CartContext } from '@/context/CartContext';
import { CartPage } from '@/components/Cart/CartPage'
import { Header } from '@/components/HomePage/Templates/Header';
import { Footer } from '@/components/HomePage/Templates/Footer';

export default async function Page({params}) {
    const {id} = params;
    const response = await fetch(`https://v1.appbackend.io/v1/rows/HPKXSTv3dGlW/${id}`);
    const productData  = await response.json();
    return (
        // <CartContext.Provider value={productData}>
            <div>
                <Header/>
                <CartPage productData={productData}/>
                <Footer/>
            </div>
        // </CartContext.Provider>
    )
}
