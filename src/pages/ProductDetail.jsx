import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetDetail } from '../api/product';
export default function ProductDetail({ products }) {
    const { id } = useParams()
    const [product, setProducts] = useState({})

    useEffect(() => {
        GetDetail(id)
            .then(data => setProducts(data.data))
    }, [])
    return (
        <div>
            <h1 className='mb-5'>{product.name}</h1>
            <div key={product?.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#"  className='flex justify-center'>
                    <img src={product?.image} alt="" />
                </a>
                <a href="#" className='mt-3'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product?.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product?.desc}</p>
            </div>

        </div>
    )
}
