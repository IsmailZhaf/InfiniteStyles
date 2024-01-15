"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/context/CartContext2'
import atm from "../../../public/atm.jpeg"
import qris from "../../../public/qris.png"
import { useRouter } from 'next/navigation'

export const CartPage = ({productData}) => {
    const router = useRouter();
    const cart = useCart();
    console.log(cart);
    const {attachment, name, age, _id} = productData;
    const [quantity, setQuantity] = useState(1);
    const [dataToSend, setDataToSend] = useState(1);
    const increment = () => {
        setQuantity(quantity + 1);
    };
    
    const decrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };
    const handleCheckOUt = ()=>{
      setDataToSend(quantity);
      router.push(`/Payment/${_id}`)
    }
    return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-pink-500 text-[30px] font-bold'>Shopping Cart</h1>
        <div className='flex gap-5'>
          <div key="id" className='flex gap-3 items-end border-[3px] rounded-md p-3 w-[900px] h-[230px]'>
            <div className='flex gap-3'>
                <Image src={attachment} width={200} height={200} className='w-[150] h-[150]'/>
                <div className='flex flex-col justify-between '>
                  <h1 className='text-[50px]'>{name}</h1>
                  <h1 className='text-[60px] font-bold'>Rp{age}.000</h1>
                </div>
                </div>
              <div className='flex items-center justify-between gap-2 border border-solid border-[#53535344] p-[5px] w-20 h-10 rounded-lg'>
                      <button type="button" onClick={decrement} className='text-[18px]'>-</button>
                      <input type="text" id="quantity" name="quantity" value={quantity} className='w-5 pl-1.5 text-[18px]' readOnly />
                      <button type="button" onClick={increment} className='text-[18px]'>+</button>
                  </div>
            </div>
          <div className='bg-pink-300 flex flex-col mb-10 items-center justify-between rounded-lg w-[400px] h-[600px] p-3'>
            <div>
              <h1 className='text-[40px] font-bold'>Payment Info</h1>
              <h1 className='text-[30px] font-medium'>Payment Method :</h1>
              <div className='flex items-center justify-center gap-3'>
                <div className=''>
                  <Image src={atm} className='w-[200px] h-[100]'/>
                  <h1 className='text-[20px] text-center font-bold'>Transfer Bank</h1>
                </div>
                <div className=''>
                  <Image src={qris} className='w-[200px] h-[100px]'/>
                  <h1 className='text-[20px] text-center font-bold'>QRIS</h1>
                </div>
              </div>
            </div>
            <div className='bg-[#FB6B6B] w-[350px] p-3 rounded-xl text-center'>
              <button className='text-center text-[20px] font-bold text-white' onClick={handleCheckOUt}>Check Out</button>
            </div>
          </div>
        </div>
    </div>
  )
}
