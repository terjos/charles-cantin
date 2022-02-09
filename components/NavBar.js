import Image from "next/image";
import Link from "next/link";
import logoFacebook from "../public/images/logo-facebook.svg";
import logoInstagram from "../public/images/logo-instagram.svg";
console.log("logoFacebook:", logoFacebook);
const NavBar = () => (
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
        <a href="#">Contact</a>
      </li>
      <li className="navbar__social-network">
        <a href="#">
          <img src={logoFacebook.src} />
        </a>
        <a href="#">
          <img src={logoInstagram.src} />
        </a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
