import React, {useState} from 'react';
import './App.css';
import Search from './components/search';
import Products from './components/products';


function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <h1>find your product</h1>
      <Search setSearch={setSearch} search={search}/>
      <div className="pr-content">
        <div className="products">
          <Products setSearch={setSearch} search={search}/>
        </div>
      </div>
    </div>
  );
}

export default App;
