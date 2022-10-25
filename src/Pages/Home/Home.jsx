import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useLoadMore from "./useLoadMore";
import ItemCard from "../../Components/ItemCard/ItemCard";
import "./Home.css";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();
  const { loading, hasMore, items } = useLoadMore(pageNumber);
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

  return (
    <div className="container">
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
                  <ItemCard item={item} />
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  onClick={() => {
                    navigate(`/item/detail/${item.slug}`);
                  }}
                >
                  <ItemCard item={item} />
                </div>
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

export default Home;
