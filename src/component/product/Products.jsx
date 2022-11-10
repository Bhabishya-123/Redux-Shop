import { useEffect } from "react";
import "./products.css";
import Product from "./Product";
import { setProducts } from "../../redux/actions/productActions";
import axios from "axios";
import { useDispatch,useSelector} from "react-redux";
import ReactLoading from 'react-loading';

function Products() {
  const products = useSelector((state)=>state.allProducts.products);
  //we use dispatch hooks to dispatch setproduct action to reducer to update the products state fetch from api
  const dispatch = useDispatch();
  //fetch products method and calling it inside useEffect later

  useEffect(() => {
    const fetchProducts = async () => {
      await axios("https://fakestoreapi.com/products?limit=10")
            .then((res)=>{
              dispatch(setProducts(res.data));
            })
            .catch((err) => console.log(err));
         
        };
      
    fetchProducts();
  },[dispatch]);

  return (
    <div className="products">
      <div className="productsWrapper">
       {products?<Product/>:<ReactLoading type="spin" color='black' height='50px' width='50px'/>}
      </div>
    </div>
  );
}

export default Products;
