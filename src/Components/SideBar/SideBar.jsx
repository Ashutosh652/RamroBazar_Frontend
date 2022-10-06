import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBarItem from "./SideBarItem";
import "./SideBar.css";

const SideBar = () => {
  const baseUrl = "http://localhost:8000/api/categories/";
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="category">Categories</div>
      {categories ? (
        <>
          {categories.results.map((category, index) => {
            return <SideBarItem key={index} category={category} />;
          })}
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default SideBar;
