"use client"

import React from 'react'
import ListOfType from './components/listOfType'
import ProductPrincipal from './components/productPrincipal'
import ListOfProducts from '../components/listOfProducts'
import useAppContext from '@/app/context/context'

const products = [
    {
        id: 1,
        img: "/home/vestido.png",
        productName: "Vestido Amarillo",
        price: 25,
        ruta: "#",
        type: [
            {
                name: "COLOR",
                items: [
                    "Negro", "Blanco", "Azul"
                ]
            },
            {
                name: "SIZE",
                items: [
                    "XS", "S", "M", "L", "XL"
                ]
            },
        ]
    },
    {
        id: 2,
        img: "/home/tshirt.png",
        productName: "TShirt",
        price: 50,
        ruta: "#",
        type: [
            {
                name: "COLOR",
                items: [
                    "Negro", "Blanco", "Azul"
                ]
            },
            {
                name: "SIZE",
                items: [
                    "XS", "S", "M", "L", "XL"
                ]
            },
        ]
    },
    {
        id: 3,
        img: "/home/gorro.png",
        productName: "Gorro frio",
        price: 30,
        ruta: "#",
        type: [
            {
                name: "COLOR",
                items: [
                    "Negro", "Blanco", "Azul"
                ]
            },
            {
                name: "SIZE",
                items: [
                    "XS", "S", "M", "L", "XL"
                ]
            },
        ]
    },
    {
        id: 4,
        img: "/home/vestido.png",
        productName: "Vestodo Amarrillo",
        price: 50,
        ruta: "#",
        type: [
            {
                name: "COLOR",
                items: [
                    "Negro", "Blanco", "Azul"
                ]
            },
            {
                name: "SIZE",
                items: [
                    "XS", "S", "M", "L", "XL"
                ]
            },
        ]
    },
    {
        id: 5,
        img: "/home/tshirt.png",
        productName: "TShirt",
        price: 30,
        ruta: "#",
        type: [
            {
                name: "COLOR",
                items: [
                    "Negro", "Blanco", "Azul"
                ]
            },
            {
                name: "SIZE",
                items: [
                    "XS", "S", "M", "L", "XL"
                ]
            },
        ]
    },

]

const ProductDetail = ({ params }) => {

    const { idproduct } = params

    const { productos,cart, setCart, } = useAppContext();

    const producto = productos.find(produ => produ.id === Number(idproduct))
    const handleAddCart = () => {
        let ListCart = cart.ListCart
        ListCart.push({...producto, cant:1})
        setCart({...cart. ListCart})
    }

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row'>

                <ProductPrincipal product={...producto} />

                <div className='flex flex-col h-full w-1/3 p-3 gap-10' >

                    <ListOfType product={...producto} />

                    <p className='w-full'>
                        Descripicon del producto
                        Descripicon del producto
                        Descripicon del producto
                        Descripicon del producto
                        Descripicon del producto
                    </p>
                    <button onClick={()=>{handleAddCart()}} className='w-full bg-black text-white p-2 font-semibold'>ADD TO CART</button>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <h1 className='p-2 text-2xl font-bold'>Related Products</h1>
                <div className='grid grid-flow-row w-full  gap-4 p-2 grid-cols-2 lg:grid-cols-5 m-0'>
                    <ListOfProducts />
                </div>

            </div>

        </div>
    )
}

export default ProductDetail
