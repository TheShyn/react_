import axios from 'axios'
import React, { useState } from 'react'
import { AddProduct} from '../../api/product'
import { useNavigate  } from "react-router-dom";

export default function AddProductItem() {
    const navigate = useNavigate()
    const [valueInput,setValueInput] = useState({})

    const hanleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setValueInput({
          ...valueInput,
            [name]:value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(valueInput)
        const data = {
            ...valueInput,
            image: "https://picsum.photos/150/150"
        }
        AddProduct(data)
        // axios.post('http://localhost:3000/products',valueInput)
        .then(data=> {
            console.log(data)
            alert("Add successful")
            setInterval(()=>navigate("/admin/products"),2000)
        
        })
    }
  return (
    <div>
         <div>
            <h3 className='mb-5'>Update Product</h3>
            <form onSubmit={handleSubmit} className='w-96'>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input onChange={hanleChange} name='name'  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Name Product' />
                </div>
                <div className="mb-6">

                    <label htmlFor="message" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea onChange={hanleChange} name='desc'  id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a desc..."></textarea>

                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    </div>
  )
}
