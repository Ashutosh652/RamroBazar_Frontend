import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { unslugify } from "unslugify";
import styled from "styled-components";
import ItemCard from "../../Components/ItemCard/ItemCard";
import useLoadMore from "./useLoadMore";
import "./CategoryFilter.css";

const CatTitle = styled.div`
  font-size: larger;
  text-align: center;
`;

const CategoryFilter = () => {
  const { slug } = useParams();
  // const { state } = useLocation();
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();
  const { loading, hasMore, items } = useLoadMore(pageNumber, slug);
  const [scrollPosY, setScrollPosY] = useState(0);
  const lastItemElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (document.getElementById("home")) {
      document.getElementById("home").scrollTop += scrollPosY;
    }
  }, [items]);

  useEffect(() => {
    setPageNumber(1);
  }, [slug]);

  return (
    <div className="container">
      <CatTitle>Category: {unslugify(slug)}</CatTitle>
      {!loading ? (
        <div
          className="home"
          id="home"
          onScroll={() => {
            setScrollPosY(document.getElementById("home").scrollTop);
          }}
        >
          {items.map((item, index) => {
            if (items.length === index + 1) {
              return (
                <div
                  onClick={() => {
                    navigate(`/item/detail/${item.slug}`);
                  }}
                  ref={lastItemElementRef}
                  key={index}
                  style={{ marginBottom: "5em" }}
                >
                  <ItemCard to="#" item={item} />
                </div>
              );
            } else {
              return (
                <ItemCard
                  to="#"
                  key={index}
                  onClick={() => {
                    window.scrollTo(0, 250);
                    console.log(window.scrollY);
                  }}
                  item={item}
                />
              );
            }
          })}
          <span>{loading && "Loading..."}</span>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default CategoryFilter;
