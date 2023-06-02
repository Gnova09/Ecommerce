import React, { useState } from 'react'
import Link from 'next/link'

function TypeItems({ items, id}) {
    const [isSelected, setSelected] = useState("");

    const handleItemClick = (item) => {
        setSelected(item);
      };

    return (
        <span className='flex flex-row gap-3'>
            {
                items.map(item => {
                    return (
                        <Link
                            key={item}
                            className={`flex h-12 min-w-[48px] items-center w-fit justify-center focus:outline-none rounded-full px-2 text-sm ring-1  transition duration-300 ease-in-out 
                            ${isSelected === item
                                    ? "bg-gray-100 ring-black hover:ring-black "
                                    : "hover:scale-110 hover:bg-gray-100 ring-gray-300  hover:ring-black dark:ring-gray-700 dark:hover:bg-transparent dark:hover:ring-white"
                                }`}
                            href={`/pages/products/[idproduct]?color=${item}`}
                            as={`/pages/products/${id}?color=${item}`}
                            onClick={() => handleItemClick(item)}
                        >
                            {item}
                        </Link>
                    )
                })
            }

        </span>
    )
}

export default TypeItems