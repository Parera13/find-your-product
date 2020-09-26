import React, {useState} from 'react'
import Product from './product'
import { words } from '../words'
import Search from '../components/search'

function Products({setSearch,search}) {
  const filteredProducts = words.filter( words => {
    return words.description.toLowerCase().includes(search.toLowerCase() ||
    words.title.toLowerCase().includes(search.toLowerCase() ||
    words.rating.toString().includes(search)))
  })
  return (

    <div className="products">
       
      {filteredProducts.map( e => (
        <Product title={e.title} rating={e.rating} type={e.type} description={e.description} price={e.price}/>
      ))}
      
    </div>
  )
}

export default Products
