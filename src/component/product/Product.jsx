import React from 'react'
import {useSelector} from "react-redux"
import {Link} from 'react-router-dom'


function Product() {
  //use selector to use state of redux store
  const products = useSelector((state)=>state.allProducts.products);
  const renderProductList = products.map((product)=>{
  const {id,title,price,category,image} = product;
    return (
      <Link style={{textDecoration:'none'}} to={`/product/${id}`} key={id}>
      <div className="product">
      <div className="productImg">
        <img src={image} alt="productImage" className='image'/>
      </div>
      <div className="productTitle">
        <h4>{title}</h4>
      </div>
      <div className="productCatag">
        <p>{category}</p>
      </div>
      <div className="productPrice">
        <h6>Rs ${price}</h6>
      </div>
      <div className="purchaseBtn">
        <button className='prd-btn'>Add to Cart</button>
      </div>
  </div>
  </Link>
    )
  })
  return (
   <>  {renderProductList}</>
  )
}

export default Product