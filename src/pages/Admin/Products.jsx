import React, { useEffect, useState } from 'react'
import { GetAll, RemoveItem } from '../../api/product'

export default function Products({products}) {
    const [allProducts,setAllProducts] = useState([])
    const handleRemove = (id)=>{
        let a = confirm("Are you sure you want to remove ?" )
        if(a){
            RemoveItem(id)
            .then(data=>{
                GetAll()
                .then(data => setAllProducts(data.data))
            })
        }
    }
    useEffect(()=>{
        GetAll()
        .then(data => setAllProducts(data.data))
    },[])
    return (
        <div>
            <a href="/admin/products/add">Add</a>
            <div className="relative w-5xl">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Desc
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Imageasmhdajksdhas
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts.map(item=>{
                            return (

                                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item?.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item?.desc}
                                    </td>
                                    <td className="px-6 py-4">
                                        <img src={item?.image} alt="" /> 
                                    </td>
                                    <td className="px-6 py-4 gap-3">
                                        <a href='#' onClick={()=> handleRemove(item?.id)}>Xóa</a>
                                        <a href={'/admin/products/'+item?.id +'/update'}>Sửa</a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
