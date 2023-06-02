import React from 'react'
import Product from './product'


const ListOfProducts = () => {

    const products = [
        {
            id:1,
            img: "/home/vestido.png",
            productName: "Vestido Amarillo",
            price: 25,
            ruta: "#",
            type:[
                {
                    name:"COLOR",
                    items:[
                        "Negro","Blanco", "Azul"
                    ]
                },
                {
                    name:"SIZE",
                    items:[
                        "XS","S", "M","L","XL"
                    ]
                },
            ]
        },
        {
            id:2,
            img: "/home/tshirt.png",
            productName: "TShirt",
            price: 50,
            ruta: "#",
            type:[
                {
                    name:"COLOR",
                    items:[
                        "Negro","Blanco", "Azul"
                    ]
                },
                {
                    name:"SIZE",
                    items:[
                        "XS","S", "M","L","XL"
                    ]
                },
            ]
        },
        {
            id:3,
            img: "/home/gorro.png",
            productName: "Gorro frio",
            price: 30,
            ruta: "#",
            type:[
                {
                    name:"COLOR",
                    items:[
                        "Negro","Blanco", "Azul"
                    ]
                },
                {
                    name:"SIZE",
                    items:[
                        "XS","S", "M","L","XL"
                    ]
                },
            ]
        },
        {
            id:4,
            img: "/home/vestido.png",
            productName: "Vestodo Amarrillo",
            price: 50,
            ruta: "#",
            type:[
                {
                    name:"COLOR",
                    items:[
                        "Negro","Blanco", "Azul"
                    ]
                },
                {
                    name:"SIZE",
                    items:[
                        "XS","S", "M","L","XL"
                    ]
                },
            ]
        },
        {
            id:5,
            img: "/home/tshirt.png",
            productName: "TShirt",
            price: 30,
            ruta: "#",
            type:[
                {
                    name:"COLOR",
                    items:[
                        "Negro","Blanco", "Azul"
                    ]
                },
                {
                    name:"SIZE",
                    items:[
                        "XS","S", "M","L","XL"
                    ]
                },
            ]
        },
       
    ]

    return (
        <>
            {
                products.map(({ img, productName, price, id }) => {
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