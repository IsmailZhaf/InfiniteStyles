import React from 'react'
import { Payment } from '@/components/Payment/Payment'
import { Header } from '@/components/HomePage/Templates/Header';
import { Footer } from '@/components/HomePage/Templates/Footer';


export default async function Page({params}) {
    const { id } = params;
    const response = await fetch(`https://v1.appbackend.io/v1/rows/HPKXSTv3dGlW/${id}`);
    const productData = await response.json();
  return (
    <div>
      <Header/>
      <Payment productData={productData}/>
      <Footer/>
      </div>
  )
}
