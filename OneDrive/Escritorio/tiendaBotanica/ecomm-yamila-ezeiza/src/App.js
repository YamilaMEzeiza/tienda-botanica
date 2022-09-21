import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import Cart from './components/Cart.js';

import Footer from './components/Footer.js';


const App=() =>{
  return (
    
   
      <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<ItemListContainer/>}/> 
     <Route path='/category/:id' element={<ItemListContainer/>}/> 
     <Route path='/item/:id' element={<ItemDetailContainer />}/> 
     <Route path='/cart' element={<Cart/>}/> 
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;
