"use client"
import React from 'react'
import Product from './product'
import useAppContext from '@/app/context/context'


const ListOfProducts = () => {

    const { productos } = useAppContext();

    return (
        <>
            {
                productos.map(({ img, productName, price, id }) => {
                    return (
                        <Product
                            img={img}
                            productName={productName}
                            price={price}
                            id={id}
                        />
                    )
                })
            }
        </>
    )
}


export default ListOfProducts