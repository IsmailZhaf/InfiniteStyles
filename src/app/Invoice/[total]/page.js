import { Invoice } from '@/components/Invoice/Invoice'
import React from 'react'

export default function Page({params}) {
    const {total} = params;
    return (
        <div>
            <Invoice biaya={total}/>
        </div>
    )
}
