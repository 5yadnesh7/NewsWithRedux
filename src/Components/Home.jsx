import React, { useEffect, useState } from "react";
import "../index.css";
import Header from "./Header";
import jsonData from "./config.json";
import Axios from "axios";
import Card from "./Card";
import { useSelector } from "react-redux";

const Home = () => {
  const [newData, setnewData] = useState([]);
  const [loading, setloading] = useState(true);
	const myState = useSelector((state) => state.newsChange);
  const key = jsonData.newsApiKey;
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}`;
  console.log(myState);

//   business entertainment general health science sports technology
  useEffect(() => {
    Axios.get(url)
      .then((rsp) => {
        let a = rsp.data.articles;
        setnewData(a);
        if (a.length) {
          setloading(false);
        }
      })
      .catch((e) => {
        console.log("Error ", e);
      });
  }, [url]);
  
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${myState}&apiKey=${key}`;
    Axios.get(url)
      .then((rsp) => {
        let a = rsp.data.articles;
        setnewData(a);
        if (a.length) {
          setloading(false);
        }
      })
      .catch((e) => {
        console.log("Error ", e);
      });
  }, [myState,url,key])

  return (
    <div className="main_container">
      <Header />
      <div className="marTop">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          newData.map((item, i) => {
            return (
              <div key={i}>
                <Card item={item} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
