import CartWidget from "../components/CartWidget.js"


const Navbar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-warning bg-warning " id="botonera">
  <div className="container-fluid">
    <div className="navbar-brand logo" >Tienda botánica</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li className="nav-item">
          <a className="nav-link active colorTexto text-center" aria-current="page" href="index.html">Inicio</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active colorTexto" href="catalogo.html">Catálogo</a>
        </li>
        <li className="nav-item d-flex align-items-center">
          <a className="nav-link active colorTexto" href="contacto.html">Contacto</a>
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