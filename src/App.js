import './App.css';
import Header from './Containers/Header';
import { Routes, Route} from 'react-router-dom';
import ProductListing from './Containers/ProductListing';
import ProductDetails from './Containers/ProductDetails';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>

           <Route path='/' exact element={<ProductListing/>} />
           <Route path='/product/:ProductId' exact element={<ProductDetails/>} />
           <Route>Not Found</Route>
     
    </Routes>
    </div>
  );
}

export default App;
