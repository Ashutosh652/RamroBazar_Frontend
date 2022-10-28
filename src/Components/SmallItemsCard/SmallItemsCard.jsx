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
            userData.items_for_sale.map((item, index) => {
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
          {title === "Items Sold" &&
            userData.items_sold.map((item, index) => {
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
