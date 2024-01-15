import React from 'react'
import { OrderFormSection1 } from '@/components/Order-form/components/OrderForm.Section1';
import { OrderFormSection2 } from '@/components/Order-form/components/OrderForm.Section2';
import { Header } from '@/components/HomePage/Templates/Header';
import { Footer } from '@/components/HomePage/Templates/Footer';

export default async function Page({params}) {
  const { id } = params;
  const response = await fetch(`https://v1.appbackend.io/v1/rows/HPKXSTv3dGlW/${id}`);
  const productData = await response.json();
  return (
    <div>
      <Header/>
    <div className='m-auto w-[1400px]'>
      <OrderFormSection1 productData={productData}/>
      <OrderFormSection2 productData={productData}/>
    </div>
    <Footer/>
    </div>
  )
}
