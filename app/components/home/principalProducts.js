import Image from 'next/image'
import React from 'react'
import modelo from "../../assets/home/modelo.png"
import polo from "../../assets/home/tshirt.png"
import vestido from "../../assets/home/vestido.png"

export const PrincipalProducts = () => {
    return (
        <div className='w-full h-screen flex flex-row '>
            {/** 3 cuadros , uno grande 2 mediano */}
            <div className='bg-blue-600 h-full w-2/3 flex items-center justify-center'>
                <Image src={modelo} alt="modelo" />
            </div>
            <div className='flex flex-col h-full  w-1/3'>
                <div className='bg-red-600 h-1/2 w-full flex items-center justify-center '>
                    <Image src={polo} alt="modelo" className='w-fit h-3/4 ' />     
                </div>
                <div className='bg-yellow-600 h-1/2 w-full flex items-center justify-center '>
                    <Image src={vestido} alt="modelo"className='w-fit  h-3/4 ' />
                </div>
            </div>
        </div>
    )
}
