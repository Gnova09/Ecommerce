import React from 'react'
import Product from './product'


const ListOfProducts = () => {

    const products = [
        {
            img: require("../../../assets/home/tshirt.png"),
            productName: "TShirt",
            price: 25,
            ruta: "#"
        },
        {
            img: require("../../../assets/home/tshirt.png"),
            productName: "TShirt",
            price: 50,
            ruta: "#"
        },
        {
            img: require("../../../assets/home/tshirt.png"),
            productName: "TShirt",
            price: 30,
            ruta: "#"
        },
        {
            img: require("../../../assets/home/tshirt.png"),
            productName: "TShirt",
            price: 30,
            ruta: "#"
        },
        {
            img: require("../../../assets/home/tshirt.png"),
            productName: "TShirt",
            price: 30,
            ruta: "#"
        },
        {
            img: require("../../../assets/home/tshirt.png"),
            productName: "TShirt",
            price: 30,
            ruta: "#"
        },
        {
            img: require("../../../assets/home/tshirt.png"),
            productName: "TShirt",
            price: 30,
            ruta: "#"
        },
        {
            img: require("../../../assets/home/tshirt.png"),
            productName: "TShirt",
            price: 30,
            ruta: "#"
        },
        {
            img: require("../../../assets/home/tshirt.png"),
            productName: "TShirt",
            price: 30,
            ruta: "#"
        },
        {
            img: require("../../../assets/home/tshirt.png"),
            productName: "TShirt",
            price: 30,
            ruta: "#"
        },
    ]

    return (
        <>
            {
                products.map(({ img, productName, price }) => {
                    return (
                        <Product
                            img={img}
                            productName={productName}
                            price={price}
                        />
                    )
                })
            }
        </>
    )
}


export default ListOfProducts