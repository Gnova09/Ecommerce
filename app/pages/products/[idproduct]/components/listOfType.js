import React from 'react'
import TypeItems from './typeItems'

const ListOfType = ({ product: { id, type } }) => {
    return (
        <div className=' flex flex-col gap-5'>
            {
                type.map(item => {
                    return (
                        <>
                            <h1>{`${item.name}`.toLocaleUpperCase()}</h1>
                            <TypeItems items={item.items} id={id} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default ListOfType