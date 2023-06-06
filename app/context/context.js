"use client"

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';


//Context
export const AppContext = createContext();

//Provider
export const AppContextProvider = ({ children }) => {
    //Estados de mi aplicacion
    const [user, setUser] = useState("userdata!");
    const [productos, setProductos] = useState([
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
    ]);
    const [cart, setCart] = useState(
        {
            impuesto: 0,
            subtotal: 0,
            total: 0,
            ListCart: [
                {
                    id: 1,
                    img: "/home/vestido.png",
                    productName: "Vestido Amarillo",
                    price: 25,
                    ruta: "#",
                    cant: 2,
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
                    id: 1,
                    img: "/home/vestido.png",
                    productName: "Vestido Amarillo",
                    price: 25,
                    ruta: "#",
                    cant: 1,
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
                    cant: 1,
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
                    cant: 1,
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
                }]
        });

    //ComponentDidMouunt
    useEffect(() => {

    }, []);

    //
    const values = useMemo(() => (
        {
            // Funciones que son exportadas para manejo externo.
            user, setUser,
            cart, setCart,
            productos, setProductos,
        }),
        []);   // States que serán visibles en el contexto.

    // Interface donde será expuesto como proveedor y envolverá la App.
    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

//
export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        console.error('Error deploying App Context!!!');
    }

    return (context);
}

export default useAppContext;



