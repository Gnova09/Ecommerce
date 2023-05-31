import React from 'react'

const ColeccionItems = ({ props }) => {
    
    return (
        <div className='flex flex-col'>
            <h1 className=' font-bold'>
                {props?.titulo}
            </h1>
            <ul className=' text-slate-500'>
                {
                    props?.items.map((item) => {
                        return (
                            <li className='hover:text-black hover:cursor-pointer w-fit'>
                                {
                                    item
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ColeccionItems