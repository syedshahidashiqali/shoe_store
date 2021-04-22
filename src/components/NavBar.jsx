import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {

    const [ isActive, setActive ] = useState('home');
    return(
        <div>
            <nav style={{
                backgroundColor:'#d4d0d8',
                height:'50px',
                display:'flex',
                justifyContent: 'space-evenly',
                marginBottom: '30px'
            }}>
                <Link style={{
                display:'block',
                textDecoration:'none',
                color:'darkblue',
                fontSize:'20px',
                fontWeight:'bold',
                padding: '10px',
                textTransform:'uppercase'
            }}
                to="/"
                className={isActive === 'home'? 'border':'no'} 
                onClick={() => setActive('home')}>Home</Link>

                <Link style={{
                display:'block',
                textDecoration:'none',
                color:'darkblue',
                fontSize:'20px',
                fontWeight:'bold',
                padding: '10px',
                textTransform:'uppercase'
            }} 
                to="/product"
                className={isActive === 'product'? 'border':'no'} 
                onClick={() => setActive('product')}>Product</Link>
                
                <Link style={{
                display:'block',
                textDecoration:'none',
                color:'darkblue',
                fontSize:'20px',
                fontWeight:'bold',
                padding: '10px',
                textTransform:'uppercase'
            }} 
                to="/about"
                className={isActive === 'about'? 'border':'no'} 
                onClick={() => setActive('about')}>About</Link>
            </nav>
        </div>
    )
}

export default NavBar;