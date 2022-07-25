import ActionTypes from "../contents/ActionType"

const setProducts=(products)=>{
       return{
        type:ActionTypes.SET_PRODUCT,
        payload:products
       }
}

const selectedProduct = (product)=>{
    return {
        type:ActionTypes.SELECT_PRODUCT,
        payload:product
    }
}

const removeSelectedProduct = ()=>{
    return {
        type:ActionTypes.REMOVE_PRODUCT,
     
    }
}


export  {setProducts,selectedProduct,removeSelectedProduct};