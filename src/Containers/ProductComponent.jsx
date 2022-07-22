import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

const ProductComponent = () => {
  const product = useSelector((state) => state.allProducts.Products);
 // console.log(product);

  return (
    <Fragment>
      {product.map((item, index) => (
        <div className="col-md-4 mt-4" key={index}>
        <Link className="link_tag" to={`/product/${item.id}`}>
        <div className="card">
        <img className="card-img-top" src={item.image} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">$ {item.price}</p>
          <p className="card-text">{item.description}</p>
          <Link to="/" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
      </Link>
        </div>
  ))}
    </Fragment>
  );
};

export default ProductComponent;
