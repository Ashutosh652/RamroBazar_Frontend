import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCaretDownFill } from "react-icons/bs";

const SideBarItem = ({ category }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  if (category.children) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <span>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to={`/items/category/${category.slug}`}
            >
              {category.name}
            </Link>
          </span>
          <BsCaretDownFill className="toggle-btn" onClick={toggleOpen} />
        </div>
        <div className="sidebar-content">
          {category.children.map((child, index) => {
            return <SideBarItem key={index} category={child}></SideBarItem>;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-item">
        <div className="sidebar-title">
          <span>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to={`/items/category/${category.slug}`}
            >
              {category.name}
            </Link>
          </span>
        </div>
      </div>
    );
  }
};

export default SideBarItem;
