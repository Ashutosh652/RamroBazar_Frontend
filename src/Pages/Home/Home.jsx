import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavLink as Link } from "react-router-dom";
import { axiosInstance } from "../../axios";
import styled from "styled-components";
import { TbJewishStar } from "react-icons/tb";
import useLoadMore from "../../Hooks/useLoadMore";
import "./Home.css";

const ItemCard = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 10em;
  width: 95%;
  cursor: pointer;
  background-color: white;
  margin: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    background-color: rgba(161, 54, 54, 0.1);
  }
`;

const ItemImage = styled.img`
  height: 7rem;
  width: 7rem;
`;

const ItemInfo = styled.div`
  height: 100%;
  width: 100%;
`;

const ItemTitle = styled.span`
  font-size: large;
  margin-left: 2rem;
`;

const ItemDescription = styled.span`
  margin-top: 1rem;
  margin-left: 2rem;
  color: #665566;
  font-size: small;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 60%;
  height: 1rem;
  display: inline-block;
`;

const ItemPrice = styled.span`
  font-size: largest;
  margin-left: 2rem;
`;

const ItemLocation = styled.span`
  font-size: small;
  margin-left: 2rem;
  color: #665566;
`;

const ItemDate = styled.span`
  font-size: small;
  margin-left: 2rem;
  color: #665566;
`;

const Divider = styled.hr`
  border-top: 1px solid #bbb;
  margin-left: 2rem;
  margin-top: 1rem;
  overflow: hidden;
  width: 50%;
`;

const AddWishList = styled.div`
  color: #665566;
  font-size: small;
  margin-left: 2rem;

  &: hover {
    color: #000;
  }
`;

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();
  const { loading, hasMore, items } = useLoadMore(pageNumber);
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

  const itemCardContent = (item) => (
    <>
      <ItemImage
        src={item.media.map((img) => {
          if (img.is_feature) {
            return img.image;
          } else {
            console.log(
              "Featured image for the item " + item.name + "does not exist."
            );
            return "default product image url";
          }
        })}
      ></ItemImage>
      <ItemInfo>
        <ItemTitle>{item.name}</ItemTitle>
        <br />
        <ItemDescription>{item.description}</ItemDescription>
        <br />
        <ItemPrice>Rs. {item.show_price}</ItemPrice>
        <br />
        <ItemLocation>{item.location}</ItemLocation>
        <br />
        <ItemDate>Last Updated: {item.updated_at}</ItemDate>
        <br />
        <Divider />
        <AddWishList>
          <TbJewishStar />
          <span> Add to WishList </span>
        </AddWishList>
      </ItemInfo>
    </>
  );

  return (
    <div className="container">
      {!loading ? (
        <div className="home">
          {items.map((item, index) => {
            if (items.length === index + 1) {
              return (
                <ItemCard to="#" key={index} ref={lastItemElementRef} style={{marginBottom: "5em"}}>
                  {itemCardContent(item)}
                </ItemCard>
              );
            } else {
              return (
                <ItemCard to="#" key={index}>
                  {itemCardContent(item)}
                </ItemCard>
              );
            }
          })}
          <span>
            {loading && "Loading..."}
          </span>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Home;
