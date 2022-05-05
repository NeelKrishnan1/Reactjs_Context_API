import React, { useState } from 'react';
import faker from 'faker';// why use this ? fake id products ok
import Singleproduct from './Singleproduct';
import './Home.css'
faker.seed(100);

const Home=({})=>{
    
    const productarray=[...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.random.image()
    }))
    const [products]=useState(productarray);

    console.log(productarray);
    return (
        <div className='product_container'>
            {products.map((prod)=>(
                <Singleproduct prod={prod}/>
            ))}
        </div>
    );
}

export default Home;