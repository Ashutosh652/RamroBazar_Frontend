import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Card = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  //   width: 97%;
  background-color: white;
  //   margin: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: auto;
`;

export const ImageSlider = styled.img`
  height: 7rem;
  width: 7rem;
  // border: 1px solid red;
`;

export const ItemInfo = styled.div`
  // height: 100%;
  width: 100%;
  // border: 1px solid red;
  // align-items: center;
  // vertical-align: middle;
  // display: inline;
  margin-top: auto;
  margin-bottom: auto;
  // overflow: auto;
`;

export const ImageContainer = styled.div`
  width: 70%;
  height: 70%;
  margin: 0 auto;
`;

export const ItemTitle = styled.div`
  width: 100%;
  font-size: xx-large;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const SellerInfo = styled.div`
  width: 100%;
  // height: 30%;
  // border: 1px solid green;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  // align-items: center;
  margin-top: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ProfilePic = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-top: 1%;
  margin-left: 1%;

  &:hover {
    cursor: pointer;
  }
`;

export const ProfileInfo = styled.div`
  height: 100%;
  width: 100%;
  // border: 1px solid red;
`;

export const SellerName = styled(Link)`
  font-size: large;
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

export const Contact = styled.span`
  font-size: x-small;
  color: #665566;
`;

export const ChatButton = styled(Link)`
  font-size: small;
  color: #665566;
  text-decoration: none;

  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

export const PipeDivider = styled.span`
  margin-left: 1em;
  margin-right: 1em;
`;

export const ChatAdd = styled.div`
  width: 100%;
  height: 100%;
  color: #665566;
`;

export const AddWishList = styled.span`
  color: #665566;
  font-size: small;

  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

export const Description = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const DescriptionTitle = styled.div`
  // border: 1px solid red;
  font-size: larger;
  text-align: center;
  width: 100%;
`;

export const DescrptionContent = styled.div`
  // border: 1px solid red;
  width: 100%;
  text-align: center;
  max-height: 7em;
  overflow: auto;
`;

export const Details = styled.div`
  width: 100%;
  // height: 20em;
  // border: 1px solid red;
  margin-top: 1em;
  // color: #665566;
  background-color: rgba(0, 0, 0, 0.1);
  // overflow: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 12em;
  overflow: auto;
`;

export const DetailTitle = styled.div`
  width: 100%;
  font-size: larger;
  text-align: center;
  height: 2em;
`;

export const DetailRow = styled.div`
  display: flex;
  min-height: 2em;
  align-items: center;
  border: 1px solid white;
`;

export const DetailKey = styled.div`
  width: 50%;
  // border: 1px solid white;
  text-align: center;
  margin-left: 0em;
`;

export const DetailValue = styled.div`
  width: 50%;
  // border: 1px solid white;
  text-align: center;
  margin-right: 0em;
  overflow-x: auto;
`;

export const Specifications = styled.div`
  width: 100%;
  max-height: 12em;
  margin-top: 1em;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const NoSpecifications = styled.span`
  text-align: center;
  color: #665566;
  width: 100%;
  font-size: smaller;
`;

export const EditIcon = styled.span`
  margin-left: 1em;
  color: #665566;
  font-size: small;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #000;
  }
`;

export const AddSpecificationButtonWrapper = styled.div`
  /* width: 50%; */
  margin: auto;
  text-align: center;
`;

export const AddSpecificationButton = styled.button`
  width: 7em;
`;

export const SpecificationRemoveIcon = styled.span`
  color: #8b0000;

  &:hover {
    cursor: pointer;
  }
`;
