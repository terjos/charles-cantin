import Head from "next/head";
import NavBar from "./NavBar";

const Layout = (props) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Charles Cantin est passionné par la photographie"
      />
    </Head>
    <NavBar />
    <main className="container">{props.children}</main>
  </>
);

export default Layout;
