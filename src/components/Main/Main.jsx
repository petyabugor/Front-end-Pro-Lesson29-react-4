import React from 'react'
import  './Main.css'
import {Product} from  '../common/index'
import FonMain from '../../assets/img/fon-main.jpg'

import Categories from '../common/Categories/Categories'

export class Main extends React.Component {
  render(){
    return (
      
      <div className="integrate">

              <div className="what-can-you"> 
              <div className="what-can-you__container _container-narrow">
                  <Categories 
                  choose={this.props.sortAB}
                  choose2={this.props.sortBA}
                  ></Categories>
                  <div className="what-can-you__content">
                  {this.props.items.slice(0, 12).map( el=>(  
                    <Product key={el.id} item={el} onAdd={this.props.onAdd}></Product>
                  ))} 
                  </div>
              </div>
          </div>
          </div>
    )
  }
}


export default Main