import React from 'react';
import Shoes from '../data.json';
import { useParams } from 'react-router-dom';


const ProductItem = () => {
    const { id } = useParams();
    const shoe = Shoes[id];
    if (!shoe) {
        return(
            <h1>Product Not Found.</h1>
        )
    }
    return (
        <section style={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="subdiv"
            style={{
                padding: '2%',
                margin:'auto 5% auto 5%',
                textAlign:'center',
                boxShadow: '0 0 20px #463636',
            }}>
                <img className="img" src={shoe.img} alt="" height={400} />
                <h1>{shoe.name}</h1>
            </div>
        </section>
    )
}

export default ProductItem;