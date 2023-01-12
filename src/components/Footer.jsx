import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">

    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <br />
          <h5 className="text-uppercase">© 2022 Copyright Ghiorzi Paula Agustina</h5>
          <p className="pieDePagina">
            - From Argentina to the world -
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Contacto</h5>
          <ul className="list-unstyled">
            <li>La Plata, Buenos Aires. Argentina. </li>
            <li>ghiorzi24@gmail.com </li>
            <li>+ 54 221 3174 336 </li>
          </ul>
        </div>
      </div>
    </div>

    {/* <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div> */}
  </footer>
);

export default Footer;
