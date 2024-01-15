"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext2'
import star from "../../../../public/star_icon.png"

export const OrderFormSection1 = ({productData}) => {
    const router = useRouter();
    const {_id,attachment,name, age, deskripsi, kategori_0, stock } = productData;
    const { dispatch } = useCart();

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: productData });
    };      

    const handleAddToCart=(e)=>{
        e.preventDefault();
        router.push(`/Cart/${_id}`);
    }

    return (
    <div className='flex gap-4'>
        <div className='w-[25%]'>
            <Image src={attachment} width={380} height={100} className='rounded-xl h-[325px]'/>
        </div>
        <div className='space-y-2 w-[45%]'>
            <div className='bg-[#98D4BB] rounded-lg p-3'>
                <div>
                    <h1 className='text-[30px] font-bold'>{name}</h1>
                    <div className='flex gap-3 place-items-center text-[20px]'>
                        <h1>Terjual 999++</h1>
                        <div className='flex gap-3 border border-solid border-black rounded-lg p-1'>
                            <Image src={star} width={35}/>
                            <h1>4,9</h1>
                        </div>
                    </div>
                    <h1 className='text-[40px] font-bold'>Rp{age}.000</h1>
                </div>
            </div>
            <div className='bg-[#99D9DB] rounded-lg p-3 '>
                <h1 className='text-[30px] font-bold'>Detail</h1>
                <div className='flex gap-5 text-[25px]'>
                    <h1>Kondisi : Baru</h1>
                    <h1>Min Pemesanan : <b>1 Buah</b></h1>
                </div>
                <h1 className='text-[25px]'>Etalase : {kategori_0}</h1>
            </div>
        </div>
        <div className='border-4 w-[30%]  border-solid border-[#99D9DB] rounded-lg p-1'>
            <form className='flex flex-col  items-center space-y-2'>
            <label htmlFor="quantity" className='font-bold text-[20px]'>Atur Jumlah Pesanan</label>
            <div className='flex items-start gap-2'>
                <Image src={attachment} width={150} height={200} className='rounded-lg w-[150px] h-[160px]'/>
                <div>
                <div className='flex flex-col gap-14 w-[100px]'>
                    <h1>Stok sisa : </h1>
                    <div>
                        <h1>Subtotal : </h1>
                        <h1><b>Rp{age}.000</b></h1>
                    </div>
                </div>
                </div>
            </div>
            <button className='border-2 border-solid border-[#218B81] text-[#218B81] text-[25px] w-[250px] rounded-lg' onClick={addToCart}>+ Keranjang</button>
            <button className='border-2 border-solid bg-[#218B81] text-white text-[25px] w-[250px] rounded-lg' onClick={handleAddToCart}>Langsung Beli</button>
            </form>
        </div>
    </div>
    )
}
