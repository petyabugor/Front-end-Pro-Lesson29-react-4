import React, { Component } from 'react'
import  './Categories.css'

export class Categories extends Component {
  render() {
    return (
      <div className='categories' >
        <div className='categories-text'> Сортировать</div>
            <div className="select-css"> 
                <div className='categories-button' onClick={() => this.props.choose()}>от a-z</div>
            </div>
      </div>
    )
  }
}

export default Categories