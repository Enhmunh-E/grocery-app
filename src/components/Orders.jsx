import React, { useContext } from 'react';
import { TasksContext } from '../provider/TaskProvider';
import { OrderItem } from './OrderItem';
const Orders = () => {
    const { orders } = useContext(TasksContext);
    return (
        <div id='Order'>
            {
                orders.map((orderitem, index) => {
                    return <OrderItem index={index}/>
                })
            } 
        </div>
    );
}
export { Orders }