import Head from "next/head";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

const Index = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://tj-charles-cantin.herokuapp.com/api/prices`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>tarifs et prestations | Charles Cantin</title>
      </Head>
      <Layout>
        <div className="pricing">
          {" "}
          <h1>Tarifs et prestations</h1>
          {isLoading && <p>Loading...</p>}
          {data.map((price) => (
            <div key={price.id} className="pricing__prices">
              <h2>
                {price.attributes.title}
                <em>
                  {price.attributes.price
                    ? " " + price.attributes.price + " euros"
                    : " sur mesure"}
                </em>
              </h2>
              <p>{price.attributes.description}</p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Index;
