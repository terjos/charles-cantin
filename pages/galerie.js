import Head from "next/head";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Card from "../components/card";

const PICTURE_URL = "https://tj-charles-cantin.herokuapp.com/api/pictures";
const PAGESIZE = 6;
let nextPage = 1;
let filter = "";

const Index = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  function fetchData(add) {
    setLoading(true);

    fetch(
      `${PICTURE_URL}?pagination[page]=${nextPage}&pagination[pageSize]=${PAGESIZE}&populate=%2A${
        filter ?? ""
      }`
    )
      .then((res) => res.json())
      .then((resData) => {
        if (add) {
          setData([...data, ...resData.data]);
        } else {
          setData(resData.data);
        }
        setLoading(false);
        if (resData.meta.pagination.page < resData.meta.pagination.pageCount) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      });
  }

  useEffect(() => {
    fetchData();

    fetch(`https://tj-charles-cantin.herokuapp.com/api/categories`)
      .then((res) => res.json())
      .then((resData) => {
        setCategories(resData.data);
        setIsCategoriesLoading(false);
      });
  }, []);

  function handelCategoriesChange(e) {
    nextPage = 1;
    if (e.target.value === "0") {
      filter = "";
    } else {
      filter = `&filters[$and][0][category][id][$eq]=${e.target.value}`;
    }

    fetchData();
  }

  function handelClickViewMore(e) {
    nextPage++;
    fetchData(true);
  }

  return (
    <>
      <Head>
        <title>Galerie | Charles Cantin</title>
      </Head>
      <Layout>
        <h1 className="galerie-title">Galerie</h1>
        <div className="galerie-filter">
          <select
            onChange={handelCategoriesChange}
            disabled={isCategoriesLoading}
          >
            <option value="0" defaultValue>
              toute les catégories
            </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.attributes.title}
              </option>
            ))}
          </select>
        </div>
        <div className="galerie">
          {data.map((picture) => (
            <Card key={picture.id} picture={picture.attributes} />
          ))}
          {isLoading && <p>Loading...</p>}
        </div>
        {hasMore && (
          <div className="galerie-add">
            <button onClick={handelClickViewMore} disabled={isLoading}>
              {isLoading ? "Loading..." : "voir +"}
            </button>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Index;
