import React from 'react'
import  './Product.css'

export class Product extends React.Component {
   render(){
      return (
              <div  className="what-can-you__item" onClick={() =>this.props.onAdd(this.props.item)} >
                <div className="what-can-you__img " >
                  <img src={this.props.item.thumbnailUrl} alt="картинка" />
                </div>
                <h4 className="what-can-you__item__text" >{this.props.item.title}</h4> 
                <a className="what-can-you__link"  href="">{'Ціна: '+ this.props.item.id + '$'} </a>   
                </div>
      )
    }
  }

export default Product