import React, { useContext } from 'react';
import { TasksContext } from '../provider/TaskProvider';
import { CartItems } from './CartItems';
const Cart = () => {
    const { cart, AddCheckout, check } = useContext(TasksContext);
    return (
        <div id='Cart'>
            {
                cart.map((cartitem, index) => {
                    return <CartItems index={index}/>
                })
            }
            <div className='checkoutbutton' onClick={() => AddCheckout}>
                <p>Go to Checkout</p>
                <p>{check}</p>
            </div>
        </div>
    );
}
export { Cart }