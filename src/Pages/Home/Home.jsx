import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState(null);
  const baseUrl = "http://localhost:8000/api/items/";

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <>
      {items ? (
        <div className="home">
          {items.results.map((item, index) => {
            return <span key={index}>{item.name}</span>;
          })}
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
};

export default Home;
