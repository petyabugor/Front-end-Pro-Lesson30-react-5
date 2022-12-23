import React from 'react'
import  './Main.css'
import {Product} from  '../common/index'
import {ProductSkeleton} from "../common/index";


import Categories from '../common/Categories/Categories'

const Main = (props) =>  {
    return (
      <div className="integrate">
        <div className="what-can-you"> 
            <div className="what-can-you__container _container-narrow">
                    <Categories 
                    choose={props.sortAB}
                    choose2={props.sortBA}
                    ></Categories>
                <div className="what-can-you__content">
                    {!props.Skeleton
                    ?[...new Array(12)].map((_, index)=> <ProductSkeleton key={index}/>  )
                    :props.items.slice(0, 12).map( el=>(  
                    <Product key={el.id} item={el} onAdd={props.onAdd}></Product>
                    ))} 
                </div>
            </div>
        </div>
      </div>
    )
}


export default Main