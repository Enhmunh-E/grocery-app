import React from 'react';
import { TaskProvider, TasksContext, TasksProvider } from './provider/TaskProvider'
import { Search } from './components/Search';
import { Products } from './components/Products';
import { Cart } from './components/Cart'
import { Orders } from './components/Orders'
import gpsImg from './components/img/placeholder.svg';
import adImg from './components/img/groceryimg.jpg';
import './App.css';

function App() {
  return (
    <TasksProvider>
      <div className="App">
      <title>Grocery App</title>
      <div id='top'>
        <img id='gps' src={gpsImg} alt='gps'/>
        <h2>Nest Students Grocery App</h2>
      </div>
      <Search/>
      <div id='ad'>
        <img id='adImg' src={adImg} alt='adimg'/>
      </div>
      <h2>Exclusive Offer</h2>
      <Products/>
      <h2>Cart</h2>
      <Cart/>
      <Orders/>
    </div>
    </TasksProvider>
  );
}

export default App;
