import React, { useContext } from 'react';
import { TasksContext } from '../provider/TaskProvider';

const ProductDetail = ({ index }) => {
    const { products, images, AddCart } = useContext(TasksContext);
    return (
        <div className='ProductItem'>
            <div className='itemimgcontainer'>
                <img className='itemimg' src={images[products[index]['img']]}/>
            </div>
            <div className='ItemBottom'>
                <p className='itemname'>{products[index]['name']}</p>
                <div className='itembottombottom'>
                    <p className='itemprice'>{products[index]['price']+'$'}</p>
                    <button className='productaddbutton' onClick={() => {AddCart(index)}}>+</button>
                </div>
            </div>
        </div>
    );
}
export { ProductDetail };