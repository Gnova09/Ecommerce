import React from 'react'
import Image from 'next/image'

export const ItemsMarque = () => {
  return (
    <a href='#' className='relative h-[30vh] w-1/4 flex-none md:w-1/3'>
        <img src="/home/tshirt.png" alt="" className="w-auto h-full ml-10 " />
        <div className='absolute inset-y-0 flex items-center justify-center'>
            <h1 className='inline-flex bg-white p-4 text-xl font-semibold text-black dark:bg-black dark:text-white'>
                T-shirt
            </h1>
        </div>
    </a>
  )
}
