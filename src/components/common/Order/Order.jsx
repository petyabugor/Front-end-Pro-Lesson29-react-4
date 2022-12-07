import React, { Component } from 'react'
import  './Order.css'

export class Order extends Component {
  render() {
    return (
      <div className='order' >
        <div className="order-img" >
                  <img src={this.props.item.thumbnailUrl} alt="картинка" />
                </div>
                <h4 className="order-text" >{this.props.item.title}</h4>
                <a className="order-link"  href="">{'Ціна: '+ this.props.item.id + '$'} </a>   
      </div>
    )
  }
}

export default Order