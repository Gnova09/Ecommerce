import React from 'react'

const ColeccionItems = ({ props }) => {
    
    return (
        <div className='flex flex-col w-fit'>
            <h1 className=' font-bold w-fit'>
                {props?.titulo}
            </h1>
            <ul className=' text-gray-400 text-sm'>
                {
                    props?.items.map((item) => {
                        return (
                            <li className='hover:text-gray-800 hover:cursor-pointer  '>
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