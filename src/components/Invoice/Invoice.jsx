"use client"
import React from 'react'
import CountdownTimer from './components/CountDown'
import DeadlineCounter from './components/Deadline'
import { useRouter } from 'next/navigation'

export const Invoice = ({biaya}) => {
    const router = useRouter();
    const totalBayar = biaya;

    const handleShop = () =>{
        router.push("/");
    }
    return (
        <div className='flex flex-col items-center '>
            <div className='flex flex-col items-center'>
                <h1 className='text-[35px] font-medium'>Selesaikan Pembayaran</h1>
                <CountdownTimer/>
                <DeadlineCounter/>
            </div>
            <div className='rounded-2xl border-2 shadow-2xl bg-[#98D4BB] border-[#98D4BB]'>
                <div className='text-[20px] w-[600px] bg-white m-1 p-1 rounded-t-lg'>ABC Virtual Account</div>
                <div className='flex flex-col gap-3 m-1 p-1 rounded-b-lg bg-white'>
                    <div>
                        <h1>Nomor Virtual Account</h1>
                        <h1>123456789101112</h1>
                    </div>
                    <div>
                        <h1>Total Pembayaran</h1>
                        <h1>Rp{totalBayar}.000</h1>
                    </div>
                </div>
            </div>
            <div className='bg-[#218B81] my-10 w-[200px] p-2 text-center rounded-xl'>
                <button className='text-[20px] text-white' onClick={handleShop}>Belanja Lagi</button>
            </div>
        </div>
    )
}
