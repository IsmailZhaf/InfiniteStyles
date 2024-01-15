import { HeaderSearch } from '@/components/Search/Components/Header';
import { WomenCard } from '@/components/Women/components/WomenCard';
import React from 'react'
import Link from 'next/link';


export default async function Page({params}) {
    const {keyword} = params;
    const response = await fetch(`https://v1.appbackend.io/v1/rows/HPKXSTv3dGlW?filterKey=kategori_0&filterValue=${keyword}`)
    const {data} = await response.json(); 
    return (
    <div>
        <HeaderSearch title={`Pencarian Untuk ${keyword}...`}/>
        <div className='grid grid-cols-4 gap-y-[50px] justify-items-center mb-[100px]'>
        {Array.isArray(data) && data.length > 0 ? (
            data.map(({ id, _id, attachment, name, age }) => (
                <Link key={id} href={`/Order-form/${_id}`}>
                    <WomenCard key={id} link={attachment} name={name} price={age}/>
                </Link>
            ))
            ) : (
                <p>Tidak ada hasil pencarian.</p>
            )}
        </div>
    </div>

    )
}
