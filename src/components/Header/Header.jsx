import React from 'react'
import Order from '../common/Order/Order'
import { FaShoppingCart } from "react-icons/fa";
import  './Header.css'
import { useState } from 'react';

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
                    <a href="#" className="header__logo_link">
                        Trendshop
                    </a>
                </div>
                <nav className="header__menu menu">
                        <a href="#" className="menu__link">Головна</a>
                        <a href="#" className="menu__link">Товари та послуги</a>
                        <a href="#" className="menu__link">Про компанію</a>
                        <a href="#" className="menu__link">Контакти</a>
                        <a href="#" className="menu__link">Відгуки</a>
                </nav>
            </div>
                <div className="header__button">
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

