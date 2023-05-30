import Image from 'next/image'
import React from 'react'
import modelo from "../../assets/home/modelo.png"
import polo from "../../assets/home/tshirt.png"
import vestido from "../../assets/home/vestido.png"

export const PrincipalProducts = () => {
    return (
        <div className='w-full h-screen flex flex-row '>
            {/** 3 cuadros , uno grande 2 mediano */}
            <div className='bg-slate-600 h-full w-2/3 flex '>
                <div className='absolute'>

                    <h1 className='p-2 bg-white text-2xl font-bold' >Tiger T-Shirt</h1>

                    <h3 className='p-2 bg-white text-2xl w-fit font-bold'>$25.00</h3>
                </div>
                <div className='w-full h-full flex '>
                    <div className='flex justify-center w-full bottom-0 h-full  '>
                        <Image  src={modelo} alt="modelo" className='w-auto bottom-0 p-0 m-0 h-auto ' />

                    </div>
                </div>
            </div>
            <div className='flex flex-col h-full  w-1/3'>

                <div className='h-1/2 bg-red-600 w-full flex'>
                    <div className='absolute'>

                        <h1 className='p-2 bg-white font-bold' >Tiger T-Shirt</h1>

                        <h3 className='p-2 bg-white w-fit font-bold'>$20.00</h3>
                    </div>
                    <div className='bg-red-600    w-full flex '>

                        <div className='flex items-center justify-center w-full h-full '>

                            <Image src={polo} alt="modelo" className='w-fit h-3/4 ' />
                        </div>
                    </div>
                </div>

                <div className='h-1/2 bg-red-600 w-full flex'>
                    <div className='absolute'>

                        <h1 className='p-2 bg-white font-bold' >Tiger T-Shirt</h1>

                        <h3 className='p-2 bg-white w-fit font-bold'>$25.00</h3>
                    </div>
                    <div className='bg-yellow-600 w-full flex'>

                        <div className='flex items-center justify-center w-full h-full '>

                            <Image src={vestido} alt="modelo" className='w-fit h-3/4 ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
