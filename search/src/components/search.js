import React, {useState} from 'react'
import '../components/search.css'
import { words } from '../words'

function Search({setSearch, search}) {
  //const [search, setSearch] = useState('')
    function print(e){
      setSearch(e.target.value)
    }
  /*
  const filteredProducts = words.filter( words => {
    return words.title.toLowerCase().includes(search.toLowerCase())
  })
  */
  return (
    <form class="search">
      <input type="text" placeholder="Search.." name="search2" onChange={print}></input>
    </form>
  )
}

export default Search
