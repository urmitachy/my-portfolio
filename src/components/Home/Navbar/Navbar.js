import React from 'react';
import './Navbar.css';
import cv from "../../../images/Urmita-Resume.pdf";

const Navbar = () => {
    return (
        <div>
            <nav class=" bg-info navbar navbar-expand-lg navbar-light ">

  <a class="navbar-brand text-white ml-5" href="#">URMITA</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto ">

    <li className="nav-item active">
            <a className="nav-link mr-5 text-white " href="#">Home</a>
          </li>
      <li class="nav-item ">
    
        <a class="nav-link text-white mr-5" href="#">Projects</a>
      </li>
     
      <li className="nav-item">
                                <a style = {{color : "white"}}
                                    className="btn btn-down"
                                    href={cv}
                                    download
                                >
                                    Download CV
                                </a>
                            </li>
      
    </ul>
    
  </div>
</nav>
        </div>
    );
};

export default Navbar;