import React from 'react'
import Order from '../common/Order/Order'
import { FaShoppingCart,FaUserAlt} from "react-icons/fa";
import {IoLogOut} from  "react-icons/io5";
import  './Header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const showOrders = (props) =>{
        let summa = 0
        props.order.forEach(el => summa += Number.parseFloat(el.id))
    return (<div>
         {props.order.map(el =>(
        <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className="summa">Сумма: {summa} $ </p>
        </div>
        )  
}
const showNothing = () =>{
    return (<div className='empty'>
                <h3>Корзина пуста!</h3>
            </div>
        )  
}

const Header = (props) =>  {
    
    let [cartOpen, setCartOpen]= useState(false)
  return (
    <header className="header">
        <div className="header__container _container">
            <div className="header__content">
                <div className="header__logo">
                    
                     <Link to="/" className="header__logo_link">
                        Trendshop
                    </Link>
                </div>
                <nav className="header__menu menu">
                        <Link to="/" className="menu__link">Головна</Link>
                        <Link to="#" className="menu__link">Товари та послуги</Link>
                        <Link to="#" className="menu__link">Про компанію</Link>
                        <Link to="#" className="menu__link">Контакти</Link>
                        <Link to="#" className="menu__link">Відгуки</Link>
                </nav>
            </div>
                <div className="header__button">
                {!props.isLoggedIn
                ?<Link to="/login" > <FaUserAlt className='login-icon' />
                </Link>
                :<Link to="/login" > <IoLogOut  className='logout-icon' />
                </Link>}
                    <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen &&'active'}`}/>
                    {cartOpen && (
                    <div className="shop-cart">
                        {props.order.length > 0 ?
                        showOrders(props): showNothing()} 
                    </div>
                )}
                </div>
                
        </div>
    </header>
  )
}

export default Header;

