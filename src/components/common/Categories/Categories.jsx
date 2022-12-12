import React, { Component } from 'react'
import  './Categories.css'

export class Categories extends Component {
  render() {
    return (
      <div className='categories' >
        <div className='categories-text'> Сортувати</div>
            <div className="select-css"> 
                <div className='categories-button' onClick={() => this.props.choose()}>від А-Я</div>
                <div className='categories-button' onClick={() => this.props.choose2()}>від Я-А</div>
            </div>
      </div>
    )
  }
}

export default Categories