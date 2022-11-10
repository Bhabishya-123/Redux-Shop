import React, { useEffect } from "react";
import "./productDetail.css";
import "./productDetail.css";
import axios from "axios";
import ReactLoading from "react-loading";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

function ProductDetail() {
  //use selector to use state of redux store
  const product = useSelector((state) => state.product);
  const { category, description, image, price, title } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProductDetail = async () => {
      await axios(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => {
          dispatch(selectedProduct(res.data));
        })
        .catch((err) => console.log(err));
    };
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch]);
  return (
    <>
      {Object.keys(product).length === 0 ? (
        <ReactLoading type="spin" color="black" height="50px" width="50px" />
      ) : (
        <div className="productDetail">
          <div className="productDetailWrapper">
            <div className="productImg">
              <img src={image} alt="productImage" className="image" />
            </div>
            <div className="productTitle">
              <h4>{title}</h4>
            </div>
            <div className="productCatag">
              <p>({category})</p>
            </div>
            <div className="productPrice">
              <h6>Rs ${price}</h6>
            </div>
            <div className="productDetDesc">
              <p>{description}</p>
            </div>
            <div className="purchaseBtn">
              <button className="prd-btn">Purchase</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
