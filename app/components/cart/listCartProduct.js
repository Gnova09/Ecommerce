import React from 'react'
import useAppContext from '../../context/context';
import Product from './product';

const ListCartProduct = () => {

    const { cart } = useAppContext();
    const subtotal = cart.ListCart.reduce((acc,producto)=>acc + (producto.price*producto.cant),0)
    const impuesto = subtotal*0.1
    const total = subtotal + impuesto

    return (
        <div class="flex h-full flex-col justify-between overflow-hidden">
            <ul className='flex-grow overflow-auto p-6'>
                {
                    cart.ListCart.map(({ cant, id, price, img, productName }) => {
                        return (
                            <Product
                                productName={productName}
                                cant={cant}
                                price={price}
                                img={img}
                                id={id}
                            />
                        )
                    })
                }
            </ul>
            <div>
                <div class="mb-2 flex items-center justify-between border-t border-gray-200 pb-2">
                    <p>Subtotal</p>
                    <p class="text-right">${subtotal}  USD</p>
                </div>
                <div class="mb-2 flex items-center justify-between pb-2">
                    <p>Impuesto(10%)</p>
                    <p class="text-right">${impuesto} USD</p>
                </div>
                <div class="mb-2 flex items-center justify-between border-b border-gray-200 pb-2">
                    <p>Envio</p>
                    <p class="text-right">Calcular en la compra</p>
                </div>
                <div class="mb-2 flex items-center justify-between pb-2">
                    <p>Total</p>
                    <p class="text-right">${total} USD</p>
                </div>
            </div>

            <button className='w-full bg-black text-white p-2 font-semibold'>PROCEDER A COMPRAR</button>
        </div>
    )
}

export default ListCartProduct