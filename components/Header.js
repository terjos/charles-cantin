import Head from "next/head";
import NavBar from "./NavBar";

const Header = () => (
  <div className="container">
    <Head>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
  </div>
);

export default Header;
