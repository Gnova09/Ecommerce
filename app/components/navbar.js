import React from 'react'
import Link from 'next/link'
import { SearchBar } from './searchBar'


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
                <Link href='#' class="text-black  font-medium text-sm  px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 ">

                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-5 mr-2 -ml-1' viewBox="0 0 50 50" fill='currentColor'>
                        <path d="M 1 3 L 1 15 L 3 15 L 3 48 L 47 48 L 47 15 L 49 15 L 49 3 Z M 3 5 L 47 5 L 47 13 L 3 13 Z M 5 15 L 45 15 L 45 46 L 5 46 Z M 17.5 19 C 15.578125 19 14 20.578125 14 22.5 C 14 24.421875 15.578125 26 17.5 26 L 32.5 26 C 34.421875 26 36 24.421875 36 22.5 C 36 20.578125 34.421875 19 32.5 19 Z M 17.5 21 L 32.5 21 C 33.339844 21 34 21.660156 34 22.5 C 34 23.339844 33.339844 24 32.5 24 L 17.5 24 C 16.660156 24 16 23.339844 16 22.5 C 16 21.660156 16.660156 21 17.5 21 Z"></path>
                    </svg>

                </Link>
            </div>
        </nav>
    )
}
