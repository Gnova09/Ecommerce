import React from 'react'

const ProductPrincipal = ({product}) => {
    return (
        <div className='bg-slate-600 h-[600px] w-2/3 flex '>
            <div className='absolute'>

                <h1 className='p-2 bg-white text-2xl font-bold' >{product.productName}</h1>

                <h3 className='p-2 bg-white text-2xl w-fit font-bold'>${product.price} USD</h3>
            </div>
            <div className='w-full h-full flex '>
                <div className='flex justify-center w-full bottom-0 h-full p-20 '>
                    <img src={product.img} alt="modelo" className='w-auto bottom-0 p-0 m-0 h-auto transition duration-300 ease-in-out hover:scale-105  ' />

                </div>
            </div>
        </div>
    )
}

export default ProductPrincipal