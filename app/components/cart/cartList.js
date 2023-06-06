import React from 'react'
import useAppContext from '../../context/context';
import EmptyCart from './emptyCArt';
import ListProduct from './listCartProduct';

const CartList = () => {

    const { cart } = useAppContext();

    return (

        cart.length === 0 ?
            (
                <EmptyCart />
            ) :
            (
                <ListProduct />
            )
    )
}

export default CartList