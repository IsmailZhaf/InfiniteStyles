import React from 'react'
import Image from 'next/image';
import logo from '../../../../public/LOGO.png'
import star from '../../../../public/star_icon.png'
import star2 from '../../../../public/star_icon2.png'
import clock from '../../../../public/clock.png'
import user from '../../../../public/user.jpg'

export const OrderFormSection2 = ({productData}) => {
    const {attachment,name, age, deskripsi, kategori_0, stock } = productData;
    return (
        <div className='space-y-5 mb-4'>
            <div>
                <h1 className='text-[35px] font-bold'>Deskripsi Produk</h1>
                <h1 className='text-[25px] text-justify'>{deskripsi}</h1>
            </div>
            <div className='flex bg-[#E5DBD9] w-[450px] rounded-xl p-3'>
                <Image src={logo} className='w-[150px] h-[100px]'/>
                <div>
                    <h1>INFINITESTYLES</h1>
                    <h1>KOTA DEPOK</h1>
                    <div className='flex gap-1'>
                        <Image src={star2} className='w-[15px] h-[15px]'/>
                        <h1>4.8 Rata-rata ulasan</h1>
                    </div>
                    <div className='flex gap-1'>
                        <Image src={clock} className='w-[15px] h-[15px]'/>
                        <h1>1 jam Rata-rata proses pesanan</h1>
                    </div> 
                </div>
            </div>
            <div className='flex justify-between gap-4'>
                <div className='bg-[#99D9DB] rounded-xl w-[50%] p-3'>
                    <h1 className='font-bold'>Ulasan Pembeli</h1>
                    <div className='flex gap-1'>
                        <Image src={star} className=''/>
                        <h1>4,8</h1>
                        <h1>99++ rating -</h1>
                        <h1>99++ ulasan</h1>
                    </div>
                    <div className='flex relative items-center bg-[#81B6B8] h-[150px] rounded-xl p-1 space-x-1'>
                        <Image src={attachment} width={100} height={120} className='h-[120px] rounded-xl'/>
                        <Image src={attachment} width={100} height={120} className='h-[120px] rounded-xl'/>
                        <Image src={attachment} width={100} height={120} className='h-[120px] rounded-xl'/>
                        <Image src={attachment} width={100} height={120} className='h-[120px] rounded-xl'/>
                        <Image src={attachment} width={100} height={120} className='h-[120px] rounded-xl'/>
                        <Image src={attachment} width={100} height={120} className='h-[120px] rounded-xl'/>
                        <div className='absolute p-2 w-[100px] h-[130px] bg-[#81B6B8]/50 right-1'>99+ ulasan lainnya</div>
                    </div>
                </div>
                <div className='bg-[#81B6B8] rounded-xl w-[50%] p-3'>
                    <h1 className='font-bold'>DISKUSI</h1>
                    <div className='bg-[#99D9DB] p-1 rounded-xl'>
                    <div className='p-4'>
                    <div className='flex items-center gap-1'>
                        <Image src={user} className='rounded-full w-[40px] h-[40px]'/>
                        <h1>Ismail Zhanfeari</h1>
                        <h1 className='text-[#5e5e5e44]'>- Nov 2023</h1>
                    </div>
                    <h1>Kak cara perawatan/pencucian seperti apa kak?</h1>
                    <div className='shadow-md rounded-xl p-2'>
                        <div className='bg-[#81B6B8] w-fit text-[#99D9DB] text-[12px] rounded-md p-1'>Penjual</div>
                        <div>Bisa pakai mesin cuci biasa kak. Jangan di sikat, jangan pakai pemutih juga kak.</div>
                    </div>
                    </div>
                    <div></div>
                    <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
