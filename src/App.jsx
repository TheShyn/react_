import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { GetAll } from './api/product'
import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import Products from './pages/admin/Products'
import UpdateProduct from './pages/Admin/UpdateProduct'
import AddProductItem from './pages/Admin/AddProduct'

function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    GetAll()
    .then(data => setProducts(data.data))
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductPage products = {products}/>} />
        <Route path="/products/:id" element={<ProductDetail products = {products}/>} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products products = {products}/>} />
        <Route path="/admin/products/:id/update" element={<UpdateProduct/>} />
        <Route path="/admin/products/add" element={<AddProductItem/>} />
      </Routes>
    </div>
  )
}

export default App
