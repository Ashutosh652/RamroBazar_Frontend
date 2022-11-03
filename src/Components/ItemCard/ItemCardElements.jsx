import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Card = styled(Link)`
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

export const ItemImage = styled.img`
  height: 7rem;
  width: 7rem;
`;

export const ItemInfo = styled.div`
  height: 100%;
  width: 100%;
`;

export const ItemTitle = styled.span`
  font-size: large;
  margin-left: 2rem;
`;

export const ItemDescription = styled.span`
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

export const ItemPrice = styled.span`
  font-size: largest;
  margin-left: 2rem;
`;

export const ItemLocation = styled.span`
  font-size: small;
  margin-left: 2rem;
  color: #665566;
`;

export const ItemDate = styled.span`
  font-size: small;
  margin-left: 2rem;
  color: #665566;
`;

export const Divider = styled.hr`
  border-top: 1px solid #bbb;
  margin-left: 2rem;
  margin-top: 1rem;
  overflow: hidden;
  width: 50%;
`;

export const AddWishList = styled.div`
  color: #665566;
  font-size: x-large;
  margin-left: 2rem;

  &:hover {
    color: #000;
    cursor: pointer;
  }
`;
