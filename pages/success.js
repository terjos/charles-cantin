import Head from "next/head";
import Layout from "../components/Layout";

const Index = () => (
  <>
    <Head>
      <title>Succès | Charles Cantin</title>
    </Head>
    <Layout>
      <div className="success">Votre message a bien été envoyer!</div>
    </Layout>
  </>
);

export default Index;
