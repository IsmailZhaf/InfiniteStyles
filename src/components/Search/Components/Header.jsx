import React from 'react'

export const HeaderSearch = ({title, LinkTitle, LinkHref}) => {
  return (
    <div className='flex justify-between items-center p-4'>
        <h1 className='text-[30px]'>{title}</h1>
    </div>
  )
}
