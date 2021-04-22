import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
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
                padding: '10px'
            }}
                to="/">Home</Link>
                <Link style={{
                display:'block',
                textDecoration:'none',
                color:'darkblue',
                fontSize:'20px',
                fontWeight:'bold',
                padding: '10px'
            }} 
                to="/product">Product</Link>
                <Link style={{
                display:'block',
                textDecoration:'none',
                color:'darkblue',
                fontSize:'20px',
                fontWeight:'bold',
                padding: '10px'
            }} 
                to="/about">About</Link>
            </nav>
        </div>
    )
}

export default NavBar;