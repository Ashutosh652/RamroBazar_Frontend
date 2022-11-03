import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Items, TitleHead, ItemList, Item } from "./SmallCardItemsElements";

const SmallItemsCard = ({ userData, title }) => {
  const navigate = useNavigate();

  return (
    <>
      <Items>
        <TitleHead>
          <span>{title}</span>
        </TitleHead>
        <ItemList>
          {title === "Items On Sale" &&
            userData.all_items.map((item, index) => {
              if (item.is_visible === true) {
                return (
                  <Item
                    key={index}
                    onClick={() => {
                      navigate(`/item/detail/${item.slug}`);
                    }}
                  >
                    <span>{item.name}</span>
                  </Item>
                );
              } else {
                return null;
              }
            })}
          {title === "Items Sold" &&
            userData.all_items.map((item, index) => {
              if (item.is_sold === true) {
                return (
                  <Item
                    key={index}
                    onClick={() => {
                      navigate(`/item/detail/${item.slug}`);
                    }}
                  >
                    <span>{item.name}</span>
                  </Item>
                );
              } else {
                return null;
              }
            })}
          {title === "Invisible Items" &&
            userData.all_items.map((item, index) => {
              if (item.is_visible === false) {
                return (
                  <Item
                    key={index}
                    onClick={() => {
                      navigate(`/item/detail/${item.slug}`);
                    }}
                  >
                    <span>{item.name}</span>
                  </Item>
                );
              } else {
                return null;
              }
            })}
          {title === "WishList" &&
            userData.wishlist.map((item, index) => {
              return (
                <Item
                  key={index}
                  onClick={() => {
                    navigate(`/item/detail/${item.slug}`);
                  }}
                >
                  <span>{item.name}</span>
                </Item>
              );
            })}
        </ItemList>
      </Items>
    </>
  );
};

export default SmallItemsCard;
