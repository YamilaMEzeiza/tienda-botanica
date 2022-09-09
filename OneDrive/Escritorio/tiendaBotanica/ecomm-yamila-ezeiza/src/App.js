import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount'

const App=() =>{
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting= {"Planta Santa Rita"}/>
    <ItemCount initial={1} stock={10}/>
    </>
  );
}

export default App;
