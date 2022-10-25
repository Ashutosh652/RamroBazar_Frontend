import React from "react";
import { TbJewishStar } from "react-icons/tb";
import {
  Card,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemDescription,
  ItemPrice,
  ItemLocation,
  ItemDate,
  Divider,
  AddWishList,
} from "./ItemCardElements";

const ItemCard = (item) => {
  return (
    <>
      <Card>
        <ItemImage
          src={item.item.media
            .filter((img) => {
              if (img.is_feature) {
                return true;
              }
              return false;
            })
            .map((img) => {
              return img.image;
            })}
          alt="No Feature Image"
        ></ItemImage>
        <ItemInfo>
          <ItemTitle>{item.item.name}</ItemTitle>
          <br />
          <ItemDescription>{item.item.description}</ItemDescription>
          <br />
          <ItemPrice>Rs. {item.item.show_price}</ItemPrice>
          <br />
          <ItemLocation>{item.item.location}</ItemLocation>
          <br />
          <ItemDate>Last Updated: {item.item.updated_at}</ItemDate>
          <br />
          <Divider />
          <AddWishList>
            <TbJewishStar />
            <span> Add to WishList </span>
          </AddWishList>
        </ItemInfo>
      </Card>
    </>
  );
};

export default ItemCard;
