import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import DarkMode from "./DarkMode";

const ProductDetails=()=>{


const {ProductId} = useParams();
console.log(ProductId)

    return(
        <Fragment>
            <div className="container">
            
            <h1 className="mb-5">product Details</h1>
            <DarkMode/>
            </div>
        </Fragment>
    )
}

export default ProductDetails;