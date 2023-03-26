import instance from "./instance"


export const GetAll = ()=>{
    return instance.get('/products')
}

export const GetDetail = (id)=>{
    return instance.get('/products/'+id)
}
export const RemoveItem = (id)=>{
    return instance.delete('/products/'+id)
}
export const UpdateItem = (id,data)=>{
    return instance.patch('/products/'+id,data)
}
export const AddProduct = (data)=>{
    return instance.post('/products',data)
}