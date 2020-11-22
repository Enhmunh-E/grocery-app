import React from 'react';
import searchIcon from './img/loupe.svg' 
const Search = () => {
    
    return (
        <div className='Search'>
            <img id='searchIcon'src={searchIcon}/>
            <input id='search' type='text' placeholder='Search Store'/>
        </div>
    );
}
export { Search }