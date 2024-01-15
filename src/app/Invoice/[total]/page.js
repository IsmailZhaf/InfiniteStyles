import { Footer } from '@/components/HomePage/Templates/Footer';
import { Header } from '@/components/HomePage/Templates/Header';
import { Invoice } from '@/components/Invoice/Invoice'
import React from 'react'

export default function Page({params}) {
    const {total} = params;
    return (
        <div>
            <Header/>
            <Invoice biaya={total}/>
            <Footer/>
        </div>
    )
}
