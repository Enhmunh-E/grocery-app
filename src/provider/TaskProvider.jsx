import React, { createContext, useState } from 'react';
import bananaimg from '../components/img/banana.svg';
import appleimg from '../components/img/apple.svg';
import eggimg from '../components/img/egg.svg';
import paprikaimg from '../components/img/paprika.svg';
export const TasksContext = createContext({
    products: [],
    cart: [],
    orders: [],
    images: [bananaimg, appleimg, eggimg, paprikaimg],
    check: 0,
    AddCart: () => {},
    RemoveCart: () => {},
    ChangeQuantity: () => {},
    AddCheckout: () => {},
    orders: () => {},
});
export const TasksProvider = ({ children }) => {
    const [images] = useState([bananaimg, appleimg, eggimg, paprikaimg]);
    const [products] = useState([
        {
            'name': 'banana',
            'desc': '1kg, Price',
            'price': 4.99,
            'img': 0,
            'quantity': 1,
        },
        {
            'name' : 'apple',
            'desc' : '1kg, Price',
            'price' : 4.99,
            'img' : 1,
            'quantity': 1,
        },
        {
            'name' : 'paprika',
            'desc' : '1kg, Price',
            'price' : 4.99,
            'img' : 3,
            'quantity' : 1,
        }
    ]);
    const [cart, setCart] = useState([]);
    const [orders, setOrder] = useState([]);
    const [check, setCheck] = useState(0);
    const AddCart = (index) => {
        let isin = false;
        cart.forEach(element => {
            if (element['name'] === products[index]['name']) {
                isin = true;
            }
        })
        if (isin === false) {
            setCart(cart => [...cart, products[index]]);
            checkCheck();
        }
    }
    const RemoveCart = (index) => {
        let tmp = [...cart];
        tmp.splice(index, 1);
        setCart(tmp);
        checkCheck();
    }
    const ChangeQuantity = (index, what) => {
        if (what === '+') {
            setCart(cart => {
                let tmp = cart;
                tmp[index]['quantity'] = tmp[index]['quantity']+1;
                return tmp;
            })
            console.log('+');
            checkCheck();
        }else {
            setCart(cart => {
                let tmp = cart;
                if (tmp[index]['quantity'] > 1) {
                    tmp[index]['quantity'] = tmp[index]['quantity']-1;
                }
                return tmp;
            })
            console.log('-');
            checkCheck()
        }
    }
    const AddCheckout = () => {
        setOrder([...cart]);
        setCart([]);
        console.log('==========')
    }
    const checkCheck = () => {
        let cost = 0;
        cart.forEach(cartItem => {
            cost = cost + cartItem['price']*cartItem['quantity'];
        })
        setCheck(cost);
    }
    return (
        <TasksContext.Provider value={{ products, cart, orders, images, AddCart, RemoveCart, ChangeQuantity, AddCheckout, orders, check }}>
            { children }
        </TasksContext.Provider>
    );
}