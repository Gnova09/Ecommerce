import React from 'react'
import item1 from "../../assets/home/gorro.png"
import item2 from "../../assets/home/tshirt.png"
import Image from 'next/image'
import { ItemsMarque } from './itemsMarque'


export const ItemsMarquee = () => {
    return (

        <div className='w-full h-60 bg-slate-300'>
            <div className=" flex items-center  relative w-full h-full overflow-hidden">
                <div className="flex absolute left-0  animate-marquee-infinite">
                    <div className='flex flex-row '>
                         <ItemsMarque />
                         <ItemsMarque />
                         <ItemsMarque />
                         <ItemsMarque />
                         <ItemsMarque />
                         <ItemsMarque />
                         <ItemsMarque />
                         <ItemsMarque />
                         <ItemsMarque />
                         <ItemsMarque />
                        
                    </div>
                </div>
            </div>
        </div>

    )
}
