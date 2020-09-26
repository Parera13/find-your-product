import React from 'react'
import '../components/product.css'
import Vega from './vegetables.jpg'
import Dairy from './dairy.jpg'
import Fruits from './fruits.jpg'
import Bakery from './bakery.jpg'
import Meat from './meat.jpg'
import Vegan from './vegan.jpg'


function Product(props) {
  let bg = ''
  if ( props.type === 'vegetable' ){
    bg = Vega
  }else if ( props.type === 'dairy' ){
    bg = Dairy
  }else if ( props.type === 'fruit' ){
    bg = Fruits
  }else if ( props.type === 'bakery' ){
    bg = Bakery
  }else if ( props.type === 'meat' ){
    bg = Meat
  }else if ( props.type === 'vegan' ){
    bg = Vegan
  }


  let star = ''
  if ( props.rating === 4 ){
    star = <i class="fa fa-star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></i>
  }else if ( props.rating === 3 ){
    star = <i class="fa fa-star"><i class="fa fa-star"></i><i class="fa fa-star"></i></i>
  }else if ( props.rating === 2 ){
    star = <i class="fa fa-star"><i class="fa fa-star"></i></i>
  }else if ( props.type === 1 ){
    star = <i class="fa fa-star"></i>
  }else { star = <i class="fa fa-star-half"></i>
  }
  return (
    <div className="product">
      <div className="header">
        <u>{props.title}</u>
        <div className="rating">
        <p>Rating</p> 
        {star}
        </div>
      </div>
      <div className="type">
        
        <img src={bg} alt=""/>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
      <p id="price">Price: {props.price}</p>
    </div>
  )
}

export default Product
