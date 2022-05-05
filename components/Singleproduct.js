import React,{useContext} from 'react';
import { Cart } from './Context';
const Singleproduct=({prod})=>{
    const {cart,setcart}=useContext(Cart)
    
    return (
        <div className='products'>
         <img src={prod.image} alt={prod.name}/>
         <span style={{fontWeight:600}}>{prod.name}</span>
         <span>${prod.price.substring(0,3)}</span>
         {cart.includes(prod) ? (
    <button className='add' onClick={()=>{
        setcart(cart.filter((c)=>c.id !== prod.id))
    }}>Remove cart</button>
    ) : (
<button className='add' onClick={()=>{
            setcart([...cart,prod])
        }}>Add cart</button>
       
       
       )}
       
</div>
    );
}

// ok bro .. git push and share link.. and can you help to sivakumar ? ok good luck..

export default Singleproduct;