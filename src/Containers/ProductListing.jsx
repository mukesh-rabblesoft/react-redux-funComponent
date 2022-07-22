import React, { Fragment,useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import TextForm from "./TextForm";
import { setProducts } from "./redux/actions/ProductActions"
import { useDispatch } from "react-redux";

const ProductListing = () => {

 
  const setProduct = useDispatch();
 
  const fetchProducts = async (setProduct) => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });

      setProduct(setProducts(response.data));
  };

  useEffect( ()=>{
    fetchProducts(setProduct);
  }, [setProduct]);


  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <ProductComponent />
          <TextForm  heading={"Enter text here"} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductListing;
