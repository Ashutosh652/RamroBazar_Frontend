import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryFilter = () => {
  const { slug } = useParams();
  const [items, setItems] = useState(null);
  const baseUrl = "http://localhost:8000/api/items/?category__slug=";

  useEffect(() => {
    axios.get(baseUrl.concat(`${slug}`)).then((response) => {
      setItems(response.data);
    });
  }, [slug]);

  return (
    <div>
      {items ? (
        <>
          {items.results.map((item, index) => {
            return <h1 key={index}>{item.name}</h1>;
          })}
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default CategoryFilter;
