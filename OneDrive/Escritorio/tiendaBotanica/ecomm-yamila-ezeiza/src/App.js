import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';


const App=() =>{
  return (
    <>
    <Navbar/>
    {/*<ItemListContainer greeting= {"¡Bienvenida/o a tienda botánica!"}/>*/}
    <ItemDetailContainer />
    </>
  );
}

export default App;
