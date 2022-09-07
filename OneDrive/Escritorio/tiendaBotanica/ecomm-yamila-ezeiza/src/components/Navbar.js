const Navbar=()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark " id="botonera">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">Tienda botánica</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active " href="catalogo.html">Catálogo</a>
        </li>
        <li class="nav-item d-flex align-items-center">
          <a class="nav-link active" href="contacto.html">Contacto</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;