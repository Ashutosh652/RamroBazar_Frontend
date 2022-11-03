import React, { useEffect, useContext } from "react";
import SideBarItem from "./SideBarItem";
import "./SideBar.css";
import CategoryContext from "./CategoryContext";
import { axiosInstance } from "../../axios";

const SideBar = () => {
  const { categories, setCategories } = useContext(CategoryContext);

  useEffect(() => {
    axiosInstance.get(`categories/`).then((response) => {
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
