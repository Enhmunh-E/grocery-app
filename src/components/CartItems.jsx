import React, { useContext } from 'react';
import delimg from './img/del.svg'
import minus from './img/Vectorminus.svg'
import plus from './img/Vectorplus.svg'
import { TasksContext } from '../provider/TaskProvider';

const CartItems = ({ index }) => {
    const { cart, images, RemoveCart, ChangeQuantity } = useContext(TasksContext);
    // console.log(cart[index]);
    return (
        <div className='CartItem'>
            <img src={images[cart[index]['img']]} alt={`${cart[index]['name']}`}/>
            <p>{cart[index]['name']}</p>
            <div className='quantity'>
                <div className='quantitybutton' onClick={() => ChangeQuantity(index, '-')}><img src={minus}/></div>
                <p className='quantityp'>{cart[index]['quantity']}</p>
                <div className='quantitybutton' onClick={() => ChangeQuantity(index, '+')}><img src={plus}/></div>
            </div>
            <img className='delimg' src={delimg} onClick={() => RemoveCart(index)}/>
        </div>
    );
}

export { CartItems }