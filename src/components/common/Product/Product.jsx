import React from 'react'
import  './Product.css'

const Product = (props) => {
      return (
              <div  className="what-can-you__item" onClick={() =>props.onAdd(props.item)} >
                <div className="what-can-you__img " >
                  <img src={props.item.thumbnailUrl} alt="картинка" />
                </div>
                <h4 className="what-can-you__item__text" >{props.item.title}</h4> 
                <a className="what-can-you__link"  href="">{'Ціна: '+ props.item.id  +  '$'} </a>   
                </div>
      )
  }

export default Product