import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetDetail, UpdateItem } from '../../api/product'
import { useNavigate  } from "react-router-dom";

export default function UpdateProduct() {
    
    const navigate = useNavigate()
    const {id} = useParams()
    const [product,setProduct] = useState({})
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
        const data ={...product,...valueInput}
        UpdateItem(id,data)
        .then(data=> {
            setProduct(data.data)
            console.log(data.data)
            alert("Update successful")
            setInterval(()=>navigate("/admin/products"),2000)
        })
    }
    useEffect(()=>{
        GetDetail(id)
        .then(data => setProduct(data.data))
    },[])
    return (
        <div>
            <h3 className='mb-5'>Update Product</h3>
            <form onSubmit={handleSubmit} className='w-96'>
                <div className="mb-6">
                    <label htmlFor="email" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input onChange={hanleChange} name='name' defaultValue={product?.name} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Name Product' />
                </div>
                <div className="mb-6">

                    <label htmlFor="message" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea onChange={hanleChange} name='desc' defaultValue={product?.desc} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a desc..."></textarea>

                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}
