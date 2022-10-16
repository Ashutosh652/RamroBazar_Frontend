import React, { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import { axiosInstance } from "../../axios";
import styled from "styled-components";
import { TbJewishStar } from "react-icons/tb";
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
  const [items, setItems] = useState(null);

  useEffect(() => {
    axiosInstance.get(`items/`).then((response) => {
      setItems(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="container">
      {items ? (
        <div className="home">
          {items.results.map((item, index) => {
            return (
              <ItemCard to="#" key={index}>
                <ItemImage
                  src={item.media.map((img) => {
                    if (img.is_feature) {
                      return img.image;
                    } else {
                      console.log(
                        "Featured image for the item " +
                          item.name +
                          "does not exist."
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
              </ItemCard>
            );
          })}
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Home;
