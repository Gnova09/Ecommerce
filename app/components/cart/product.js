import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Product = ({ cant, price, img, id, productName }) => {
    return (
        <li>
            <Link href="/pages/products/[idproduct]" as={`/pages/products/${id}`} className='flex flex-row justify-between space-x-4 py-4 '>
                <div>
                    <Image src={img} width="64" height="64" alt="modelo" className=' transition duration-300 ease-in-out' />
                </div>
                <div>
                    <h1 className='font-bold'>{productName}</h1>
                    <p>color</p>
                </div>
                <p>${price} USD</p>
            </Link>

            <div class="flex h-9 flex-row">
                <button class="ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision" class="hover:text-accent-3 mx-[1px] h-4 w-4">
                        <path d="M18 6L6 18"></path><path d="M6 6l12 12"></path>
                    </svg>
                </button>
                <p class="ml-2 flex w-full items-center justify-center border dark:border-gray-700">
                    <span class="w-full px-2">{cant}</span>
                </p>
                <button aria-label="Reduce item quantity" class="ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900 ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision" class="h-4 w-4">
                        <path d="M5 12H19"></path>
                    </svg>
                </button>
                <button aria-label="Increase item quantity" class="ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision" class="h-4 w-4">
                        <path d="M12 5V19"></path>
                        <path d="M5 12H19"></path>
                    </svg>
                </button>
            </div>
        </li>
    )
}

export default Product