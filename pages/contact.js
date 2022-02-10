import Head from "next/head";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

const Index = () => (
  <>
    <Head>
      <title>Contact | Charles Cantin</title>
    </Head>
    <Layout>
      <div className="contact">
        <h1>Contact</h1>
        <ContactForm />
      </div>
    </Layout>
  </>
);

export default Index;
