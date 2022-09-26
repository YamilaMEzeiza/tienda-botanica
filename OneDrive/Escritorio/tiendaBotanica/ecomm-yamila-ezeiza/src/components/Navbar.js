import CartWidget from "../components/CartWidget.js"
import {Link} from "react-router-dom";


const Navbar=()=>{
    return(
        <>
        < nav className="navbar navbar-expand-lg navbar-warning mb-4 " id="botonera">
       
        <div className="container-fluid me-4" id="logo"><Link to="/" style={{textDecoration:"none"}}>Tienda Botánica 
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li className="nav-item ms-4">
          <Link to="/category/1">Plantas de interior</Link>
        </li>
        <li className="nav-item ">
        <Link to="/category/2">Plantas de exterior</Link>
        </li>
        <li className="nav-item d-flex align-items-center">
        <Link to="/category/3">Huerta</Link>
        </li>
      </ul>
      </div>
    <CartWidget/>
    </div>
 
</nav>

    
        </>
    )
}
export default Navbar;