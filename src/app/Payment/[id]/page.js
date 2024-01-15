import React from 'react'
import { Payment } from '@/components/Payment/Payment'


export default async function Page({params}) {
    const { id } = params;
    const response = await fetch(`https://v1.appbackend.io/v1/rows/HPKXSTv3dGlW/${id}`);
    const productData = await response.json();
  return (
    <div><Payment productData={productData}/></div>
  )
}
