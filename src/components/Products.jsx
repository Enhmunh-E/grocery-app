import React, { useContext } from 'react';
import { ProductDetail } from './ProductDetail';
import { TasksContext } from '../provider/TaskProvider';
const Products = () => {
    const { products } = useContext(TasksContext);
    // console.log(products+'=======================')
    return (
        <div id='products'>
            {
                products.map((product, index) => {
                    return <ProductDetail index={index}/>
                })
            }
        </div>
    );
}
export { Products };