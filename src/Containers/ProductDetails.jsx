import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import DarkMode from "./DarkMode";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "./redux/actions/ProductActions";
import { useEffect } from "react";

const ProductDetails = () => {
  const { ProductId } = useParams();
  const selectProduct = useDispatch();
  const productDetail = useSelector((state) => state.product);

  const fetchDetails = async (selectProduct) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${ProductId}`)
      .catch((err) => {
        console.log("err", err);
      });
    selectProduct(selectedProduct(response.data));
  };

  useEffect(() => {
    if (ProductId && ProductId !== "") {
      fetchDetails(selectProduct);
    } else {
      console.log("product id not found");
    }

    return ()=>{
        selectProduct(removeSelectedProduct());    
    }
  }, [ProductId]);

  return (
    <Fragment>
      <div className="container">
    
    {
        Object.keys(productDetail).length === 0 ? (<div>... Loding</div>) : ( 
        <div className="row">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card">
              <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                data-mdb-ripple-color="light">
                <img src={productDetail.image}
                   className="img-fluid"
                  alt="Laptop" />
                <a href="/">
                  <div className="mask"></div>
                </a>
              </div>
              <div className="card-body pb-0">
                <div className="d-flex justify-content-between">
                  <div>
                    <p><a href="#!" className="text-dark">{productDetail.title}</a></p>
                    <p className="small text-muted">{productDetail.category}</p>
                  </div>
                  <div>
                    <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="small text-muted">Rated 4.0/5</p>
                  </div>
                </div>
              </div>
              <hr className="my-0" />
              <div className="card-body pb-0">
                <div className="d-flex justify-content-between">
                  <p><a href="#!" className="text-dark">$: {productDetail.price}</a></p>
                  <p className="text-dark">#### 8787</p>
                </div>
                <p className="small text-muted">{productDetail.description}</p>
              </div>
              <hr className="my-0" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                  <a href="/" className="text-dark fw-bold">Cancel</a>
                  <button type="button" className="btn btn-primary">Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        ) 
    }
    <DarkMode />
      </div>
  
        

    </Fragment>
  );
};

export default ProductDetails;
