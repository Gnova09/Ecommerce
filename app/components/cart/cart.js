"use client"
import React,{ useState} from 'react'
import CartList from './cartList';


const Cart = () => {
    
    

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
                    <CartList />
                </div>
            </div>
        </>
    )
}

export default Cart