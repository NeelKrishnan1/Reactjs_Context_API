import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { Cart } from './Context';
import './Navbar.css';
export default function Navbar() {
    const {cart,setcart}=useContext(Cart)
    return (
<div className='Navigation-container'>
 <ul>
    <li><Link to={"/home"}><h1 className='Link-text'>Home</h1></Link></li>
    <li><Link to={"/cart"}><h1 className='Link-text'>Cart({cart.length})</h1></Link></li>
</ul>
</div>
    )
}