"use client"
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const Payment = ({productData}) => {
    const router = useRouter();
    const {attachment, name, age} = productData;
    const [selectedOption, setSelectedOption] = useState(11); // Nilai default bisa disesuaikan
    const ongkir = parseInt(selectedOption,10);
    const asuransi = 10;
    const totalBelanja = asuransi + ongkir + age;
    const [dataToSend, setDataToSend] = useState(totalBelanja);
    const options = [
        { label: 'SiCepat (Rp11.000)', price: 11.000 },
        { label: 'JNE (Rp10.000)', price: 10.000 },
        { label: 'J&T (Rp8.000)', price: 8.000 },
        { label: 'Ninja Xpress (Rp6.000)', price: 6.000 },
        { label: 'Lion Parcel (Rp8.000)', price: 8.000 },
        { label: 'Wahana (Rp12.000)', price: 12.000 },
    ];
    useEffect(() => {
        setDataToSend(totalBelanja);
    }, [totalBelanja]);
    
    const handlePayment=()=>{
        router.push(`/Invoice/${dataToSend}`);
    };

    return (
    <div className='flex flex-col gap-7 items-center'>
        <div className='bg-[#C5E2E4] text-center relative w-[700px] rounded-2xl p-7'>
            <h1 className='bg-[#218B82] text-[#C5E2E4] text-[20px] w-[200px] rounded-t-3xl rounded-br-3xl p-2 -top-5 left-0 absolute'>Alamat Pengiriman</h1>
            <div className='flex gap-3'>
                <div className='mt-4'>
                    <svg width="50" height="60" viewBox="0 0 66 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.9997 40.875C29.9055 40.875 26.938 39.7556 24.7501 37.763C22.5622 35.7704 21.333 33.0679 21.333 30.25C21.333 27.4321 22.5622 24.7296 24.7501 22.737C26.938 20.7444 29.9055 19.625 32.9997 19.625C36.0939 19.625 39.0613 20.7444 41.2493 22.737C43.4372 24.7296 44.6663 27.4321 44.6663 30.25C44.6663 31.6453 44.3646 33.0269 43.7783 34.316C43.192 35.6051 42.3326 36.7764 41.2493 37.763C40.1659 38.7496 38.8798 39.5323 37.4643 40.0662C36.0489 40.6002 34.5318 40.875 32.9997 40.875ZM32.9997 0.5C24.3359 0.5 16.027 3.63437 9.90085 9.21357C3.77466 14.7928 0.333008 22.3598 0.333008 30.25C0.333008 52.5625 32.9997 85.5 32.9997 85.5C32.9997 85.5 65.6663 52.5625 65.6663 30.25C65.6663 22.3598 62.2247 14.7928 56.0985 9.21357C49.9723 3.63437 41.6634 0.5 32.9997 0.5Z" fill="#218B82"/>
                    </svg>                                                  
                </div>
                <div className='space-y-5 mt-2'>
                    <h1 className='text-[20px]'>Rumah, Ismail Zhanfeari</h1>
                    <h1 className='text-[20px]'>JALAN PERMAI BLOK A NO.24 RT/RW 13/23, KOTA DEPOK</h1>
                </div>
            </div>
        </div>
        <div className='bg-[#C5E2E4] flex gap-3 relative w-[700px] rounded-2xl p-7'>
            <Image className='rounded-xl' src={attachment} width={200} height={200}/>
            <div className='flex flex-col gap-3 justify-center'>
                <h1 className='text-[30px]'>{name}</h1>
                <h className="text-[30px] font-bold">1 x Rp{age}.000</h>
            </div>
        </div>
        <div className='bg-[#C5E2E4] relative w-[700px] rounded-2xl p-7'>
            <h1 className='bg-[#218B82] text-[#C5E2E4] text-[20px] w-[100px]  text-center rounded-t-3xl rounded-br-3xl p-2 -top-5 left-0 absolute'>Kurir</h1>
            <select
                value={selectedOption}
                onChange={(e) => {
                    setSelectedOption(e.target.value);
                    // Tambahkan aksi atau logika langsung di sini
                    console.log("Nilai yang dipilih:", e.target.value);
                    // Misalnya, Anda dapat memanggil fungsi atau melakukan sesuatu yang Anda inginkan.
                }}
                className="p-2 bg-transparent focus:outline-none text-[30px] w-[650px]"
                >
                <option value="" disabled>Pilih opsi</option>
                {options.map((option) => (
                    <option key={option.price} value={option.price}>
                    {option.label}
                    </option>
                ))}
            </select>
        </div>
        <div className='bg-[#C5E2E4] text-center relative w-[700px] rounded-2xl p-7'>
        <h1 className='bg-[#218B82] text-[#C5E2E4] text-[20px] w-[200px] rounded-t-3xl rounded-br-3xl p-2 -top-5 left-0 absolute'>Ringkasan Belanja</h1>
        <div className='flex flex-col items-center gap-7 text-[20px] font-medium'>
            <div className='border-b-2 flex flex-col w-[500px] items-center border-black'>
                <div className='flex justify-between w-[470px]'>
                    <h1 className='text-left'>Total Harga (1 Barang)</h1>
                    <h1 className='font-bold text-[20px]'>Rp{age}.000</h1>
                </div>
                <div className='flex justify-between w-[470px]'>
                    <h1 className='text-left'>Total Ongokos Kirim</h1>
                    <h className='font-bold text-[20px]'>Rp{ongkir}.000</h>
                </div>
                <div className='flex justify-between w-[470px]'>
                    <h1 className='text-left'>Total Asuransi Pengiriman</h1>
                    <h1 className='font-bold text-[20px]'>Rp{asuransi}.000</h1>
                </div>
            </div>
            <div className='flex flex-col w-[500px] items-center'>
                <div className='flex gap-7'>
                    <h1 className='text-left w-[380px]'>Total Belanja</h1>
                    <h1 className='font-bold'>Rp{totalBelanja}.000</h1>
                </div>
            </div>
        </div>
        </div>
        <div className='w-[300px] mb-5 text-[20px] text-center bg-[#218B82] p-4 rounded-2xl text-[#D6EADF]'>
            <button onClick={handlePayment}>Pilih Pembayaran</button>
        </div>
    </div>
    )
}
