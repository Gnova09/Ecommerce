import Image from "next/image"
import React from "react"


const Product = ({ img, productName, price }) => {
    return (
        <a href="#">
            <div className=' h-full w-full  flex'>
                <div className='absolute'>
                    <h1 className='p-2 bg-white font-bold' >{productName}</h1>
                    <h3 className='p-2 bg-white w-fit font-bold'>${price} USD</h3>
                </div>
                <div className=' bg-gray-100 h-full w-full flex'>
                    <div className='flex items-center justify-center w-full h-full '>
                        <Image src={img} alt="modelo" className='w-[600] h-[600] transition duration-300 ease-in-out hover:scale-105' />
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Product