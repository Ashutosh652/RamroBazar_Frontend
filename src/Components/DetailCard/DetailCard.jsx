import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsChatDots } from "react-icons/bs";
import { TbJewishStar } from "react-icons/tb";
import {
  Card,
  ItemInfo,
  ImageContainer,
  ItemTitle,
  SellerInfo,
  ProfilePic,
  ProfileInfo,
  SellerName,
  Contact,
  ChatButton,
  PipeDivider,
  ChatAdd,
  AddWishList,
  Description,
  DescriptionTitle,
  DescrptionContent,
  Details,
  DetailTitle,
  DetailKey,
  DetailValue,
  DetailRow,
  Specifications,
  NoSpecifications,
} from "./DetailCardElements";
import ImageSlider from "../ImageSlider/ImageSlider";
import { formatDate, timeSince } from "../../Services/formatDate";

const DetailCard = ({itemDetail, sellerDetail}) => {
  // const { slug } = useParams();
  // const [itemDetail, setItemDetail] = useState(null);
  // const [sellerDetail, setSellerDetail] = useState(null);

  // // const formatDate = (date) => {
  // //   return date.split("T").shift().split("-").join("/");
  // // };

  // useEffect(() => {
  //   axiosInstance.get(`/items/${slug}`).then((response) => {
  //     setItemDetail(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   if (itemDetail) {
  //     axiosInstance.get(`/users/${itemDetail.seller}`).then((response) => {
  //       setSellerDetail(response.data);
  //     });
  //   }
  // }, [itemDetail]);

  return (
    <Card>
      {itemDetail ? (
        <>
          <ImageContainer>
            <ImageSlider images={itemDetail.media} />
          </ImageContainer>
          <ItemInfo>
            <ItemTitle>
              {itemDetail.name ? (
                <>{itemDetail.name}</>
              ) : (
                <div style={{ color: "#665566" }}>Item Title Not Found</div>
              )}
            </ItemTitle>
            {sellerDetail ? (
              <SellerInfo>
                <ProfilePic src={sellerDetail.profile_pic} />
                <ProfileInfo>
                  <SellerName>
                    {sellerDetail.first_name} {sellerDetail.last_name}
                  </SellerName>
                  <br />
                  <Contact>
                    {sellerDetail.contact_number}
                    <PipeDivider>|</PipeDivider>
                    {sellerDetail.email ? (
                      sellerDetail.email
                    ) : (
                      <span style={{ color: "#665566" }}>Email Not Set Up</span>
                    )}
                  </Contact>
                  <br />
                  <ChatAdd>
                    <ChatButton>
                      <BsChatDots /> Chat Now
                    </ChatButton>
                    <PipeDivider>|</PipeDivider>
                    <AddWishList>
                      <TbJewishStar /> Add To WishList
                    </AddWishList>
                  </ChatAdd>
                </ProfileInfo>
              </SellerInfo>
            ) : (
              <span>Loading...</span>
            )}

            <Description>
              <DescriptionTitle>Description</DescriptionTitle>
              <DescrptionContent>
                {itemDetail.description ? (
                  itemDetail.description
                ) : (
                  <span style={{ color: "#665566", fontSize: "smaller" }}>
                    Description Not Available
                  </span>
                )}
              </DescrptionContent>
            </Description>
            <Details>
              <DetailTitle>Details</DetailTitle>
              {itemDetail.created_at ? (
                <DetailRow>
                  <DetailKey>Ad Created On</DetailKey>
                  <DetailValue>{timeSince(new Date(itemDetail.created_at))} ago</DetailValue>
                </DetailRow>
              ) : null}
              {itemDetail.updated_at ? (
                <DetailRow>
                  <DetailKey>Ad Last Updated On</DetailKey>
                  <DetailValue>{timeSince(new Date(itemDetail.updated_at))} ago</DetailValue>
                </DetailRow>
              ) : null}
              {itemDetail.location ? (
                <DetailRow>
                  <DetailKey>Available At</DetailKey>
                  <DetailValue>{itemDetail.location}</DetailValue>
                </DetailRow>
              ) : null}
              {itemDetail.show_price ? (
                <DetailRow>
                  <DetailKey>Price</DetailKey>
                  <DetailValue>Rs. {itemDetail.show_price}</DetailValue>
                </DetailRow>
              ) : null}
            </Details>
            <Specifications>
              <DetailTitle>Specifications</DetailTitle>
              {itemDetail.specifications.length ? (
                <>
                  {itemDetail.specifications.map((specification) => {
                    return (
                      <DetailRow key={specification.id}>
                        <DetailKey>{specification.key}</DetailKey>
                        <DetailValue>{specification.value}</DetailValue>
                      </DetailRow>
                    );
                  })}
                </>
              ) : (
                <DetailRow>
                  <NoSpecifications>
                    No Specifications Provided
                  </NoSpecifications>
                </DetailRow>
              )}
            </Specifications>
          </ItemInfo>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </Card>
  );
};

export default DetailCard;
