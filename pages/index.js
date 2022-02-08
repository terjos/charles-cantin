import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import logo from "../public/images/logo.jpg";

const Index = () => (
  <>
    <Head>
      <title>Accueil | Charles Cantin</title>
    </Head>
    <Layout>
      <div>
        <Image src={logo} alt="logo Charles Cantin" width={800} height={800} />
      </div>
    </Layout>
  </>
);

export default Index;
