import React, { useContext } from 'react';
import { TasksContext } from '../provider/TaskProvider';

const OrderItem = ({ index }) => {
    const { orders } = useContext(TasksContext);
    return (
        <div className='OrderItem'>
            <p>{orders[index]['name']}</p>
            <p>{orders[index]['quantity']}</p>
        </div>
    );
}
export { OrderItem }