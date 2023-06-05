"use client"
import React,{ useState, useContext} from 'react'
import useAppContext from '../context/context';


const Cart = async () => {
    
    const { variableState, setVariableState } = useAppContext();

    const [cartVisible, setCartVisible] = useState("hidden");

    const handleClickCart = ()=>{
        cartVisible === "hidden" ? setCartVisible("flex") : setCartVisible("hidden")
    }

    return (
        <>
            <button href='#' 
            class="text-black  font-medium text-sm  px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 "
            onClick={()=>handleClickCart()}
            >

                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-5 mr-2 -ml-1' viewBox="0 0 50 50" fill='currentColor'>
                    <path d="M 1 3 L 1 15 L 3 15 L 3 48 L 47 48 L 47 15 L 49 15 L 49 3 Z M 3 5 L 47 5 L 47 13 L 3 13 Z M 5 15 L 45 15 L 45 46 L 5 46 Z M 17.5 19 C 15.578125 19 14 20.578125 14 22.5 C 14 24.421875 15.578125 26 17.5 26 L 32.5 26 C 34.421875 26 36 24.421875 36 22.5 C 36 20.578125 34.421875 19 32.5 19 Z M 17.5 21 L 32.5 21 C 33.339844 21 34 21.660156 34 22.5 C 34 23.339844 33.339844 24 32.5 24 L 17.5 24 C 16.660156 24 16 23.339844 16 22.5 C 16 21.660156 16.660156 21 17.5 21 Z"></path>
                </svg>

            </button>

            <div className={`fixed inset-0 ${cartVisible} justify-end z-50`}>
                <div class="flex w-full flex-col translate-x-0 translate-z-0 bg-white p-8 text-black dark:bg-black dark:text-white md:w-3/5 lg:w-2/5" id="headlessui-dialog-panel-:r8:" data-headlessui-state="open" >
                    <div class="flex items-center justify-between">
                        <p class="text-lg font-bold">My Cart</p>
                        <button aria-label="Close cart" 
                        class="text-black transition-colors hover:text-gray-500 dark:text-gray-100" 
                        data-testid="close-cart"
                        onClick={()=>handleClickCart()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision" class="h-7">
                                <path d="M18 6L6 18"></path>
                                <path d="M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" shape-rendering="geometricPrecision" class="h-16">
                            <path d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z"></path>
                            <path d="M1 5H19"></path>
                            <path d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9"></path>
                        </svg>
                        <p class="mt-6 text-center text-2xl font-bold">{variableState}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart