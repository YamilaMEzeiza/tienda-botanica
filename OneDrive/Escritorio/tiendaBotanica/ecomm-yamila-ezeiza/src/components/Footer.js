import React from 'react'
import { IoLogoInstagram } from 'react-icons/io';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai'
export default function Footer() {
  return (
    <footer className="row py-2 col-sm-12 col-md-12 col-lg-12 mt-4" id="footer">
      <div className="row gx-0">
        <h2 className="title2 text-center bg-animacion"> Seguinos en nuestras redes</h2>
        <div className="col-sm-12 col-md-12 col-lg-4 text-center"> <a href=" https://twitter.com" className='icons'> <IoLogoInstagram /> </a> </div>
        <div className="col-sm-12 col-md-12 col-lg-4 text-center"> <a href=" https://twitter.com" className='icons'> <AiFillTwitterSquare /> </a> </div>
        <div className="col-sm-12 col-md-12 col-lg-4 text-center"> <a href="https://facebook.com" className='icons'> <AiOutlineFacebook /> </a> </div>
        <p className="footerText text-center"> © 2022 Tienda botánica. Todos los derechos reservados. </p>
      </div>
    </footer>

  )
}
