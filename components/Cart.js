import React from 'react';
import { useContext } from 'react';
import Singleproduct from './Singleproduct';
import { Cart } from './Context';

const Cartpage=()=>{
    const {cart,setcart}=useContext(Cart)
    return (
        <div>
            <span style={{fontWeight:100}}>My Cart</span>
            <span style={{fontWeight:100}}>Total:$1000</span>
            <div className='cart'>
            {cart.map((prod)=>(
                <Singleproduct prod={prod} key={prod.id} cart={cart} setcart={setcart}/>
            ))}
            </div>
            </div>
    );
}

export default Cartpage;