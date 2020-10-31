import React from 'react';
import './Header.css'
import logo from '../../../images/pic (2).png'
import Typical from "react-typical";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
    return (
        <div>
            <div class="text-center">
            <img src={logo} class="rounded w-25 mt-5" alt="..."/>
            </div>
            <div>
            <h4 className = "text-center">
                                <Typical
                                    loop={Infinity}
                                    wrapper="b"
                                    steps={[
                                        "A Front End Develpoer",
                                        1000,
                                        "Veterinarian",
                                        1000,
                                        "Love to coding",
                                        1000,
                                    ]}
                                />
                            </h4>
                        
                            <div className="icon text-center mt-5">
                <a href="https://www.facebook.com/profile.php?id=100004162606153" target="_blank"><FontAwesomeIcon className="social-icon" icon={faFacebook} /></a>
                <a href=" https://www.linkedin.com/in/UrmitaChowdhury/" target="_blank"><FontAwesomeIcon className="social-icon" icon={faLinkedinIn} /></a>
                <a href="https://github.com/urmitachy" target="_blank"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
            </div>
                           
            </div>
        </div>
    );
};

export default Header;