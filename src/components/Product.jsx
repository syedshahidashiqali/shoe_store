import React from 'react';

import { Link } from 'react-router-dom';

// import shoes data from json file
import Shoes from '../data.json';

const Product = () => {
    // console.log(Object.entries(Shoes))
    return(
        <div className="product_container">
            {Object.keys(Shoes).map(keyName => {
                const shoe = Shoes[keyName];
                return(
                    <Link to={`/product/${keyName}`} className="sub" key={keyName}>
                        <img className="img" src={shoe.img} height={300} alt=""/>
                        <h3>{shoe.name}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default Product;