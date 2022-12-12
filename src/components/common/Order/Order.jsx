import React, { Component } from 'react'
import  './Order.css'
import {FaTrash} from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='order' >
        <div className="order-item">
          <div className="order-img" >
              <img src={this.props.item.thumbnailUrl} alt="картинка" />
          </div>
          <div className="order-content">
                <h4 className="order-text" >{this.props.item.title}</h4>
                <a className="order-link"  href="">{'Ціна: '+ this.props.item.id + '$'} </a>
          </div>  
                <FaTrash className='delete-icon' onClick={()=> this.props.onDelete(this.props.item.id)} ></FaTrash>
          </div>
      </div>
    )
  }
}

export default Order