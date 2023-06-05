import React from 'react'
import Link from 'next/link'
import { SearchBar } from './searchBar'
import Cart from './cart'


export const Navbar = () => {

    const links = [
        {
            label: "All",
            route: "/pages/products"
        },
        {
            label: "Womans",
            route: "/pages/products"
        },
        {
            label: "Mans",
            route: "/pages/products"
        },
        
    ]

    return (
        <nav class="bg-primary  text-letters  bg-white w-full z-20 top-0 left-0 border-gray-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <div class="hidden flex-row w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
                        <li>
                            <Link href="/" class="flex items-center">
                                <img src='../favicon.ico' class="h-8 mr-3" alt="Flowbite Logo" />
                            </Link>
                        </li>
                        {
                            links.map(({ label, route }) => {
                                return (
                                    <li className='self-center'>
                                        <Link href={route} class="block py-2 pl-3 pr-4 text-letters rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                            {label}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <SearchBar />
                <Cart />
            </div>
        </nav>
    )
}
