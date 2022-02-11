import { useState, useEffect } from "react";
import logoFacebook from "../public/images/logo-facebook.svg";
import logoInstagram from "../public/images/logo-instagram.svg";

const NavBar = () => {
  const [socialLinks, setSocialLinks] = useState();
  useEffect(() => {
    fetch(`https://tj-charles-cantin.herokuapp.com/api/configue`)
      .then((res) => res.json())
      .then((resData) => {
        setSocialLinks(resData.data.attributes);
      });
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li className="navbar__home">
          <a href="/">
            <strong>Accueil</strong>
          </a>
        </li>
        <li className="navbar__galerie">
          <a href="/galerie">galerie</a>
        </li>
        <li>
          <a href="/tarifs-et-prestations" className="navbar__price">
            tarifs et prestations
          </a>
        </li>
        <li className="navbar__contact">
          <a href="/contact">Contact</a>
        </li>
        <li className="navbar__social-network">
          <a
            href={socialLinks ? socialLinks.facebook : "#"}
            target={socialLinks ? "_blank" : "_self"}
          >
            <img src={logoFacebook.src} />
          </a>
          <a
            href="#"
            href={socialLinks ? socialLinks.instagram : "#"}
            target={socialLinks ? "_blank" : "_self"}
          >
            <img src={logoInstagram.src} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
