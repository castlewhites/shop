import React, { useState } from 'react'
import ArticleDetails from './components/ArticleDetails'
import ArticleList from './components/ArticleList'
import ProductContext from './context/ProductContext'
import { data } from './data'
import './App.scss'

function App() {
  const [productSelected, setProducSelected] = useState(data[0])
  return (
    <ProductContext.Provider value={{
      productSelected,
      setProducSelected,
      allProducts: data, 
      selectedColor: null
    }
    }>
      <div className="App">
        <ArticleDetails/>
        <ArticleList/>
      </div>
    </ProductContext.Provider>
    
  )
}

export default App
