import Header from './component/header/Header';
import Products from './component/product/Products';
import ProductDetail from './component/productDetail/ProductDetail';
import PageNotFound from './component/PageNotFound';
import {
  BrowserRouter as Router,Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Routes>
    <Route exact path='/' element={<Products/>}/>
    <Route exact path='/product/:productId' element={<ProductDetail/>}/>
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
