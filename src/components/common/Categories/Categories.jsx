import React from 'react'
import  './Categories.css'

const Categories = (props) => {
    return (
      <div className='categories' >
        <div className='categories-text'> Сортувати</div>
            <div className="select-css"> 
                <div className='categories-button' onClick={() => props.choose()}>від А-Я</div>
                <div className='categories-button' onClick={() => props.choose2()}>від Я-А</div>
            </div>
      </div>
    )
  
}

export default Categories